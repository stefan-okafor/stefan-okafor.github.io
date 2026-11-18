/* Simple, accessible interactions. Everything works on static GitHub Pages. */
document.documentElement.classList.add('js');

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

// Light theme is the default; a visitor may save their explicit choice.
const themeButton = $('#theme-toggle');
const storedTheme = (() => { try { return localStorage.getItem('io-theme-v3'); } catch { return null; } })();
const startingTheme = storedTheme === 'dark' ? 'dark' : 'light';
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeButton?.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#080b11' : '#f8fafb');
}
setTheme(startingTheme);
themeButton?.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(next);
  try { localStorage.setItem('io-theme-v3', next); } catch {}
});

// Mobile navigation.
const menuToggle = $('#menu-toggle');
const navLinks = $('#nav-links');
function closeMenu() {
  navLinks?.classList.remove('is-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.setAttribute('aria-label', 'Open navigation menu');
}
menuToggle?.addEventListener('click', () => {
  const opening = !navLinks.classList.contains('is-open');
  navLinks.classList.toggle('is-open', opening);
  menuToggle.setAttribute('aria-expanded', String(opening));
  menuToggle.setAttribute('aria-label', opening ? 'Close navigation menu' : 'Open navigation menu');
});
$$('.nav-links a').forEach(link => link.addEventListener('click', closeMenu));
window.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

// Interactive conceptual network demo — not production telemetry.
const nodeInfo = {
  gateway: { title: 'Gateway / routing', description: 'Routes traffic between network segments and connected systems.' },
  switch: { title: 'Access switch / VLANs', description: 'Connects endpoints using configured access and trunk interfaces.' },
  monitor: { title: 'Monitoring / visibility', description: 'Observes device availability and helps surface network issues.' },
  client: { title: 'Endpoints / users', description: 'Devices and people rely on a consistent, reachable network.' },
  server: { title: 'Server / services', description: 'Hosts the applications and services that the environment depends on.' },
  security: { title: 'Access / authentication', description: 'Protects the network with identity and authorization controls.' }
};
$$('.node[data-node]').forEach(node => {
  node.addEventListener('click', () => {
    $$('.node[data-node]').forEach(other => {
      other.classList.remove('is-selected');
      other.setAttribute('aria-pressed', 'false');
    });
    node.classList.add('is-selected');
    node.setAttribute('aria-pressed', 'true');
    const info = nodeInfo[node.dataset.node];
    if (info) {
      $('#inspector-title').textContent = info.title;
      $('#inspector-description').textContent = info.description;
    }
  });
});

// Project filters.
const filterButtons = $$('.filter-btn');
filterButtons.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  filterButtons.forEach(item => {
    item.classList.toggle('active', item === button);
    item.setAttribute('aria-pressed', String(item === button));
  });
  $$('.project-card[data-category]').forEach(card => {
    card.hidden = category !== 'all' && card.dataset.category !== category;
  });
}));

// Copy email, with fallback for file:// previews and restricted clipboard environments.
const copyEmail = $('#copy-email');
copyEmail?.addEventListener('click', async () => {
  const email = 'iokafor569@gmail.com';
  try {
    await navigator.clipboard.writeText(email);
    copyEmail.innerHTML = 'Email copied <span aria-hidden="true">✓</span>';
    setTimeout(() => { copyEmail.innerHTML = 'Copy email <span aria-hidden="true">⧉</span>'; }, 2100);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});

// Animated section reveals: keep content visible if IntersectionObserver is unavailable.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries, io) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });
  $$('.reveal').forEach(item => observer.observe(item));
} else {
  $$('.reveal').forEach(item => item.classList.add('is-visible'));
}
$('#year').textContent = new Date().getFullYear();
