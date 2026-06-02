// js/auto-updater.js
document.addEventListener('DOMContentLoaded', () => {
    // URL direta do manifest.json público no seu GitHub
    const GITHUB_MANIFEST_URL = 'https://raw.githubusercontent.com/gusmcoelho/GUTO/main/manifest.json';
    
    // Pega a versão instalada localmente no computador
    const currentVersion = chrome.runtime.getManifest().version;

    // Função para comparar versões (ex: "1.1" é maior que "1.0")
    function isNewerVersion(remote, local) {
        const remoteParts = remote.split('.').map(Number);
        const localParts = local.split('.').map(Number);
        
        for (let i = 0; i < Math.max(remoteParts.length, localParts.length); i++) {
            const r = remoteParts[i] || 0;
            const l = localParts[i] || 0;
            if (r > l) return true;
            if (r < l) return false;
        }
        return false;
    }

    // Faz a checagem no fundo
    fetch(GITHUB_MANIFEST_URL, { cache: 'no-store' }) // no-store evita que o navegador use versão velha em cache
        .then(response => response.json())
        .then(remoteManifest => {
            const remoteVersion = remoteManifest.version;
            // Se a versão do github for maior, mostra o banner
            if (remoteVersion && isNewerVersion(remoteVersion, currentVersion)) {
                showUpdateBanner(remoteVersion);
            }
        })
        .catch(err => console.log('Erro ao checar atualização do GUTO:', err));

    function showUpdateBanner(newVersion) {
        // Cria o banner visual
        const banner = document.createElement('div');
        banner.style.background = 'linear-gradient(135deg, #ff4757 0%, #ff6b81 100%)';
        banner.style.color = 'white';
        banner.style.padding = '12px';
        banner.style.textAlign = 'center';
        banner.style.fontWeight = '600';
        banner.style.fontSize = '0.9em';
        banner.style.cursor = 'pointer';
        banner.style.display = 'flex';
        banner.style.justifyContent = 'center';
        banner.style.alignItems = 'center';
        banner.style.gap = '8px';
        banner.style.boxShadow = '0 4px 15px rgba(255, 71, 87, 0.4)';
        banner.style.borderRadius = '0 0 8px 8px';
        banner.style.margin = '0 10px 10px 10px';
        banner.style.animation = 'pulse 2s infinite';
        
        banner.innerHTML = `
            <i class="fas fa-exclamation-triangle"></i>
            Atualização Obrigatória (v${newVersion})! Clique aqui para baixar.
        `;

        // Ao clicar no banner, abre o repositório do github
        banner.addEventListener('click', () => {
            chrome.tabs.create({ url: 'https://github.com/gusmcoelho/GUTO' });
        });

        // Insere o banner no topo do appContainer
        const appContainer = document.getElementById('appContainer');
        if (appContainer) {
            appContainer.insertBefore(banner, appContainer.firstChild);
        }
    }
});
