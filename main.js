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
   * Easter egg: every 100th direction change, the grid flees off-screen and vanishes, then returns. */
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
    var opacity = 1;
    var speed = 6;
    var fleeSpeed = 110;
    var moves = 0;
    var mode = 'drift';
    var last = 0;
    var nextChange = 0;
    var goneUntil = 0;
    var running = true;
    var raf = 0;

    function pickDir(countMove) {
      var next;
      do {
        next = dirs[(Math.random() * dirs.length) | 0];
      } while (next.x === dir.x && next.y === dir.y);
      dir = next;
      if (countMove === false) return;
      moves += 1;
      if (moves % 100 === 0) mode = 'flee';
    }

    function paint() {
      var sx = x.toFixed(2) + 'px';
      var sy = y.toFixed(2) + 'px';
      var op = String(Math.max(0, Math.min(1, opacity)));
      for (var i = 0; i < grids.length; i++) {
        grids[i].style.setProperty('--grid-x', sx);
        grids[i].style.setProperty('--grid-y', sy);
        grids[i].style.setProperty('--grid-opacity', op);
      }
    }

    function tick(now) {
      if (!running) return;
      if (!last) {
        last = now;
        nextChange = now + 7000 + Math.random() * 9000;
      }
      var dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      if (mode === 'flee') {
        x += dir.x * fleeSpeed * dt;
        y += dir.y * fleeSpeed * dt;
        opacity = Math.max(0, opacity - dt * 0.55);
        if (opacity <= 0 && Math.abs(x) + Math.abs(y) > 520) {
          mode = 'gone';
          goneUntil = now + 1800 + Math.random() * 2200;
        }
      } else if (mode === 'gone') {
        if (now >= goneUntil) {
          x = 0;
          y = 0;
          opacity = 0;
          mode = 'return';
          pickDir(false);
          nextChange = now + 7000 + Math.random() * 9000;
        }
      } else if (mode === 'return') {
        opacity = Math.min(1, opacity + dt * 0.45);
        x += dir.x * speed * dt;
        y += dir.y * speed * dt;
        if (x > 288 || x < -288) x = ((x % 288) + 288) % 288;
        if (y > 288 || y < -288) y = ((y % 288) + 288) % 288;
        if (opacity >= 1) mode = 'drift';
      } else {
        if (now >= nextChange) {
          pickDir();
          nextChange = now + 6000 + Math.random() * 10000;
        }
        if (mode === 'drift') {
          x += dir.x * speed * dt;
          y += dir.y * speed * dt;
          if (x > 288 || x < -288) x = ((x % 288) + 288) % 288;
          if (y > 288 || y < -288) y = ((y % 288) + 288) % 288;
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

  paintOpen();
  setInterval(paintOpen, 60000);
})();
