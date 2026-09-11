// Shared by the React page and its GitHub Pages export.
export function attachFaqMotion() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const rows = Array.from(document.querySelectorAll('.faq-entry')).map(element => ({
    element, summary: element.querySelector('summary'), animation: null, expanded: element.open,
  }));
  const change = (row, expanded) => {
    const start = row.element.getBoundingClientRect().height;
    row.expanded = expanded;
    if (row.animation) { row.animation.onfinish = null; row.animation.cancel(); }
    row.element.open = true;
    const end = expanded ? row.element.getBoundingClientRect().height : row.summary.getBoundingClientRect().height + 1;
    row.element.dataset.expanded = String(expanded);
    const finish = () => {
      row.element.open = expanded;
      row.element.style.overflow = '';
      row.animation = null;
    };
    if (reduceMotion.matches || !row.element.animate) { finish(); return; }
    row.element.style.overflow = 'hidden';
    row.animation = row.element.animate([{height: `${start}px`}, {height: `${end}px`}], {
      duration: 360, easing: 'cubic-bezier(.22,1,.36,1)',
    });
    row.animation.onfinish = finish;
  };
  const cleanups = rows.map(row => {
    const click = event => {
      event.preventDefault();
      const next = !row.expanded;
      if (next) rows.forEach(other => { if (other !== row && other.expanded) change(other, false); });
      change(row, next);
    };
    row.summary.addEventListener('click', click);
    return () => { row.summary.removeEventListener('click', click); row.animation?.cancel(); row.element.style.overflow = ''; };
  });
  return () => cleanups.forEach(cleanup => cleanup());
}
