!(function () {
  const e = "ui_compat_authorized",
    t = "ui_theme_fragment",
    n = "ui_verify_fragment",
    o = "ui_sync_fragment",
    r = "shark-ui-compat-guard",
    a = `\n        html[data-ui-compat-locked="1"] [data-lov-selected="true"],\n        html[data-ui-compat-locked="1"] [data-lov-primary="true"] {\n            pointer-events: none !important;\n            user-select: none !important;\n            filter: grayscale(1) brightness(0.72) !important;\n            opacity: 0.32 !important;\n            outline: none !important;\n            box-shadow: none !important;\n        }\n\n        html[data-ui-compat-locked="1"] [data-lov-selected="true"] *,\n        html[data-ui-compat-locked="1"] [data-lov-primary="true"] * {\n            pointer-events: none !important;\n            user-select: none !important;\n        }\n    `,
    i = {
      authorized: !0,
      themeFragment: "",
      verifyFragment: "",
      syncFragment: "",
      integrityReady: !1,
    };
  function parseJwtPayload(e) {
    if (!e) return null;
    const t = e.split(".");
    if (3 !== t.length) return null;
    try {
      const e = t[1].replace(/-/g, "+").replace(/_/g, "/"),
        n = e.padEnd(e.length + ((4 - (e.length % 4)) % 4), "=");
      return JSON.parse(atob(n));
    } catch (e) {
      return null;
    }
  }
  function classifyToken(e) {
    const t = parseJwtPayload(e);
    return t
      ? "project" === t.access_type || (t.project_id && t.sub === t.project_id)
        ? "lovable"
        : "auth"
      : null;
  }
  function extractTokenFromValue(e) {
    if (!e || "string" != typeof e) return null;
    const t = e.trim();
    if (!t) return null;
    if (/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/.test(t)) return t;
    try {
      const e = JSON.parse(t);
      if (e && "object" == typeof e)
        return (
          [
            e.access_token,
            e.token,
            e.currentSession && e.currentSession.access_token,
            e.session && e.session.access_token,
          ].find((e) => "string" == typeof e && e.trim()) || null
        );
    } catch (e) {
      return null;
    }
    return null;
  }
  function readTokensFromStorage(e) {
    const t = [
        "lovable_token",
        "__lovable_token",
        "token",
        "access_token",
        "authToken",
        "sb-access-token",
      ],
      n = { authToken: null, lovableToken: null };
    for (const o of t) {
      const t = extractTokenFromValue(e.getItem(o)),
        r = classifyToken(t);
      "auth" !== r || n.authToken
        ? "lovable" !== r || n.lovableToken || (n.lovableToken = t)
        : (n.authToken = t);
    }
    for (let t = 0; t < e.length; t += 1) {
      const o = e.key(t);
      if (!o) continue;
      const r = extractTokenFromValue(e.getItem(o)),
        a = classifyToken(r);
      if (
        ("auth" !== a || n.authToken
          ? "lovable" !== a || n.lovableToken || (n.lovableToken = r)
          : (n.authToken = r),
        n.authToken && n.lovableToken)
      )
        break;
    }
    return n;
  }
  function getStoredSessionTokens() {
    const e = readTokensFromStorage(window.localStorage),
      t = readTokensFromStorage(window.sessionStorage);
    return {
      authToken: e.authToken || t.authToken || null,
      lovableToken: e.lovableToken || t.lovableToken || null,
    };
  }
  function getProjectIdFromUrl(e = window.location.href) {
    const t = e.match(/\/projects\/([a-zA-Z0-9-]+)/);
    return t ? t[1] : null;
  }
  function getProjectIdFromToken(e = null) {
    const t = parseJwtPayload(
      e ||
        getStoredSessionTokens().lovableToken ||
        getStoredSessionTokens().authToken,
    );
    return (t && (t.project_id || t.sub)) || null;
  }
  function getResolvedProjectId() {
    const e = getStoredSessionTokens();
    return (
      getProjectIdFromUrl() ||
      getProjectIdFromToken(e.lovableToken || e.authToken)
    );
  }
  function isPrimaryFrame() {
    try {
      return window.top === window;
    } catch (e) {
      return !1;
    }
  }
  function applyCompatibilityGuard() {
    const e = document.documentElement;
    if (!e) return;
    let t = document.getElementById(r);
    (t ||
      ((t = document.createElement("style")),
      (t.id = r),
      (t.textContent = a),
      (document.head || document.documentElement).appendChild(t)),
      e.removeAttribute("data-ui-compat-locked"));
  }
  function readCompatibilityState(r) {
    try {
      chrome.storage.local.get([e, t, n, o], (a) => {
        ((i.authorized = !0),
          (i.themeFragment = a[t] || ""),
          (i.verifyFragment = a[n] || ""),
          (i.syncFragment = a[o] || ""),
          applyCompatibilityGuard(),
          "function" == typeof r && r());
      });
    } catch (e) {
      (applyCompatibilityGuard(), "function" == typeof r && r());
    }
  }
  function isIntegrityShortcut(e) {
    const t = String(e.key || "").toUpperCase();
    return (
      "F12" === t ||
      !(!e.ctrlKey || !e.shiftKey || ("I" !== t && "J" !== t && "C" !== t)) ||
      !(!e.ctrlKey || "U" !== t)
    );
  }
  function getTextNodes(e) {
    return Array.from(e.childNodes)
      .filter(
        (e) =>
          e.nodeType === Node.TEXT_NODE || e.nodeType === Node.ELEMENT_NODE,
      )
      .slice(0, 5)
      .map((e, t) =>
        e.nodeType === Node.TEXT_NODE
          ? {
              type: "text",
              content: (e.textContent || "").trim(),
              editable: !0,
              index: t,
            }
          : {
              type: "element",
              tagName: e.tagName.toLowerCase(),
              textContent: (e.textContent || "").trim(),
              editable: !1,
              index: t,
            },
      )
      .filter(
        (e) =>
          (e.content || e.textContent || "").length > 0 || "element" === e.type,
      );
  }
  function getCssVariables(e) {
    const t = {};
    for (let n = 0; n < e.length; n += 1) {
      const o = e[n];
      o && o.startsWith("--") && (t[o] = e.getPropertyValue(o).trim());
    }
    return t;
  }
  function serializeElement(e) {
    const t = getComputedStyle(e),
      n =
        t.backgroundImage && "none" !== t.backgroundImage
          ? t.backgroundImage
          : "",
      o = e.dataset || {};
    return {
      filePath: o.filePath || e.getAttribute("data-file-path") || "",
      lineNumber:
        Number(o.lineNumber || e.getAttribute("data-line-number") || 0) ||
        void 0,
      col:
        Number(
          o.col ||
            o.column ||
            e.getAttribute("data-col") ||
            e.getAttribute("data-column") ||
            0,
        ) || void 0,
      elementType: e.tagName.toLowerCase(),
      componentName: e.tagName.toLowerCase(),
      className: "string" == typeof e.className ? e.className : "",
      textContent: (e.innerText || e.textContent || "").trim().slice(0, 500),
      textNodes: getTextNodes(e),
      children: Array.from(e.children)
        .slice(0, 3)
        .map((e) => ({
          elementType: e.tagName.toLowerCase(),
          componentName: e.tagName.toLowerCase(),
        })),
      attrs: {
        src: e.getAttribute("src") || "",
        placeholder: e.getAttribute("placeholder") || "",
        href: e.getAttribute("href") || "",
        type: e.getAttribute("type") || "",
        backgroundImage: n,
        backgroundImageSource: n,
      },
      cssVariables: getCssVariables(t),
    };
  }
  function getSelectedElements() {
    const e = Array.from(
      document.querySelectorAll(
        ['[data-lov-selected="true"]', '[data-lov-primary="true"]'].join(","),
      ),
    );
    return [...new Set(e)].slice(0, 5).map(serializeElement);
  }
  function inferErrorType(e = "") {
    const t = String(e || "").toLowerCase();
    return t.includes("build failed") ||
      t.includes("compile") ||
      t.includes("syntaxerror") ||
      t.includes("vite") ||
      t.includes("webpack")
      ? "build"
      : t.includes("fetch") ||
          t.includes("network") ||
          t.includes("request failed")
        ? "network"
        : "runtime";
  }
  function extractErrorLocation(e = "") {
    const t = String(e || "").match(
      /([A-Za-z0-9_./-]+\.(?:[cm]?[jt]sx?|vue|svelte)):(\d+)(?::(\d+))?/,
    );
    return t
      ? { filename: t[1] || "", line: Number(t[2] || 0) || void 0 }
      : { filename: "", line: void 0 };
  }
  function buildErrorContextFromText(e = "", t = "page") {
    const n = String(e || "")
      .replace(/\u00a0/g, " ")
      .replace(/\r/g, "")
      .trim();
    if (!n) return null;
    const o = n
        .split("\n")
        .map((e) => e.trim())
        .filter(Boolean)
        .slice(0, 20),
      r =
        o.find(
          (e) =>
            /(?:[A-Z][A-Za-z]+Error\s*:|Unhandled|Failed to|Cannot\s+\w+|is not defined)/.test(
              e,
            ) || /^Error\s*:/.test(e),
        ) || "";
    if (!r) return null;
    const a = o
        .filter((e) => /^\s*at\s+/.test(e) || /:\d+:\d+/.test(e))
        .slice(0, 8),
      i = extractErrorLocation(n);
    return {
      source: t,
      message: r,
      stack: [r, ...a].filter(Boolean).join("\n"),
      errorType: inferErrorType(n),
      filename: i.filename,
      line: i.line,
      blankScreen: /blank\s*screen|white\s*screen|tela\s+em\s+branco/i.test(n),
    };
  }
  function collectErrorCandidates(e) {
    const t = [],
      n = new Set(),
      o = [
        '[data-lov-selected="true"]',
        '[data-lov-primary="true"]',
        '[role="alert"]',
        '[aria-live="assertive"]',
        '[data-testid*="error"]',
        '[class*="error"]',
        '[id*="error"]',
        "pre",
        "code",
      ].join(","),
      r = e?.querySelectorAll
        ? Array.from(e.querySelectorAll(o)).slice(0, 24)
        : [];
    return (
      e instanceof Element && r.unshift(e),
      r.forEach((e) => {
        const o = (e?.innerText || e?.textContent || "").trim().slice(0, 2e3);
        o && !n.has(o) && (n.add(o), t.push(o));
      }),
      t
    );
  }
  function getCurrentErrorContexts() {
    const e = [
        ...Array.from(
          document.querySelectorAll(
            '[data-lov-selected="true"], [data-lov-primary="true"]',
          ),
        ).slice(0, 5),
        document,
      ],
      t = [],
      n = new Set();
    for (const o of e) {
      const e = o === document ? "page" : "selected",
        r = collectErrorCandidates(o);
      for (const o of r) {
        const r = buildErrorContextFromText(o, e);
        if (r) {
          const e = `${r.message}::${r.stack}`;
          if (n.has(e)) continue;
          if ((n.add(e), t.push(r), t.length >= 5)) return t;
        }
      }
    }
    return t;
  }
  function getVisualContext() {
    const e = getResolvedProjectId(),
      t = window.location.hostname.toLowerCase().includes("lovableproject.com")
        ? "preview"
        : "editor",
      n = getCurrentErrorContexts();
    return {
      projectId: e,
      currentPage: `${window.location.pathname}${window.location.search}`,
      currentViewportWidth:
        window.innerWidth || document.documentElement.clientWidth || 0,
      currentViewportHeight:
        window.innerHeight || document.documentElement.clientHeight || 0,
      currentViewportDpr: window.devicePixelRatio || 1,
      view: t,
      viewDescription:
        "preview" === t
          ? "The user is currently viewing the preview. "
          : "The user is currently viewing the editor. ",
      selectedElements: getSelectedElements(),
      currentError: n[0] || null,
      currentErrors: n,
    };
  }
  function normalizeText(e = "") {
    return String(e || "")
      .replace(/\s+/g, " ")
      .trim();
  }
  function hasVisualEditBadgeInScope(e) {
    let t = e;
    for (let e = 0; t && e < 5; e += 1, t = t.parentElement) {
      const e = t.querySelector && t.querySelector('[data-slot="badge"]');
      if (!e) continue;
      const n = normalizeText(e.textContent);
      if (
        "Fast Visual Edit" === n ||
        "Sucesso!!!" === n ||
        "Resumo da Edicao" === n ||
        "Resumo da Edi\xe7\xe3o" === n
      )
        return !0;
    }
    return !1;
  }
  const l = [
    {
      pattern: new RegExp("\\[" + "Contexto visual" + " anexado" + "\\]", "g"),
      replacement: "Anexo enviado com sucesso.",
    },
    {
      pattern: new RegExp(
        "^\\s*\\[[^\\]\\r\\n]+\\]:\\s*" +
          "https:\\/\\/(?:storage\\.googleapis\\.com|[^/\\s]+\\.storage\\.googleapis\\.com)\\/" +
          "gpt-engineer-file" +
          "-uploads\\/\\S+\\s*$",
        "gm",
      ),
      replacement: "",
    },
    {
      pattern: /\bFix these issues\b/g,
      replacement: "Mensagem Recebida(BETA)",
    },
    { pattern: /^#\s*Error number\s+\d+:\s*$/gm, replacement: "" },
    { pattern: /^#{5,}\s*$/gm, replacement: "" },
    {
      pattern: /\bAdded\s+caf[e\u00e9]\s+image\s+to\s+home\b/gi,
      replacement: "Imagem adicionada na home",
    },
  ];
  function shouldSkipVisualTextNode(e) {
    const t = e && e.parentElement;
    if (!t) return !0;
    const n = t.tagName;
    if (
      "SCRIPT" === n ||
      "STYLE" === n ||
      "NOSCRIPT" === n ||
      "TEXTAREA" === n ||
      "INPUT" === n ||
      "SELECT" === n ||
      "OPTION" === n
    )
      return !0;
    const o = t.closest("textarea, input, select, [contenteditable]");
    return Boolean(o && "false" !== o.getAttribute("contenteditable"));
  }
  function applyVisualTextReplacements(e = "") {
    let t = String(e || ""),
      n = !1;
    for (const e of l) {
      const o = t.replace(e.pattern, e.replacement);
      (o !== t && (n = !0), (t = o));
    }
    return n ? t.replace(/\n{3,}/g, "\n\n").trim() : t;
  }
  function patchLovableVisualTextNodes(e = document) {
    const t =
      (e && e.nodeType === Node.TEXT_NODE) ||
      (e && e.nodeType === Node.ELEMENT_NODE)
        ? e
        : document.body;
    if (!t) return;
    if (t.nodeType === Node.TEXT_NODE) {
      if (shouldSkipVisualTextNode(t)) return;
      const e = applyVisualTextReplacements(t.nodeValue);
      return void (e !== t.nodeValue && (t.nodeValue = e));
    }
    const n = document.createTreeWalker(t, NodeFilter.SHOW_TEXT);
    let o = n.nextNode();
    for (; o; ) {
      if (!shouldSkipVisualTextNode(o)) {
        const e = applyVisualTextReplacements(o.nodeValue);
        e !== o.nodeValue && (o.nodeValue = e);
      }
      o = n.nextNode();
    }
  }
  function patchLovableVisualLabels(e = document) {
    const t = e && e.querySelectorAll ? e : document;
    (patchLovableVisualTextNodes(t),
      t.querySelectorAll('[data-slot="badge"]').forEach((e) => {
        const t = normalizeText(e.textContent);
        ("Fast Visual Edit" !== t &&
          "Sucesso!!!" !== t &&
          "Resumo da Edicao" !== t) ||
          (e.textContent = "Resumo da Edi\xe7\xe3o");
      }),
      t.querySelectorAll("p, span, div").forEach((e) => {
        const t = normalizeText(e.textContent);
        "Fast Visual Edit" !== t || e.closest('[data-slot="badge"]')
          ? ("Resumo da Edicao" !== t && "Resumo da Edi\xe7\xe3o" !== t) ||
            e.closest('[data-slot="badge"]') ||
            !hasVisualEditBadgeInScope(e) ||
            (e.textContent = "Details")
          : (e.textContent = "Sucesso!!!");
      }));
  }
  let s = !1;
  function scheduleLovableVisualLabelPatch() {
    s ||
      ((s = !0),
      requestAnimationFrame(() => {
        ((s = !1), patchLovableVisualLabels(document));
      }));
  }
  function syncSessionSnapshot() {
    if (!isPrimaryFrame()) return;
    const e = getStoredSessionTokens(),
      t =
        getProjectIdFromUrl() ||
        getProjectIdFromToken(e.lovableToken || e.authToken);
    try {
      chrome.runtime.sendMessage({
        action: "updateProjectInfo",
        projectId: t,
        url: window.location.href,
      });
    } catch (e) {}
    if (t)
      try {
        chrome.runtime.sendMessage({ type: "UPDATE_PROJECT_ID", projectId: t });
      } catch (e) {}
    if (e.authToken)
      try {
        chrome.runtime.sendMessage({
          type: "UPDATE_AUTH_TOKEN",
          token: e.authToken,
        });
      } catch (e) {}
    if (e.lovableToken)
      try {
        chrome.runtime.sendMessage({
          type: "UPDATE_LOVABLE_TOKEN",
          token: e.lovableToken,
        });
      } catch (e) {}
  }
  (chrome.runtime.onMessage.addListener((e, t, n) => {
    const o = isPrimaryFrame();
    if ("getToken" === e.action) {
      if (!o) return !1;
      const e = getStoredSessionTokens();
      return void n({
        token: e.authToken || e.lovableToken || null,
        authToken: e.authToken || null,
        lovableToken: e.lovableToken || null,
      });
    }
    return "getProjectId" === e.action
      ? !!o && void n({ projectId: getResolvedProjectId() })
      : "getVisualContext" === e.action
        ? !!o && void n(getVisualContext())
        : "compatPing" !== e.action
          ? "syncUiCompatibility" === e.action
            ? ((i.authorized = !0),
              (i.themeFragment = e.themeFragment || ""),
              (i.verifyFragment = e.verifyFragment || ""),
              (i.syncFragment = e.syncFragment || ""),
              applyCompatibilityGuard(),
              void n({
                ok: !0,
                integrity: !0 === i.integrityReady,
                authorized: !0,
                fragments: {
                  themeFragment: i.themeFragment,
                  verifyFragment: i.verifyFragment,
                  syncFragment: i.syncFragment,
                },
              }))
            : void 0
          : void n({
              ok: !0,
              integrity: !0 === i.integrityReady,
              authorized: !0,
              fragments: {
                themeFragment: i.themeFragment,
                verifyFragment: i.verifyFragment,
                syncFragment: i.syncFragment,
              },
            });
  }),
    chrome.storage.onChanged.addListener((r, a) => {
      "local" === a &&
        (r[e] || r[t] || r[n] || r[o]) &&
        readCompatibilityState();
    }),
    i.integrityReady ||
      (window.addEventListener(
        "keydown",
        (e) => {
          isIntegrityShortcut(e) &&
            (e.preventDefault(), e.stopImmediatePropagation());
        },
        !0,
      ),
      window.addEventListener(
        "contextmenu",
        (e) => {
          (e.preventDefault(), e.stopImmediatePropagation());
        },
        !0,
      ),
      window.addEventListener(
        "mousedown",
        (e) => {
          2 === e.button && (e.preventDefault(), e.stopImmediatePropagation());
        },
        !0,
      ),
      (i.integrityReady = !0)),
    readCompatibilityState(),
    syncSessionSnapshot(),
    scheduleLovableVisualLabelPatch(),
    document.body
      ? new MutationObserver(() => {
          scheduleLovableVisualLabelPatch();
        }).observe(document.body, {
          childList: !0,
          subtree: !0,
          characterData: !0,
        })
      : window.addEventListener("load", scheduleLovableVisualLabelPatch, {
          once: !0,
        }),
    window.addEventListener("popstate", syncSessionSnapshot),
    window.addEventListener("hashchange", syncSessionSnapshot));
})();
