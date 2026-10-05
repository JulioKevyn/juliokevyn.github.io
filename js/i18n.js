/* Idiomas: PT, EN, ES */

const LANGS = ['pt', 'en', 'es'];

const UI = {
    pt: {
        pageTitle: 'Julio Marques | Automação, RPA e IA',
        metaDesc: 'Automações com Python, n8n, RPA e IA que já economizaram mais de 100 mil horas de trabalho.',
        skip: 'Pular para o conteúdo',
        navStory: 'Como funciona', navRpa: 'Automações', navWeb: 'Sites', navHire: 'Fale comigo',
        menu: 'Abrir menu',
        available: 'Disponível para novos projetos',
        heroTitle: 'Transformo trabalho manual em <em>sistemas que rodam sozinhos.</em>',
        heroText: 'Automação de processos com Python, n8n, RPA e IA. Robôs que integram ERP, e-mail, planilhas e APIs para sua equipe focar no que gera valor.',
        heroBots: 'Ver automações', heroProjects: 'Ver sites',
        statusDone: 'Processo finalizado',
        statusLine1: 'Horas economizadas: <b>100.000+</b>',
        statusLine2: 'Execuções: <b>2M+</b>',
        codeFn: 'executar_automacao', codeVar: 'horas_economizadas', codeValue: "'100.000+'",
        statHours: 'horas economizadas', statExec: 'execuções automatizadas', statAuto: 'automações entregues', statSectors: 'setores impactados',
        storyEyebrow: 'Do manual ao automático',
        s1t: 'Tudo começa no manual', s1p: 'Planilhas soltas, copia e cola entre sistemas, horas repetindo a mesma tarefa. É aí que moram o erro e o custo.',
        s2t: 'Mapeio o processo', s2p: 'Cada etapa vira uma regra clara: de onde vem o dado, quem aprova e para onde ele vai.',
        s3t: 'O robô assume', s3p: 'Python, n8n e RPA conectam ERP, e-mail, SFTP e APIs. O fluxo roda sozinho, 24 horas por dia.',
        s4t: 'O resultado aparece', s4p: 'Mais de 100 mil horas devolvidas às equipes. Tempo que volta para o que realmente importa.',
        storyBig: '100.000+', storyBigLabel: 'horas economizadas',
        featTitle: 'Projetos em destaque', featText: 'Arraste para o lado ou use as setas.',
        highlight: 'Destaque', gain: 'Ganho', prevSlide: 'Projeto anterior', nextSlide: 'Próximo projeto', goSlide: 'Ir para o projeto',
        rpaTitle: 'Catálogo de automações', rpaText: 'Robôs e sistemas em produção. Filtre por área.',
        all: 'Todos', empty: 'Nenhum projeto nesta área.', prevPage: 'Página anterior', nextPage: 'Próxima página', page: 'Página',
        brands: 'Marcas impactadas pelas automações',
        webTitle: 'Sites e sistemas web', webText: 'Demonstrações por nicho. Clique para abrir o site completo.',
        openDemo: 'Abrir demonstração', close: 'Fechar', desktop: 'Desktop', mobile: 'Celular', loading: 'Montando o site...',
        ctaTitle: 'Tem um processo que toma tempo demais?', ctaText: 'Me conte como ele funciona hoje. Eu mostro quanto dá para automatizar e quanto tempo sua equipe ganha.',
        ctaWhats: 'Conversar no WhatsApp',
        waText: 'Olá Julio! Vi seu portfólio e gostaria de um orçamento.',
        langTitle: 'Escolha o idioma', langSub: 'Choose your language · Elige tu idioma',
        navTry: 'Teste um robô',
        tryTitle: 'Rode uma automação agora', tryText: 'Cole CEPs ou CNPJs, um por linha. O robô consulta tudo sozinho e devolve uma tabela pronta para baixar. É o mesmo tipo de trabalho que eu automatizo nas empresas.',
        tryInput: 'Lista de CEPs ou CNPJs', trySample: 'Usar exemplos', tryClear: 'Limpar', tryRun: 'Executar robô', tryRunning: 'Executando...',
        tryCsv: 'Baixar CSV', tryPriv: 'Roda no seu navegador e consulta a API pública BrasilAPI. Nada é salvo. Máximo de 30 itens por execução.',
        tryEmpty: 'Cole ao menos um CEP (8 dígitos) ou CNPJ (14 dígitos).', tryMax: 'Limite de 30 itens: o restante foi ignorado.',
        tryLogTitle: 'robo_consulta.log', tryIdle: 'Aguardando execução...',
        tryLogStart: 'iniciando robô', tryLogRead: 'itens lidos', tryLogQuery: 'consultando', tryLogOk: 'ok', tryLogEnd: 'finalizado',
        colInput: 'Entrada', colType: 'Tipo', colResult: 'Resultado', colCity: 'Cidade/UF', colStatus: 'Status',
        stItems: 'itens', stOk: 'com sucesso', stErr: 'com erro', stBot: 'tempo do robô', stManual: 'à mão (~40 s/item)',
        sOk: 'OK', sNotFound: 'Não encontrado', sInvalid: 'Formato inválido', sNet: 'Falha de rede', sLimit: 'Limite da API, tente de novo',
        titleRpa: 'Automações e RPA | Julio Marques', titleWeb: 'Sites e sistemas web | Julio Marques', titleTry: 'Teste um robô | Julio Marques',
        goTitle: 'Veja na prática', goText: 'Três formas de conhecer o trabalho, cada uma em sua página.', goOpen: 'Abrir', nextUp: 'Continue vendo',
        goTryT: 'Teste um robô', goTryP: 'Cole CEPs ou CNPJs e veja uma automação rodando ao vivo no seu navegador.',
        goRpaT: 'Automações e RPA', goRpaP: 'Robôs e sistemas em produção, com o ganho de cada um e as marcas impactadas.',
        goWebT: 'Sites e sistemas web', goWebP: 'Demonstrações navegáveis por segmento, em desktop e celular.',
        rights: 'Todos os direitos reservados.'
    },
    en: {
        pageTitle: 'Julio Marques | Automation, RPA & AI',
        metaDesc: 'Automations with Python, n8n, RPA and AI that have saved over 100,000 hours of work.',
        skip: 'Skip to content',
        navStory: 'How it works', navRpa: 'Automations', navWeb: 'Websites', navHire: 'Contact me',
        menu: 'Open menu',
        available: 'Available for new projects',
        heroTitle: 'I turn manual work into <em>systems that run on their own.</em>',
        heroText: 'Process automation with Python, n8n, RPA and AI. Bots that connect your ERP, email, spreadsheets and APIs so your team can focus on what creates value.',
        heroBots: 'See automations', heroProjects: 'See websites',
        statusDone: 'Process completed',
        statusLine1: 'Hours saved: <b>100,000+</b>',
        statusLine2: 'Executions: <b>2M+</b>',
        codeFn: 'run_automation', codeVar: 'hours_saved', codeValue: "'100,000+'",
        statHours: 'hours saved', statExec: 'automated executions', statAuto: 'automations delivered', statSectors: 'departments impacted',
        storyEyebrow: 'From manual to automatic',
        s1t: 'It all starts manual', s1p: 'Scattered spreadsheets, copy and paste between systems, hours repeating the same task. That is where errors and costs live.',
        s2t: 'I map the process', s2p: 'Every step becomes a clear rule: where the data comes from, who approves it and where it goes.',
        s3t: 'The bot takes over', s3p: 'Python, n8n and RPA connect ERP, email, SFTP and APIs. The flow runs on its own, 24 hours a day.',
        s4t: 'The results show', s4p: 'Over 100,000 hours given back to teams. Time that goes back to what really matters.',
        storyBig: '100,000+', storyBigLabel: 'hours saved',
        featTitle: 'Featured projects', featText: 'Swipe sideways or use the arrows.',
        highlight: 'Featured', gain: 'Impact', prevSlide: 'Previous project', nextSlide: 'Next project', goSlide: 'Go to project',
        rpaTitle: 'Automation catalog', rpaText: 'Bots and systems running in production. Filter by area.',
        all: 'All', empty: 'No projects in this area.', prevPage: 'Previous page', nextPage: 'Next page', page: 'Page',
        brands: 'Brands impacted by the automations',
        webTitle: 'Websites and web systems', webText: 'Demos by niche. Click to open the full website.',
        openDemo: 'Open demo', close: 'Close', desktop: 'Desktop', mobile: 'Mobile', loading: 'Building the site...',
        ctaTitle: 'Got a process that takes too much time?', ctaText: 'Tell me how it works today. I will show you how much can be automated and how much time your team gets back.',
        ctaWhats: 'Chat on WhatsApp',
        waText: 'Hi Julio! I saw your portfolio and would like a quote.',
        langTitle: 'Choose your language', langSub: 'Escolha o idioma · Elige tu idioma',
        navTry: 'Try a bot',
        tryTitle: 'Run an automation now', tryText: 'Paste Brazilian ZIP codes (CEP) or company IDs (CNPJ), one per line. The bot looks everything up by itself and hands back a table ready to download. It is the same kind of work I automate for companies.',
        tryInput: 'List of CEPs or CNPJs', trySample: 'Use examples', tryClear: 'Clear', tryRun: 'Run bot', tryRunning: 'Running...',
        tryCsv: 'Download CSV', tryPriv: 'Runs in your browser and queries the public BrasilAPI. Nothing is saved. Up to 30 items per run.',
        tryEmpty: 'Paste at least one CEP (8 digits) or CNPJ (14 digits).', tryMax: '30-item limit: the rest was ignored.',
        tryLogTitle: 'lookup_bot.log', tryIdle: 'Waiting for a run...',
        tryLogStart: 'starting bot', tryLogRead: 'items read', tryLogQuery: 'querying', tryLogOk: 'ok', tryLogEnd: 'finished',
        colInput: 'Input', colType: 'Type', colResult: 'Result', colCity: 'City/State', colStatus: 'Status',
        stItems: 'items', stOk: 'succeeded', stErr: 'failed', stBot: 'bot time', stManual: 'by hand (~40 s/item)',
        sOk: 'OK', sNotFound: 'Not found', sInvalid: 'Invalid format', sNet: 'Network error', sLimit: 'API limit, try again',
        titleRpa: 'Automation & RPA | Julio Marques', titleWeb: 'Websites and web systems | Julio Marques', titleTry: 'Try a bot | Julio Marques',
        goTitle: 'See it in action', goText: 'Three ways to get to know the work, each on its own page.', goOpen: 'Open', nextUp: 'Keep exploring',
        goTryT: 'Try a bot', goTryP: 'Paste ZIP codes or company IDs and watch an automation run live in your browser.',
        goRpaT: 'Automation & RPA', goRpaP: 'Bots and systems in production, with the gain of each one and the brands they impacted.',
        goWebT: 'Websites and web systems', goWebP: 'Browsable demos by industry, on desktop and mobile.',
        rights: 'All rights reserved.'
    },
    es: {
        pageTitle: 'Julio Marques | Automatización, RPA e IA',
        metaDesc: 'Automatizaciones con Python, n8n, RPA e IA que ya ahorraron más de 100 mil horas de trabajo.',
        skip: 'Saltar al contenido',
        navStory: 'Cómo funciona', navRpa: 'Automatizaciones', navWeb: 'Sitios', navHire: 'Contáctame',
        menu: 'Abrir menú',
        available: 'Disponible para nuevos proyectos',
        heroTitle: 'Transformo trabajo manual en <em>sistemas que funcionan solos.</em>',
        heroText: 'Automatización de procesos con Python, n8n, RPA e IA. Robots que integran ERP, correo, planillas y APIs para que tu equipo se enfoque en lo que genera valor.',
        heroBots: 'Ver automatizaciones', heroProjects: 'Ver sitios',
        statusDone: 'Proceso finalizado',
        statusLine1: 'Horas ahorradas: <b>100.000+</b>',
        statusLine2: 'Ejecuciones: <b>2M+</b>',
        codeFn: 'ejecutar_automatizacion', codeVar: 'horas_ahorradas', codeValue: "'100.000+'",
        statHours: 'horas ahorradas', statExec: 'ejecuciones automatizadas', statAuto: 'automatizaciones entregadas', statSectors: 'áreas impactadas',
        storyEyebrow: 'De lo manual a lo automático',
        s1t: 'Todo empieza en lo manual', s1p: 'Planillas sueltas, copiar y pegar entre sistemas, horas repitiendo la misma tarea. Ahí viven el error y el costo.',
        s2t: 'Mapeo el proceso', s2p: 'Cada etapa se convierte en una regla clara: de dónde viene el dato, quién aprueba y a dónde va.',
        s3t: 'El robot toma el control', s3p: 'Python, n8n y RPA conectan ERP, correo, SFTP y APIs. El flujo funciona solo, 24 horas al día.',
        s4t: 'Llegan los resultados', s4p: 'Más de 100 mil horas devueltas a los equipos. Tiempo que vuelve a lo que realmente importa.',
        storyBig: '100.000+', storyBigLabel: 'horas ahorradas',
        featTitle: 'Proyectos destacados', featText: 'Desliza hacia el lado o usa las flechas.',
        highlight: 'Destacado', gain: 'Impacto', prevSlide: 'Proyecto anterior', nextSlide: 'Proyecto siguiente', goSlide: 'Ir al proyecto',
        rpaTitle: 'Catálogo de automatizaciones', rpaText: 'Robots y sistemas en producción. Filtra por área.',
        all: 'Todos', empty: 'No hay proyectos en esta área.', prevPage: 'Página anterior', nextPage: 'Página siguiente', page: 'Página',
        brands: 'Marcas impactadas por las automatizaciones',
        webTitle: 'Sitios y sistemas web', webText: 'Demos por nicho. Haz clic para abrir el sitio completo.',
        openDemo: 'Abrir demo', close: 'Cerrar', desktop: 'Escritorio', mobile: 'Celular', loading: 'Armando el sitio...',
        ctaTitle: '¿Tienes un proceso que toma demasiado tiempo?', ctaText: 'Cuéntame cómo funciona hoy. Te muestro cuánto se puede automatizar y cuánto tiempo gana tu equipo.',
        ctaWhats: 'Hablar por WhatsApp',
        waText: '¡Hola Julio! Vi tu portafolio y me gustaría un presupuesto.',
        langTitle: 'Elige tu idioma', langSub: 'Escolha o idioma · Choose your language',
        navTry: 'Prueba un robot',
        tryTitle: 'Ejecuta una automatización ahora', tryText: 'Pega CEP o CNPJ brasileños, uno por línea. El robot consulta todo solo y devuelve una tabla lista para descargar. Es el mismo tipo de trabajo que automatizo en las empresas.',
        tryInput: 'Lista de CEP o CNPJ', trySample: 'Usar ejemplos', tryClear: 'Limpiar', tryRun: 'Ejecutar robot', tryRunning: 'Ejecutando...',
        tryCsv: 'Descargar CSV', tryPriv: 'Se ejecuta en tu navegador y consulta la API pública BrasilAPI. No se guarda nada. Máximo 30 elementos por ejecución.',
        tryEmpty: 'Pega al menos un CEP (8 dígitos) o CNPJ (14 dígitos).', tryMax: 'Límite de 30 elementos: el resto se ignoró.',
        tryLogTitle: 'robot_consulta.log', tryIdle: 'Esperando ejecución...',
        tryLogStart: 'iniciando robot', tryLogRead: 'elementos leídos', tryLogQuery: 'consultando', tryLogOk: 'ok', tryLogEnd: 'finalizado',
        colInput: 'Entrada', colType: 'Tipo', colResult: 'Resultado', colCity: 'Ciudad/Estado', colStatus: 'Estado',
        stItems: 'elementos', stOk: 'con éxito', stErr: 'con error', stBot: 'tiempo del robot', stManual: 'a mano (~40 s/elem.)',
        sOk: 'OK', sNotFound: 'No encontrado', sInvalid: 'Formato inválido', sNet: 'Error de red', sLimit: 'Límite de la API, reintenta',
        titleRpa: 'Automatización y RPA | Julio Marques', titleWeb: 'Sitios y sistemas web | Julio Marques', titleTry: 'Prueba un robot | Julio Marques',
        goTitle: 'Míralo en la práctica', goText: 'Tres formas de conocer el trabajo, cada una en su página.', goOpen: 'Abrir', nextUp: 'Sigue explorando',
        goTryT: 'Prueba un robot', goTryP: 'Pega CEP o CNPJ y mira una automatización ejecutándose en vivo en tu navegador.',
        goRpaT: 'Automatización y RPA', goRpaP: 'Robots y sistemas en producción, con la ganancia de cada uno y las marcas impactadas.',
        goWebT: 'Sitios y sistemas web', goWebP: 'Demostraciones navegables por segmento, en escritorio y celular.',
        rights: 'Todos los derechos reservados.'
    }
};

const AREA_TR = {
    en: {
        'Operacional': 'Operations', 'Operação': 'Operations', 'Recebimento Fiscal': 'Tax Receiving',
        'Auditoria de Frete': 'Freight Audit', 'Contabilidade': 'Accounting', 'TI / RPA': 'IT / RPA',
        'Inteligência Artificial': 'Artificial Intelligence', 'Financeiro': 'Finance', 'Atendimento': 'Customer Service',
        'Controladoria': 'Controllership', 'Qualidade': 'Quality', 'Cadastros': 'Master Data', 'Compras': 'Purchasing',
        'Geral': 'General', 'Faturamento': 'Billing', 'Gestão de Bases': 'Branch Management', 'Projetos': 'Projects',
        'Transportes': 'Transportation'
    },
    es: {
        'Operacional': 'Operaciones', 'Operação': 'Operaciones', 'Recebimento Fiscal': 'Recepción Fiscal',
        'Auditoria de Frete': 'Auditoría de Fletes', 'Contabilidade': 'Contabilidad', 'TI / RPA': 'TI / RPA',
        'Inteligência Artificial': 'Inteligencia Artificial', 'Financeiro': 'Finanzas', 'Atendimento': 'Atención al Cliente',
        'Controladoria': 'Contraloría', 'Qualidade': 'Calidad', 'Cadastros': 'Registros', 'Compras': 'Compras',
        'Geral': 'General', 'Faturamento': 'Facturación', 'Gestão de Bases': 'Gestión de Bases', 'Projetos': 'Proyectos',
        'Transportes': 'Transporte'
    }
};

const TYPE_TR = {
    en: { 'Plataforma Web': 'Web Platform', 'Plataforma IA': 'AI Platform', 'Ferramenta Web': 'Web Tool', 'Painel BI': 'BI Dashboard' },
    es: { 'Plataforma Web': 'Plataforma Web', 'Plataforma IA': 'Plataforma IA', 'Ferramenta Web': 'Herramienta Web', 'Painel BI': 'Panel BI' }
};

const GAIN_TR = {
    en: {
        'Gestão': 'Management', 'Governança': 'Governance', 'Produtividade': 'Productivity', 'Decisão': 'Decision-making',
        'Sem erros': 'Zero errors', 'Sem retrabalho': 'No rework', 'Agilidade': 'Speed', 'Automático': 'Automated',
        'Integração': 'Integration', 'Centralização': 'Centralization', 'Tempo': 'Time saved', 'Rastreio': 'Tracking',
        'Demanda TI': 'IT request', 'Esforço': 'Less effort'
    },
    es: {
        'Gestão': 'Gestión', 'Governança': 'Gobernanza', 'Produtividade': 'Productividad', 'Decisão': 'Decisión',
        'Sem erros': 'Cero errores', 'Sem retrabalho': 'Sin retrabajo', 'Agilidade': 'Agilidad', 'Automático': 'Automático',
        'Integração': 'Integración', 'Centralização': 'Centralización', 'Tempo': 'Ahorro de tiempo', 'Rastreio': 'Trazabilidad',
        'Demanda TI': 'Demanda TI', 'Esforço': 'Menos esfuerzo'
    }
};

// [título, descrição] por título original em PT
const RPA_TR = {
    en: {
        'Sistema de Inventário': ['Inventory System', 'Mobile-first web system for physical stock counts. Enables real-time audits, barcode scanning and removes paper from the operation.'],
        'RPA NF Agrupada Senior': ['Grouped Invoice RPA (Senior ERP)', 'High-performance bot that processes and posts hundreds of grouped invoices in minutes. Eliminates days of manual work with 100% tax accuracy.'],
        'RPA CIOT Automático': ['Automated CIOT RPA', 'Critical automation that posts freight CIOT codes into Senior ERP. Prevents late-filing fines and frees the logistics team for strategic work.'],
        'RPA Ordem de Compra': ['Purchase Order RPA', 'Smart system that posts purchase orders automatically, matching order data against invoices to block improper payments.'],
        'Validação Livro Fiscal': ['Tax Ledger Validation', 'Digital audit that validates XML files against the internal system, removing manual document checks and reducing compliance risk.'],
        'Hub de Automações': ['Automation Hub', 'Central platform for real-time monitoring of every company bot, with governance, execution logs and failure alerts.'],
        'Orquestrador de Projetos com IA': ['AI Project Orchestrator', 'Multi-agent platform that plans, breaks down and tracks projects end to end: builds schedules, assigns tasks and flags risks automatically.'],
        'Assistente de Voz Corporativo': ['Corporate Voice Assistant', 'Assistant with speech recognition, LLM intent routing and voice-driven commands in internal systems.'],
        'Chatbot WhatsApp com IA': ['AI WhatsApp Chatbot', '24/7 automated support with generative AI, conversation memory and internal system integration.'],
        'Leitor Inteligente de Documentos': ['Smart Document Reader', 'AI that extracts data from PDF invoices, contracts and proposals and posts it straight into the ERP, no typing.'],
        'Agente IA de Ocorrências': ['AI Incident Agent', 'Agent that classifies logistics incidents, suggests actions and replies to customers automatically based on learned rules.'],
        'Análise Preditiva de Preços': ['Predictive Price Analysis', 'Machine learning model that analyzes quote history and forecasts price changes to optimize purchasing.'],
        'Cadastro Tabelas Redespacho': ['Redispatch Rate Tables Setup', 'Automatic replication of complex freight rate tables into the ESL system.'],
        'Sistema Cadastro Transportadoras': ['Carrier Registration System', 'Intuitive web portal for fast, error-free driver registration in the WMS.'],
        'RPA WMS (Anexo Digital)': ['WMS RPA (Digital Attachment)', 'Bot that automatically attaches the invoice PDF to its WMS record.'],
        'Relatório CTe (Cruzamento)': ['CTe Report (Cross-check)', 'Automatic audit comparing freight document (CTe) data between Senior and ESL systems.'],
        'Solução Devolução NF': ['Invoice Return Solution', 'Digital workflow that centralizes and speeds up product returns.'],
        'Conversor Bancário OFX': ['OFX Bank Converter', 'Tool that converts bank statements into the OFX standard for ERP import.'],
        'Extrator Relatório Webclient': ['Webclient Report Extractor', 'Automatic data collection from multiple reports to consolidate the customer service view.'],
        'Monitoramento E-mails EDI': ['EDI Email Monitoring', '24/7 monitoring of EDI incident emails with automatic downloads.'],
        'Integração SFTP Loggi': ['Loggi SFTP Integration', 'Automated bridge between Loggi files and internal servers via SFTP.'],
        'Amarrador de Transportador': ['Carrier Linker', 'Automatic correction of carrier links on outbound invoices.'],
        'Formulário Reembolso Teams': ['Teams Reimbursement Form', 'Expense approval flow integrated with Microsoft Teams.'],
        'Dashboard Rentabilidade': ['Profitability Dashboard', 'Interactive dashboard for in-depth profit margin analysis by customer.'],
        'Comparação NF (Contábil)': ['Invoice Comparison (Accounting)', 'Scanning script that ensures consistency across accounting reports.'],
        'Scripts Qualyteam': ['Qualyteam Scripts', 'Automatic feeding of quality KPIs by downloading data from the web.'],
        'Cadastro Usuários em Massa': ['Bulk User Registration', 'Fast creation of multiple system users from Excel.'],
        'Relacionamento Pessoas': ['People Linking', 'Automation that links entities and people in bulk in the ERP.'],
        'Relacionamento Classes': ['Class Linking', 'Bulk automatic product classification from a spreadsheet.'],
        'Cadastro Classes Produto': ['Product Class Setup', 'Creation of new product hierarchies without manual typing.'],
        'Solicitação de Compras': ['Purchase Requests', 'Central portal for requesting new materials.'],
        'Consulta de CNPJ em Lote': ['Bulk Company ID Lookup', 'Tool that enriches company records with data from the Brazilian Federal Revenue.'],
        'Consulta de CEP em Lote': ['Bulk ZIP Code Lookup', 'Bulk address validation and completion for logistics.'],
        'Fechamento Faturamento': ['Billing Closing', 'Complex month-end calculations executed in seconds.'],
        'Divisor de Planilhas': ['Spreadsheet Splitter', 'Utility that splits large reports into files by company ID or branch.'],
        'Gestão de Envio de NFs': ['Invoice Delivery Tracking', 'Dashboard to track whether invoices were sent to customers.'],
        'Robô de Precificação': ['Pricing Bot', 'Automatic sales price updates based on business rules.'],
        'Kit Ferramentas Úteis': ['Handy Tools Kit', 'Set of web utilities (calculators, converters) for daily work.'],
        'Emissor Carta Correção': ['Correction Letter Issuer', 'Bot that issues invoice correction letters in bulk via the ERP API.'],
        'RPA Pedágio CIOT': ['CIOT Toll RPA', 'User simulation to post toll vouchers in legacy systems.'],
        'Hub Fechamento LG': ['LG Closing Hub', 'Control panel supporting the monthly accounting close.'],
        'Conferência de EDI': ['EDI Check', 'Silent validation of electronic data interchange (EDI) files.'],
        'Relatórios Unilever SFTP': ['Unilever SFTP Reports', 'Automated delivery of stock reports to partners via SFTP.'],
        'Notificação Feriados': ['Holiday Notifications', 'Automatic alerts to branches about local and national holidays.'],
        'Inventário de Gestão': ['Management Inventory', 'Mobile-first web system for physical stock counts.'],
        'RPA Retroativos': ['Retroactive Data RPA', 'On-demand bot for processing historical data when needed.'],
        'Cadastro Mesorregiões': ['Mesoregion Setup', 'Automatic geographic configuration for freight calculations.'],
        'Cadastro Faixas CEP': ['ZIP Range Setup', 'Bulk import of ZIP code ranges for delivery pricing.'],
        'Robô Precificação V2': ['Pricing Bot V2', 'Second generation of the pricing bot, with more complex rules.'],
        'Cadastro Mot. Agregado': ['Contract Driver Setup', 'Replication of third-party driver records across multiple systems.'],
        'Robô Atualização Frete': ['Freight Update Bot', 'Bulk correction of freight types on issued invoices.'],
        'Cadastro Mult. Produtos': ['Multi-Product Setup', 'Fast insertion of new products through the ERP web interface.'],
        'Emissão Minutas em Massa': ['Bulk Waybill Issuing', 'Automatic generation of transport documents (waybills).'],
        'RPA Pagamentos CIOT': ['CIOT Payments RPA', 'Execution of freight payments on banking platforms.'],
        'Lançamento Títulos': ['Payables Posting', 'Visual automation (OCR) to post accounts payable in finance.'],
        'Criação de Minutas ESL': ['ESL Waybill Creation', 'Generation of transport documents in the ESL system.'],
        'Criador de Kanban': ['Kanban Builder', 'Automatic generation of task boards for visual management.']
    },
    es: {
        'Sistema de Inventário': ['Sistema de Inventario', 'Sistema web mobile-first para conteo físico de stock. Permite auditorías en tiempo real, lectura de códigos de barras y elimina el papel de la operación.'],
        'RPA NF Agrupada Senior': ['RPA Facturas Agrupadas (ERP Senior)', 'Robot de alto rendimiento que procesa y registra cientos de facturas agrupadas en minutos. Elimina días de trabajo manual con 100% de precisión fiscal.'],
        'RPA CIOT Automático': ['RPA CIOT Automático', 'Automatización crítica que registra los códigos CIOT de flete en el ERP Senior. Evita multas por retraso y libera al equipo logístico para tareas estratégicas.'],
        'RPA Ordem de Compra': ['RPA Orden de Compra', 'Sistema inteligente que registra órdenes de compra automáticamente, cruzando el pedido con la factura para impedir pagos indebidos.'],
        'Validação Livro Fiscal': ['Validación de Libro Fiscal', 'Auditoría digital que valida XMLs contra el sistema interno, eliminando la revisión manual de documentos y reduciendo riesgos de compliance.'],
        'Hub de Automações': ['Hub de Automatizaciones', 'Plataforma central para monitorear en tiempo real todos los robots de la empresa, con gobernanza, logs de ejecución y alertas de falla.'],
        'Orquestrador de Projetos com IA': ['Orquestador de Proyectos con IA', 'Plataforma multiagente que planifica, desglosa y sigue proyectos de punta a punta: genera cronogramas, asigna tareas y anticipa riesgos automáticamente.'],
        'Assistente de Voz Corporativo': ['Asistente de Voz Corporativo', 'Asistente con reconocimiento de voz, enrutamiento de intenciones vía LLM y ejecución de comandos en sistemas internos por voz.'],
        'Chatbot WhatsApp com IA': ['Chatbot de WhatsApp con IA', 'Atención automatizada 24/7 con IA generativa, memoria de conversación e integración con sistemas internos.'],
        'Leitor Inteligente de Documentos': ['Lector Inteligente de Documentos', 'IA que extrae datos de facturas, contratos y propuestas en PDF y los registra directo en el ERP, sin digitar.'],
        'Agente IA de Ocorrências': ['Agente IA de Incidencias', 'Agente que clasifica incidencias logísticas, sugiere acciones y responde a clientes automáticamente según reglas aprendidas.'],
        'Análise Preditiva de Preços': ['Análisis Predictivo de Precios', 'Modelo de machine learning que analiza el historial de cotizaciones y predice variaciones de precio para optimizar compras.'],
        'Cadastro Tabelas Redespacho': ['Registro de Tablas de Redespacho', 'Replicación automática de tablas de flete complejas en el sistema ESL.'],
        'Sistema Cadastro Transportadoras': ['Sistema de Registro de Transportistas', 'Portal web intuitivo para registrar conductores en el WMS de forma rápida y sin errores.'],
        'RPA WMS (Anexo Digital)': ['RPA WMS (Adjunto Digital)', 'Robot que adjunta automáticamente el PDF de la factura a su registro en el WMS.'],
        'Relatório CTe (Cruzamento)': ['Informe CTe (Cruce)', 'Auditoría automática que compara datos de documentos de transporte (CTe) entre los sistemas Senior y ESL.'],
        'Solução Devolução NF': ['Solución de Devolución de Facturas', 'Flujo digital que centraliza y agiliza la devolución de mercancías.'],
        'Conversor Bancário OFX': ['Conversor Bancario OFX', 'Herramienta que convierte extractos bancarios al estándar OFX importable en el ERP.'],
        'Extrator Relatório Webclient': ['Extractor de Informes Webclient', 'Recolección automática de datos de varios informes para consolidar la visión de atención al cliente.'],
        'Monitoramento E-mails EDI': ['Monitoreo de Correos EDI', 'Vigilancia 24/7 de correos de incidencias EDI con descarga automática.'],
        'Integração SFTP Loggi': ['Integración SFTP Loggi', 'Puente automatizado entre archivos de Loggi y servidores internos vía SFTP.'],
        'Amarrador de Transportador': ['Vinculador de Transportistas', 'Corrección automática de vínculos de transportistas en facturas de salida.'],
        'Formulário Reembolso Teams': ['Formulario de Reembolso en Teams', 'Flujo de aprobación de gastos integrado con Microsoft Teams.'],
        'Dashboard Rentabilidade': ['Dashboard de Rentabilidad', 'Panel interactivo para analizar en profundidad el margen de ganancia por cliente.'],
        'Comparação NF (Contábil)': ['Comparación de Facturas (Contable)', 'Script de barrido que garantiza consistencia entre informes contables.'],
        'Scripts Qualyteam': ['Scripts Qualyteam', 'Carga automática de indicadores de calidad descargando datos de la web.'],
        'Cadastro Usuários em Massa': ['Registro Masivo de Usuarios', 'Creación rápida de múltiples usuarios en el sistema desde Excel.'],
        'Relacionamento Pessoas': ['Vinculación de Personas', 'Automatización para vincular entidades y personas en lote en el ERP.'],
        'Relacionamento Classes': ['Vinculación de Clases', 'Clasificación automática de productos en masa desde una planilla.'],
        'Cadastro Classes Produto': ['Registro de Clases de Producto', 'Creación de nuevas jerarquías de productos sin digitación manual.'],
        'Solicitação de Compras': ['Solicitud de Compras', 'Portal central para solicitar nuevos materiales.'],
        'Consulta de CNPJ em Lote': ['Consulta Masiva de CNPJ', 'Herramienta que enriquece datos de empresas con información de la Receita Federal de Brasil.'],
        'Consulta de CEP em Lote': ['Consulta Masiva de Código Postal', 'Validación y completado de direcciones en masa para logística.'],
        'Fechamento Faturamento': ['Cierre de Facturación', 'Cálculos complejos de cierre mensual ejecutados en segundos.'],
        'Divisor de Planilhas': ['Divisor de Planillas', 'Utilidad que separa grandes informes en archivos por empresa o sucursal.'],
        'Gestão de Envio de NFs': ['Gestión de Envío de Facturas', 'Panel para rastrear si las facturas fueron enviadas a los clientes.'],
        'Robô de Precificação': ['Robot de Precios', 'Actualización automática de precios de venta según reglas de negocio.'],
        'Kit Ferramentas Úteis': ['Kit de Herramientas Útiles', 'Conjunto de utilidades web (calculadoras, conversores) para el día a día.'],
        'Emissor Carta Correção': ['Emisor de Cartas de Corrección', 'Robot que emite cartas de corrección de facturas en lote vía API del ERP.'],
        'RPA Pedágio CIOT': ['RPA Peaje CIOT', 'Simulación de usuario para registrar vales de peaje en sistemas legados.'],
        'Hub Fechamento LG': ['Hub de Cierre LG', 'Panel de control para apoyar el cierre contable mensual.'],
        'Conferência de EDI': ['Verificación de EDI', 'Validación silenciosa de archivos de intercambio electrónico de datos (EDI).'],
        'Relatórios Unilever SFTP': ['Informes Unilever SFTP', 'Envío automatizado de informes de stock a socios vía SFTP.'],
        'Notificação Feriados': ['Notificación de Feriados', 'Alerta automática a sucursales sobre feriados locales y nacionales.'],
        'Inventário de Gestão': ['Inventario de Gestión', 'Sistema web mobile-first para conteo físico de stock.'],
        'RPA Retroativos': ['RPA Retroactivos', 'Robot bajo demanda para procesar datos históricos cuando sea necesario.'],
        'Cadastro Mesorregiões': ['Registro de Mesorregiones', 'Configuración geográfica automática para cálculos de flete.'],
        'Cadastro Faixas CEP': ['Registro de Rangos de Código Postal', 'Importación masiva de rangos de código postal para tarificar entregas.'],
        'Robô Precificação V2': ['Robot de Precios V2', 'Segunda generación del robot de precios, con reglas más complejas.'],
        'Cadastro Mot. Agregado': ['Registro de Conductores Agregados', 'Replicación del registro de conductores terceros en múltiples sistemas.'],
        'Robô Atualização Frete': ['Robot de Actualización de Flete', 'Corrección masiva de tipos de flete en facturas emitidas.'],
        'Cadastro Mult. Produtos': ['Registro Múltiple de Productos', 'Inserción rápida de nuevos productos vía la interfaz web del ERP.'],
        'Emissão Minutas em Massa': ['Emisión Masiva de Guías', 'Generación automática de documentos de transporte (guías).'],
        'RPA Pagamentos CIOT': ['RPA Pagos CIOT', 'Ejecución de pagos de flete en plataformas bancarias.'],
        'Lançamento Títulos': ['Registro de Cuentas por Pagar', 'Automatización visual (OCR) para registrar cuentas por pagar en finanzas.'],
        'Criação de Minutas ESL': ['Creación de Guías ESL', 'Generación de documentos de transporte en el sistema ESL.'],
        'Criador de Kanban': ['Creador de Kanban', 'Generación automática de tableros de tareas para gestión visual.']
    }
};

const WEB_CAT_TR = {
    en: { 'Todos': 'All', 'Advocacia': 'Law Firms', 'Contabilidade': 'Accounting', 'Restaurante': 'Restaurants', 'Saúde': 'Healthcare', 'Imobiliária': 'Real Estate', 'E-commerce': 'E-commerce', 'Geral': 'General' },
    es: { 'Todos': 'Todos', 'Advocacia': 'Abogacía', 'Contabilidade': 'Contabilidad', 'Restaurante': 'Restaurantes', 'Saúde': 'Salud', 'Imobiliária': 'Inmobiliaria', 'E-commerce': 'E-commerce', 'Geral': 'General' }
};

const WEB_DESC_TR = {
    en: {
        'Silva & Souza Advogados': 'Sober corporate website with a legal blog and client area.',
        'Direito Trabalhista Express': 'High-conversion landing page focused on lead generation.',
        'Contábil Prime': 'Complete digital accounting office with an integrated client portal.',
        'Gestão Fiscal Pro': 'Admin dashboard for financial and tax analysis.',
        'Bistrô Sabor & Arte': 'Interactive digital menu with photos and a booking system.',
        'Clínica Bem Estar': 'Appointment scheduling system with electronic medical records.',
        'Imóveis Luxo SP': 'High-end real estate showcase with a 360º virtual tour.',
        'Tech Gadgets Store': 'Modern online store with cart and seamless checkout.',
        'Moda Sustentável': 'Minimalist e-commerce focused on storytelling and products.',
        'Portfólio Fotógrafo': 'Immersive image gallery for creative professionals.'
    },
    es: {
        'Silva & Souza Advogados': 'Sitio institucional sobrio con blog jurídico y área de clientes.',
        'Direito Trabalhista Express': 'Landing page de alta conversión enfocada en captar leads.',
        'Contábil Prime': 'Estudio contable digital completo con portal de clientes integrado.',
        'Gestão Fiscal Pro': 'Dashboard administrativo para análisis financiero y fiscal.',
        'Bistrô Sabor & Arte': 'Menú digital interactivo con fotos y sistema de reservas.',
        'Clínica Bem Estar': 'Sistema de agendamiento de citas e historia clínica electrónica.',
        'Imóveis Luxo SP': 'Vitrina inmobiliaria de alto nivel con tour virtual 360º.',
        'Tech Gadgets Store': 'Tienda online moderna con carrito y checkout transparente.',
        'Moda Sustentável': 'E-commerce minimalista enfocado en storytelling y productos.',
        'Portfólio Fotógrafo': 'Galería de imágenes inmersiva para profesionales creativos.'
    }
};

/* Estado do idioma */

function detectLang() {
    const param = new URLSearchParams(location.search).get('lang');
    if (LANGS.includes(param)) return param;
    try {
        const saved = localStorage.getItem('lang');
        if (LANGS.includes(saved)) return saved;
    } catch (e) {}
    return null;
}

const chosenLang = detectLang();
const LANG = chosenLang || 'pt';

function tr(key) {
    return (UI[LANG] && UI[LANG][key]) || UI.pt[key] || key;
}

function setLang(lang) {
    try { localStorage.setItem('lang', lang); } catch (e) {}
    const url = new URL(location.href);
    url.searchParams.set('lang', lang);
    location.href = url.toString();
}

/* Tradução dos dados */

function localizeGain(gain) {
    if (LANG === 'pt') return gain;
    if (GAIN_TR[LANG][gain]) return GAIN_TR[LANG][gain];
    let g = gain.replace('/ano', LANG === 'en' ? '/year' : '/año').replace('/semana', LANG === 'en' ? '/week' : '/semana');
    if (LANG === 'en') g = g.replace(/R\$ (\d+)\.(\d{3})/, 'R$ $1,$2');
    return g;
}

function localizeRpa(p) {
    if (LANG === 'pt') return { ...p, rawType: p.type };
    const tr = RPA_TR[LANG][p.title] || [p.title, p.desc];
    return {
        ...p,
        rawType: p.type,
        title: tr[0],
        desc: tr[1],
        area: AREA_TR[LANG][p.area] || p.area,
        type: TYPE_TR[LANG][p.type] || p.type,
        gain: localizeGain(p.gain)
    };
}

function localizeWeb(p) {
    const base = { ...p, rawCategory: p.category };
    if (LANG === 'pt') return { ...base, catLabel: p.category };
    return { ...base, catLabel: WEB_CAT_TR[LANG][p.category] || p.category, desc: WEB_DESC_TR[LANG][p.title] || p.desc };
}

function webCatLabel(cat) {
    return LANG === 'pt' ? cat : (WEB_CAT_TR[LANG][cat] || cat);
}
