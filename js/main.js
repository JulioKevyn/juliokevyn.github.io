/* ==========================================================
   Portfólio · lógica da página
   Tudo leve: sem Three.js, sem Tailwind em runtime, animações
   pausam fora da tela e somem em máquinas fracas.
   ========================================================== */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const weakDevice = (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
                   (navigator.deviceMemory && navigator.deviceMemory <= 4);
const LITE = reduceMotion || weakDevice;

/* ---------- Rolagem suave (Lenis) ----------
   A roda do mouse/touchpad desliza com desaceleração em vez de pular de
   100 em 100px. Só com mouse/touchpad (no toque a rolagem nativa já é
   suave) e nunca pra quem pediu menos movimento no sistema. */
let lenis = null;
function initSmoothScroll() {
    if (reduceMotion || typeof window.Lenis !== 'function' || !matchMedia('(pointer: fine)').matches) return;
    lenis = new window.Lenis({
        duration: 1.2,
        easing: x => Math.min(1, 1.001 - Math.pow(2, -10 * x)),
        smoothWheel: true,
        wheelMultiplier: 1
    });
    const raf = time => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
}
function scrollToY(y, { instant = false } = {}) {
    if (lenis) lenis.scrollTo(y, instant ? { immediate: true } : { duration: 1.2 });
    else scrollTo({ top: y, behavior: instant || reduceMotion ? 'auto' : 'smooth' });
}
const pauseScroll = () => lenis && lenis.stop();
const resumeScroll = () => lenis && lenis.start();
const LOCALE = { pt: 'pt-BR', en: 'en-US', es: 'es-ES' }[LANG];

const rpaData = rpaProjects.map(localizeRpa);
const webData = webProjects.map(localizeWeb);

function typeIcon(rawType) {
    if (rawType.includes('IA')) return 'fa-brain';
    if (rawType.includes('BI')) return 'fa-chart-column';
    if (rawType.includes('Web')) return 'fa-globe';
    return 'fa-robot';
}

/* ---------- Textos e idioma ---------- */
function applyTranslations() {
    document.documentElement.lang = LANG === 'pt' ? 'pt-br' : LANG;
    document.title = t('pageTitle');
    $('meta[name="description"]').setAttribute('content', t('metaDesc'));
    $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    $$('[data-i18n-label]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nLabel)); });
    $('#whatsapp-link').href = `https://wa.me/5511966209914?text=${encodeURIComponent(t('waText'))}`;

    $$('[data-set-lang]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.setLang === LANG);
        btn.addEventListener('click', () => setLang(btn.dataset.setLang));
    });

    const langDialog = $('#lang-dialog');
    langDialog.addEventListener('close', resumeScroll);
    if (!chosenLang && langDialog.showModal) {
        langDialog.showModal();
        pauseScroll();
        langDialog.addEventListener('cancel', () => {
            try { localStorage.setItem('lang', 'pt'); } catch (e) {}
        });
    }
}

/* ---------- Cabeçalho e menu ---------- */
function initHeader() {
    const header = $('#header');
    const toggle = $('#menu-toggle');
    const nav = $('#nav');

    const onScroll = () => header.classList.toggle('scrolled', scrollY > 10);
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const setOpen = open => {
        nav.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', String(open));
    };
    toggle.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
    $$('a', nav).forEach(a => a.addEventListener('click', () => setOpen(false)));
    addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
}

/* ---------- Links de âncora ----------
   Rolagem suave por cima da história faria os blocos mudarem de forma em
   sequência, parecendo falha. Quando o caminho atravessa a história, pula
   direto pro destino com um fade rápido; caminhos curtos rolam suave. */
function initAnchors() {
    const story = $('#story');
    $$('a[href^="#"]').forEach(a => {
        if (a.classList.contains('skip-link')) return;
        a.addEventListener('click', e => {
            const id = a.getAttribute('href');
            const target = id.length > 1 ? document.querySelector(id) : null;
            if (!target) return;
            const pad = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
            const from = scrollY;
            const to = id === '#top' ? 0 : Math.max(0, target.getBoundingClientRect().top + scrollY - pad);
            let crosses = false;
            if (story && !reduceMotion) {
                const sTop = story.getBoundingClientRect().top + scrollY;
                const sBottom = sTop + story.offsetHeight;
                crosses = Math.min(from, to) < sBottom - innerHeight * .2 && Math.max(from, to) > sTop + innerHeight * .2;
            }
            if (!crosses && !lenis) return; // sem Lenis e caminho curto: rolagem nativa
            e.preventDefault();
            scrollToY(to, { instant: crosses });
            history.replaceState(null, '', id);
            if (crosses) {
                target.animate([{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'none' }],
                    { duration: 450, easing: 'cubic-bezier(.16,1,.3,1)' });
            }
        });
    });
}

/* ---------- Fundo do hero (rede de pontos leve) ---------- */
function initHeroCanvas() {
    const canvas = $('#hero-canvas');
    const ctx = canvas.getContext('2d');
    const hero = $('.hero');
    let w, h, nodes = [], running = false, visible = true, last = 0;
    const dpr = Math.min(devicePixelRatio || 1, 1.5);

    function resize() {
        w = hero.clientWidth; h = hero.clientHeight;
        canvas.width = w * dpr; canvas.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const count = Math.round(Math.min(46, w / 30));
        nodes = Array.from({ length: count }, () => ({
            x: Math.random() * w, y: Math.random() * h,
            vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25
        }));
        draw();
    }

    function draw() {
        ctx.clearRect(0, 0, w, h);
        const max = 150, max2 = max * max;
        for (let i = 0; i < nodes.length; i++) {
            const a = nodes[i];
            for (let j = i + 1; j < nodes.length; j++) {
                const b = nodes[j];
                const dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
                if (d2 < max2) {
                    ctx.strokeStyle = `rgba(129,140,248,${(1 - d2 / max2) * .18})`;
                    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
                }
            }
        }
        ctx.fillStyle = 'rgba(125,211,252,.55)';
        for (const n of nodes) { ctx.beginPath(); ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2); ctx.fill(); }
    }

    function tick(now) {
        if (!running) return;
        if (now - last > 33) { // ~30 fps é suficiente
            last = now;
            for (const n of nodes) {
                n.x += n.vx; n.y += n.vy;
                if (n.x < 0 || n.x > w) n.vx *= -1;
                if (n.y < 0 || n.y > h) n.vy *= -1;
            }
            draw();
        }
        requestAnimationFrame(tick);
    }

    function update() {
        const should = !LITE && visible && !document.hidden;
        if (should && !running) { running = true; requestAnimationFrame(tick); }
        if (!should) running = false;
    }

    resize();
    let rt;
    addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(resize, 200); });
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; update(); }).observe(hero);
    document.addEventListener('visibilitychange', update);
}

/* ---------- Terminal digitando ---------- */
function initTerminal() {
    const el = $('#code');
    const status = $('#status');
    const tokens = [
        ['k', 'import'], ['', ' rpa_module '], ['k', 'as'], ['', ' bot\n\n'],
        ['k', 'async def '], ['f', t('codeFn')], ['', '():\n'],
        ['', '    '], ['v', t('codeVar')], ['', ' = '], ['s', t('codeValue')], ['', '\n'],
        ['', '    '], ['k', 'await'], ['', ' bot.run()\n'],
        ['', '    '], ['k', 'return '], ['v', t('codeVar')]
    ];

    const finish = () => { el.classList.remove('caret'); status.classList.add('show'); };

    if (reduceMotion) {
        el.innerHTML = tokens.map(([c, s]) => c ? `<span class="${c}">${s}</span>` : s).join('');
        finish();
        return;
    }

    let i = 0, j = 0, span = null;
    function step() {
        if (i >= tokens.length) return finish();
        const [cls, text] = tokens[i];
        if (j === 0) {
            span = document.createElement('span');
            if (cls) span.className = cls;
            el.appendChild(span);
        }
        span.textContent += text[j++];
        if (j >= text.length) { i++; j = 0; }
        setTimeout(step, text[j - 1] === '\n' ? 120 : 28);
    }
    setTimeout(step, 700);
}

/* ---------- Contadores ---------- */
function initCounters() {
    const fmt = new Intl.NumberFormat(LOCALE);
    const els = $$('[data-count]');
    const render = (el, v) => { el.textContent = fmt.format(v) + (el.dataset.suffix || ''); };
    els.forEach(el => render(el, +el.dataset.count));
    if (reduceMotion) return;

    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (!e.isIntersecting) return;
            io.unobserve(e.target);
            const el = e.target, target = +el.dataset.count, start = performance.now(), dur = 1400;
            const run = now => {
                const p = Math.min(1, (now - start) / dur);
                render(el, Math.round(target * (1 - Math.pow(1 - p, 3))));
                if (p < 1) requestAnimationFrame(run);
            };
            requestAnimationFrame(run);
        });
    }, { threshold: .6 });
    els.forEach(el => io.observe(el));
}

/* ---------- História: blocos que mudam de forma com o scroll ---------- */
function initStory() {
    const story = $('#story');
    const group = $('#story-blocks');
    const flow = $('#story-flow');
    const ring = $('#story-ring');
    const num = $('#story-num');
    const numLabel = $('#story-num-label');
    const steps = $$('.story-step', story);
    const rails = $$('.story-rail b', story);
    num.textContent = t('storyBig');
    numLabel.textContent = t('storyBigLabel');

    const N = 9;
    const hex = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
    const lerp = (a, b, t) => a + (b - a) * t;
    const mix = (c1, c2, t) => `rgb(${c1.map((v, i) => Math.round(lerp(v, c2[i], t))).join(',')})`;
    const ease = x => x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

    // Estado 0: caos manual (blocos soltos e tortos)
    const chaos = [[95, 95, -18, 86], [290, 70, 12, 70], [480, 120, -8, 96], [150, 265, 22, 78], [330, 245, -30, 92],
                   [505, 290, 15, 72], [80, 430, 8, 90], [285, 440, -14, 76], [470, 445, 26, 84]];
    // Estado 1: processo mapeado (grade)
    const grid = Array.from({ length: N }, (_, i) => [190 + (i % 3) * 110, 150 + Math.floor(i / 3) * 110, 0, 90]);
    // Estado 2: fluxo automatizado (nós conectados)
    const flowPts = Array.from({ length: N }, (_, i) => [50 + i * 62.5, 260 + (i % 2 ? -70 : 70) * (i === 0 || i === N - 1 ? 0 : 1), 0, 46]);
    // Estado 3: resultado (anel)
    const ringPts = Array.from({ length: N }, (_, i) => {
        const a = (i / N) * Math.PI * 2 - Math.PI / 2;
        return [300 + Math.cos(a) * 200, 260 + Math.sin(a) * 200, 45, 18];
    });
    const states = [chaos, grid, flowPts, ringPts];
    const radius = [10, 16, 23, 5];
    const fills = [
        Array(N).fill(hex('#1f2937')),
        Array(N).fill(hex('#111827')),
        Array.from({ length: N }, (_, i) => mix(hex('#7dd3fc'), hex('#818cf8'), i / (N - 1)).match(/\d+/g).map(Number)),
        Array(N).fill(hex('#7dd3fc'))
    ];
    const strokeOp = [0, 1, 0, 0];

    flow.setAttribute('d', 'M' + flowPts.map(p => `${p[0]} ${p[1]}`).join(' L'));

    const rects = Array.from({ length: N }, () => {
        const r = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        r.setAttribute('stroke', '#0ea5e9');
        r.setAttribute('stroke-width', '2');
        group.appendChild(r);
        return r;
    });

    function render(k) {
        const s = Math.min(2, Math.floor(k));
        const tt = ease(Math.min(1, Math.max(0, k - s)));
        const A = states[s], B = states[s + 1];
        rects.forEach((r, i) => {
            const x = lerp(A[i][0], B[i][0], tt), y = lerp(A[i][1], B[i][1], tt);
            const rot = lerp(A[i][2], B[i][2], tt), size = lerp(A[i][3], B[i][3], tt);
            const rad = Math.min(size / 2, lerp(radius[s], radius[s + 1], tt));
            r.setAttribute('x', -size / 2); r.setAttribute('y', -size / 2);
            r.setAttribute('width', size); r.setAttribute('height', size);
            r.setAttribute('rx', rad);
            r.setAttribute('transform', `translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${rot.toFixed(1)})`);
            r.setAttribute('fill', mix(fills[s][i], fills[s + 1][i], tt));
            r.setAttribute('stroke-opacity', lerp(strokeOp[s], strokeOp[s + 1], tt));
        });
        const flowOp = k < 1 ? 0 : k < 2 ? ease(k - 1) : 1 - ease(Math.min(1, k - 2));
        flow.setAttribute('opacity', flowOp.toFixed(2));
        const end = k > 2 ? ease(Math.min(1, k - 2)) : 0;
        ring.setAttribute('opacity', (end * .6).toFixed(2));
        num.setAttribute('opacity', end.toFixed(2));
        numLabel.setAttribute('opacity', end.toFixed(2));
    }

    if (reduceMotion) {
        story.classList.add('static');
        render(3);
        return;
    }

    let active = -1, ticking = false, inView = false, lastRaw = -1;
    function update() {
        ticking = false;
        const rect = story.getBoundingClientRect();
        const total = rect.height - innerHeight;
        const p = Math.min(1, Math.max(0, -rect.top / total));
        // cada etapa segura um pouco antes de transformar
        const raw = p * 3;
        if (Math.abs(raw - lastRaw) < .0005) return; // nada mudou: não redesenha
        lastRaw = raw;
        const seg = Math.min(2, Math.floor(raw));
        const local = Math.min(1, Math.max(0, (raw - seg - .2) / .6));
        const k = raw >= 3 ? 3 : seg + local;
        render(k);

        const idx = Math.min(3, Math.round(k));
        if (idx !== active) {
            active = idx;
            steps.forEach((s, i) => s.classList.toggle('active', i === idx));
        }
        rails.forEach((b, i) => { b.style.width = `${Math.min(1, Math.max(0, raw - i + 1)) * 100}%`; });
    }
    const onScroll = () => { if (inView && !ticking) { ticking = true; requestAnimationFrame(update); } };
    new IntersectionObserver(([e]) => { inView = e.isIntersecting; onScroll(); }).observe(story);
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    render(0);
}

/* ---------- Carrossel ---------- */
function initCarousel() {
    const root = $('#carousel');
    const track = $('#carousel-track');
    const dots = $('#carousel-dots');
    const bar = $('#carousel-progress');
    const items = rpaData.filter(p => p.highlight);
    const AUTOPLAY = 6000;
    root.style.setProperty('--autoplay', AUTOPLAY + 'ms');

    track.innerHTML = items.map((p, i) => `
        <article class="slide" role="group" aria-roledescription="slide" aria-label="${i + 1} / ${items.length}">
            <div>
                <div class="slide-tags">
                    <span class="tag hl"><i class="fas fa-star"></i> ${t('highlight')}</span>
                    <span class="tag">${p.area}</span>
                    <span class="tag">${p.type}</span>
                </div>
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                <div class="gain-chip"><small>${t('gain')}</small><strong>${p.gain}</strong></div>
            </div>
            <div class="slide-visual"><div class="orb"><i class="fas ${typeIcon(p.rawType)}"></i></div></div>
        </article>`).join('');

    dots.innerHTML = items.map((_, i) => `<button aria-label="${t('goSlide')} ${i + 1}"></button>`).join('');
    const dotBtns = $$('button', dots);

    let index = 0, timer = null, hover = false, inView = false;

    function go(i, user = false) {
        index = (i + items.length) % items.length;
        track.style.transform = `translateX(${-index * 100}%)`;
        dotBtns.forEach((d, n) => d.setAttribute('aria-current', String(n === index)));
        if (user) restart(); else restart();
    }

    function restart() {
        clearTimeout(timer);
        bar.classList.remove('run'); void bar.offsetWidth;
        const paused = hover || !inView || reduceMotion || document.hidden;
        root.classList.toggle('paused', paused);
        if (paused) return;
        bar.classList.add('run');
        timer = setTimeout(() => go(index + 1), AUTOPLAY);
    }

    $('#next-slide').addEventListener('click', () => go(index + 1, true));
    $('#prev-slide').addEventListener('click', () => go(index - 1, true));
    dotBtns.forEach((d, i) => d.addEventListener('click', () => go(i, true)));
    root.addEventListener('keydown', e => {
        if (e.key === 'ArrowRight') go(index + 1, true);
        if (e.key === 'ArrowLeft') go(index - 1, true);
    });
    root.addEventListener('mouseenter', () => { hover = true; restart(); });
    root.addEventListener('mouseleave', () => { hover = false; restart(); });
    root.addEventListener('focusin', () => { hover = true; restart(); });
    root.addEventListener('focusout', () => { hover = false; restart(); });
    document.addEventListener('visibilitychange', restart);
    new IntersectionObserver(([e]) => { inView = e.isIntersecting; restart(); }, { threshold: .4 }).observe(root);

    // Arrastar com mouse ou dedo
    let startX = 0, dx = 0, dragging = false;
    track.addEventListener('pointerdown', e => {
        if (e.button !== 0) return;
        dragging = true; startX = e.clientX; dx = 0;
        track.setPointerCapture(e.pointerId);
        root.classList.add('dragging');
    });
    track.addEventListener('pointermove', e => {
        if (!dragging) return;
        dx = e.clientX - startX;
        track.style.transform = `translateX(calc(${-index * 100}% + ${dx}px))`;
    });
    const end = () => {
        if (!dragging) return;
        dragging = false;
        root.classList.remove('dragging');
        const limit = Math.min(120, root.clientWidth * .15);
        if (dx < -limit) go(index + 1, true);
        else if (dx > limit) go(index - 1, true);
        else go(index, true);
    };
    track.addEventListener('pointerup', end);
    track.addEventListener('pointercancel', end);

    go(0);
}

/* ---------- Catálogo de automações ---------- */
function initCatalog() {
    const filtersEl = $('#rpa-filters');
    const grid = $('#rpa-grid');
    const pag = $('#rpa-pagination');
    const PER_PAGE = 9;
    const areas = ['ALL', ...new Set(rpaData.map(p => p.area))];
    let area = 'ALL', page = 1;

    filtersEl.innerHTML = areas.map((a, i) =>
        `<button class="chip" data-i="${i}" aria-pressed="${a === 'ALL'}">${a === 'ALL' ? t('all') : a}</button>`).join('');

    filtersEl.addEventListener('click', e => {
        const b = e.target.closest('.chip');
        if (!b) return;
        area = areas[+b.dataset.i]; page = 1;
        $$('.chip', filtersEl).forEach(c => c.setAttribute('aria-pressed', String(c === b)));
        render();
    });

    const card = p => `
        <article class="card">
            <div class="card-top">
                <span class="card-icon ${p.rawType.includes('Web') ? 'web' : ''}"><i class="fas ${typeIcon(p.rawType)}"></i></span>
                <span class="card-type">${p.type}</span>
            </div>
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
            <div class="card-foot"><span class="card-area">${p.area}</span><span class="card-gain">${p.gain}</span></div>
        </article>`;

    function render(scroll = false) {
        const list = area === 'ALL' ? rpaData : rpaData.filter(p => p.area === area);
        const pages = Math.max(1, Math.ceil(list.length / PER_PAGE));
        page = Math.min(page, pages);
        const items = list.slice((page - 1) * PER_PAGE, page * PER_PAGE);
        grid.innerHTML = items.length ? items.map(card).join('') : `<p class="card-area">${t('empty')}</p>`;

        if (pages <= 1) { pag.innerHTML = ''; }
        else {
            let html = `<button data-p="${page - 1}" ${page === 1 ? 'disabled' : ''} aria-label="${t('prevPage')}"><i class="fas fa-chevron-left"></i></button>`;
            for (let i = 1; i <= pages; i++) {
                if (i === 1 || i === pages || Math.abs(i - page) <= 1) {
                    html += `<button data-p="${i}" aria-label="${t('page')} ${i}" ${i === page ? 'aria-current="page"' : ''}>${i}</button>`;
                } else if (Math.abs(i - page) === 2) html += `<span aria-hidden="true">…</span>`;
            }
            html += `<button data-p="${page + 1}" ${page === pages ? 'disabled' : ''} aria-label="${t('nextPage')}"><i class="fas fa-chevron-right"></i></button>`;
            pag.innerHTML = html;
        }

        if (scroll) {
            const top = $('#catalogo').getBoundingClientRect().top;
            if (top < 0) {
                const pad = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
                scrollToY(top + scrollY - pad);
            }
        }
    }

    pag.addEventListener('click', e => {
        const b = e.target.closest('button[data-p]');
        if (!b || b.disabled) return;
        page = +b.dataset.p;
        render(true);
    });

    render();
}

/* ---------- Marcas ---------- */
// Logos vêm do Logo.dev pelo domínio de cada empresa.
// Se quiser um logo específico, salve em img/logos/<slug>.png que ele tem prioridade.
const LOGO_DEV_TOKEN = 'pk_fgCxeEm8Tzm2nIqRDYs-1Q'; // chave pública do Logo.dev

const BRANDS = [
    ['Mundial Logistics', 'mundial-logistics', 'mundiallogistics.com.br'],
    ['Saint-Gobain', 'saint-gobain', 'saint-gobain.com'],
    ['Heineken', 'heineken', 'heineken.com'],
    ['PepsiCo', 'pepsico', 'pepsico.com'],
    ['Post-it (3M)', '3m', '3m.com'],
    ['Mondelez', 'mondelez', 'mondelezinternational.com'],
    ['Trident', 'trident', 'tridentgum.com'],
    ['Diageo', 'diageo', 'diageo.com'],
    ['Budweiser', 'budweiser', 'budweiser.com']
];

function initBrands() {
    const remote = domain => LOGO_DEV_TOKEN
        ? `https://img.logo.dev/${domain}?token=${LOGO_DEV_TOKEN}&size=120&format=png&retina=true`
        : '';
    const item = ([name, slug, domain], dup) =>
        `<span class="brand${dup ? ' dup' : ''}"${dup ? ' aria-hidden="true"' : ''}>` +
        `<img src="img/logos/${slug}.png" data-fallback="${remote(domain)}" alt="${dup ? '' : name}" height="40"><b>${name}</b></span>`;

    const track = $('#marquee');
    track.innerHTML = BRANDS.map(b => item(b, false)).join('') + BRANDS.map(b => item(b, true)).join('');

    $$('img', track).forEach(img => {
        const ok = () => img.parentElement.classList.add('has-logo');
        img.addEventListener('load', ok);
        img.addEventListener('error', () => {
            // sem arquivo local: tenta o Logo.dev; sem nada: fica o nome
            if (img.dataset.fallback) { img.src = img.dataset.fallback; img.dataset.fallback = ''; }
            else img.remove();
        });
        if (img.complete && img.naturalWidth) ok();
    });

    if (LOGO_DEV_TOKEN) {
        $('.brands').insertAdjacentHTML('beforeend',
            '<p class="brands-credit"><a href="https://logo.dev" target="_blank" rel="noopener">Logos provided by Logo.dev</a></p>');
    }
}

/* ---------- Sites e preview ---------- */
function initWeb() {
    const filtersEl = $('#web-filters');
    const grid = $('#web-grid');
    const cats = ['Todos', ...new Set(webData.map(p => p.rawCategory))];
    let cat = 'Todos';

    filtersEl.innerHTML = cats.map(c => `<button class="chip" data-cat="${c}" aria-pressed="${c === 'Todos'}">${webCatLabel(c)}</button>`).join('');
    filtersEl.addEventListener('click', e => {
        const b = e.target.closest('.chip');
        if (!b) return;
        cat = b.dataset.cat;
        $$('.chip', filtersEl).forEach(c => c.setAttribute('aria-pressed', String(c === b)));
        render();
    });

    const card = p => {
        const th = (DEMOS[p.title] || {}).theme || { bg: '#fff', text: '#111', accent: '#0ea5e9', surface: '#eee' };
        return `
        <article class="card web-card" data-title="${p.title}">
            <div class="thumb" aria-hidden="true">
                <div class="thumb-page" style="background:${th.bg};color:${th.text}">
                    <div class="thumb-bar"><i></i><i></i><i></i></div>
                    <div class="thumb-hero">
                        <b>${p.title}</b>
                        <span class="ln" style="background:${th.text};width:80%"></span>
                        <span class="ln" style="background:${th.text};width:60%"></span>
                        <span class="cta" style="background:${th.accent}"></span>
                    </div>
                    <div class="thumb-cols"><i style="background:${th.accent}"></i><i style="background:${th.text}"></i><i style="background:${th.accent}"></i></div>
                </div>
            </div>
            <div class="web-body">
                <span class="card-type">${p.catLabel}</span>
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                <div class="techs">${p.tech.map(x => `<span>${x}</span>`).join('')}</div>
                <button class="open-demo" type="button">${t('openDemo')} <i class="fas fa-arrow-up-right-from-square"></i></button>
            </div>
        </article>`;
    };

    function render() {
        const list = cat === 'Todos' ? webData : webData.filter(p => p.rawCategory === cat);
        grid.innerHTML = list.map(card).join('');
    }

    grid.addEventListener('click', e => {
        const c = e.target.closest('.web-card');
        if (c) openPreview(c.dataset.title);
    });

    render();

    // Modal de preview
    const dialog = $('#preview');
    const frame = $('#preview-frame');
    const loader = $('#preview-loader');
    const body = $('#preview-body');
    let lastFocus = null;

    function openPreview(title) {
        lastFocus = document.activeElement;
        const slug = title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        $('#preview-url').textContent = `https://demo.juliomarques.dev/${slug}`;
        loader.classList.remove('hide');
        setDevice('desktop');
        dialog.showModal();
        document.body.style.overflow = 'hidden';
        pauseScroll();
        setTimeout(() => { frame.srcdoc = buildDemo(title); }, 250);
    }

    frame.addEventListener('load', () => { if (frame.srcdoc) loader.classList.add('hide'); });

    function closePreview() { dialog.close(); }
    dialog.addEventListener('close', () => {
        document.body.style.overflow = '';
        resumeScroll();
        frame.srcdoc = '';
        lastFocus && lastFocus.focus();
    });
    $('#preview-close').addEventListener('click', closePreview);
    dialog.addEventListener('click', e => { if (e.target === dialog) closePreview(); });

    function setDevice(d) {
        body.classList.toggle('mobile', d === 'mobile');
        $$('.device-toggle button', dialog).forEach(b => b.setAttribute('aria-pressed', String(b.dataset.device === d)));
    }
    $$('.device-toggle button', dialog).forEach(b => b.addEventListener('click', () => setDevice(b.dataset.device)));
}

/* ---------- Início ---------- */
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    applyTranslations();
    initHeader();
    initAnchors();
    initHeroCanvas();
    initTerminal();
    initCounters();
    initStory();
    initCarousel();
    initCatalog();
    initBrands();
    initWeb();
});
