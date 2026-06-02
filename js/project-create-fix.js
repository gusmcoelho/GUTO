!(function () {
  if (window["SharkProjectCreateFixLoaded"]) return;
  window["SharkProjectCreateFixLoaded"] = !0x0;
  const _0x909a21 = "#manualCreateProjectBtn, #btnCreateProject",
    _0x169c7e = [
      "*://lovable.dev/*",
      "*://*.lovable.dev/*",
      "*://lovable.app/*",
      "*://*.lovable.app/*",
    ],
    _0x58e93e = [0xbb8, 0x5dc, 0xbb8];
  let _0x3b936e = !0x1;
  function _0xf554a8(_0x4d291c) {
    return new Promise((_0x3de499) =>
      window["setTimeout"](_0x3de499, _0x4d291c),
    );
  }
  function _0x143d38(_0x3b7304) {
    return new Promise((_0x277c31) => {
      chrome["tabs"]["query"](_0x3b7304, (_0x302b8f) =>
        _0x277c31(Array["isArray"](_0x302b8f) ? _0x302b8f : []),
      );
    });
  }
  function _0x1c792a(_0x3382f9) {
    return new Promise((_0x244171) => {
      chrome["tabs"]["get"](_0x3382f9, (_0x44d367) => {
        chrome["runtime"]["lastError"]
          ? _0x244171(null)
          : _0x244171(_0x44d367 || null);
      });
    });
  }
  function _0x29542e(_0x1016b) {
    return new Promise((_0x3ee729) => {
      chrome["tabs"]["create"](_0x1016b, (_0xa1f2f4) =>
        _0x3ee729(_0xa1f2f4 || null),
      );
    });
  }
  async function _0x23f3ae(_0x480a04, _0x9e344f = 0x2ee0) {
    const _0x495d52 = Date["now"]();
    for (; Date["now"]() - _0x495d52 < _0x9e344f; ) {
      const _0x32c21 = await _0x1c792a(_0x480a04);
      if (_0x32c21 && "complete" === _0x32c21["status"]) return _0x32c21;
      await _0xf554a8(0xfa);
    }
    return _0x1c792a(_0x480a04);
  }
  function _0x23cd20(_0x11b6f1 = "") {
    try {
      const _0x6c9f15 = new URL(_0x11b6f1)["hostname"]["toLowerCase"]();
      return (
        "lovable.dev" === _0x6c9f15 ||
        _0x6c9f15["endsWith"](".lovable.dev") ||
        "lovable.app" === _0x6c9f15 ||
        _0x6c9f15["endsWith"](".lovable.app")
      );
    } catch (_0xb30511) {
      return !0x1;
    }
  }
  async function _0x47b862() {
    const _0xacb29b = {};
    _0xacb29b["active"] = !0x0;
    _0xacb29b["currentWindow"] = !0x0;
    const [_0x4ff45c] = await _0x143d38(_0xacb29b);
    if (_0x4ff45c && _0x4ff45c["id"] && _0x23cd20(_0x4ff45c["url"] || ""))
      return { tab: _0x4ff45c, cleanup: !0x1 };
    const _0x195975 = {};
    _0x195975["currentWindow"] = !0x0;
    _0x195975["url"] = _0x169c7e;
    const _0x39b884 = (await _0x143d38(_0x195975))["find"](
      (_0x557134) =>
        _0x557134 && _0x557134["id"] && _0x23cd20(_0x557134["url"] || ""),
    );
    if (_0x39b884) return { tab: _0x39b884, cleanup: !0x1 };
    const _0x440fbd = {};
    _0x440fbd["url"] = _0x169c7e;
    const _0x55d6be = (await _0x143d38(_0x440fbd))["find"](
      (_0x101eed) =>
        _0x101eed && _0x101eed["id"] && _0x23cd20(_0x101eed["url"] || ""),
    );
    if (_0x55d6be) return { tab: _0x55d6be, cleanup: !0x1 };
    const _0x15e2e1 = {};
    _0x15e2e1["url"] = "https://lovable.dev/dashboard";
    _0x15e2e1["active"] = !0x1;
    const _0x2e28d6 = await _0x29542e(_0x15e2e1);
    if (!_0x2e28d6 || !_0x2e28d6["id"])
      throw new Error(
        "Nao\x20foi\x20possivel\x20abrir\x20uma\x20aba\x20do\x20Lovable.",
      );
    const _0xc96653 = await _0x23f3ae(_0x2e28d6["id"]);
    if (!_0xc96653 || !_0xc96653["id"])
      throw new Error(
        "A\x20aba\x20do\x20Lovable\x20nao\x20carregou\x20a\x20tempo.",
      );
    const _0x35aa38 = {};
    _0x35aa38["tab"] = _0xc96653;
    _0x35aa38["cleanup"] = !0x0;
    return _0x35aa38;
  }
  function _0x13e759(_0x562941) {
    document["querySelectorAll"](_0x909a21)["forEach"]((_0x1681ff) => {
      ((_0x1681ff["disabled"] = Boolean(_0x562941)),
        _0x1681ff["classList"]["toggle"]("is-loading", Boolean(_0x562941)));
    });
  }
  function _0x595559(_0x5213b1, _0x3e0d92 = !0x1) {
    const _0x1b6084 = document["getElementById"]("chatHistory");
    if (!_0x1b6084) return;
    const _0x8a6be1 = document["createElement"]("div");
    _0x8a6be1["className"] =
      "chat-message\x20system" + (_0x3e0d92 ? "\x20error" : "");
    const _0x319e0a = document["createElement"]("div");
    ((_0x319e0a["className"] = "message-content"),
      (_0x319e0a["textContent"] = _0x5213b1),
      _0x8a6be1["appendChild"](_0x319e0a),
      _0x1b6084["appendChild"](_0x8a6be1),
      (_0x1b6084["scrollTop"] = _0x1b6084["scrollHeight"]));
  }
  function _0x5edc3c(_0xc4f0ae) {
    const _0x3cc3df = String(_0xc4f0ae?.["message"] || _0xc4f0ae || "")[
      "toLowerCase"
    ]();
    return (
      _0x3cc3df["includes"]("frame\x20with\x20id") &&
      _0x3cc3df["includes"]("was\x20removed")
    );
  }
  async function _0x53c87a(_0x301314, _0x469637) {
    let _0x57d54f = null;
    try {
      const _0x2776b0 = {};
      _0x2776b0["tabId"] = _0x301314;
      [_0x57d54f = {}] = await chrome["scripting"]["executeScript"]({
        target: _0x2776b0,
        world: "MAIN",
        args: [_0x469637],
        func: async (_0x2f1665) => {
          function _0x57376b(_0x37d1b7) {
            if (!_0x37d1b7) return null;
            const _0x605171 = _0x37d1b7["split"](".");
            if (0x3 !== _0x605171["length"]) return null;
            try {
              const _0x4ccf32 = _0x605171[0x1]
                  ["replace"](/-/g, "+")
                  ["replace"](/_/g, "/"),
                _0x426f82 = _0x4ccf32["padEnd"](
                  _0x4ccf32["length"] +
                    ((0x4 - (_0x4ccf32["length"] % 0x4)) % 0x4),
                  "=",
                );
              return JSON["parse"](atob(_0x426f82));
            } catch (_0x2c6c4f) {
              return null;
            }
          }
          function _0x23624f(_0x264dcf) {
            const _0x34feed = _0x57376b(_0x264dcf);
            return _0x34feed
              ? "project" === _0x34feed["access" + "_type"] ||
                (_0x34feed["project" + "_id"] &&
                  _0x34feed["sub"] === _0x34feed["project" + "_id"])
                ? "lovable"
                : "auth"
              : null;
          }
          function _0x5afc24(_0x19efed) {
            const _0x11df17 = String(_0x19efed || "")["trim"]();
            if (!_0x11df17) return null;
            if (
              /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/["test"](
                _0x11df17,
              )
            )
              return _0x11df17;
            try {
              const _0x5ed1eb = JSON["parse"](_0x11df17);
              return (
                _0x5ed1eb?.["access" + "_token"] ||
                _0x5ed1eb?.["token"] ||
                _0x5ed1eb?.["currentSession"]?.["access" + "_token"] ||
                _0x5ed1eb?.["session"]?.["access" + "_token"] ||
                null
              );
            } catch (_0x40f776) {
              return null;
            }
          }
          function _0x4131ff(_0x8e4d37) {
            const _0x4d08d8 = {};
            _0x4d08d8["authToken"] = null;
            _0x4d08d8["lovableToken"] = null;
            const _0x3f05f7 = _0x4d08d8,
              _0x11826d = [
                "lovable_token",
                "__lovable_token",
                "token",
                "access_token",
                "authToken",
                "sb-access-token",
              ];
            for (
              let _0x594841 = 0x0;
              _0x594841 < _0x8e4d37["length"];
              _0x594841 += 0x1
            ) {
              const _0x4bff7a = _0x8e4d37["key"](_0x594841);
              _0x4bff7a &&
                !_0x11826d["includes"](_0x4bff7a) &&
                _0x11826d["push"](_0x4bff7a);
            }
            for (const _0x282190 of _0x11826d) {
              const _0x1dc6db = _0x5afc24(_0x8e4d37["getItem"](_0x282190)),
                _0x4cc73a = _0x23624f(_0x1dc6db);
              if (
                ("auth" !== _0x4cc73a || _0x3f05f7["authToken"]
                  ? "lovable" !== _0x4cc73a ||
                    _0x3f05f7["lovableToken"] ||
                    (_0x3f05f7["lovableToken"] = _0x1dc6db)
                  : (_0x3f05f7["authToken"] = _0x1dc6db),
                _0x3f05f7["authToken"] && _0x3f05f7["lovableToken"])
              )
                break;
            }
            return _0x3f05f7;
          }
          function _0x306bb9() {
            const _0x2e08af = _0x4131ff(window["localStorage"]),
              _0x56ee54 = _0x4131ff(window["sessionStorage"]),
              _0x1cd906 =
                _0x2f1665["storedTokens"] &&
                "object" == typeof _0x2f1665["storedTokens"]
                  ? _0x2f1665["storedTokens"]
                  : {};
            const _0x4b85dc = {};
            _0x4b85dc["authToken"] =
              _0x1cd906["authToken"] ||
              _0x2e08af["authToken"] ||
              _0x56ee54["authToken"] ||
              null;
            _0x4b85dc["lovableToken"] =
              _0x1cd906["lovableToken"] ||
              _0x2e08af["lovableToken"] ||
              _0x56ee54["lovableToken"] ||
              null;
            return _0x4b85dc;
          }
          function _0x4a1625() {
            const _0x32cea6 = _0x306bb9();
            return [null, _0x32cea6["authToken"], _0x32cea6["lovableToken"]][
              "filter"
            ](
              (_0x2ddec7, _0x208e94, _0x14625f) =>
                _0x14625f["indexOf"](_0x2ddec7) === _0x208e94,
            );
          }
          function _0x58a31d() {
            const _0x57b143 = String(_0x2f1665["browserSessionId"] || "")[
              "trim"
            ]();
            if (_0x57b143) return _0x57b143;
            for (const _0x4f00f6 of [
              window["localStorage"],
              window["sessionStorage"],
            ])
              for (
                let _0xcace89 = 0x0;
                _0xcace89 < _0x4f00f6["length"];
                _0xcace89 += 0x1
              ) {
                const _0x1036e4 = _0x4f00f6["key"](_0xcace89),
                  _0x36dafa = ((_0x1036e4 || "") +
                    "\x20" +
                    ((_0x1036e4 ? _0x4f00f6["getItem"](_0x1036e4) : "") || ""))[
                    "match"
                  ](/bsess_[A-Za-z0-9_-]+/);
                if (_0x36dafa) return _0x36dafa[0x0];
              }
            const _0x46da02 = new Uint8Array(0x10);
            return (
              crypto["getRandomValues"](_0x46da02),
              "bsess_" +
                Array["from"](_0x46da02)
                  ["map"]((_0x466405) =>
                    _0x466405["toString"](0x10)["padStart"](0x2, "0"),
                  )
                  ["join"]("")
            );
          }
          function _0x295c12(_0x7fb7dd) {
            const _0x5031aa = {
              Accept: "*/*",
              "Content-Type": "application/json",
              "x-browser-session-id": _0x58a31d(),
            };
            return (
              _0x2f1665["clientGitSha"] &&
                (_0x5031aa["x-client-git-sha"] = _0x2f1665["clientGitSha"]),
              _0x7fb7dd &&
                (_0x5031aa["Authorization"] = "Bearer\x20" + _0x7fb7dd),
              _0x5031aa
            );
          }
          function _0xfb7820(_0x183f6b) {
            if (!_0x183f6b) return null;
            try {
              return JSON["parse"](_0x183f6b);
            } catch (_0x51fd1e) {
              return null;
            }
          }
          async function _0xc3eeab(_0x3cd610, _0x404902 = {}) {
            let _0x792e77 = null;
            for (const _0xfa34e6 of _0x4a1625())
              try {
                const _0x24a23e = await fetch(_0x3cd610, {
                    ..._0x404902,
                    credentials: "include",
                    referrer: "https://lovable.dev/",
                    headers: {
                      ..._0x295c12(_0xfa34e6),
                      ...(_0x404902["headers"] || {}),
                    },
                  }),
                  _0x1717c6 = await _0x24a23e["text"]();
                if (
                  ((_0x792e77 = {
                    ok: _0x24a23e["ok"],
                    status: _0x24a23e["status"],
                    text: _0x1717c6,
                    data: _0xfb7820(_0x1717c6),
                  }),
                  _0x24a23e["ok"])
                )
                  return _0x792e77;
                const _0xde4f7 = _0x1717c6["toLowerCase"]();
                if (
                  !(
                    0x191 === _0x24a23e["status"] ||
                    0x193 === _0x24a23e["status"] ||
                    _0xde4f7["includes"]("authorization") ||
                    _0xde4f7["includes"]("forbidden") ||
                    _0xde4f7["includes"]("invalid\x20token") ||
                    _0xde4f7["includes"]("jwt")
                  )
                )
                  return _0x792e77;
              } catch (_0x420db5) {
                _0x792e77 = {
                  ok: !0x1,
                  status: 0x0,
                  text: "",
                  data: null,
                  error: _0x420db5?.["message"] || String(_0x420db5),
                };
              }
            const _0x5cb246 = {};
            _0x5cb246["ok"] = !0x1;
            _0x5cb246["status"] = 0x0;
            _0x5cb246["text"] = "";
            _0x5cb246["data"] = null;
            _0x5cb246["error"] =
              "Falha\x20desconhecida\x20ao\x20chamar\x20a\x20API\x20do\x20Lovable.";
            return _0x792e77 || _0x5cb246;
          }
          function _0xe0f00b(_0x27a3f9) {
            const _0x31b1d2 = "0123456789abcdefghjkmnpqrstvwxyz";
            let _0x47deb1 = Date["now"](),
              _0x197d75 = "";
            for (let _0x5c9645 = 0x0; _0x5c9645 < 0xa; _0x5c9645 += 0x1)
              ((_0x197d75 = _0x31b1d2[_0x47deb1 % 0x20] + _0x197d75),
                (_0x47deb1 = Math["floor"](_0x47deb1 / 0x20)));
            const _0x216267 = new Uint8Array(0x10);
            crypto["getRandomValues"](_0x216267);
            for (const _0x5e9237 of _0x216267)
              _0x197d75 += _0x31b1d2[_0x5e9237 % 0x20];
            return _0x27a3f9 + "_" + _0x197d75;
          }
          if ("create" === _0x2f1665["mode"]) {
            const _0xf9669e = {};
            _0xf9669e["method"] = "GET";
            const _0x2f5622 = await _0xc3eeab(
              "https://api.lovable.dev/user/" + "workspaces",
              _0xf9669e,
            );
            if (!_0x2f5622["ok"])
              return {
                ok: !0x1,
                status: _0x2f5622["status"],
                text: _0x2f5622["text"],
                error:
                  _0x2f5622["error"] ||
                  "Falha\x20ao\x20buscar\x20workspaces\x20(" +
                    (_0x2f5622["status"] || 0x0) +
                    ")",
              };
            const _0x693bd0 =
              ((_0x89c904 = _0x2f5622["data"]),
              Array["isArray"](_0x89c904) && _0x89c904["length"] > 0x0
                ? _0x89c904[0x0]?.["id"] ||
                  _0x89c904[0x0]?.["workspace_id"] ||
                  null
                : _0x89c904?.["id"] ||
                  _0x89c904?.["workspace_id"] ||
                  _0x89c904?.["data"]?.[0x0]?.["id"] ||
                  _0x89c904?.["data"]?.[0x0]?.["workspace_id"] ||
                  _0x89c904?.["workspaces"]?.[0x0]?.["id"] ||
                  _0x89c904?.["workspaces"]?.[0x0]?.["workspace_id"] ||
                  null);
            const _0x5d79d4 = {};
            _0x5d79d4["ok"] = !0x1;
            _0x5d79d4["status"] = 0x0;
            _0x5d79d4["error"] =
              "ID\x20do\x20workspace\x20nao\x20encontrado\x20na\x20resposta\x20da\x20API.";
            if (!_0x693bd0) return _0x5d79d4;
            const _0x1e670b = { ["unify-desi" + "gn-systems"]: !0x1 };
            const _0x1ab1e0 = {
              ["chat_mod" + "e_enabled"]: !0x1,
              ["fullscree" + "n_enabled"]: !0x0,
              ["feature_fla" + "g_overrides"]: _0x1e670b,
            };
            const _0x641cc4 = _0xe0f00b("umsg"),
              _0x4d7324 = _0xe0f00b("aimsg"),
              _0x1b93a =
                _0x2f1665["initialMessage"] ||
                _0x2f1665["projectName"] ||
                "novo\x20projeto",
              _0x5d6448 = {
                description: _0x2f1665["projectName"] || _0x1b93a,
                visibility: "private",
                ["env_" + "vars"]: {},
                metadata: _0x1ab1e0,
                ["initial" + "_message"]: {
                  id: _0x641cc4,
                  message: _0x1b93a,
                  files: [],
                  ["optimisti" + "cImageUrls"]: [],
                  ["chat" + "_only"]: !0x1,
                  ["agent_mod" + "e_enabled"]: !0x1,
                  ["ai_mes" + "sage_id"]: _0x4d7324,
                },
              },
              _0x31f378 = await _0xc3eeab(
                "https://api.lovable.dev/" +
                  "workspaces/" +
                  _0x693bd0 +
                  "/" +
                  "projects",
                { method: "POST", body: JSON["stringify"](_0x5d6448) },
              );
            if (!_0x31f378["ok"])
              return {
                ok: !0x1,
                status: _0x31f378["status"],
                text: _0x31f378["text"],
                error:
                  _0x31f378["error"] ||
                  "Falha\x20ao\x20criar\x20projeto\x20(" +
                    (_0x31f378["status"] || 0x0) +
                    ")",
              };
            const _0x3c5372 = _0x31f378["data"] || {},
              _0x40fce0 =
                _0x3c5372["id"] ||
                _0x3c5372["project" + "_id"] ||
                ("string" == typeof _0x3c5372["link"] &&
                  _0x3c5372["link"]["match"](
                    /\/projects\/([a-zA-Z0-9-]+)/,
                  )?.[0x1]) ||
                null;
            const _0x573949 = {};
            _0x573949["ok"] = !0x0;
            _0x573949["status"] = _0x31f378["status"];
            _0x573949["workspaceId"] = _0x693bd0;
            _0x573949["projectId"] = _0x40fce0;
            _0x573949["link"] =
              _0x3c5372["link"] ||
              (_0x40fce0
                ? "https://lovable.dev/" + "projects/" + _0x40fce0
                : "");
            _0x573949["messageId"] = _0x641cc4;
            _0x573949["aiMessageId"] = _0x4d7324;
            return _0x573949;
          }
          var _0x89c904;
          let _0x402126 = null;
          for (const _0x88f367 of _0x2f1665["retryDelaysMs"] || [0x0]) {
            if (
              (_0x88f367 > 0x0 &&
                (await new Promise((_0x800bdd) =>
                  window["setTimeout"](_0x800bdd, _0x88f367),
                )),
              (_0x402126 = await _0xc3eeab(
                "https://api.lovable.dev/" +
                  "projects/" +
                  _0x2f1665["projectId"] +
                  "/" +
                  "chat/" +
                  _0x2f1665["messageId"] +
                  "/" +
                  "cancel",
                {
                  method: "POST",
                  body: JSON["stringify"]({
                    ["ai_mes" + "sage_id"]: _0x2f1665["aiMessageId"],
                  }),
                },
              )),
              _0x402126["ok"])
            )
              return _0x402126;
            if (
              ![0x194, 0x199, 0x1a7, 0x1a9, 0x1ad, 0x1f4]["includes"](
                _0x402126["status"],
              )
            )
              break;
          }
          const _0x582a22 = {};
          _0x582a22["ok"] = !0x1;
          _0x582a22["status"] = 0x0;
          _0x582a22["text"] = "";
          _0x582a22["data"] = null;
          _0x582a22["error"] = "Falha\x20ao\x20cancelar\x20a\x20geracao.";
          return _0x402126 || _0x582a22;
        },
      });
    } catch (_0x30bb9a) {
      return {
        ok: !0x1,
        status: 0x0,
        text: "",
        data: null,
        error: _0x30bb9a?.["message"] || String(_0x30bb9a),
        transientFrameError: _0x5edc3c(_0x30bb9a),
      };
    }
    return _0x57d54f["result"] || null;
  }
  function _0x3b1247(_0x4b3744) {
    if (!_0x4b3744) return null;
    try {
      return JSON["parse"](_0x4b3744);
    } catch (_0x3ff7ba) {
      return null;
    }
  }
  function _0x57447d(_0x27c24d) {
    const _0x5cd66f = "0123456789abcdefghjkmnpqrstvwxyz";
    let _0x1917c5 = Date["now"](),
      _0x223ff7 = "";
    for (let _0x398aa1 = 0x0; _0x398aa1 < 0xa; _0x398aa1 += 0x1)
      ((_0x223ff7 = _0x5cd66f[_0x1917c5 % 0x20] + _0x223ff7),
        (_0x1917c5 = Math["floor"](_0x1917c5 / 0x20)));
    const _0x905b50 = new Uint8Array(0x10);
    crypto["getRandomValues"](_0x905b50);
    for (const _0x464a58 of _0x905b50) _0x223ff7 += _0x5cd66f[_0x464a58 % 0x20];
    return _0x27c24d + "_" + _0x223ff7;
  }
  function _0xe81701(_0x478477 = {}) {
    return [
      _0x478477["authToken"] || null,
      _0x478477["lovableToken"] || null,
      null,
    ]["filter"](
      (_0x2ad665, _0x21eac0, _0x56dc3e) =>
        _0x56dc3e["indexOf"](_0x2ad665) === _0x21eac0,
    );
  }
  function _0x4d7063(_0x5b1efc, _0xea3f06) {
    const _0x558326 = {
      Accept: "*/*",
      "Content-Type": "application/json",
      "x-browser-session-id":
        _0x5b1efc["browserSessionId"] ||
        "bsess_" +
          Date["now"]()["toString"](0x24) +
          Math["random"]()["toString"](0x24)["slice"](0x2),
    };
    return (
      _0x5b1efc["clientGitSha"] &&
        (_0x558326["x-client-git-sha"] = _0x5b1efc["clientGitSha"]),
      _0xea3f06 && (_0x558326["Authorization"] = "Bearer\x20" + _0xea3f06),
      _0x558326
    );
  }
  async function _0xcc159d(_0x5aa629, _0x1854ec, _0x4ee37c) {
    let _0x2aa12a = null;
    for (const _0x17e678 of _0xe81701(_0x4ee37c["storedTokens"]))
      try {
        const _0x909ba7 = await fetch(_0x5aa629, {
            ..._0x1854ec,
            credentials: "include",
            referrer: "https://lovable.dev/",
            headers: {
              ..._0x4d7063(_0x4ee37c, _0x17e678),
              ...(_0x1854ec["headers"] || {}),
            },
          }),
          _0x3c15aa = await _0x909ba7["text"]();
        if (
          ((_0x2aa12a = {
            ok: _0x909ba7["ok"],
            status: _0x909ba7["status"],
            text: _0x3c15aa,
            data: _0x3b1247(_0x3c15aa),
          }),
          _0x909ba7["ok"])
        )
          return _0x2aa12a;
        const _0x4aaaf6 = _0x3c15aa["toLowerCase"]();
        if (
          !(
            0x191 === _0x909ba7["status"] ||
            0x193 === _0x909ba7["status"] ||
            _0x4aaaf6["includes"]("authorization") ||
            _0x4aaaf6["includes"]("forbidden") ||
            _0x4aaaf6["includes"]("invalid\x20token") ||
            _0x4aaaf6["includes"]("jwt")
          )
        )
          return _0x2aa12a;
      } catch (_0x1506a2) {
        _0x2aa12a = {
          ok: !0x1,
          status: 0x0,
          text: "",
          data: null,
          error: _0x1506a2?.["message"] || String(_0x1506a2),
        };
      }
    const _0x5e7e5a = {};
    _0x5e7e5a["ok"] = !0x1;
    _0x5e7e5a["status"] = 0x0;
    _0x5e7e5a["text"] = "";
    _0x5e7e5a["data"] = null;
    _0x5e7e5a["error"] =
      "Falha\x20desconhecida\x20ao\x20chamar\x20a\x20API\x20do\x20Lovable.";
    return _0x2aa12a || _0x5e7e5a;
  }
  async function _0x1685d8(_0x31a7b9) {
    if ("create" === _0x31a7b9["mode"]) {
      const _0x422ab0 = {};
      _0x422ab0["method"] = "GET";
      const _0x18992a = await _0xcc159d(
        "https://api.lovable.dev/user/workspaces",
        _0x422ab0,
        _0x31a7b9,
      );
      if (!_0x18992a["ok"])
        return {
          ok: !0x1,
          status: _0x18992a["status"],
          text: _0x18992a["text"],
          error:
            _0x18992a["error"] ||
            "Falha\x20ao\x20buscar\x20workspaces\x20(" +
              (_0x18992a["status"] || 0x0) +
              ")",
        };
      const _0x342a12 =
        ((_0x3a32a9 = _0x18992a["data"]),
        Array["isArray"](_0x3a32a9) && _0x3a32a9["length"] > 0x0
          ? _0x3a32a9[0x0]?.["id"] || _0x3a32a9[0x0]?.["workspace_id"] || null
          : _0x3a32a9?.["id"] ||
            _0x3a32a9?.["workspace_id"] ||
            _0x3a32a9?.["data"]?.[0x0]?.["id"] ||
            _0x3a32a9?.["data"]?.[0x0]?.["workspace_id"] ||
            _0x3a32a9?.["workspaces"]?.[0x0]?.["id"] ||
            _0x3a32a9?.["workspaces"]?.[0x0]?.["workspace_id"] ||
            null);
      const _0xe414fc = {};
      _0xe414fc["ok"] = !0x1;
      _0xe414fc["status"] = 0x0;
      _0xe414fc["error"] =
        "ID\x20do\x20workspace\x20nao\x20encontrado\x20na\x20resposta\x20da\x20API.";
      if (!_0x342a12) return _0xe414fc;
      const _0x9109c0 = { ["unify-desi" + "gn-systems"]: !0x1 };
      const _0x173975 = {
        ["chat_mod" + "e_enabled"]: !0x1,
        ["fullscree" + "n_enabled"]: !0x0,
        ["feature_fla" + "g_overrides"]: _0x9109c0,
      };
      const _0x3fa2c1 = _0x57447d("umsg"),
        _0xe0ac16 = _0x57447d("aimsg"),
        _0x21d979 =
          _0x31a7b9["initialMessage"] ||
          _0x31a7b9["projectName"] ||
          "novo\x20projeto",
        _0x496022 = {
          description: _0x31a7b9["projectName"] || _0x21d979,
          visibility: "private",
          ["env_" + "vars"]: {},
          metadata: _0x173975,
          ["initial" + "_message"]: {
            id: _0x3fa2c1,
            message: _0x21d979,
            files: [],
            ["optimisti" + "cImageUrls"]: [],
            ["chat" + "_only"]: !0x1,
            ["agent_mod" + "e_enabled"]: !0x1,
            ["ai_mes" + "sage_id"]: _0xe0ac16,
          },
        },
        _0x42a533 = await _0xcc159d(
          "https://api.lovable.dev/workspaces/" + _0x342a12 + "/projects",
          { method: "POST", body: JSON["stringify"](_0x496022) },
          _0x31a7b9,
        );
      if (!_0x42a533["ok"])
        return {
          ok: !0x1,
          status: _0x42a533["status"],
          text: _0x42a533["text"],
          error:
            _0x42a533["error"] ||
            "Falha\x20ao\x20criar\x20projeto\x20(" +
              (_0x42a533["status"] || 0x0) +
              ")",
        };
      const _0x4d4508 = _0x42a533["data"] || {},
        _0x145f1e =
          _0x4d4508["id"] ||
          _0x4d4508["project" + "_id"] ||
          ("string" == typeof _0x4d4508["link"] &&
            _0x4d4508["link"]["match"](/\/projects\/([a-zA-Z0-9-]+)/)?.[0x1]) ||
          null;
      const _0x150cf3 = {};
      _0x150cf3["ok"] = !0x0;
      _0x150cf3["status"] = _0x42a533["status"];
      _0x150cf3["workspaceId"] = _0x342a12;
      _0x150cf3["projectId"] = _0x145f1e;
      _0x150cf3["link"] =
        _0x4d4508["link"] ||
        (_0x145f1e ? "https://lovable.dev/projects/" + _0x145f1e : "");
      _0x150cf3["messageId"] = _0x3fa2c1;
      _0x150cf3["aiMessageId"] = _0xe0ac16;
      return _0x150cf3;
    }
    var _0x3a32a9;
    let _0x3ade20 = null;
    for (const _0x36af30 of _0x31a7b9["retryDelaysMs"] || [0x0]) {
      if (
        (_0x36af30 > 0x0 && (await _0xf554a8(_0x36af30)),
        (_0x3ade20 = await _0xcc159d(
          "https://api.lovable.dev/projects/" +
            _0x31a7b9["projectId"] +
            "/chat/" +
            _0x31a7b9["messageId"] +
            "/cancel",
          {
            method: "POST",
            body: JSON["stringify"]({
              ["ai_mes" + "sage_id"]: _0x31a7b9["aiMessageId"],
            }),
          },
          _0x31a7b9,
        )),
        _0x3ade20["ok"])
      )
        return _0x3ade20;
      if (
        ![0x194, 0x199, 0x1a7, 0x1a9, 0x1ad, 0x1f4]["includes"](
          _0x3ade20["status"],
        )
      )
        break;
    }
    const _0x12e80d = {};
    _0x12e80d["ok"] = !0x1;
    _0x12e80d["status"] = 0x0;
    _0x12e80d["text"] = "";
    _0x12e80d["data"] = null;
    _0x12e80d["error"] = "Falha\x20ao\x20cancelar\x20a\x20geracao.";
    return _0x3ade20 || _0x12e80d;
  }
  async function _0x199300(_0x27eb3b, _0x1b9683) {
    const _0x52984c = await _0x53c87a(_0x27eb3b, _0x1b9683);
    return _0x52984c?.["ok"] || !_0x52984c?.["transientFrameError"]
      ? _0x52984c
      : _0x1685d8(_0x1b9683);
  }
  async function _0x736dc3() {
    if (_0x3b936e) return;
    const _0x1ce1a2 = window["prompt"](
      "Nome\x20do\x20Projeto:",
      "Novo\x20Projeto",
    );
    if (null === _0x1ce1a2) return;
    const _0x5de3a9 = _0x1ce1a2["trim"]();
    if (!_0x5de3a9) return;
    ((_0x3b936e = !0x0), _0x13e759(!0x0));
    let _0x273db3 = null;
    try {
      (_0x595559(
        window.gutoGetTranslation ? window.gutoGetTranslation("Criando projeto \"" + _0x5de3a9 + "\"... aguarde.") : "Criando projeto \"" + _0x5de3a9 + "\"... aguarde.",
      ),
        (_0x273db3 = await _0x47b862()));
      const _0x23b6d2 = {};
      _0x23b6d2["action"] = "getToken";
      const _0x1bf9b3 = await ((_0x2bd4e1 = [
          "captured_auth_token",
          "captured_lovable_token",
          "captured_client_git_sha",
        ]),
        new Promise((_0xf97e9e) => {
          chrome["storage"]["local"]["get"](_0x2bd4e1, (_0xc59001) =>
            _0xf97e9e(_0xc59001 || {}),
          );
        })),
        _0x380d29 = await ((_0x280211 = _0x273db3["tab"]["id"]),
        (_0x210a17 = _0x23b6d2),
        new Promise((_0x1c07b1) => {
          chrome["tabs"]["sendMessage"](_0x280211, _0x210a17, (_0x3d503b) => {
            chrome["runtime"]["lastError"]
              ? _0x1c07b1(null)
              : _0x1c07b1(_0x3d503b || null);
          });
        })),
        _0x4a52e7 = {
          mode: "create",
          projectName: _0x5de3a9,
          initialMessage: _0x5de3a9,
          clientGitSha: _0x1bf9b3["captured_client_git_sha"] || null,
          storedTokens: {
            authToken:
              _0x380d29?.["authToken"] ||
              _0x1bf9b3["captured_auth_token"] ||
              null,
            lovableToken:
              _0x380d29?.["lovableToken"] ||
              _0x1bf9b3["captured_lovable_token"] ||
              null,
          },
        },
        _0x401e8a = await _0x199300(_0x273db3["tab"]["id"], _0x4a52e7);
      if (!_0x401e8a || !_0x401e8a["ok"] || !_0x401e8a["projectId"])
        throw new Error(
          ((_0x57e98e = "Falha\x20ao\x20criar\x20projeto"),
          (_0x396152 = _0x401e8a)
            ? _0x396152["error"]
              ? _0x396152["error"]
              : _0x396152["text"]
                ? _0x57e98e +
                  "\x20(" +
                  (_0x396152["status"] || 0x0) +
                  "):\x20" +
                  String(_0x396152["text"])["slice"](0x0, 0xf0)
                : _0x396152["status"]
                  ? _0x57e98e + "\x20(" + _0x396152["status"] + ")"
                  : _0x57e98e
            : _0x57e98e),
        );
      const _0xcd1cde =
        _0x401e8a["link"] ||
        "https://lovable.dev/" + "projects/" + _0x401e8a["projectId"];
      const _0x3ff648 = {};
      _0x3ff648["current_project_id"] = _0x401e8a["projectId"];
      const _0x31f428 = {};
      _0x31f428["url"] = _0xcd1cde;
      _0x31f428["active"] = !0x0;
      (await ((_0x3ab25f = _0x3ff648),
      new Promise((_0x477ba1) => {
        chrome["storage"]["local"]["set"](_0x3ab25f, _0x477ba1);
      })),
        await _0x29542e(_0x31f428));
      const _0x298ea6 = {};
      _0x298ea6["mode"] = "cancel";
      _0x298ea6["projectId"] = _0x401e8a["projectId"];
      _0x298ea6["messageId"] = _0x401e8a["messageId"];
      _0x298ea6["aiMessageId"] = _0x401e8a["aiMessageId"];
      _0x298ea6["clientGitSha"] = _0x1bf9b3["captured_client_git_sha"] || null;
      _0x298ea6["retryDelaysMs"] = _0x58e93e;
      _0x298ea6["storedTokens"] = {};
      _0x298ea6["storedTokens"]["authToken"] =
        _0x380d29?.["authToken"] || _0x1bf9b3["captured_auth_token"] || null;
      _0x298ea6["storedTokens"]["lovableToken"] =
        _0x380d29?.["lovableToken"] ||
        _0x1bf9b3["captured_lovable_token"] ||
        null;
      const _0x54df07 = _0x298ea6,
        _0x3e642e = await _0x199300(_0x273db3["tab"]["id"], _0x54df07);
      ((_0x3e642e && _0x3e642e["ok"]) ||
        console["warn"](
          "[ProjectCreate]\x20Stop\x20automatico\x20nao\x20confirmado:",
          _0x3e642e,
        ),
        _0x595559(window.gutoGetTranslation ? window.gutoGetTranslation("Projeto criado com sucesso.") : "Projeto criado com sucesso."));
    } catch (_0x135c3b) {
      const _errMsg = _0x135c3b?.["message"] || String(_0x135c3b);
      const _is403 = _errMsg.includes("403") || (_0x401e8a && _0x401e8a["status"] === 403);
      if (_is403) {
        _0x595559(
          window.gutoGetTranslation ? window.gutoGetTranslation("Erro: Falha ao criar um projeto (403)\nEntre na aba de um projeto de forma manual") : "Erro: Falha ao criar um projeto (403)\nEntre na aba de um projeto de forma manual",
          true,
        );
      } else {
        _0x595559(
          window.gutoGetTranslation ? window.gutoGetTranslation("Erro: " + _errMsg) : "Erro: " + _errMsg,
          true,
        );
      }
    } finally {
      if (_0x273db3 && _0x273db3["cleanup"] && _0x273db3["tab"]?.["id"])
        try {
          await chrome["tabs"]["remove"](_0x273db3["tab"]["id"]);
        } catch (_0x44d068) {}
      ((_0x3b936e = !0x1), _0x13e759(!0x1));
    }
    var _0x3ab25f, _0x57e98e, _0x396152, _0x280211, _0x210a17, _0x2bd4e1;
  }
  document["addEventListener"](
    "click",
    (_0xb782d9) => {
      _0xb782d9["target"] instanceof Element &&
        _0xb782d9["target"]["closest"](_0x909a21) &&
        (_0xb782d9["preventDefault"](),
        _0xb782d9["stopImmediatePropagation"](),
        _0x736dc3());
    },
    !0x0,
  );
})();
