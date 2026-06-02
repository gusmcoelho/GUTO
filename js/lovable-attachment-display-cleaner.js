(function () {
  if (window.__sharkAttachmentDisplayCleaner) return;
  window.__sharkAttachmentDisplayCleaner = true;

  const STORAGE_MARKER = "storage.googleapis.com/gpt-engineer-file-uploads";
  const CONTEXT_MARKER = "[Contexto visual anexado]";
  const SUCCESS_TEXT = "Anexo enviado com sucesso.";
  const STORAGE_URL_RE = /https:\/\/storage\.googleapis\.com\/gpt-engineer-file-uploads[^\s<)]*/gi;
  const CDN_STORAGE_URL_RE = /https:\/\/lovable\.dev\/cdn-cgi\/image\/[^\s<)]*storage\.googleapis\.com\/gpt-engineer-file-uploads[^\s<)]*/gi;

  function cleanText(value) {
    if (typeof value !== "string") return value;
    if (!value.includes(CONTEXT_MARKER) && !value.includes(STORAGE_MARKER)) return value;

    let text = value.replace(/\r\n/g, "\n");
    text = text.replace(/\n*\[Contexto visual anexado\][\s\S]*$/i, "\n\n" + SUCCESS_TEXT);
    text = text.replace(/\n*\[[^\]\n]{1,180}\]:\s*(?:https:\/\/storage\.googleapis\.com\/gpt-engineer-file-uploads|https:\/\/lovable\.dev\/cdn-cgi\/image\/[^\s<)]*storage\.googleapis\.com\/gpt-engineer-file-uploads)[^\s<)]*/gi, "\n\n" + SUCCESS_TEXT);
    text = text.replace(CDN_STORAGE_URL_RE, "");
    text = text.replace(STORAGE_URL_RE, "");
    text = text.replace(/(?:\.\.\.)?\s*Show more\b/gi, "");
    text = text.replace(new RegExp("(" + SUCCESS_TEXT.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")(?:\\s*\\1)+", "g"), "$1");
    text = text.replace(new RegExp("(" + SUCCESS_TEXT.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")\\s*\\S*$", "g"), "$1");
    text = text.replace(/(?:\n\s*){3,}/g, "\n\n");
    text = text.replace(/[ \t]{2,}/g, " ");
    return text;
  }

  function hideStorageLinks(root) {
    if (!root || root.nodeType !== Node.ELEMENT_NODE) return;
    root.querySelectorAll("a, button, span, code").forEach((element) => {
      const href = element.getAttribute && element.getAttribute("href") || "";
      const label = element.textContent || "";
      const shouldHide = href.includes(STORAGE_MARKER)
        || label.includes(STORAGE_MARKER)
        || (label.trim() === "Show more" && element.parentElement && element.parentElement.textContent && element.parentElement.textContent.includes(STORAGE_MARKER));

      if (shouldHide) {
        element.textContent = "";
        element.setAttribute("aria-hidden", "true");
        element.style.display = "none";
      }
    });
  }

  function cleanTextNodes(root) {
    if (!root || root.nodeType !== Node.ELEMENT_NODE) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];

    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.nodeValue && (node.nodeValue.includes(CONTEXT_MARKER) || node.nodeValue.includes(STORAGE_MARKER))) {
        nodes.push(node);
      }
    }

    nodes.forEach((node) => {
      const cleaned = cleanText(node.nodeValue);
      if (cleaned !== node.nodeValue) node.nodeValue = cleaned;
    });
  }

  function cleanElements(root) {
    if (!root || root.nodeType !== Node.ELEMENT_NODE) return;
    const candidates = [];
    if (
      root !== document.body
      && root !== document.documentElement
      && root.textContent
      && root.textContent.length < 5000
      && root.childElementCount < 12
      && (root.textContent.includes(CONTEXT_MARKER) || root.textContent.includes(STORAGE_MARKER))
    ) {
      candidates.push(root);
    }
    root.querySelectorAll("p, div, span, pre, code, li").forEach((element) => {
      if (
        element.textContent
        && element.textContent.length < 5000
        && element.childElementCount < 12
        && (element.textContent.includes(CONTEXT_MARKER) || element.textContent.includes(STORAGE_MARKER))
      ) {
        candidates.push(element);
      }
    });

    candidates.forEach((element) => {
      if (
        element.dataset
        && element.dataset.sharkAttachmentCleaned === "1"
        && !(element.textContent || "").includes(STORAGE_MARKER)
      ) return;
      const text = element.textContent || "";
      const cleaned = cleanText(text);
      if (cleaned !== text && cleaned.length < 2000) {
        element.textContent = cleaned;
        if (element.dataset) element.dataset.sharkAttachmentCleaned = "1";
      }
    });
  }

  function clean(root) {
    cleanTextNodes(root);
    hideStorageLinks(root);
    cleanElements(root);
  }

  const scheduleClean = (() => {
    let timer = 0;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => clean(document.body), 100);
    };
  })();

  if (document.body) clean(document.body);

  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.TEXT_NODE && node.nodeValue && (node.nodeValue.includes(CONTEXT_MARKER) || node.nodeValue.includes(STORAGE_MARKER))) {
          node.nodeValue = cleanText(node.nodeValue);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          clean(node);
        }
      }
    }
    scheduleClean();
  }).observe(document.documentElement, { childList: true, subtree: true });
}());
