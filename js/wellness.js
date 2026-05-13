/* ================================================================
   WELLCORE — Hero Section Interactions
   No framework. Vanilla JS only.
   ================================================================ */
(function () {
  'use strict';

  /* ── NAV SCROLL STATE ──────────────────────────────────────── */
  var nav = document.getElementById('nav');
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('is-scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }


  /* ── HERO STAGGER REVEAL ───────────────────────────────────── */
  /*
   * Each .hero-anim element carries data-delay="N" (0–4).
   * Delays are staggered at 100ms intervals after a 100ms base delay.
   * The visual sequence: eyebrow → headline → desc → CTAs → trust stats
   */
  var staggerBase  = 100;  // ms before first element starts
  var staggerStep  = 110;  // ms between each subsequent element

  var heroAnims = document.querySelectorAll('.hero-anim');
  heroAnims.forEach(function (el) {
    var d     = parseInt(el.getAttribute('data-delay') || '0', 10);
    var delay = staggerBase + d * staggerStep;
    setTimeout(function () {
      el.classList.add('is-visible');
    }, delay);
  });


  /* ── SCORE BAR FILL ANIMATION ──────────────────────────────── */
  /*
   * .float-bar-fill has an inline width already set via style.
   * We animate from 0 → target width after the float card appears.
   */
  var barFill = document.querySelector('.float-bar-fill');
  if (barFill) {
    var targetWidth = barFill.style.width || '0%';
    barFill.style.width = '0%';
    setTimeout(function () {
      barFill.style.transition = 'width 0.9s cubic-bezier(0.4, 0, 0.2, 1)';
      barFill.style.width = targetWidth;
    }, staggerBase + 1 * staggerStep + 400); // after visual appears
  }


  /* ── MOBILE MENU TOGGLE ────────────────────────────────────── */
  var toggle   = document.querySelector('.nav-mobile-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));

      if (!isOpen) {
        /* open — inject inline mobile styles */
        navLinks.style.cssText = [
          'display: flex',
          'flex-direction: column',
          'position: fixed',
          'top: var(--nav-h)',
          'left: 0',
          'right: 0',
          'background: rgba(230,231,227,0.97)',
          'backdrop-filter: blur(14px)',
          '-webkit-backdrop-filter: blur(14px)',
          'padding: 24px var(--c-pad)',
          'gap: 20px',
          'border-bottom: 1px solid rgba(0,0,0,0.07)',
          'z-index: 190'
        ].join(';');
      } else {
        navLinks.removeAttribute('style');
      }
    });

    /* Close mobile nav when a link is clicked */
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        navLinks.removeAttribute('style');
      });
    });

    /* Close on outside click */
    document.addEventListener('click', function (e) {
      if (
        toggle.getAttribute('aria-expanded') === 'true' &&
        !toggle.contains(e.target) &&
        !navLinks.contains(e.target)
      ) {
        toggle.setAttribute('aria-expanded', 'false');
        navLinks.removeAttribute('style');
      }
    });
  }


  /* ── SMOOTH SCROLL FOR ANCHOR LINKS ───────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      var target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      var navHeight = nav ? nav.offsetHeight : 0;
      var top = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

}());
