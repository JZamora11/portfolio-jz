document.addEventListener('DOMContentLoaded', () => {
    const filterLinks = document.querySelectorAll('.category-link');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    // Elementos del Dropdown Responsivo
    const sidebar = document.querySelector('.category-sidebar');
    const filterToggle = document.querySelector('.filter-toggle');
    const selectedFilterText = document.querySelector('.selected-filter-text');

    // 🔥 1. LOGICA DE APERTURA/CIERRE DEL DROPDOWN EN MÓVIL
    if (filterToggle && sidebar) {
        filterToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que el evento burbujee
            sidebar.classList.toggle('is-open');
        });

        // Cerrar el dropdown si el usuario hace clic fuera de la caja del filtro
        document.addEventListener('click', (e) => {
            if (!sidebar.contains(e.target)) {
                sidebar.classList.remove('is-open');
            }
        });
    }

    // 2. LÓGICA DEL FILTRADO CON TÉCNICA FLIP (Se mantiene intacta y optimizada)
    filterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            if (link.classList.contains('active')) return;

            // Cambiar estados activos en los links
            filterLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');

            const selectedCategory = link.getAttribute('data-category');

            // 🔥 ACTUALIZACIÓN RESPONSIVA: Actualizar el texto del dropdown y cerrarlo
            if (selectedFilterText) {
                // Obtenemos el texto del enlace limpio (sin incluir el número entre span)
                const cloneNode = link.cloneNode(true);
                const span = cloneNode.querySelector('span');
                if (span) span.remove();
                selectedFilterText.textContent = cloneNode.textContent.trim();
            }
            if (sidebar) {
                sidebar.classList.remove('is-open'); // Se cierra al elegir categoría
            }

            // FLIP: Guardar posiciones de inicio (First)
            const positions = [];
            portfolioItems.forEach((item, index) => {
                positions[index] = item.getBoundingClientRect();
            });

            // Etapa 1: Ocultar visualmente lo excluido
            portfolioItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                if (selectedCategory !== 'all' && itemCategory !== selectedCategory) {
                    item.classList.add('is-hidden');
                }
            });

            // Etapa 2: Reacomodar el flujo estructural (150ms)
            setTimeout(() => {
                portfolioItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');

                    if (selectedCategory === 'all' || itemCategory === selectedCategory) {
                        if (item.style.display === 'none') {
                            item.classList.add('is-hidden');
                        }
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';
                    }
                });

                // FLIP: Calcular diferencias y animar deslizamientos (Last, Invert, Play)
                requestAnimationFrame(() => {
                    portfolioItems.forEach((item, index) => {
                        const itemCategory = item.getAttribute('data-category');

                        if (selectedCategory === 'all' || itemCategory === selectedCategory) {
                            const firstPos = positions[index];
                            const lastPos = item.getBoundingClientRect();

                            const deltaX = firstPos.left - lastPos.left;
                            const deltaY = firstPos.top - lastPos.top;

                            if ((deltaX !== 0 || deltaY !== 0) && firstPos.width > 0) {
                                item.style.transition = 'none';
                                item.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
                                item.offsetHeight; // Reflow

                                item.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s ease';
                                item.style.transform = 'translate(0, 0)';
                            }
                        }
                    });

                    // Etapa 3: Fade-in de los nuevos ingresos
                    setTimeout(() => {
                        portfolioItems.forEach(item => {
                            const itemCategory = item.getAttribute('data-category');
                            if (selectedCategory === 'all' || itemCategory === selectedCategory) {
                                item.classList.remove('is-hidden');
                                setTimeout(() => {
                                    item.style.transition = '';
                                    item.style.transform = '';
                                }, 400);
                            }
                        });
                    }, 25);
                });

            }, 150); 
        });
    });
});