(() => {
  const headers = document.querySelectorAll('[data-adora-header]');

  if (!headers.length) {
    return;
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const desktopQuery = window.matchMedia('(min-width: 990px)');

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
    const megaMenu = header.querySelector('[data-adora-mega-menu]');
    const megaTrigger = header.querySelector('[data-adora-mega-trigger]');
    const megaTabs = header.querySelectorAll('[data-adora-mega-tab]');
    const megaPanels = header.querySelectorAll('[data-adora-mega-panel]');
    let lastScrollY = window.scrollY;
    let ticking = false;
    let drawerOpen = false;
    let megaOpen = false;
    let closeMegaTimer;

    const canBeTransparent = () => transparentEnabled && isHomepage;

    const setMegaState = (isOpen) => {
      if (!megaMenu || !megaTrigger) {
        return;
      }

      const nextState = isOpen && desktopQuery.matches;
      megaOpen = nextState;
      header.classList.toggle('adora-header--mega-open', nextState);
      megaMenu.setAttribute('aria-hidden', String(!nextState));
      megaTrigger.setAttribute('aria-expanded', String(nextState));

      if (nextState) {
        header.classList.remove('adora-header--hidden');
        header.classList.add('adora-header--visible');
      }

      requestState();
    };

    const closeMegaSoon = () => {
      window.clearTimeout(closeMegaTimer);
      closeMegaTimer = window.setTimeout(() => setMegaState(false), 120);
    };

    const keepMegaOpen = () => {
      window.clearTimeout(closeMegaTimer);
      setMegaState(true);
    };

    const activateMegaTab = (tab) => {
      const target = tab.dataset.adoraMegaTab;

      megaTabs.forEach((item) => {
        const isActive = item === tab;
        item.classList.toggle('is-active', isActive);
        item.setAttribute('aria-selected', String(isActive));
      });

      megaPanels.forEach((panel) => {
        panel.classList.toggle('is-active', panel.dataset.adoraMegaPanel === target);
      });
    };

    const setState = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      const pastThreshold = currentScrollY > threshold;
      const forceSolid = drawerOpen || megaOpen;

      header.classList.toggle('adora-header--transparent', canBeTransparent() && !pastThreshold && !forceSolid);
      header.classList.toggle('adora-header--solid', !canBeTransparent() || forceSolid || (pastThreshold && solidAfterScroll));
      header.classList.toggle('adora-header--scrolled', pastThreshold && solidAfterScroll);

      if (megaOpen && (scrollingDown || !desktopQuery.matches)) {
        setMegaState(false);
      }

      if (!drawerOpen && !megaOpen && pastThreshold && scrollingDown && hideOnDown) {
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
        setMegaState(false);
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

    if (megaTrigger && megaMenu) {
      megaTrigger.addEventListener('mouseenter', keepMegaOpen);
      megaTrigger.addEventListener('focus', keepMegaOpen);
      megaTrigger.addEventListener('click', (event) => {
        if (desktopQuery.matches) {
          event.preventDefault();
          setMegaState(!megaOpen);
        }
      });

      header.addEventListener('mouseleave', closeMegaSoon);
      megaMenu.addEventListener('mouseenter', keepMegaOpen);
      megaMenu.addEventListener('mouseleave', closeMegaSoon);
      megaMenu.addEventListener('focusin', keepMegaOpen);
      megaMenu.addEventListener('focusout', () => {
        window.setTimeout(() => {
          if (!header.contains(document.activeElement)) {
            setMegaState(false);
          }
        }, 0);
      });
    }

    megaTabs.forEach((tab) => {
      tab.addEventListener('mouseenter', () => activateMegaTab(tab));
      tab.addEventListener('focus', () => activateMegaTab(tab));
      tab.addEventListener('click', () => activateMegaTab(tab));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        if (drawerOpen) {
          setDrawer(false);
        }

        if (megaOpen) {
          setMegaState(false);
          megaTrigger?.focus({ preventScroll: true });
        }
      }
    });

    const handleDesktopChange = () => {
      setMegaState(false);
      requestState();
    };

    if (desktopQuery.addEventListener) {
      desktopQuery.addEventListener('change', handleDesktopChange);
    } else if (desktopQuery.addListener) {
      desktopQuery.addListener(handleDesktopChange);
    }

    window.addEventListener('scroll', requestState, { passive: true });
    window.addEventListener('resize', requestState, { passive: true });
    setState();
  });
})();
