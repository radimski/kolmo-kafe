/* KOLMO kafe — behavioural JS.
 * Plain ES2019, no build step. Config arrives on <body data-*>.
 */
(function () {
  'use strict';

  var body = document.body;
  var $ = function (sel, root) {
    return (root || document).querySelector(sel);
  };
  var $$ = function (sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  };

  var SCHEDULE = {
    timezone: 'Europe/Prague',
    week: [
      { open: '10:00', close: '20:00' },
      { open: '14:00', close: '20:00' },
      { open: '14:00', close: '20:00' },
      { open: '14:00', close: '20:00' },
      { open: '14:00', close: '20:00' },
      { open: '14:00', close: '20:00' },
      { open: '10:00', close: '20:00' },
    ],
  };

  function parseTime(value) {
    var parts = value.split(':').map(Number);
    return parts[0] * 60 + parts[1];
  }

  function formatTime(value) {
    var parts = value.split(':').map(Number);
    return parts[0] + ':' + String(parts[1]).padStart(2, '0');
  }

  function pragueClock(date) {
    var parts = new Intl.DateTimeFormat('en-US', {
      timeZone: SCHEDULE.timezone,
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).formatToParts(date);
    var get = function (type) {
      var hit = parts.find(function (p) {
        return p.type === type;
      });
      return hit ? hit.value : '';
    };
    var dayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    return {
      day: dayMap[get('weekday')] || 0,
      minutes: parseTime(get('hour') + ':' + get('minute')),
    };
  }

  function evaluate(now) {
    var clock = pragueClock(now || new Date());
    var period = SCHEDULE.week[clock.day];
    if (!period) {
      return { isOpen: false, label: 'Zavřeno', ariaLabel: 'Právě zavřeno' };
    }
    var openM = parseTime(period.open);
    var closeM = parseTime(period.close);
    if (clock.minutes >= openM && clock.minutes < closeM) {
      return {
        isOpen: true,
        label: 'Otevřeno',
        ariaLabel: 'Právě otevřeno, zavírá v ' + formatTime(period.close),
      };
    }
    if (clock.minutes < openM) {
      return {
        isOpen: false,
        label: 'Zavřeno',
        ariaLabel: 'Právě zavřeno, dnes otevírá v ' + formatTime(period.open),
      };
    }
    var next = SCHEDULE.week[(clock.day + 1) % 7];
    return {
      isOpen: false,
      label: 'Zavřeno',
      ariaLabel: 'Právě zavřeno, zítra otevírá v ' + formatTime(next.open),
    };
  }

  function paintOpen() {
    var status = evaluate();
    $$('[data-open-status]').forEach(function (el) {
      var dot = el.querySelector('[data-open-dot]');
      var label = el.querySelector('[data-open-label]');
      el.classList.toggle('is-open', status.isOpen);
      el.classList.toggle('is-closed', !status.isOpen);
      if (dot) {
        dot.classList.toggle('is-open', status.isOpen);
        dot.classList.toggle('is-closed', !status.isOpen);
      }
      if (label) label.textContent = status.label;
      el.setAttribute('aria-label', status.ariaLabel);
    });
  }

  (function nav() {
    var btn = $('[data-nav-toggle]');
    var panel = $('[data-nav-panel]');
    if (!btn || !panel) return;
    btn.addEventListener('click', function () {
      var open = panel.hasAttribute('hidden');
      if (open) {
        panel.removeAttribute('hidden');
        panel.classList.remove('hidden');
        panel.classList.add('block');
        btn.setAttribute('aria-expanded', 'true');
        btn.textContent = 'Zavřít';
      } else {
        panel.setAttribute('hidden', '');
        panel.classList.add('hidden');
        panel.classList.remove('block');
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = 'Menu';
      }
    });
  })();

  /* Cookie consent — necessary always; analytics/marketing only after yes. */
  (function cookies() {
    var SITE_ID = 'kolmokafe';
    var KEY = 'cookie-consent:' + SITE_ID;
    var MAX_AGE_MS = 13 * 30 * 24 * 60 * 60 * 1000;
    var banner = $('[data-cookie-banner]');
    if (!banner) return;

    var simple = $('[data-cookie-simple]', banner);
    var detail = $('[data-cookie-detail]', banner);
    var analytics = $('[data-cookie-analytics]', banner);
    var marketing = $('[data-cookie-marketing]', banner);
    var gaId = body.getAttribute('data-ga');

    function read() {
      try {
        var raw = localStorage.getItem(KEY);
        if (!raw) return null;
        var parsed = JSON.parse(raw);
        if (!parsed || parsed.necessary !== true || !parsed.updatedAt) return null;
        var age = Date.now() - Date.parse(parsed.updatedAt);
        if (!isFinite(age) || age > MAX_AGE_MS) {
          localStorage.removeItem(KEY);
          return null;
        }
        return parsed;
      } catch (e) {
        return null;
      }
    }

    function write(analyticsOn, marketingOn) {
      var value = {
        necessary: true,
        analytics: !!analyticsOn,
        marketing: !!marketingOn,
        updatedAt: new Date().toISOString(),
      };
      try {
        localStorage.setItem(KEY, JSON.stringify(value));
      } catch (e) {}
      if (value.analytics) loadGA();
      return value;
    }

    function loadGA() {
      if (!gaId) return;
      if (window.__gaLoaded) return;
      window.__gaLoaded = true;
      var s = document.createElement('script');
      s.async = true;
      s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(gaId);
      document.head.appendChild(s);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', gaId, { anonymize_ip: true });
    }

    function showBanner(simpleMode) {
      banner.hidden = false;
      if (simple) simple.hidden = !simpleMode;
      if (detail) detail.hidden = !!simpleMode;
    }

    function hideBanner() {
      banner.hidden = true;
    }

    var existing = read();
    if (existing) {
      hideBanner();
      if (existing.analytics) loadGA();
    } else {
      showBanner(true);
    }

    banner.addEventListener('click', function (e) {
      var btn = e.target.closest(
        '[data-cookie-accept],[data-cookie-reject],[data-cookie-settings],[data-cookie-save]',
      );
      if (!btn) return;
      if (btn.hasAttribute('data-cookie-accept')) {
        write(true, true);
        hideBanner();
      } else if (btn.hasAttribute('data-cookie-reject')) {
        write(false, false);
        hideBanner();
      } else if (btn.hasAttribute('data-cookie-settings')) {
        showBanner(false);
      } else if (btn.hasAttribute('data-cookie-save')) {
        write(analytics && analytics.checked, marketing && marketing.checked);
        hideBanner();
      }
    });

    $$('[data-cookie-reset]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        try {
          localStorage.removeItem(KEY);
        } catch (e) {}
        showBanner(true);
      });
    });
  })();

  /* Slow ambient grid drift — random cardinal directions, paused off-screen / reduced-motion.
   * Easter egg: every 100th direction change, the grid slides behind a corner, then re-enters. */
  (function gridDrift() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var grids = $$('.kolmo-grid-lines');
    if (!grids.length) return;

    var dirs = [
      { x: 1, y: 0 },
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: -1 },
    ];
    var dir = dirs[(Math.random() * dirs.length) | 0];
    var x = 0;
    var y = 0;
    var speed = 6;
    var fleeSpeed = 160;
    var enterSpeed = 120;
    var eggEvery = /(?:\?|&)egg(?:&|=|$)/.test(location.search) ? 2 : 100;
    var moves = eggEvery === 2 ? eggEvery - 1 : 0;
    var eggPreview = eggEvery === 2;
    var mode = 'drift';
    var last = 0;
    var nextChange = 0;
    var goneUntil = 0;
    var fleeAxis = 'x';
    var running = true;
    var raf = 0;

    function exitDistance() {
      return Math.max(window.innerWidth, window.innerHeight, 900) * 1.35;
    }

    function wrapDrift() {
      if (x > 288 || x < -288) x = ((x % 288) + 288) % 288;
      if (y > 288 || y < -288) y = ((y % 288) + 288) % 288;
    }

    function pickDir(countMove) {
      var next;
      do {
        next = dirs[(Math.random() * dirs.length) | 0];
      } while (next.x === dir.x && next.y === dir.y);
      dir = next;
      if (countMove === false) return;
      moves += 1;
      if (moves % eggEvery === 0) {
        fleeAxis = dir.x !== 0 ? 'x' : 'y';
        mode = 'flee';
      }
    }

    function paint() {
      var sx = x.toFixed(2) + 'px';
      var sy = y.toFixed(2) + 'px';
      for (var i = 0; i < grids.length; i++) {
        grids[i].style.setProperty('--grid-x', sx);
        grids[i].style.setProperty('--grid-y', sy);
      }
    }

    function tick(now) {
      if (!running) return;
      if (!last) {
        last = now;
        nextChange = eggPreview
          ? now + 2500
          : now + 7000 + Math.random() * 9000;
      }
      var dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      var exitAt = exitDistance();

      if (mode === 'flee') {
        x += dir.x * fleeSpeed * dt;
        y += dir.y * fleeSpeed * dt;
        if (Math.abs(fleeAxis === 'x' ? x : y) >= exitAt) {
          mode = 'gone';
          goneUntil = now + 1400 + Math.random() * 1800;
        }
      } else if (mode === 'gone') {
        if (now >= goneUntil) {
          /* Re-enter from the opposite edge — still fully opaque, just peeking back. */
          if (fleeAxis === 'x') {
            x = dir.x > 0 ? -exitAt : exitAt;
            y = ((y % 288) + 288) % 288;
          } else {
            y = dir.y > 0 ? -exitAt : exitAt;
            x = ((x % 288) + 288) % 288;
          }
          mode = 'enter';
          nextChange = now + 7000 + Math.random() * 9000;
        }
      } else if (mode === 'enter') {
        x += dir.x * enterSpeed * dt;
        y += dir.y * enterSpeed * dt;
        var onStage =
          fleeAxis === 'x'
            ? (dir.x > 0 ? x >= 0 : x <= 0)
            : (dir.y > 0 ? y >= 0 : y <= 0);
        if (onStage) {
          wrapDrift();
          mode = 'drift';
        }
      } else {
        if (now >= nextChange) {
          pickDir();
          nextChange = now + 6000 + Math.random() * 10000;
        }
        if (mode === 'drift') {
          x += dir.x * speed * dt;
          y += dir.y * speed * dt;
          wrapDrift();
        }
      }

      paint();
      raf = requestAnimationFrame(tick);
    }

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        running = false;
        if (raf) cancelAnimationFrame(raf);
        raf = 0;
        last = 0;
      } else if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    });

    raf = requestAnimationFrame(tick);
  })();

  /* Map app picker — Google / Apple / Waze / Mapy.com */
  (function mapPicker() {
    var root = $('[data-map-picker]');
    if (!root) return;
    var panel = $('.kolmo-map-picker-panel', root);
    var openers = $$('[data-map-open]');
    if (!openers.length) return;
    var lastFocus = null;

    function openPicker(e) {
      if (e) e.preventDefault();
      lastFocus = document.activeElement;
      root.hidden = false;
      document.documentElement.style.overflow = 'hidden';
      if (panel) panel.focus();
    }

    function closePicker() {
      if (root.hidden) return;
      root.hidden = true;
      document.documentElement.style.overflow = '';
      if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
    }

    openers.forEach(function (el) {
      el.addEventListener('click', openPicker);
    });

    $$('[data-map-picker-close]', root).forEach(function (el) {
      el.addEventListener('click', closePicker);
    });

    $$('[data-map-app]', root).forEach(function (el) {
      el.addEventListener('click', function () {
        closePicker();
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !root.hidden) {
        e.preventDefault();
        closePicker();
      }
    });
  })();

  paintOpen();
  setInterval(paintOpen, 60000);
})();
