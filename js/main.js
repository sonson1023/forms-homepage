/* ========================================
   (주)폼즈 | Company Introduction Website
   Main JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', function () {
  initAOS();
  initHeaderScroll();
  initMobileMenu();
  initHeroSwiper();
  initGSAPAnimations();
  initCounterAnimation();
  initFormValidation();
  initSmoothScroll();
  initParticles();
  initDashboardAnimation();
});

/* ---------- AOS Init (Cookbook: cubic-bezier smooth curves) ---------- */
function initAOS() {
  AOS.init({
    duration: 700,
    easing: 'ease-out-quart',
    once: true,
    offset: 80,
  });
}

/* ---------- Header Scroll Effect ---------- */
function initHeaderScroll() {
  const header = document.getElementById('header');
  let ticking = false;

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        if (window.scrollY > 60) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  });
}

/* ---------- Mobile Menu ---------- */
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const overlay = document.getElementById('nav-overlay');
  const links = overlay.querySelectorAll('.nav-overlay-link');

  function openMenu() {
    toggle.classList.add('active');
    overlay.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', '메뉴 닫기');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    toggle.classList.remove('active');
    overlay.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', '메뉴 열기');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', function () {
    if (overlay.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  links.forEach(function (link) {
    link.addEventListener('click', function () {
      closeMenu();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeMenu();
    }
  });
}

/* ---------- Hero Swiper ---------- */
function initHeroSwiper() {
  var heroSwiper = new Swiper('.hero-swiper', {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: '.hero-swiper .swiper-pagination',
      clickable: true,
    },
    on: {
      slideChangeTransitionStart: function () {
        animateHeroContent(this);
      },
      init: function () {
        animateHeroContent(this);
      },
    },
  });
}

/* ---------- Hero Content Animation ---------- */
function animateHeroContent(swiper) {
  var slide = swiper.slides[swiper.activeIndex];
  if (!slide) return;

  var title = slide.querySelector('.hero-title');
  var lines = title.querySelectorAll('.hero-line');
  var subtitle = slide.querySelector('.hero-subtitle');
  var btn = slide.querySelector('.btn');
  var heroTag = slide.querySelector('.hero-tag');
  var terminal = slide.querySelector('.hero-terminal');

  // Reset
  if (heroTag) {
    heroTag.style.opacity = '0';
    heroTag.style.transform = 'translateY(20px)';
  }
  lines.forEach(function (line) {
    line.style.opacity = '0';
    line.style.transform = 'translateY(30px)';
  });
  if (subtitle) {
    subtitle.style.opacity = '0';
    subtitle.style.transform = 'translateY(20px)';
  }
  if (btn) {
    btn.style.opacity = '0';
    btn.style.transform = 'translateY(20px)';
  }
  if (terminal) {
    terminal.style.opacity = '0';
    terminal.style.transform = 'translateX(30px)';
  }

  // Animate in (Cookbook: smooth cubic-bezier curves)
  var tl = gsap.timeline();

  if (heroTag) {
    tl.to(heroTag, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, 0.1);
  }
  tl.to(lines[0], { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 0.2)
    .to(lines[1] || lines[0], { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 0.4)
    .to(subtitle, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, 0.6)
    .to(btn, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, 0.75);

  if (terminal) {
    tl.to(terminal, { opacity: 1, x: 0, duration: 0.7, ease: 'power2.out' }, 0.3);
  }
}

/* ---------- GSAP Scroll Animations (Cookbook: smooth cubic-bezier) ---------- */

/**
 * Stagger-reveal elements on scroll using ScrollTrigger.
 * @param {string} selector - CSS selector for elements to animate
 * @param {Object} [cfg] - Optional config overrides
 * @param {string} cfg.start - ScrollTrigger start position (default 'top 85%')
 * @param {number} cfg.duration - Animation duration in seconds (default 0.6)
 * @param {number} cfg.staggerDelay - Delay between elements (default 0.1)
 * @param {number} cfg.y - Vertical offset to animate from (default 30)
 */
function staggerRevealOnScroll(selector, cfg) {
  cfg = cfg || {};
  var start = cfg.start || 'top 85%';
  var duration = cfg.duration || 0.6;
  var staggerDelay = cfg.staggerDelay || 0.1;
  var y = cfg.y || 30;

  gsap.utils.toArray(selector).forEach(function (el, i) {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: start,
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: y,
      duration: duration,
      delay: i * staggerDelay,
      ease: 'power2.out',
    });
  });
}

function initGSAPAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // Stats section animation
  gsap.from('.stats', {
    scrollTrigger: {
      trigger: '.stats',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power2.out',
  });

  // Section headers
  gsap.utils.toArray('.section-header').forEach(function (header) {
    gsap.from(header, {
      scrollTrigger: {
        trigger: header,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: 'power2.out',
    });
  });

  // Staggered card reveals (Cookbook: orchestrated sequences)
  staggerRevealOnScroll('.services-grid .service-card');
  staggerRevealOnScroll('.mission-grid .mission-card');
}

/* ---------- Counter Animation ---------- */
function initCounterAnimation() {
  var counters = document.querySelectorAll('.stat-number');
  var animated = false;

  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-target'), 10);
    var duration = 2000;
    var start = 0;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out quad
      var eased = 1 - (1 - progress) * (1 - progress);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    }

    requestAnimationFrame(step);
  }

  function checkCounters() {
    if (animated) return;
    var statsSection = document.querySelector('.stats');
    if (!statsSection) return;

    var rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      animated = true;
      counters.forEach(function (counter) {
        animateCounter(counter);
      });
    }
  }

  window.addEventListener('scroll', checkCounters);
  checkCounters(); // Initial check
}

/* ---------- Form Validation & Submit (config-driven) ---------- */

/**
 * Field validation config. Each entry defines:
 *   id       - element ID to validate
 *   type     - 'required' | 'email'
 *   requiredError  - error message for empty required field
 *   emailError     - error message for invalid email format
 */
var formFields = [
  { id: 'name', type: 'required', requiredError: '이름을 입력해주세요' },
  { id: 'email', type: 'email', requiredError: '이메일을 입력해주세요', emailError: '올바른 이메일 형식이 아닙니다' },
  { id: 'subject', type: 'required', requiredError: '제목을 입력해주세요' },
  { id: 'message', type: 'required', requiredError: '메시지를 입력해주세요' },
];

/**
 * Validate a single field element against its config.
 * @param {HTMLElement} el - The input/textarea element
 * @param {string} value - Trimmed field value
 * @param {Object} cfg - Validation config
 * @returns true if valid, false otherwise
 */
function validateField(el, value, cfg) {
  if (!value) {
    showError(el, cfg.requiredError || '필수 항목입니다');
    return false;
  }
  if (cfg.type === 'email' && !isValidEmail(value)) {
    showError(el, cfg.emailError || '올바른 이메일 형식이 아닙니다');
    return false;
  }
  return true;
}

function initFormValidation() {
  var form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();

    var isValid = true;

    // Config-driven field validation
    formFields.forEach(function (fieldCfg) {
      var el = document.getElementById(fieldCfg.id);
      if (!el) return;
      if (!validateField(el, el.value.trim(), fieldCfg)) {
        isValid = false;
      }
    });

    if (!isValid) return;

    // Submit form via AJAX
    var submitBtn = document.getElementById('submit-btn');
    var btnText = submitBtn.querySelector('.btn-text');
    var btnLoader = submitBtn.querySelector('.btn-loader');
    var formStatus = document.getElementById('form-status');

    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline-flex';
    formStatus.className = 'form-status';
    formStatus.style.display = 'none';

    var formData = new FormData(form);

    fetch('php/send_mail.php', {
      method: 'POST',
      body: formData,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        formStatus.style.display = 'block';
        if (data.success) {
          formStatus.className = 'form-status success';
          formStatus.textContent = '✓ 문의가 성공적으로 전송되었습니다. 감사합니다.';
          form.reset();
        } else {
          formStatus.className = 'form-status error';
          formStatus.textContent = '✗ 전송 중 오류가 발생했습니다. 다시 시도해주세요.';
        }
      })
      .catch(function () {
        formStatus.style.display = 'block';
        formStatus.className = 'form-status error';
        formStatus.textContent = '✗ 네트워크 오류가 발생했습니다.';
      })
      .finally(function () {
        submitBtn.disabled = false;
        btnText.style.display = 'inline';
        btnLoader.style.display = 'none';
      });
  });
}

function showError(field, message) {
  field.classList.add('error');
  var errorEl = document.getElementById(field.id + '-error');
  if (errorEl) {
    errorEl.textContent = message;
  }
}

function clearErrors() {
  var fields = document.querySelectorAll('.form-group input, .form-group textarea');
  fields.forEach(function (field) {
    field.classList.remove('error');
  });
  var errors = document.querySelectorAll('.error-msg');
  errors.forEach(function (error) {
    error.textContent = '';
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ---------- Smooth Scroll (fallback for older browsers) ---------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var targetId = this.getAttribute('href');
      var target = document.querySelector(targetId);
      if (target) {
        var headerHeight = document.getElementById('header').offsetHeight;
        var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    });
  });
}

/* ---------- Hero Particles (lightweight canvas) ---------- */
function initParticles() {
  var canvas = document.createElement('canvas');
  var container = document.getElementById('particles');
  if (!container) return;
  container.appendChild(canvas);

  var ctx = canvas.getContext('2d');
  var particles = [];
  var particleCount = 50;
  var w, h;

  function resize() {
    w = canvas.width = container.offsetWidth;
    h = canvas.height = container.offsetHeight;
  }

  function createParticles() {
    particles = [];
    for (var i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(function (p) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 201, 177, ' + p.alpha + ')';
      ctx.fill();
    });

    // Draw connections
    for (var i = 0; i < particles.length; i++) {
      for (var j = i + 1; j < particles.length; j++) {
        var dx = particles[i].x - particles[j].x;
        var dy = particles[i].y - particles[j].y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = 'rgba(0, 201, 177, ' + (0.08 * (1 - dist / 120)) + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();

  window.addEventListener('resize', resize);
}

/* ---------- Dashboard Scroll Animation (Cookbook: orchestrated) ---------- */

/**
 * Animate a set of dashboard widgets from a config array.
 * @param {Array} animations - Config for each animation block
 * @param {Object} scope - { trigger, prefersReducedMotion }
 */
function animateDashboardWidgets(animations, scope) {
  var motion = scope.prefersReducedMotion;

  animations.forEach(function (anim) {
    var els = typeof anim.selector === 'function' ? anim.selector() : document.querySelectorAll(anim.selector);
    if (!els.length) return;

    // Skip complex animations for reduced-motion users
    if (motion && anim.skipIfReduced) return;

    var from = anim.from || {};
    var to = Object.assign({}, anim.to || {}, {
      duration: motion ? 0 : (anim.duration || 0.6),
      stagger: motion ? 0 : (anim.stagger || 0.1),
      ease: 'power2.out',
      scrollTrigger: {
        trigger: scope.trigger,
        start: anim.start || 'top 70%',
      },
    });

    gsap.fromTo(els, from, to);
  });
}

function initDashboardAnimation() {
  var dashboardEl = document.querySelector('.dashboard-mock');
  if (!dashboardEl) return;

  // Only run if GSAP and ScrollTrigger are loaded
  if (typeof gsap === 'undefined' || !gsap.ScrollTrigger) return;

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Animate stat counters with stagger (Cookbook: orchestrated sequences)
  var statConfig = [
    { id: 'stat-total', target: 24, duration: 1.5 },
    { id: 'stat-progress', target: 7, duration: 1.2 },
    { id: 'stat-diagnosis', target: 3, duration: 0.9 },
    { id: 'stat-completed', target: 14, duration: 1.8 },
  ];

  statConfig.forEach(function (cfg, i) {
    var el = document.getElementById(cfg.id);
    if (!el) return;

    var obj = { val: 0 };
    el.textContent = '0';

    gsap.to(obj, {
      val: cfg.target,
      duration: prefersReducedMotion ? 0 : cfg.duration,
      delay: i * 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: dashboardEl,
        start: 'top 75%',
      },
      onUpdate: function () {
        el.textContent = Math.round(obj.val);
      },
    });
  });

  // Config-driven widget animations (single prefersReducedMotion guard)
  animateDashboardWidgets([
    {
      selector: '.chart-bar',
      from: { height: '0%' },
      to: { height: function (i) { return getComputedStyle(document.querySelectorAll('.chart-bar')[i]).getPropertyValue('--bar-height'); } },
      duration: 1,
      stagger: 0.15,
      start: 'top 70%',
      skipIfReduced: true,
    },
    {
      selector: '.feed-item',
      from: { opacity: 0, x: -20 },
      to: { opacity: 1, x: 0 },
      duration: 0.6,
      stagger: 0.1,
      start: 'top 65%',
      skipIfReduced: true,
    },
    {
      selector: '.dash-table tbody tr',
      from: { opacity: 0, y: 10 },
      to: { opacity: 1, y: 0 },
      duration: 0.5,
      stagger: 0.08,
      start: 'top 60%',
      skipIfReduced: true,
    },
  ], { trigger: dashboardEl, prefersReducedMotion: prefersReducedMotion });
}

/* ---------- Footer Year ---------- */
(function () {
  var yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();

/* ---------- Org Accordion Interactivity ---------- */
(function () {
  var orgList = document.querySelector('.org-list');
  if (!orgList) return;

  // Toggle expand/collapse
  function togglePanel(btn) {
    var expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
  }

  orgList.addEventListener('click', function (e) {
    var btn = e.target.closest('.org-toggle');
    if (!btn) return;
    togglePanel(btn);
  });

  orgList.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var btn = e.target.closest('.org-toggle');
    if (!btn) return;
    e.preventDefault();
    togglePanel(btn);
  });

  // Expand/Collapse All buttons
  var expandAllBtn = document.querySelector('.org-btn-expand-all');
  var collapseAllBtn = document.querySelector('.org-btn-collapse-all');

  if (expandAllBtn) {
    expandAllBtn.addEventListener('click', function () {
      var toggles = orgList.querySelectorAll('.org-toggle');
      toggles.forEach(function (btn) {
        btn.setAttribute('aria-expanded', 'true');
      });
    });
  }

  if (collapseAllBtn) {
    collapseAllBtn.addEventListener('click', function () {
      var toggles = orgList.querySelectorAll('.org-toggle');
      toggles.forEach(function (btn) {
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

 })();
