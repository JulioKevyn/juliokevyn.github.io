/* ==========================================================
   Layout compartilhado entre as páginas
   Cabeçalho, contato, rodapé e escolha de idioma ficam aqui
   para não repetir o mesmo HTML em cada arquivo.
   Cada página deixa um <div id="site-..."> no lugar certo.
   ========================================================== */

(function () {
    const page = document.body.dataset.page || 'home';

    const NAV = [
        ['home', 'index.html#story', 'navStory', 'Como funciona'],
        ['try', 'teste.html', 'navTry', 'Teste um robô'],
        ['rpa', 'automacoes.html', 'navRpa', 'Automações'],
        ['web', 'sites.html', 'navWeb', 'Sites']
    ];

    const links = NAV.map(([id, href, key, label]) =>
        `<a href="${href}" data-i18n="${key}"${id === page ? ' aria-current="page"' : ''}>${label}</a>`).join('');

    const flag = (code, name) =>
        `<button class="lang-btn" data-set-lang="${code}" aria-label="${name}"><img src="https://flagcdn.com/${code === 'pt' ? 'br' : code === 'en' ? 'us' : 'es'}.svg" alt="" width="20" height="14"></button>`;

    const header = `
    <header class="header" id="header">
        <div class="wrap">
            <a href="index.html" class="logo" aria-label="Julio Marques">Julio Marques</a>
            <button class="menu-toggle" id="menu-toggle" aria-expanded="false" aria-controls="nav">
                <span></span><span class="sr-only" data-i18n="menu">Abrir menu</span>
            </button>
            <nav class="nav" id="nav">
                ${links}
                <div class="langs">${flag('pt', 'Português')}${flag('en', 'English')}${flag('es', 'Español')}</div>
                <a href="#contato" class="btn btn-primary" data-i18n="navHire">Fale comigo</a>
            </nav>
        </div>
    </header>`;

    const contact = `
    <section class="section contact" id="contato">
        <div class="wrap">
            <h2 data-i18n="ctaTitle"></h2>
            <p data-i18n="ctaText"></p>
            <div class="contact-actions">
                <a id="whatsapp-link" class="btn btn-whats" href="https://wa.me/5511966209914" target="_blank" rel="noopener"><i class="fab fa-whatsapp"></i> <span data-i18n="ctaWhats">Conversar no WhatsApp</span></a>
            </div>
            <div class="social">
                <a href="https://www.linkedin.com/in/juliokevyn-61618729a" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/juliokevyn" target="_blank" rel="noopener" aria-label="GitHub"><i class="fab fa-github"></i></a>
                <a href="mailto:juliokevyn17@gmail.com" aria-label="E-mail"><i class="fas fa-envelope"></i></a>
            </div>
        </div>
    </section>`;

    const footer = `
    <footer class="footer">
        <div class="wrap">
            <span>© 2026 Julio Marques. <span data-i18n="rights">Todos os direitos reservados.</span></span>
            <span>v3.0</span>
        </div>
    </footer>`;

    const lang = `
    <dialog class="lang-dialog" id="lang-dialog" aria-labelledby="lang-title" data-lenis-prevent>
        <div class="lang-box">
            <h2 id="lang-title" data-i18n="langTitle">Escolha o idioma</h2>
            <p data-i18n="langSub"></p>
            <div class="lang-options">
                <button class="lang-option" data-set-lang="pt"><img src="https://flagcdn.com/br.svg" alt="" width="56" height="40">Português</button>
                <button class="lang-option" data-set-lang="en"><img src="https://flagcdn.com/us.svg" alt="" width="56" height="40">English</button>
                <button class="lang-option" data-set-lang="es"><img src="https://flagcdn.com/es.svg" alt="" width="56" height="40">Español</button>
            </div>
        </div>
    </dialog>`;

    const parts = { 'site-header': header, 'site-contact': contact, 'site-footer': footer, 'site-lang': lang };
    for (const [id, html] of Object.entries(parts)) {
        const slot = document.getElementById(id);
        if (slot) slot.outerHTML = html;
    }
})();
