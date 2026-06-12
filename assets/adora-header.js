(() => {
  const headers = document.querySelectorAll('[data-adora-header]');

  if (!headers.length) {
    return;
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  headers.forEach((header) => {
    const isHomepage = header.dataset.homepage === 'true';
    const transparentEnabled = header.dataset.transparentHomepage === 'true';
    const hideOnDown = header.dataset.hideOnScrollDown === 'true';
    const showOnUp = header.dataset.showOnScrollUp === 'true';
    const solidAfterScroll = header.dataset.solidAfterScroll === 'true';
    const threshold = Number(header.dataset.scrollThreshold || 80);
    const drawerId = header.dataset.drawerId;
    const drawer = drawerId ? document.getElementById(drawerId) : null;
    const overlay = header.querySelector('[data-adora-header-overlay]');
    const burger = header.querySelector('[data-adora-header-burger]');
    const closeButtons = header.querySelectorAll('[data-adora-header-close]');
    const drawerLinks = drawer ? drawer.querySelectorAll('a') : [];
    let lastScrollY = window.scrollY;
    let ticking = false;
    let drawerOpen = false;

    const canBeTransparent = () => transparentEnabled && isHomepage;

    const setState = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      const pastThreshold = currentScrollY > threshold;

      header.classList.toggle('adora-header--transparent', canBeTransparent() && !pastThreshold && !drawerOpen);
      header.classList.toggle('adora-header--solid', !canBeTransparent() || drawerOpen || (pastThreshold && solidAfterScroll));
      header.classList.toggle('adora-header--scrolled', pastThreshold && solidAfterScroll);

      if (!drawerOpen && pastThreshold && scrollingDown && hideOnDown) {
        header.classList.add('adora-header--hidden');
        header.classList.remove('adora-header--visible');
      } else if (!scrollingDown && showOnUp) {
        header.classList.remove('adora-header--hidden');
        header.classList.add('adora-header--visible');
      }

      if (!pastThreshold) {
        header.classList.remove('adora-header--hidden', 'adora-header--scrolled');
        header.classList.add('adora-header--visible');
      }

      lastScrollY = Math.max(currentScrollY, 0);
      ticking = false;
    };

    const requestState = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(setState);
    };

    const setDrawer = (isOpen) => {
      if (!drawer || !burger) {
        return;
      }

      drawerOpen = isOpen;
      document.body.classList.toggle('adora-header-drawer-open', isOpen);
      header.classList.toggle('adora-header--drawer-open', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
      drawer.setAttribute('aria-hidden', String(!isOpen));

      if (overlay) {
        overlay.setAttribute('aria-hidden', String(!isOpen));
      }

      if (isOpen) {
        header.classList.remove('adora-header--hidden');
        header.classList.add('adora-header--visible');

        if (!prefersReducedMotion) {
          const firstLink = drawer.querySelector('a, button');
          if (firstLink) {
            window.setTimeout(() => firstLink.focus(), 120);
          }
        }
      } else {
        burger.focus({ preventScroll: true });
      }

      setState();
    };

    if (burger && drawer) {
      burger.addEventListener('click', () => setDrawer(!drawerOpen));
    }

    if (overlay) {
      overlay.addEventListener('click', () => setDrawer(false));
    }

    closeButtons.forEach((button) => {
      button.addEventListener('click', () => setDrawer(false));
    });

    drawerLinks.forEach((link) => {
      link.addEventListener('click', () => setDrawer(false));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && drawerOpen) {
        setDrawer(false);
      }
    });

    window.addEventListener('scroll', requestState, { passive: true });
    window.addEventListener('resize', requestState, { passive: true });
    setState();
  });
})();
