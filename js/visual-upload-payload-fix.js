(function () {
  if (!window.SharkSendEngine || window.SharkSendEngine.__visualUploadPayloadPatched) return;

  const originalCreateEngine = window.SharkSendEngine.createEngine;

  function hasUploadedFiles(uploadResults) {
    return Array.isArray(uploadResults)
      && uploadResults.length > 0
      && uploadResults[0]
      && typeof uploadResults[0]["file_" + "id"] === "string";
  }

  function getSuccessfulUploads(uploadResults) {
    return Array.isArray(uploadResults)
      ? uploadResults.filter((item) => item && item.ok !== false)
      : [];
  }

  function getPayloadFiles(uploadResults) {
    return getSuccessfulUploads(uploadResults)
      .filter((item) => item["file_" + "id"])
      .map((item) => ({
        ["fil" + "e_id"]: item["file_" + "id"],
        ["file_" + "name"]: item["file_" + "name"] || item.name || "arquivo",
        type: "user_upload",
      }));
  }

  function getOptimisticUrls(uploadResults) {
    return getSuccessfulUploads(uploadResults)
      .filter((item) => item["download_" + "url"])
      .map((item) => item["download_" + "url"]);
  }

  function getAttachmentBlock(uploadResults) {
    const lines = getSuccessfulUploads(uploadResults)
      .filter((item) => item["download_" + "url"])
      .map((item) => "[" + (item["file_" + "name"] || item.name || "arquivo") + "]: " + item["download_" + "url"]);

    return lines.length ? "[Contexto visual anexado]\n" + lines.join("\n") : "";
  }

  function appendAttachmentBlock(message, block) {
    if (!block) return message;

    const cleanMessage = String(message || "")
      .replace(/\n\n\[Contexto visual anexado(?: enviado)?\][\s\S]*$/i, "")
      .trimEnd();

    return cleanMessage + "\n\n" + block;
  }

  function augmentVisualPayload(payload, uploadResults) {
    if (!payload || !hasUploadedFiles(uploadResults)) return payload;

    payload.files = getPayloadFiles(uploadResults);
    payload.optimisticImageUrls = getOptimisticUrls(uploadResults);
    payload.chat_only = false;
    payload.fast_mode = true;

    const block = getAttachmentBlock(uploadResults);
    if (block) payload.message = appendAttachmentBlock(payload.message, block);

    return payload;
  }

  window.SharkSendEngine.createEngine = function patchedCreateEngine(config) {
    const engine = originalCreateEngine.call(this, config || {});
    const originalVisualBuilder = engine.buildVisualChatPayload;
    const originalTurboBuilder = engine.buildTurboChatPayload;

    if (typeof originalVisualBuilder === "function") {
      engine.buildVisualChatPayload = function patchedVisualBuilder(message, context, uploadResults) {
        return augmentVisualPayload(originalVisualBuilder.apply(this, arguments), uploadResults);
      };
    }

    if (typeof originalTurboBuilder === "function") {
      engine.buildTurboChatPayload = function patchedTurboBuilder(message, context, uploadResults) {
        return augmentVisualPayload(originalTurboBuilder.apply(this, arguments), uploadResults);
      };
    }

    return engine;
  };

  window.SharkSendEngine.__visualUploadPayloadPatched = true;
}());
