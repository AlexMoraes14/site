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
      "Portfólio de Alexsandro Moraes Tech: automação de processos, sistemas internos, integrações, Python, Excel, XML, PDFs e bancos de dados.",
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
        "Automação de processos, sistemas internos, integrações, Python, Excel, XML, PDFs e bancos de dados.",
    },
    nav: {
      about: "Sobre",
      cases: "Cases",
      services: "Serviços",
      contact: "Contato",
    },
    hero: {
      eyebrow: "Automação empresarial · Sistemas internos · Integrações",
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
        "Projetos desenvolvidos a partir de necessidades operacionais reais. Todos os exemplos usam dados fictícios, anonimizados ou não sensíveis sempre que necessário.",
      tagsLabel: "Tecnologias do case",
    },
    cases: [
      {
        id: "sara",
        number: "01",
        title: "SARA",
        subtitle: "Sistema Auxiliar de Rotinas Automáticas",
        summary:
          "Sistema criado para apoiar rotinas operacionais repetitivas, organizando arquivos, automatizando transferências, gerando relatórios, agendando execuções e reduzindo esforço manual com processos padronizados.",
        problem:
          "Arquivos e tarefas recorrentes exigiam organização manual, acompanhamento disperso e conferência repetitiva para garantir que cada etapa fosse executada corretamente.",
        solution:
          "O SARA centraliza rotinas automáticas, organiza arquivos, executa transferências, registra histórico, gera relatórios e permite acompanhar processos por telas padronizadas.",
        result:
          "Menos esforço manual, maior controle das execuções, redução de retrabalho e uma rotina mais rastreável para operações administrativas.",
        tags: ["Python", "XML", "SQLite", "Logs", "Relatórios"],
      },
      {
        id: "dominio",
        number: "02",
        title: "Kolek Converter",
        subtitle: "Conversão automatizada de relatórios financeiros",
        summary:
          "Conversor automatizado para transformar relatórios financeiros no formato de importação aceito pelo Kolek, com validação e padronização dos dados.",
        problem:
          "Conversão manual de relatórios financeiros para o formato de importação aceito pelo Kolek, com retrabalho, revisão linha a linha e risco de erros de formatação.",
        solution:
          "Desenvolvimento de um conversor automatizado capaz de ler relatórios, validar dados e gerar planilhas padronizadas para importação.",
        result:
          "Redução do trabalho manual, menos erros de formatação e processamento mais rápido para a rotina financeira.",
        tags: ["Python", "Excel", "OpenPyXL", "SQLite", "Regras de negócio"],
      },
      {
        id: "controle",
        number: "03",
        title: "Sistema de Estoque",
        subtitle: "Controle de produtos, movimentações e alertas operacionais",
        summary:
          "Sistema interno para acompanhar produtos, categorias, entradas, saídas, movimentações recentes e alertas de estoque baixo em uma rotina centralizada.",
        problem:
          "O controle de estoque dependia de consultas manuais e informações dispersas, dificultando a visibilidade de itens baixos, saídas recentes e produtos que exigiam reposição.",
        solution:
          "Criação de um painel com cadastro de produtos, categorias, alertas, filtros e histórico de movimentações para apoiar decisões operacionais.",
        result:
          "Mais rastreabilidade, melhor acompanhamento de estoque e redução de falhas na conferência de produtos e movimentações.",
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
      "Automação empresarial · Sistemas internos · Integrações",
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
      dominioLabel: "Preview fictício Domínio para Kolek",
      report: "Relatório",
      source: "Domínio",
      treatment: "Tratamento",
      automation: "Automação",
      spreadsheet: "Planilha",
      destination: "Kolek",
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
      "Portfolio of Alexsandro Moraes Tech: process automation, internal systems, integrations, Python, Excel, XML, PDFs and databases.",
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
        "Process automation, internal systems, integrations, Python, Excel, XML, PDFs and databases.",
    },
    nav: {
      about: "About",
      cases: "Cases",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Business automation · Internal systems · Integrations",
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
        "Projects developed from real operational needs. All examples use fictional, anonymized or non-sensitive data whenever necessary.",
      tagsLabel: "Case technologies",
    },
    cases: [
      {
        id: "sara",
        number: "01",
        title: "SARA",
        subtitle: "Auxiliary System for Automated Routines",
        summary:
          "SARA was designed to assist repetitive operational routines by organizing files, automating transfers, generating reports, scheduling executions and reducing manual effort through standardized processes.",
        problem:
          "Recurring files and tasks required manual organization, dispersed monitoring and repeated checks to ensure each step had been completed correctly.",
        solution:
          "SARA centralizes automated routines, organizes files, executes transfers, records history, generates reports and makes processes easier to follow through standardized screens.",
        result:
          "Less manual effort, greater execution control, reduced rework and a more traceable routine for administrative operations.",
        tags: ["Python", "XML", "SQLite", "Logs", "Reports"],
      },
      {
        id: "dominio",
        number: "02",
        title: "Kolek Converter",
        subtitle: "Automated financial report conversion",
        summary:
          "Automated converter that transforms financial reports into the import format accepted by Kolek, with data validation and standardization.",
        problem:
          "Manual conversion of financial reports into the import format accepted by Kolek, with rework, row-by-row review and formatting risks.",
        solution:
          "Development of an automated converter capable of reading reports, validating data and generating standardized spreadsheets.",
        result:
          "Reduction of manual work, fewer formatting errors and faster processing for the financial routine.",
        tags: ["Python", "Excel", "OpenPyXL", "SQLite", "Business rules"],
      },
      {
        id: "controle",
        number: "03",
        title: "Inventory System",
        subtitle: "Product, movement and stock alert control",
        summary:
          "Internal system for tracking products, categories, entries, exits, recent movements and low-stock alerts in a centralized workflow.",
        problem:
          "Inventory control depended on manual checks and scattered information, making it harder to see low-stock items, recent exits and products that required replenishment.",
        solution:
          "A dashboard with product records, categories, alerts, filters and movement history to support operational decisions.",
        result:
          "More traceability, better stock monitoring and fewer failures when reviewing products and movements.",
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
    footer: "Business automation · Internal systems · Integrations",
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
      dominioLabel: "Fictitious Domínio to Kolek preview",
      report: "Report",
      source: "Domínio",
      treatment: "Treatment",
      automation: "Automation",
      spreadsheet: "Spreadsheet",
      destination: "Kolek",
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
