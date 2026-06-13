(() => {
  const headers = document.querySelectorAll('[data-adora-header-overlay]');

  if (!headers.length) {
    return;
  }

  headers.forEach((header) => {
    const isHomepage = header.dataset.homepage === 'true';
    const transparentEnabled = header.dataset.transparentHomepage === 'true';
    const hideOnDown = header.dataset.hideOnScrollDown === 'true';
    const showOnUp = header.dataset.showOnScrollUp === 'true';
    const solidAfterScroll = header.dataset.solidAfterScroll === 'true';
    const threshold = Number(header.dataset.scrollThreshold || 80);
    const drawerId = header.dataset.drawerId;
    const drawer = drawerId ? document.getElementById(drawerId) : null;
    const burger = header.querySelector('[data-adora-header-overlay-burger]');
    const closeButton = header.querySelector('[data-adora-header-overlay-close]');
    const backdrop = header.querySelector('[data-adora-header-overlay-backdrop]');
    const drawerLinks = drawer ? drawer.querySelectorAll('a') : [];
    let lastScrollY = window.scrollY;
    let ticking = false;
    let drawerOpen = false;

    const canBeTransparent = () => isHomepage && transparentEnabled;

    const setHeaderState = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      const pastThreshold = currentScrollY > threshold;
      const scrollingDown = currentScrollY > lastScrollY;

      header.classList.toggle('adora-header-overlay--transparent', canBeTransparent() && !pastThreshold && !drawerOpen);
      header.classList.toggle('adora-header-overlay--solid', !canBeTransparent() || drawerOpen || (pastThreshold && solidAfterScroll));
      header.classList.toggle('adora-header-overlay--scrolled', pastThreshold && solidAfterScroll);

      if (!drawerOpen && pastThreshold && scrollingDown && hideOnDown) {
        header.classList.add('adora-header-overlay--hidden');
        header.classList.remove('adora-header-overlay--visible');
      } else if (!scrollingDown && showOnUp) {
        header.classList.remove('adora-header-overlay--hidden');
        header.classList.add('adora-header-overlay--visible');
      }

      if (!pastThreshold) {
        header.classList.remove('adora-header-overlay--hidden', 'adora-header-overlay--scrolled');
        header.classList.add('adora-header-overlay--visible');
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const requestHeaderState = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(setHeaderState);
    };

    const setDrawerState = (isOpen) => {
      if (!drawer || !burger) {
        return;
      }

      drawerOpen = isOpen;
      document.body.classList.toggle('adora-header-overlay-drawer-open', isOpen);
      header.classList.toggle('adora-header-overlay--drawer-open', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
      drawer.setAttribute('aria-hidden', String(!isOpen));

      if (backdrop) {
        backdrop.setAttribute('aria-hidden', String(!isOpen));
      }

      if (isOpen) {
        header.classList.remove('adora-header-overlay--hidden');
        header.classList.add('adora-header-overlay--visible');
        const firstFocusable = drawer.querySelector('a, button');
        if (firstFocusable) {
          window.setTimeout(() => firstFocusable.focus(), 80);
        }
      } else if (document.activeElement && drawer.contains(document.activeElement)) {
        burger.focus({ preventScroll: true });
      }

      setHeaderState();
    };

    if (burger && drawer) {
      burger.addEventListener('click', () => setDrawerState(!drawerOpen));
    }

    if (closeButton) {
      closeButton.addEventListener('click', () => setDrawerState(false));
    }

    if (backdrop) {
      backdrop.addEventListener('click', () => setDrawerState(false));
    }

    drawerLinks.forEach((link) => {
      link.addEventListener('click', () => setDrawerState(false));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && drawerOpen) {
        setDrawerState(false);
      }
    });

    window.addEventListener('scroll', requestHeaderState, { passive: true });
    window.addEventListener('resize', requestHeaderState, { passive: true });
    setHeaderState();
  });
})();
