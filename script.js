/* =========================================
   DADOS DOS PROJETOS (RPA & WEB)
   ========================================= */

const rpaProjects = [
    // Destaques para o Carrossel (Top 5)
    { title: "Sistema de Inventário", desc: "Sistema web mobile-first para contagem física de estoque. Permite auditoria em tempo real, leitura de códigos de barras e elimina o uso de papel na operação.", area: "Operacional", type: "Plataforma Web", gain: "Gestão", highlight: true },
    { title: "RPA NF Agrupada Senior", desc: "Robô de alta performance que processa e lança centenas de Notas Fiscais agrupadas em minutos. Elimina dias de trabalho manual e garante 100% de precisão fiscal.", area: "Recebimento Fiscal", type: "RPA", gain: "R$ 240.000/ano", highlight: true },
    { title: "RPA CIOT Automático", desc: "Automação crítica que gerencia o lançamento de CIOTs no ERP Senior. Evita multas pesadas por atraso e libera a equipe logística para tarefas estratégicas.", area: "Auditoria de Frete", type: "RPA", gain: "R$ 180.000/ano", highlight: true },
    { title: "RPA Ordem de Compra", desc: "Sistema inteligente que lança Ordens de Compra automaticamente. Cruza dados do pedido com a nota fiscal, impedindo pagamentos indevidos.", area: "Recebimento Fiscal", type: "RPA", gain: "R$ 150.000/ano", highlight: true },
    { title: "Validação Livro Fiscal", desc: "Auditoria digital que valida XMLs contra o sistema interno, eliminando a necessidade de conferência física de documentos e reduzindo riscos de compliance.", area: "Contabilidade", type: "RPA", gain: "R$ 96.000/ano", highlight: true },
    { title: "Hub de Automações", desc: "Plataforma centralizada para monitoramento em tempo real de todos os robôs da empresa. Garante governança, logs de execução e alertas de falha.", area: "TI / RPA", type: "Plataforma Web", gain: "Governança", highlight: true },
    { title: "Orquestrador de Projetos com IA", desc: "Plataforma multi-agente que planeja, decompõe e acompanha projetos de ponta a ponta: gera cronogramas, distribui tarefas e antecipa riscos automaticamente.", area: "Inteligência Artificial", type: "Plataforma IA", gain: "R$ 200.000/ano", highlight: true },
    { title: "Assistente de Voz Corporativo", desc: "Assistente com reconhecimento de fala, roteamento de intenções via LLM e execução de comandos em sistemas internos por voz.", area: "Inteligência Artificial", type: "Plataforma IA", gain: "Produtividade", highlight: true },

    // Outros Projetos
    { title: "Chatbot WhatsApp com IA", desc: "Atendimento automatizado 24/7 com IA generativa, memória de conversa e integração com sistemas internos.", area: "Inteligência Artificial", type: "Plataforma IA", gain: "R$ 120.000/ano" },
    { title: "Leitor Inteligente de Documentos", desc: "IA que extrai e lança dados de notas fiscais, contratos e propostas em PDF direto no ERP, sem digitação.", area: "Inteligência Artificial", type: "Plataforma IA", gain: "R$ 90.000/ano" },
    { title: "Agente IA de Ocorrências", desc: "Agente que classifica ocorrências logísticas, sugere tratativas e responde clientes automaticamente com base em regras aprendidas.", area: "Inteligência Artificial", type: "Plataforma IA", gain: "R$ 110.000/ano" },
    { title: "Análise Preditiva de Preços", desc: "Modelo de machine learning que analisa histórico de cotações e prevê variações de preço para otimizar compras.", area: "Inteligência Artificial", type: "Plataforma IA", gain: "Decisão" },
    { title: "Cadastro Tabelas Redespacho", desc: "Replicação automática de tabelas de frete complexas no sistema ESL.", area: "Auditoria de Frete", type: "RPA", gain: "25h/semana" },
    { title: "Sistema Cadastro Transportadoras", desc: "Portal web intuitivo para cadastro rápido e sem erros de motoristas no WMS.", area: "Operação", type: "Ferramenta Web", gain: "Sem erros" },
    { title: "RPA WMS (Anexo Digital)", desc: "Robô que anexa automaticamente o PDF da Nota Fiscal ao registro no WMS.", area: "Recebimento Fiscal", type: "RPA", gain: "R$ 72.000/ano" },
    { title: "Relatório CTe (Cruzamento)", desc: "Auditoria automática comparando dados de CTe entre sistemas Senior e ESL.", area: "Recebimento Fiscal", type: "RPA", gain: "6h/semana" },
    { title: "Solução Devolução NF", desc: "Workflow digital que centraliza e agiliza o processo de devolução de mercadorias.", area: "Recebimento Fiscal", type: "Ferramenta Web", gain: "Sem retrabalho" },
    { title: "Conversor Bancário OFX", desc: "Ferramenta que converte extratos diversos para padrão OFX importável no ERP.", area: "Financeiro", type: "RPA", gain: "R$ 48.000/ano" },
    { title: "Extrator Relatório Webclient", desc: "Coleta automática de dados de múltiplos relatórios para consolidar visão do SAC.", area: "Atendimento", type: "RPA", gain: "Agilidade" },
    { title: "Monitoramento E-mails EDI", desc: "Vigilância 24/7 de e-mails de ocorrências EDI com download automático.", area: "TI / RPA", type: "RPA", gain: "Automático" },
    { title: "Integração SFTP Loggi", desc: "Ponte automatizada entre arquivos da Loggi e servidores internos via SFTP.", area: "TI / RPA", type: "RPA", gain: "Integração" },
    { title: "Amarrador de Transportador", desc: "Correção automática de vínculos de transportadoras em NFs de saída.", area: "Operação", type: "RPA", gain: "Sem erros" },
    { title: "Formulário Reembolso Teams", desc: "Fluxo de aprovação de despesas integrado ao Microsoft Teams.", area: "Controladoria", type: "RPA", gain: "Produtividade" },
    { title: "Dashboard Rentabilidade", desc: "Painel interativo para análise profunda de margem de lucro por cliente.", area: "Controladoria", type: "Painel BI", gain: "Decisão" },
    { title: "Comparação NF (Contábil)", desc: "Script de varredura que garante consistência entre relatórios contábeis.", area: "Contabilidade", type: "RPA", gain: "5h/semana" },
    { title: "Scripts Qualyteam", desc: "Alimentação automática de indicadores de qualidade baixando dados da web.", area: "Qualidade", type: "RPA", gain: "8h/semana" },
    { title: "Cadastro Usuários em Massa", desc: "Criação rápida de múltiplos usuários no sistema a partir de Excel.", area: "Cadastros", type: "RPA", gain: "Agilidade" },
    { title: "Relacionamento Pessoas", desc: "Automação para vincular entidades e pessoas em lote no ERP.", area: "Cadastros", type: "RPA", gain: "Agilidade" },
    { title: "Relacionamento Classes", desc: "Classificação automática de produtos em massa via planilha.", area: "Cadastros", type: "RPA", gain: "Agilidade" },
    { title: "Cadastro Classes Produto", desc: "Criação de novas hierarquias de produtos sem digitação manual.", area: "Cadastros", type: "RPA", gain: "Agilidade" },
    { title: "Solicitação de Compras", desc: "Portal centralizado para requisição de novos materiais.", area: "Compras", type: "RPA", gain: "Centralização" },
    { title: "Consulta de CNPJ em Lote", desc: "Ferramenta para enriquecimento de dados cadastrais via Receita Federal.", area: "Geral", type: "Ferramenta Web", gain: "Agilidade" },
    { title: "Consulta de CEP em Lote", desc: "Validação e completude de endereços em massa para logística.", area: "Geral", type: "Ferramenta Web", gain: "Agilidade" },
    { title: "Fechamento Faturamento", desc: "Cálculos complexos de fechamento mensal executados em segundos.", area: "Faturamento", type: "RPA", gain: "Tempo" },
    { title: "Divisor de Planilhas", desc: "Utilitário que separa grandes relatórios em arquivos por CNPJ/Filial.", area: "Faturamento", type: "RPA", gain: "Tempo" },
    { title: "Gestão de Envio de NFs", desc: "Painel para rastrear se notas fiscais foram enviadas aos clientes.", area: "Recebimento Fiscal", type: "Ferramenta Web", gain: "Rastreio" },
    { title: "Robô de Precificação", desc: "Atualização automática de preços de venda baseada em regras de negócio.", area: "Faturamento", type: "RPA", gain: "Tempo" },
    { title: "Kit Ferramentas Úteis", desc: "Conjunto de utilitários web (Calculadoras, Conversores) para o dia a dia.", area: "Geral", type: "Ferramenta Web", gain: "Produtividade" },
    { title: "Emissor Carta Correção", desc: "Robô que emite cartas de correção em lote via API do ERP.", area: "Recebimento Fiscal", type: "RPA", gain: "Automático" },
    { title: "RPA Pedágio CIOT", desc: "Simulação de usuário para lançamento de vale-pedágio em sistemas legados.", area: "Auditoria de Frete", type: "RPA", gain: "Automático" },
    { title: "Hub Fechamento LG", desc: "Painel de controle para auxiliar no fechamento contábil mensal.", area: "Faturamento", type: "Ferramenta Web", gain: "Automático" },
    { title: "Conferência de EDI", desc: "Validação silenciosa de arquivos de intercâmbio de dados (EDI).", area: "TI / RPA", type: "RPA", gain: "Demanda TI" },
    { title: "Relatórios Unilever SFTP", desc: "Automação de envio de relatórios de estoque para parceiros via SFTP.", area: "TI / RPA", type: "RPA", gain: "Demanda TI" },
    { title: "Notificação Feriados", desc: "Alerta automático para filiais sobre feriados locais e nacionais.", area: "Gestão de Bases", type: "RPA", gain: "Gestão" },
    { title: "Inventário de Gestão", desc: "Sistema web mobile-first para contagem física de estoque.", area: "Gestão de Bases", type: "Plataforma Web", gain: "Gestão" },
    { title: "RPA Retroativos", desc: "Robô sob demanda para processar dados históricos quando necessário.", area: "Gestão de Bases", type: "RPA", gain: "Gestão" },
    { title: "Cadastro Mesorregiões", desc: "Configuração geográfica automática para cálculos de frete.", area: "Projetos", type: "RPA", gain: "Demanda TI" },
    { title: "Cadastro Faixas CEP", desc: "Importação massiva de faixas de CEP para precificação de entregas.", area: "Projetos", type: "RPA", gain: "Demanda TI" },
    { title: "Robô Precificação V2", desc: "Segunda geração do robô de preços, com regras mais complexas.", area: "Faturamento", type: "RPA", gain: "Tempo" },
    { title: "Cadastro Mot. Agregado", desc: "Replicação de cadastro de motoristas terceiros em múltiplos sistemas.", area: "Recebimento Fiscal", type: "RPA", gain: "Esforço" },
    { title: "Robô Atualização Frete", desc: "Correção em massa de tipos de frete em notas fiscais emitidas.", area: "Transportes", type: "RPA", gain: "Tempo" },
    { title: "Cadastro Mult. Produtos", desc: "Inserção rápida de novos produtos via interface web do ERP.", area: "Geral", type: "RPA", gain: "Tempo" },
    { title: "Emissão Minutas em Massa", desc: "Geração automática de documentos de transporte (Minutas).", area: "M' One", type: "RPA", gain: "Tempo" },
    { title: "RPA Pagamentos CIOT", desc: "Execução de pagamentos de frete em plataformas bancárias.", area: "Auditoria de Frete", type: "RPA", gain: "Tempo" },
    { title: "Lançamento Títulos", desc: "Automação visual (OCR) para lançar contas a pagar no financeiro.", area: "Financeiro", type: "RPA", gain: "Tempo" },
    { title: "Criação de Minutas ESL", desc: "Geração de documentos de transporte no sistema ESL.", area: "M' One", type: "RPA", gain: "Tempo" },
    { title: "Criador de Kanban", desc: "Geração automática de quadros de tarefas para gestão visual.", area: "M' One", type: "RPA", gain: "Tempo" }
];

const webProjects = [
    // Advocacia
    { title: "Silva & Souza Advogados", category: "Advocacia", desc: "Site institucional sóbrio com blog jurídico e área do cliente.", tech: ["Wordpress", "Divi"], url: "#" },
    { title: "Direito Trabalhista Express", category: "Advocacia", desc: "Landing page de alta conversão focada em captação de leads.", tech: ["HTML5", "SASS"], url: "#" },
    // Contabilidade
    { title: "Contábil Prime", category: "Contabilidade", desc: "Escritório digital completo com portal do cliente integrado.", tech: ["Vue.js", "Firebase"], url: "#" },
    { title: "Gestão Fiscal Pro", category: "Contabilidade", desc: "Dashboard administrativo para análise financeira e fiscal.", tech: ["Angular", "API"], url: "#" },
    // Restaurante
    { title: "Bistrô Sabor & Arte", category: "Restaurante", desc: "Cardápio digital interativo com fotos e sistema de reservas.", tech: ["Next.js", "Stripe"], url: "#" },
    // Saúde
    { title: "Clínica Bem Estar", category: "Saúde", desc: "Sistema de agendamento de consultas e prontuário eletrônico.", tech: ["PHP", "MySQL"], url: "#" },
    // Imobiliária
    { title: "Imóveis Luxo SP", category: "Imobiliária", desc: "Vitrine imobiliária de alto padrão com tour virtual 360º.", tech: ["Three.js", "React"], url: "#" },
    // E-commerce
    { title: "Tech Gadgets Store", category: "E-commerce", desc: "Loja virtual moderna com carrinho e checkout transparente.", tech: ["Shopify", "Liquid"], url: "#" },
    { title: "Moda Sustentável", category: "E-commerce", desc: "E-commerce minimalista focado em storytelling e produtos.", tech: ["WooCommerce"], url: "#" },
    // Geral (Extras)
    { title: "Portfólio Fotógrafo", category: "Geral", desc: "Galeria de imagens imersiva para profissionais criativos.", tech: ["React", "Cloudinary"], url: "#" }
];

/* =========================================
   SISTEMA DE RENDERIZAÇÃO DE CARDS
   ========================================= */

function createRpaCard(project) {
    const iconClass = project.type.includes("Web") ? "fa-globe" : "fa-robot";
    const iconColor = project.type.includes("Web") ? "text-secondary" : "text-primary";
    
    return `
        <div class="project-card bg-card p-6 rounded-xl relative overflow-hidden group">
            <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                <i class="fas ${iconClass} fa-4x ${iconColor}"></i>
            </div>
            <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700">
                    <i class="fas ${iconClass} ${iconColor}"></i>
                </div>
                <span class="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-1 rounded">${project.type}</span>
            </div>
            <h3 class="text-xl font-bold mb-2 text-white">${project.title}</h3>
            <p class="text-slate-400 text-sm mb-4 h-10 line-clamp-2">${project.desc}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                <span class="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded-md border border-slate-700">${project.area}</span>
            </div>
            <div class="pt-4 border-t border-slate-700 flex justify-between items-center text-sm">
                <span class="text-slate-500">Ganho:</span>
                <span class="font-bold text-green-400"><i class="fas fa-chart-line mr-1"></i>${project.gain}</span>
            </div>
        </div>
    `;
}

function createWebCard(project) {
    const techs = project.tech.map(t => `<span class="text-[10px] bg-slate-900 text-secondary border border-slate-700 px-2 py-0.5 rounded-full">${t}</span>`).join('');
    
    let icon = "fa-globe";
    if(project.category === "Advocacia") icon = "fa-scale-balanced";
    if(project.category === "Contabilidade") icon = "fa-calculator";
    if(project.category === "Restaurante") icon = "fa-utensils";
    if(project.category === "Saúde") icon = "fa-heart-pulse";
    if(project.category === "Imobiliária") icon = "fa-building";
    if(project.category === "E-commerce") icon = "fa-cart-shopping";
    if(project.category === "Geral") icon = "fa-layer-group";

    return `
        <div class="web-card bg-card p-5 rounded-xl border border-slate-700 hover:border-secondary/50 transition duration-300 flex flex-col h-full">
            <div class="flex justify-between items-start mb-3">
                <div class="p-2 bg-slate-800 rounded-lg text-secondary">
                    <i class="fas ${icon}"></i>
                </div>
                <span class="text-[10px] uppercase tracking-wider text-slate-500 font-bold">${project.category}</span>
            </div>
            <h3 class="text-lg font-bold text-white mb-1">${project.title}</h3>
            <p class="text-slate-400 text-xs mb-4 flex-grow">${project.desc}</p>
            <div class="flex flex-wrap gap-1 mb-4">
                ${techs}
            </div>
            <a href="#" class="block w-full text-center py-2 rounded bg-slate-800 hover:bg-secondary text-white text-sm transition-colors border border-slate-700 hover:border-secondary">
                Ver Projeto
            </a>
        </div>
    `;
}

// --- LÓGICA DE PAGINAÇÃO E CARROSSEL ---

let currentRpaPage = 1;
const itemsPerPage = 9; // Mostra 9 itens por página para não poluir
let currentFilter = "Todos";

// Renderização RPA com Paginação
function renderRpa(filter = "Todos", page = 1) {
    currentFilter = filter;
    currentRpaPage = page;
    
    const container = document.getElementById('automacoes-container');
    const filtered = filter === "Todos" ? rpaProjects : rpaProjects.filter(p => p.area === filter);
    
    // Lógica de Paginação
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = filtered.slice(start, end);

    // Renderiza Cards
    container.innerHTML = paginatedItems.length ? paginatedItems.map(createRpaCard).join('') : `<div class="col-span-full text-center text-slate-500 py-10">Nenhum projeto encontrado nesta categoria.</div>`;

    // Renderiza Controles de Paginação
    renderPaginationControls(totalPages, page);
}

function renderPaginationControls(totalPages, currentPage) {
    const container = document.getElementById('rpa-pagination');
    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }

    let buttons = '';
    
    // Botão Anterior
    buttons += `<button onclick="renderRpa('${currentFilter}', ${currentPage - 1})" ${currentPage === 1 ? 'disabled class="opacity-50 cursor-not-allowed px-3 py-1 text-slate-500"' : 'class="px-3 py-1 text-primary hover:bg-slate-800 rounded transition"'}><i class="fas fa-chevron-left"></i></button>`;

    // Números
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            const activeClass = i === currentPage ? 'bg-primary text-white border-primary' : 'text-slate-400 border-slate-700 hover:text-white hover:border-slate-500';
            buttons += `<button onclick="renderRpa('${currentFilter}', ${i})" class="w-8 h-8 rounded-full border text-xs font-bold transition ${activeClass}">${i}</button>`;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            buttons += `<span class="text-slate-600">...</span>`;
        }
    }

    // Botão Próximo
    buttons += `<button onclick="renderRpa('${currentFilter}', ${currentPage + 1})" ${currentPage === totalPages ? 'disabled class="opacity-50 cursor-not-allowed px-3 py-1 text-slate-500"' : 'class="px-3 py-1 text-primary hover:bg-slate-800 rounded transition"'}><i class="fas fa-chevron-right"></i></button>`;

    container.innerHTML = buttons;
}

function initRpaFilters() {
    const container = document.getElementById('rpa-filters');
    const areas = ['Todos', ...new Set(rpaProjects.map(p => p.area))];
    container.innerHTML = areas.map(area => `
        <button class="filter-btn px-4 py-2 rounded-full text-sm font-medium border border-slate-700 text-slate-400 hover:text-white bg-slate-800 transition-all ${area === 'Todos' ? 'active bg-primary text-white' : ''}" 
        onclick="handleRpaFilter('${area}', this); renderRpa('${area}', 1)">${area}</button>
    `).join('');
}

// --- LÓGICA DO CARROSSEL ---
function initCarousel() {
    const track = document.getElementById('carousel-track');
    const indicatorsContainer = document.getElementById('carousel-indicators');
    const highlights = rpaProjects.filter(p => p.highlight); // Pega apenas os destaques
    
    if (!track || highlights.length === 0) return;

    // Criar Slides
    track.innerHTML = highlights.map((project) => `
        <div class="min-w-full h-full p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
            <div class="md:w-2/3 space-y-4">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">
                    <i class="fas fa-star"></i> Destaque
                </div>
                <h2 class="text-3xl md:text-4xl font-bold text-white">${project.title}</h2>
                <p class="text-slate-300 text-lg leading-relaxed">${project.desc}</p>
                <div class="flex gap-4 pt-2">
                    <div class="flex items-center gap-2 text-green-400 font-bold bg-green-400/10 px-4 py-2 rounded-lg border border-green-400/20">
                        <i class="fas fa-chart-line"></i> Ganho: ${project.gain}
                    </div>
                    <div class="flex items-center gap-2 text-slate-400 bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
                        <i class="fas fa-robot"></i> ${project.area}
                    </div>
                </div>
            </div>
            <div class="md:w-1/3 flex justify-center">
                <div class="w-32 h-32 md:w-48 md:h-48 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/30 shadow-[0_0_50px_rgba(14,165,233,0.2)] animate-pulse-slow">
                    <i class="fas fa-robot text-6xl md:text-7xl text-primary"></i>
                </div>
            </div>
        </div>
    `).join('');

    // Lógica de Navegação
    let currentIndex = 0;
    const updateSlide = () => {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    document.getElementById('next-slide').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % highlights.length;
        updateSlide();
    });

    document.getElementById('prev-slide').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + highlights.length) % highlights.length;
        updateSlide();
    });

    // Auto Play
    setInterval(() => {
        currentIndex = (currentIndex + 1) % highlights.length;
        updateSlide();
    }, 6000);
}

window.handleRpaFilter = (area, btn) => {
    document.querySelectorAll('#rpa-filters .filter-btn').forEach(b => {
        b.classList.remove('active', 'bg-primary', 'text-white');
        b.classList.add('text-slate-400');
    });
    btn.classList.add('active', 'bg-primary', 'text-white');
    btn.classList.remove('text-slate-400');
    renderRpa(area);
};

// Renderização e Filtros Web
window.filterWeb = (category, btn) => {
    document.querySelectorAll('#web-categories button').forEach(b => {
        b.classList.remove('bg-secondary', 'text-white', 'shadow-[0_0_15px_rgba(99,102,241,0.4)]');
        b.classList.add('text-slate-400');
    });
    btn.classList.remove('text-slate-400');
    btn.classList.add('bg-secondary', 'text-white', 'shadow-[0_0_15px_rgba(99,102,241,0.4)]');

    const container = document.getElementById('programacao-container');
    const filtered = category === "Todos" ? webProjects : webProjects.filter(p => p.category === category);
    
    container.style.opacity = '0';
    setTimeout(() => {
        container.innerHTML = filtered.map(createWebCard).join('');
        container.style.opacity = '1';
    }, 200);
};

/* =========================================
   GERADOR DE SITES ON-THE-FLY (AVANÇADO)
   ========================================= */

const siteTemplates = {
    // 1. Silva & Souza Advogados (Institucional Premium)
    'Silva & Souza Advogados': (title) => `
        <!DOCTYPE html><html lang="pt-br"><head><script src="https://cdn.tailwindcss.com"><\/script><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@300;400&display=swap" rel="stylesheet"><script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"><\/script></head>
        <body class="bg-[#0a0a0a] text-gray-300 font-['Lato']">
            <nav class="fixed w-full z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-[#D4AF37]/20 p-6 flex justify-between items-center">
                <div class="text-2xl font-['Playfair_Display'] text-[#D4AF37] tracking-widest uppercase font-bold flex items-center gap-2"><i class="fas fa-scale-balanced"></i> ${title}</div>
                <div class="hidden md:flex gap-8 text-sm uppercase tracking-wide">
                    <a href="#sobre" class="hover:text-[#D4AF37] transition">O Escritório</a>
                    <a href="#areas" class="hover:text-[#D4AF37] transition">Atuação</a>
                    <a href="#contato" class="bg-[#D4AF37] text-black px-6 py-2 rounded-sm font-bold hover:bg-yellow-600 transition">Contato</a>
                </div>
            </nav>
            <header class="h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73')] bg-cover bg-center bg-fixed relative">
                <div class="absolute inset-0 bg-black/70"></div>
                <div class="relative z-10 text-center p-4 max-w-4xl">
                    <p class="text-[#D4AF37] tracking-[0.4em] uppercase mb-6 animate-pulse">Tradição & Excelência</p>
                    <h1 class="text-5xl md:text-7xl font-['Playfair_Display'] text-white mb-8 leading-tight">Justiça com <br><span class="italic text-[#D4AF37]">Integridade Absoluta</span></h1>
                    <p class="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">Especialistas em resolução de conflitos complexos e defesa estratégica nos tribunais superiores.</p>
                    <div class="flex gap-4 justify-center">
                        <button class="border border-[#D4AF37] text-[#D4AF37] px-8 py-3 hover:bg-[#D4AF37] hover:text-black transition uppercase tracking-widest">Agendar Consulta</button>
                        <button class="bg-white/10 text-white px-8 py-3 hover:bg-white/20 transition uppercase tracking-widest backdrop-blur-sm">Conhecer Sócios</button>
                    </div>
                </div>
            </header>
            <section id="sobre" class="py-24 bg-[#111] px-6">
                <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div class="w-20 h-1 bg-[#D4AF37] mb-8"></div>
                        <h2 class="text-4xl font-['Playfair_Display'] text-white mb-6">Mais de 20 anos de <br>história vitoriosa.</h2>
                        <p class="text-gray-400 leading-relaxed mb-6">Fundado com o compromisso de oferecer advocacia artesanal e personalizada, nosso escritório se destaca pela técnica apurada e combate incansável na defesa dos direitos de nossos clientes.</p>
                        <ul class="space-y-4 text-gray-400">
                            <li class="flex items-center gap-3"><i class="fas fa-check text-[#D4AF37]"></i> Atuação em todo território nacional</li>
                            <li class="flex items-center gap-3"><i class="fas fa-check text-[#D4AF37]"></i> Corpo jurídico premiado</li>
                            <li class="flex items-center gap-3"><i class="fas fa-check text-[#D4AF37]"></i> Atendimento 24h para urgências</li>
                        </ul>
                    </div>
                    <div class="relative">
                        <div class="absolute -top-4 -left-4 w-full h-full border-2 border-[#D4AF37]/30"></div>
                        <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7" class="relative z-10 w-full shadow-2xl grayscale hover:grayscale-0 transition duration-700">
                    </div>
                </div>
            </section>
            <section id="areas" class="py-24 bg-[#0a0a0a] px-6">
                <div class="max-w-7xl mx-auto text-center mb-16">
                    <h2 class="text-4xl font-['Playfair_Display'] text-white mb-4">Áreas de Atuação</h2>
                    <p class="text-gray-500">Soluções jurídicas integradas para pessoas e empresas.</p>
                </div>
                <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                    <div class="p-10 border border-white/5 bg-[#111] hover:border-[#D4AF37] transition group">
                        <i class="fas fa-gavel text-4xl text-[#D4AF37] mb-6 group-hover:scale-110 transition"></i>
                        <h3 class="text-2xl text-white font-['Playfair_Display'] mb-4">Direito Civil</h3>
                        <p class="text-gray-500 text-sm leading-relaxed">Contratos, responsabilidade civil, família e sucessões com total sigilo.</p>
                    </div>
                    <div class="p-10 border border-white/5 bg-[#111] hover:border-[#D4AF37] transition group">
                        <i class="fas fa-briefcase text-4xl text-[#D4AF37] mb-6 group-hover:scale-110 transition"></i>
                        <h3 class="text-2xl text-white font-['Playfair_Display'] mb-4">Empresarial</h3>
                        <p class="text-gray-500 text-sm leading-relaxed">Assessoria para empresas, fusões, aquisições e compliance.</p>
                    </div>
                    <div class="p-10 border border-white/5 bg-[#111] hover:border-[#D4AF37] transition group">
                        <i class="fas fa-landmark text-4xl text-[#D4AF37] mb-6 group-hover:scale-110 transition"></i>
                        <h3 class="text-2xl text-white font-['Playfair_Display'] mb-4">Tributário</h3>
                        <p class="text-gray-500 text-sm leading-relaxed">Planejamento fiscal estratégico e defesa em execuções fiscais.</p>
                    </div>
                </div>
            </section>
            <footer class="bg-black py-12 border-t border-white/10 text-center text-gray-600 text-sm">
                <p>&copy; 2024 ${title}. Todos os direitos reservados.</p>
            </footer>
        </body></html>
    `,

    // 2. Direito Trabalhista Express (Landing Page Alta Conversão)
    'Direito Trabalhista Express': (title) => `
        <!DOCTYPE html><html lang="pt-br"><head><script src="https://cdn.tailwindcss.com"><\/script><script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"><\/script></head>
        <body class="bg-gray-50 font-sans">
            <nav class="bg-red-700 text-white p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
                <div class="font-bold text-xl uppercase flex items-center gap-2"><i class="fas fa-gavel"></i> ${title}</div>
                <button class="bg-white text-red-700 px-4 py-2 rounded font-bold text-sm hover:bg-gray-100 transition">Falar com Advogado</button>
            </nav>
            <header class="bg-gray-900 text-white py-20 px-6 text-center relative overflow-hidden">
                <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505664194779-8beaceb93744')] bg-cover bg-center opacity-20"></div>
                <div class="relative z-10">
                    <h1 class="text-4xl md:text-5xl font-bold mb-6 text-red-500">Seus direitos não podem esperar.</h1>
                    <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Especialistas em reversão de justa causa, horas extras e assédio moral. Análise do seu caso em até 2 horas.</p>
                    <div class="bg-white text-gray-900 p-6 rounded-lg max-w-md mx-auto shadow-2xl border-t-4 border-red-600">
                        <h3 class="font-bold text-lg mb-4 flex items-center justify-center gap-2"><i class="fas fa-calculator text-red-600"></i> Simule sua Rescisão</h3>
                        <input type="text" placeholder="Salário Bruto (R$)" class="w-full border border-gray-300 p-3 rounded mb-3 outline-none focus:border-red-500">
                        <input type="text" placeholder="Tempo de Casa (anos)" class="w-full border border-gray-300 p-3 rounded mb-4 outline-none focus:border-red-500">
                        <button class="w-full bg-green-600 text-white font-bold py-3 rounded hover:bg-green-700 transition shadow-lg uppercase">Calcular Agora</button>
                    </div>
                </div>
            </header>
            <section class="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                <div class="p-8 bg-white shadow-lg rounded-xl hover:-translate-y-1 transition"><i class="fas fa-clock text-4xl text-red-600 mb-4"></i><h3 class="font-bold mb-2 text-lg">Agilidade</h3><p class="text-sm text-gray-600">Processos 100% digitais e acelerados.</p></div>
                <div class="p-8 bg-white shadow-lg rounded-xl hover:-translate-y-1 transition"><i class="fas fa-hand-holding-dollar text-4xl text-red-600 mb-4"></i><h3 class="font-bold mb-2 text-lg">Sem Custo Inicial</h3><p class="text-sm text-gray-600">Pague apenas se ganhar a causa (êxito).</p></div>
                <div class="p-8 bg-white shadow-lg rounded-xl hover:-translate-y-1 transition"><i class="fas fa-comments text-4xl text-red-600 mb-4"></i><h3 class="font-bold mb-2 text-lg">Atendimento WhatsApp</h3><p class="text-sm text-gray-600">Tire dúvidas agora mesmo com especialistas.</p></div>
            </section>
        </body></html>
    `,

    // 3. Contábil Prime (Corporativo Clean)
    'Contábil Prime': (title) => `
        <!DOCTYPE html><html lang="pt-br"><head><script src="https://cdn.tailwindcss.com"><\/script><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.js" rel="stylesheet"><script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"><\/script></head>
        <body class="bg-slate-50 text-slate-800 font-sans overflow-x-hidden">
            <header class="bg-white/90 backdrop-blur shadow-sm fixed w-full z-40 p-4 transition-all">
                <div class="max-w-7xl mx-auto flex justify-between items-center">
                    <div class="font-extrabold text-2xl text-blue-600 flex items-center gap-2"><i class="fa-solid fa-chart-pie"></i> ${title}</div>
                    <nav class="hidden md:flex gap-8 font-medium text-slate-600">
                        <a href="#" class="hover:text-blue-600">Serviços</a>
                        <a href="#" class="hover:text-blue-600">Planos</a>
                        <a href="#" class="hover:text-blue-600">Blog</a>
                    </nav>
                    <button class="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-500/30">Área do Cliente</button>
                </div>
            </header>
            <section class="pt-40 pb-20 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div class="animate-fade-in-up">
                    <span class="text-blue-600 font-bold text-xs bg-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">Contabilidade Digital 4.0</span>
                    <h1 class="text-5xl md:text-6xl font-extrabold text-slate-900 mt-6 mb-6 leading-tight">Sua empresa em dia, <br><span class="text-blue-600">sem burocracia.</span></h1>
                    <p class="text-lg text-slate-500 mb-8 leading-relaxed">Deixe a papelada com a gente e foque no que importa: o crescimento do seu negócio. Abertura de empresa grátis no plano anual.</p>
                    <div class="flex gap-4">
                        <button class="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-blue-600/20 hover:-translate-y-1 transition">Começar Agora</button>
                        <button class="text-slate-600 font-bold px-8 py-4 hover:text-blue-600 flex items-center gap-2"><i class="fas fa-play-circle"></i> Ver Demo</button>
                    </div>
                </div>
                <div class="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 relative">
                    <div class="absolute top-4 right-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"><i class="fas fa-arrow-up"></i> +24%</div>
                    <div class="font-bold text-lg mb-6 text-slate-700">Fluxo de Caixa</div>
                    <div class="flex items-end justify-between h-64 gap-3">
                        <div class="w-full bg-blue-50 rounded-t-lg h-[40%] relative group"><div class="absolute bottom-0 w-full bg-blue-500 h-0 group-hover:h-full transition-all duration-700 rounded-t-lg"></div></div>
                        <div class="w-full bg-blue-50 rounded-t-lg h-[60%] relative group"><div class="absolute bottom-0 w-full bg-blue-500 h-0 group-hover:h-full transition-all duration-700 delay-75 rounded-t-lg"></div></div>
                        <div class="w-full bg-blue-50 rounded-t-lg h-[80%] relative group"><div class="absolute bottom-0 w-full bg-blue-500 h-0 group-hover:h-full transition-all duration-700 delay-150 rounded-t-lg"></div></div>
                        <div class="w-full bg-blue-50 rounded-t-lg h-[50%] relative group"><div class="absolute bottom-0 w-full bg-blue-500 h-0 group-hover:h-full transition-all duration-700 delay-200 rounded-t-lg"></div></div>
                        <div class="w-full bg-blue-50 rounded-t-lg h-[90%] relative group"><div class="absolute bottom-0 w-full bg-blue-500 h-0 group-hover:h-full transition-all duration-700 delay-300 rounded-t-lg"></div></div>
                    </div>
                </div>
            </section>
            <section class="py-20 bg-white">
                <div class="max-w-7xl mx-auto px-4">
                    <div class="text-center mb-16">
                        <h2 class="text-3xl font-bold text-slate-900">Tudo o que sua empresa precisa</h2>
                    </div>
                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="p-8 rounded-2xl bg-slate-50 hover:bg-blue-50 transition cursor-pointer group">
                            <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition"><i class="fas fa-file-invoice"></i></div>
                            <h3 class="font-bold text-xl mb-3">Emissão de Notas</h3>
                            <p class="text-slate-500 text-sm">Emissor gratuito e ilimitado integrado à prefeitura.</p>
                        </div>
                        <div class="p-8 rounded-2xl bg-slate-50 hover:bg-blue-50 transition cursor-pointer group">
                            <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center text-xl mb-6 group-hover:bg-purple-600 group-hover:text-white transition"><i class="fas fa-users"></i></div>
                            <h3 class="font-bold text-xl mb-3">Folha de Pagamento</h3>
                            <p class="text-slate-500 text-sm">Gestão completa de funcionários e pro-labore.</p>
                        </div>
                        <div class="p-8 rounded-2xl bg-slate-50 hover:bg-blue-50 transition cursor-pointer group">
                            <div class="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center text-xl mb-6 group-hover:bg-orange-600 group-hover:text-white transition"><i class="fas fa-headset"></i></div>
                            <h3 class="font-bold text-xl mb-3">Suporte Humanizado</h3>
                            <p class="text-slate-500 text-sm">Contadores reais disponíveis via WhatsApp.</p>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="bg-slate-900 text-slate-400 py-12 text-center">
                <p>&copy; 2024 ${title}. Soluções Contábeis Inteligentes.</p>
            </footer>
        </body></html>
    `,

    // 4. Gestão Fiscal Pro (Dashboard SaaS)
    'Gestão Fiscal Pro': (title) => `
        <!DOCTYPE html><html lang="pt-br"><head><script src="https://cdn.tailwindcss.com"><\/script><script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"><\/script></head>
        <body class="bg-gray-100 font-sans flex h-screen overflow-hidden">
            <aside class="w-64 bg-slate-900 text-slate-300 flex flex-col shadow-xl z-20 hidden md:flex">
                <div class="p-6 text-white font-bold text-xl flex items-center gap-2 border-b border-slate-800"><div class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center"><i class="fas fa-chart-pie"></i></div> ${title.split(' ')[0]}</div>
                <nav class="flex-1 px-4 space-y-2 mt-6">
                    <a href="#" class="flex items-center gap-3 bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg shadow-blue-900/50"><i class="fas fa-home w-5"></i> Dashboard</a>
                    <a href="#" class="flex items-center gap-3 hover:bg-slate-800 hover:text-white px-4 py-3 rounded-lg transition"><i class="fas fa-file-invoice-dollar w-5"></i> Notas Fiscais</a>
                    <a href="#" class="flex items-center gap-3 hover:bg-slate-800 hover:text-white px-4 py-3 rounded-lg transition"><i class="fas fa-users w-5"></i> Clientes</a>
                    <a href="#" class="flex items-center gap-3 hover:bg-slate-800 hover:text-white px-4 py-3 rounded-lg transition"><i class="fas fa-chart-bar w-5"></i> Relatórios</a>
                </nav>
                <div class="p-4 border-t border-slate-800 bg-slate-950"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 border-2 border-slate-700"></div><div class="text-sm"><p class="text-white font-bold">Admin User</p><p class="text-xs text-green-400">● Online</p></div></div></div>
            </aside>
            <main class="flex-1 overflow-y-auto p-8 bg-gray-50">
                <header class="flex justify-between items-center mb-8">
                    <div><h1 class="text-2xl font-bold text-gray-800">Visão Geral</h1><p class="text-gray-500 text-sm">Bem-vindo de volta, aqui está o resumo de hoje.</p></div>
                    <div class="flex gap-4"><button class="bg-white p-2.5 rounded-lg shadow-sm text-gray-600 hover:text-blue-600 border border-gray-200"><i class="fas fa-bell"></i></button><button class="bg-blue-600 text-white px-5 py-2.5 rounded-lg shadow-lg shadow-blue-200 font-bold hover:bg-blue-700 transition flex items-center gap-2"><i class="fas fa-plus"></i> Nova NF</button></div>
                </header>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition relative overflow-hidden"><div class="absolute right-0 top-0 p-4 text-blue-100 text-6xl -mr-4 -mt-4"><i class="fas fa-wallet"></i></div><p class="text-gray-500 text-sm font-bold uppercase tracking-wide">Faturamento</p><h3 class="text-3xl font-bold text-gray-800 mt-2">R$ 124.500</h3><span class="text-green-500 text-xs font-bold bg-green-50 px-2 py-1 rounded-full mt-2 inline-block"><i class="fas fa-arrow-up"></i> 12% vs mês anterior</span></div>
                    <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition relative overflow-hidden"><div class="absolute right-0 top-0 p-4 text-purple-100 text-6xl -mr-4 -mt-4"><i class="fas fa-file-invoice"></i></div><p class="text-gray-500 text-sm font-bold uppercase tracking-wide">Impostos</p><h3 class="text-3xl font-bold text-gray-800 mt-2">R$ 18.240</h3><span class="text-gray-400 text-xs bg-gray-100 px-2 py-1 rounded-full mt-2 inline-block">Vencimento: 20/10</span></div>
                    <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition relative overflow-hidden"><div class="absolute right-0 top-0 p-4 text-orange-100 text-6xl -mr-4 -mt-4"><i class="fas fa-receipt"></i></div><p class="text-gray-500 text-sm font-bold uppercase tracking-wide">Notas Emitidas</p><h3 class="text-3xl font-bold text-gray-800 mt-2">142</h3><span class="text-orange-500 text-xs font-bold bg-orange-50 px-2 py-1 rounded-full mt-2 inline-block">3 pendentes</span></div>
                    <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition relative overflow-hidden"><div class="absolute right-0 top-0 p-4 text-green-100 text-6xl -mr-4 -mt-4"><i class="fas fa-coins"></i></div><p class="text-gray-500 text-sm font-bold uppercase tracking-wide">Lucro Líquido</p><h3 class="text-3xl font-bold text-gray-800 mt-2">R$ 85.100</h3><span class="text-green-500 text-xs font-bold bg-green-50 px-2 py-1 rounded-full mt-2 inline-block">Margem: 68%</span></div>
                </div>
                <div class="grid md:grid-cols-3 gap-8">
                    <div class="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 class="font-bold text-gray-800 mb-6 flex justify-between items-center">Fluxo de Caixa <select class="text-xs border rounded p-1 text-gray-500 font-normal"><option>Últimos 6 meses</option></select></h3>
                        <div class="flex items-end justify-between h-64 gap-4 px-2">
                            <div class="w-full bg-blue-50 rounded-t-lg h-[40%] relative group"><div class="absolute bottom-0 w-full bg-blue-600 h-0 group-hover:h-full transition-all duration-500 rounded-t-lg shadow-[0_0_15px_rgba(37,99,235,0.3)]"></div><div class="text-xs text-center mt-64 text-gray-400">MAI</div></div>
                            <div class="w-full bg-blue-50 rounded-t-lg h-[60%] relative group"><div class="absolute bottom-0 w-full bg-blue-600 h-0 group-hover:h-full transition-all duration-500 rounded-t-lg shadow-[0_0_15px_rgba(37,99,235,0.3)]"></div><div class="text-xs text-center mt-64 text-gray-400">JUN</div></div>
                            <div class="w-full bg-blue-50 rounded-t-lg h-[50%] relative group"><div class="absolute bottom-0 w-full bg-blue-600 h-0 group-hover:h-full transition-all duration-500 rounded-t-lg shadow-[0_0_15px_rgba(37,99,235,0.3)]"></div><div class="text-xs text-center mt-64 text-gray-400">JUL</div></div>
                            <div class="w-full bg-blue-50 rounded-t-lg h-[80%] relative group"><div class="absolute bottom-0 w-full bg-blue-600 h-0 group-hover:h-full transition-all duration-500 rounded-t-lg shadow-[0_0_15px_rgba(37,99,235,0.3)]"></div><div class="text-xs text-center mt-64 text-gray-400">AGO</div></div>
                            <div class="w-full bg-blue-50 rounded-t-lg h-[70%] relative group"><div class="absolute bottom-0 w-full bg-blue-600 h-0 group-hover:h-full transition-all duration-500 rounded-t-lg shadow-[0_0_15px_rgba(37,99,235,0.3)]"></div><div class="text-xs text-center mt-64 text-gray-400">SET</div></div>
                            <div class="w-full bg-blue-50 rounded-t-lg h-[90%] relative group"><div class="absolute bottom-0 w-full bg-blue-600 h-0 group-hover:h-full transition-all duration-500 rounded-t-lg shadow-[0_0_15px_rgba(37,99,235,0.3)]"></div><div class="text-xs text-center mt-64 text-gray-400 font-bold text-blue-600">OUT</div></div>
                        </div>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 class="font-bold text-gray-800 mb-4">Últimas Atividades</h3>
                        <ul class="space-y-4">
                            <li class="flex gap-3 items-start p-3 hover:bg-gray-50 rounded-lg transition cursor-pointer"><div class="bg-green-100 text-green-600 p-2 rounded-full text-xs h-8 w-8 flex items-center justify-center"><i class="fas fa-check"></i></div><div><p class="text-sm font-bold text-gray-800">NF-e 4023 Emitida</p><p class="text-xs text-gray-500">Há 10 min • Cliente X</p></div></li>
                            <li class="flex gap-3 items-start p-3 hover:bg-gray-50 rounded-lg transition cursor-pointer"><div class="bg-red-100 text-red-600 p-2 rounded-full text-xs h-8 w-8 flex items-center justify-center"><i class="fas fa-exclamation"></i></div><div><p class="text-sm font-bold text-gray-800">Erro Integração Bancária</p><p class="text-xs text-gray-500">Há 45 min • Itaú</p></div></li>
                            <li class="flex gap-3 items-start p-3 hover:bg-gray-50 rounded-lg transition cursor-pointer"><div class="bg-blue-100 text-blue-600 p-2 rounded-full text-xs h-8 w-8 flex items-center justify-center"><i class="fas fa-user"></i></div><div><p class="text-sm font-bold text-gray-800">Novo Cliente Cadastrado</p><p class="text-xs text-gray-500">Há 2 horas • Tech Solutions</p></div></li>
                        </ul>
                    </div>
                </div>
            </main>
        </body></html>
    `,

    // 5. Bistrô Sabor & Arte (Gastronomia Imersiva)
    'Bistrô Sabor & Arte': (title) => `
        <!DOCTYPE html><html lang="pt-br"><head><script src="https://cdn.tailwindcss.com"><\/script><link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet"><script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"><\/script></head>
        <body class="bg-stone-950 text-white font-['Open_Sans']">
            <nav class="absolute w-full z-50 p-8 flex justify-between items-center">
                <div class="font-['Oswald'] text-3xl text-amber-500 uppercase tracking-tighter cursor-pointer">${title}</div>
                <div class="flex gap-6 items-center">
                    <a href="#menu" class="hidden md:block font-bold hover:text-amber-500 transition">MENU</a>
                    <a href="#chef" class="hidden md:block font-bold hover:text-amber-500 transition">CHEF</a>
                    <button class="bg-amber-500 text-black px-8 py-2 rounded-full font-bold hover:bg-white transition duration-300">RESERVAR</button>
                </div>
            </nav>
            <header class="h-screen flex flex-col justify-center items-center text-center px-4 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4')] bg-cover bg-center bg-fixed relative">
                <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-stone-950"></div>
                <div class="relative z-10 animate-fade-in-up">
                    <span class="text-amber-500 font-bold tracking-[0.3em] text-sm mb-4 block">EST. 2015</span>
                    <h1 class="font-['Oswald'] text-6xl md:text-9xl mb-6 leading-none">GASTRONOMIA <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-600">PREMIUM</span></h1>
                    <p class="text-xl text-gray-300 mb-10 max-w-lg mx-auto">Uma experiência sensorial onde cada prato conta uma história única de sabor e tradição.</p>
                    <button class="border-2 border-white px-10 py-4 font-bold hover:bg-white hover:text-black transition duration-300 tracking-widest text-sm">VER CARDÁPIO</button>
                </div>
            </header>
            <section id="menu" class="py-24 px-6 max-w-7xl mx-auto">
                <div class="text-center mb-20">
                    <h2 class="font-['Oswald'] text-5xl mb-4 text-amber-500">NOSSO MENU</h2>
                    <div class="w-24 h-1 bg-white mx-auto"></div>
                </div>
                <div class="grid md:grid-cols-2 gap-16">
                    <div class="flex gap-6 items-start group">
                        <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c" class="w-24 h-24 rounded-full object-cover border-2 border-amber-500 group-hover:scale-110 transition duration-500">
                        <div class="flex-1 border-b border-white/10 pb-6">
                            <div class="flex justify-between text-xl font-['Oswald'] mb-2"><h3>Salada Bowl</h3><span class="text-amber-500">R$ 42</span></div>
                            <p class="text-gray-400 text-sm">Mix de folhas orgânicas, quinoa, abacate, romã e molho cítrico especial da casa.</p>
                        </div>
                    </div>
                    <div class="flex gap-6 items-start group">
                        <img src="https://images.unsplash.com/photo-1544025162-d76694265947" class="w-24 h-24 rounded-full object-cover border-2 border-amber-500 group-hover:scale-110 transition duration-500">
                        <div class="flex-1 border-b border-white/10 pb-6">
                            <div class="flex justify-between text-xl font-['Oswald'] mb-2"><h3>Prime Rib</h3><span class="text-amber-500">R$ 120</span></div>
                            <p class="text-gray-400 text-sm">Corte nobre grelhado na parilla, acompanhado de batatas rústicas e farofa de bacon.</p>
                        </div>
                    </div>
                     <div class="flex gap-6 items-start group">
                        <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" class="w-24 h-24 rounded-full object-cover border-2 border-amber-500 group-hover:scale-110 transition duration-500">
                        <div class="flex-1 border-b border-white/10 pb-6">
                            <div class="flex justify-between text-xl font-['Oswald'] mb-2"><h3>Pizza Trufada</h3><span class="text-amber-500">R$ 85</span></div>
                            <p class="text-gray-400 text-sm">Massa de fermentação natural, mozzarella de búfala, azeite trufado e cogumelos.</p>
                        </div>
                    </div>
                     <div class="flex gap-6 items-start group">
                        <img src="https://images.unsplash.com/photo-1551024709-8f23befc6f87" class="w-24 h-24 rounded-full object-cover border-2 border-amber-500 group-hover:scale-110 transition duration-500">
                        <div class="flex-1 border-b border-white/10 pb-6">
                            <div class="flex justify-between text-xl font-['Oswald'] mb-2"><h3>Gin Tônica</h3><span class="text-amber-500">R$ 38</span></div>
                            <p class="text-gray-400 text-sm">Gin importado, tônica artesanal, especiarias e frutas vermelhas.</p>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="bg-black py-16 text-center border-t border-white/10">
                <div class="font-['Oswald'] text-2xl text-amber-500 mb-4">${title}</div>
                <p class="text-gray-500 mb-8">Rua Gastronômica, 123 - São Paulo, SP</p>
                <div class="flex justify-center gap-6 text-xl text-white">
                    <i class="fab fa-instagram hover:text-amber-500 cursor-pointer"></i>
                    <i class="fab fa-facebook hover:text-amber-500 cursor-pointer"></i>
                    <i class="fab fa-whatsapp hover:text-amber-500 cursor-pointer"></i>
                </div>
            </footer>
        </body></html>
    `,

    // 6. Clínica Bem Estar (Saúde Clean)
    'Clínica Bem Estar': (title) => `
        <!DOCTYPE html><html lang="pt-br"><head><script src="https://cdn.tailwindcss.com"><\/script><script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"><\/script></head>
        <body class="bg-white text-gray-700 font-sans">
            <div class="bg-teal-600 text-white py-2 text-center text-sm font-medium tracking-wide">
                <i class="fas fa-phone-alt mr-2"></i> Agende sua consulta: (11) 99999-9999
            </div>
            <nav class="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
                <div class="text-2xl font-bold text-teal-600 flex items-center gap-2">
                    <div class="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white text-xl shadow-lg shadow-teal-200"><i class="fas fa-heartbeat"></i></div>
                    ${title}
                </div>
                <div class="hidden md:flex gap-8 font-medium">
                    <a href="#" class="hover:text-teal-600">Especialidades</a>
                    <a href="#" class="hover:text-teal-600">Corpo Clínico</a>
                    <a href="#" class="hover:text-teal-600">Convênios</a>
                </div>
                <button class="bg-teal-50 text-teal-700 border border-teal-200 px-6 py-2.5 rounded-full font-bold hover:bg-teal-600 hover:text-white transition duration-300">Área do Paciente</button>
            </nav>
            <section class="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <div class="inline-block bg-teal-100 text-teal-800 px-4 py-1 rounded-full text-sm font-bold mb-6">Saúde Integral</div>
                    <h1 class="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">Cuidando de você em <br><span class="text-teal-600">todos os momentos.</span></h1>
                    <p class="text-xl text-gray-500 mb-8 leading-relaxed">Infraestrutura moderna, corpo clínico altamente qualificado e tecnologia de ponta para o diagnóstico preciso e tratamento humanizado.</p>
                    <div class="flex gap-4">
                        <button class="bg-teal-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-teal-600/30 hover:bg-teal-700 transition transform hover:-translate-y-1">Agendar Consulta</button>
                        <button class="border-2 border-gray-200 text-gray-600 px-8 py-4 rounded-xl font-bold hover:border-teal-600 hover:text-teal-600 transition">Conhecer Médicos</button>
                    </div>
                </div>
                <div class="relative">
                    <div class="absolute -z-10 bg-teal-50 rounded-full w-[110%] h-[110%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    <img src="https://images.unsplash.com/photo-1638202993928-7267aad84c31" class="rounded-3xl shadow-2xl w-full object-cover h-[500px]">
                    <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
                        <div class="bg-green-100 p-3 rounded-full text-green-600 text-2xl"><i class="fas fa-user-md"></i></div>
                        <div>
                            <div class="font-bold text-gray-900 text-lg">50+ Médicos</div>
                            <div class="text-sm text-gray-500">Especialistas</div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg-gray-50 py-24">
                <div class="max-w-7xl mx-auto px-4">
                    <div class="text-center mb-16">
                        <h2 class="text-3xl font-bold text-gray-900">Nossas Especialidades</h2>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition transform hover:-translate-y-2 text-center group cursor-pointer border border-transparent hover:border-teal-100">
                            <div class="w-16 h-16 mx-auto bg-red-50 text-red-500 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-red-500 group-hover:text-white transition"><i class="fas fa-heart-pulse"></i></div>
                            <h3 class="font-bold text-xl mb-2 text-gray-800">Cardiologia</h3>
                            <p class="text-sm text-gray-500">Check-up completo e exames avançados.</p>
                        </div>
                        <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition transform hover:-translate-y-2 text-center group cursor-pointer border border-transparent hover:border-teal-100">
                            <div class="w-16 h-16 mx-auto bg-blue-50 text-blue-500 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-500 group-hover:text-white transition"><i class="fas fa-brain"></i></div>
                            <h3 class="font-bold text-xl mb-2 text-gray-800">Neurologia</h3>
                            <p class="text-sm text-gray-500">Tratamento de dores e sistema nervoso.</p>
                        </div>
                        <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition transform hover:-translate-y-2 text-center group cursor-pointer border border-transparent hover:border-teal-100">
                            <div class="w-16 h-16 mx-auto bg-purple-50 text-purple-500 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-purple-500 group-hover:text-white transition"><i class="fas fa-microscope"></i></div>
                            <h3 class="font-bold text-xl mb-2 text-gray-800">Laboratório</h3>
                            <p class="text-sm text-gray-500">Resultados rápidos e precisos.</p>
                        </div>
                         <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition transform hover:-translate-y-2 text-center group cursor-pointer border border-transparent hover:border-teal-100">
                            <div class="w-16 h-16 mx-auto bg-orange-50 text-orange-500 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-orange-500 group-hover:text-white transition"><i class="fas fa-baby"></i></div>
                            <h3 class="font-bold text-xl mb-2 text-gray-800">Pediatria</h3>
                            <p class="text-sm text-gray-500">Cuidado integral para crianças.</p>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="bg-white border-t border-gray-100 py-12 text-center text-gray-500">
                <p>&copy; 2024 ${title}. Responsável Técnico: Dr. Nome CRM/SP 00000.</p>
            </footer>
        </body></html>
    `,

    // 7. Imóveis Luxo SP (Imobiliária High-End)
    'Imóveis Luxo SP': (title) => `
        <!DOCTYPE html><html lang="pt-br"><head><script src="https://cdn.tailwindcss.com"><\/script><script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"><\/script></head>
        <body class="bg-white font-sans overflow-x-hidden">
            <header class="absolute w-full z-20 flex justify-between items-center p-8 text-white">
                <div class="text-3xl font-bold tracking-widest uppercase drop-shadow-md">${title}</div>
                <div class="flex gap-4">
                    <button class="bg-white text-black px-6 py-2.5 rounded font-bold hover:bg-gray-200 transition">Entrar</button>
                    <button class="bg-black text-white px-6 py-2.5 rounded font-bold hover:bg-gray-900 transition border border-white/20">Anunciar</button>
                </div>
            </header>
            <div class="h-[90vh] bg-gray-900 relative flex flex-col justify-center items-center px-4">
                <img src="https://images.unsplash.com/photo-1600596542815-2495db98dada" class="absolute inset-0 w-full h-full object-cover opacity-60">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                
                <div class="relative z-10 text-center max-w-4xl w-full animate-fade-in-up">
                    <h1 class="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">Encontre seu lugar <br>extraordinário.</h1>
                    
                    <div class="bg-white p-3 rounded-lg flex flex-col md:flex-row gap-3 shadow-2xl">
                        <div class="flex-1 relative">
                            <i class="fas fa-map-marker-alt absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                            <input type="text" placeholder="Cidade, Bairro ou Rua" class="w-full pl-10 pr-4 py-3 outline-none text-gray-700 bg-gray-50 rounded">
                        </div>
                        <select class="p-3 bg-gray-50 outline-none text-gray-700 border-l border-white rounded md:w-40 font-bold">
                            <option>Comprar</option>
                            <option>Alugar</option>
                        </select>
                        <button class="bg-black text-white px-8 py-3 rounded font-bold hover:bg-gray-800 transition flex items-center justify-center gap-2"><i class="fas fa-search"></i> Buscar</button>
                    </div>
                </div>
            </div>
            <section class="py-24 max-w-7xl mx-auto px-4">
                <div class="flex justify-between items-end mb-12">
                    <div>
                        <h2 class="text-4xl font-bold text-gray-900 mb-2">Destaques da Semana</h2>
                        <p class="text-gray-500">Imóveis selecionados pelos nossos especialistas.</p>
                    </div>
                    <a href="#" class="font-bold underline text-black hover:text-gray-600">Ver todos</a>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div class="group cursor-pointer">
                        <div class="relative overflow-hidden rounded-2xl mb-4 h-80 shadow-md">
                            <div class="absolute top-4 left-4 bg-white text-black px-3 py-1 text-xs font-bold rounded uppercase shadow-sm z-10">Venda</div>
                            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                            <div class="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition duration-300">
                                <span class="font-bold text-2xl">R$ 2.500.000</span>
                            </div>
                            <button class="absolute top-4 right-4 text-white hover:text-red-500 transition shadow-sm"><i class="far fa-heart text-2xl"></i></button>
                        </div>
                        <h3 class="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition">Mansão Jardins</h3>
                        <p class="text-gray-500 text-sm mb-3">São Paulo, SP • 450m²</p>
                        <div class="flex gap-6 mt-2 text-sm text-gray-600 border-t border-gray-100 pt-3">
                            <span><i class="fas fa-bed"></i> 4 Quartos</span>
                            <span><i class="fas fa-bath"></i> 5 Banheiros</span>
                            <span><i class="fas fa-car"></i> 3 Vagas</span>
                        </div>
                    </div>
                    
                    <div class="group cursor-pointer">
                        <div class="relative overflow-hidden rounded-2xl mb-4 h-80 shadow-md">
                            <div class="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs font-bold rounded uppercase shadow-sm z-10">Aluguel</div>
                            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                            <div class="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition duration-300">
                                <span class="font-bold text-2xl">R$ 15.000/mês</span>
                            </div>
                            <button class="absolute top-4 right-4 text-white hover:text-red-500 transition shadow-sm"><i class="far fa-heart text-2xl"></i></button>
                        </div>
                        <h3 class="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition">Cobertura Duplex</h3>
                        <p class="text-gray-500 text-sm mb-3">Leblon, RJ • 210m²</p>
                        <div class="flex gap-6 mt-2 text-sm text-gray-600 border-t border-gray-100 pt-3">
                            <span><i class="fas fa-bed"></i> 3 Quartos</span>
                            <span><i class="fas fa-bath"></i> 3 Banheiros</span>
                            <span><i class="fas fa-car"></i> 2 Vagas</span>
                        </div>
                    </div>

                    <div class="group cursor-pointer">
                        <div class="relative overflow-hidden rounded-2xl mb-4 h-80 shadow-md">
                            <div class="absolute top-4 left-4 bg-white text-black px-3 py-1 text-xs font-bold rounded uppercase shadow-sm z-10">Venda</div>
                            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                            <div class="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition duration-300">
                                <span class="font-bold text-2xl">R$ 1.800.000</span>
                            </div>
                            <button class="absolute top-4 right-4 text-white hover:text-red-500 transition shadow-sm"><i class="far fa-heart text-2xl"></i></button>
                        </div>
                        <h3 class="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition">Casa Conceito</h3>
                        <p class="text-gray-500 text-sm mb-3">Alphaville, SP • 320m²</p>
                        <div class="flex gap-6 mt-2 text-sm text-gray-600 border-t border-gray-100 pt-3">
                            <span><i class="fas fa-bed"></i> 4 Quartos</span>
                            <span><i class="fas fa-bath"></i> 4 Banheiros</span>
                            <span><i class="fas fa-car"></i> 4 Vagas</span>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="bg-gray-900 text-white py-12 text-center">
                <p>&copy; 2024 ${title}. Onde sonhos moram.</p>
            </footer>
        </body></html>
    `,

    // 8. Tech Gadgets Store (E-commerce Dark Mode)
    'Tech Gadgets Store': (title) => `
        <!DOCTYPE html><html lang="pt-br"><head><script src="https://cdn.tailwindcss.com"><\/script><script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"><\/script></head>
        <body class="bg-neutral-950 text-white font-sans selection:bg-white selection:text-black">
            <nav class="fixed w-full z-50 border-b border-white/10 p-6 flex justify-between items-center bg-neutral-950/80 backdrop-blur">
                <div class="text-2xl font-bold uppercase tracking-tighter">${title}</div>
                <div class="hidden md:flex gap-8 text-xs font-bold tracking-widest">
                    <a href="#" class="hover:underline">NEW ARRIVALS</a>
                    <a href="#" class="hover:underline">COLLECTION</a>
                    <a href="#" class="hover:underline">ACCESSORIES</a>
                </div>
                <div class="flex gap-6 text-sm">
                    <i class="fas fa-search cursor-pointer hover:text-gray-400 transition"></i>
                    <span class="cursor-pointer hover:text-gray-400 transition">CART (0)</span>
                    <span class="cursor-pointer hover:text-gray-400 transition">LOGIN</span>
                </div>
            </nav>
            <div class="grid grid-cols-1 md:grid-cols-2 h-screen pt-20">
                <div class="flex flex-col justify-center p-12 md:p-24 border-r border-white/10 relative">
                    <div class="absolute top-24 left-12 text-xs text-neutral-500 font-mono">FALL / WINTER 2024</div>
                    <h1 class="text-6xl md:text-8xl font-bold mb-8 leading-[0.9] tracking-tighter">FUTURE<br>READY</h1>
                    <p class="text-neutral-400 mb-12 max-w-sm leading-relaxed">Tecnologia de ponta para quem exige o máximo. Gadgets que transformam seu dia a dia.</p>
                    <button class="bg-white text-black w-fit px-10 py-4 font-bold hover:bg-neutral-200 transition text-sm tracking-widest">SHOP COLLECTION</button>
                </div>
                <div class="bg-[url('https://images.unsplash.com/photo-1550009158-9ebf69173e03')] bg-cover bg-center grayscale hover:grayscale-0 transition duration-1000 relative group cursor-pointer">
                    <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
                    <div class="absolute bottom-12 right-12 text-right opacity-0 group-hover:opacity-100 transition duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <p class="font-bold text-xl">VR Headset Pro</p>
                        <p class="text-sm">R$ 1.290,00</p>
                    </div>
                </div>
            </div>
            <section class="py-24 border-t border-white/10">
                <div class="max-w-7xl mx-auto px-6">
                    <div class="flex justify-between items-end mb-12">
                         <h2 class="text-4xl font-bold tracking-tighter">TRENDING NOW</h2>
                         <button class="text-sm underline">VIEW ALL</button>
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div class="group cursor-pointer">
                            <div class="bg-neutral-900 h-96 mb-4 relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500">
                                <button class="absolute bottom-4 right-4 bg-white text-black w-8 h-8 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition"><i class="fas fa-plus"></i></button>
                            </div>
                            <h3 class="font-bold text-sm">Smart Watch</h3>
                            <p class="text-neutral-500 text-xs">R$ 890,00</p>
                        </div>
                        <div class="group cursor-pointer">
                            <div class="bg-neutral-900 h-96 mb-4 relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500">
                                <button class="absolute bottom-4 right-4 bg-white text-black w-8 h-8 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition"><i class="fas fa-plus"></i></button>
                            </div>
                            <h3 class="font-bold text-sm">Headphones Noise-C</h3>
                            <p class="text-neutral-500 text-xs">R$ 1.450,00</p>
                        </div>
                        <div class="group cursor-pointer">
                            <div class="bg-neutral-900 h-96 mb-4 relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500">
                                <button class="absolute bottom-4 right-4 bg-white text-black w-8 h-8 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition"><i class="fas fa-plus"></i></button>
                            </div>
                            <h3 class="font-bold text-sm">Laptop Stand</h3>
                            <p class="text-neutral-500 text-xs">R$ 420,00</p>
                        </div>
                        <div class="group cursor-pointer">
                            <div class="bg-neutral-900 h-96 mb-4 relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1593642632823-8f78536788c6" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500">
                                <button class="absolute bottom-4 right-4 bg-white text-black w-8 h-8 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition"><i class="fas fa-plus"></i></button>
                            </div>
                            <h3 class="font-bold text-sm">Mechanical Keyboard</h3>
                            <p class="text-neutral-500 text-xs">R$ 980,00</p>
                        </div>
                    </div>
                </div>
            </section>
        </body></html>
    `,

    // 9. Moda Sustentável (Fashion Minimalist)
    'Moda Sustentável': (title) => `
        <!DOCTYPE html><html lang="pt-br"><head><script src="https://cdn.tailwindcss.com"><\/script><script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"><\/script></head>
        <body class="bg-[#f5f5f0] text-[#333] font-sans">
            <nav class="p-8 flex justify-between items-center">
                <div class="text-xl font-bold tracking-widest uppercase text-[#5a5a50]">${title}</div>
                <div class="flex gap-6 text-sm font-medium text-[#5a5a50]">
                    <a href="#">Shop</a><a href="#">About</a><a href="#">Journal</a>
                </div>
                <div class="text-xl"><i class="fas fa-shopping-bag"></i></div>
            </nav>
            <div class="px-8 pb-12">
                <div class="grid md:grid-cols-2 gap-4 h-[80vh]">
                    <div class="relative overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd" class="w-full h-full object-cover group-hover:scale-105 transition duration-1000">
                        <div class="absolute bottom-8 left-8">
                            <h2 class="text-4xl font-light mb-2 text-white">Organic Cotton</h2>
                            <button class="text-white border-b border-white pb-1 text-sm uppercase tracking-widest hover:text-gray-200">View Collection</button>
                        </div>
                    </div>
                    <div class="relative overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c" class="w-full h-full object-cover group-hover:scale-105 transition duration-1000">
                        <div class="absolute bottom-8 left-8">
                            <h2 class="text-4xl font-light mb-2 text-white">Linen Essentials</h2>
                            <button class="text-white border-b border-white pb-1 text-sm uppercase tracking-widest hover:text-gray-200">View Collection</button>
                        </div>
                    </div>
                </div>
            </div>
            <section class="py-16 text-center max-w-2xl mx-auto px-4">
                <h3 class="text-2xl font-light mb-4 text-[#5a5a50]">Conscious Fashion</h3>
                <p class="text-gray-500 leading-relaxed">Nossas peças são produzidas eticamente, respeitando o meio ambiente e as pessoas. Moda atemporal para um futuro sustentável.</p>
            </section>
            <footer class="bg-[#e0e0db] py-12 text-center text-sm text-[#5a5a50]">
                <p>&copy; 2024 ${title}. Made with love.</p>
            </footer>
        </body></html>
    `,

    // 10. Portfólio Fotógrafo (Creative Gallery)
    'Portfólio Fotógrafo': (title) => `
        <!DOCTYPE html><html lang="pt-br"><head><script src="https://cdn.tailwindcss.com"><\/script><script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"><\/script></head>
        <body class="bg-[#121212] text-white font-mono">
            <nav class="p-8 flex justify-between items-center fixed w-full z-50 mix-blend-difference">
                <div class="text-xl font-bold tracking-widest">${title}</div>
                <div class="text-sm">MENU ///</div>
            </nav>
            <div class="h-screen flex flex-col justify-center px-8 md:px-24 relative overflow-hidden">
                <div class="absolute -right-20 top-20 w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-20"></div>
                <div class="absolute -left-20 bottom-20 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20"></div>
                
                <p class="text-gray-500 mb-4 animate-pulse">/ CREATIVE DIRECTOR & DEVELOPER</p>
                <h1 class="text-6xl md:text-9xl font-bold mb-8 leading-none mix-blend-overlay">VISUAL<br>IMPACT</h1>
                <p class="max-w-xl text-xl text-gray-400 mb-12">Criando experiências digitais que transcendem o ordinário. Foco em design interativo e performance.</p>
                <div class="flex gap-6">
                    <button class="border border-white px-8 py-3 hover:bg-white hover:text-black transition duration-300">VER TRABALHOS</button>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 border-t border-white/10">
                <div class="p-24 border-r border-white/10 hover:bg-white/5 transition cursor-pointer group">
                    <h3 class="text-4xl font-bold mb-4 group-hover:translate-x-4 transition">01. Branding</h3>
                    <p class="text-gray-500">Identidade visual completa.</p>
                </div>
                <div class="p-24 hover:bg-white/5 transition cursor-pointer group">
                    <h3 class="text-4xl font-bold mb-4 group-hover:translate-x-4 transition">02. Web Design</h3>
                    <p class="text-gray-500">Sites imersivos e responsivos.</p>
                </div>
            </div>
        </body></html>
    `
};

window.openPreview = (category, title) => {
    const modal = document.getElementById('site-preview-modal');
    const frame = document.getElementById('preview-frame');
    const loader = document.getElementById('preview-loader');
    
    if (modal && frame && loader) {
        modal.classList.remove('hidden-modal');
        loader.style.display = 'flex';
        document.getElementById('preview-url').innerText = `https://julio-dev.com/${category.toLowerCase()}/${title.toLowerCase().replace(/ /g, '-')}`;

        // Prioriza template por TÍTULO, depois por CATEGORIA, depois fallback
        const templateFunc = siteTemplates[title] || siteTemplates[category] || siteTemplates['Geral'];
        const htmlContent = templateFunc(title);

        setTimeout(() => {
            frame.srcdoc = htmlContent;
            loader.style.display = 'none';
        }, 800);
    }
};

window.closePreview = () => {
    const modal = document.getElementById('site-preview-modal');
    const frame = document.getElementById('preview-frame');
    
    if (modal) modal.classList.add('hidden-modal');
    // Limpa o iframe para parar vídeos/sons e economizar memória
    if (frame) setTimeout(() => { frame.srcdoc = ""; }, 300);
};

/* =========================================
   TYPEWRITER & THREE.JS LOGIC
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar Filtros e Grids
    initRpaFilters();
    renderRpa();
    initCarousel(); // Inicia o Carrossel
    document.getElementById('programacao-container').innerHTML = webProjects.map(createWebCard).join('');

    // --- LÓGICA DO MENU MOBILE ---
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        // Fechar menu ao clicar em um link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileBtn.querySelector('i').classList.add('fa-bars');
                mobileBtn.querySelector('i').classList.remove('fa-times');
            });
        });
    }

    // Event Listeners para Fechar Modal (ESC e Clique Fora)
    const modal = document.getElementById('site-preview-modal');
    if (modal) {
        // Fechar ao clicar no fundo escuro (fora do conteúdo)
        modal.addEventListener('click', (e) => {
            if (e.target === modal) window.closePreview();
        });

        // Fechar com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden-modal')) {
                window.closePreview();
            }
        });
    }

    // Event Delegation para Preview
    document.getElementById('programacao-container').addEventListener('click', (e) => {
        const btn = e.target.closest('a');
        if (btn && btn.textContent.includes('Ver Projeto')) {
            e.preventDefault();
            const card = btn.closest('.web-card');
            if (card) {
                const title = card.querySelector('h3').textContent;
                const categoryRaw = card.querySelector('.uppercase').textContent;
                const category = categoryRaw.charAt(0).toUpperCase() + categoryRaw.slice(1).toLowerCase();
                window.openPreview(category, title);
            }
        }
    });

    // --- TYPEWRITER ---
    const codeElement = document.getElementById('code-display');
    const statusBox = document.getElementById('status-box');
    const codeLines = [
        { text: "import", color: "text-purple-400" }, { text: " rpa_module ", color: "text-white" },
        { text: "as", color: "text-purple-400" }, { text: " bot", color: "text-white", break: true },
        { text: "async", color: "text-purple-400" }, { text: " def", color: "text-blue-300" },
        { text: " executar_automacao", color: "text-yellow-200" }, { text: "():", color: "text-white", break: true },
        { text: "  const ", color: "text-purple-400", indent: true }, { text: "economia ", color: "text-white" },
        { text: "= ", color: "text-blue-300" }, { text: "'+R$ 1.400.000,00'", color: "text-green-400", break: true },
        { text: "  await ", color: "text-purple-400", indent: true }, { text: "bot.processar_dados()", color: "text-white", break: true },
        { text: "  return ", color: "text-purple-400", indent: true }, { text: "economia", color: "text-white" }
    ];

    let lineIndex = 0;
    let charIndex = 0;
    let currentSpan = null;

    function typeWriter() {
        if (!codeElement) return;
        if (lineIndex < codeLines.length) {
            const lineObj = codeLines[lineIndex];
            if (charIndex === 0) {
                currentSpan = document.createElement('span');
                currentSpan.className = lineObj.color;
                if (lineObj.indent) codeElement.appendChild(document.createTextNode('\u00A0\u00A0'));
                codeElement.appendChild(currentSpan);
            }
            currentSpan.textContent += lineObj.text.charAt(charIndex);
            charIndex++;
            if (charIndex >= lineObj.text.length) {
                if (lineObj.break) codeElement.appendChild(document.createElement('br'));
                lineIndex++; charIndex = 0;
                setTimeout(typeWriter, 50);
            } else {
                setTimeout(typeWriter, 30);
            }
        } else {
            document.querySelector('.typing-cursor')?.classList.remove('typing-cursor');
            statusBox?.classList.remove('hidden');
            setTimeout(() => { statusBox?.classList.remove('opacity-0'); statusBox?.classList.add('opacity-100'); }, 100);
        }
    }
    setTimeout(typeWriter, 1000);

    // --- THREE.JS ---
    const container = document.getElementById('canvas-container');
    if (container) {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);
        camera.position.z = 100;

        const particleCount = 100;
        const particles = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const velocities = [];

        for (let i = 0; i < particleCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 150;
            if (i % 3 === 0) velocities.push({ x: (Math.random() - 0.5) * 0.2, y: (Math.random() - 0.5) * 0.2, z: (Math.random() - 0.5) * 0.2 });
        }
        particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        const particleSystem = new THREE.Points(particles, new THREE.PointsMaterial({ color: 0x0ea5e9, size: 2, transparent: true, opacity: 0.8 }));
        scene.add(particleSystem);

        const linesGeometry = new THREE.BufferGeometry();
        const lines = new THREE.LineSegments(linesGeometry, new THREE.LineBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0.15 }));
        scene.add(lines);

        let mouse = new THREE.Vector2();
        document.addEventListener('mousemove', (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            // Cursor Personalizado
            const cursor = document.getElementById('cursor');
            if(cursor) { cursor.style.left = event.clientX + 'px'; cursor.style.top = event.clientY + 'px'; }
        });

        function animate3D() {
            requestAnimationFrame(animate3D);
            const positions = particleSystem.geometry.attributes.position.array;
            for (let i = 0; i < particleCount; i++) {
                positions[i * 3] += velocities[i].x;
                positions[i * 3 + 1] += velocities[i].y;
                positions[i * 3 + 2] += velocities[i].z;
                if (Math.abs(positions[i * 3]) > 80) velocities[i].x *= -1;
                if (Math.abs(positions[i * 3 + 1]) > 80) velocities[i].y *= -1;
            }
            particleSystem.geometry.attributes.position.needsUpdate = true;

            const linePositions = [];
            for (let i = 0; i < particleCount; i++) {
                for (let j = i + 1; j < particleCount; j++) {
                    const dx = positions[i*3] - positions[j*3];
                    const dy = positions[i*3+1] - positions[j*3+1];
                    const dz = positions[i*3+2] - positions[j*3+2];
                    if (Math.sqrt(dx*dx + dy*dy + dz*dz) < 25) {
                        linePositions.push(positions[i*3], positions[i*3+1], positions[i*3+2], positions[j*3], positions[j*3+1], positions[j*3+2]);
                    }
                }
            }
            lines.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

            const targetRotationX = mouse.y * 0.3;
            const targetRotationY = mouse.x * 0.3;
            particleSystem.rotation.x += (targetRotationX - particleSystem.rotation.x) * 0.05;
            particleSystem.rotation.y += (targetRotationY - particleSystem.rotation.y) * 0.05;
            lines.rotation.x = particleSystem.rotation.x;
            lines.rotation.y = particleSystem.rotation.y;
            
            camera.position.x += (mouse.x * 15 - camera.position.x) * 0.05;
            camera.position.y += (mouse.y * 15 - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        }
        animate3D();

        window.addEventListener('resize', () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        });
    }
});
