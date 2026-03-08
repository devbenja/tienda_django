console.log('Django + Webpack funcionando correctamente');

document.addEventListener('DOMContentLoaded', function() {
    console.log('Aplicación inicializada');

    // === Header Interactivity ===

    // Menu toggle functionality
    const menuToggle = document.querySelector('.header__menu-toggle');
    const mobileMenu = document.querySelector('.header__mobile-menu');
    const mobileMenuClose = document.querySelector('.header__mobile-menu-close');
    const mobileSearch = document.querySelector('.header__search-mobile');
    const searchOverlay = document.querySelector('.header__search-overlay');

    // Open mobile menu
    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            mobileMenu.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    }

    // Close mobile menu
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', function () {
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        });
    }

    // Close mobile menu when clicking outside
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function (e) {
            if (e.target === mobileMenu) {
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    }

    // Open mobile search
    if (mobileSearch) {
        mobileSearch.addEventListener('click', function () {
            searchOverlay.classList.add('open');
            const searchInput = document.querySelector('.header__search-overlay input');
            if (searchInput) {
                searchInput.focus();
            }
        });
    }

    // Close search overlay on click outside
    if (searchOverlay) {
        searchOverlay.addEventListener('click', function (e) {
            if (e.target === searchOverlay) {
                searchOverlay.classList.remove('open');
            }
        });
    }

    // Close search overlay on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            if (searchOverlay) {
                searchOverlay.classList.remove('open');
            }
            if (mobileMenu) {
                mobileMenu.classList.remove('open');
            }
            document.body.style.overflow = '';
        }
    });

    // Sticky header on scroll
    const headerMain = document.querySelector('.header__main');
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            headerMain.classList.add('sticky');
        } else {
            headerMain.classList.remove('sticky');
        }

        lastScroll = currentScroll;
    });

    // Active navigation link based on current URL
    const navLinks = document.querySelectorAll('.header__nav-link');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('header__nav-link--active');
        }
    });

    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});


export function initApp() {
    console.log('App inicializada');
}