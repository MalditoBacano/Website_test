// Integration Pathways - Main JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Mobile Menu Toggle
    initMobileMenu();

    // Smooth Scrolling for Anchor Links
    initSmoothScrolling();

    // Contact Form Handling
    initContactForm();

    // Active Navigation Highlighting
    initActiveNavigation();

    // Scroll to Top Button (optional)
    initScrollToTop();

    // Intersection Observer for Animations
    initScrollAnimations();
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            const isHidden = mobileMenu.classList.contains('hidden');

            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('show');
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('show');
            }

            // Update ARIA attribute for accessibility
            menuBtn.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!menuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('show');
                menuBtn.setAttribute('aria-expanded', 'false');
            }
        });

        // Close mobile menu when clicking a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('show');
                menuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }
}

/**
 * Smooth Scrolling for Anchor Links
 */
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const targetElement = document.querySelector(href);

            if (targetElement) {
                e.preventDefault();

                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Contact Form Handling
 */
function initContactForm() {
    const form = document.getElementById('contact-form');

    if (form) {
        form.addEventListener('submit', function(e) {
            // If Netlify attribute is present, let Netlify handle it
            if (form.hasAttribute('netlify')) {
                // Netlify will handle the submission
                // Show success message after a delay
                setTimeout(function() {
                    showFormSuccess();
                }, 1000);
            } else {
                // Prevent default form submission for demo
                e.preventDefault();

                // Get form data
                const formData = new FormData(form);
                const data = Object.fromEntries(formData);

                // Add loading state to submit button
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.classList.add('loading');
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;

                // Simulate form submission (replace with actual API call)
                setTimeout(function() {
                    // Remove loading state
                    submitBtn.classList.remove('loading');
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;

                    // Show success message
                    showFormSuccess();

                    // Reset form
                    form.reset();

                    // Log form data (for demo purposes)
                    console.log('Form submitted:', data);
                }, 1500);
            }
        });
    }
}

/**
 * Show Form Success Message
 */
function showFormSuccess() {
    const successMsg = document.getElementById('form-success');
    const form = document.getElementById('contact-form');

    if (successMsg && form) {
        successMsg.classList.remove('hidden');
        form.style.display = 'none';

        // Scroll to success message
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Reset after 5 seconds (optional)
        setTimeout(function() {
            successMsg.classList.add('hidden');
            form.style.display = 'block';
        }, 5000);
    }
}

/**
 * Active Navigation Highlighting
 */
function initActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a[href]');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');

        if (href === currentPage || (href === 'index.html' && currentPage === '')) {
            link.classList.add('active');
        }
    });
}

/**
 * Scroll to Top Button
 */
function initScrollToTop() {
    // Create scroll to top button (optional feature)
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
    `;
    scrollBtn.className = 'fixed bottom-8 right-8 bg-primary-600 text-white p-3 rounded-full shadow-lg hover:bg-primary-700 transition-all opacity-0 pointer-events-none z-50';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    scrollBtn.id = 'scroll-to-top';

    document.body.appendChild(scrollBtn);

    // Show/hide based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.remove('opacity-0', 'pointer-events-none');
        } else {
            scrollBtn.classList.add('opacity-0', 'pointer-events-none');
        }
    });

    // Scroll to top on click
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Intersection Observer for Scroll Animations
 */
function initScrollAnimations() {
    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
        return;
    }

    const animatedElements = document.querySelectorAll('.card-hover, .prose, section > div');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    animatedElements.forEach(element => {
        // Set initial state
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        // Observe element
        observer.observe(element);
    });
}

/**
 * Utility: Debounce Function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Utility: Throttle Function
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('mobile-menu');
        const menuBtn = document.getElementById('mobile-menu-btn');

        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('show');
            if (menuBtn) {
                menuBtn.setAttribute('aria-expanded', 'false');
            }
        }
    }
});

// Performance: Optimize scroll events with throttling
let lastScrollTop = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', throttle(function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add shadow to nav on scroll
    if (scrollTop > 10) {
        nav.classList.add('shadow-md');
    } else {
        nav.classList.remove('shadow-md');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, 100));

// Log initialization
console.log('Integration Pathways - Website initialized successfully');
