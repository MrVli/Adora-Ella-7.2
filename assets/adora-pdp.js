(() => {
  const sections = document.querySelectorAll('[data-adora-pdp-section]');
  if (!sections.length) return;

  sections.forEach((section) => {
    const sticky = section.querySelector('[data-adora-pdp-sticky]');
    const heroCta = section.querySelector('[data-adora-pdp-hero-cta]');
    const variantSelect = section.querySelector('[data-adora-pdp-variant-select]');
    const stickyVariant = section.querySelector('[data-adora-pdp-sticky-variant]');
    const price = section.querySelector('[data-adora-pdp-price]');
    const compare = section.querySelector('[data-adora-pdp-compare]');
    const stickyPrice = section.querySelector('[data-adora-pdp-sticky-price]');

    if (variantSelect) {
      variantSelect.addEventListener('change', () => {
        const option = variantSelect.options[variantSelect.selectedIndex];
        if (!option) return;
        if (stickyVariant) stickyVariant.value = option.value;
        if (price && option.dataset.price) price.textContent = option.dataset.price;
        if (stickyPrice && option.dataset.price) stickyPrice.textContent = option.dataset.price;
        if (compare) {
          compare.textContent = option.dataset.compare || '';
          compare.hidden = !option.dataset.compare;
        }
      });
    }

    if (sticky && heroCta && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          sticky.hidden = entry.isIntersecting;
        });
      }, { threshold: 0.05 });
      observer.observe(heroCta);
    } else if (sticky) {
      sticky.hidden = false;
    }
  });
})();
