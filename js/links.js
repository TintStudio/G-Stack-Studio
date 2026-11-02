// ===== Edit your links here (one place for the whole site) =====
window.GSTACK_LINKS = {
  gumroadMonthly: "https://gstackstudio.gumroad.com/l/g-stack-Studio-Monthly",        // monthly plans (Membership)
  gumroadLifetime: "https://gstackstudio.gumroad.com/l/g-stack-studio-lifetime-plan", // lifetime (Versions)
  whatsapp: "https://wa.me/923028981089",      // wa.me/ + your number, digits only
  whatsappText: "+92 302 8981089",             // number as people should see it
  youtube: "https://www.youtube.com/@gstackstudio",
  facebook: "https://www.facebook.com/rana.salman.razzaq/",              // empty = Facebook box hidden
  linkedin: "https://www.linkedin.com/in/salman-razzaq-9bb5251a5/"     // empty = LinkedIn box hidden
};

document.addEventListener('DOMContentLoaded', () => {
  const L = window.GSTACK_LINKS;

  // plain links: <a data-link="youtube">, text: <span data-link-text="whatsappText">
  document.querySelectorAll('[data-link]').forEach((a) => {
    if (!L[a.dataset.link] && a.hasAttribute('data-hide-empty')) { a.classList.add('hidden'); return; }
    a.href = L[a.dataset.link];
    a.target = '_blank';
    a.rel = 'noopener';
  });
  document.querySelectorAll('[data-link-text]').forEach((el) => { el.textContent = L[el.dataset.linkText]; });

  // plan buttons follow the Monthly / Lifetime switch
  const toggle = document.getElementById('pricing-toggle');
  const sync = () => {
    const life = !!(toggle && toggle.checked);
    document.querySelectorAll('[data-buy]').forEach((a) => {
      a.href = life ? L.gumroadLifetime : L.gumroadMonthly;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = life ? 'Get ' + a.dataset.buy + ' Lifetime' : 'Choose ' + a.dataset.buy;
    });
    document.querySelectorAll('[data-life-only]').forEach((el) => el.classList.toggle('hidden', !life));
    document.querySelectorAll('[data-month-only]').forEach((el) => el.classList.toggle('hidden', life));
  };
  if (toggle) toggle.addEventListener('change', sync);
  sync();

  // YouTube + WhatsApp in every footer
  const foot = document.querySelector('footer > div');
  if (foot) {
    const bar = document.createElement('div');
    bar.className = 'flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-8';
    bar.innerHTML =
      '<a href="' + L.youtube + '" target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-red-500/60 text-xs font-semibold text-zinc-200"><i data-lucide="play-circle" class="w-4 h-4 text-red-500"></i> Tutorials on YouTube</a>' +
      '<a href="' + L.whatsapp + '" target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/60 text-xs font-semibold text-zinc-200"><i data-lucide="message-circle" class="w-4 h-4 text-emerald-400"></i> WhatsApp ' + L.whatsappText + '</a>';
    foot.prepend(bar);
  }

  // floating WhatsApp button (team licenses / white label questions)
  const fab = document.createElement('a');
  fab.href = L.whatsapp;
  fab.target = '_blank';
  fab.rel = 'noopener';
  fab.setAttribute('aria-label', 'Chat with us on WhatsApp');
  fab.className = 'fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-[#1FA855] hover:bg-[#1b9a4d] shadow-xl shadow-black/40 flex items-center justify-center text-white';
  fab.innerHTML = '<i data-lucide="message-circle" class="w-7 h-7"></i>';
  document.body.appendChild(fab);

  if (window.lucide) window.lucide.createIcons();
});
