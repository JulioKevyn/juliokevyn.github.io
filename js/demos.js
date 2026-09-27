/* ==========================================================
   Sites de demonstração
   Cada demo é um site completo gerado a partir de uma config.
   CSS puro dentro do iframe (sem Tailwind), então abre rápido.
   ========================================================== */

const IMG = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

const ICONS = {
    check: '<path d="M20 6 9 17l-5-5"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
    pin: '<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    star: '<path d="M12 2l3.1 6.3 6.9 1-5 4.8 1.2 6.9-6.2-3.2-6.2 3.2L7 14.1 2 9.3l6.9-1z"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    chart: '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.8 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',
    home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
    key: '<circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6M15.5 7.5l3 3L22 7l-3-3"/>',
    truck: '<rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
    cart: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>',
    camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z"/><path d="M2 21c0-3 1.9-5.4 5.2-6"/>',
    scale: '<path d="M12 3v18M5 21h14M3 7h18"/><path d="m6 7-3 7a3 3 0 0 0 6 0zM18 7l-3 7a3 3 0 0 0 6 0z"/>',
    calc: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h4"/>',
    fork: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>',
    bolt: '<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
    bed: '<path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8M2 16h20M6 10V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"/>',
    bath: '<path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1zM6 12V5a2 2 0 0 1 4 0"/>',
    ruler: '<path d="M21.3 8.7 8.7 21.3a1 1 0 0 1-1.4 0l-4.6-4.6a1 1 0 0 1 0-1.4L15.3 2.7a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1 0 1.4zM7.5 10.5l2 2M10.5 7.5l2 2M13.5 4.5l2 2M4.5 13.5l2 2"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
    bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>'
};
const ic = (name, size = 22) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${name === 'star' ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;

/* ---------- Configuração de cada demo ---------- */
const DEMOS = {
    'Silva & Souza Advogados': {
        theme: { bg: '#0f0e0c', surface: '#191713', text: '#efe9df', muted: '#a79f92', accent: '#c9a45c', accentInk: '#1a1408', line: '#2c2821' },
        fonts: { display: 'Cormorant Garamond', dWeight: '600', body: 'Lato', link: 'Cormorant+Garamond:wght@500;600&family=Lato:wght@400;700' },
        radius: 2,
        nav: [['sobre', 'O escritório'], ['areas', 'Áreas'], ['duvidas', 'Dúvidas'], ['contato', 'Contato']],
        cta: 'Agendar consulta',
        hero: { variant: 'overlay', img: '1589829085413-56de8ae18c73', kicker: 'Advocacia desde 1998', title: 'Defesa técnica, atendimento próximo.', text: 'Assessoria jurídica para empresas e famílias em São Paulo, com resposta em até 24 horas úteis.', cta2: 'Conhecer o escritório' },
        stats: [['26', 'anos de atuação'], ['3.400+', 'casos conduzidos'], ['94%', 'acordos favoráveis'], ['12', 'advogados associados']],
        sections: ['hero', 'stats', 'about', 'services', 'testimonials', 'faq', 'contact'],
        about: { title: 'Um escritório que explica antes de agir', text: 'Cada cliente sabe exatamente o que está acontecendo no seu processo, quanto custa e quais são as chances reais. Sem juridiquês e sem surpresa na fatura.', img: '1505664194779-8beaceb93744', bullets: ['Atendimento com o sócio responsável', 'Relatórios mensais do andamento', 'Honorários definidos no início'] },
        services: { id: 'areas', title: 'Áreas de atuação', text: 'Equipes dedicadas por especialidade.', items: [['scale', 'Direito Empresarial', 'Contratos, societário, fusões e recuperação de crédito.'], ['users', 'Direito de Família', 'Divórcio, inventário, guarda e planejamento sucessório.'], ['shield', 'Direito Trabalhista', 'Defesa de empresas e consultoria preventiva.'], ['file', 'Direito Tributário', 'Revisão fiscal, defesas e recuperação de impostos.']] },
        testimonials: [['Resolveram em quatro meses um inventário que se arrastava há três anos. Sempre sabíamos o próximo passo.', 'Marina C.', 'Cliente de família'], ['A consultoria preventiva reduziu nossas ações trabalhistas a quase zero em dois anos.', 'Ricardo A.', 'Diretor de RH']],
        faq: { id: 'duvidas', title: 'Perguntas frequentes', items: [['A primeira consulta é paga?', 'A primeira conversa de 30 minutos é gratuita e serve para entender o caso e dizer se podemos ajudar.'], ['Vocês atendem fora de São Paulo?', 'Sim. Atuamos em todo o Brasil com processos eletrônicos e parceiros locais para audiências.'], ['Como acompanho meu processo?', 'Você recebe um relatório mensal e tem acesso direto ao advogado responsável pelo WhatsApp.']] },
        contact: { title: 'Agende sua consulta', text: 'Conte brevemente o seu caso. Retornamos em até 24 horas úteis.', address: 'Av. Paulista, 1000, 12º andar, São Paulo', phone: '(11) 3000-0000', email: 'contato@silvasouza.adv.br', hours: 'Seg a sex, 9h às 18h', form: 'contact' }
    },

    'Direito Trabalhista Express': {
        theme: { bg: '#ffffff', surface: '#f3f5f9', text: '#0f172a', muted: '#5b6477', accent: '#1d4ed8', accentInk: '#ffffff', line: '#e3e7ef' },
        fonts: { display: 'Archivo', dWeight: '800', body: 'Inter Tight', link: 'Archivo:wght@700;800&family=Inter+Tight:wght@400;600' },
        radius: 12,
        nav: [['direitos', 'Seus direitos'], ['como', 'Como funciona'], ['contato', 'Análise grátis']],
        cta: 'Análise gratuita',
        hero: { variant: 'split', img: '1556761175-5973dc0f32e7', kicker: 'Foi demitido nos últimos 2 anos?', title: 'Descubra em 24h se você tem valores a receber.', text: 'Horas extras, FGTS, verbas rescisórias e assédio. Análise gratuita e sem compromisso, feita por advogados trabalhistas.', form: true },
        stats: [['R$ 38 mi', 'recuperados para clientes'], ['9.800', 'análises feitas'], ['24h', 'para a primeira resposta']],
        sections: ['hero', 'stats', 'services', 'steps', 'testimonials', 'contact'],
        services: { id: 'direitos', title: 'Você pode ter direito a', text: 'Os casos mais comuns que analisamos toda semana.', items: [['clock', 'Horas extras não pagas', 'Trabalhava além do horário e não recebia corretamente.'], ['file', 'Verbas rescisórias', 'Aviso prévio, férias e 13º calculados errado na demissão.'], ['shield', 'Assédio moral', 'Humilhações, cobranças abusivas ou ameaças no trabalho.'], ['heart', 'Acidente de trabalho', 'Lesões ou doenças causadas pela função.']] },
        steps: { id: 'como', title: 'Como funciona', items: [['Envie seus dados', 'Preencha o formulário em 2 minutos.'], ['Receba a análise', 'Um advogado avalia e retorna em até 24h.'], ['Decida sem pressão', 'Só cobramos se você receber.']] },
        testimonials: [['Recebi horas extras de três anos que eu nem sabia que tinha direito.', 'Paulo S.', 'Motorista'], ['Atendimento rápido e tudo pelo WhatsApp. Recomendo demais.', 'Juliana M.', 'Operadora de caixa']],
        contact: { title: 'Peça sua análise gratuita', text: 'Seus dados são protegidos e usados só para avaliar o seu caso.', phone: '(11) 4000-0000', email: 'analise@trabalhistaexpress.com.br', hours: 'Todos os dias, 8h às 20h', form: 'lead' }
    },

    'Contábil Prime': {
        theme: { bg: '#f7f8f5', surface: '#ffffff', text: '#12211b', muted: '#5a6b62', accent: '#0f7a55', accentInk: '#ffffff', line: '#e2e7e2' },
        fonts: { display: 'Fraunces', dWeight: '600', body: 'DM Sans', link: 'Fraunces:wght@500;600&family=DM+Sans:wght@400;500;700' },
        radius: 14,
        nav: [['servicos', 'Serviços'], ['planos', 'Planos'], ['sobre', 'Sobre'], ['contato', 'Contato']],
        cta: 'Falar com contador',
        hero: { variant: 'split', img: '1593642632823-8f78536788c6', kicker: 'Contabilidade digital para PMEs', title: 'Sua contabilidade em dia, sem papel e sem susto.', text: 'Abertura de empresa, impostos, folha e relatórios num portal único. Você acompanha tudo pelo celular.', cta2: 'Ver planos' },
        stats: [['1.200+', 'empresas atendidas'], ['R$ 0', 'para abrir sua empresa'], ['4,9', 'nota dos clientes']],
        sections: ['hero', 'stats', 'services', 'pricing', 'about', 'testimonials', 'contact'],
        services: { id: 'servicos', title: 'Tudo que sua empresa precisa', text: 'Um time contábil completo por uma mensalidade fixa.', items: [['file', 'Abertura de empresa', 'CNPJ, alvará e inscrições sem sair de casa.'], ['calc', 'Impostos e guias', 'Cálculo e envio automático das guias do mês.'], ['users', 'Folha de pagamento', 'Holerites, férias, 13º e eSocial.'], ['chart', 'Relatórios gerenciais', 'DRE e fluxo de caixa no portal, atualizados todo mês.']] },
        pricing: { id: 'planos', title: 'Planos claros', items: [{ name: 'MEI', price: 'R$ 89', period: '/mês', items: ['DAS mensal', 'Declaração anual', 'Suporte por chat'] }, { name: 'Simples', price: 'R$ 349', period: '/mês', items: ['Impostos e guias', 'Folha até 3 funcionários', 'Portal do cliente', 'Contador dedicado'], featured: true }, { name: 'Lucro Presumido', price: 'R$ 890', period: '/mês', items: ['Tudo do Simples', 'Folha até 15 funcionários', 'Relatórios gerenciais', 'Reunião mensal'] }] },
        about: { title: 'Contadores que falam a sua língua', text: 'Nascemos para simplificar a vida de quem empreende. Automatizamos o operacional para que nosso time tenha tempo de pensar no seu negócio com você.', img: '1556761175-5973dc0f32e7', bullets: ['Resposta em até 2 horas', 'Portal e app próprios', 'Migração gratuita'] },
        testimonials: [['Troquei de contador e em uma semana estava tudo migrado. Hoje vejo meus números em tempo real.', 'Fernanda L.', 'Loja de roupas'], ['O contador dedicado faz toda a diferença. Parece que ele trabalha aqui dentro.', 'Carlos D.', 'Agência de marketing']],
        contact: { title: 'Fale com um contador', text: 'Diga o porte e o ramo da sua empresa que montamos uma proposta.', address: 'Rua Funchal, 500, Vila Olímpia, São Paulo', phone: '(11) 3500-0000', email: 'ola@contabilprime.com.br', hours: 'Seg a sex, 8h às 18h', form: 'contact' }
    },

    'Gestão Fiscal Pro': {
        app: true,
        theme: { bg: '#0b1020', surface: '#121a2e', text: '#e6ebf5', muted: '#8a96ad', accent: '#22c55e', accentInk: '#04150a', line: '#1f2a44' },
        fonts: { display: 'Space Grotesk', dWeight: '600', body: 'IBM Plex Sans', link: 'Space+Grotesk:wght@500;600&family=IBM+Plex+Sans:wght@400;500;600' }
    },

    'Bistrô Sabor & Arte': {
        theme: { bg: '#15110d', surface: '#1f1913', text: '#f3e9da', muted: '#b3a48e', accent: '#e07a3f', accentInk: '#1a0d04', line: '#33291f' },
        fonts: { display: 'Playfair Display', dWeight: '700', body: 'Work Sans', link: 'Playfair+Display:ital,wght@0,700;1,500&family=Work+Sans:wght@400;500;600' },
        radius: 6,
        nav: [['cardapio', 'Cardápio'], ['sobre', 'A casa'], ['contato', 'Reservas']],
        cta: 'Reservar mesa',
        hero: { variant: 'overlay', img: '1517248135467-4c7edcad34c4', kicker: 'Cozinha autoral · Vila Madalena', title: 'Comida de estação, feita sem pressa.', text: 'Menu que muda com a colheita, vinhos naturais e uma mesa que convida a ficar.', cta2: 'Ver cardápio' },
        sections: ['hero', 'menu', 'about', 'testimonials', 'contact'],
        menu: { id: 'cardapio', title: 'Cardápio', tabs: [
            { name: 'Entradas', items: [['Burrata da casa', 'Tomates assados, pesto de manjericão e pão de fermentação natural', 'R$ 54'], ['Ceviche de peixe branco', 'Leite de tigre, milho tostado e coentro', 'R$ 49'], ['Croquetas de costela', 'Maionese de alho negro', 'R$ 38']] },
            { name: 'Principais', items: [['Risoto de cogumelos', 'Shiitake, shimeji e parmesão 18 meses', 'R$ 78'], ['Short rib ao vinho', 'Purê de mandioquinha e farofa de castanhas', 'R$ 96'], ['Peixe do dia', 'Legumes na brasa e beurre blanc de limão', 'R$ 89']] },
            { name: 'Sobremesas', items: [['Pudim de doce de leite', 'Calda de café', 'R$ 29'], ['Tarte tatin', 'Sorvete de baunilha', 'R$ 34'], ['Mousse de chocolate 70%', 'Flor de sal e azeite', 'R$ 32']] }
        ], images: ['1544025162-d76694265947', '1546069901-ba9599a7e63c', '1565299624946-b28f40a0ae38', '1551024709-8f23befc6f87'] },
        about: { title: 'Uma casa de bairro', text: 'Abrimos em 2019 com doze mesas e uma ideia simples: cozinhar com o que os produtores da região colhem na semana. O cardápio muda, a hospitalidade fica.', img: '1546069901-ba9599a7e63c', bullets: ['Ingredientes de pequenos produtores', 'Carta de vinhos naturais', 'Área externa pet friendly'] },
        testimonials: [['O melhor risoto que comi em São Paulo. Atendimento impecável.', 'Beatriz R.', 'Google'], ['Ambiente lindo para um jantar a dois. Voltamos todo mês.', 'Thiago e Ana', 'TripAdvisor']],
        contact: { title: 'Reserve sua mesa', text: 'Reservas para até 8 pessoas. Grupos maiores, fale conosco.', address: 'Rua Aspicuelta, 200, Vila Madalena, São Paulo', phone: '(11) 2500-0000', email: 'reservas@saborearte.com.br', hours: 'Ter a dom, 12h às 15h e 19h às 23h', form: 'booking' }
    },

    'Clínica Bem Estar': {
        theme: { bg: '#f6fbfa', surface: '#ffffff', text: '#10302b', muted: '#557570', accent: '#0d9488', accentInk: '#ffffff', line: '#dcebe8' },
        fonts: { display: 'Plus Jakarta Sans', dWeight: '800', body: 'Nunito Sans', link: 'Plus+Jakarta+Sans:wght@700;800&family=Nunito+Sans:wght@400;600;700' },
        radius: 18,
        nav: [['especialidades', 'Especialidades'], ['como', 'Como agendar'], ['sobre', 'A clínica'], ['contato', 'Agendar']],
        cta: 'Agendar consulta',
        hero: { variant: 'split', img: '1532453288672-3a27e9be9efd', kicker: 'Aceitamos os principais convênios', title: 'Cuidado de verdade, do agendamento ao retorno.', text: 'Consultas em 14 especialidades, exames no mesmo lugar e prontuário digital que você acessa pelo celular.', cta2: 'Ver especialidades' },
        stats: [['14', 'especialidades'], ['48h', 'para a primeira consulta'], ['98%', 'de satisfação']],
        sections: ['hero', 'stats', 'services', 'steps', 'about', 'testimonials', 'contact'],
        services: { id: 'especialidades', title: 'Especialidades', text: 'Profissionais experientes e atendimento humanizado.', items: [['heart', 'Cardiologia', 'Check-up, eletro e ecocardiograma.'], ['users', 'Clínica geral', 'Consultas de rotina e encaminhamentos.'], ['leaf', 'Nutrição', 'Planos alimentares e acompanhamento.'], ['shield', 'Dermatologia', 'Consultas clínicas e procedimentos.']] },
        steps: { id: 'como', title: 'Como agendar', items: [['Escolha a especialidade', 'Pelo site, telefone ou WhatsApp.'], ['Confirme o horário', 'Receba a confirmação na hora.'], ['Seja atendido', 'Chegue 10 minutos antes com seu documento.']] },
        about: { title: 'Uma clínica pensada para você', text: 'Espaço acessível, recepção sem filas e lembretes automáticos de consulta. Seus exames e receitas ficam salvos no prontuário digital.', img: '1638202993928-7267aad84c31', bullets: ['Estacionamento gratuito', 'Acessibilidade completa', 'Resultados de exames online'] },
        testimonials: [['Consegui consulta com cardiologista em dois dias. Tudo muito organizado.', 'Sônia P.', 'Paciente'], ['Adoro receber o lembrete no WhatsApp e ver meus exames pelo celular.', 'Marcos T.', 'Paciente']],
        contact: { title: 'Agende sua consulta', text: 'Escolha a especialidade e o melhor período. Confirmamos em minutos.', address: 'Rua Vergueiro, 3000, Vila Mariana, São Paulo', phone: '(11) 3300-0000', email: 'agenda@clinicabemestar.com.br', hours: 'Seg a sáb, 7h às 20h', form: 'appointment', options: ['Cardiologia', 'Clínica geral', 'Nutrição', 'Dermatologia'] }
    },

    'Imóveis Luxo SP': {
        theme: { bg: '#0c0c0c', surface: '#161616', text: '#f2f0ec', muted: '#9c978e', accent: '#d8c3a5', accentInk: '#1a150e', line: '#262626' },
        fonts: { display: 'Bodoni Moda', dWeight: '600', body: 'Jost', link: 'Bodoni+Moda:wght@500;600&family=Jost:wght@300;400;500' },
        radius: 0,
        nav: [['imoveis', 'Imóveis'], ['sobre', 'Sobre'], ['contato', 'Contato']],
        cta: 'Agendar visita',
        hero: { variant: 'overlay', img: '1512917774080-9991f1c4c750', kicker: 'Alto padrão · São Paulo', title: 'Endereços raros para quem sabe o que procura.', text: 'Curadoria de casas e coberturas nos bairros mais disputados da cidade, com tour virtual 360º antes da visita.', cta2: 'Ver imóveis', search: true },
        sections: ['hero', 'listings', 'about', 'testimonials', 'contact'],
        listings: { id: 'imoveis', title: 'Seleção da semana', items: [
            { img: '1600585154340-be6161a56a0c', title: 'Casa contemporânea', place: 'Jardim Europa', price: 'R$ 18.500.000', beds: 5, baths: 7, area: '820 m²' },
            { img: '1600596542815-2495db98dada', title: 'Residência com piscina', place: 'Alto de Pinheiros', price: 'R$ 12.900.000', beds: 4, baths: 6, area: '640 m²' },
            { img: '1600607687939-ce8a6c25118c', title: 'Cobertura duplex', place: 'Itaim Bibi', price: 'R$ 9.800.000', beds: 3, baths: 5, area: '410 m²' }
        ] },
        about: { title: 'Discrição e curadoria', text: 'Trabalhamos com poucos imóveis por vez. Cada um é fotografado, documentado e apresentado em tour 360º, para que você visite pessoalmente só o que realmente interessa.', img: '1600607687939-ce8a6c25118c', bullets: ['Documentação verificada', 'Tour virtual 360º', 'Atendimento com hora marcada'] },
        testimonials: [['Visitei apenas dois imóveis e fechei no segundo. O tour virtual poupou semanas.', 'Eduardo F.', 'Comprador'], ['Venderam nossa casa em 40 dias, com total discrição.', 'Família M.', 'Proprietários']],
        contact: { title: 'Agende uma visita', text: 'Um consultor retorna com opções alinhadas ao que você procura.', address: 'Rua Oscar Freire, 900, Jardins, São Paulo', phone: '(11) 3800-0000', email: 'concierge@imoveisluxo.com.br', hours: 'Seg a sáb, com hora marcada', form: 'contact' }
    },

    'Tech Gadgets Store': {
        theme: { bg: '#fafafa', surface: '#ffffff', text: '#0a0a0a', muted: '#666a73', accent: '#7c3aed', accentInk: '#ffffff', line: '#e8e8ec' },
        fonts: { display: 'Sora', dWeight: '700', body: 'Inter Tight', link: 'Sora:wght@600;700&family=Inter+Tight:wght@400;500;600' },
        radius: 16,
        nav: [['produtos', 'Produtos'], ['vantagens', 'Vantagens'], ['contato', 'Suporte']],
        cta: 'Ver ofertas',
        cart: true,
        hero: { variant: 'split', img: '1505740420928-5e560c06d30e', kicker: 'Frete grátis acima de R$ 299', title: 'Tecnologia que cabe no seu dia.', text: 'Fones, relógios e acessórios originais com garantia nacional e entrega em até 2 dias úteis.', cta2: 'Comprar agora' },
        sections: ['hero', 'products', 'services', 'testimonials', 'contact'],
        products: { id: 'produtos', title: 'Mais vendidos', items: [
            { img: '1505740420928-5e560c06d30e', name: 'Headphone Wave Pro', price: 'R$ 899', old: 'R$ 1.199', tag: '-25%' },
            { img: '1546868871-7041f2a55e12', name: 'Smartwatch Pulse 2', price: 'R$ 1.299', tag: 'Novo' },
            { img: '1550009158-9ebf69173e03', name: 'Kit Setup Gamer', price: 'R$ 649' },
            { img: '1593642632823-8f78536788c6', name: 'Notebook Stand Alu', price: 'R$ 229', old: 'R$ 289', tag: '-20%' }
        ] },
        services: { id: 'vantagens', title: 'Por que comprar aqui', text: '', items: [['truck', 'Entrega rápida', 'Até 2 dias úteis para capitais.'], ['shield', 'Garantia nacional', '12 meses em todos os produtos.'], ['bolt', 'Pix com 5% off', 'Aprovação imediata.'], ['phone', 'Suporte humano', 'Atendimento por WhatsApp.']] },
        testimonials: [['Chegou em um dia e bem embalado. Produto original, recomendo.', 'Lucas V.', 'Compra verificada'], ['Troca super fácil quando errei o tamanho da pulseira.', 'Aline S.', 'Compra verificada']],
        contact: { title: 'Precisa de ajuda?', text: 'Dúvidas sobre produtos, pedidos ou trocas.', phone: '(11) 3900-0000', email: 'suporte@techgadgets.com.br', hours: 'Seg a sex, 9h às 19h', form: 'contact' }
    },

    'Moda Sustentável': {
        theme: { bg: '#f4efe7', surface: '#fbf8f3', text: '#2b2621', muted: '#7a7064', accent: '#5b6b3a', accentInk: '#ffffff', line: '#e3dacb' },
        fonts: { display: 'Instrument Serif', dWeight: '400', body: 'Karla', link: 'Instrument+Serif&family=Karla:wght@400;500;700' },
        radius: 0,
        nav: [['colecao', 'Coleção'], ['sobre', 'Nossa história'], ['contato', 'Contato']],
        cta: 'Comprar coleção',
        cart: true,
        hero: { variant: 'type', kicker: 'Coleção Outono 26', title: 'Roupas feitas para durar mais que uma estação.', text: 'Algodão orgânico, tingimento natural e produção local em pequenos lotes.', img: '1503342217505-b0a15ec3261c', cta2: 'Nossa história' },
        sections: ['hero', 'products', 'about', 'testimonials', 'contact'],
        products: { id: 'colecao', title: 'Coleção', items: [
            { img: '1503342217505-b0a15ec3261c', name: 'Camisa linho cru', price: 'R$ 329' },
            { img: '1588872657578-7efd1f1555ed', name: 'Calça pantalona', price: 'R$ 389', tag: 'Novo' },
            { img: '1503342217505-b0a15ec3261c', name: 'Vestido midi terra', price: 'R$ 459' },
            { img: '1588872657578-7efd1f1555ed', name: 'Blazer algodão', price: 'R$ 529' }
        ] },
        about: { title: 'Menos peças, melhores escolhas', text: 'Cada peça tem rastreabilidade: você sabe quem plantou o algodão, quem costurou e quanto de água foi economizado. Produzimos pouco e sob demanda.', img: '1588872657578-7efd1f1555ed', bullets: ['Algodão orgânico certificado', 'Costureiras com salário justo', 'Embalagem compostável'] },
        testimonials: [['O caimento é perfeito e o tecido melhora a cada lavagem.', 'Clara N.', 'Cliente'], ['Finalmente uma marca que mostra de onde vem cada peça.', 'Rafaela T.', 'Cliente']],
        contact: { title: 'Fale com a gente', text: 'Dúvidas sobre tamanhos, trocas ou pedidos especiais.', address: 'Rua Harmonia, 150, Vila Madalena, São Paulo', email: 'ola@modasustentavel.com.br', hours: 'Seg a sáb, 10h às 19h', form: 'contact' }
    },

    'Portfólio Fotógrafo': {
        theme: { bg: '#0a0a0a', surface: '#141414', text: '#f5f5f5', muted: '#8f8f8f', accent: '#f5f5f5', accentInk: '#0a0a0a', line: '#222222' },
        fonts: { display: 'Syne', dWeight: '700', body: 'Inter Tight', link: 'Syne:wght@600;700&family=Inter+Tight:wght@400;500' },
        radius: 0,
        nav: [['trabalhos', 'Trabalhos'], ['sobre', 'Sobre'], ['contato', 'Contato']],
        cta: 'Solicitar orçamento',
        hero: { variant: 'type', kicker: 'Fotografia de arquitetura, gastronomia e retrato', title: 'Luz, espaço e gente.', text: 'Fotógrafo baseado em São Paulo, trabalhando com marcas, escritórios de arquitetura e restaurantes.', img: '1600607687939-ce8a6c25118c', cta2: 'Ver trabalhos' },
        sections: ['hero', 'gallery', 'about', 'testimonials', 'contact'],
        gallery: { id: 'trabalhos', title: 'Trabalhos recentes', items: ['1600607687939-ce8a6c25118c', '1517248135467-4c7edcad34c4', '1503342217505-b0a15ec3261c', '1512917774080-9991f1c4c750', '1546069901-ba9599a7e63c', '1600585154340-be6161a56a0c', '1588872657578-7efd1f1555ed', '1565299624946-b28f40a0ae38'] },
        about: { title: 'Sobre', text: 'Dez anos fotografando espaços e pessoas. Trabalho com equipe enxuta, luz natural sempre que possível e entrega em até 7 dias.', img: '1600596542815-2495db98dada', bullets: ['Arquitetura e interiores', 'Gastronomia', 'Retrato corporativo'] },
        testimonials: [['As fotos do restaurante aumentaram nossas reservas pelo Instagram no mesmo mês.', 'Chef Renata', 'Bistrô'], ['Entendeu a proposta do projeto sem precisarmos explicar duas vezes.', 'Estúdio Arq', 'Arquitetura']],
        contact: { title: 'Vamos fotografar?', text: 'Conte o projeto, a data e o local.', email: 'ola@fotografo.com.br', phone: '(11) 99999-0000', form: 'contact' }
    }
};

/* ---------- Montagem ---------- */
function demoCSS(c) {
    const th = c.theme, r = c.radius ?? 12;
    return `
:root{--bg:${th.bg};--sf:${th.surface};--tx:${th.text};--mt:${th.muted};--ac:${th.accent};--ai:${th.accentInk};--ln:${th.line};--r:${r}px;
--fd:'${c.fonts.display}',Georgia,serif;--fb:'${c.fonts.body}',system-ui,sans-serif}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--bg);color:var(--tx);font-family:var(--fb);line-height:1.6;-webkit-font-smoothing:antialiased}
img{display:block;max-width:100%}a{color:inherit;text-decoration:none}button,input,select,textarea{font:inherit;color:inherit}
h1,h2,h3{font-family:var(--fd);font-weight:${c.fonts.dWeight};line-height:1.08;margin:0;letter-spacing:-.01em}p{margin:0}
.w{max-width:1160px;margin:0 auto;padding:0 24px}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:0 24px;border-radius:var(--r);background:var(--ac);color:var(--ai);font-weight:700;border:1px solid var(--ac);cursor:pointer;transition:filter .2s,transform .2s}
.btn:hover{filter:brightness(1.1)}.btn:active{transform:scale(.98)}.btn.o{background:transparent;color:inherit;border-color:currentColor}
nav.top{position:sticky;top:0;z-index:20;background:color-mix(in srgb,var(--bg) 92%,transparent);border-bottom:1px solid var(--ln)}
nav.top .w{display:flex;align-items:center;justify-content:space-between;height:72px;gap:16px}
.brand{font-family:var(--fd);font-weight:${c.fonts.dWeight};font-size:22px}
.links{display:flex;align-items:center;gap:28px;font-size:15px}.links a:not(.btn){color:var(--mt)}.links a:not(.btn):hover{color:var(--tx)}
.links .btn{min-height:42px;padding:0 18px}
.burger{display:none;background:none;border:1px solid var(--ln);border-radius:10px;width:44px;height:44px;place-items:center;cursor:pointer}
.cartb{position:relative;display:grid;place-items:center;width:44px;height:44px;border:1px solid var(--ln);border-radius:50%;background:none;cursor:pointer}
.cartb b{position:absolute;top:-4px;right:-4px;min-width:20px;height:20px;border-radius:10px;background:var(--ac);color:var(--ai);font-size:11px;display:grid;place-items:center;padding:0 5px}
@media(max-width:820px){.burger{display:grid}.links{position:absolute;top:72px;left:0;right:0;flex-direction:column;align-items:stretch;gap:0;background:var(--bg);border-bottom:1px solid var(--ln);padding:8px 24px 20px;display:none}.links.open{display:flex}.links a:not(.btn){padding:12px 0;color:var(--tx)}.links .btn{margin-top:8px}}
section{padding:96px 0}.sh{max-width:640px;margin-bottom:48px}.sh h2{font-size:clamp(30px,4vw,48px)}.sh p{color:var(--mt);margin-top:12px;font-size:18px}
.kick{display:inline-block;font-size:14px;font-weight:700;color:var(--ac);margin-bottom:18px}
.hero-o{position:relative;min-height:88vh;display:flex;align-items:center;color:#fff;background:#222 center/cover no-repeat}
.hero-o::before{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.78),rgba(0,0,0,.35))}
.hero-o .w{position:relative;width:100%}.hero-o h1{font-size:clamp(40px,6.4vw,84px);max-width:14ch}.hero-o p{font-size:19px;max-width:48ch;margin:22px 0 34px;color:rgba(255,255,255,.82)}
.hero-o .kick{color:var(--ac)}
.hero-s{padding:72px 0 96px}.hero-s .w{display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center}
.hero-s h1{font-size:clamp(38px,5.2vw,68px)}.hero-s p.lead{font-size:19px;color:var(--mt);margin:22px 0 32px;max-width:48ch}
.hero-s .pic{border-radius:var(--r);aspect-ratio:4/5;object-fit:cover;width:100%;background:var(--sf)}
.hero-t{padding:96px 0 64px}.hero-t h1{font-size:clamp(48px,9vw,132px);max-width:12ch;letter-spacing:-.03em}
.hero-t .row{display:flex;justify-content:space-between;align-items:flex-end;gap:32px;margin-top:40px;flex-wrap:wrap}.hero-t p{font-size:19px;color:var(--mt);max-width:44ch}
.hero-t .pic{margin-top:56px;width:100%;aspect-ratio:21/9;object-fit:cover;border-radius:var(--r);background:var(--sf)}
.acts{display:flex;gap:12px;flex-wrap:wrap}
@media(max-width:820px){.hero-s .w{grid-template-columns:1fr}.hero-s .pic{aspect-ratio:16/10}}
.search{display:flex;gap:8px;margin-top:28px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.25);padding:8px;max-width:560px;border-radius:var(--r)}
.search input{flex:1;min-width:0;background:transparent;border:0;color:#fff;padding:0 12px;outline:none}.search input::placeholder{color:rgba(255,255,255,.6)}
.stats{border-top:1px solid var(--ln);border-bottom:1px solid var(--ln);padding:40px 0}.stats .w{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:24px}
.stats b{display:block;font-family:var(--fd);font-weight:${c.fonts.dWeight};font-size:clamp(30px,3.6vw,44px);line-height:1.1}.stats span{color:var(--mt);font-size:15px}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px}
.cd{background:var(--sf);border:1px solid var(--ln);border-radius:var(--r);padding:28px}.cd .i{width:48px;height:48px;border-radius:calc(var(--r) * .8);display:grid;place-items:center;background:color-mix(in srgb,var(--ac) 14%,transparent);color:var(--ac);margin-bottom:18px}
.cd h3{font-size:22px;margin-bottom:8px;font-family:var(--fb);font-weight:700}.cd p{color:var(--mt)}
.about .w{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}.about img{width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:var(--r);background:var(--sf)}
.about h2{font-size:clamp(30px,3.8vw,46px)}.about p{color:var(--mt);font-size:18px;margin:18px 0 24px}
.ul{list-style:none;padding:0;margin:0;display:grid;gap:12px}.ul li{display:flex;gap:12px;align-items:center;font-weight:600}.ul li svg{color:var(--ac);flex:none}
@media(max-width:820px){.about .w{grid-template-columns:1fr;gap:32px}}
.steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px;counter-reset:s}
.st{padding:28px;border-top:3px solid var(--ac);background:var(--sf);border-radius:0 0 var(--r) var(--r)}.st::before{counter-increment:s;content:counter(s);font-family:var(--fd);font-size:40px;color:var(--ac);display:block;line-height:1;margin-bottom:14px}
.st h3{font-family:var(--fb);font-weight:700;font-size:20px}.st p{color:var(--mt);margin-top:6px}
.tst{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:18px}
.tq{background:var(--sf);border:1px solid var(--ln);border-radius:var(--r);padding:32px}.tq .stars{color:var(--ac);display:flex;gap:2px;margin-bottom:14px}
.tq blockquote{margin:0;font-size:19px;line-height:1.5}.tq footer{margin-top:18px;color:var(--mt);font-size:15px}.tq footer b{color:var(--tx)}
details{border-bottom:1px solid var(--ln);padding:20px 0}summary{cursor:pointer;font-weight:700;font-size:18px;list-style:none;display:flex;justify-content:space-between;gap:16px}
summary::after{content:'+';color:var(--ac);font-size:24px;line-height:1}details[open] summary::after{content:'−'}details p{color:var(--mt);margin-top:10px;max-width:70ch}
.price{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:18px;align-items:stretch}
.pl{background:var(--sf);border:1px solid var(--ln);border-radius:var(--r);padding:32px;display:flex;flex-direction:column;gap:18px}
.pl.f{border:2px solid var(--ac);position:relative}.pl.f::before{content:'Mais escolhido';position:absolute;top:-13px;left:24px;background:var(--ac);color:var(--ai);font-size:12px;font-weight:700;padding:3px 10px;border-radius:20px}
.pl h3{font-family:var(--fb);font-weight:700;font-size:18px}.pl .v{font-family:var(--fd);font-size:44px;line-height:1}.pl .v small{font-size:16px;color:var(--mt);font-family:var(--fb)}
.pl .ul{flex:1}.pl .ul li{font-weight:500}
.tabs{display:flex;gap:8px;margin-bottom:28px;flex-wrap:wrap}.tabs button{min-height:44px;padding:0 20px;border:1px solid var(--ln);border-radius:30px;background:none;cursor:pointer;font-weight:600}
.tabs button[aria-selected=true]{background:var(--ac);color:var(--ai);border-color:var(--ac)}
.menu{display:grid;grid-template-columns:1.2fr .8fr;gap:48px}.mi{display:flex;justify-content:space-between;gap:20px;padding:18px 0;border-bottom:1px dashed var(--ln)}
.mi h3{font-family:var(--fb);font-weight:600;font-size:19px}.mi p{color:var(--mt);font-size:15px}.mi b{font-family:var(--fd);font-size:20px;color:var(--ac);white-space:nowrap}
.mpics{display:grid;grid-template-columns:1fr 1fr;gap:12px}.mpics img{aspect-ratio:1;object-fit:cover;border-radius:var(--r);background:var(--sf)}
@media(max-width:820px){.menu{grid-template-columns:1fr}}
.lst{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px}.ls img{aspect-ratio:4/3;object-fit:cover;width:100%;background:var(--sf)}
.ls .b{padding:20px 0}.ls .pr{font-family:var(--fd);font-size:26px;color:var(--ac)}.ls h3{font-family:var(--fb);font-weight:500;font-size:19px;margin-top:6px}.ls .pl2{color:var(--mt);font-size:14px}
.ls .ft{display:flex;gap:18px;margin-top:14px;color:var(--mt);font-size:14px}.ls .ft span{display:flex;align-items:center;gap:6px}
.prd{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px}.pd{position:relative}.pd img{aspect-ratio:4/5;object-fit:cover;width:100%;border-radius:var(--r);background:var(--sf)}
.pd .tg{position:absolute;top:12px;left:12px;background:var(--ac);color:var(--ai);font-size:12px;font-weight:700;padding:4px 10px;border-radius:20px}
.pd h3{font-family:var(--fb);font-weight:600;font-size:17px;margin-top:14px}.pd .pp{display:flex;gap:10px;align-items:baseline;margin:4px 0 12px}.pd .pp b{font-size:18px}.pd .pp s{color:var(--mt);font-size:14px}
.pd .btn{width:100%;min-height:44px}
.gal{columns:3 260px;column-gap:14px}.gal button{display:block;width:100%;margin:0 0 14px;padding:0;border:0;cursor:zoom-in;background:var(--sf)}.gal img{width:100%}
.gal button:nth-child(3n) img{aspect-ratio:3/4;object-fit:cover}.gal button:nth-child(3n+1) img{aspect-ratio:4/3;object-fit:cover}.gal button:nth-child(3n+2) img{aspect-ratio:1;object-fit:cover}
.lb{position:fixed;inset:0;background:rgba(0,0,0,.92);display:none;place-items:center;z-index:50;padding:24px}.lb.on{display:grid}.lb img{max-height:86vh;max-width:100%}
.lb button{position:absolute;top:16px;right:16px;width:48px;height:48px;border-radius:50%;border:0;background:#fff;color:#000;cursor:pointer;display:grid;place-items:center}
.ct .w{display:grid;grid-template-columns:.9fr 1.1fr;gap:56px}.ct h2{font-size:clamp(30px,3.8vw,46px)}.ct .lead{color:var(--mt);font-size:18px;margin:14px 0 28px}
.info{display:grid;gap:16px}.info div{display:flex;gap:14px;align-items:flex-start}.info svg{color:var(--ac);flex:none;margin-top:2px}
form.f{background:var(--sf);border:1px solid var(--ln);border-radius:var(--r);padding:32px;display:grid;gap:16px}
.f2{display:grid;grid-template-columns:1fr 1fr;gap:16px}label{display:grid;gap:6px;font-size:14px;font-weight:600}
input,select,textarea{width:100%;min-height:48px;padding:10px 14px;border-radius:calc(var(--r) * .7);border:1px solid var(--ln);background:var(--bg);outline:none}
input:focus,select:focus,textarea:focus{border-color:var(--ac)}textarea{min-height:110px;resize:vertical}
@media(max-width:820px){.ct .w{grid-template-columns:1fr}.f2{grid-template-columns:1fr}}
footer.ft2{border-top:1px solid var(--ln);padding:32px 0;color:var(--mt);font-size:14px}footer.ft2 .w{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap}
.toast{position:fixed;left:50%;bottom:24px;transform:translate(-50%,120px);opacity:0;visibility:hidden;background:var(--tx);color:var(--bg);padding:14px 22px;border-radius:40px;font-weight:600;transition:transform .35s;z-index:60;max-width:calc(100% - 32px);text-align:center}
.toast.on{transform:translate(-50%,0);opacity:1;visibility:visible}
.hero-form{background:var(--sf);border:1px solid var(--ln);border-radius:var(--r);padding:28px;display:grid;gap:14px;box-shadow:0 30px 60px -30px rgba(0,0,0,.25)}
.hero-form h3{font-family:var(--fb);font-weight:800;font-size:22px}
:focus-visible{outline:2px solid var(--ac);outline-offset:2px}
`;
}

function renderHero(c) {
    const h = c.hero;
    const acts = `<div class="acts"><a href="#contato" class="btn">${c.cta}</a>${h.cta2 ? `<a href="#${c.nav[0][0]}" class="btn o">${h.cta2}</a>` : ''}</div>`;
    if (h.variant === 'overlay') {
        return `<header class="hero-o" style="background-image:url('${IMG(h.img, 1800)}')"><div class="w">
            <span class="kick">${h.kicker}</span><h1>${h.title}</h1><p>${h.text}</p>${acts}
            ${h.search ? `<form class="search" onsubmit="event.preventDefault();toast('Demonstração: busca simulada')"><input placeholder="Bairro, condomínio ou código" aria-label="Buscar imóveis"><button class="btn">${ic('search', 18)} Buscar</button></form>` : ''}
        </div></header>`;
    }
    if (h.variant === 'split') {
        const side = h.form
            ? `<form class="hero-form" onsubmit="return sent(event)"><h3>Análise gratuita em 24h</h3>
                <label>Nome<input required name="n" autocomplete="name"></label>
                <label>WhatsApp<input required name="w" inputmode="tel" placeholder="(11) 90000-0000"></label>
                <label>Data da demissão<input type="month" name="d"></label>
                <button class="btn">Quero minha análise</button></form>`
            : `<img class="pic" src="${IMG(h.img, 1000)}" alt="">`;
        return `<header class="hero-s"><div class="w"><div><span class="kick">${h.kicker}</span><h1>${h.title}</h1><p class="lead">${h.text}</p>${h.form ? '' : acts}</div>${side}</div></header>`;
    }
    return `<header class="hero-t"><div class="w"><span class="kick">${h.kicker}</span><h1>${h.title}</h1>
        <div class="row"><p>${h.text}</p>${acts}</div>${h.img ? `<img class="pic" src="${IMG(h.img, 2000)}" alt="">` : ''}</div></header>`;
}

const SECTIONS = {
    hero: renderHero,
    stats: c => `<div class="stats"><div class="w">${c.stats.map(([n, l]) => `<div><b>${n}</b><span>${l}</span></div>`).join('')}</div></div>`,
    services: c => `<section id="${c.services.id}"><div class="w"><div class="sh"><h2>${c.services.title}</h2>${c.services.text ? `<p>${c.services.text}</p>` : ''}</div>
        <div class="cards">${c.services.items.map(([i, t, d]) => `<div class="cd"><div class="i">${ic(i)}</div><h3>${t}</h3><p>${d}</p></div>`).join('')}</div></div></section>`,
    about: c => `<section class="about" id="sobre"><div class="w"><img src="${IMG(c.about.img, 1000)}" alt="" loading="lazy">
        <div><h2>${c.about.title}</h2><p>${c.about.text}</p><ul class="ul">${c.about.bullets.map(b => `<li>${ic('check', 20)}${b}</li>`).join('')}</ul></div></div></section>`,
    steps: c => `<section id="${c.steps.id}"><div class="w"><div class="sh"><h2>${c.steps.title}</h2></div>
        <div class="steps">${c.steps.items.map(([t, d]) => `<div class="st"><h3>${t}</h3><p>${d}</p></div>`).join('')}</div></div></section>`,
    testimonials: c => `<section style="background:var(--sf)"><div class="w"><div class="sh"><h2>Quem já confiou</h2></div>
        <div class="tst">${c.testimonials.map(([q, n, r]) => `<figure class="tq" style="margin:0;background:var(--bg)"><div class="stars">${ic('star', 18).repeat(5)}</div><blockquote>“${q}”</blockquote><footer><b>${n}</b> · ${r}</footer></figure>`).join('')}</div></div></section>`,
    faq: c => `<section id="${c.faq.id}"><div class="w" style="max-width:860px"><div class="sh"><h2>${c.faq.title}</h2></div>
        ${c.faq.items.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div></section>`,
    pricing: c => `<section id="${c.pricing.id}" style="background:var(--sf)"><div class="w"><div class="sh"><h2>${c.pricing.title}</h2></div>
        <div class="price">${c.pricing.items.map(p => `<div class="pl ${p.featured ? 'f' : ''}" style="background:var(--bg)"><h3>${p.name}</h3><div class="v">${p.price}<small>${p.period}</small></div>
        <ul class="ul">${p.items.map(i => `<li>${ic('check', 18)}${i}</li>`).join('')}</ul><a href="#contato" class="btn ${p.featured ? '' : 'o'}">Contratar</a></div>`).join('')}</div></div></section>`,
    menu: c => `<section id="${c.menu.id}"><div class="w"><div class="sh"><h2>${c.menu.title}</h2></div>
        <div class="menu"><div><div class="tabs" role="tablist">${c.menu.tabs.map((t, i) => `<button role="tab" aria-selected="${i === 0}" onclick="tab(${i},this)">${t.name}</button>`).join('')}</div>
        ${c.menu.tabs.map((t, i) => `<div class="tp" ${i ? 'hidden' : ''}>${t.items.map(([n, d, p]) => `<div class="mi"><div><h3>${n}</h3><p>${d}</p></div><b>${p}</b></div>`).join('')}</div>`).join('')}</div>
        <div class="mpics">${c.menu.images.map(i => `<img src="${IMG(i, 600)}" alt="" loading="lazy">`).join('')}</div></div></div></section>`,
    listings: c => `<section id="${c.listings.id}"><div class="w"><div class="sh"><h2>${c.listings.title}</h2></div>
        <div class="lst">${c.listings.items.map(l => `<article class="ls"><img src="${IMG(l.img, 900)}" alt="" loading="lazy"><div class="b"><div class="pr">${l.price}</div><h3>${l.title}</h3><div class="pl2">${l.place}</div>
        <div class="ft"><span>${ic('bed', 16)}${l.beds} suítes</span><span>${ic('bath', 16)}${l.baths}</span><span>${ic('ruler', 16)}${l.area}</span></div>
        <button class="btn o" style="margin-top:18px;width:100%" onclick="toast('Demonstração: tour 360º abriria aqui')">Tour virtual 360º</button></div></article>`).join('')}</div></div></section>`,
    products: c => `<section id="${c.products.id}"><div class="w"><div class="sh"><h2>${c.products.title}</h2></div>
        <div class="prd">${c.products.items.map(p => `<article class="pd">${p.tag ? `<span class="tg">${p.tag}</span>` : ''}<img src="${IMG(p.img, 700)}" alt="" loading="lazy"><h3>${p.name}</h3>
        <div class="pp"><b>${p.price}</b>${p.old ? `<s>${p.old}</s>` : ''}</div><button class="btn" onclick="add('${p.name}')">${ic('cart', 18)} Adicionar</button></article>`).join('')}</div></div></section>`,
    gallery: c => `<section id="${c.gallery.id}"><div class="w"><div class="sh"><h2>${c.gallery.title}</h2></div>
        <div class="gal">${c.gallery.items.map(i => `<button onclick="lb('${IMG(i, 1600)}')" aria-label="Ampliar foto"><img src="${IMG(i, 700)}" alt="" loading="lazy"></button>`).join('')}</div></div></section>
        <div class="lb" id="lb" onclick="if(event.target===this)this.classList.remove('on')"><img alt=""><button onclick="lbc()" aria-label="Fechar">${ic('x')}</button></div>`,
    contact: c => {
        const k = c.contact;
        const fields = {
            contact: `<div class="f2"><label>Nome<input required autocomplete="name"></label><label>E-mail<input type="email" required autocomplete="email"></label></div><label>Mensagem<textarea required></textarea></label>`,
            lead: `<div class="f2"><label>Nome<input required></label><label>WhatsApp<input required inputmode="tel"></label></div><label>Empresa em que trabalhou<input></label><label>O que aconteceu?<textarea></textarea></label>`,
            booking: `<div class="f2"><label>Nome<input required></label><label>Telefone<input required inputmode="tel"></label></div><div class="f2"><label>Data<input type="date" required></label><label>Horário<select><option>12:00</option><option>13:00</option><option>19:30</option><option>20:30</option><option>21:30</option></select></label></div><label>Pessoas<select><option>2</option><option>3</option><option>4</option><option>5 a 8</option></select></label>`,
            appointment: `<div class="f2"><label>Nome<input required></label><label>Telefone<input required inputmode="tel"></label></div><div class="f2"><label>Especialidade<select>${(k.options || []).map(o => `<option>${o}</option>`).join('')}</select></label><label>Período<select><option>Manhã</option><option>Tarde</option><option>Noite</option></select></label></div><label>Convênio<input placeholder="Particular ou nome do convênio"></label>`
        }[k.form];
        const info = [['pin', k.address], ['phone', k.phone], ['mail', k.email], ['clock', k.hours]].filter(x => x[1]);
        return `<section class="ct" id="contato"><div class="w"><div><h2>${k.title}</h2><p class="lead">${k.text}</p>
            <div class="info">${info.map(([i, v]) => `<div>${ic(i, 20)}<span>${v}</span></div>`).join('')}</div></div>
            <form class="f" onsubmit="return sent(event)">${fields}<button class="btn">Enviar</button></form></div></section>`;
    }
};

function demoScript() {
    return `<script>
var n=0;
function toast(m){var t=document.getElementById('toast');t.textContent=m;t.classList.add('on');clearTimeout(t._t);t._t=setTimeout(function(){t.classList.remove('on')},2600)}
function sent(e){e.preventDefault();e.target.reset();toast('Demonstração: mensagem não enviada, mas o formulário funciona.');return false}
function add(p){n++;var b=document.getElementById('cartn');if(b)b.textContent=n;toast(p+' adicionado ao carrinho')}
function tab(i,btn){document.querySelectorAll('[role=tab]').forEach(function(b){b.setAttribute('aria-selected',b===btn)});document.querySelectorAll('.tp').forEach(function(p,j){p.hidden=j!==i})}
function lb(src){var l=document.getElementById('lb');l.querySelector('img').src=src;l.classList.add('on')}
function lbc(){document.getElementById('lb').classList.remove('on')}
document.addEventListener('keydown',function(e){if(e.key==='Escape'){var l=document.getElementById('lb');if(l)l.classList.remove('on')}});
var bg=document.getElementById('burger'),ln=document.getElementById('links');
if(bg){bg.onclick=function(){var o=ln.classList.toggle('open');bg.setAttribute('aria-expanded',o)};ln.querySelectorAll('a').forEach(function(a){a.onclick=function(){ln.classList.remove('open')}})}
<\/script>`;
}

function buildSite(c, title) {
    const cart = c.cart ? `<button class="cartb" onclick="toast('Demonstração: carrinho com '+n+' item(ns)')" aria-label="Carrinho">${ic('cart', 20)}<b id="cartn">0</b></button>` : '';
    return `<!DOCTYPE html><html lang="pt-br"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=${c.fonts.link}&display=swap" rel="stylesheet">
<style>${demoCSS(c)}</style></head><body>
<nav class="top"><div class="w"><a href="#" class="brand">${title}</a><div style="display:flex;gap:10px;align-items:center">
<div class="links" id="links">${c.nav.map(([id, l]) => `<a href="#${id}">${l}</a>`).join('')}<a href="#contato" class="btn">${c.cta}</a></div>
${cart}<button class="burger" id="burger" aria-label="Menu" aria-expanded="false">${ic('menu')}</button></div></div></nav>
${c.sections.map(s => SECTIONS[s](c)).join('\n')}
<footer class="ft2"><div class="w"><span>© 2026 ${title}</span><span>Site desenvolvido por Julio Marques</span></div></footer>
<div class="toast" id="toast" role="status"></div>
${demoScript()}</body></html>`;
}

/* Painel administrativo (Gestão Fiscal Pro) */
function buildApp(c, title) {
    const th = c.theme;
    const bars = [42, 58, 51, 66, 72, 61, 80, 77, 88, 84, 93, 97];
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    const rows = [['NF 10482', 'Atacadão Sul', 'R$ 48.320,00', 'ok', 'Validada'], ['NF 10481', 'Grupo Alfa', 'R$ 12.940,50', 'ok', 'Validada'], ['NF 10480', 'Distribuidora Rio', 'R$ 7.210,00', 'wait', 'Em análise'], ['NF 10479', 'Mercado Bom Preço', 'R$ 3.880,90', 'err', 'Divergência'], ['NF 10478', 'Tech Supply', 'R$ 22.105,00', 'ok', 'Validada']];
    return `<!DOCTYPE html><html lang="pt-br"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title>
<link href="https://fonts.googleapis.com/css2?family=${c.fonts.link}&display=swap" rel="stylesheet">
<style>
:root{--bg:${th.bg};--sf:${th.surface};--tx:${th.text};--mt:${th.muted};--ac:${th.accent};--ln:${th.line}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--tx);font-family:'${c.fonts.body}',system-ui,sans-serif;font-size:14px}
h1,h2,h3{font-family:'${c.fonts.display}',sans-serif;margin:0;font-weight:600}button{font:inherit;color:inherit;cursor:pointer}
.app{display:grid;grid-template-columns:230px 1fr;min-height:100vh}
aside{border-right:1px solid var(--ln);padding:22px 14px;display:flex;flex-direction:column;gap:4px}
.lg{font-family:'${c.fonts.display}';font-weight:600;font-size:18px;padding:0 10px 22px;display:flex;align-items:center;gap:10px}.lg i{width:28px;height:28px;border-radius:8px;background:var(--ac);display:block}
aside a{display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:10px;color:var(--mt);text-decoration:none;font-weight:500}aside a.on,aside a:hover{background:var(--sf);color:var(--tx)}aside a.on svg{color:var(--ac)}
main{padding:24px 32px;display:grid;gap:22px;align-content:start;min-width:0}
.tb{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap}.tb p{color:var(--mt);margin:4px 0 0}
.tb .r{display:flex;gap:10px;align-items:center}.sb{display:flex;align-items:center;gap:8px;background:var(--sf);border:1px solid var(--ln);border-radius:10px;padding:0 12px;height:40px;color:var(--mt)}.sb input{background:none;border:0;outline:none;color:var(--tx);width:180px}
.ib{width:40px;height:40px;border-radius:10px;border:1px solid var(--ln);background:var(--sf);display:grid;place-items:center}
.kp{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.k{background:var(--sf);border:1px solid var(--ln);border-radius:14px;padding:18px}
.k span{color:var(--mt)}.k b{display:block;font-family:'${c.fonts.display}';font-size:26px;margin:8px 0 4px}.k em{font-style:normal;font-size:12px;font-weight:600;color:var(--ac)}.k em.dn{color:#f87171}
.two{display:grid;grid-template-columns:1.6fr 1fr;gap:14px}.pn{background:var(--sf);border:1px solid var(--ln);border-radius:14px;padding:20px;min-width:0}
.pn h3{font-size:16px;margin-bottom:18px;display:flex;justify-content:space-between}.pn h3 small{color:var(--mt);font-family:'${c.fonts.body}';font-weight:400;font-size:13px}
.ch{display:flex;align-items:flex-end;gap:8px;height:190px}.ch div{flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;height:100%;justify-content:flex-end}
.ch i{display:block;width:100%;border-radius:6px 6px 2px 2px;background:linear-gradient(var(--ac),color-mix(in srgb,var(--ac) 30%,transparent));transform-origin:bottom;animation:g .9s ease both}
.ch span{color:var(--mt);font-size:11px}@keyframes g{from{transform:scaleY(0)}}
.dn2{display:grid;place-items:center;gap:14px}.dn2 .ring{width:150px;height:150px;border-radius:50%;background:conic-gradient(var(--ac) 0 72%,#f59e0b 72% 90%,#f87171 90% 100%);display:grid;place-items:center}
.dn2 .ring div{width:108px;height:108px;border-radius:50%;background:var(--sf);display:grid;place-items:center;text-align:center}.dn2 .ring b{font-family:'${c.fonts.display}';font-size:24px;display:block}
.lgd{display:grid;gap:8px;width:100%}.lgd span{display:flex;justify-content:space-between;color:var(--mt)}.lgd span b{color:var(--tx)}.lgd i{display:inline-block;width:10px;height:10px;border-radius:3px;margin-right:8px}
table{width:100%;border-collapse:collapse}th{text-align:left;color:var(--mt);font-weight:500;font-size:12px;padding:10px 12px;border-bottom:1px solid var(--ln)}td{padding:14px 12px;border-bottom:1px solid var(--ln)}
.bd{font-size:12px;font-weight:600;padding:4px 10px;border-radius:20px}.bd.ok{background:rgba(34,197,94,.14);color:#4ade80}.bd.wait{background:rgba(245,158,11,.14);color:#fbbf24}.bd.err{background:rgba(248,113,113,.14);color:#f87171}
.tw{overflow-x:auto}
@media(max-width:900px){.app{grid-template-columns:1fr}aside{flex-direction:row;overflow-x:auto;border-right:0;border-bottom:1px solid var(--ln);padding:12px}.lg{padding:0 10px 0 0}aside a span{white-space:nowrap}
.kp{grid-template-columns:1fr 1fr}.two{grid-template-columns:1fr}main{padding:20px}.sb{display:none}}
</style></head><body><div class="app">
<aside><div class="lg"><i></i>${title}</div>
<a href="#" class="on">${ic('grid', 18)}<span>Visão geral</span></a><a href="#">${ic('file', 18)}<span>Notas fiscais</span></a><a href="#">${ic('calc', 18)}<span>Apuração</span></a><a href="#">${ic('chart', 18)}<span>Relatórios</span></a><a href="#">${ic('settings', 18)}<span>Configurações</span></a></aside>
<main>
<div class="tb"><div><h1>Visão geral</h1><p>Competência Dezembro 2026</p></div><div class="r"><label class="sb">${ic('search', 16)}<input placeholder="Buscar nota ou cliente" aria-label="Buscar"></label><button class="ib" aria-label="Notificações">${ic('bell', 18)}</button></div></div>
<div class="kp">
<div class="k"><span>Faturamento</span><b>R$ 1,84 mi</b><em>+12,4% vs mês anterior</em></div>
<div class="k"><span>Impostos apurados</span><b>R$ 214 mil</b><em>+3,1%</em></div>
<div class="k"><span>Notas validadas</span><b>2.418</b><em>98,7% sem erro</em></div>
<div class="k"><span>Divergências</span><b>31</b><em class="dn">-18 desde ontem</em></div></div>
<div class="two"><div class="pn"><h3>Faturamento mensal <small>2026</small></h3><div class="ch">${bars.map((b, i) => `<div><i style="height:${b}%;animation-delay:${i * 50}ms"></i><span>${months[i]}</span></div>`).join('')}</div></div>
<div class="pn"><h3>Status das notas</h3><div class="dn2"><div class="ring"><div><span><b>2.480</b>notas</span></div></div>
<div class="lgd"><span><span><i style="background:var(--ac)"></i>Validadas</span><b>72%</b></span><span><span><i style="background:#f59e0b"></i>Em análise</span><b>18%</b></span><span><span><i style="background:#f87171"></i>Divergência</span><b>10%</b></span></div></div></div></div>
<div class="pn"><h3>Últimas notas <small>Atualizado há 2 min</small></h3><div class="tw"><table><thead><tr><th>Nota</th><th>Cliente</th><th>Valor</th><th>Status</th></tr></thead><tbody>
${rows.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td><span class="bd ${r[3]}">${r[4]}</span></td></tr>`).join('')}
</tbody></table></div></div>
</main></div></body></html>`;
}

function buildDemo(title) {
    const c = DEMOS[title];
    if (!c) return `<p style="font-family:sans-serif;padding:40px">Demo indisponível.</p>`;
    return c.app ? buildApp(c, title) : buildSite(c, title);
}
