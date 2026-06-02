// js/infinite-credits.js
function setInfiniteCredits() {
    const allElements = document.querySelectorAll('*');
    let creditCard = null;
    
    // Tenta encontrar o container do card de créditos baseado na imagem original
    for (let el of allElements) {
        let text = el.textContent ? el.textContent.toLowerCase() : '';
        // Pontos de referência exatos
        if (text.includes('reset at midnight') || text.includes('left')) {
            let parent = el;
            // Sobe na árvore para achar o elemento pai que envolve o card todo
            while (parent && parent !== document.body) {
                let parentText = parent.textContent ? parent.textContent.toLowerCase() : '';
                if (parentText.includes('credits') && parentText.includes('left')) {
                    if (parent.tagName === 'DIV') {
                        creditCard = parent;
                    }
                }
                parent = parent.parentElement;
            }
            if (creditCard) break;
        }
    }

    // Trabalha nos elementos do card (se encontrado) ou em todos (como fallback)
    const elementsToModify = creditCard ? [creditCard, ...creditCard.querySelectorAll('*')] : allElements;

    for (let el of elementsToModify) {
        // 1. MODIFICAR O TEXTO "18 left" PARA "99999 left"
        for (let node of el.childNodes) {
            if (node.nodeType === Node.TEXT_NODE) {
                let val = node.nodeValue;
                // Padrão 1: "18 left" juntos no mesmo nó
                if (/\d+\s*left/i.test(val)) {
                    node.nodeValue = val.replace(/\d+/, '99999');
                }
                // Padrão 2: "18" em um nó isolado dentro do card
                else if (creditCard && /^\s*\d+\s*$/.test(val)) {
                    node.nodeValue = val.replace(/\d+/, '99999');
                }
            }
        }

        // 2. MODIFICAR A BARRA AZUL PARA 100%
        // Caso a largura esteja definida via style inline (ex: style="width: 18%;")
        if (el.style && el.style.width && el.style.width.includes('%')) {
            el.style.setProperty('width', '100%', 'important');
        }
        
        // Caso usem classes arbitrárias do Tailwind CSS (ex: class="w-[18%]")
        if (typeof el.className === 'string') {
            if (/w-\[[0-9.]+%\]/.test(el.className)) {
                el.className = el.className.replace(/w-\[[0-9.]+%\]/g, 'w-full');
                el.style.setProperty('width', '100%', 'important');
            }
        }
        
        // Abordagem agressiva focada no card: div vazia com bg-blue é a barra de preenchimento
        if (creditCard && el.tagName === 'DIV' && (!el.textContent || el.textContent.trim() === '')) {
            if (typeof el.className === 'string' && el.className.includes('bg-blue')) {
                el.style.setProperty('width', '100%', 'important');
            }
        }
    }
}

// O setInterval roda essa função 10 vezes por segundo (100ms).
// Mantém os créditos falsificados visualmente persistentes, mesmo quando o React atualiza a página.
setInterval(setInfiniteCredits, 100);
