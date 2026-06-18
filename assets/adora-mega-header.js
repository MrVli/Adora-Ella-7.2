(() => {
  const headers = document.querySelectorAll('[data-adora-mega-header]');

  headers.forEach((header) => {
    if (header.dataset.adoraMegaHeaderReady === 'true') return;
    header.dataset.adoraMegaHeaderReady = 'true';

    const trigger = header.querySelector('[data-adora-mega-trigger]');
    const mega = header.querySelector('[data-adora-mega-menu]');
    const drawer = header.querySelector('[data-adora-mega-drawer]');
    const drawerOverlay = header.querySelector('[data-adora-mega-drawer-overlay]');
    const drawerOpeners = header.querySelectorAll('[data-adora-mega-drawer-open]');
    const drawerClosers = header.querySelectorAll('[data-adora-mega-drawer-close]');
    let closeTimer;

    const openMega = () => {
      if (!trigger || !mega || window.matchMedia('(max-width: 989px)').matches) return;
      clearTimeout(closeTimer);
      header.classList.add('is-mega-open');
      trigger.setAttribute('aria-expanded', 'true');
      mega.setAttribute('aria-hidden', 'false');
    };

    const closeMega = () => {
      if (!trigger || !mega) return;
      header.classList.remove('is-mega-open');
      trigger.setAttribute('aria-expanded', 'false');
      mega.setAttribute('aria-hidden', 'true');
    };

    const queueCloseMega = () => {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(closeMega, 120);
    };

    if (trigger && mega) {
      trigger.addEventListener('mouseenter', openMega);
      trigger.addEventListener('focus', openMega);
      trigger.addEventListener('click', (event) => {
        event.preventDefault();
        header.classList.contains('is-mega-open') ? closeMega() : openMega();
      });

      header.addEventListener('mouseleave', queueCloseMega);
      header.addEventListener('focusout', (event) => {
        if (!header.contains(event.relatedTarget)) queueCloseMega();
      });
      mega.addEventListener('mouseenter', () => clearTimeout(closeTimer));
    }

    const activateTab = (tab) => {
      const group = tab.closest('[data-adora-mega-tab-scope]') || header;
      const target = tab.getAttribute('data-adora-mega-tab');
      if (!target) return;

      group.querySelectorAll('[data-adora-mega-tab]').forEach((item) => {
        item.setAttribute('aria-selected', item === tab ? 'true' : 'false');
      });

      group.querySelectorAll('[data-adora-mega-panel]').forEach((panel) => {
        panel.classList.toggle('is-active', panel.getAttribute('data-adora-mega-panel') === target);
      });
    };

    header.querySelectorAll('[data-adora-mega-tab]').forEach((tab) => {
      tab.addEventListener('click', () => activateTab(tab));
      tab.addEventListener('keydown', (event) => {
        if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
        const tabs = Array.from((tab.closest('[data-adora-mega-tab-scope]') || header).querySelectorAll('[data-adora-mega-tab]'));
        const direction = event.key === 'ArrowRight' ? 1 : -1;
        const next = tabs[(tabs.indexOf(tab) + direction + tabs.length) % tabs.length];
        event.preventDefault();
        next.focus();
        activateTab(next);
      });
    });

    const openDrawer = () => {
      if (!drawer) return;
      header.classList.add('is-drawer-open');
      drawer.setAttribute('aria-hidden', 'false');
      drawerOpeners.forEach((button) => button.setAttribute('aria-expanded', 'true'));
      document.body.classList.add('adora-mega-header-lock');
      const firstFocusable = drawer.querySelector('button, a, summary, input, [tabindex]:not([tabindex="-1"])');
      if (firstFocusable) firstFocusable.focus({ preventScroll: true });
    };

    const closeDrawer = () => {
      if (!drawer) return;
      header.classList.remove('is-drawer-open');
      drawer.setAttribute('aria-hidden', 'true');
      drawerOpeners.forEach((button) => button.setAttribute('aria-expanded', 'false'));
      document.body.classList.remove('adora-mega-header-lock');
    };

    drawerOpeners.forEach((button) => button.addEventListener('click', openDrawer));
    drawerClosers.forEach((button) => button.addEventListener('click', closeDrawer));
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      closeMega();
      closeDrawer();
    });
  });
})();
