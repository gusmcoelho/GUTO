(!(function () {
  function _0x2e346f(_0xeb6c98, _0x415507) {
    const _0x5565bc = (_0xeb6c98 || "")["trim"](),
      _0x44f873 = _0x415507["replace"](/[.*+?^${}()|[\]\\]/g, "\x5c$&"),
      _0x46cee7 = new RegExp("^" + _0x44f873, "i");
    return _0x5565bc
      ? _0x46cee7["test"](_0x5565bc)
        ? _0x5565bc
        : /^\d+\.\s+/m["test"](_0x5565bc)
          ? _0x415507 + "\x0a" + _0x5565bc
          : _0x415507 + "\x0a1.\x20" + _0x5565bc
      : _0x415507;
  }
  function _0x280e3b(_0xcd09fa) {
    const _0x43841b = String(_0xcd09fa || "")["toLowerCase"]();
    return /(erro|bug|corrigir|consertar|refator|analisar|problema|falha|issue|fix)/[
      "test"
    ](_0x43841b)
      ? "Você\x20é\x20um\x20engenheiro\x20de\x20software\x20sênior\x20focado\x20em\x20diagnóstico\x20e\x20correção.\x20Pense\x20antes\x20de\x20editar,\x20identifique\x20a\x20causa\x20raiz,\x20preserve\x20a\x20estrutura\x20existente,\x20faça\x20mudanças\x20seguras\x20e\x20resolva\x20o\x20problema\x20com\x20qualidade\x20de\x20produção."
      : /(visual|layout|ui|ux|design|estilo|bot[a\xe3]o|cor|anima[c\xe7][a\xe3]o|p[\xe1a]gina|responsiv)/[
            "test"
          ](_0x43841b)
        ? "Você\x20é\x20um\x20engenheiro\x20frontend\x20sênior\x20com\x20foco\x20em\x20qualidade\x20visual\x20e\x20implementação\x20consistente.\x20Pense\x20antes\x20de\x20editar,\x20preserve\x20a\x20estrutura\x20existente,\x20faça\x20mudanças\x20seguras\x20e\x20entregue\x20uma\x20solução\x20visual\x20sólida,\x20limpa\x20e\x20coerente."
        : "Você\x20é\x20um\x20arquiteto\x20técnico\x20sênior.\x20Pense\x20antes\x20de\x20editar,\x20entenda\x20a\x20intenção\x20principal\x20do\x20pedido,\x20preserve\x20a\x20estrutura\x20existente,\x20priorize\x20mudanças\x20seguras\x20e\x20implemente\x20com\x20profundidade,\x20consistência\x20e\x20qualidade\x20de\x20produção.";
  }
  window["SharkSendEngine"] = {
    createEngine: function (_0x16d038) {
      function _0x503fbd(_0x488ecd, _0x3b1fe0, _0x5d61a0) {
        const _0x47af38 = _0x16d038["createMessageId"]("umsg"),
          _0x5e800a = Array["isArray"](_0x5d61a0) ? _0x5d61a0 : [],
          _0x1da8f7 =
            _0x5e800a["length"] > 0x0 &&
            _0x5e800a[0x0] &&
            "string" == typeof _0x5e800a[0x0]["file" + "_id"],
          _0x474d62 = _0x1da8f7
            ? _0x5e800a["filter"]((_0x2d9b53) => !0x1 !== _0x2d9b53["ok"])[
                "map"
              ]((_0x151e65) => ({
                ["fil" + "e_id"]: _0x151e65["file" + "_id"],
                ["file" + "_name"]: _0x151e65["file" + "_name"],
                type: "user_upload",
              }))
            : _0x5e800a,
          _0x2d0ac0 = _0x1da8f7
            ? _0x5e800a["filter"](
                (_0xe602c6) =>
                  !0x1 !== _0xe602c6["ok"] && _0xe602c6["download" + "_url"],
              )["map"]((_0x3d262c) => _0x3d262c["download" + "_url"])
            : [],
          _0x5ea176 = _0x1da8f7
            ? _0x5e800a["filter"](
                (_0x4de596) =>
                  !0x1 !== _0x4de596["ok"] && _0x4de596["download" + "_url"],
              )
                ["map"](
                  (_0x5510a1) =>
                    "[" +
                    (_0x5510a1["file" + "_name"] ||
                      _0x5510a1["name"] ||
                      "arquivo") +
                    "]:\x20" +
                    _0x5510a1["download" + "_url"],
                )
                ["join"]("\x0a")
            : "";
        return {
          id: _0x47af38,
          message:
            _0x2e346f(
              _0x488ecd ||
                "Apply\x20the\x20requested\x20visual\x20edits\x20from\x20the\x20attached\x20files.",
              _0x16d038["defaultVisualEditPrompt"],
            ) +
            (_0x5ea176
              ? "\x0a\x0a[Contexto\x20visual\x20anexado\x20enviado]"
              : ""),
          files: _0x474d62,
          ["optimisti" + "cImageUrls"]: _0x2d0ac0,
          ["selected" + "_elements"]: Array["isArray"](
            _0x3b1fe0["selectedElements"],
          )
            ? _0x3b1fe0["selectedElements"]
            : [],
          ["chat" + "_only"]: !0x1,
          ["fast" + "_mode"]: !!0x1,
          ["ai_mes" + "sage_id"]: _0x16d038["createMessageId"]("aimsg"),
          ["thre" + "ad_id"]: "main",
          ["curren" + "t_page"]: _0x3b1fe0["currentPage"] || "/",
          ["current_vie" + "wport_width"]:
            Number(_0x3b1fe0["currentViewportWidth"]) || 0x5a0,
          ["current_vie" + "wport_height"]:
            Number(_0x3b1fe0["currentViewportHeight"]) || 0x384,
          ["current_vi" + "ewport_dpr"]:
            Number(_0x3b1fe0["currentViewportDpr"]) || 0x1,
          view: _0x3b1fe0["view"] || "preview",
          ["view_des" + "cription"]:
            _0x3b1fe0["viewDescription"] ||
            "The\x20user\x20is\x20currently\x20viewing\x20the\x20preview.",
          model: null,
        };
      }
      return {
        buildAttachmentPayload: async function (_0x5ac8a1) {
          return Promise["all"](
            _0x5ac8a1["map"](async (_0x277c3b) => ({
              name: _0x277c3b["name"],
              type: _0x277c3b["type"],
              content: await _0x16d038["fileToBase64"](_0x277c3b),
            })),
          );
        },
        uploadFilesForProject: async function (
          _0x552ce1,
          _0x5e5982,
          _0x2b1048,
          _0x34b7cd,
        ) {
          if (!_0x5e5982 || 0x0 === _0x5e5982["length"]) return [];
          if (!_0x552ce1 || !_0x552ce1["id"])
            throw new Error(
              "Aba\x20do\x20Lovable\x20não\x20encontrada\x20para\x20upload.",
            );
          const _0x3a1ef2 = await Promise["all"](
              _0x5e5982["map"](
                (_0x3e76ef) =>
                  new Promise((_0x3644e9, _0x14c80f) => {
                    const _0x50a2be = new FileReader();
                    ((_0x50a2be["onload"] = () =>
                      _0x3644e9({
                        name: _0x3e76ef["name"],
                        type: _0x3e76ef["type"],
                        size: _0x3e76ef["size"],
                        b64: _0x50a2be["result"]["split"](",")[0x1],
                      })),
                      (_0x50a2be["onerror"] = _0x14c80f),
                      _0x50a2be["readAsDataURL"](_0x3e76ef));
                  }),
              ),
            ),
            _0x37ca7b = _0x16d038["endpointOrigin"],
            _0x659796 = _0x16d038["getClientGitSha"](),
            [{ result: _0x48d759 } = {}] = await chrome["scripting"][
              "executeScript"
            ]({
              target: { tabId: _0x552ce1["id"] },
              world: "MAIN",
              args: [
                _0x37ca7b,
                _0x2b1048,
                _0x659796,
                _0x3a1ef2,
                _0x34b7cd || null,
              ],
              func: async (
                _0x460d13,
                _0x473d92,
                _0x34553e,
                _0x518fc9,
                _0x39d698,
              ) => {
                function _0x1a2c5c(_0x4cd34e) {
                  if (!_0x4cd34e || "string" != typeof _0x4cd34e) return null;
                  const _0x4dcca4 = _0x4cd34e["split"](".");
                  if (0x3 !== _0x4dcca4["length"]) return null;
                  try {
                    const _0x17c73b = _0x4dcca4[0x1]
                        ["replace"](/-/g, "+")
                        ["replace"](/_/g, "/"),
                      _0x35c427 = _0x17c73b["padEnd"](
                        _0x17c73b["length"] +
                          ((0x4 - (_0x17c73b["length"] % 0x4)) % 0x4),
                        "=",
                      );
                    return JSON["parse"](atob(_0x35c427));
                  } catch (_0x47f7bc) {
                    return null;
                  }
                }
                function _0x1dbfe1(_0x54fb8f) {
                  if (!_0x54fb8f || "string" != typeof _0x54fb8f) return null;
                  const _0x46e2b7 = _0x54fb8f["trim"]();
                  if (
                    /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/["test"](
                      _0x46e2b7,
                    )
                  )
                    return _0x46e2b7;
                  try {
                    const _0x1a1e31 = JSON["parse"](_0x46e2b7);
                    if (_0x1a1e31 && "object" == typeof _0x1a1e31)
                      return (
                        [
                          _0x1a1e31["access" + "_token"],
                          _0x1a1e31["token"],
                          _0x1a1e31["currentSession"]?.["access" + "_token"],
                          _0x1a1e31["session"]?.["access" + "_token"],
                        ]["find"](
                          (_0x380c40) =>
                            "string" == typeof _0x380c40 && _0x380c40["trim"](),
                        ) || null
                      );
                  } catch (_0x2d14dd) {}
                  return null;
                }
                function _0x4b1c81(_0x324231) {
                  const _0xd73c07 = _0x1a2c5c(_0x324231);
                  return _0xd73c07
                    ? "project" === _0xd73c07["access" + "_type"] ||
                      (_0xd73c07["project" + "_id"] &&
                        _0xd73c07["sub"] === _0xd73c07["project" + "_id"])
                      ? "lovable"
                      : "auth"
                    : null;
                }
                function _0x53a692(_0x4cb184) {
                  const _0x56f601 = {};
                  _0x56f601["auth"] = null;
                  _0x56f601["lovable"] = null;
                  _0x56f601["userId"] = null;
                  const _0x1eb86a = _0x56f601;
                  for (
                    let _0x259970 = 0x0;
                    _0x259970 < _0x4cb184["length"];
                    _0x259970++
                  ) {
                    const _0x4a8ab6 = _0x4cb184["key"](_0x259970);
                    if (!_0x4a8ab6) continue;
                    const _0x5d8d7e = _0x1dbfe1(
                      _0x4cb184["getItem"](_0x4a8ab6),
                    );
                    if (!_0x5d8d7e) continue;
                    const _0x399503 = _0x4b1c81(_0x5d8d7e);
                    if ("auth" === _0x399503 && !_0x1eb86a["auth"]) {
                      _0x1eb86a["auth"] = _0x5d8d7e;
                      const _0x3a7764 = _0x1a2c5c(_0x5d8d7e);
                      _0x3a7764?.["sub"] &&
                        (_0x1eb86a["userId"] = _0x3a7764["sub"]);
                    }
                    if (
                      ("lovable" !== _0x399503 ||
                        _0x1eb86a["lovable"] ||
                        (_0x1eb86a["lovable"] = _0x5d8d7e),
                      _0x1eb86a["auth"] && _0x1eb86a["lovable"])
                    )
                      break;
                  }
                  return _0x1eb86a;
                }
                const _0x22f739 = _0x53a692(window["localStorage"]),
                  _0x4e96b1 = _0x53a692(window["sessionStorage"]),
                  _0x376db6 = _0x22f739["auth"] || _0x4e96b1["auth"] || null,
                  _0xfd6686 =
                    _0x22f739["lovable"] || _0x4e96b1["lovable"] || null,
                  _0x53831f = _0x22f739["userId"] || _0x4e96b1["userId"] || "",
                  _0x507654 = [_0x376db6, _0xfd6686, _0x1dbfe1(_0x39d698)][
                    "filter"
                  ](
                    (_0xdb2181, _0x37a655, _0x222d7e) =>
                      "string" == typeof _0xdb2181 &&
                      _0xdb2181["trim"]() &&
                      _0x222d7e["indexOf"](_0xdb2181) === _0x37a655,
                  );
                async function _0x3c587f(_0xdf8f83, _0x2ed5f) {
                  let _0x3e2ce3 = null;
                  for (const _0x111648 of _0x507654) {
                    const _0x288154 = { ...(_0x2ed5f["headers"] || {}) };
                    const _0x5bb61e = _0x288154;
                    _0x111648
                      ? (_0x5bb61e["Authorization"] = "Bearer\x20" + _0x111648)
                      : delete _0x5bb61e["Authorization"];
                    try {
                      const _0x500f38 = { ..._0x2ed5f };
                      _0x500f38["headers"] = _0x5bb61e;
                      const _0x501d39 = await fetch(_0xdf8f83, _0x500f38),
                        _0x4e4067 = await _0x501d39["text"]();
                      const _0x406a3d = {};
                      _0x406a3d["ok"] = _0x501d39["ok"];
                      _0x406a3d["status"] = _0x501d39["status"];
                      _0x406a3d["text"] = _0x4e4067;
                      _0x406a3d["_resp"] = _0x501d39;
                      if (((_0x3e2ce3 = _0x406a3d), _0x501d39["ok"]))
                        return _0x3e2ce3;
                      const _0x5f7769 = (_0x4e4067 || "")["toLowerCase"]();
                      if (
                        !(
                          0x191 === _0x501d39["status"] ||
                          0x193 === _0x501d39["status"] ||
                          _0x5f7769["includes"](
                            "authorization\x20header\x20required",
                          ) ||
                          _0x5f7769["includes"]("forbidden") ||
                          _0x5f7769["includes"]("invalid\x20token") ||
                          _0x5f7769["includes"]("jwt")
                        )
                      )
                        return _0x3e2ce3;
                    } catch (_0x266e67) {
                      _0x3e2ce3 = {
                        ok: !0x1,
                        status: 0x0,
                        text: "",
                        error: _0x266e67?.["message"] || String(_0x266e67),
                      };
                    }
                  }
                  const _0xa37e14 = {};
                  _0xa37e14["ok"] = !0x1;
                  _0xa37e14["status"] = 0x0;
                  _0xa37e14["text"] = "";
                  _0xa37e14["error"] = "no\x20candidates";
                  return _0x3e2ce3 || _0xa37e14;
                }
                _0x507654["push"](null);
                const _0x566ce7 = [];
                for (const _0x149925 of _0x518fc9)
                  try {
                    const _0x57ce0c = {};
                    _0x57ce0c["Accept"] = "*/*";
                    _0x57ce0c["Content-Type"] = "application/json";
                    _0x57ce0c["x-client-git-sha"] = _0x34553e;
                    const _0x357b11 = ([0x989680] +
                        -0x3e8 +
                        -0xfa0 +
                        -0x1f40 +
                        -0x174876e800)["replace"](/[018]/g, (_0x262d43) =>
                        (_0x262d43 ^
                          (crypto["getRandomValues"](new Uint8Array(0x1))[0x0] &
                            (0xf >> (_0x262d43 / 0x4))))["toString"](0x10),
                      ),
                      _0x2952eb = await _0x3c587f(
                        _0x460d13 + "/files/" + "generate-" + "upload-url",
                        {
                          method: "POST",
                          credentials: "include",
                          headers: _0x57ce0c,
                          body: JSON["stringify"]({
                            ["file" + "_name"]: _0x357b11,
                            ["conten" + "t_type"]: _0x149925["type"],
                            status: "uploading",
                            ["proje" + "ct_id"]: _0x473d92,
                            ["original_" + "file_name"]: _0x149925["name"],
                            ["file_si" + "ze_bytes"]: _0x149925["size"],
                            ["original_fil" + "e_size_bytes"]:
                              _0x149925["size"],
                          }),
                        },
                      );
                    if (!_0x2952eb["ok"]) {
                      (console["error"](
                        "[Shark\x20Upload]\x20generate-" +
                          "upload-url\x20failed",
                        _0x2952eb["status"],
                        _0x2952eb["text"],
                      ),
                        _0x566ce7["push"]({
                          ok: !0x1,
                          ["file" + "_name"]: _0x149925["name"],
                          error:
                            "generate-" +
                            "upload-url\x20" +
                            _0x2952eb["status"] +
                            (_0x2952eb["text"]
                              ? ":\x20" + _0x2952eb["text"]["slice"](0x0, 0xc8)
                              : ""),
                        }));
                      continue;
                    }
                    let _0x573bf;
                    try {
                      _0x573bf = JSON["parse"](_0x2952eb["text"]);
                    } catch (_0x14de2a) {
                      _0x566ce7["push"]({
                        ok: !0x1,
                        ["file" + "_name"]: _0x149925["name"],
                        error:
                          "invalid\x20JSON\x20from\x20upload-url:\x20" +
                          _0x2952eb["text"]["slice"](0x0, 0xc8),
                      });
                      continue;
                    }
                    const _0x3634af = _0x573bf["url"];
                    if (!_0x3634af) {
                      (console["error"](
                        "[Shark\x20Upload]\x20no\x20url\x20in\x20response",
                        _0x573bf,
                      ),
                        _0x566ce7["push"]({
                          ok: !0x1,
                          ["file" + "_name"]: _0x149925["name"],
                          error:
                            "no\x20url\x20in\x20response:\x20" +
                            JSON["stringify"](_0x573bf)["slice"](0x0, 0xc8),
                        }));
                      continue;
                    }
                    let _0x26e7fe = _0x53831f;
                    try {
                      const _0x3a1053 = new URL(_0x3634af)["pathname"]
                          ["split"]("/")
                          ["filter"](Boolean),
                        _0x255cb3 = _0x3a1053["indexOf"](
                          "gpt-engineer-file-uploads",
                        );
                      _0x255cb3 >= 0x0 &&
                        _0x3a1053[_0x255cb3 + 0x1] &&
                        (_0x26e7fe = _0x3a1053[_0x255cb3 + 0x1]);
                    } catch (_0x2d5086) {}
                    const _0x270d31 = atob(_0x149925["b64"]),
                      _0x4aea8a = new Uint8Array(_0x270d31["length"]);
                    for (
                      let _0x43cab7 = 0x0;
                      _0x43cab7 < _0x270d31["length"];
                      _0x43cab7++
                    )
                      _0x4aea8a[_0x43cab7] = _0x270d31["charCodeAt"](_0x43cab7);
                    const _0x50952d = {};
                    _0x50952d["Content-Type"] = _0x149925["type"];
                    const _0x484a98 = {};
                    _0x484a98["method"] = "PUT";
                    _0x484a98["body"] = _0x4aea8a;
                    _0x484a98["headers"] = _0x50952d;
                    const _0x315bdc = await fetch(_0x3634af, _0x484a98);
                    if (!_0x315bdc["ok"]) {
                      const _0x4a3da6 = await _0x315bdc["text"]()["catch"](
                        () => "",
                      );
                      (console["error"](
                        "[Shark\x20Upload]\x20GCS\x20PUT\x20failed",
                        _0x315bdc["status"],
                        _0x4a3da6,
                      ),
                        _0x566ce7["push"]({
                          ok: !0x1,
                          ["file" + "_name"]: _0x149925["name"],
                          error:
                            "GCS\x20PUT\x20" +
                            _0x315bdc["status"] +
                            (_0x4a3da6
                              ? ":\x20" + _0x4a3da6["slice"](0x0, 0xc8)
                              : ""),
                        }));
                      continue;
                    }
                    let _0x153ca7 = "";
                    try {
                      const _0x2541db = {};
                      _0x2541db["Accept"] = "*/*";
                      _0x2541db["Content-Type"] = "application/json";
                      _0x2541db["x-client-git-sha"] = _0x34553e;
                      const _0x28d3c4 = {
                        ["dir_" + "name"]: _0x26e7fe,
                        ["file" + "_name"]: _0x357b11,
                      };
                      const _0x53f3e8 = await _0x3c587f(
                        _0x460d13 + "/files/" + "generate-" + "download-url",
                        {
                          method: "POST",
                          credentials: "include",
                          headers: _0x2541db,
                          body: JSON["stringify"](_0x28d3c4),
                        },
                      );
                      if (_0x53f3e8["ok"])
                        try {
                          _0x153ca7 =
                            JSON["parse"](_0x53f3e8["text"])["url"] || "";
                        } catch (_0x16e819) {}
                      else
                        console["warn"](
                          "[Shark\x20Upload]\x20generate-" +
                            "download-url\x20failed",
                          _0x53f3e8["status"],
                          _0x53f3e8["text"],
                        );
                    } catch (_0x37b41f) {}
                    const _0x4f52fb = {
                      ["fil" + "e_id"]: _0x357b11,
                      ["file" + "_name"]: _0x149925["name"],
                      ["downlo" + "ad_url"]: _0x153ca7,
                    };
                    _0x4f52fb["ok"] = !0x0;
                    _0x566ce7["push"](_0x4f52fb);
                  } catch (_0x109337) {
                    _0x566ce7["push"]({
                      ok: !0x1,
                      ["file" + "_name"]: _0x149925["name"],
                      error: String(
                        (_0x109337 && _0x109337["message"]) || _0x109337,
                      ),
                    });
                  }
                return _0x566ce7;
              },
            });
          return _0x48d759 || [];
        },
        executeLovableChatRequest: async function (
          _0x2b1e66,
          _0x54e03a,
          _0xc46782,
        ) {
          const _0x329153 =
            await _0x16d038["getRequestExecutionTab"](_0x2b1e66);
          if (!_0x329153?.["id"]) {
            const _0x3bd4cb =
              await _0x16d038["collectExecutionTabDiagnostics"](_0x2b1e66);
            throw (
              console["warn"](
                "[Shark\x20Code\x20Mode]\x20Nenhuma\x20aba\x20de\x20execucao\x20encontrada.",
                _0x3bd4cb,
              ),
              new Error(
                "Abra\x20a\x20aba\x20do\x20editor\x20em\x20lovable.dev\x20para\x20esse\x20projeto\x20e\x20tente\x20novamente.\x20" +
                  _0x16d038["formatExecutionTabDiagnostics"](_0x3bd4cb),
              )
            );
          }
          "function" == typeof _0x16d038["syncSessionFromTab"] &&
            (await _0x16d038["syncSessionFromTab"](_0x329153));
          const _0x2d0f97 =
            (await _0x16d038["resolveProjectIdForTab"](_0x329153)) || _0x2b1e66;
          if (!_0x2d0f97)
            throw new Error(
              "Nenhum\x20projeto\x20Lovable\x20ativo\x20foi\x20detectado.\x20Abra\x20o\x20projeto\x20no\x20navegador\x20e\x20tente\x20novamente.",
            );
          _0x16d038["onProjectResolved"](_0x2d0f97);
          const _0x7f3578 = {};
          _0x7f3578["tabId"] = _0x329153["id"];
          const [{ result: _0xb9002c } = {}] = await chrome["scripting"][
            "executeScript"
          ]({
            target: _0x7f3578,
            world: "MAIN",
            args: [
              ((_0x20a982 = _0x16d038["endpointOrigin"]),
              (_0x5788ae = _0x2d0f97),
              _0x20a982 + "/pro" + "jects/" + _0x5788ae + "/ch" + "at"),
              _0x54e03a,
              _0x16d038["getClientGitSha"](),
              _0xc46782 || null,
            ],
            func: async (_0x5e0af3, _0x200f7c, _0x3a5f29, _0x181a44) => {
              function _0x2fff66(_0x585012) {
                if (!_0x585012) return null;
                const _0x446143 = _0x585012["split"](".");
                if (0x3 !== _0x446143["length"]) return null;
                try {
                  const _0x230768 = _0x446143[0x1]
                      ["replace"](/-/g, "+")
                      ["replace"](/_/g, "/"),
                    _0x37ab5f = _0x230768["padEnd"](
                      _0x230768["length"] +
                        ((0x4 - (_0x230768["length"] % 0x4)) % 0x4),
                      "=",
                    );
                  return JSON["parse"](atob(_0x37ab5f));
                } catch (_0x40fce8) {
                  return null;
                }
              }
              function _0x1cf8a1(_0x51a527) {
                const _0x19b3ad = _0x2fff66(_0x51a527);
                return _0x19b3ad
                  ? "project" === _0x19b3ad["access_type"] ||
                    (_0x19b3ad["project" + "_id"] &&
                      _0x19b3ad["sub"] === _0x19b3ad["project" + "_id"])
                    ? "lovable"
                    : "auth"
                  : null;
              }
              function _0x20fec0(_0x343c2d) {
                if (!_0x343c2d || "string" != typeof _0x343c2d) return null;
                const _0x15fe34 = _0x343c2d["trim"]();
                if (!_0x15fe34) return null;
                if (
                  /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/["test"](
                    _0x15fe34,
                  )
                )
                  return _0x15fe34;
                try {
                  const _0x3c0d93 = JSON["parse"](_0x15fe34);
                  if (_0x3c0d93 && "object" == typeof _0x3c0d93)
                    return (
                      [
                        _0x3c0d93["access_token"],
                        _0x3c0d93["token"],
                        _0x3c0d93["currentSession"] &&
                          _0x3c0d93["currentSession"]["access_token"],
                        _0x3c0d93["session"] &&
                          _0x3c0d93["session"]["access_token"],
                      ]["find"](
                        (_0x20728f) =>
                          "string" == typeof _0x20728f && _0x20728f["trim"](),
                      ) || null
                    );
                } catch (_0x53f16b) {
                  return null;
                }
                return null;
              }
              function _0x15b49e(_0x5e5e59) {
                const _0x337e8e = {};
                _0x337e8e["authToken"] = null;
                _0x337e8e["lovableToken"] = null;
                const _0x232534 = _0x337e8e;
                for (
                  let _0x2f154e = 0x0;
                  _0x2f154e < _0x5e5e59["length"];
                  _0x2f154e += 0x1
                ) {
                  const _0x29d6ea = _0x5e5e59["key"](_0x2f154e);
                  if (!_0x29d6ea) continue;
                  const _0x229601 = _0x20fec0(_0x5e5e59["getItem"](_0x29d6ea)),
                    _0x53fda1 = _0x1cf8a1(_0x229601);
                  if (
                    ("auth" !== _0x53fda1 || _0x232534["authToken"]
                      ? "lovable" === _0x53fda1 &&
                        !_0x232534["lovableToken"] &&
                        (_0x232534["lovableToken"] = _0x229601)
                      : (_0x232534["authToken"] = _0x229601),
                    _0x232534["authToken"] && _0x232534["lovableToken"])
                  )
                    break;
                }
                return _0x232534;
              }
              const _0x2f1b94 = _0x15b49e(window["localStorage"]),
                _0x20ab84 = _0x15b49e(window["sessionStorage"]),
                _0x6428bf = [
                  _0x2f1b94["authToken"] || _0x20ab84["authToken"] || null,
                  _0x2f1b94["lovableToken"] ||
                    _0x20ab84["lovableToken"] ||
                    null,
                  _0x181a44,
                ]["filter"](
                  (_0xf46690, _0x504758, _0x158739) =>
                    "string" == typeof _0xf46690 &&
                    _0xf46690["trim"]() &&
                    _0x158739["indexOf"](_0xf46690) === _0x504758,
                );
              _0x6428bf["push"](null);
              let _0xdffdc0 = null;
              for (const _0x40c04d of _0x6428bf)
                try {
                  const _0xe7de50 = {};
                  _0xe7de50["Accept"] = "*/*";
                  _0xe7de50["Content-Type"] = "application/json";
                  _0xe7de50["x-client-git-sha"] = _0x3a5f29;
                  const _0x168222 = _0xe7de50;
                  _0x40c04d &&
                    (_0x168222["Authorization"] = "Bearer\x20" + _0x40c04d);
                  const _0x42687f = await fetch(_0x5e0af3, {
                      method: "POST",
                      credentials: "include",
                      headers: _0x168222,
                      body: JSON["stringify"](_0x200f7c),
                    }),
                    _0xbfe7e4 = await _0x42687f["text"]();
                  const _0x14cdac = {};
                  _0x14cdac["ok"] = _0x42687f["ok"];
                  _0x14cdac["status"] = _0x42687f["status"];
                  _0x14cdac["text"] = _0xbfe7e4;
                  if (((_0xdffdc0 = _0x14cdac), _0x42687f["ok"]))
                    return _0xdffdc0;
                  const _0x541ae2 = (_0xbfe7e4 || "")["toLowerCase"]();
                  if (
                    !(
                      0x191 === _0x42687f["status"] ||
                      0x193 === _0x42687f["status"] ||
                      _0x541ae2["includes"](
                        "authorization\x20header\x20required",
                      ) ||
                      _0x541ae2["includes"]("forbidden") ||
                      _0x541ae2["includes"]("invalid\x20token") ||
                      _0x541ae2["includes"]("jwt")
                    )
                  )
                    return _0xdffdc0;
                } catch (_0x4d38d8) {
                  _0xdffdc0 = {
                    ok: !0x1,
                    status: 0x0,
                    text: "",
                    error:
                      _0x4d38d8 && _0x4d38d8["message"]
                        ? _0x4d38d8["message"]
                        : String(_0x4d38d8),
                  };
                }
              const _0xb06f7a = {};
              _0xb06f7a["ok"] = !0x1;
              _0xb06f7a["status"] = 0x0;
              _0xb06f7a["text"] = "";
              _0xb06f7a["error"] = "Authorization\x20header\x20required";
              return _0xdffdc0 || _0xb06f7a;
            },
          });
          var _0x20a982, _0x5788ae;
          if (!_0xb9002c)
            throw new Error(
              "Nao\x20foi\x20possivel\x20executar\x20a\x20requisicao\x20na\x20aba\x20do\x20Lovable.",
            );
          if (_0xb9002c["error"]) throw new Error(_0xb9002c["error"]);
          return _0xb9002c;
        },
        buildVisualChatPayload: _0x503fbd,
        getTurboSystemPrompt: _0x280e3b,
        buildTurboChatPayload: function (_0x15d62d, _0x453faa, _0x139ddb) {
          const _0x477700 = _0x503fbd(_0x15d62d, _0x453faa, _0x139ddb);
          return (
            (_0x477700["model"] = _0x16d038["turboModelName"]),
            (_0x477700["fast" + "_mode"] = !!0x1),
            (_0x477700["mode"] = "think"),
            (_0x477700["stream"] = !!0x1),
            (_0x477700["system"] = _0x280e3b(_0x15d62d)),
            _0x477700
          );
        },
      };
    },
  };
})(),
  (function () {
    if (
      !window["SharkSendEngine"] ||
      window["SharkSendEngine"]["__directFallbackPatched"]
    )
      return;
    const _0x946876 = window["SharkSendEngine"]["createEngine"];
    function _0x4ceaa8(_0x6773a6) {
      return new Promise((_0x50ff13) => {
        chrome["storage"]["local"]["get"](_0x6773a6, (_0x1c46cf) =>
          _0x50ff13(_0x1c46cf || {}),
        );
      });
    }
    function _0x3c4a6b(_0x37660e) {
      const _0x5a3913 = _0x37660e["filter"](
        (_0x3aacff, _0x45cc6f, _0x2c1cbc) =>
          "string" == typeof _0x3aacff &&
          _0x3aacff["trim"]() &&
          _0x2c1cbc["indexOf"](_0x3aacff) === _0x45cc6f,
      );
      return (_0x5a3913["push"](null), _0x5a3913);
    }
    function _0x4d747e(_0x131c2b, _0x3242ab) {
      const _0x494c71 = String(_0x3242ab || "")["toLowerCase"]();
      return (
        0x191 === _0x131c2b ||
        0x193 === _0x131c2b ||
        _0x494c71["includes"]("authorization\x20header\x20required") ||
        _0x494c71["includes"]("forbidden") ||
        _0x494c71["includes"]("invalid\x20token") ||
        _0x494c71["includes"]("jwt")
      );
    }
    async function _0x21078e(_0x2b4ec6, _0x3fd7af) {
      let _0x33d078 = null;
      return (
        "function" == typeof _0x2b4ec6["getRequestExecutionTab"] &&
          (_0x33d078 = await _0x2b4ec6["getRequestExecutionTab"](
            _0x3fd7af || null,
          )),
        _0x33d078 &&
          "function" == typeof _0x2b4ec6["syncSessionFromTab"] &&
          (await _0x2b4ec6["syncSessionFromTab"](_0x33d078)),
        (_0x33d078 && "function" == typeof _0x2b4ec6["resolveProjectIdForTab"]
          ? await _0x2b4ec6["resolveProjectIdForTab"](_0x33d078)
          : null) ||
          _0x3fd7af ||
          null
      );
    }
    async function _0x1d04f3(_0x586b1f, _0xe825b0, _0x1a69e2, _0x99accb) {
      const _0x1b9f0e = await _0x4ceaa8([
          "captured_auth_token",
          "captured_lovable_token",
          "captured_client_git_sha",
        ]),
        _0x3715e7 = await _0x21078e(_0x586b1f, _0xe825b0);
      const _0x251406 = {};
      _0x251406["ok"] = !0x1;
      _0x251406["status"] = 0x0;
      _0x251406["text"] = "";
      _0x251406["error"] =
        "Nenhum\x20projeto\x20Lovable\x20ativo\x20foi\x20detectado.\x20Abra\x20o\x20projeto\x20no\x20navegador\x20e\x20tente\x20novamente.";
      if (!_0x3715e7) return _0x251406;
      "function" == typeof _0x586b1f["onProjectResolved"] &&
        _0x586b1f["onProjectResolved"](_0x3715e7);
      const _0x2794d0 =
          _0x586b1f["endpointOrigin"] || "https://api." + "lovable.dev",
        _0x25778e =
          "function" == typeof _0x586b1f["getClientGitSha"]
            ? _0x586b1f["getClientGitSha"]()
            : _0x1b9f0e["captured_client_git_sha"] || null,
        _0x12c85e = _0x3c4a6b([
          _0x99accb,
          _0x1b9f0e["captured_lovable_token"],
          _0x1b9f0e["captured_auth_token"],
        ]);
      let _0x2fee3f = null;
      for (const _0x298bf3 of _0x12c85e)
        try {
          const _0x1c1404 = {};
          _0x1c1404["Accept"] = "*/*";
          _0x1c1404["Content-Type"] = "application/json";
          const _0x11d5ca = _0x1c1404;
          (_0x25778e && (_0x11d5ca["x-client-git-sha"] = _0x25778e),
            _0x298bf3 &&
              (_0x11d5ca["Authorization"] = "Bearer\x20" + _0x298bf3));
          const _0x25f986 = await fetch(
              _0x2794d0 + "/pro" + "jects/" + _0x3715e7 + "/ch" + "at",
              {
                method: "POST",
                credentials: "include",
                headers: _0x11d5ca,
                body: JSON["stringify"](_0x1a69e2),
              },
            ),
            _0xe3b9f1 = await _0x25f986["text"]();
          const _0x171ab1 = {};
          _0x171ab1["ok"] = _0x25f986["ok"];
          _0x171ab1["status"] = _0x25f986["status"];
          _0x171ab1["text"] = _0xe3b9f1;
          if (
            ((_0x2fee3f = _0x171ab1),
            _0x25f986["ok"] || !_0x4d747e(_0x25f986["status"], _0xe3b9f1))
          )
            return _0x2fee3f;
        } catch (_0x1b89f2) {
          _0x2fee3f = {
            ok: !0x1,
            status: 0x0,
            text: "",
            error: _0x1b89f2?.["message"] || String(_0x1b89f2),
          };
        }
      const _0x1497c1 = {};
      _0x1497c1["ok"] = !0x1;
      _0x1497c1["status"] = 0x0;
      _0x1497c1["text"] = "";
      _0x1497c1["error"] = "Authorization\x20header\x20required";
      return _0x2fee3f || _0x1497c1;
    }
    function _0x5edae5(_0x3ad765) {
      return new Promise((_0x2c22cd, _0x7ae83d) => {
        const _0x42a027 = new FileReader();
        ((_0x42a027["onload"] = () => {
          try {
            const _0x31f824 = String(_0x42a027["result"] || ""),
              _0x5de887 = _0x31f824["includes"](",")
                ? _0x31f824["split"](",")[0x1]
                : _0x31f824,
              _0x882619 = atob(_0x5de887),
              _0x265ed2 = new Uint8Array(_0x882619["length"]);
            for (
              let _0x59220f = 0x0;
              _0x59220f < _0x882619["length"];
              _0x59220f += 0x1
            )
              _0x265ed2[_0x59220f] = _0x882619["charCodeAt"](_0x59220f);
            _0x2c22cd(_0x265ed2);
          } catch (_0xaaa390) {
            _0x7ae83d(_0xaaa390);
          }
        }),
          (_0x42a027["onerror"] = () =>
            _0x7ae83d(
              _0x42a027["error"] || new Error("Falha\x20ao\x20ler\x20arquivo."),
            )),
          _0x42a027["readAsDataURL"](_0x3ad765));
      });
    }
    function _0x2a6d96(_0x2076c2) {
      try {
        const _0x2d3d77 = new URL(_0x2076c2)["pathname"]
            ["split"]("/")
            ["filter"](Boolean),
          _0x1e27b0 = _0x2d3d77["indexOf"]("gpt-engineer-file-uploads");
        return _0x1e27b0 >= 0x0 && _0x2d3d77[_0x1e27b0 + 0x1]
          ? _0x2d3d77[_0x1e27b0 + 0x1]
          : "";
      } catch (_0xe0c38a) {
        return "";
      }
    }
    async function _0x42d45b(_0xedcadc, _0x467dd3, _0x4f0867) {
      let _0x277f25 = null;
      for (const _0x3a734c of _0x4f0867)
        try {
          const _0x460081 = { ...(_0x467dd3["headers"] || {}) };
          const _0x4c0b04 = _0x460081;
          _0x3a734c
            ? (_0x4c0b04["Authorization"] = "Bearer\x20" + _0x3a734c)
            : delete _0x4c0b04["Authorization"];
          const _0x56aae5 = { ..._0x467dd3 };
          _0x56aae5["headers"] = _0x4c0b04;
          const _0x2523ad = await fetch(_0xedcadc, _0x56aae5),
            _0x42e953 = await _0x2523ad["text"]();
          const _0x38debb = {};
          _0x38debb["ok"] = _0x2523ad["ok"];
          _0x38debb["status"] = _0x2523ad["status"];
          _0x38debb["text"] = _0x42e953;
          _0x38debb["data"] = null;
          _0x277f25 = _0x38debb;
          try {
            _0x277f25["data"] = _0x42e953 ? JSON["parse"](_0x42e953) : null;
          } catch (_0x4dec06) {
            _0x277f25["data"] = null;
          }
          if (_0x2523ad["ok"] || !_0x4d747e(_0x2523ad["status"], _0x42e953))
            return _0x277f25;
        } catch (_0xe8a256) {
          _0x277f25 = {
            ok: !0x1,
            status: 0x0,
            text: "",
            data: null,
            error: _0xe8a256?.["message"] || String(_0xe8a256),
          };
        }
      const _0x515190 = {};
      _0x515190["ok"] = !0x1;
      _0x515190["status"] = 0x0;
      _0x515190["text"] = "";
      _0x515190["data"] = null;
      _0x515190["error"] = "Authorization\x20header\x20required";
      return _0x277f25 || _0x515190;
    }
    async function _0x4c4962(
      _0x5c8134,
      _0x4db58d,
      _0x50537,
      _0x2ac900,
      _0x52703b,
    ) {
      const _0x98f181 = {};
      _0x98f181["Accept"] = "*/*";
      _0x98f181["Content-Type"] = "application/json";
      const _0x49f86f =
          _0x5c8134["endpointOrigin"] || "https://api." + "lovable.dev",
        _0x51456a =
          crypto && "function" == typeof crypto["randomUUID"]
            ? crypto["randomUUID"]()
            : ([0x989680] + -0x3e8 + -0xfa0 + -0x1f40 + -0x174876e800)[
                "replace"
              ](/[018]/g, (_0x11c789) =>
                (_0x11c789 ^
                  (crypto["getRandomValues"](new Uint8Array(0x1))[0x0] &
                    (0xf >> (_0x11c789 / 0x4))))["toString"](0x10),
              ),
        _0x4aedf5 = _0x98f181;
      _0x2ac900 && (_0x4aedf5["x-client-git-sha"] = _0x2ac900);
      const _0xb7dcda = {
        ["file" + "_name"]: _0x51456a,
        ["conten" + "t_type"]: _0x4db58d["type"] || "application/octet-stream",
        ["proje" + "ct_id"]: _0x50537,
        ["original_" + "file_name"]: _0x4db58d["name"] || _0x51456a,
        ["file_si" + "ze_bytes"]: _0x4db58d["size"] || 0x0,
        ["original_fil" + "e_size_bytes"]: _0x4db58d["size"] || 0x0,
      };
      _0xb7dcda["status"] = "uploading";
      const _0x624116 = _0xb7dcda,
        _0xc21eda = await _0x42d45b(
          _0x49f86f + "/files/" + "generate-" + "upload-url",
          {
            method: "POST",
            credentials: "include",
            headers: _0x4aedf5,
            body: JSON["stringify"](_0x624116),
          },
          _0x52703b,
        );
      if (!_0xc21eda["ok"])
        throw new Error(
          "generate-" +
            "upload-url\x20" +
            (_0xc21eda["status"] || 0x0) +
            (_0xc21eda["text"]
              ? ":\x20" + _0xc21eda["text"]["slice"](0x0, 0xc8)
              : ""),
        );
      const _0x27e7e4 = _0xc21eda["data"]?.["url"];
      if (!_0x27e7e4) throw new Error("no\x20url\x20in\x20upload\x20response");
      const _0x32f5b1 = await _0x5edae5(_0x4db58d),
        _0x1f5e81 = await fetch(_0x27e7e4, {
          method: "PUT",
          body: _0x32f5b1,
          headers: {
            "Content-Type": _0x4db58d["type"] || "application/octet-stream",
          },
        });
      if (!_0x1f5e81["ok"]) {
        const _0x3e8236 = await _0x1f5e81["text"]()["catch"](() => "");
        throw new Error(
          "GCS\x20PUT\x20" +
            (_0x1f5e81["status"] || 0x0) +
            (_0x3e8236 ? ":\x20" + _0x3e8236["slice"](0x0, 0xc8) : ""),
        );
      }
      let _0x22a605 = "";
      const _0x120822 = _0x2a6d96(_0x27e7e4);
      if (_0x120822) {
        const _0x164e40 = {
          ["dir_" + "name"]: _0x120822,
          ["file" + "_name"]: _0x51456a,
        };
        const _0x130f95 = await _0x42d45b(
          _0x49f86f + "/files/" + "generate-" + "download-url",
          {
            method: "POST",
            credentials: "include",
            headers: _0x4aedf5,
            body: JSON["stringify"](_0x164e40),
          },
          _0x52703b,
        );
        _0x130f95["ok"] &&
          _0x130f95["data"]?.["url"] &&
          (_0x22a605 = _0x130f95["data"]["url"]);
      }
      const _0x29aa56 = {
        ["fil" + "e_id"]: _0x51456a,
        ["file" + "_name"]: _0x4db58d["name"] || _0x51456a,
        ["downlo" + "ad_url"]: _0x22a605,
      };
      _0x29aa56["ok"] = !0x0;
      return _0x29aa56;
    }
    async function _0x1fb2b9(_0x13ed04, _0x1d9edd, _0x430f5d, _0x5e4c1f) {
      if (!_0x1d9edd || 0x0 === _0x1d9edd["length"]) return [];
      const _0x2fe338 = await _0x4ceaa8([
          "captured_auth_token",
          "captured_lovable_token",
          "captured_client_git_sha",
        ]),
        _0x2e7fac =
          "function" == typeof _0x13ed04["getClientGitSha"]
            ? _0x13ed04["getClientGitSha"]()
            : _0x2fe338["captured_client_git_sha"] || null,
        _0x23353e = _0x3c4a6b([
          _0x5e4c1f,
          _0x2fe338["captured_lovable_token"],
          _0x2fe338["captured_auth_token"],
        ]),
        _0x447434 = [];
      for (const _0x17489f of _0x1d9edd)
        try {
          _0x447434["push"](
            await _0x4c4962(
              _0x13ed04,
              _0x17489f,
              _0x430f5d,
              _0x2e7fac,
              _0x23353e,
            ),
          );
        } catch (_0x4e4fb0) {
          _0x447434["push"]({
            ok: !0x1,
            ["file" + "_name"]: _0x17489f?.["name"] || "arquivo",
            error: _0x4e4fb0?.["message"] || String(_0x4e4fb0),
          });
        }
      return _0x447434;
    }
    ((window["SharkSendEngine"]["createEngine"] = function (_0x5960fc) {
      const _0x2999a3 = _0x946876["call"](this, _0x5960fc),
        _0x12c0e5 = _0x2999a3["executeLovableChatRequest"],
        _0x41363b = _0x2999a3["uploadFilesForProject"];
      return (
        "function" == typeof _0x41363b &&
          (_0x2999a3["uploadFilesForProject"] = async function (
            _0x276a43,
            _0x1c832f,
            _0x4aa5c5,
            _0x569b01,
          ) {
            try {
              const _0x524666 = await _0x41363b["apply"](this, arguments);
              if (
                !_0x1c832f ||
                0x0 === _0x1c832f["length"] ||
                (Array["isArray"](_0x524666) && _0x524666["length"] > 0x0)
              )
                return _0x524666;
            } catch (_0x1afa54) {}
            return _0x1fb2b9(
              _0x5960fc || {},
              _0x1c832f || [],
              _0x4aa5c5,
              _0x569b01,
            );
          }),
        (_0x2999a3["executeLovableChatRequest"] = async function (
          _0xe8e7d1,
          _0x122688,
          _0x40cc2e,
        ) {
          try {
            const _0x3891b7 = await _0x12c0e5["apply"](this, arguments);
            if (_0x3891b7) return _0x3891b7;
          } catch (_0x1e578d) {}
          return _0x1d04f3(_0x5960fc || {}, _0xe8e7d1, _0x122688, _0x40cc2e);
        }),
        _0x2999a3
      );
    }),
      (window["SharkSendEngine"]["__directFallbackPatched"] = !0x0));
  })());
