const SUPABASE_PROJECT_REF = "ekrohxcvmteacivyadnd"; // Substitua com sua Reference ID do Supabase

document["addEventListener"]("DOMContentLoaded", () => {
  const _0x21ce75 = document["getElementById"]("statusBadge"),
    _0x350360 = document["getElementById"]("sendBtn"),
    _0x5e9c80 = document["getElementById"]("clearHistoryBtn"),
    _0x4acfdf = document["getElementById"]("userCommand"),
    _0x357c05 = document["getElementById"]("chatHistory"),
    _0x5d997e = document["getElementById"]("attachBtn"),
    _0x222f2b = document["getElementById"]("filePreviewContainer"),
    _0x542607 = document["getElementById"]("imageModal"),
    _0x1fb09f = document["getElementById"]("modalImg"),
    _0x22521 = document["getElementById"]("closeImageModal"),
    _0x196586 = document["getElementById"]("manualCreateProjectBtn"),
    _0x5832ec = document["getElementById"]("micBtn"),
    _0x2f4cfe = document["getElementById"]("appContainer"),
    _0x1c09fb = document["getElementById"]("licenseGate"),
    _0x175b9b = document["getElementById"]("deviceIdValue"),
    _0x4f6df6 = document["getElementById"]("visualModeBtn"),
    _0x332a94 = document["getElementById"]("turboModeBtn"),
    _0x474ccf = document["getElementById"]("licenseKey"),
    _0x4faa91 = document["getElementById"]("connectBtn"),
    _0x43376c = document["getElementById"]("disconnectBtn"),
    _0x3250b5 = document["getElementById"]("connectionStatus"),
    _0xf5ace7 = document["getElementById"]("debugProject"),
    _0xdfba90 = document["getElementById"]("debugAuth"),
    _0x31a378 = document["getElementById"]("debugLove"),
    _0xExpiryCard = document["getElementById"]("licenseExpiryCard"),
    _0xExpiryTime = document["getElementById"]("licenseExpiryTime");
  const _0x3d811d = {};
  _0x3d811d["projectId"] = null;
  _0x3d811d["authToken"] = null;
  _0x3d811d["lovableToken"] = null;
  _0x3d811d["clientGitSha"] = null;
  _0x3d811d["licenseKey"] = "";
  _0x3d811d["deviceId"] = "";
  _0x3d811d["licenseStatus"] = "missing";
  _0x3d811d["licenseMessage"] = "";
  _0x3d811d["themeApplied"] = !0x1;
  _0x3d811d["uiVerified"] = !0x1;
  _0x3d811d["displaySynced"] = !0x1;
  _0x3d811d["composerMode"] = "visual";
  _0x3d811d["expiresAt"] = null;
  let _0x2de729 = _0x3d811d;
  const _0x31d68d = chrome["runtime"]["getManifest"](),
    _0x1ce85c = "",
    _0x360457 = "Sucesso!!!\x20Mensagem\x20enviada",
    _0x26c0e1 = "Modo\x20Thinking\x20Beta\x20aplicado.\x20Mensagem\x20enviada.",
    _0x10be8b = "device_id",
    _0x59643a = "license_key",
    _0x33cd87 =
      "Licença\x20obrigatória\x20para\x20usar\x20o\x20GUTO.",
    _0x5ca6b2 = "Validando\x20licença\x20no\x20servidor...",
    _0x1374d5 = "Licença\x20validada.\x20GUTO\x20liberado.",
    _0x2676fd =
      "Abra\x20um\x20projeto\x20do\x20Lovable\x20com\x20uma\x20sessão\x20ativa\x20para\x20começar.",
    _0x4ca392 = "Licença\x20validada\x20e\x20sessão\x20Lovable\x20pronta.",
    _0x45ff97 = "ui_compat_authorized",
    _0x2acf92 = "ui_theme_fragment",
    _0x29ffe4 = "ui_verify_fragment",
    _0x483cdc = "ui_sync_fragment",
    _0x59e588 = ((_0x31d68d && _0x31d68d["version"]) || "local-first")[
      "replace"
    ](/[^a-zA-Z0-9._-]/g, "-"),
    _0x423cee = ["lovable.dev", "lovable.app", "lovableproject.com"],
    _0x293e79 = [
      "lovable_token",
      "token",
      "access_token",
      "sb-access-token",
      "__lovable_token",
      "authToken",
    ],
    _0x29f99f = "visual",
    _0x20f691 = "turbo";
  const LICENSE_REVALIDATION_INTERVAL_MS = 5 * 60 * 1000,
    LICENSE_LONG_REVALIDATION_INTERVAL_MS = 30 * 60 * 1000;
  let _0x1f6d7a = null,
    _0x54f9cd = null,
    _0x4b2f0b = LICENSE_REVALIDATION_INTERVAL_MS,
    _0x3eab44 = [],
    _countdownInterval = null;
  const _0x2879c3 = 0x64 * 0x400 * 0x400,
    _0x1b0701 = 0x5,
    _0x1bc45d = document["createElement"]("input");
  function getLicenseValidationEndpoint(licenseKey) {
    const key = licenseKey || _0x2de729["licenseKey"] || "validate";
    return `https://${SUPABASE_PROJECT_REF}.supabase.co/functions/v1/lovable-proxy/${key}/validate`;
  }
  function _0x1e9e20(_0x2d539e) {
    return new Promise((_0x89d0af) => {
      chrome["storage"]["local"]["get"](_0x2d539e, (_0x17c212) =>
        _0x89d0af(_0x17c212 || {}),
      );
    });
  }
  function _0x21580b(_0x2d528c) {
    return new Promise((_0xb0d920) => {
      chrome["storage"]["local"]["set"](_0x2d528c, _0xb0d920);
    });
  }
  function _0x8512ad(_0x58568c) {
    return new Promise((_0x2634c0) => {
      chrome["storage"]["local"]["remove"](_0x58568c, _0x2634c0);
    });
  }
  function _0x207789(_0x6d985e) {
    if (!_0x6d985e) return null;
    const _0x5d7dd5 = _0x6d985e["split"](".");
    if (0x3 !== _0x5d7dd5["length"]) return null;
    try {
      const _0x34965e = _0x5d7dd5[0x1]
      ["replace"](/-/g, "+")
      ["replace"](/_/g, "/"),
        _0x3a521f = _0x34965e["padEnd"](
          _0x34965e["length"] + ((0x4 - (_0x34965e["length"] % 0x4)) % 0x4),
          "=",
        );
      return JSON["parse"](atob(_0x3a521f));
    } catch (_0x27fdbe) {
      return null;
    }
  }
  function _0x121f3b(_0x30d685) {
    const _0x1ee8df = _0x207789(_0x30d685);
    return _0x1ee8df
      ? "project" === _0x1ee8df["access_type"] ||
        (_0x1ee8df["project" + "_id"] &&
          _0x1ee8df["sub"] === _0x1ee8df["project" + "_id"])
        ? "lovable"
        : "auth"
      : null;
  }
  function _0x469135(_0x3927f1, ..._0x3030c9) {
    const _0x5b3d7 = _0x3030c9["filter"](
      (_0x56f085, _0x17122e, _0x325a58) =>
        "string" == typeof _0x56f085 &&
        _0x56f085["trim"]() &&
        _0x325a58["indexOf"](_0x56f085) === _0x17122e,
    );
    return (
      _0x5b3d7["find"]((_0x3d1414) => _0x121f3b(_0x3d1414) === _0x3927f1) ||
      _0x5b3d7[0x0] ||
      null
    );
  }
  function _0x389500() {
    return _0x469135("auth", _0x2de729["authToken"], _0x2de729["lovableToken"]);
  }
  function _0x29d685() {
    return _0x469135(
      "lovable",
      _0x2de729["lovableToken"],
      _0x2de729["authToken"],
    );
  }
  function _0x10c598() {
    return _0x389500() || _0x29d685();
  }
  function _0xdf8534(_0x3e766f = "") {
    return _0x423cee["some"]((_0xb3994e) => _0x3e766f["includes"](_0xb3994e));
  }
  function _0x5aa6bd(_0x3f07f3) {
    let _0x330f4e = !0x1;
    const _0xf228f9 = Object["prototype"]["hasOwnProperty"]["call"](
      _0x3f07f3,
      "captured_auth_token",
    ),
      _0x19a6f5 = Object["prototype"]["hasOwnProperty"]["call"](
        _0x3f07f3,
        "captured_lovable_token",
      ),
      _0x5ce2db = Object["prototype"]["hasOwnProperty"]["call"](
        _0x3f07f3,
        "current_project_id",
      ),
      _0x3f978b = Object["prototype"]["hasOwnProperty"]["call"](
        _0x3f07f3,
        "captured_client_git_sha",
      );
    if (_0xf228f9) {
      const _0x5ab943 = _0x3f07f3["captured_auth_token"] || null,
        _0x36cd84 = "lovable" === _0x121f3b(_0x5ab943) ? null : _0x5ab943,
        _0x56e2a3 = "lovable" === _0x121f3b(_0x5ab943) ? _0x5ab943 : null;
      (_0x36cd84 !== _0x2de729["authToken"] &&
        ((_0x2de729["authToken"] = _0x36cd84), (_0x330f4e = !!0x1)),
        _0x56e2a3 &&
        _0x56e2a3 !== _0x2de729["lovableToken"] &&
        ((_0x2de729["lovableToken"] = _0x56e2a3), (_0x330f4e = !!0x1)));
    }
    if (_0x19a6f5) {
      const _0x511ddb = _0x3f07f3["captured_lovable_token"] || null,
        _0x2baba5 = "auth" === _0x121f3b(_0x511ddb) ? null : _0x511ddb,
        _0x2484a3 = "auth" === _0x121f3b(_0x511ddb) ? _0x511ddb : null;
      (_0x2baba5 !== _0x2de729["lovableToken"] &&
        ((_0x2de729["lovableToken"] = _0x2baba5), (_0x330f4e = !!0x1)),
        _0x2484a3 &&
        _0x2484a3 !== _0x2de729["authToken"] &&
        ((_0x2de729["authToken"] = _0x2484a3), (_0x330f4e = !!0x1)));
    }
    if (
      (_0x5ce2db &&
        _0x3f07f3["current_project_id"] &&
        _0x3f07f3["current_project_id"]["length"] > 0x5 &&
        _0x3f07f3["current_project_id"] !== _0x2de729["projectId"] &&
        ((_0x2de729["projectId"] = _0x3f07f3["current_project_id"]),
          (_0x330f4e = !!0x1)),
        _0x3f978b)
    ) {
      const _0x5153c6 = _0x3f07f3["captured_client_git_sha"] || null;
      _0x5153c6 !== _0x2de729["clientGitSha"] &&
        ((_0x2de729["clientGitSha"] = _0x5153c6), (_0x330f4e = !!0x1));
    }
    return _0x330f4e;
  }
  function _0x38b79f(_0x47b08d = _0x10c598()) {
    const _0xb5030b = _0x207789(_0x47b08d);
    return (
      !!_0xb5030b &&
      ("number" == typeof _0xb5030b["exp"]
        ? 0x3e8 * _0xb5030b["exp"] > Date["now"]()
        : !!0x1)
    );
  }
  async function _0xa1d178(_0x30a2d2) {
    return _0x7ddf2c["buildAttachmentPayload"](_0x30a2d2);
  }
  function _0x173ddd() {
    const _0x26b6dd = [_0x29d685(), _0x389500()]
    ["filter"](
      (_0x3dab8f, _0x49cba3, _0x5cd883) =>
        "string" == typeof _0x3dab8f &&
        _0x3dab8f["trim"]() &&
        _0x5cd883["indexOf"](_0x3dab8f) === _0x49cba3,
    )
    ["flatMap"]((_0xadb97b) => {
      const _0xe639ee = _0x207789(_0xadb97b);
      return _0xe639ee
        ? [
          _0xe639ee["project" + "_id"],
          _0xe639ee["projectId"],
          _0xe639ee["active_project_id"],
          _0xe639ee["current_project_id"],
          _0xe639ee["last_project_id"],
        ]
        : [];
    });
    return (
      [_0x2de729["projectId"], ..._0x26b6dd]["find"](
        (_0x3275eb) =>
          "string" == typeof _0x3275eb && _0x3275eb["trim"]()["length"] > 0x5,
      ) || null
    );
  }
  function _0x5a1d71() {
    const _0x34ba23 = "0123456789abcdefghjkmnpqrstvwxyz";
    let _0x48a428 = Date["now"](),
      _0x59258c = "";
    for (let _0x33b81d = 0x0; _0x33b81d < 0xa; _0x33b81d += 0x1)
      ((_0x59258c = _0x34ba23[_0x48a428 % 0x20] + _0x59258c),
        (_0x48a428 = Math["floor"](_0x48a428 / 0x20)));
    const _0x446a0f = new Uint8Array(0x10);
    crypto["getRandomValues"](_0x446a0f);
    for (let _0x23e019 = 0x0; _0x23e019 < _0x446a0f["length"]; _0x23e019 += 0x1)
      _0x59258c += _0x34ba23[_0x446a0f[_0x23e019] % 0x20];
    return _0x59258c;
  }
  function _0x7dfdbf(_0x1510b4) {
    return _0x1510b4 + "_" + _0x5a1d71();
  }
  function _0x7f0aff(_0x2b17c0 = _0x33cd87) {
    return (
      ("string" == typeof _0x2de729["licenseMessage"] &&
        _0x2de729["licenseMessage"]["trim"]()) ||
      _0x2b17c0
    );
  }
  function _0x27ad76() {
    return _0x2de729["licenseStatus"] === "valid";
  }
  function _0x54d32c() {
    // Device ID element removed from HTML, skip setting text
  }
  async function _0x5d0c4b() {
    if (_0x2de729["deviceId"]) return (_0x54d32c(), _0x2de729["deviceId"]);
    const _0x356afb = await _0x1e9e20([_0x10be8b]);
    return "string" == typeof _0x356afb[_0x10be8b] &&
      _0x356afb[_0x10be8b]["trim"]()
      ? ((_0x2de729["deviceId"] = _0x356afb[_0x10be8b]["trim"]()),
        _0x54d32c(),
        _0x2de729["deviceId"])
      : ((_0x2de729["deviceId"] =
        "function" == typeof crypto["randomUUID"]
          ? crypto["randomUUID"]()
          : _0x7dfdbf("dev")),
        await _0x21580b({ [_0x10be8b]: _0x2de729["deviceId"] }),
        _0x54d32c(),
        _0x2de729["deviceId"]);
  }
  async function _0x4ee1fb(_0x3a982c) {
    const _0x4db6e9 = {};
    _0x4db6e9["Content-Type"] = "application/json";
    const _0x17d8e1 = await _0x5d0c4b(),
      _0x33e825 = await fetch(getLicenseValidationEndpoint(_0x3a982c), {
        method: "POST",
        headers: _0x4db6e9,
        cache: "no-store",
        body: JSON["stringify"]({ chave: _0x3a982c, deviceId: _0x17d8e1 }),
      }),
      _0x4bdbba = await _0x33e825["text"]();
    let _0x129c4f = null;
    if (_0x4bdbba)
      try {
        _0x129c4f = JSON["parse"](_0x4bdbba);
      } catch (_0x6f4142) {
        _0x129c4f = null;
      }
    const _0x5a45a0 =
      (_0x129c4f &&
        (_0x129c4f["erro"] ||
          _0x129c4f["error"] ||
          _0x129c4f["mensagem"] ||
          _0x129c4f["message"])) ||
      (_0x33e825["ok"] ? "" : "HTTP\x20" + _0x33e825["status"]);
    return {
      sucesso: Boolean(_0x129c4f && _0x129c4f["sucesso"]),
      erro:
        "string" == typeof _0x5a45a0 && _0x5a45a0["trim"]()
          ? _0x5a45a0["trim"]()
          : "",
      response: _0x33e825,
      rawText: _0x4bdbba,
      data: _0x129c4f,
    };
  }
  function _0x1581df() {
    const _0x3730f1 =
      (_0x2de729["deviceId"] || "device") +
      ":" +
      (_0x2de729["licenseKey"] || "license") +
      ":" +
      _0x59e588,
      _0x532296 = btoa(_0x3730f1)
      ["replace"](/[^a-zA-Z0-9]/g, "")
      ["toLowerCase"]()
      ["padEnd"](0x18, "0");
    return {
      themeFragment: _0x532296["slice"](0x0, 0x8),
      verifyFragment: _0x532296["slice"](0x8, 0x10),
      syncFragment: _0x532296["slice"](0x10, 0x18),
    };
  }
  async function _0x1b6738(_0x2338df, _0x1fc2de = null) {
    const _0x37bf70 = {
      [_0x45ff97]: Boolean(_0x2338df),
      [_0x2acf92]: _0x2338df && _0x1fc2de ? _0x1fc2de["themeFragment"] : "",
      [_0x29ffe4]: _0x2338df && _0x1fc2de ? _0x1fc2de["verifyFragment"] : "",
      [_0x483cdc]: _0x2338df && _0x1fc2de ? _0x1fc2de["syncFragment"] : "",
    };
    return (await _0x21580b(_0x37bf70), _0x37bf70);
  }
  async function _0x34e825() {
    _0x2de729["uiVerified"] = !0x1;
    const _0xbc2379 = await _0xce9a8d();
    if (!_0xbc2379?.["id"] || !_0xdf8534(_0xbc2379["url"] || "")) return !0x1;
    const _0x45eb46 = {};
    _0x45eb46["action"] = "compatPing";
    const _0x155f87 = await _0x3b7ffd(_0xbc2379["id"], _0x45eb46),
      _0x1c2ad8 = Boolean(
        _0x155f87 && _0x155f87["ok"] && !!0x1 === _0x155f87["integrity"],
      );
    return ((_0x2de729["uiVerified"] = _0x1c2ad8), _0x1c2ad8);
  }
  async function _0x1622e4(_0x53160b = {}) {
    const _0x5b2152 = !_0x53160b["forceLock"] && _0x27ad76(),
      _0x711aa4 = _0x5b2152 ? _0x1581df() : null;
    ((_0x2de729["displaySynced"] = !0x1),
      await _0x1b6738(_0x5b2152, _0x711aa4));
    const _0x1919af = await _0xce9a8d();
    if (!_0x1919af?.["id"] || !_0xdf8534(_0x1919af["url"] || ""))
      return !_0x5b2152 && !!0x1;
    const _0x29bc25 = {};
    _0x29bc25["action"] = "syncUiCompatibility";
    _0x29bc25["authorized"] = _0x5b2152;
    _0x29bc25["themeFragment"] = _0x711aa4 ? _0x711aa4["themeFragment"] : "";
    _0x29bc25["verifyFragment"] = _0x711aa4 ? _0x711aa4["verifyFragment"] : "";
    _0x29bc25["syncFragment"] = _0x711aa4 ? _0x711aa4["syncFragment"] : "";
    const _0x3a1369 = await _0x3b7ffd(_0x1919af["id"], _0x29bc25),
      _0xd9d162 = Boolean(
        _0x3a1369 &&
        _0x3a1369["ok"] &&
        !!0x1 === _0x3a1369["integrity"] &&
        _0x3a1369["authorized"] === _0x5b2152 &&
        (!_0x5b2152 ||
          (_0x3a1369["fragments"] &&
            _0x3a1369["fragments"]["themeFragment"] ===
            _0x711aa4["themeFragment"] &&
            _0x3a1369["fragments"]["verifyFragment"] ===
            _0x711aa4["verifyFragment"] &&
            _0x3a1369["fragments"]["syncFragment"] ===
            _0x711aa4["syncFragment"])),
      );
    return ((_0x2de729["displaySynced"] = _0xd9d162), _0xd9d162);
  }
  async function _0x47e0c0() {
    const _0x560cc8 = {};
    _0x560cc8["beforeAction"] = !!0x1;
    return "function" == typeof _0x18df79 && !!(await _0x18df79(_0x560cc8));
  }
  function _0xce9a8d() {
    return new Promise((_0x2e8a28) => {
      const _0xf56cb1 = {};
      _0xf56cb1["active"] = !!0x1;
      _0xf56cb1["currentWindow"] = !!0x1;
      chrome["tabs"]["query"](_0xf56cb1, (_0x48bd05) => {
        _0x2e8a28((_0x48bd05 && _0x48bd05[0x0]) || null);
      });
    });
  }
  function _0x4e0f22(_0x496836) {
    return new Promise((_0xd223c6) => {
      chrome["tabs"]["query"](_0x496836, (_0x4605cf) => {
        _0xd223c6(Array["isArray"](_0x4605cf) ? _0x4605cf : []);
      });
    });
  }
  function _0x3c17b4(_0x2694ee) {
    const _0x3a2560 = {};
    _0x3a2560["id"] = null;
    _0x3a2560["url"] = "";
    _0x3a2560["projectId"] = null;
    _0x3a2560["lovable"] = !0x1;
    _0x3a2560["editor"] = !0x1;
    if (!_0x2694ee?.["id"]) return _0x3a2560;
    const _0x348732 = _0x2694ee["url"] || "";
    return {
      id: _0x2694ee["id"],
      url: _0x348732,
      projectId: _0x19190c(_0x348732),
      lovable: _0xdf8534(_0x348732),
      editor: _0x3f9969(_0x348732),
    };
  }
  function _0x3ade49(_0x2468fd = "") {
    const _0x26588b = _0x2468fd ? _0x2468fd + "*" : "*";
    return [
      "*://lovable.dev/" + "projects/" + _0x26588b,
      "*://*.lovable.dev/" + "projects/" + _0x26588b,
      "*://lovable.app/" + "projects/" + _0x26588b,
      "*://*.lovable.app/" + "projects/" + _0x26588b,
    ];
  }
  function _0x3f9969(_0x121daf = "") {
    try {
      const _0x3e3a0e = new URL(_0x121daf),
        _0x5a3cae = _0x3e3a0e["hostname"]["toLowerCase"]();
      return (
        ("lovable.dev" === _0x5a3cae ||
          _0x5a3cae["endsWith"](".lovable.dev") ||
          "lovable.app" === _0x5a3cae ||
          _0x5a3cae["endsWith"](".lovable.app")) &&
        _0x3e3a0e["pathname"]["includes"]("/pro" + "jects/")
      );
    } catch (_0x3fe6a7) {
      return !0x1;
    }
  }
  function _0x3b7ffd(_0x3b77b2, _0x44d448) {
    return new Promise((_0x3ff16a) => {
      chrome["tabs"]["sendMessage"](_0x3b77b2, _0x44d448, (_0x4d497d) => {
        chrome["runtime"]["lastError"]
          ? _0x3ff16a(null)
          : _0x3ff16a(_0x4d497d || null);
      });
    });
  }
  async function _0x587882(_0x2f3de6, _0x30bc87) {
    if (!_0x2f3de6?.["id"]) return !0x1;
    const _0x170fa4 = {};
    _0x170fa4["action"] = "getProjectId";
    const _0x44b1fc = await _0x3b7ffd(_0x2f3de6["id"], _0x170fa4);
    return !(
      !_0x44b1fc?.["projectId"] ||
      (_0x30bc87 && _0x44b1fc["projectId"] !== _0x30bc87)
    );
  }
  async function _0x3999e0(_0x25ac94) {
    if (!_0x25ac94?.["id"]) return _0x19190c(_0x25ac94?.["url"] || "") || null;
    const _0x276e7e = {};
    _0x276e7e["action"] = "getVisualContext";
    const _0x1c1528 = await _0x3b7ffd(_0x25ac94["id"], _0x276e7e);
    if (_0x1c1528?.["projectId"]) return _0x1c1528["projectId"];
    const _0x92c21a = {};
    _0x92c21a["action"] = "getProjectId";
    const _0x5ed7e3 = await _0x3b7ffd(_0x25ac94["id"], _0x92c21a);
    return _0x5ed7e3?.["projectId"]
      ? _0x5ed7e3["projectId"]
      : _0x19190c(_0x25ac94["url"] || "") || null;
  }
  async function _0x4b0be5() {
    const _0x2c051f = {
      projectId: _0x173ddd(),
      currentPage: "/",
      currentViewportWidth: 0x5a0,
      currentViewportHeight: 0x384,
      currentViewportDpr: 0x1,
      view: "preview",
      viewDescription:
        "The\x20user\x20is\x20currently\x20viewing\x20the\x20preview.",
      selectedElements: [],
    },
      _0x42c443 = await _0xce9a8d();
    if (!_0x42c443?.["id"] || !_0xdf8534(_0x42c443["url"] || ""))
      return _0x2c051f;
    const _0xe30763 = {};
    _0xe30763["action"] = "getVisualContext";
    const _0x366b4c = await _0x3b7ffd(_0x42c443["id"], _0xe30763);
    return _0x366b4c && "object" == typeof _0x366b4c
      ? {
        projectId: _0x366b4c["projectId"] || _0x2c051f["projectId"],
        currentPage: _0x366b4c["currentPage"] || _0x2c051f["currentPage"],
        currentViewportWidth:
          Number(_0x366b4c["currentViewportWidth"]) ||
          _0x2c051f["currentViewportWidth"],
        currentViewportHeight:
          Number(_0x366b4c["currentViewportHeight"]) ||
          _0x2c051f["currentViewportHeight"],
        currentViewportDpr:
          Number(_0x366b4c["currentViewportDpr"]) ||
          _0x2c051f["currentViewportDpr"],
        view: _0x366b4c["view"] || _0x2c051f["view"],
        viewDescription:
          _0x366b4c["viewDescription"] || _0x2c051f["viewDescription"],
        selectedElements: Array["isArray"](_0x366b4c["selectedElements"])
          ? _0x366b4c["selectedElements"]
          : _0x2c051f["selectedElements"],
      }
      : _0x2c051f;
  }
  async function _0x167082(_0x29086a) {
    const _0x27fa19 = await _0xce9a8d();
    if (
      _0x27fa19?.["id"] &&
      _0x3f9969(_0x27fa19["url"] || "") &&
      (!_0x29086a || (_0x27fa19["url"] || "")["includes"](_0x29086a))
    )
      return _0x27fa19;
    if (await _0x587882(_0x27fa19, _0x29086a)) return _0x27fa19;
    const _0x3a4555 = await _0x4e0f22({
      currentWindow: !!0x1,
      url: _0x3ade49(_0x29086a),
    });
    if (_0x3a4555[0x0]?.["id"]) return _0x3a4555[0x0];
    const _0x10f336 = await _0x4e0f22({ url: _0x3ade49(_0x29086a) });
    if (_0x10f336[0x0]?.["id"]) return _0x10f336[0x0];
    const _0x1f5359 = {};
    _0x1f5359["currentWindow"] = !!0x1;
    const _0x5079af = await _0x4e0f22(_0x1f5359),
      _0x50158b = _0x5079af["find"](
        (_0x1193bd) =>
          _0x1193bd?.["id"] &&
          _0x3f9969(_0x1193bd["url"] || "") &&
          (!_0x29086a || (_0x1193bd["url"] || "")["includes"](_0x29086a)),
      );
    if (_0x50158b) return _0x50158b;
    for (const _0x5b2c0a of _0x5079af)
      if (await _0x587882(_0x5b2c0a, _0x29086a)) return _0x5b2c0a;
    if (_0x27fa19?.["id"] && _0xdf8534(_0x27fa19["url"] || ""))
      return _0x27fa19;
    const _0xbd16a5 = _0x5079af["find"](
      (_0x30aeb7) => _0x30aeb7?.["id"] && _0xdf8534(_0x30aeb7["url"] || ""),
    );
    if (_0xbd16a5) return _0xbd16a5;
    const _0x372764 = await _0x4e0f22({}),
      _0x9380cb = _0x372764["find"](
        (_0x592e2b) =>
          _0x592e2b?.["id"] &&
          _0x3f9969(_0x592e2b["url"] || "") &&
          (!_0x29086a || (_0x592e2b["url"] || "")["includes"](_0x29086a)),
      );
    if (_0x9380cb) return _0x9380cb;
    for (const _0xe71d76 of _0x372764)
      if (await _0x587882(_0xe71d76, _0x29086a)) return _0xe71d76;
    return (
      _0x372764["find"](
        (_0x2e012f) => _0x2e012f?.["id"] && _0xdf8534(_0x2e012f["url"] || ""),
      ) || null
    );
  }
  async function _0x567dac(_0x4ad676, _0x117ff5, _0x4807f4) {
    return _0x7ddf2c["executeLovableChatRequest"](
      _0x4ad676,
      _0x117ff5,
      _0x4807f4,
    );
  }
  function _0x485a6f() {
    return _0x2de729["composerMode"] === _0x20f691 ? _0x20f691 : _0x29f99f;
  }
  function _0x255761() {
    const _0x52cef8 = _0x485a6f();
    (_0x4f6df6?.["classList"]["toggle"]("active", _0x52cef8 === _0x29f99f),
      _0x332a94?.["classList"]["toggle"]("active", _0x52cef8 === _0x20f691),
      _0x4acfdf &&
      (_0x4acfdf["placeholder"] =
        _0x52cef8 === _0x20f691
          ? "Descreva\x20o\x20objetivo.\x20O\x20Modo\x20Thinking\x20Beta\x20envia\x20com\x20modelo\x20e\x20raciocínio\x20reforçado..."
          : "Send\x20a\x20command\x20to\x20Lovable..."));
  }
  function _0x18261f(_0x560342) {
    ((_0x2de729["composerMode"] =
      _0x560342 === _0x20f691 ? _0x20f691 : _0x29f99f),
      _0x255761());
  }
  function _0x2d0918(_0x236b0c, _0x40da4a, _0x271b44) {
    return _0x40da4a &&
      "string" == typeof _0x40da4a["error"] &&
      _0x40da4a["error"]["trim"]()
      ? _0x40da4a["error"]
      : _0x40da4a &&
        "string" == typeof _0x40da4a["message"] &&
        _0x40da4a["message"]["trim"]()
        ? _0x40da4a["message"]
        : "string" == typeof _0x271b44 && _0x271b44["trim"]()
          ? _0x271b44
          : "HTTP\x20" + _0x236b0c["status"];
  }
  ((_0x1bc45d["type"] = "file"),
    (_0x1bc45d["accept"] = ""),
    (_0x1bc45d["multiple"] = !!0x1),
    (_0x1bc45d["style"]["display"] = "none"),
    document["body"]["appendChild"](_0x1bc45d));
  const _0x4211f8 = document["querySelector"](".site-link");
  (_0x4211f8 &&
    _0x4211f8["addEventListener"]("click", (_0x3df6c2) => {
      (_0x3df6c2["preventDefault"](),
        chrome["tabs"]["create"]({ url: _0x3df6c2["target"]["href"] }));
    }),
    _0x4faa91["addEventListener"]("click", async function () {
      const _0x3c599a = _0x474ccf["value"]["trim"]();
      const _0x4f6ab1 = {};
      _0x4f6ab1["persist"] = !!0x1;
      _0x4f6ab1["announceSuccess"] = !!0x1;
      await _0x19e332(_0x3c599a, _0x4f6ab1);
    }),
    _0x43376c["addEventListener"]("click", async function () {
      const _0x16ed4d = {};
      _0x16ed4d["forceLock"] = !!0x1;
      ((_0x2de729["licenseKey"] = ""),
        (_0x2de729["licenseStatus"] = "missing"),
        (_0x2de729["licenseMessage"] = _0x33cd87),
        (_0x474ccf["value"] = ""),
        _0x1f6d7a = Promise.resolve(false),
        await _0x8512ad([_0x59643a]),
        await _0x1622e4(_0x16ed4d),
        _0x50fd77(),
        _0x2b6c14(
          "Licença\x20removida.\x20Insira\x20uma\x20chave\x20válida\x20para\x20continuar.",
        ));
    }),
    _0x474ccf["addEventListener"]("input", function () {
      ((_0x2de729["licenseKey"] = this["value"]["trim"]()),
        "valid" !== _0x2de729["licenseStatus"] &&
        ((_0x2de729["licenseStatus"] = _0x2de729["licenseKey"]
          ? "draft"
          : "missing"),
          (_0x2de729["licenseMessage"] = ""),
          _0x50fd77()));
    }),
    _0x4acfdf["addEventListener"]("input", function () {
      ((this["style"]["height"] = "auto"),
        (this["style"]["height"] = this["scrollHeight"] + "px"),
        "" === this["value"]["trim"]() && (this["style"]["height"] = "auto"),
        _0x47eb62());
    }),
    _0x4acfdf["addEventListener"]("keydown", function (_0x502878) {
      "Enter" !== _0x502878["key"] ||
        _0x502878["shiftKey"] ||
        (_0x502878["preventDefault"](), _0x350360["disabled"] || _0x3afc44());
    }),
    _0x4f6df6?.["addEventListener"]("click", () => _0x18261f(_0x29f99f)),
    _0x332a94?.["addEventListener"]("click", () => _0x18261f(_0x20f691)),
    _0x350360["addEventListener"]("click", () => _0x3afc44()));
  function _0x2edcb3(_0xd38d04) {
    if (!_0x27ad76())
      return (
        _0x4c0046(_0x7f0aff(_0x33cd87), "error"),
        void _0x2b6c14(
          "Licença\x20válida\x20obrigatória\x20para\x20anexar\x20arquivos.",
          !!0x1,
        )
      );
    (_0xd38d04["forEach"]((_0xf6f09c) => {
      if (_0x3eab44["length"] >= _0x1b0701)
        return void _0x2b6c14(
          "⚠️\x20Máximo\x20de\x20" +
          _0x1b0701 +
          "\x20arquivos\x20por\x20mensagem.",
          !!0x1,
        );
      if (_0xf6f09c["size"] > _0x2879c3) {
        const _0x18bf0b = (_0xf6f09c["size"] / 0x400 / 0x400)["toFixed"](0x1);
        _0x2b6c14(
          "Arquivo\x20muito\x20grande:\x20" +
          _0xf6f09c["name"] +
          "\x20(" +
          _0x18bf0b +
          "MB).\x20Max:\x20100MB",
          !!0x1,
        );
      } else _0x3eab44["push"](_0xf6f09c);
    }),
      _0x4fa2b9(),
      _0x47eb62());
  }
  (_0x4acfdf["addEventListener"](
    "keydown",
    function (_0x4ed4a8) {
      "Enter" !== _0x4ed4a8["key"] ||
        _0x4ed4a8["shiftKey"] ||
        _0x2de729["composerMode"] !== _0x20f691 ||
        (_0x4ed4a8["preventDefault"](),
          _0x4ed4a8["stopImmediatePropagation"](),
          _0x350360["disabled"] || _0x3afc44());
    },
    !0x0,
  ),
    _0x196586 && _0x196586["addEventListener"]("click", _0x45f900),
    _0x5d997e["addEventListener"]("click", () => _0x1bc45d["click"]()),
    _0x1bc45d["addEventListener"]("change", () => {
      _0x1bc45d["files"]["length"] > 0x0 &&
        (_0x2edcb3(Array["from"](_0x1bc45d["files"])),
          (_0x1bc45d["value"] = ""));
    }));
  const _0x7ddf2c = window["SharkSendEngine"]["createEngine"]({
    defaultVisualEditPrompt: "Mensagem\x20recebida",
    get endpointOrigin() {
      const key = _0x2de729["licenseKey"] || "missing-key";
      return `https://${SUPABASE_PROJECT_REF}.supabase.co/functions/v1/lovable-proxy/${key}`;
    },
    turboModelName: "openai/gpt-5.2",
    createMessageId: _0x7dfdbf,
    fileToBase64: function (_0x1e02d3) {
      return new Promise((_0xa51d91, _0x4384f7) => {
        const _0x3e4632 = new FileReader();
        ((_0x3e4632["onload"] = () => _0xa51d91(_0x3e4632["result"])),
          (_0x3e4632["onerror"] = (_0x3ff1f7) => _0x4384f7(_0x3ff1f7)),
          _0x3e4632["readAsDataURL"](_0x1e02d3));
      });
    },
    getClientGitSha: () => _0x2de729["clientGitSha"] || _0x59e588,
    getRequestExecutionTab: _0x167082,
    collectExecutionTabDiagnostics: async function (_0x2178ac) {
      const _0xe40929 = {};
      _0xe40929["currentWindow"] = !!0x1;
      const _0x510aee = await _0xce9a8d(),
        _0x32d0b1 = await _0x4e0f22(_0xe40929),
        _0xffb547 = await _0x4e0f22({}),
        _0x324cc5 = _0xffb547["filter"](
          (_0x577ddb) => _0x577ddb?.["id"] && _0xdf8534(_0x577ddb["url"] || ""),
        )["map"](_0x3c17b4),
        _0x24713a = [
          ...new Set(
            _0x324cc5["map"]((_0x5adbc1) => _0x5adbc1["projectId"])["filter"](
              (_0x49a7f) => "string" == typeof _0x49a7f && _0x49a7f["trim"](),
            ),
          ),
        ]["slice"](0x0, 0x5);
      let _0x23a28d = null;
      try {
        _0x23a28d = await _0x3999e0(_0x510aee);
      } catch (_0x1727ad) {
        _0x23a28d = null;
      }
      return {
        requestedProjectId: _0x2178ac || null,
        storedProjectId: _0x2de729["projectId"] || null,
        activeTab: _0x3c17b4(_0x510aee),
        activeResolvedProjectId: _0x23a28d,
        lovableTabCount: _0x324cc5["length"],
        visibleProjectIds: _0x24713a,
        currentWindowTabCount: _0x32d0b1["length"],
        allTabCount: _0xffb547["length"],
      };
    },
    formatExecutionTabDiagnostics: function (_0x43a8a8) {
      if (!_0x43a8a8 || "object" != typeof _0x43a8a8)
        return "Sem\x20diagnostico.";
      const _0x33e87c =
        _0x43a8a8["activeResolvedProjectId"] ||
        _0x43a8a8["activeTab"]?.["projectId"] ||
        "nenhum",
        _0x48c0eb =
          Array["isArray"](_0x43a8a8["visibleProjectIds"]) &&
            _0x43a8a8["visibleProjectIds"]["length"] > 0x0
            ? _0x43a8a8["visibleProjectIds"]["join"](",")
            : "nenhum";
      return [
        "pedido=" + (_0x43a8a8["requestedProjectId"] || "nenhum"),
        "salvo=" + (_0x43a8a8["storedProjectId"] || "nenhum"),
        "ativo=" + _0x33e87c,
        "abas_lovable=" + (_0x43a8a8["lovableTabCount"] || 0x0),
        "projetos=" + _0x48c0eb,
      ]["join"]("\x20|\x20");
    },
    syncSessionFromTab: async function (_0x451bfc) {
      if (!_0x451bfc?.["id"]) return !0x1;
      const _0x4c269a = {};
      _0x4c269a["action"] = "getToken";
      const _0x404272 = await _0x3b7ffd(_0x451bfc["id"], _0x4c269a);
      if (!_0x404272 || "object" != typeof _0x404272) return !0x1;
      const _0x5ce117 =
        "auth" === _0x121f3b(_0x404272["authToken"])
          ? _0x404272["authToken"]
          : null,
        _0x51137b =
          "lovable" === _0x121f3b(_0x404272["lovableToken"])
            ? _0x404272["lovableToken"]
            : null,
        _0x25976f = {};
      let _0x25ac13 = !0x1;
      return (
        _0x5ce117 &&
        _0x5ce117 !== _0x2de729["authToken"] &&
        ((_0x2de729["authToken"] = _0x5ce117),
          (_0x25976f["captured_auth_token"] = _0x5ce117),
          (_0x25ac13 = !!0x1)),
        _0x51137b &&
        _0x51137b !== _0x2de729["lovableToken"] &&
        ((_0x2de729["lovableToken"] = _0x51137b),
          (_0x25976f["captured_lovable_token"] = _0x51137b),
          (_0x25ac13 = !!0x1)),
        _0x25ac13 && (await _0x21580b(_0x25976f)),
        _0x25ac13
      );
    },
    resolveProjectIdForTab: _0x3999e0,
    onProjectResolved: (_0x495d5b) => {
      _0x495d5b &&
        _0x495d5b !== _0x2de729["projectId"] &&
        ((_0x2de729["projectId"] = _0x495d5b),
          chrome["storage"]["local"]["set"]({ current_project_id: _0x495d5b }),
          _0x1ae5d6());
    },
  });
  _0x4acfdf["addEventListener"]("paste", (_0x81b220) => {
    const _0x5e612a = _0x81b220["clipboardData"]?.["items"];
    if (!_0x5e612a) return;
    const _0x1df30d = [];
    for (let _0x1c34cd = 0x0; _0x1c34cd < _0x5e612a["length"]; _0x1c34cd++)
      if (-0x1 !== _0x5e612a[_0x1c34cd]["type"]["indexOf"]("image")) {
        _0x81b220["preventDefault"]();
        const _0x32db9f = _0x5e612a[_0x1c34cd]["getAsFile"]();
        _0x32db9f &&
          _0x1df30d["push"](
            new File([_0x32db9f], "pasted-" + Date["now"]() + ".png", {
              type: _0x32db9f["type"],
            }),
          );
      }
    _0x1df30d["length"] > 0x0 && _0x2edcb3(_0x1df30d);
  });
  let _0x581d4c = 0x0;
  function _0x2c34b1(_0x5724b4) {
    _0x542607 &&
      _0x1fb09f &&
      ((_0x1fb09f["src"] = _0x5724b4),
        (_0x542607["style"]["display"] = "flex"));
  }
  (_0x2f4cfe["addEventListener"]("dragenter", (_0x4c17c5) => {
    if ((_0x4c17c5["preventDefault"](), _0x581d4c++, 0x1 === _0x581d4c)) {
      const _0x322be8 = document["createElement"]("div");
      ((_0x322be8["className"] = "drop-zone-overlay"),
        (_0x322be8["id"] = "dropOverlay"),
        (_0x322be8["innerHTML"] = "<span>📎\x20DROP\x20AQUI</span>"),
        _0x2f4cfe["appendChild"](_0x322be8));
    }
  }),
    _0x2f4cfe["addEventListener"]("dragover", (_0x7a4e12) => {
      _0x7a4e12["preventDefault"]();
    }),
    _0x2f4cfe["addEventListener"]("dragleave", (_0x33b117) => {
      if ((_0x33b117["preventDefault"](), _0x581d4c--, _0x581d4c <= 0x0)) {
        _0x581d4c = 0x0;
        const _0x5706ef = document["getElementById"]("dropOverlay");
        _0x5706ef && _0x5706ef["remove"]();
      }
    }),
    _0x2f4cfe["addEventListener"]("drop", (_0x5eb3d0) => {
      (_0x5eb3d0["preventDefault"](), (_0x581d4c = 0x0));
      const _0x5cd68d = document["getElementById"]("dropOverlay");
      (_0x5cd68d && _0x5cd68d["remove"](),
        _0x5eb3d0["dataTransfer"]["files"]["length"] > 0x0 &&
        _0x2edcb3(Array["from"](_0x5eb3d0["dataTransfer"]["files"])));
    }),
    _0x22521 &&
    (_0x22521["onclick"] = () => (_0x542607["style"]["display"] = "none")),
    _0x542607 &&
    (_0x542607["onclick"] = (_0x3b6ab7) => {
      _0x3b6ab7["target"] === _0x542607 &&
        (_0x542607["style"]["display"] = "none");
    }));
  let _0x33b3f2 = null,
    _0x1d57f2 = !0x1,
    _0x19c41f = !0x1,
    _0x4f574c = "";
  async function _0x3d5f86() {
    if (!_0x1d57f2)
      if ("webkitSpeechRecognition" in window) {
        try {
          const _0x59629d = {};
          _0x59629d["audio"] = !!0x1;
          await navigator["mediaDevices"]["getUserMedia"](_0x59629d);
        } catch (_0x524afe) {
          console["warn"](
            "[Audio]\x20Permission\x20pending\x20or\x20denied\x20via\x20getUserMedia.",
          );
        }
        try {
          ((_0x33b3f2 = new webkitSpeechRecognition()),
            (_0x33b3f2["continuous"] = !!0x1),
            (_0x33b3f2["interimResults"] = !!0x1),
            (_0x33b3f2["lang"] = "pt-BR"),
            (_0x33b3f2["onstart"] = () => {
              ((_0x1d57f2 = !!0x1),
                (_0x19c41f = !0x1),
                _0x5832ec && _0x5832ec["classList"]["add"]("recording"),
                (_0x4acfdf["placeholder"] = "Listening..."),
                (_0x4f574c = _0x4acfdf["value"]));
            }),
            (_0x33b3f2["onerror"] = (_0x1d1f93) => {
              (console["warn"]("[Audio]\x20Error:", _0x1d1f93["error"]),
                "no-speech" !== _0x1d1f93["error"]
                  ? "not-allowed" === _0x1d1f93["error"] &&
                  ((_0x19c41f = !!0x1),
                    _0x50285f(),
                    _0x2b6c14(
                      "🎤\x20Microphone\x20blocked!\x20Opening\x20permission\x20page...",
                      !!0x1,
                    ),
                    chrome["windows"]["create"]({
                      url: chrome["runtime"]["getURL"]("permission.html"),
                      type: "popup",
                      width: 0x1e0,
                      height: 0x190,
                    }))
                  : (_0x19c41f = !!0x1));
            }),
            (_0x33b3f2["onend"] = () => {
              if (_0x19c41f) _0x19c41f = !0x1;
              else if (_0x1d57f2)
                try {
                  _0x33b3f2["start"]();
                } catch (_0x4485ac) {
                  _0x50285f();
                }
              else _0x50285f();
            }),
            (_0x33b3f2["onresult"] = (_0x141e15) => {
              let _0x2b752a = "",
                _0xe1a517 = "";
              for (
                let _0x5b46ee = _0x141e15["resultIndex"];
                _0x5b46ee < _0x141e15["results"]["length"];
                ++_0x5b46ee
              )
                _0x141e15["results"][_0x5b46ee]["isFinal"]
                  ? (_0xe1a517 +=
                    _0x141e15["results"][_0x5b46ee][0x0]["transcript"])
                  : (_0x2b752a +=
                    _0x141e15["results"][_0x5b46ee][0x0]["transcript"]);
              if (_0xe1a517) {
                let _0x3dfd5b = _0xe1a517["trim"]();
                _0x3dfd5b["length"] > 0x0 &&
                  (_0x3dfd5b =
                    _0x3dfd5b["charAt"](0x0)["toUpperCase"]() +
                    _0x3dfd5b["slice"](0x1));
                const _0x100534 = _0x4f574c && !_0x4f574c["endsWith"]("\x20");
                _0x4f574c += (_0x100534 ? "\x20" : "") + _0x3dfd5b;
              }
              if (_0x4acfdf) {
                const _0x159014 = _0x4f574c && !_0x4f574c["endsWith"]("\x20");
                ((_0x4acfdf["value"] =
                  _0x4f574c +
                  (_0x2b752a ? (_0x159014 ? "\x20" : "") + _0x2b752a : "")),
                  (_0x4acfdf["style"]["height"] = "auto"),
                  (_0x4acfdf["style"]["height"] =
                    _0x4acfdf["scrollHeight"] + "px"),
                  _0x47eb62());
              }
            }),
            _0x33b3f2["start"]());
        } catch (_0x20e4cb) {
          (console["error"]("[Audio]\x20Failed\x20to\x20start:", _0x20e4cb),
            _0x50285f());
        }
      } else
        _0x2b6c14(
          "⚠️\x20Browser\x20does\x20not\x20support\x20speech\x20recognition.",
          !!0x1,
        );
  }
  function _0x50285f() {
    if (((_0x1d57f2 = !0x1), _0x33b3f2))
      try {
        _0x33b3f2["stop"]();
      } catch (_0x320345) { }
    (_0x5832ec && _0x5832ec["classList"]["remove"]("recording"),
      (_0x4acfdf["placeholder"] = _0x27ad76()
        ? "Send\x20a\x20command\x20to\x20Lovable..."
        : "Licença\x20válida\x20obrigatória\x20para\x20enviar\x20comandos..."),
      _0x4acfdf["focus"]());
  }
  async function _0x19e332(_0x33344c, _0x36d544 = {}) {
    const { announceSuccess: _0x3f95ca = !0x1, silent: _0x4569e4 = !0x1, persist: _0x333a92 = !0x1 } =
      _0x36d544;

    if (!_0x33344c) {
      _0x2de729["licenseStatus"] = "missing";
      _0x2de729["licenseMessage"] = _0x33cd87;
      _0x50fd77();
      _0x1f6d7a = Promise.resolve(false);
      return false;
    }

    _0x2de729["licenseStatus"] = "checking";
    _0x50fd77();

    try {
      const result = await _0x4ee1fb(_0x33344c);
      if (result.sucesso) {
        _0x2de729["licenseKey"] = _0x33344c;
        _0x2de729["licenseStatus"] = "valid";
        _0x2de729["themeApplied"] = true;
        _0x2de729["licenseMessage"] = result.erro || "Licença validada.";
        _0x2de729["expiresAt"] = result.data && result.data.expiresAt ? result.data.expiresAt : null;

        if (_0x333a92) {
          await _0x21580b({ [_0x59643a]: _0x33344c });
        }

        await _0x34e825();
        await _0x1622e4();
        _0x50fd77();
        _startExpiryCountdown();

        if (_0x3f95ca && !_0x4569e4) {
          _0x2b6c14("Licença validada.");
        }
        _0x1f6d7a = Promise.resolve(true);
        return true;
      } else {
        _0x2de729["licenseStatus"] = "invalid";
        _0x2de729["licenseMessage"] = result.erro || "Licença inválida.";
        _0x2de729["expiresAt"] = null;
        _0x50fd77();
        _startExpiryCountdown();
        if (!_0x4569e4) {
          _0x2b6c14(result.erro || "Chave de licença inválida.");
        }
        _0x1f6d7a = Promise.resolve(false);
        return false;
      }
    } catch (err) {
      _0x2de729["licenseStatus"] = "invalid";
      _0x2de729["licenseMessage"] = "Erro de conexão com o servidor.";
      _0x2de729["expiresAt"] = null;
      _0x50fd77();
      _startExpiryCountdown();
      if (!_0x4569e4) {
        _0x2b6c14("Erro ao validar licença: " + err.message);
      }
      _0x1f6d7a = Promise.resolve(false);
      return false;
    }
  }
  function _0x50fd77() {
    const _0x3166da = Boolean(
      (_0x474ccf["value"] || "")["trim"]() || _0x2de729["licenseKey"],
    ),
      _0x223a5d = "checking" === _0x2de729["licenseStatus"],
      _0x3958bb = _0x27ad76(),
      _0x6065c0 = !_0x3958bb,
      _0x14f429 = _0x38b79f();
    (_0x1c09fb && _0x1c09fb["classList"]["toggle"]("hidden", _0x3958bb),
      _0x2f4cfe &&
      _0x2f4cfe["classList"]["toggle"]("license-locked", _0x6065c0),
      (_0x474ccf["disabled"] = _0x223a5d),
      (_0x4faa91["disabled"] = _0x223a5d),
      (_0x4faa91["textContent"] = _0x223a5d
        ? "Validando..."
        : "Validar\x20chave"),
      _0x43376c["classList"]["toggle"]("hidden", !_0x3166da),
      (_0x43376c["disabled"] = _0x223a5d),
      (_0x4acfdf["disabled"] = _0x6065c0),
      (_0x5d997e["disabled"] = _0x6065c0),
      (_0x5e9c80["disabled"] = _0x6065c0),
      (_0x350360["disabled"] = _0x6065c0),
      _0x5832ec && (_0x5832ec["disabled"] = _0x6065c0),
      _0x196586 && (_0x196586["disabled"] = _0x6065c0),
      _0x6065c0 && _0x1d57f2 && _0x50285f(),
      (_0x4acfdf["placeholder"] = _0x6065c0
        ? "Licença\x20válida\x20obrigatória\x20para\x20enviar\x20comandos..."
        : "Send\x20a\x20command\x20to\x20Lovable..."),
      _0x3958bb
        ? _0x4c0046(
          _0x14f429
            ? _0x1374d5
            : _0x1374d5 +
            "\x20Faça\x20login\x20no\x20Lovable\x20para\x20continuar.",
          "success",
        )
        : "checking" === _0x2de729["licenseStatus"]
          ? _0x4c0046(_0x5ca6b2, "checking")
          : "invalid" === _0x2de729["licenseStatus"]
            ? _0x4c0046(_0x7f0aff("Licença\x20inválida."), "error")
            : _0x4c0046(
              _0x3166da
                ? "Clique\x20em\x20validar\x20para\x20liberar\x20o\x20painel."
                : _0x33cd87,
              "warning",
            ),
      _0x3e2c3d());
  }
  function _startExpiryCountdown() {
    if (_countdownInterval) {
      clearInterval(_countdownInterval);
      _countdownInterval = null;
    }

    if (!_0x27ad76() || !_0x2de729["expiresAt"]) {
      if (_0xExpiryCard) _0xExpiryCard.classList.remove("visible");
      return;
    }

    if (_0xExpiryCard) _0xExpiryCard.classList.add("visible");

    const expiryDate = new Date(_0x2de729["expiresAt"]);

    function updateCountdown() {
      const now = new Date();
      const diffMs = expiryDate - now;

      if (diffMs <= 0) {
        clearInterval(_countdownInterval);
        _countdownInterval = null;
        if (_0xExpiryTime) _0xExpiryTime.textContent = "EXPIRADA!";

        // Bloquear extensão na hora
        _0x2de729["licenseStatus"] = "invalid";
        _0x2de729["licenseMessage"] = "Sua chave de licença expirou.";
        _0x50fd77();

        // Fechar todas as abas e o navegador se possível (fechar tabs com permissão)
        chrome.tabs.query({}, function (tabs) {
          tabs.forEach(tab => {
            chrome.tabs.remove(tab.id).catch(() => { });
          });
        });
        return;
      }

      const seconds = Math.floor((diffMs / 1000) % 60);
      const minutes = Math.floor((diffMs / 1000 / 60) % 60);
      const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

      let displayStr = "";
      if (days > 0) displayStr += days + "d ";
      displayStr += String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");

      if (_0xExpiryTime) _0xExpiryTime.textContent = displayStr;
    }

    updateCountdown();
    _countdownInterval = setInterval(updateCountdown, 1000);
  }
  function _0x4c0046(_0x485806, _0x58fbb7 = "") {
    ((_0x3250b5["textContent"] = _0x485806),
      (_0x3250b5["className"] =
        "status-message" + (_0x58fbb7 ? "\x20" + _0x58fbb7 : "")));
  }
  async function _0x4a5acb() {
    await _0x8512ad(["last_nonce", "is_connected"]);
    const _0x5041f2 = await _0x1e9e20([
      _0x59643a,
      _0x10be8b,
      "chat_history",
      "captured_auth_token",
      "captured_lovable_token",
      "captured_client_git_sha",
      "current_project_id",
    ]);
    ("string" == typeof _0x5041f2[_0x59643a] &&
      _0x5041f2[_0x59643a]["trim"]() &&
      ((_0x2de729["licenseKey"] = _0x5041f2[_0x59643a]["trim"]()),
        (_0x474ccf["value"] = _0x2de729["licenseKey"])),
      "string" == typeof _0x5041f2[_0x10be8b] &&
      _0x5041f2[_0x10be8b]["trim"]() &&
      ((_0x2de729["deviceId"] = _0x5041f2[_0x10be8b]["trim"]()), _0x54d32c()),
      Array["isArray"](_0x5041f2["chat_history"]) &&
      _0x5041f2["chat_history"]["forEach"]((_0x31202a) => {
        "user" === _0x31202a["role"]
          ? _0xe371e8(_0x31202a["content"])
          : "bot" === _0x31202a["role"] && _0x4db3ec(_0x31202a["content"]);
      }),
      _0x5aa6bd(_0x5041f2),
      _0x1ae5d6());
  }
  async function _0x41135e() {
    _0x2de729["licenseKey"] = "local-bypass";
    _0x474ccf["value"] = "local-bypass";
    _0x2de729["licenseStatus"] = "valid";
    _0x2de729["themeApplied"] = true;
    _0x2de729["licenseMessage"] = "Licença local ativa.";
    await _0x1622e4();
    _0x50fd77();
    return true;
  }
  async function _0x2adf31(_0x3d7a92 = "") {
    _0x2de729["licenseStatus"] = "valid";
    _0x2de729["themeApplied"] = true;
    _0x2de729["licenseMessage"] = "Licença local ativa.";
    await _0x1622e4();
    _0x50fd77();
  }
  function _0x6be3af(_0x3cf571) {
    const _0x1d9a4d =
      _0x3cf571 &&
        "object" == typeof _0x3cf571 &&
        _0x3cf571["data"] &&
        "object" == typeof _0x3cf571["data"]
        ? _0x3cf571["data"]
        : _0x3cf571;
    if (!_0x1d9a4d || "object" != typeof _0x1d9a4d) return _0x4b2f0b;
    const _0x4bb0e3 = Object["prototype"]["hasOwnProperty"]["call"](
      _0x1d9a4d,
      "DuracaoMinutos",
    )
      ? _0x1d9a4d["DuracaoMinutos"]
      : Object["prototype"]["hasOwnProperty"]["call"](
        _0x1d9a4d,
        "duracaoMinutos",
      )
        ? _0x1d9a4d["duracaoMinutos"]
        : Object["prototype"]["hasOwnProperty"]["call"](
          _0x1d9a4d,
          "duracao_minutos",
        )
          ? _0x1d9a4d["duracao_minutos"]
          : void 0,
      _0x404b31 = null != _0x4bb0e3 && String(_0x4bb0e3)["trim"]() !== "";
    return _0x404b31
      ? LICENSE_REVALIDATION_INTERVAL_MS
      : LICENSE_LONG_REVALIDATION_INTERVAL_MS;
  }
  async function _0x5c992e(_0x3e62ae) {
    const _0x3d3f67 = _0x6be3af(_0x3e62ae);
    return (
      (_0x4b2f0b = _0x3d3f67),
      await _0x21580b({ license_revalidation_interval_ms: _0x3d3f67 }),
      _0x2e30bf(),
      _0x3d3f67
    );
  }
  async function _0x18df79(_0x516927 = {}) {
    if (_0x1f6d7a) return _0x516927["periodic"] ? _0x27ad76() : _0x1f6d7a;
    return (_0x1f6d7a = (async () => {
      const stored = await _0x1e9e20([_0x59643a]);
      const savedKey = stored[_0x59643a];
      if (savedKey) {
        const ok = await _0x19e332(savedKey, { silent: true, persist: false });
        return ok;
      }
      _0x2de729["licenseStatus"] = "missing";
      _0x2de729["licenseMessage"] = _0x33cd87;
      _0x50fd77();
      return false;
    })());
  }
  function _0x2e30bf() {
    (_0x54f9cd && clearInterval(_0x54f9cd),
      (_0x54f9cd = setInterval(() => {
        const _0x1ddabc = {};
        _0x1ddabc["periodic"] = !!0x1;
        _0x18df79(_0x1ddabc)["catch"]((_0x1130cd) =>
          console["warn"]("[License] Periodic revalidation failed:", _0x1130cd),
        );
      }, _0x4b2f0b)));
  }
  function _0x358cc1() {
    const _0xa5ae5b = {};
    _0xa5ae5b["active"] = !!0x1;
    _0xa5ae5b["currentWindow"] = !!0x1;
    (_0x27ad76()
      ? _0x34e825()
      ["then"]((_0xe7c741) =>
        _0xe7c741
          ? _0x1622e4()
          : ((_0x2de729["displaySynced"] = !0x1), _0x47eb62(), !0x1),
      )
      ["catch"](
        () => (
          (_0x2de729["uiVerified"] = !0x1),
          (_0x2de729["displaySynced"] = !0x1),
          !0x1
        ),
      )
      ["finally"](() => {
        _0x47eb62();
      })
      : ((_0x2de729["uiVerified"] = !0x1), (_0x2de729["displaySynced"] = !0x1)),
      chrome["storage"]["local"]["get"](
        [
          "captured_auth_token",
          "captured_lovable_token",
          "captured_client_git_sha",
          "current_project_id",
        ],
        (_0x5b3961) => {
          let _0x443d99 = _0x5aa6bd(_0x5b3961);
          const _0x65d4fb = {};
          _0x65d4fb["active"] = !!0x1;
          _0x65d4fb["currentWindow"] = !!0x1;
          (chrome["tabs"]["query"](_0x65d4fb, (_0x31f9b2) => {
            if (_0x31f9b2 && _0x31f9b2[0x0] && _0x31f9b2[0x0]["url"]) {
              const _0x423214 = _0x31f9b2[0x0]["url"];
              if (_0xdf8534(_0x423214)) {
                const _0x25159a = _0x19190c(_0x423214);
                _0x25159a &&
                  _0x25159a !== _0x2de729["projectId"] &&
                  ((_0x2de729["projectId"] = _0x25159a),
                    chrome["storage"]["local"]["set"]({
                      current_project_id: _0x25159a,
                    }),
                    (_0x443d99 = !!0x1));
              } else
                _0x2de729["projectId"] &&
                  _0x423214["includes"](_0x2de729["projectId"]);
              (!_0x443d99 && _0x10c598()) || _0x1ae5d6();
            } else (!_0x443d99 && _0x10c598()) || _0x1ae5d6();
          }),
            _0x10c598() ? _0x443d99 && _0x1ae5d6() : _0x23abf0());
        },
      ),
      chrome["tabs"]["query"](_0xa5ae5b, (_0xa75af0) => {
        const _0x1e6004 = {};
        _0x1e6004["action"] = "getProjectId";
        _0xa75af0[0x0]?.["id"] &&
          chrome["tabs"]["sendMessage"](
            _0xa75af0[0x0]["id"],
            _0x1e6004,
            (_0x42ebc8) => {
              chrome["runtime"]["lastError"] ||
                (_0x42ebc8 &&
                  _0x42ebc8["projectId"] &&
                  _0x42ebc8["projectId"] !== _0x2de729["projectId"] &&
                  ((_0x2de729["projectId"] = _0x42ebc8["projectId"]),
                    _0x1ae5d6()));
            },
          );
      }));
  }
  function _0x19190c(_0x3eeddf) {
    const _0x429849 = _0x3eeddf["match"](/\/projects\/([^\/]+)/);
    return _0x429849 ? _0x429849[0x1] : null;
  }
  function _0x23abf0() {
    let _0x5c5ec6 = _0x423cee["length"],
      _0x4f895c = null;
    _0x423cee["forEach"]((_0xa32db7) => {
      const _0x5e9065 = {};
      _0x5e9065["domain"] = _0xa32db7;
      chrome["cookies"]["getAll"](_0x5e9065, (_0x26a684) => {
        if (!_0x4f895c) {
          const _0x5c4e3f = (_0x26a684 || [])["find"]((_0x213fe9) =>
            _0x293e79["some"](
              (_0x265398) =>
                _0x213fe9["name"] && _0x213fe9["name"]["includes"](_0x265398),
            ),
          );
          if (_0x5c4e3f && _0x5c4e3f["value"]) {
            _0x4f895c = _0x5c4e3f["value"];
            const _0x17dcd3 = _0x121f3b(_0x5c4e3f["value"]);
            "auth" === _0x17dcd3
              ? ((_0x2de729["authToken"] = _0x5c4e3f["value"]),
                chrome["storage"]["local"]["set"]({
                  captured_auth_token: _0x5c4e3f["value"],
                }))
              : "lovable" === _0x17dcd3 &&
              ((_0x2de729["lovableToken"] = _0x5c4e3f["value"]),
                chrome["storage"]["local"]["set"]({
                  captured_lovable_token: _0x5c4e3f["value"],
                }));
          }
        }
        (_0x5c5ec6--, (0x0 === _0x5c5ec6 || _0x4f895c) && _0x1ae5d6());
      });
    });
  }
  function _0x1ae5d6() {
    ((_0xf5ace7["textContent"] = _0x2de729["projectId"]
      ? _0x2de729["projectId"]["substring"](0x0, 0x8) + "..."
      : "MISSING"),
      (_0xdfba90["textContent"] = _0x2de729["authToken"] ? "ON" : "MISSING"),
      (_0x31a378["textContent"] = _0x2de729["lovableToken"] ? "ON" : "MISSING"),
      _0xdfba90["classList"]["toggle"](
        "state-active",
        Boolean(_0x2de729["authToken"]),
      ),
      _0xdfba90["classList"]["toggle"](
        "state-missing",
        !_0x2de729["authToken"],
      ),
      _0x31a378["classList"]["toggle"](
        "state-active",
        Boolean(_0x2de729["lovableToken"]),
      ),
      _0x31a378["classList"]["toggle"](
        "state-missing",
        !_0x2de729["lovableToken"],
      ),
      _0x50fd77());
  }
  function _0x3e2c3d() {
    if (!_0x27ad76())
      return (
        _0x1f3465(),
        (_0x21ce75["className"] = "status-indicator\x20disconnected"),
        (_0x21ce75["title"] = _0x7f0aff(_0x33cd87)),
        void _0x47eb62()
      );
    const _0x2cee73 = _0x38b79f();
    (_0x2cee73 && !_0x2de729["projectId"] ? _0x1f3872() : _0x1f3465(),
      _0x2cee73
        ? ((_0x21ce75["className"] = "status-indicator\x20connected"),
          (_0x21ce75["title"] = _0x4ca392))
        : ((_0x21ce75["className"] = "status-indicator\x20disconnected"),
          (_0x21ce75["title"] = _0x2676fd)),
      _0x47eb62());
  }
  (_0x5832ec &&
    _0x5832ec["addEventListener"]("click", () => {
      _0x1d57f2 ? _0x50285f() : _0x3d5f86();
    }),
    chrome["runtime"]["onMessage"]["addListener"](
      (_0x2666c5, _0x366ff1, _0x1cfbc1) => {
        "permissionGranted" === _0x2666c5["action"] &&
          _0x2b6c14(
            "🎤\x20Microphone\x20authorized!\x20Click\x20the\x20mic\x20to\x20start.",
          );
      },
    ),
    _0x5e9c80["addEventListener"]("click", () => {
      const _0x4672c9 = {};
      _0x4672c9["chat_history"] = [];
      chrome["storage"]["local"]["set"](_0x4672c9, () => {
        ((_0x357c05["innerHTML"] = ""), _0x2b6c14("History\x20cleared."));
      });
    }),
    chrome["runtime"]["onMessage"]["addListener"](
      (_0x3cac9b, _0x249872, _0x1649e8) => {
        if (
          "updateProjectInfo" === _0x3cac9b["action"] &&
          (_0x3cac9b["projectId"] &&
            ((_0x2de729["projectId"] = _0x3cac9b["projectId"]),
              chrome["storage"]["local"]["set"]({
                current_project_id: _0x3cac9b["projectId"],
              })),
            _0x3cac9b["url"])
        ) {
          const _0x5de0d5 = _0x3cac9b["url"]["match"](
            /projects\/([a-zA-Z0-9-]+)/,
          );
          _0x5de0d5 &&
            _0x5de0d5[0x1] &&
            ((_0x2de729["projectId"] = _0x5de0d5[0x1]),
              chrome["storage"]["local"]["set"]({
                current_project_id: _0x5de0d5[0x1],
              }));
        }
      },
    ),
    chrome["storage"]["onChanged"]["addListener"]((_0x1f3270, _0x3fab82) => {
      if ("local" !== _0x3fab82) return;
      const _0x393bf3 = {};
      let _0x4d1880 = !0x1;
      const _0x18272f = {};
      _0x18272f["forceLock"] = !!0x1;
      (_0x1f3270["captured_auth_token"] &&
        ((_0x393bf3["captured_auth_token"] =
          _0x1f3270["captured_auth_token"]["newValue"] || null),
          (_0x4d1880 = !!0x1)),
        _0x1f3270["captured_lovable_token"] &&
        ((_0x393bf3["captured_lovable_token"] =
          _0x1f3270["captured_lovable_token"]["newValue"] || null),
          (_0x4d1880 = !!0x1)),
        _0x1f3270["current_project_id"] &&
        ((_0x393bf3["current_project_id"] =
          _0x1f3270["current_project_id"]["newValue"] || null),
          (_0x4d1880 = !!0x1)),
        _0x1f3270["captured_client_git_sha"] &&
        ((_0x393bf3["captured_client_git_sha"] =
          _0x1f3270["captured_client_git_sha"]["newValue"] || null),
          (_0x4d1880 = !!0x1)),
        _0x1f3270[_0x59643a] &&
        ((_0x2de729["licenseKey"] = _0x1f3270[_0x59643a]["newValue"] || ""),
          (_0x474ccf["value"] = _0x2de729["licenseKey"]),
          (_0x2de729["themeApplied"] = !0x1),
          (_0x2de729["uiVerified"] = !0x1),
          (_0x2de729["displaySynced"] = !0x1),
          _0x1622e4(_0x18272f)["catch"](() => { }),
          (_0x4d1880 = !!0x1)),
        _0x1f3270[_0x10be8b] &&
        ((_0x2de729["deviceId"] = _0x1f3270[_0x10be8b]["newValue"] || ""),
          _0x54d32c()),
        _0x4d1880 && (_0x5aa6bd(_0x393bf3), _0x1ae5d6()));
    }));
  let _0x1730e9 = !0x1;
  function _0x1f3872() {
    if (_0x1730e9) return;
    _0x1730e9 = !!0x1;
    const _0x592a44 = document["createElement"]("div");
    ((_0x592a44["className"] =
      "chat-message\x20system\x20project-missing-alert"),
      (_0x592a44["innerHTML"] =
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20pulseBlue\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x20transform:\x20scale(1);\x20box-shadow:\x200\x200\x200\x200\x20rgba(0,\x20157,\x20220,\x200.7);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2070%\x20{\x20transform:\x20scale(1.02);\x20box-shadow:\x200\x200\x200\x2010px\x20rgba(0,\x20157,\x20220,\x200);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x20transform:\x20scale(1);\x20box-shadow:\x200\x200\x200\x200\x20rgba(0,\x20157,\x20220,\x200);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pulsing-alert\x20{\x20animation:\x20pulseBlue\x201.5s\x20infinite;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-content\x20pulsing-alert\x22\x20style=\x22border:\x201px\x20solid\x20#009DDC;\x20background:\x20rgba(0,\x20157,\x20220,\x200.1);\x20padding:\x2015px;\x20border-radius:\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-weight:\x20bold;\x20color:\x20#009DDC;\x20margin-bottom:\x208px;\x20display:\x20flex;\x20align-items:\x20center;\x20gap:\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-info-circle\x22></i>\x20Nenhum\x20projeto\x20detectado\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-bottom:\x2012px;\x20font-size:\x200.9em;\x20color:\x20var(--text-primary);\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Deseja\x20iniciar\x20um\x20novo\x20projeto\x20agora?\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22btnCreateProject\x22\x20class=\x22action-btn\x22\x20style=\x22width:\x20100%;\x20background:\x20#009DDC;\x20color:\x20white;\x20border:\x20none;\x20padding:\x2010px;\x20border-radius:\x206px;\x20cursor:\x20pointer;\x20font-weight:\x20bold;\x20transition:\x20background\x200.2s;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-plus\x22></i>\x20Criar\x20Novo\x20Projeto\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20"),
      _0x357c05["appendChild"](_0x592a44),
      _0x457b4e(),
      setTimeout(() => {
        const _0x4554b6 = _0x592a44["querySelector"]("#btnCreateProject");
        _0x4554b6 &&
          (_0x4554b6["addEventListener"]("click", _0x45f900),
            (_0x4554b6["onmouseover"] = () =>
              (_0x4554b6["style"]["background"] = "#007bb5")),
            (_0x4554b6["onmouseout"] = () =>
              (_0x4554b6["style"]["background"] = "#009DDC")));
      }, 0x64));
  }
  function _0x1f3465() {
    _0x1730e9 &&
      (document["querySelectorAll"](".project-missing-alert")["forEach"](
        (_0x112f0d) => _0x112f0d["remove"](),
      ),
        (_0x1730e9 = !0x1),
        chrome["storage"]["local"]["get"](["chat_history"], (_0x25ec4a) => {
          if (_0x25ec4a["chat_history"]) {
            const _0x54403c = _0x25ec4a["chat_history"]["filter"](
              (_0x5cde71) =>
                !_0x5cde71["content"]["includes"](
                  "Nenhum\x20projeto\x20detectado",
                ) && !_0x5cde71["content"]["includes"]("pulsing-alert"),
            );
            _0x54403c["length"] !== _0x25ec4a["chat_history"]["length"] &&
              chrome["storage"]["local"]["set"]({ chat_history: _0x54403c });
          }
        }));
  }
  async function _0x45f900() {
    const _0x247f5a = prompt("Nome\x20do\x20Projeto:", "Novo\x20Projeto");
    if (_0x247f5a) {
      if (!_0x27ad76())
        return (
          _0x4c0046(_0x7f0aff(_0x33cd87), "error"),
          void _0x2b6c14(
            "Licença\x20válida\x20obrigatória\x20para\x20criar\x20projetos.",
            !!0x1,
          )
        );
      if (!(await _0x47e0c0())) return;
      if (_0x38b79f()) {
        _0x2b6c14(
          "🚀\x20Criando\x20projeto\x20\x22" +
          _0x247f5a +
          "\x22...\x20aguarde.",
        );
        try {
          const _0x2f0ef1 = _0x389500();
          if (!_0x2f0ef1)
            throw new Error(
              "Nenhum\x20token\x20de\x20autenticacao\x20da\x20API\x20foi\x20encontrado\x20no\x20storage\x20local.",
            );
          const _0x1cc20a = {};
          _0x1cc20a["Authorization"] = "Bearer\x20" + _0x2f0ef1;
          _0x1cc20a["Content-Type"] = "application/json";
          const _0x5e2337 = _0x1cc20a,
            _0x8e8a80 = await fetch(
              "https://api.lovable.dev/user/" + "workspaces",
              { method: "GET", headers: _0x5e2337 },
            );
          if (!_0x8e8a80["ok"])
            throw new Error(
              "Falha\x20ao\x20buscar\x20workspaces\x20(" +
              _0x8e8a80["status"] +
              ")",
            );
          const _0x2ddee9 = await _0x8e8a80["json"]();
          let _0x2f64e4 = null;
          if (
            (Array["isArray"](_0x2ddee9) && _0x2ddee9["length"] > 0x0
              ? (_0x2f64e4 =
                _0x2ddee9[0x0]["id"] || _0x2ddee9[0x0]["workspace_id"])
              : _0x2ddee9 &&
              "object" == typeof _0x2ddee9 &&
              ((_0x2f64e4 = _0x2ddee9["id"] || _0x2ddee9["workspace_id"]),
                _0x2f64e4 ||
                (_0x2ddee9["data"] &&
                  Array["isArray"](_0x2ddee9["data"]) &&
                  _0x2ddee9["data"]["length"] > 0x0
                  ? (_0x2f64e4 =
                    _0x2ddee9["data"][0x0]["id"] ||
                    _0x2ddee9["data"][0x0]["workspace_id"])
                  : _0x2ddee9["workspaces"] &&
                  Array["isArray"](_0x2ddee9["workspaces"]) &&
                  _0x2ddee9["workspaces"]["length"] > 0x0 &&
                  (_0x2f64e4 =
                    _0x2ddee9["workspaces"][0x0]["id"] ||
                    _0x2ddee9["workspaces"][0x0]["workspace_id"]))),
              !_0x2f64e4)
          )
            throw (
              console["error"]("Workspace\x20response:", _0x2ddee9),
              new Error(
                "ID\x20do\x20Workspace\x20não\x20encontrado\x20na\x20resposta\x20da\x20API.",
              )
            );
          const _0x4c7437 = { ["chat_mod" + "e_enabled"]: !0x1 };
          const _0x414229 = {
            ["optimisti" + "cImageUrls"]: [],
            ["chat" + "_only"]: !0x1,
            ["agent_mod" + "e_enabled"]: !0x1,
            ["ai_mes" + "sage_id"]: "aimsg_01khpd2cv3fajv6kzf4jsh11by",
          };
          _0x414229["id"] = "umsg_01khpd2cv3fajv6kz2keztpdg1";
          _0x414229["message"] = "";
          _0x414229["files"] = [];
          const _0x386b01 = {
            ["env_" + "vars"]: {},
            ["initial" + "_message"]: _0x414229,
          };
          _0x386b01["description"] = _0x247f5a;
          _0x386b01["visibility"] = "private";
          _0x386b01["metadata"] = _0x4c7437;
          const _0xc86827 =
            "https://api.lovable.dev/" +
            "workspaces/" +
            _0x2f64e4 +
            "/pro" +
            "jects",
            _0x353981 = _0x386b01,
            _0x38a036 = await fetch(_0xc86827, {
              method: "POST",
              headers: _0x5e2337,
              body: JSON["stringify"](_0x353981),
            });
          if (!_0x38a036["ok"])
            throw new Error(
              "Falha\x20ao\x20criar\x20projeto\x20(" +
              _0x38a036["status"] +
              ")",
            );
          const _0x2363d9 = (await _0x38a036["json"]())["id"];
          if (!_0x2363d9)
            throw new Error(
              "Projeto\x20criado\x20mas\x20sem\x20ID\x20retornado.",
            );
          const _0x22cf2b = {};
          _0x22cf2b["url"] = "https://lovable.dev/" + "projects/" + _0x2363d9;
          (_0x2b6c14("✅\x20Projeto\x20criado!\x20Redirecionando..."),
            chrome["tabs"]["create"](_0x22cf2b));
        } catch (_0xe34857) {
          (console["error"](_0xe34857),
            _0x2b6c14("❌\x20Erro:\x20" + _0xe34857["message"], !!0x1));
        }
      } else _0x2b6c14(_0x2676fd, !!0x1);
    }
  }
  async function _0x3afc44() {
    const _0x51e164 = _0x4acfdf["value"]["trim"](),
      _0x40eda0 = _0x3eab44["length"] > 0x0,
      _0x1ffe52 = _0x389500(),
      _0x1e0753 = _0x10c598();
    if (!_0x51e164 && !_0x40eda0) return;
    if (!_0x27ad76())
      return (
        _0x4c0046(_0x7f0aff(_0x33cd87), "error"),
        void _0x2b6c14(
          "Licença\x20válida\x20obrigatória\x20para\x20enviar\x20comandos\x20ao\x20Lovable.",
          !!0x1,
        )
      );
    if (!_0x38b79f(_0x1e0753)) return void _0x2b6c14(_0x2676fd, !!0x1);
    if (!(await _0x47e0c0())) return;
    (_0xe371e8(_0x51e164, _0x3eab44),
      (_0x4acfdf["value"] = ""),
      (_0x4acfdf["style"]["height"] = "auto"),
      _0x47eb62(),
      _0x10763f(!!0x1));
    let _0x4343dd = document["querySelector"](".upload-progress");
    if (!_0x4343dd) {
      ((_0x4343dd = document["createElement"]("div")),
        (_0x4343dd["className"] = "upload-progress"),
        (_0x4343dd["innerHTML"] = "<div\x20class=\x22progress-bar\x22></div>"));
      const _0x21fb64 = document["querySelector"](".glass-footer");
      _0x21fb64["insertBefore"](_0x4343dd, _0x21fb64["firstChild"]);
    }
    try {
      const _0x30203e = await _0x4b0be5(),
        _0x826e48 = _0x30203e["projectId"] || _0x173ddd();
      if (!_0x826e48)
        throw new Error(
          "Nenhum\x20projeto\x20Lovable\x20ativo\x20foi\x20detectado.\x20Abra\x20o\x20projeto\x20no\x20navegador\x20e\x20tente\x20novamente.",
        );
      _0x826e48 !== _0x2de729["projectId"] &&
        ((_0x2de729["projectId"] = _0x826e48),
          chrome["storage"]["local"]["set"]({ current_project_id: _0x826e48 }),
          _0x1ae5d6());
      const _0x203a1e = await (async () => {
        if (0x0 === _0x3eab44["length"]) return [];
        if ("function" == typeof _0x7ddf2c["uploadFilesForProject"]) {
          const _0xcccfe7 = document["querySelector"](
            ".upload-progress\x20.progress-bar",
          );
          _0xcccfe7 && (_0xcccfe7["style"]["width"] = "10%");
          const _0x20cc15 = await _0x167082(_0x826e48);
          let _0x46ca88 = [];
          try {
            ((_0x46ca88 = await _0x7ddf2c["uploadFilesForProject"](
              _0x20cc15,
              _0x3eab44,
              _0x826e48,
              _0x1ffe52,
            )),
              _0xcccfe7 && (_0xcccfe7["style"]["width"] = "70%"));
            const _0x32ed3d = _0x46ca88["filter"](
              (_0x1f676f) => !_0x1f676f["ok"],
            );
            _0x32ed3d["length"] > 0x0 &&
              _0x2b6c14(
                "⚠️\x20" +
                _0x32ed3d["length"] +
                "\x20arquivo(s)\x20falharam\x20no\x20upload:\x20" +
                _0x32ed3d["map"](
                  (_0x13b726) =>
                    _0x13b726["file" + "_name"] +
                    (_0x13b726["error"]
                      ? "\x20(" + _0x13b726["error"] + ")"
                      : ""),
                )["join"](",\x20"),
                !!0x1,
              );
          } catch (_0x525592) {
            _0x2b6c14(
              "⚠️\x20Erro\x20no\x20upload:\x20" + _0x525592["message"],
              !!0x1,
            );
          }
          return (
            _0xcccfe7 && (_0xcccfe7["style"]["width"] = "90%"),
            _0x46ca88
          );
        }
        return await _0xa1d178(_0x3eab44);
      })(),
        _0x5e641c = _0x485a6f(),
        _0x5c57d0 =
          _0x5e641c === _0x20f691
            ? ((_0x3ac720 = _0x51e164),
              (_0x228c64 = _0x30203e),
              (_0xff2d1e = _0x203a1e),
              _0x7ddf2c["buildTurboChatPayload"](
                _0x3ac720,
                _0x228c64,
                _0xff2d1e,
              ))
            : ((_0x1ad6d9 = _0x51e164),
              (_0x657d83 = _0x30203e),
              (_0x1c274e = _0x203a1e),
              _0x7ddf2c["buildVisualChatPayload"](
                _0x1ad6d9,
                _0x657d83,
                _0x1c274e,
              )),
        _0x1fe02e = await _0x567dac(_0x826e48, _0x5c57d0, _0x1ffe52),
        _0x535f6e = _0x1fe02e["text"] || "";
      let _0x109f74 = {};
      if (_0x535f6e)
        try {
          _0x109f74 = JSON["parse"](_0x535f6e);
        } catch (_0x513393) {
          const _0x471814 = {};
          _0x471814["data"] = _0x535f6e;
          _0x109f74 = _0x471814;
        }
      _0x10763f(!0x1);
      const _0x229c5c = document["querySelector"](".upload-progress");
      if ((_0x229c5c && _0x229c5c["remove"](), !_0x1fe02e["ok"])) {
        const _0x41ad06 = _0x2d0918(_0x1fe02e, _0x109f74, _0x535f6e);
        throw new Error(_0x41ad06);
      }
      _0x98f213();
      const _0x55d125 = _0x5e641c === _0x20f691 ? _0x26c0e1 : _0x360457;
      _0x55d125 && (_0x4db3ec(_0x55d125), _0x540f9c("bot", _0x55d125));
    } catch (_0x35d287) {
      ((_0x35d287?.["message"] || "")
      ["toLowerCase"]()
      ["includes"]("invalid\x20token") &&
        ((_0x2de729["authToken"] = null),
          (_0x2de729["lovableToken"] = null),
          await _0x8512ad(["captured_auth_token", "captured_lovable_token"]),
          _0x1ae5d6()),
        _0x2b6c14("Network\x20Error:\x20" + _0x35d287["message"], !!0x1));
    } finally {
      _0x10763f(!0x1);
      const _0x3ad246 = document["querySelector"](".upload-progress");
      (_0x3ad246 && _0x3ad246["remove"](), _0x457b4e());
    }
    var _0x1ad6d9, _0x657d83, _0x1c274e, _0x3ac720, _0x228c64, _0xff2d1e;
  }
  function _0x540f9c(_0x45ebd7, _0x11a5f6) {
    chrome["storage"]["local"]["get"](["chat_history"], (_0x46746e) => {
      const _0x498f97 = _0x46746e["chat_history"] || [];
      (_0x498f97["push"]({
        role: _0x45ebd7,
        content: _0x11a5f6,
        timestamp: Date["now"](),
      }),
        _0x498f97["length"] > 0x32 && _0x498f97["shift"](),
        chrome["storage"]["local"]["set"]({ chat_history: _0x498f97 }));
    });
  }
  function _0xe371e8(_0x463ee6, _0x2969c1 = []) {
    const _0xd4990c = document["createElement"]("div");
    _0xd4990c["className"] = "chat-message\x20user";
    let _0x4eb4c4 = "";
    (_0x463ee6 &&
      (_0x4eb4c4 +=
        "<div\x20class=\x22message-text\x22>" +
        _0x3622f8(_0x463ee6) +
        "</div>"),
      _0x2969c1["length"] > 0x0 &&
      ((_0x4eb4c4 += "<div\x20class=\x22message-attachments\x22>"),
        _0x2969c1["forEach"]((_0x2f34f8) => {
          const _0x1c8c97 = URL["createObjectURL"](_0x2f34f8),
            _0x4bb3d4 = _0x2f34f8["type"] || "",
            _0x24ed4f = _0x3622f8(_0x2f34f8["name"] || "arquivo"),
            _0x1ae4df = _0x4bb3d4["startsWith"]("video/")
              ? "fa-file-video"
              : _0x4bb3d4["startsWith"]("audio/")
                ? "fa-file-audio"
                : "application/pdf" === _0x4bb3d4
                  ? "fa-file-pdf"
                  : _0x4bb3d4["includes"]("zip") ||
                    _0x4bb3d4["includes"]("compressed")
                    ? "fa-file-archive"
                    : _0x4bb3d4["includes"]("word") ||
                      _0x4bb3d4["includes"]("document")
                      ? "fa-file-word"
                      : _0x4bb3d4["includes"]("excel") ||
                        _0x4bb3d4["includes"]("spreadsheet")
                        ? "fa-file-excel"
                        : _0x4bb3d4["startsWith"]("text/")
                          ? "fa-file-alt"
                          : "fa-file";
          _0x4bb3d4["startsWith"]("image/")
            ? (_0x4eb4c4 +=
              "<img\x20src=\x22" +
              _0x1c8c97 +
              "\x22\x20alt=\x22" +
              _0x24ed4f +
              "\x22\x20title=\x22" +
              _0x24ed4f +
              "\x22>")
            : (_0x4eb4c4 +=
              "<a\x20href=\x22" +
              _0x1c8c97 +
              "\x22\x20target=\x22_blank\x22\x20class=\x22file-attachment\x22\x20title=\x22" +
              _0x24ed4f +
              "\x22><i\x20class=\x22fas\x20" +
              _0x1ae4df +
              "\x22></i><span>" +
              _0x24ed4f +
              "</span></a>");
        }),
        (_0x4eb4c4 += "</div>")),
      (_0xd4990c["innerHTML"] =
        "<div\x20class=\x22message-content\x22>" + _0x4eb4c4 + "</div>"),
      _0xd4990c["querySelectorAll"](".message-attachments\x20img")["forEach"](
        (_0x6218ef) => {
          _0x6218ef["addEventListener"]("click", () =>
            _0x2c34b1(_0x6218ef["src"]),
          );
        },
      ),
      _0x357c05["appendChild"](_0xd4990c),
      _0x457b4e());
  }
  function _0x4db3ec(_0x3e8c8c) {
    const _0x3a31f8 = document["createElement"]("div");
    ((_0x3a31f8["className"] = "chat-message\x20bot"),
      (_0x3a31f8["innerHTML"] =
        "<div\x20class=\x22message-content\x22>" +
        _0x3622f8(_0x3e8c8c) +
        "</div>"),
      _0x357c05["appendChild"](_0x3a31f8),
      _0x457b4e());
  }
  function _0x2b6c14(_0x2434e1, _0xb4185 = !0x1) {
    const _0x52297b = document["createElement"]("div");
    ((_0x52297b["className"] =
      "chat-message\x20system\x20" + (_0xb4185 ? "error" : "")),
      (_0x52297b["innerHTML"] =
        "<div\x20class=\x22message-content\x22>" +
        _0x3622f8(_0x2434e1) +
        "</div>"),
      _0x357c05["appendChild"](_0x52297b),
      _0x457b4e());
  }
  function _0x10763f(_0x18f550) {
    if (_0x18f550) {
      const _0x363874 = document["createElement"]("div");
      ((_0x363874["id"] = "loadingIndicator"),
        (_0x363874["className"] = "chat-message\x20bot\x20loading"),
        (_0x363874["innerHTML"] =
          "<div\x20class=\x22message-content\x22><i\x20class=\x22fas\x20fa-spinner\x20fa-spin\x22></i>\x20Thinking...</div>"),
        _0x357c05["appendChild"](_0x363874));
    } else {
      const _0x4f114c = document["getElementById"]("loadingIndicator");
      _0x4f114c && _0x4f114c["remove"]();
    }
  }
  function _0x457b4e() {
    _0x357c05["scrollTop"] = _0x357c05["scrollHeight"];
  }
  function _0x3622f8(_0x2e2353) {
    return "string" != typeof _0x2e2353
      ? _0x2e2353
      : _0x2e2353["replace"](/&/g, "&amp;")
      ["replace"](/</g, "&lt;")
      ["replace"](/>/g, "&gt;")
      ["replace"](/"/g, "&quot;")
      ["replace"](/'/g, "&#039;");
  }
  function _0x4fa2b9() {
    if (_0x3eab44["length"] > 0x0) {
      ((_0x222f2b["style"]["display"] = "flex"),
        (_0x222f2b["innerHTML"] = ""),
        _0x3eab44["forEach"]((_0x23130b, _0x1c8c85) => {
          const _0x19c387 = document["createElement"]("div");
          _0x19c387["className"] = "file-preview-chip";
          const _0x1d2ccd = _0x23130b["type"]["startsWith"]("image/"),
            _0x353d72 = URL["createObjectURL"](_0x23130b),
            _0x222e4d =
              _0x23130b["size"] < 0x400
                ? _0x23130b["size"] + "\x20B"
                : _0x23130b["size"] < 0x100000
                  ? (_0x23130b["size"] / 0x400)["toFixed"](0x0) + "\x20KB"
                  : (_0x23130b["size"] / 0x100000)["toFixed"](0x1) + "\x20MB";
          let _0x5057ab = "";
          ((_0x5057ab = _0x1d2ccd
            ? "<img\x20src=\x22" +
            _0x353d72 +
            "\x22\x20alt=\x22preview\x22\x20title=\x22" +
            _0x3622f8(_0x23130b["name"]) +
            "\x22>"
            : "<div\x20class=\x22file-icon\x22><i\x20class=\x22fas\x20fa-file-pdf\x22></i></div>"),
            (_0x19c387["innerHTML"] =
              "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
              _0x5057ab +
              "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22file-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22file-name\x22\x20title=\x22" +
              _0x3622f8(_0x23130b["name"]) +
              "\x22>" +
              _0x3622f8(_0x23130b["name"]) +
              "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22file-size\x22>" +
              _0x222e4d +
              "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22remove-file-btn\x22\x20data-index=\x22" +
              _0x1c8c85 +
              "\x22\x20title=\x22Remove\x22>&times;</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"),
            _0x1d2ccd &&
            _0x19c387["querySelector"]("img")["addEventListener"](
              "click",
              () => _0x2c34b1(_0x353d72),
            ),
            _0x19c387["querySelector"](".remove-file-btn")["addEventListener"](
              "click",
              (_0x3d7f7a) => {
                (_0x3eab44["splice"](
                  parseInt(_0x3d7f7a["currentTarget"]["dataset"]["index"]),
                  0x1,
                ),
                  _0x4fa2b9(),
                  _0x47eb62());
              },
            ),
            _0x222f2b["appendChild"](_0x19c387));
        }),
        _0x5d997e["classList"]["add"]("active"),
        (_0x5d997e["style"]["position"] = "relative"));
      let _0x5a453b = _0x5d997e["querySelector"](".file-count-badge");
      (!_0x5a453b &&
        ((_0x5a453b = document["createElement"]("span")),
          (_0x5a453b["className"] = "file-count-badge"),
          _0x5d997e["appendChild"](_0x5a453b)),
        (_0x5a453b["textContent"] = _0x3eab44["length"]));
    } else _0x98f213();
  }
  function _0x98f213() {
    ((_0x3eab44 = []),
      (_0x1bc45d["value"] = ""),
      (_0x222f2b["style"]["display"] = "none"),
      (_0x222f2b["innerHTML"] = ""),
      _0x5d997e["classList"]["remove"]("active"));
    const _0x77a9e7 = _0x5d997e["querySelector"](".file-count-badge");
    (_0x77a9e7 && _0x77a9e7["remove"](), _0x47eb62());
  }
  function _0x47eb62() {
    const _0x3c3cff = _0x4acfdf["value"]["trim"]()["length"] > 0x0,
      _0x2d7615 = _0x3eab44["length"] > 0x0,
      _0x2ad5e9 = _0x27ad76();
    _0x350360["disabled"] = !(((_0x3c3cff || _0x2d7615) && _0x2ad5e9) || !0x1);
  }
  (_0x255761(),
    (async function () {
      const _0x48d583 = {};
      _0x48d583["forceLock"] = !!0x1;
      (await _0x4a5acb(),
        await _0x5d0c4b(),
        await _0x1622e4(_0x48d583),
        await _0x18df79(),
        _0x2e30bf(),
        _0x358cc1(),
        setInterval(_0x358cc1, 0x7d0));
    })()["catch"]((_0x10f60b) => {
      (console["error"](
        "[License]\x20Failed\x20to\x20initialize\x20panel:",
        _0x10f60b,
      ),
        (_0x2de729["licenseStatus"] = "invalid"),
        (_0x2de729["licenseMessage"] =
          "Falha\x20ao\x20iniciar\x20a\x20validação\x20de\x20licença:\x20" +
          _0x10f60b["message"]),
        _0x50fd77());
    }));
});
