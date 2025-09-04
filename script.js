document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselSlides = Array.from(document.querySelectorAll('.project-card'));
    const prevButton = document.querySelector('.carousel-nav.prev');
    const nextButton = document.querySelector('.carousel-nav.next');
    const carouselDotsContainer = document.querySelector('.carousel-dots');
    const viewDetailsButtons = document.querySelectorAll('.view-details-btn');
    const projectModals = document.querySelectorAll('.project-modal');
    const closeButtons = document.querySelectorAll('.project-modal .close-button');
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const formspreeEndpoint = 'https://formspree.io/f/mrbkqgnp';
    let currentSlideIndex = 0;
    let slidesPerPage;
    let slideWidthWithMargin;

    const getCssVar = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

    function calculateSlidesPerPage() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 992) return 2;
        return 3;
    }

    function calculateSlideWidthWithMargin() {
        if (carouselSlides.length === 0) return 0;
        const firstSlide = carouselSlides[0];
        const slideRect = firstSlide.getBoundingClientRect();
        const computedStyle = getComputedStyle(firstSlide);
        const marginLeft = parseFloat(computedStyle.marginLeft);
        const marginRight = parseFloat(computedStyle.marginRight);
        return slideRect.width + marginLeft + marginRight;
    }

    function adjustCarouselOnResize() {
        if (carouselSlides.length === 0) return;
        slidesPerPage = calculateSlidesPerPage();
        slideWidthWithMargin = calculateSlideWidthWithMargin();
        const maxPossibleIndex = carouselSlides.length - slidesPerPage;
        currentSlideIndex = Math.min(currentSlideIndex, Math.max(0, maxPossibleIndex));
        updateCarouselPosition();
        createCarouselDots();
    }

    function moveToSlide(track, targetSlideIndex) {
        currentSlideIndex = targetSlideIndex;
        updateCarouselPosition();
        updateCarouselDots();
    }

    function updateCarouselPosition() {
        if (carouselSlides.length === 0) return;
        const offset = slideWidthWithMargin * currentSlideIndex;
        carouselTrack.style.transform = `translateX(-${offset}px)`;
    }

    function createCarouselDots() {
        if (!carouselDotsContainer) return;
        carouselDotsContainer.innerHTML = '';
        const totalPages = Math.ceil(carouselSlides.length / slidesPerPage);
        for (let i = 0; i < totalPages; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.dataset.pageIndex = i;
            if (i === Math.floor(currentSlideIndex / slidesPerPage)) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
                const pageIndex = parseInt(dot.dataset.pageIndex);
                const targetSlideIndex = pageIndex * slidesPerPage;
                moveToSlide(carouselTrack, targetSlideIndex);
            });
            carouselDotsContainer.appendChild(dot);
        }
    }

    function updateCarouselDots() {
        if (!carouselDotsContainer) return;
        const dots = Array.from(carouselDotsContainer.children);
        const currentPage = Math.floor(currentSlideIndex / slidesPerPage);
        dots.forEach((dot, index) => dot.classList.toggle('active', index === currentPage));
    }

    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal(modalElement) {
        modalElement.classList.remove('open');
        document.body.style.overflow = '';
    }

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        navToggle.classList.toggle('open');
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
                navToggle.classList.remove('open');
            }
        });
    });

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => moveToSlide(carouselTrack, Math.max(0, currentSlideIndex - 1)));
        nextButton.addEventListener('click', () => moveToSlide(carouselTrack, Math.min(carouselSlides.length - slidesPerPage, currentSlideIndex + 1)));
    }

    window.addEventListener('resize', adjustCarouselOnResize);

    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            openModal(button.dataset.modalTarget);
        });
    });

    closeButtons.forEach(button => button.addEventListener('click', () => closeModal(button.closest('.project-modal'))));

    projectModals.forEach(modal => {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) closeModal(modal);
        });
    });

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        formStatus.textContent = 'Enviando transmissão...';
        try {
            const response = await fetch(formspreeEndpoint, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                formStatus.textContent = 'Transmissão enviada com sucesso! Aguarde meu retorno.';
                formStatus.style.color = getCssVar('--primary-color');
                contactForm.reset();
            } else {
                formStatus.textContent = 'Falha na transmissão. Tente novamente.';
                formStatus.style.color = getCssVar('--accent-color');
            }
        } catch (error) {
            formStatus.textContent = 'Erro de conexão. Verifique sua rede.';
            formStatus.style.color = getCssVar('--accent-color');
        }
    });

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.classList.add('fade-in-section');
        sectionObserver.observe(section);
    });

    const sectionLinkObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').includes(entry.target.id)) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { rootMargin: '-30% 0px -70% 0px' });

    document.querySelectorAll('main section[id]').forEach(section => sectionLinkObserver.observe(section));

    const templateGrid = document.querySelector('.template-grid');
    const templateFiltersContainer = document.querySelector('.template-filters');
    const templateModal = document.getElementById('template-modal');
    const templateModalIframe = document.getElementById('template-modal-iframe');
    const templateModalTitle = document.getElementById('template-modal-title');
    const closeTemplateModalBtn = document.getElementById('close-template-modal');

    async function loadTemplates() {
        if (!templateGrid) return;
        try {
            const response = await fetch('templates.json');
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const templates = await response.json();
            displayTemplates(templates);
            setupFilters(templates);
        } catch (error) {
            templateGrid.innerHTML = `<p style="color: var(--accent-color);">Erro ao carregar os modelos.</p>`;
        }
    }

    function displayTemplates(templates) {
        templateGrid.innerHTML = templates.map(template => `
            <article class="template-card" data-category="${template.category}" data-url="${template.url}" data-title="${template.title}">
                <figure class="template-thumbnail">
                    <img src="${template.thumbnail}" alt="Miniatura do ${template.title}" loading="lazy">
                </figure>
                <div class="template-info">
                    <h3>${template.title}</h3>
                    <p>${template.category}</p>
                </div>
            </article>
        `).join('');
    }

    function setupFilters(templates) {
        const categories = ['Todos', ...new Set(templates.map(t => t.category))];
        templateFiltersContainer.innerHTML = categories.map(category => `
            <button class="filter-btn ${category === 'Todos' ? 'active' : ''}" data-filter="${category}">${category}</button>
        `).join('');
    }

    templateFiltersContainer.addEventListener('click', (event) => {
        if (!event.target.matches('.filter-btn')) return;
        const filter = event.target.dataset.filter;
        templateFiltersContainer.querySelector('.active').classList.remove('active');
        event.target.classList.add('active');
        templateGrid.querySelectorAll('.template-card').forEach(card => {
            card.style.display = (filter === 'Todos' || card.dataset.category === filter) ? 'block' : 'none';
        });
    });

    templateGrid.addEventListener('click', (event) => {
        const card = event.target.closest('.template-card');
        if (!card) return;
        templateModalTitle.textContent = card.dataset.title;
        templateModalIframe.src = card.dataset.url;
        openModal('template-modal');
    });

    const closeTemplateModal = () => {
        if (templateModal) {
            closeModal(templateModal);
            templateModalIframe.src = '';
        }
    };

    if (closeTemplateModalBtn) closeTemplateModalBtn.addEventListener('click', closeTemplateModal);
    if (templateModal) templateModal.addEventListener('click', (event) => {
        if (event.target === templateModal) closeTemplateModal();
    });

    loadTemplates();
    adjustCarouselOnResize();
});
