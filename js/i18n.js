(function () {
  "use strict";

  const i18n = {
    pt: {
      "statusBadgeTitle": "Licença obrigatória para liberar o GUTO.",
      "gateTitle": "Desbloqueie o GUTO",
      "gateDesc": "Valide sua licença para liberar o painel e enviar comandos ao Lovable.",
      "licensePlaceholder": "Cole sua chave de licença",
      "connectBtn": "Validar chave",
      "disconnectBtn": "Remover chave",
      "licenseRequiredMsg": "Licença obrigatória para usar o GUTO.",
      "licenseExpiryLabel": "Sua licença expira em:",
      "visualModeBtn": "Modo Chat",
      "turboModeBtn": "Modo Thinking Beta",
      
      "clearHistoryTitle": "Clear History",
      "attachBtnTitle": "Attach File",
      "micBtnTitle": "Voice Input",
      "createProjectBtnTitle": "Create New Project",

      "Sucesso!!! Mensagem enviada": "Sucesso!!! Mensagem enviada",
      "Modo Thinking Beta aplicado. Mensagem enviada.": "Modo Thinking Beta aplicado. Mensagem enviada.",
      "Validando licença no servidor...": "Validando licença no servidor...",
      "Licença validada. GUTO liberado.": "Licença validada. GUTO liberado.",
      "Abra um projeto do Lovable com uma sessão ativa para começar.": "Abra um projeto do Lovable com uma sessão ativa para começar.",
      "Licença validada e sessão Lovable pronta.": "Licença validada e sessão Lovable pronta.",
      "Licença removida. Insira uma chave válida para continuar.": "Licença removida. Insira uma chave válida para continuar.",
      "Licença válida obrigatória para anexar arquivos.": "Licença válida obrigatória para anexar arquivos.",
      "Licença válida obrigatória para enviar comandos...": "Licença válida obrigatória para enviar comandos...",
      "Licença válida obrigatória para enviar comandos ao Lovable.": "Licença válida obrigatória para enviar comandos ao Lovable.",
      "Licença validada.": "Licença validada.",
      "Licença inválida.": "Licença inválida.",
      "Chave de licença inválida.": "Chave de licença inválida.",
      "Erro ao validar licença: ": "Erro ao validar licença: ",
      "Sua chave de licença expirou.": "Sua chave de licença expirou.",
      "Licença local ativa.": "Licença local ativa.",
      "Licença válida obrigatória para criar projetos.": "Licença válida obrigatória para criar projetos.",
      "Falha ao iniciar a validação de licença: ": "Falha ao iniciar a validação de licença: ",
      "Máximo de 5 arquivos por mensagem.": "Máximo de 5 arquivos por mensagem.",
      "Arquivo muito grande: ": "Arquivo muito grande: ",
      "Descreva o objetivo. O Modo Thinking Beta envia com modelo e raciocínio reforçado...": "Descreva o objetivo. O Modo Thinking Beta envia com modelo e raciocínio reforçado...",
      "Send a command to Lovable...": "Send a command to Lovable...",
      "Valide sua licença GUTO para começar.": "Valide sua licença GUTO para começar.",
      "Thinking...": "Thinking...",
      "EXPIRADA!": "EXPIRADA!",
      "Abrir site do GUTO": "Abrir site do GUTO",

      // Additional UI & flow translations
      "Nome do Projeto:": "Nome do Projeto:",
      "Novo Projeto": "Novo Projeto",
      "Erro: Falha ao criar um projeto (403)\nEntre na aba de um projeto de forma manual": "Erro: Falha ao criar um projeto (403)\nEntre na aba de um projeto de forma manual",
      "Não foi possível abrir uma aba do Lovable.": "Não foi possível abrir uma aba do Lovable.",
      "A aba do Lovable não carregou a tempo.": "A aba do Lovable não carregou a tempo.",
      "Falha desconhecida ao chamar a API do Lovable.": "Falha desconhecida ao chamar a API do Lovable.",
      "Falha ao buscar workspaces": "Falha ao buscar workspaces",
      "Falha ao buscar workspaces (": "Falha ao buscar workspaces (",
      "ID do workspace não encontrado na resposta da API.": "ID do workspace não encontrado na resposta da API.",
      "Falha ao criar projeto": "Falha ao criar projeto",
      "Falha ao criar projeto (": "Falha ao criar projeto (",
      "Falha ao cancelar a geração.": "Falha ao cancelar a geração.",
      "Projeto criado com sucesso.": "Projeto criado com sucesso.",
      "Aba do Lovable não encontrada para upload.": "Aba do Lovable não encontrada para upload.",
      "Abra a aba do editor em lovable.dev para esse projeto e tente novamente.": "Abra a aba do editor em lovable.dev para esse projeto e tente novamente.",
      "Nenhum projeto Lovable ativo foi detectado. Abra o projeto no navegador e tente novamente.": "Nenhum projeto Lovable ativo foi detectado. Abra o projeto no navegador e tente novamente.",
      "Falha ao ler arquivo.": "Falha ao ler arquivo.",
      "Erro de conexão com o servidor.": "Erro de conexão com o servidor.",
      "Microphone blocked! Opening permission page...": "🎤 Microfone bloqueado! Abrindo página de permissão...",
      "Browser does not support speech recognition.": "⚠️ O navegador não suporta reconhecimento de voz.",
      "Microphone authorized! Click the mic to start.": "🎤 Microfone autorizado! Clique no microfone para começar.",
      "History cleared.": "Histórico limpo.",
      "Projeto criado mas sem ID retornado.": "Projeto criado mas sem ID retornado.",
      "✅ Projeto criado! Redirecionando...": "✅ Projeto criado! Redirecionando...",
      "Erro: ": "Erro: ",
      "Erro no upload: ": "Erro no upload: ",
      "⚠️ Erro no upload: ": "⚠️ Erro no upload: ",
      " arquivo(s) falharam no upload: ": " arquivo(s) falharam no upload: ",

      // Direct text mappings for literal matching
      "Licença obrigatória para usar o GUTO.": "Licença obrigatória para usar o GUTO.",
      "Sua licença expira em:": "Sua licença expira em:",
      "Modo Chat": "Modo Chat",
      "Modo Thinking Beta": "Modo Thinking Beta",
      "Validar chave": "Validar chave",
      "Remover chave": "Remover chave",
      "Cole sua chave de licença": "Cole sua chave de licença",
      "Desbloqueie o GUTO": "Desbloqueie o GUTO",
      "Valide sua licença para liberar o painel e enviar comandos ao Lovable.": "Valide sua licença para liberar o painel e enviar comandos ao Lovable.",
      "Licença obrigatória para liberar o GUTO.": "Licença obrigatória para liberar o GUTO."
    },
    en: {
      "statusBadgeTitle": "License required to unlock GUTO.",
      "gateTitle": "Unlock GUTO",
      "gateDesc": "Validate your license to unlock the panel and send commands to Lovable.",
      "licensePlaceholder": "Paste your license key",
      "connectBtn": "Validate key",
      "disconnectBtn": "Remove key",
      "licenseRequiredMsg": "License required to use GUTO.",
      "licenseExpiryLabel": "Your license expires in:",
      "visualModeBtn": "Chat Mode",
      "turboModeBtn": "Thinking Beta Mode",
      
      "clearHistoryTitle": "Clear History",
      "attachBtnTitle": "Attach File",
      "micBtnTitle": "Voice Input",
      "createProjectBtnTitle": "Create New Project",

      "Sucesso!!! Mensagem enviada": "Success!!! Message sent",
      "Modo Thinking Beta aplicado. Mensagem enviada.": "Thinking Beta Mode applied. Message sent.",
      "Validando licença no servidor...": "Validating license on server...",
      "Licença validada. GUTO liberado.": "License validated. GUTO unlocked.",
      "Abra um projeto do Lovable com uma sessão ativa para começar.": "Open a Lovable project with an active session to start.",
      "Licença validada e sessão Lovable pronta.": "License validated and Lovable session ready.",
      "Licença removida. Insira uma chave válida para continuar.": "License removed. Enter a valid key to continue.",
      "Licença válida obrigatória para anexar arquivos.": "Valid license required to attach files.",
      "Licença válida obrigatória para enviar comandos...": "Valid license required to send commands...",
      "Licença válida obrigatória para enviar comandos ao Lovable.": "Valid license required to send commands to Lovable.",
      "Licença validada.": "License validated.",
      "Licença inválida.": "Invalid license.",
      "Chave de licença inválida.": "Invalid license key.",
      "Erro ao validar licença: ": "Error validating license: ",
      "Sua chave de licença expirou.": "Your license key has expired.",
      "Licença local ativa.": "Local license active.",
      "Licença válida obrigatória para criar projetos.": "Valid license required to create projects.",
      "Falha ao iniciar a validação de licença: ": "Failed to start license validation: ",
      "Máximo de 5 arquivos por mensagem.": "Maximum of 5 files per message.",
      "Arquivo muito grande: ": "File too large: ",
      "Descreva o objetivo. O Modo Thinking Beta envia com modelo e raciocínio reforçado...": "Describe the goal. Thinking Beta Mode sends with reinforced reasoning model...",
      "Send a command to Lovable...": "Send a command to Lovable...",
      "Valide sua licença GUTO para começar.": "Validate your GUTO license to start.",
      "Thinking...": "Thinking...",
      "EXPIRADA!": "EXPIRED!",
      "Abrir site do GUTO": "Open GUTO website",

      // Additional UI & flow translations
      "Nome do Projeto:": "Project Name:",
      "Novo Projeto": "New Project",
      "Erro: Falha ao criar um projeto (403)\nEntre na aba de um projeto de forma manual": "Error: Failed to create a project (403)\nEnter a project tab manually",
      "Não foi possível abrir uma aba do Lovable.": "Could not open a Lovable tab.",
      "A aba do Lovable não carregou a tempo.": "Lovable tab did not load in time.",
      "Falha desconhecida ao chamar a API do Lovable.": "Unknown failure calling Lovable API.",
      "Falha ao buscar workspaces": "Failed to fetch workspaces",
      "Falha ao buscar workspaces (": "Failed to fetch workspaces (",
      "ID do workspace não encontrado na resposta da API.": "Workspace ID not found in API response.",
      "Falha ao criar projeto": "Failed to create project",
      "Falha ao criar projeto (": "Failed to create project (",
      "Falha ao cancelar a geração.": "Failed to cancel generation.",
      "Projeto criado com sucesso.": "Project created successfully.",
      "Aba do Lovable não encontrada para upload.": "Lovable tab not found for upload.",
      "Abra a aba do editor em lovable.dev para esse projeto e tente novamente.": "Open the editor tab in lovable.dev for this project and try again.",
      "Nenhum projeto Lovable ativo foi detectado. Abra o projeto no navegador e tente novamente.": "No active Lovable project detected. Open the project in browser and try again.",
      "Falha ao ler arquivo.": "Failed to read file.",
      "Erro de conexão com o servidor.": "Connection error with server.",
      "Microphone blocked! Opening permission page...": "🎤 Microphone blocked! Opening permission page...",
      "Browser does not support speech recognition.": "⚠️ Browser does not support speech recognition.",
      "Microphone authorized! Click the mic to start.": "🎤 Microphone authorized! Click the mic to start.",
      "History cleared.": "History cleared.",
      "Projeto criado mas sem ID retornado.": "Project created but no ID returned.",
      "✅ Projeto criado! Redirecionando...": "✅ Project created! Redirecting...",
      "Erro: ": "Error: ",
      "Erro no upload: ": "Upload error: ",
      "⚠️ Erro no upload: ": "⚠️ Upload error: ",
      " arquivo(s) falharam no upload: ": " file(s) failed to upload: ",

      // Direct text mappings for literal matching
      "Licença obrigatória para usar o GUTO.": "License required to use GUTO.",
      "Sua licença expira em:": "Your license expires in:",
      "Modo Chat": "Chat Mode",
      "Modo Thinking Beta": "Thinking Beta Mode",
      "Validar chave": "Validate key",
      "Remover chave": "Remove key",
      "Cole sua chave de licença": "Paste your license key",
      "Desbloqueie o GUTO": "Unlock GUTO",
      "Valide sua licença para liberar o painel e enviar comandos ao Lovable.": "Validate your license to unlock the panel and send commands to Lovable.",
      "Licença obrigatória para liberar o GUTO.": "License required to unlock GUTO."
    },
    tr: {
      "statusBadgeTitle": "GUTO'yi açmak için lisans gereklidir.",
      "gateTitle": "GUTO'nun Kilidini Aç",
      "gateDesc": "Paneli açmak ve Lovable'a komut göndermek için lisansınızı doğrulayın.",
      "licensePlaceholder": "Lisans anahtarınızı yapıştırın",
      "connectBtn": "Anahtarı doğrula",
      "disconnectBtn": "Anahtarı kaldır",
      "licenseRequiredMsg": "GUTO'yu kullanmak için lisans gereklidir.",
      "licenseExpiryLabel": "Lisansınızın bitiş süresi:",
      "visualModeBtn": "Sohbet Modu",
      "turboModeBtn": "Düşünme Beta Modu",
      
      "clearHistoryTitle": "Geçmişi Temizle",
      "attachBtnTitle": "Dosya Ekle",
      "micBtnTitle": "Ses Girişi",
      "createProjectBtnTitle": "Yeni Proje Oluştur",

      "Sucesso!!! Mensagem enviada": "Başarılı!!! Mesaj gönderildi",
      "Modo Thinking Beta aplicado. Mensagem enviada.": "Düşünme Beta Modu uygulandı. Mesaj gönderildi.",
      "Validando licença no servidor...": "Sunucuda lisans doğrulanıyor...",
      "Licença validada. GUTO liberado.": "Lisans doğrulandı. GUTO açıldı.",
      "Abra um projeto do Lovable com uma sessão ativa para começar.": "Başlamak için aktif bir oturumu olan bir Lovable projesi açın.",
      "Licença validada e sessão Lovable pronta.": "Lisans doğrulandı ve Lovable oturumu hazır.",
      "Licença removida. Insira uma chave válida para continuar.": "Lisans kaldırıldı. Devam etmek için geçerli bir anahtar girin.",
      "Licença válida obrigatória para anexar arquivos.": "Dosya eklemek için geçerli bir lisans gereklidir.",
      "Licença válida obrigatória para enviar comandos...": "Komut göndermek için geçerli bir lisans gereklidir...",
      "Licença válida obrigatória para enviar comandos ao Lovable.": "Lovable'a komut göndermek için geçerli bir lisans gereklidir.",
      "Licença validada.": "Lisans doğrulandı.",
      "Licença inválida.": "Geçersiz lisans.",
      "Chave de licença inválida.": "Geçersiz lisans anahtarı.",
      "Erro ao validar licença: ": "Lisans doğrulanırken hata oluştu: ",
      "Sua chave de licença expirou.": "Lisans anahtarınızın süresi doldu.",
      "Licença local ativa.": "Yerel lisans aktif.",
      "Licença válida obrigatória para criar projetos.": "Proje oluşturmak için geçerli bir lisans gereklidir.",
      "Falha ao iniciar a validação de licença: ": "Lisans doğrulaması başlatılamadı: ",
      "Máximo de 5 arquivos por mensagem.": "Mesaj başına en fazla 5 dosya.",
      "Arquivo muito grande: ": "Dosya çok büyük: ",
      "Descreva o objetivo. O Modo Thinking Beta envia com modelo e raciocínio reforçado...": "Hedefi tanımlayın. Düşünme Beta Modu, güçlendirilmiş muhakeme modeliyle gönderir...",
      "Send a command to Lovable...": "Lovable'a bir komut gönderin...",
      "Valide sua licença GUTO para começar.": "Başlamak için GUTO lisansınızı doğrulayın.",
      "Thinking...": "Düşünülüyor...",
      "EXPIRADA!": "SÜRESİ DOLDU!",
      "Abrir site do GUTO": "GUTO web sitesini aç",

      // Additional UI & flow translations
      "Nome do Projeto:": "Proje Adı:",
      "Novo Projeto": "Yeni Proje",
      "Erro: Falha ao criar um projeto (403)\nEntre na aba de um projeto de forma manual": "Hata: Proje oluşturulamadı (403)\nBir proje sekmesine manuel olarak girin",
      "Não foi possível abrir uma aba do Lovable.": "Lovable sekmesi açılamadı.",
      "A aba do Lovable não carregou a tempo.": "Lovable sekmesi zamanında yüklenmedi.",
      "Falha desconhecida ao chamar a API do Lovable.": "Lovable API'si çağrılırken bilinmeyen hata.",
      "Falha ao buscar workspaces": "Çalışma alanları alınamadı",
      "Falha ao buscar workspaces (": "Çalışma alanları alınamadı (",
      "ID do workspace não encontrado na resposta da API.": "API yanıtında çalışma alanı kimliği bulunamadı.",
      "Falha ao criar projeto": "Proje oluşturulamadı",
      "Falha ao criar projeto (": "Proje oluşturulamadı (",
      "Falha ao cancelar a geração.": "Oluşturma iptal edilemedi.",
      "Projeto criado com sucesso.": "Proje başarıyla oluşturuldu.",
      "Aba do Lovable não encontrada para upload.": "Yükleme için Lovable sekmesi bulunamadı.",
      "Abra a aba do editor em lovable.dev para esse projeto e tente novamente.": "Bu proje için lovable.dev'deki editör sekmesini açıp tekrar deneyin.",
      "Nenhum projeto Lovable ativo foi detectado. Abra o projeto no navegador e tente novamente.": "Aktif Lovable projesi algılanmadı. Projeyi tarayıcıda açıp tekrar deneyin.",
      "Falha ao ler arquivo.": "Dosya okunamadı.",
      "Erro de conexão com o servidor.": "Sunucuyla bağlantı hatası.",
      "Microphone blocked! Opening permission page...": "🎤 Mikrofon engellendi! İzin sayfası açılıyor...",
      "Browser does not support speech recognition.": "⚠️ Tarayıcı ses tanımayı desteklemiyor.",
      "Microphone authorized! Click the mic to start.": "🎤 Mikrofon yetkilendirildi! Başlamak için mikrofonu tıklayın.",
      "History cleared.": "Geçmiş temizlendi.",
      "Projeto criado mas sem ID retornado.": "Proje oluşturuldu ancak kimlik döndürülmedi.",
      "✅ Projeto criado! Redirecionando...": "✅ Proje oluşturuldu! Yönlendiriliyor...",
      "Erro: ": "Hata: ",
      "Erro no upload: ": "Yükleme hatası: ",
      "⚠️ Erro no upload: ": "⚠️ Yükleme hatası: ",
      " arquivo(s) falharam no upload: ": " dosya yüklenemedi: ",

      // Direct text mappings for literal matching
      "Licença obrigatória para usar o GUTO.": "GUTO'yu kullanmak için lisans gereklidir.",
      "Sua licença expira em:": "Lisansınızın bitiş süresi:",
      "Modo Chat": "Sohbet Modu",
      "Modo Thinking Beta": "Düşünme Beta Modu",
      "Validar chave": "Anahtarı doğrula",
      "Remover chave": "Anahtarı kaldır",
      "Cole sua chave de licença": "Lisans anahtarınızı yapıştırın",
      "Desbloqueie o GUTO": "GUTO'nun Kilidini Aç",
      "Valide sua licença para liberar o painel e enviar comandos ao Lovable.": "Paneli açmak ve Lovable'a komut göndermek için lisansınızı doğrulayın.",
      "Licença obrigatória para liberar o GUTO.": "GUTO'yi açmak için lisans gereklidir."
    }
  };

  let currentLang = "pt";

  function cleanString(s) {
    return s ? s.trim().replace(/\s+/g, " ") : "";
  }

  function getTranslation(str) {
    if (!str) return str;
    const cleanStr = cleanString(str);
    const langTable = i18n[currentLang];
    if (!langTable) return str;

    // 1. Try direct match by comparing cleaned versions of keys
    for (const key in langTable) {
      if (cleanString(key) === cleanStr) {
        return langTable[key];
      }
    }

    // 2. Try fallback lookup by matching keys in pt dictionary (cleaned)
    for (const key in i18n.pt) {
      if (cleanStr === cleanString(key) || 
          cleanStr === cleanString(i18n.en[key]) || 
          cleanStr === cleanString(i18n.tr[key])) {
        return langTable[key];
      }
    }

    // 3. Dynamic regex-based pattern translations

    // Match project creation: (🚀 )?Criando projeto "..." ... aguarde.
    const createProjectRegex = /^(🚀\s*)?(Criando projeto|Creating project|Proje)\s*["“”](.*?)["“”]\s*(\.\.\.\s*aguarde\.|\.\.\.\s*please wait\.|\s*oluşturuluyor\.\.\.\s*lütfen bekleyin\.)/i;
    const matchProj = cleanStr.match(createProjectRegex);
    if (matchProj) {
      const rocket = matchProj[1] || "";
      const projName = matchProj[3];
      let transProjName = projName;
      if (projName.trim().toLowerCase() === "novo projeto" || 
          projName.trim().toLowerCase() === "new project" || 
          projName.trim().toLowerCase() === "yeni proje") {
        transProjName = langTable["Novo Projeto"] || "Novo Projeto";
      }
      
      if (currentLang === "pt") {
        return `${rocket}Criando projeto "${transProjName}"... aguarde.`;
      } else if (currentLang === "tr") {
        return `${rocket}Proje "${transProjName}" oluşturuluyor... lütfen bekleyin.`;
      } else {
        return `${rocket}Creating project "${transProjName}"... please wait.`;
      }
    }

    // Match file upload fails: (⚠️ )?X arquivo(s) falharam no upload: ...
    const uploadFailRegex = /^(⚠️\s*)?(\d+)\s*(arquivo\(s\)\s*falharam\s*no\s*upload:|file\(s\)\s*failed\s*to\s*upload:|dosya\s*yüklenemedi:)\s*(.*)/i;
    const matchUpload = cleanStr.match(uploadFailRegex);
    if (matchUpload) {
      const warning = matchUpload[1] || "";
      const count = matchUpload[2];
      const filesPart = matchUpload[4];
      
      if (currentLang === "pt") {
        return `${warning}${count} arquivo(s) falharam no upload: ${filesPart}`;
      } else if (currentLang === "tr") {
        return `${warning}${count} dosya yüklenemedi: ${filesPart}`;
      } else {
        return `${warning}${count} file(s) failed to upload: ${filesPart}`;
      }
    }

    // Match file upload error details: (⚠️ )?Erro no upload: ...
    const uploadErrRegex = /^(⚠️\s*)?(Erro\s*no\s*upload:|Upload\s*error:|Yükleme\s*hatası:)\s*(.*)/i;
    const matchUploadErr = cleanStr.match(uploadErrRegex);
    if (matchUploadErr) {
      const warning = matchUploadErr[1] || "";
      const errDetails = matchUploadErr[3];
      const transDetails = getTranslation(errDetails);
      
      if (currentLang === "pt") {
        return `${warning}Erro no upload: ${transDetails}`;
      } else if (currentLang === "tr") {
        return `${warning}Yükleme hatası: ${transDetails}`;
      } else {
        return `${warning}Upload error: ${transDetails}`;
      }
    }

    // Match validation error detail prefixes: Erro ao validar licença: ...
    const licenseErrRegex = /^(Erro\s*ao\s*validar\s*licença:|Error\s*validating\s*license:|Lisans\s*doğrulanırken\s*hata\s*oluştu:)\s*(.*)/i;
    const matchLicenseErr = cleanStr.match(licenseErrRegex);
    if (matchLicenseErr) {
      const details = matchLicenseErr[2];
      const transDetails = getTranslation(details);
      
      if (currentLang === "pt") {
        return `Erro ao validar licença: ${transDetails}`;
      } else if (currentLang === "tr") {
        return `Lisans doğrulanırken hata oluştu: ${transDetails}`;
      } else {
        return `Error validating license: ${transDetails}`;
      }
    }

    // Match general error detail prefixes: (❌ )?Erro: ...
    const generalErrRegex = /^(❌\s*)?(Erro:|Error:|Hata:)\s*([\s\S]*)/i;
    const matchGeneralErr = cleanStr.match(generalErrRegex);
    if (matchGeneralErr) {
      const cross = matchGeneralErr[1] || "";
      const details = matchGeneralErr[3];
      const transDetails = getTranslation(details);
      
      if (currentLang === "pt") {
        return `${cross}Erro: ${transDetails}`;
      } else if (currentLang === "tr") {
        return `${cross}Hata: ${transDetails}`;
      } else {
        return `${cross}Error: ${transDetails}`;
      }
    }

    return str;
  }

  // Expose global translation function
  window.gutoGetTranslation = getTranslation;

  // Monkeypatch window dialog inputs
  const originalPrompt = window.prompt;
  window.prompt = function (message, defaultValue) {
    const translatedMessage = getTranslation(message);
    const translatedDefault = getTranslation(defaultValue);
    return originalPrompt(translatedMessage, translatedDefault);
  };

  const originalAlert = window.alert;
  window.alert = function (message) {
    return originalAlert(getTranslation(message));
  };

  const originalConfirm = window.confirm;
  window.confirm = function (message) {
    return originalConfirm(getTranslation(message));
  };

  function translateStaticUI() {
    const t = (key) => i18n[currentLang][key] || i18n["pt"][key];

    // Header statusBadge title
    const statusBadge = document.getElementById("statusBadge");
    if (statusBadge) {
      statusBadge.setAttribute("title", t("statusBadgeTitle"));
    }

    // License gate elements
    const licenseGate = document.getElementById("licenseGate");
    if (licenseGate) {
      const h2 = licenseGate.querySelector("h2");
      if (h2) h2.textContent = t("gateTitle");
      const p = licenseGate.querySelector("p");
      if (p) p.textContent = t("gateDesc");
    }

    // Input placeholder
    const licenseKey = document.getElementById("licenseKey");
    if (licenseKey) {
      licenseKey.setAttribute("placeholder", t("licensePlaceholder"));
    }

    // Connect/disconnect buttons
    const connectBtn = document.getElementById("connectBtn");
    if (connectBtn) connectBtn.textContent = t("connectBtn");
    const disconnectBtn = document.getElementById("disconnectBtn");
    if (disconnectBtn) disconnectBtn.textContent = t("disconnectBtn");

    // Mode buttons
    const visualModeBtn = document.getElementById("visualModeBtn");
    if (visualModeBtn) visualModeBtn.textContent = t("visualModeBtn");
    const turboModeBtn = document.getElementById("turboModeBtn");
    if (turboModeBtn) turboModeBtn.textContent = t("turboModeBtn");

    // Tooltips for action bar buttons
    const clearHistoryBtn = document.getElementById("clearHistoryBtn");
    if (clearHistoryBtn) clearHistoryBtn.setAttribute("title", t("clearHistoryTitle"));
    const attachBtn = document.getElementById("attachBtn");
    if (attachBtn) attachBtn.setAttribute("title", t("attachBtnTitle"));
    const micBtn = document.getElementById("micBtn");
    if (micBtn) micBtn.setAttribute("title", t("micBtnTitle"));
    const manualCreateProjectBtn = document.getElementById("manualCreateProjectBtn");
    if (manualCreateProjectBtn) manualCreateProjectBtn.setAttribute("title", t("createProjectBtnTitle"));

    // User command placeholder
    const userCommand = document.getElementById("userCommand");
    if (userCommand) {
      userCommand.setAttribute("placeholder", t("Send a command to Lovable..."));
    }

    // Connection status
    const connStatus = document.getElementById("connectionStatus");
    if (connStatus) {
      const txt = connStatus.textContent.trim().replace(/\s+/g, " ");
      const trans = getTranslation(txt);
      if (trans !== txt) {
        connStatus.textContent = trans;
      }
    }

    // Expiry card label
    const expiryCard = document.getElementById("licenseExpiryCard");
    if (expiryCard) {
      const textNodes = Array.from(expiryCard.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
      textNodes.forEach(node => {
        const txt = node.textContent.trim();
        if (txt) {
          if (txt.startsWith("Sua licença expira em:") || 
              txt.startsWith("Your license expires in:") || 
              txt.startsWith("Lisansınızın bitiş süresi:")) {
            node.textContent = getTranslation("Sua licença expira em:") + " ";
          }
        }
      });
      
      const timeEl = document.getElementById("licenseExpiryTime");
      if (timeEl) {
        const txt = timeEl.textContent.trim();
        if (txt === "EXPIRADA!" || txt === "EXPIRED!" || txt === "SÜRESİ DOLDU!") {
          timeEl.textContent = getTranslation("EXPIRADA!");
        }
      }
    }

    // Check system message in chat history
    const chatHistory = document.getElementById("chatHistory");
    if (chatHistory) {
      const systemMsgs = chatHistory.querySelectorAll(".chat-message.system .message-content");
      systemMsgs.forEach(msg => {
        const cleanText = msg.textContent.trim().replace(/\s+/g, " ");
        if (cleanText === "Valide sua licença GUTO para começar." ||
            cleanText === "Validate your GUTO license to start." ||
            cleanText === "Başlamak için GUTO lisansınızı doğrulayın.") {
          msg.textContent = t("Valide sua licença GUTO para começar.");
        }
      });
    }
  }

  const observer = new MutationObserver((mutations) => {
    observer.disconnect();

    try {
      // 1. Translate connection status text
      const connStatus = document.getElementById("connectionStatus");
      if (connStatus) {
        const txt = connStatus.textContent.trim().replace(/\s+/g, " ");
        const trans = getTranslation(txt);
        if (trans !== txt) {
          connStatus.textContent = trans;
        }
      }

      // 2. Translate expiry card label
      const expiryCard = document.getElementById("licenseExpiryCard");
      if (expiryCard) {
        const textNodes = Array.from(expiryCard.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
        textNodes.forEach(node => {
          const txt = node.textContent.trim();
          if (txt) {
            if (txt.startsWith("Sua licença expira em:") || 
                txt.startsWith("Your license expires in:") || 
                txt.startsWith("Lisansınızın bitiş süresi:")) {
              node.textContent = getTranslation("Sua licença expira em:") + " ";
            }
          }
        });
        
        const timeEl = document.getElementById("licenseExpiryTime");
        if (timeEl) {
          const txt = timeEl.textContent.trim();
          if (txt === "EXPIRADA!" || txt === "EXPIRED!" || txt === "SÜRESİ DOLDU!") {
            timeEl.textContent = getTranslation("EXPIRADA!");
          }
        }
      }

      // 3. Translate user command placeholder
      const userCommand = document.getElementById("userCommand");
      if (userCommand) {
        const placeholder = userCommand.getAttribute("placeholder");
        if (placeholder) {
          const trans = getTranslation(placeholder);
          if (trans !== placeholder) {
            userCommand.setAttribute("placeholder", trans);
          }
        }
      }

      // 4. Translate chat messages
      const chatHistory = document.getElementById("chatHistory");
      if (chatHistory) {
        const messages = chatHistory.querySelectorAll(".chat-message.system .message-content, .chat-message.bot .message-content");
        messages.forEach(msg => {
          if (msg.innerHTML.includes("fa-spinner")) {
            const txt = msg.textContent.trim();
            if (txt === "Thinking..." || txt === "Düşünülüyor...") {
              const trans = getTranslation("Thinking...");
              msg.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${trans}`;
            }
            return;
          }

          const txt = msg.textContent;
          const trans = getTranslation(txt);
          if (trans !== txt) {
            msg.textContent = trans;
          }
        });
      }

      // 5. Link title
      const siteLink = document.querySelector(".guto-site-link");
      if (siteLink) {
        siteLink.setAttribute("title", getTranslation("Abrir site do GUTO"));
      }

    } catch (e) {
      console.error("[i18n] Translation observer error:", e);
    } finally {
      observeUI();
    }
  });

  function observeUI() {
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ["placeholder", "title"]
    });
  }

  // Initialize
  function init() {
    const flagBtns = document.querySelectorAll(".lang-flag-btn");
    if (!flagBtns.length) return;

    function setActiveLang(lang) {
      currentLang = lang;
      flagBtns.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
      });
    }

    chrome.storage.local.get(["appLanguage"], (result) => {
      if (result.appLanguage) {
        currentLang = result.appLanguage;
      } else {
        const browserLang = (chrome.i18n.getUILanguage() || navigator.language || "en").toLowerCase();
        if (browserLang.startsWith("pt")) {
          currentLang = "pt";
        } else if (browserLang.startsWith("tr")) {
          currentLang = "tr";
        } else {
          currentLang = "en";
        }
        chrome.storage.local.set({ appLanguage: currentLang });
      }

      setActiveLang(currentLang);
      translateStaticUI();
      observeUI();
    });

    flagBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        if (lang === currentLang) return;
        currentLang = lang;
        setActiveLang(lang);
        chrome.storage.local.set({ appLanguage: lang }, () => {
          translateStaticUI();
        });
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
