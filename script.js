/* ==========================================================================
   NK SOLUTIONS PROVIDERS — ATHER INSPIRED INTERACTIVES
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- Loader ---
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => loader.classList.add('hidden'), 1000);
    }

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');

    function handleScroll() {
        const scrollY = window.scrollY;
        if (navbar) {
            navbar.classList.toggle('scrolled', scrollY > 40);
        }

        // Active Section Navigation Pill
        sections.forEach(section => {
            const top = section.offsetTop - 120;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollY >= top && scrollY < bottom) {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });

        // Back to top button
        const backToTop = document.getElementById('backToTop');
        if (backToTop) {
            backToTop.classList.toggle('visible', scrollY > 400);
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // --- Back to Top ---
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- Ather Product Lineup Tab Switcher ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-content-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');

            // Deactivate all tabs
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));

            // Activate target
            btn.classList.add('active');
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // --- Architecture SVG Hotspot Interaction ---
    const hotspots = document.querySelectorAll('.hotspot-group');
    const hotspotInfo = document.getElementById('hotspotInfo');

    if (hotspots && hotspotInfo) {
        hotspots.forEach(spot => {
            spot.addEventListener('mouseenter', () => {
                const title = spot.getAttribute('data-title');
                const desc = spot.getAttribute('data-desc');
                hotspotInfo.innerHTML = `
                    <div class="info-title">⚡ ${title}</div>
                    <div class="info-desc">${desc}</div>
                `;
            });
        });
    }

    // --- Contact Form Submission Simulation ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            submitBtn.disabled = true;
            submitBtn.innerHTML = '⚡ Inquiry Received! Connecting with OEM Team...';
            submitBtn.style.background = '#059669';

            setTimeout(() => {
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
            }, 3000);
        });
    }

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    e.preventDefault();
                    const offset = 80;
                    const top = targetEl.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            }
        });
    });

});
