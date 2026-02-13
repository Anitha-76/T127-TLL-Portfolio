// ===================================
// PORTFOLIO CAROUSEL INTERACTIONS
// ARivom Academy Foundation - Let's Know Together
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // Force scroll to top on page load
    window.scrollTo(0, 0);

    // Initialize carousel navigation
    initCarousel();

    // Project modal functionality
    initProjectModals();

    // Navbar scroll behavior
    initNavbarScroll();

    // Expandable question accordion
    initExpandableQuestions();
});

// ===== CAROUSEL NAVIGATION =====
let currentSection = 0;
const totalSections = 4;

function initCarousel() {
    const sections = document.querySelectorAll('.carousel-section');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentSectionSpan = document.querySelector('.current-section');
    const totalSectionsSpan = document.querySelector('.total-sections');

    // Set total sections
    totalSectionsSpan.textContent = totalSections;

    // Navigate to specific section
    function goToSection(sectionIndex) {
        if (sectionIndex < 0 || sectionIndex >= totalSections) return;

        // Remove active class from all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Add active class to target section
        sections[sectionIndex].classList.add('active');

        // Update current section
        currentSection = sectionIndex;
        currentSectionSpan.textContent = currentSection + 1;

        // Control body overflow based on section
        if (currentSection === 0) {
            // Home page - disable scrolling
            document.body.style.overflow = 'hidden';
        } else {
            // Other pages - enable scrolling
            document.body.style.overflow = '';
        }

        // Update nav links
        navLinks.forEach((link, index) => {
            if (index === currentSection) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Update button states
        updateButtons();

        // Scroll to top of section
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Trigger fade-in animations for new section
        triggerSectionAnimations(sections[sectionIndex]);
    }

    // Update button states
    function updateButtons() {
        prevBtn.disabled = currentSection === 0;
        nextBtn.disabled = currentSection === totalSections - 1;
    }

    // Trigger animations for section elements
    function triggerSectionAnimations(section) {
        const animatedElements = section.querySelectorAll('.fade-in-up');
        animatedElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 100);
        });
    }

    // Previous button
    prevBtn.addEventListener('click', () => {
        if (currentSection > 0) {
            goToSection(currentSection - 1);
        }
    });

    // Next button
    nextBtn.addEventListener('click', () => {
        if (currentSection < totalSections - 1) {
            goToSection(currentSection + 1);
        }
    });

    // Nav link clicks
    navLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = parseInt(link.getAttribute('data-section'));
            goToSection(sectionId);
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        // Prevent navigation when modal is open
        const modalOpen = document.querySelector('.project-modal.active');
        if (modalOpen) return;

        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            if (currentSection < totalSections - 1) {
                goToSection(currentSection + 1);
            }
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            if (currentSection > 0) {
                goToSection(currentSection - 1);
            }
        }
    });

    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && currentSection < totalSections - 1) {
                // Swipe left - go to next
                goToSection(currentSection + 1);
            } else if (diff < 0 && currentSection > 0) {
                // Swipe right - go to previous
                goToSection(currentSection - 1);
            }
        }
    }

    // Scroll indicator on hero - go to next section
    const scrollArrow = document.querySelector('.scroll-arrow');
    if (scrollArrow) {
        scrollArrow.addEventListener('click', () => {
            goToSection(1);
        });
    }

    // Initialize first section animations
    triggerSectionAnimations(sections[0]);
    updateButtons();

    // Disable scrolling on initial load (home page)
    document.body.style.overflow = 'hidden';
}

// ===== PROJECT MODALS =====
function initProjectModals() {
    // Get all project buttons
    const projectButtons = document.querySelectorAll('.project-btn[data-project]');

    projectButtons.forEach((btn) => {
        const projectNum = parseInt(btn.getAttribute('data-project'));
        const modal = document.getElementById(`project-modal-${projectNum}`);

        if (!modal) return;

        // Open modal on button click
        btn.addEventListener('click', () => {
            openModal(modal);
        });

        // Close modal on X button
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                closeModal(modal);
            });
        }

        // Close modal on background click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });

        // Close modal on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal(modal);
            }
        });
    });
}

function openModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    // Animate modal content
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) {
        modalContent.style.animation = 'modalFadeIn 0.3s ease';
    }
}

function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
}

// ===== NAVBAR SCROLL BEHAVIOR =====
function initNavbarScroll() {
    const nav = document.querySelector('.nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add shadow on scroll
        if (currentScroll > 50) {
            nav.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
        } else {
            nav.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }

        lastScroll = currentScroll;
    });
}

// ===== EXPANDABLE QUESTIONS =====
function initExpandableQuestions() {
    const questionCards = document.querySelectorAll('.expandable-question-card');

    questionCards.forEach(card => {
        const header = card.querySelector('.question-collapse-header');
        const toggleBtn = card.querySelector('.expand-toggle');
        const expandedContent = card.querySelector('.question-expanded-content');

        if (!header || !toggleBtn || !expandedContent) return;

        // Click on header to toggle
        header.addEventListener('click', (e) => {
            // Don't trigger if clicking the button directly (it has its own handler)
            if (e.target.closest('.expand-toggle')) return;
            toggleQuestion(card);
        });

        // Click on button to toggle
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleQuestion(card);
        });
    });

    function toggleQuestion(card) {
        const isExpanded = card.classList.contains('expanded');

        if (isExpanded) {
            // Collapse
            card.classList.remove('expanded');
            card.querySelector('.expand-toggle').setAttribute('aria-label', 'Expand question');
        } else {
            // Expand
            card.classList.add('expanded');
            card.querySelector('.expand-toggle').setAttribute('aria-label', 'Collapse question');

            // Smooth scroll to the card after a brief delay for animation
            setTimeout(() => {
                card.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Initialize scroll animations for newly expanded content
                initScrollAnimations();
            }, 100);
        }
    }
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const scrollElements = document.querySelectorAll('.scroll-reveal, .narrative-scene, .position-statement, .pedagogy-questions li');

    const elementInView = (el, offset = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) - offset
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 100)) {
                displayScrollElement(el);
            }
        });
    };

    // Check on scroll
    window.addEventListener('scroll', handleScrollAnimation);

    // Check immediately for elements already in view
    handleScrollAnimation();
}

// Initialize scroll animations on page load
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initVideoPosterHiding();
});

// ===== VIDEO POSTER MANAGEMENT =====
function initVideoPosterHiding() {
    const videos = document.querySelectorAll('.recording-video video');

    videos.forEach(video => {
        const poster = video.parentElement.querySelector('.video-poster');
        if (!poster) return;

        // Hide poster when video starts playing
        video.addEventListener('play', () => {
            poster.style.opacity = '0';
            poster.style.pointerEvents = 'none';
        });

        // Show poster when video is paused or ended
        video.addEventListener('pause', () => {
            if (video.currentTime === 0) {
                poster.style.opacity = '1';
            }
        });

        video.addEventListener('ended', () => {
            poster.style.opacity = '1';
        });

        // Hide poster immediately when user clicks to play
        video.addEventListener('click', () => {
            if (!video.paused) {
                poster.style.opacity = '0';
            }
        });
    });
}

// ===== CONSOLE MESSAGE =====
console.log(`
╔════════════════════════════════════════════════╗
║  ARivom Academy Foundation                     ║
║  Let's Know Together                           ║
║                                                ║
║  From Scattered Ideas to Structured Learning   ║
║  EDU T564A - Harvard Graduate School of Ed    ║
║  Built with HTML, CSS, JavaScript              ║
╚════════════════════════════════════════════════╝
`);
