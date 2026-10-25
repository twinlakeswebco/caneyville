(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const toggle = document.getElementById('navtoggle');
  const nav = document.getElementById('nav');
  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    nav.dataset.open = 'false';
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    nav.dataset.open = String(open);
  });
  nav.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });
  window.matchMedia('(max-width: 700px)').addEventListener('change', closeMenu);

  const search = document.getElementById('bizsearch');
  const category = document.getElementById('bizcategory');
  const items = [...document.querySelectorAll('#dirgrid .biz')];
  const status = document.getElementById('dircount');
  const empty = document.getElementById('dirempty');
  const clear = document.getElementById('clearfilters');
  const normalize = text => text.toLocaleLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[’']/g, '');
  const records = items.map(element => ({element, text: normalize(element.textContent), category: element.dataset.cat}));
  const render = () => {
    const query = normalize(search.value.trim());
    let shown = 0;
    records.forEach(record => {
      const visible = (category.value === 'all' || record.category === category.value) && record.text.includes(query);
      record.element.hidden = !visible;
      if (visible) shown++;
    });
    status.textContent = shown === items.length ? `${shown} businesses` : `${shown} of ${items.length} businesses`;
    empty.hidden = shown !== 0;
    clear.hidden = query === '' && category.value === 'all';
  };
  const reset = () => {
    search.value = '';
    category.value = 'all';
    render();
    search.focus();
  };
  search.addEventListener('input', render);
  search.addEventListener('search', render);
  category.addEventListener('change', render);
  clear.addEventListener('click', reset);
  document.getElementById('emptyreset').addEventListener('click', reset);
  document.getElementById('directory-tools').hidden = false;
  render();
})();
