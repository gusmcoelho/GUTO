// guto-extras.js — Injeta link do site e gerencia exibição do timer (mapeado para os padrões do Lovable)
(function () {
  "use strict";

  const SITE_URL = "https://gutopingo.lovable.app/";
  let customTimerInterval = null;

  // Injeta estilos CSS customizados para o texto colorido e animado
  function injectStyles() {
    if (document.getElementById("guto-custom-styles")) return;

    const style = document.createElement("style");
    style.id = "guto-custom-styles";
    style.textContent = `
      @keyframes guto-rainbow-text {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      @keyframes guto-infinity-pulse {
        0% { 
          transform: scale(1);
          filter: drop-shadow(0 0 2px rgba(167, 139, 250, 0.4));
        }
        50% { 
          transform: scale(1.22);
          filter: drop-shadow(0 0 10px rgba(236, 72, 153, 0.8));
        }
        100% { 
          transform: scale(1);
          filter: drop-shadow(0 0 2px rgba(167, 139, 250, 0.4));
        }
      }

      .guto-site-link {
        display: inline-flex;
        align-items: center;
        font-size: 0.82em;
        text-decoration: none;
        font-family: inherit;
        font-weight: 700 !important;
        letter-spacing: 0.02em;
        padding: 4px 10px;
        background: linear-gradient(120deg, #a78bfa, #ec4899, #60a5fa, #a78bfa) !important;
        background-size: 300% 300% !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        animation: guto-rainbow-text 4s ease infinite !important;
        transition: transform 0.2s ease !important;
        cursor: pointer;
      }

      .guto-site-link:hover {
        transform: scale(1.05);
      }

      .guto-site-link i {
        -webkit-text-fill-color: initial !important;
        color: rgba(167, 139, 250, 0.9) !important;
        transition: color 0.2s ease !important;
      }
      .guto-site-link:hover i {
        color: rgba(236, 72, 153, 0.9) !important;
      }

      /* Símbolo do Infinito Animado */
      .guto-infinity-symbol {
        display: inline-block;
        font-size: 1.85em !important;
        line-height: 1 !important;
        font-weight: bold;
        background: linear-gradient(120deg, #a78bfa, #ec4899, #3b82f6, #a78bfa) !important;
        background-size: 300% 300% !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        animation: guto-rainbow-text 3s ease infinite, guto-infinity-pulse 2s ease-in-out infinite !important;
        vertical-align: middle;
        margin-top: 4px;
        user-select: none;
      }
    `;
    document.head.appendChild(style);
  }

  // Descobre a duração da chave. Retorna null se for Vitalícia/Lifetime
  function parseDurationFromKey(key) {
    if (!key) return null;

    // Se for explicitamente vitalícia/lifetime, retorna null para o infinito
    if (/LIFETIME|VITALICIA|VITALICIO|VITAL|PERPETUAL/i.test(key)) {
      return null;
    }

    // Regex mapeada para os seus padrões de duração: MIN, DAY, WEEK, MONTH, YEAR
    const match = key.match(/(\d+)(MIN|DAY|WEEK|MONTH|YEAR)/i);
    if (!match) {
      return null; // Qualquer chave fora do padrão de contagem é tratada como vitalícia
    }

    const amount = parseInt(match[1], 10);
    const unit = match[2].toUpperCase();

    switch (unit) {
      case "MIN":
        return amount * 60 * 1000; // Minutos
      case "DAY":
        return amount * 24 * 60 * 60 * 1000; // Dias
      case "WEEK":
        return amount * 7 * 24 * 60 * 60 * 1000; // Semanas
      case "MONTH":
        return amount * 30 * 24 * 60 * 60 * 1000; // Meses (30 dias)
      case "YEAR":
        return amount * 365 * 24 * 60 * 60 * 1000; // Anos
      default:
        return null;
    }
  }

  // Interceptador global do Fetch para normalizar expiração
  const originalFetch = window.fetch;
  window.fetch = async function (...args) {
    const url = args[0];
    const response = await originalFetch.apply(this, args);

    if (typeof url === "string" && url.includes("/functions/v1/lovable-proxy/") && url.includes("/validate")) {
      try {
        const clone = response.clone();
        const text = await clone.text();

        if (text) {
          const data = JSON.parse(text);

          if (data.sucesso) {
            const keyMatch = url.match(/\/lovable-proxy\/([^\/]+)\/validate/);
            const licenseKey = keyMatch ? keyMatch[1] : null;

            if (licenseKey) {
              const durationMs = parseDurationFromKey(licenseKey);

              if (durationMs === null) {
                if (data.data) {
                  data.data.expiresAt = null;
                  data.data.expires_at = null;
                }
                return new Response(JSON.stringify(data), {
                  status: response.status,
                  statusText: response.statusText,
                  headers: response.headers
                });
              }

              // Verifica se já existe ativação no banco de dados (retornada pelo servidor)
              const dbActivatedAt = data.data ? (data.data.activatedAt || data.data.activated_at) : null;
              const dbExpiresAt = data.data ? (data.data.expiresAt || data.data.expires_at) : null;

              let expiresAtISO;

              if (dbActivatedAt) {
                // Se já foi ativado no banco, usa o expires_at do banco
                expiresAtISO = new Date(dbExpiresAt).toISOString();
              } else {
                // Primeira ativação (activated_at é NULL no banco)
                // Usamos o momento atual para preencher activated_at e expires_at
                const nowMs = Date.now();
                const activationTimeISO = new Date(nowMs).toISOString();
                expiresAtISO = new Date(nowMs + durationMs).toISOString();

                if (!data.data || typeof data.data !== "object") {
                  data.data = {};
                }
                data.data.activatedAt = activationTimeISO;
                data.data.activated_at = activationTimeISO;
                data.data.expiresAt = expiresAtISO;
                data.data.expires_at = expiresAtISO;

                // Salva também localmente para consistência
                const stored = await new Promise((r) => chrome.storage.local.get(["guto_activations"], r));
                const activations = stored.guto_activations || {};
                activations[licenseKey] = nowMs;
                await new Promise((r) => chrome.storage.local.set({ guto_activations: activations }, r));
              }

              // Checar se o tempo já expirou nas validações seguintes
              if (new Date(expiresAtISO) < new Date()) {
                data.sucesso = false;
                data.erro = "Sua chave de licença expirou.";
                if (data.data) {
                  data.data.expiresAt = expiresAtISO;
                  data.data.expires_at = expiresAtISO;
                }
                return new Response(JSON.stringify(data), {
                  status: response.status,
                  statusText: response.statusText,
                  headers: response.headers
                });
              }

              // Atualiza o objeto de resposta para que o sidepanel.js leia corretamente
              if (!data.data) data.data = {};
              data.data.expiresAt = expiresAtISO;
              data.data.expires_at = expiresAtISO;

              return new Response(JSON.stringify(data), {
                status: response.status,
                statusText: response.statusText,
                headers: response.headers
              });
            }
          }
        }
      } catch (err) {
        console.error("[GUTO] Erro no interceptador do validador:", err);
      }
    }
    return response;
  };

  // Injeta o link no painel (sem fundo)
  function injectSiteLink() {
    if (document.querySelector(".site-link-wrapper")) return;

    const header = document.querySelector(".glass-header");
    if (!header) return;

    const wrapper = document.createElement("div");
    wrapper.className = "site-link-wrapper";
    wrapper.style.cssText = [
      "display:flex",
      "align-items:center",
      "justify-content:center",
      "padding:4px 10px 6px",
      "border-bottom:1px solid rgba(255,255,255,0.06)",
      "background:transparent",
    ].join(";");

    const link = document.createElement("a");
    link.href = SITE_URL;
    link.className = "guto-site-link";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.title = "Abrir site do GUTO";
    link.innerHTML =
      '<i class="fas fa-globe" style="margin-right:6px;font-size:0.82em;vertical-align:middle;"></i>' +
      '<span>gutopingo.lovable.app</span>' +
      '<i class="fas fa-external-link-alt" style="margin-left:6px;font-size:0.75em;vertical-align:middle;"></i>';

    link.addEventListener("click", function (e) {
      e.preventDefault();
      try {
        chrome.tabs.create({ url: SITE_URL });
      } catch (_) {
        window.open(SITE_URL, "_blank");
      }
    });

    wrapper.appendChild(link);

    if (header.nextSibling) {
      header.parentNode.insertBefore(wrapper, header.nextSibling);
    } else {
      header.parentNode.appendChild(wrapper);
    }
  }

  // Estiliza o card de expiração do plano
  function setupCountdown() {
    const card = document.getElementById("licenseExpiryCard");
    const timeEl = document.getElementById("licenseExpiryTime");
    if (!card || !timeEl) return;

    card.style.cssText = [
      "display:none",
      "background:linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(255,82,82,0.04) 100%)",
      "border:1px solid rgba(167,139,250,0.2)",
      "border-radius:10px",
      "padding:10px 12px",
      "margin-bottom:12px",
      "font-size:0.82em",
      "text-align:center",
      "color:rgba(255,255,255,0.7)",
      "box-shadow:0 4px 12px rgba(0,0,0,0.15)",
      "transition:all 0.3s ease"
    ].join(";");

    timeEl.style.cssText = [
      "font-family:'Courier New', monospace, sans-serif",
      "font-weight:bold",
      "color:#a78bfa",
      "margin-top:5px",
      "font-size:1.25em",
      "letter-spacing:0.06em",
      "text-shadow:0 0 8px rgba(167,139,250,0.3)"
    ].join(";");

    if (customTimerInterval) clearInterval(customTimerInterval);
    
    customTimerInterval = setInterval(async () => {
      const appContainer = document.getElementById("appContainer");
      const isLocked = appContainer ? appContainer.classList.contains("license-locked") : true;

      if (isLocked) {
        card.style.display = "none";
        return;
      }

      const stored = await new Promise((r) => chrome.storage.local.get(["license_key", "guto_activations"], r));
      const key = stored.license_key;
      const activations = stored.guto_activations || {};

      if (!key) {
        card.style.display = "none";
        return;
      }

      const durationMs = parseDurationFromKey(key);
      if (durationMs === null) {
        card.style.display = "block";
        if (timeEl.innerHTML !== '<span class="guto-infinity-symbol">∞</span>') {
          timeEl.innerHTML = '<span class="guto-infinity-symbol">∞</span>';
        }
        return;
      }

      let activationTime = activations[key];
      if (!activationTime) {
        activationTime = Date.now();
        activations[key] = activationTime;
        await new Promise((r) => chrome.storage.local.set({ guto_activations: activations }, r));
      }

      const expiresAt = activationTime + durationMs;
      const now = Date.now();
      const diffMs = expiresAt - now;

      card.style.display = "block";

      if (diffMs <= 0) {
        timeEl.textContent = "EXPIRADA!";
        timeEl.style.color = "#ff5252";
        timeEl.style.textShadow = "0 0 8px rgba(255,82,82,0.4)";
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

      if (timeEl.querySelector(".guto-infinity-symbol")) {
        timeEl.innerHTML = "";
      }
      
      timeEl.style.color = "#a78bfa";
      timeEl.style.textShadow = "0 0 8px rgba(167,139,250,0.3)";
      timeEl.textContent = displayStr;
    }, 1000);
  }

  function init() {
    injectStyles();
    injectSiteLink();
    setupCountdown();

    setTimeout(function () {
      injectStyles();
      injectSiteLink();
      setupCountdown();
    }, 1000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
