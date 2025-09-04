document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA COMUM A TODAS AS PÁGINAS ---
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
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
    }

    // --- LÓGICA EXCLUSIVA DA PÁGINA INICIAL (INDEX.HTML) ---
    if (document.querySelector('.hero-section')) {
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
            if (window.innerWidth <= 480) return 1;
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

        function moveToSlide(targetSlideIndex) {
            currentSlideIndex = targetSlideIndex;
            updateCarouselPosition();
            updateCarouselDots();
        }

        function updateCarouselPosition() {
            if (!carouselTrack) return;
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
                if (i === Math.floor(currentSlideIndex / slidesPerPage)) {
                    dot.classList.add('active');
                }
                dot.addEventListener('click', () => {
                    const targetSlideIndex = i * slidesPerPage;
                    moveToSlide(targetSlideIndex);
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
            if(modal) modal.classList.add('open');
        }

        function closeModal(modalElement) {
            if(modalElement) modalElement.classList.remove('open');
        }

        if (prevButton && nextButton) {
            prevButton.addEventListener('click', () => {
                const newIndex = Math.max(0, currentSlideIndex - 1);
                moveToSlide(newIndex);
            });
            nextButton.addEventListener('click', () => {
                const maxIndex = carouselSlides.length - slidesPerPage;
                const newIndex = Math.min(maxIndex, currentSlideIndex + 1);
                moveToSlide(newIndex);
            });
        }
        
        window.addEventListener('resize', adjustCarouselOnResize);

        viewDetailsButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                openModal(button.dataset.modalTarget);
            });
        });

        closeButtons.forEach(button => {
            button.addEventListener('click', () => {
                closeModal(button.closest('.project-modal'));
            });
        });
        
        projectModals.forEach(modal => {
            modal.addEventListener('click', (event) => {
                if (event.target === modal) closeModal(modal);
            });
        });

        if (contactForm) {
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
        }
        
        // Inicialização do carrossel na página principal
        adjustCarouselOnResize();
    }

    // --- LÓGICA EXCLUSIVA DA PÁGINA DE SITES (SITES.HTML) ---
    if (document.getElementById('sites-page')) {
        const tabsContainer = document.querySelector('.category-tabs');
        const gridContainer = document.querySelector('.template-grid');

        const loadAndDisplayTemplates = async () => {
            try {
                const response = await fetch('templates.json');
                if (!response.ok) throw new Error('A rede não respondeu bem.');
                const templates = await response.json();

                const categories = ['Todos', ...new Set(templates.map(t => t.category))];
                
                // Criamos as abas dinamicamente
                tabsContainer.innerHTML = categories.map(category => 
                    `<button class="tab-btn ${category === 'Todos' ? 'active' : ''}" data-category="${category}">
                        ${category}
                    </button>`
                ).join('');

                // Função para mostrar os cards filtrados
                const displayCards = (filter) => {
                    const filteredTemplates = (filter === 'Todos') 
                        ? templates 
                        : templates.filter(t => t.category === filter);
                    
                    gridContainer.innerHTML = filteredTemplates.map(template => `
                        <a href="${template.url}" target="_blank" rel="noopener noreferrer" class="template-card">
                            <figure class="template-thumbnail">
                                <img src="${template.thumbnail}" alt="Miniatura do ${template.title}" loading="lazy">
                            </figure>
                            <div class="template-info">
                                <h3>${template.title}</h3>
                                <p>${template.category}</p>
                            </div>
                        </a>
                    `).join('');
                };

                // Adicionamos o evento de clique nas abas
                tabsContainer.addEventListener('click', (e) => {
                    if (e.target.classList.contains('tab-btn')) {
                        tabsContainer.querySelector('.active').classList.remove('active');
                        e.target.classList.add('active');
                        displayCards(e.target.dataset.category);
                    }
                });

                // Mostra todos os cards para começar
                displayCards('Todos');

            } catch (error) {
                console.error("Chefe, deu ruim pra carregar os templates:", error);
                gridContainer.innerHTML = `<p class="subtitle" style="color: var(--accent-color);">Não foi possível carregar a vitrine. Tente recarregar a página.</p>`;
            }
        };

        loadAndDisplayTemplates();
    }
});