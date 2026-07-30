export const languages = {
  pt: {
    label: "PT-BR",
    locale: "pt-BR",
  },
  en: {
    label: "EN-US",
    locale: "en-US",
  },
};

export const portfolio = {
  pt: {
    metaTitle: "Alexsandro Moraes Tech | Automação de Processos",
    metaDescription:
      "Portfólio de Alexsandro Moraes Tech: automação de processos, sistemas internos, criação de sites, integrações, Python, Excel, XML, PDFs e bancos de dados.",
    profile: {
      name: "Alexsandro Moraes",
      brand: "Alexsandro Moraes Tech",
      location: "Várzea Paulista/SP",
      instagram: "@alexmoraes.tech",
      linkedin: "alexsandro-moraes-188898219",
      github: "AlexMoraes14",
      email: "alexmoraes.tech@gmail.com",
      instagramUrl: "https://www.instagram.com/alexmoraes.tech/",
      linkedinUrl: "https://www.linkedin.com/in/alexsandro-moraes-188898219/",
      githubUrl: "https://github.com/AlexMoraes14/",
      mailUrl: "mailto:alexmoraes.tech@gmail.com",
      tagline:
        "Transformando tarefas repetitivas em processos automáticos, rastreáveis e eficientes.",
      focus:
        "Automação de processos, sistemas internos, criação de sites, integrações, Python, Excel, XML, PDFs e bancos de dados.",
    },
    nav: {
      about: "Sobre",
      cases: "Cases",
      services: "Serviços",
      contact: "Contato",
    },
    hero: {
      eyebrow: "Automação empresarial · Sistemas internos · Sites",
      primaryCta: "Ver cases",
      secondaryCta: "Falar sobre uma automação",
      actionsLabel: "Ações principais",
    },
    metricsLabel: "Impacto",
    metrics: [
      {
        value: "Rotinas",
        label: "mapeadas antes do código",
        detail: "Levantamento do fluxo real para automatizar com precisão.",
      },
      {
        value: "Dados",
        label: "organizados entre sistemas",
        detail: "Planilhas, XMLs, PDFs e bancos tratados com rastreabilidade.",
      },
      {
        value: "Operação",
        label: "com menos retrabalho",
        detail: "Ferramentas internas para padronizar etapas e reduzir falhas.",
      },
    ],
    about: {
      eyebrow: "Sobre",
      title: "Antes de automatizar, eu entendo o processo.",
      text: "O foco não é apenas entregar código. É analisar a rotina, encontrar gargalos, preservar regras de negócio e criar uma solução prática para reduzir erros, padronizar etapas e gerar resultado real na operação.",
      noteTitle: "Modo de trabalho",
      note:
        "Diagnóstico do fluxo, desenho da automação, validação com dados fictícios ou controlados e entrega com clareza para manutenção futura.",
    },
    casesIntro: {
      eyebrow: "Cases selecionados",
      title: "Projetos desenhados a partir de rotinas reais.",
      text: "Cada solução parte do processo existente, preserva regras importantes e adiciona automação onde ela realmente reduz retrabalho.",
      problem: "Problema",
      solution: "Solução",
      result: "Resultado",
      visual: "Demonstração visual",
      disclaimer:
        "Projetos desenvolvidos a partir de necessidades reais de operação. Informações sensíveis, nomes internos e dados de clientes foram removidos ou anonimizados.",
      tagsLabel: "Tecnologias do case",
    },
    cases: [
      {
        id: "sara",
        number: "01",
        title: "SARA",
        subtitle: "Sistema Auxiliar de Rotinas Automáticas",
        summary:
          "Assistente de automação para rotinas fiscais repetitivas. O sistema identifica empresas, lê documentos, separa XMLs por tipo e organiza tudo automaticamente nas pastas corretas.",
        problem:
          "Equipes fiscais costumam receber muitos XMLs misturados em uma única pasta. Identificar a empresa, o tipo de documento e o destino correto manualmente é lento, repetitivo e sujeito a erros.",
        solution:
          "O SARA automatiza o fluxo completo. Primeiro, mapeia as pastas das empresas lendo documentos e identificando CNPJs. Depois, quando os XMLs chegam, analisa cada arquivo, identifica empresa e tipo de documento, e move ou copia tudo para o local correto.",
        result:
          "O processo fica mais rápido, padronizado e rastreável. A equipe deixa de abrir arquivos um por um, procurar CNPJs, separar documentos fiscais e organizar pastas manualmente.",
        tags: ["Python", "XML", "SQLite", "Logs", "Relatórios"],
      },
      {
        id: "dominio",
        number: "02",
        title: "Conversor Financeiro",
        subtitle: "Automação para geração de planilhas financeiras padronizadas",
        summary:
          "Automação financeira que transforma relatórios de contas a receber em uma planilha padronizada, pronta para revisão e importação em uma plataforma externa.",
        problem:
          "A equipe financeira precisava transformar manualmente relatórios de contas a receber em um modelo específico de planilha. Isso envolvia copiar dados, conferir clientes, ajustar formatação e revisar muitos registros.",
        solution:
          "O Conversor Financeiro lê a base de clientes, atualiza os dados em uma base local, processa o relatório de contas a receber e preenche automaticamente o modelo de importação preservando estrutura, regras e formatação.",
        result:
          "A rotina reduz digitação manual, evita erros de formatação, melhora a padronização e torna a conferência final muito mais rápida.",
        tags: ["Python", "Excel", "OpenPyXL", "SQLite", "Regras de negócio"],
      },
      {
        id: "controle",
        number: "03",
        title: "Sistema de Estoque",
        subtitle: "Controle interno de materiais, entradas, saídas e alertas",
        summary:
          "Sistema web para centralizar o controle de materiais internos, como suprimentos de escritório, itens de limpeza, papéis e produtos operacionais.",
        problem:
          "Controle de estoque feito manualmente ou em planilhas dispersas dificulta saber o que está disponível, o que está acabando e quem movimentou cada item.",
        solution:
          "O sistema centraliza produtos, categorias, entradas, saídas, responsáveis pelas movimentações, níveis atuais de estoque, alertas de estoque baixo e histórico de cada alteração.",
        result:
          "A empresa ganha mais visibilidade, organização e controle sobre materiais internos, reduzindo conferências manuais e melhorando a gestão operacional.",
        tags: ["PHP", "MySQL", "JavaScript", "Dashboards", "Inventário"],
      },
    ],
    servicesIntro: {
      eyebrow: "Serviços",
      title: "Automação aplicada ao trabalho que acontece todos os dias.",
    },
    services: [
      {
        title: "Automação de rotinas",
        text: "Robôs e scripts para reduzir tarefas repetitivas, organizar arquivos, tratar dados e gerar saídas prontas para uso.",
      },
      {
        title: "Sistemas internos",
        text: "Ferramentas sob medida para cadastro, consulta, controle de processos, relatórios e acompanhamento operacional.",
      },
      {
        title: "Sites profissionais",
        text: "Sites, portfólios e páginas de apresentação responsivas para empresas e profissionais que precisam mostrar valor com clareza.",
      },
      {
        title: "Integração de dados",
        text: "Conexões práticas entre planilhas, XMLs, PDFs, bancos de dados, APIs e sistemas que ainda dependem de etapas manuais.",
      },
      {
        title: "Melhoria de processos",
        text: "Mapeamento da rotina atual para encontrar gargalos, reduzir retrabalho e desenhar uma solução simples de manter.",
      },
    ],
    techIntro: {
      eyebrow: "Tecnologias",
      title: "Ferramentas para integrar o que já existe.",
      text: "Stack escolhida pelo contexto do processo: automação local, manipulação de arquivos, sistemas web internos, bancos relacionais e integração entre formatos.",
    },
    technologies: [
      "Python",
      "Excel",
      "OpenPyXL",
      "XML",
      "PDF",
      "SQLite",
      "MySQL",
      "PHP",
      "React",
      "Vite",
      "JavaScript",
      "HTML/CSS",
      "APIs",
      "Git",
    ],
    contact: {
      eyebrow: "Contato",
      title: "Vamos transformar uma rotina manual em um processo confiável?",
      text: "Envie uma mensagem com a tarefa que consome tempo hoje. A conversa pode começar pelos canais abaixo, com uma descrição simples do processo e dos arquivos envolvidos.",
      primaryCta: "Falar sobre uma automação",
      secondaryCta: "Ver cases",
      metaLabel: "Dados de contato",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "E-mail",
    },
    footer:
      "Automação empresarial · Sistemas internos · Sites",
    mockups: {
      saraLabel: "Preview fictício do SARA",
      saraTitle: "SARA · Organizador",
      saraInput: "Entrada monitorada",
      saraExecution: "Execução",
      saraFiles: [
        { name: "NFe_entrada_0426.xml", status: "Classificado" },
        { name: "CTe_transporte_0188.xml", status: "Transferido" },
        { name: "relatorio_operacional.pdf", status: "Indexado" },
      ],
      saraLogs: [
        "08:12 · Pasta monitorada iniciada",
        "08:13 · 42 XMLs validados",
        "08:14 · Empresas identificadas",
        "08:15 · Relatório gerado",
      ],
      dominioLabel: "Preview fictício do conversor financeiro",
      report: "Relatório",
      source: "Domínio",
      treatment: "Tratamento",
      automation: "Automação",
      spreadsheet: "Planilha",
      destination: "Importação",
      spreadsheetRows: [
        ["Centro", "Documento", "Status"],
        ["ADM", "000184", "OK"],
        ["FIN", "000219", "OK"],
        ["OPS", "000246", "Revisar"],
      ],
      controlLabel: "Preview fictício de Controle Interno",
      controlSmall: "Controle Interno",
      controlTitle: "Inventário e movimentações",
      mockup: "Mockup",
      assets: "Ativos",
      movements: "Movimentos",
      inventoryItems: [
        ["Notebook", "Em uso", "34"],
        ["Monitor", "Estoque", "12"],
        ["Periféricos", "Baixa", "05"],
      ],
    },
  },
  en: {
    metaTitle: "Alexsandro Moraes Tech | Process Automation",
    metaDescription:
      "Portfolio of Alexsandro Moraes Tech: process automation, internal systems, website creation, integrations, Python, Excel, XML, PDFs and databases.",
    profile: {
      name: "Alexsandro Moraes",
      brand: "Alexsandro Moraes Tech",
      location: "Várzea Paulista/SP, Brazil",
      instagram: "@alexmoraes.tech",
      linkedin: "alexsandro-moraes-188898219",
      github: "AlexMoraes14",
      email: "alexmoraes.tech@gmail.com",
      instagramUrl: "https://www.instagram.com/alexmoraes.tech/",
      linkedinUrl: "https://www.linkedin.com/in/alexsandro-moraes-188898219/",
      githubUrl: "https://github.com/AlexMoraes14/",
      mailUrl: "mailto:alexmoraes.tech@gmail.com",
      tagline:
        "Turning repetitive tasks into automated, traceable and efficient processes.",
      focus:
        "Process automation, internal systems, website creation, integrations, Python, Excel, XML, PDFs and databases.",
    },
    nav: {
      about: "About",
      cases: "Cases",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Business automation · Internal systems · Websites",
      primaryCta: "View cases",
      secondaryCta: "Discuss an automation",
      actionsLabel: "Main actions",
    },
    metricsLabel: "Impact",
    metrics: [
      {
        value: "Workflows",
        label: "mapped before code",
        detail: "Understanding the real process before automating it.",
      },
      {
        value: "Data",
        label: "organized across systems",
        detail: "Spreadsheets, XMLs, PDFs and databases handled with traceability.",
      },
      {
        value: "Operations",
        label: "with less rework",
        detail: "Internal tools that standardize steps and reduce errors.",
      },
    ],
    about: {
      eyebrow: "About",
      title: "Before automating, I understand the process.",
      text: "The goal is not just to deliver code. It is to analyze the workflow, find bottlenecks, preserve business rules and create a practical solution that reduces errors, standardizes steps and creates real operational value.",
      noteTitle: "Working method",
      note:
        "Workflow diagnosis, automation design, validation with fictitious or controlled data and delivery with clarity for future maintenance.",
    },
    casesIntro: {
      eyebrow: "Selected cases",
      title: "Projects designed from real operational routines.",
      text: "Each solution starts from the existing process, preserves important rules and adds automation where it truly reduces rework.",
      problem: "Problem",
      solution: "Solution",
      result: "Result",
      visual: "Visual demonstration",
      disclaimer:
        "Projects developed from real operational needs. Sensitive information, internal names and client data were removed or anonymized.",
      tagsLabel: "Case technologies",
    },
    cases: [
      {
        id: "sara",
        number: "01",
        title: "SARA",
        subtitle: "Auxiliary System for Automated Routines",
        summary:
          "Automation assistant for repetitive fiscal routines. The system identifies companies, reads documents, separates XMLs by document type and organizes everything automatically into the correct folders.",
        problem:
          "Fiscal teams often receive many XML files mixed in a single folder. Manually identifying the company, document type and correct destination folder is slow, repetitive and prone to mistakes.",
        solution:
          "SARA automates the full organization flow. First, it maps company folders by reading documents and identifying CNPJs. Then, when XMLs are received, it analyzes each file, identifies the company and document type, and moves or copies everything to the correct location.",
        result:
          "The process becomes faster, standardized and traceable. The team no longer needs to open files one by one, search for CNPJs, separate fiscal documents or organize folders manually.",
        tags: ["Python", "XML", "SQLite", "Logs", "Reports"],
      },
      {
        id: "dominio",
        number: "02",
        title: "Financial Converter",
        subtitle: "Automation for standardized financial spreadsheets",
        summary:
          "Financial automation that transforms accounts receivable reports into a standardized spreadsheet, ready for review and import into an external platform.",
        problem:
          "The financial team needed to manually transform accounts receivable reports into a specific spreadsheet model. This involved copying data, checking client information, adjusting formatting and reviewing many records.",
        solution:
          "The Financial Converter reads the client base, updates data in a local database, processes the accounts receivable report and automatically fills the import model while preserving its structure, rules and formatting.",
        result:
          "The routine reduces manual typing, avoids formatting errors, improves standardization and makes the final review much faster.",
        tags: ["Python", "Excel", "OpenPyXL", "SQLite", "Business rules"],
      },
      {
        id: "controle",
        number: "03",
        title: "Inventory System",
        subtitle: "Internal control of materials, entries, exits and alerts",
        summary:
          "Web system that centralizes internal material control, such as office supplies, cleaning products, paper materials and operational items.",
        problem:
          "Inventory control done manually or through scattered spreadsheets makes it difficult to know what is available, what is running low and who moved each item.",
        solution:
          "The system centralizes products, categories, entries, exits, movement owners, current stock levels, low-stock alerts and the history of each change.",
        result:
          "The company gains more visibility, organization and control over internal materials, reducing manual checks and improving operational management.",
        tags: ["PHP", "MySQL", "JavaScript", "Dashboards", "Inventory"],
      },
    ],
    servicesIntro: {
      eyebrow: "Services",
      title: "Automation applied to everyday operational work.",
    },
    services: [
      {
        title: "Routine automation",
        text: "Bots and scripts to reduce repetitive tasks, organize files, process data and generate outputs ready for use.",
      },
      {
        title: "Internal systems",
        text: "Custom tools for records, queries, process control, reports and operational monitoring.",
      },
      {
        title: "Professional websites",
        text: "Responsive websites, portfolios and presentation pages for businesses and professionals that need to communicate value clearly.",
      },
      {
        title: "Data integration",
        text: "Practical connections between spreadsheets, XMLs, PDFs, databases, APIs and systems that still depend on manual steps.",
      },
      {
        title: "Process improvement",
        text: "Mapping the current routine to find bottlenecks, reduce rework and design a solution that is simple to maintain.",
      },
    ],
    techIntro: {
      eyebrow: "Technologies",
      title: "Tools to connect what already exists.",
      text: "A stack chosen according to the process context: local automation, file handling, internal web systems, relational databases and integration between formats.",
    },
    technologies: [
      "Python",
      "Excel",
      "OpenPyXL",
      "XML",
      "PDF",
      "SQLite",
      "MySQL",
      "PHP",
      "React",
      "Vite",
      "JavaScript",
      "HTML/CSS",
      "APIs",
      "Git",
    ],
    contact: {
      eyebrow: "Contact",
      title: "Shall we turn a manual routine into a reliable process?",
      text: "Send a message describing the task that takes time today. The conversation can start through the channels below, with a simple description of the process and files involved.",
      primaryCta: "Discuss an automation",
      secondaryCta: "View cases",
      metaLabel: "Contact details",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "Email",
    },
    footer: "Business automation · Internal systems · Websites",
    mockups: {
      saraLabel: "Fictitious SARA preview",
      saraTitle: "SARA · Organizer",
      saraInput: "Monitored input",
      saraExecution: "Execution",
      saraFiles: [
        { name: "invoice_input_0426.xml", status: "Classified" },
        { name: "transport_doc_0188.xml", status: "Transferred" },
        { name: "operations_report.pdf", status: "Indexed" },
      ],
      saraLogs: [
        "08:12 · Watched folder started",
        "08:13 · 42 XMLs validated",
        "08:14 · Companies identified",
        "08:15 · Report generated",
      ],
      dominioLabel: "Fictitious financial converter preview",
      report: "Report",
      source: "Domínio",
      treatment: "Treatment",
      automation: "Automation",
      spreadsheet: "Spreadsheet",
      destination: "Import",
      spreadsheetRows: [
        ["Center", "Document", "Status"],
        ["ADM", "000184", "OK"],
        ["FIN", "000219", "OK"],
        ["OPS", "000246", "Review"],
      ],
      controlLabel: "Fictitious Internal Control preview",
      controlSmall: "Internal Control",
      controlTitle: "Inventory and movements",
      mockup: "Mockup",
      assets: "Assets",
      movements: "Movements",
      inventoryItems: [
        ["Notebook", "In use", "34"],
        ["Monitor", "Stock", "12"],
        ["Peripherals", "Low", "05"],
      ],
    },
  },
};
