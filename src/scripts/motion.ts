const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

function reveal(): void {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (reduced || !('IntersectionObserver' in window)) return els.forEach((el) => el.classList.add('is-in'));
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }),
    { threshold: 0, rootMargin: "0px 0px -8% 0px" },
  );
  els.forEach((el) => io.observe(el));
}

function counters(): void {
  const els = document.querySelectorAll<HTMLElement>('[data-count]');
  const run = (el: HTMLElement): void => {
    const target = Number(el.dataset.count);
    if (reduced) return void (el.textContent = String(target));
    const start = performance.now();
    const tick = (now: number): void => {
      const t = Math.min((now - start) / 1600, 1);
      el.textContent = String(Math.round(target * (1 - Math.pow(1 - t, 4))));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { run(e.target as HTMLElement); io.unobserve(e.target); }
  }), { threshold: 0.6 });
  els.forEach((el) => io.observe(el));
}

function spotlight(): void {
  document.querySelectorAll<HTMLElement>('.spot').forEach((el) => {
    el.addEventListener('pointermove', (ev) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${ev.clientX - r.left}px`);
      el.style.setProperty('--my', `${ev.clientY - r.top}px`);
    });
  });
}

function header(): void {
  const el = document.querySelector<HTMLElement>('[data-header]');
  if (!el) return;
  const on = (): void => el.classList.toggle('is-scrolled', scrollY > 24);
  on();
  addEventListener('scroll', on, { passive: true });
}

reveal(); counters(); spotlight(); header();
