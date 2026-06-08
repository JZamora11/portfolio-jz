document.addEventListener('DOMContentLoaded', () => {
    const filterLinks = document.querySelectorAll('.category-link');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    const sidebar = document.querySelector('.category-sidebar');
    const filterToggle = document.querySelector('.filter-toggle');
    const selectedFilterText = document.querySelector('.selected-filter-text');

    if (filterToggle && sidebar) {
        filterToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('is-open');
        });

        document.addEventListener('click', (e) => {
            if (!sidebar.contains(e.target)) {
                sidebar.classList.remove('is-open');
            }
        });
    }

    filterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            if (link.classList.contains('active')) return;

            filterLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');

            const selectedCategory = link.getAttribute('data-category');

            if (selectedFilterText) {
                const cloneNode = link.cloneNode(true);
                const span = cloneNode.querySelector('span');
                if (span) span.remove();
                selectedFilterText.textContent = cloneNode.textContent.trim();
            }
            if (sidebar) {
                sidebar.classList.remove('is-open');
            }

            const positions = [];
            portfolioItems.forEach((item, index) => {
                positions[index] = item.getBoundingClientRect();
            });

            portfolioItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                if (selectedCategory !== 'all' && itemCategory !== selectedCategory) {
                    item.classList.add('is-hidden');
                }
            });

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