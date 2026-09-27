/* Dados dos projetos. Textos base em PT; traduções ficam em i18n.js */

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
