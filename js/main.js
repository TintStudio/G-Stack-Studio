/**
 * G-Stack Studio - Core Interactive Scripts
 * Handles mobile drawer, FAQ accordions, pricing billing toggle,
 * interactive architecture preview, and ROI calculator.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons if available
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 2. Mobile Navigation Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');

  if (mobileMenuBtn && mobileMenuDrawer) {
    const toggleMobileMenu = (open) => {
      if (open) {
        mobileMenuDrawer.classList.remove('translate-x-full');
        if (mobileMenuBackdrop) mobileMenuBackdrop.classList.remove('hidden', 'opacity-0');
        document.body.style.overflow = 'hidden';
      } else {
        mobileMenuDrawer.classList.add('translate-x-full');
        if (mobileMenuBackdrop) mobileMenuBackdrop.classList.add('hidden', 'opacity-0');
        document.body.style.overflow = '';
      }
    };

    mobileMenuBtn.addEventListener('click', () => toggleMobileMenu(true));
    if (mobileMenuClose) mobileMenuClose.addEventListener('click', () => toggleMobileMenu(false));
    if (mobileMenuBackdrop) mobileMenuBackdrop.addEventListener('click', () => toggleMobileMenu(false));

    // Close on clicking any link inside drawer
    mobileMenuDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => toggleMobileMenu(false));
    });
  }

  // 3. Interactive FAQ Accordion
  const accordionItems = document.querySelectorAll('.faq-item');
  accordionItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.accordion-content');
    const icon = item.querySelector('.faq-icon');

    if (trigger && content) {
      trigger.addEventListener('click', () => {
        const isOpen = content.classList.contains('active');

        // Close other items if desired
        accordionItems.forEach((other) => {
          if (other !== item) {
            const otherContent = other.querySelector('.accordion-content');
            const otherIcon = other.querySelector('.faq-icon');
            if (otherContent) otherContent.classList.remove('active');
            if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
          }
        });

        // Toggle current item
        if (isOpen) {
          content.classList.remove('active');
          if (icon) icon.style.transform = 'rotate(0deg)';
        } else {
          content.classList.add('active');
          if (icon) icon.style.transform = 'rotate(180deg)';
        }
      });
    }
  });

  // 4. Interactive Architecture Mode Selector (on index & features)
  const archButtons = document.querySelectorAll('.arch-mode-btn');
  const archViews = document.querySelectorAll('.arch-view');

  if (archButtons.length > 0 && archViews.length > 0) {
    archButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-mode');

        // Update active button state
        archButtons.forEach((b) => {
          b.classList.remove('bg-sky-500/20', 'text-sky-400', 'border-sky-500/40');
          b.classList.add('bg-zinc-900/60', 'text-zinc-400', 'border-zinc-800');
        });
        btn.classList.add('bg-sky-500/20', 'text-sky-400', 'border-sky-500/40');
        btn.classList.remove('bg-zinc-900/60', 'text-zinc-400', 'border-zinc-800');

        // Show target view
        archViews.forEach((view) => {
          if (view.getAttribute('data-view') === mode) {
            view.classList.remove('hidden');
          } else {
            view.classList.add('hidden');
          }
        });
      });
    });
  }

  // 5. Pricing Toggle (Monthly vs Lifetime / Annual)
  const pricingBillingToggle = document.getElementById('pricing-toggle');
  const priceElements = document.querySelectorAll('.price-val');
  const periodElements = document.querySelectorAll('.price-period');
  const badgeDiscount = document.getElementById('discount-badge');

  if (pricingBillingToggle && priceElements.length > 0) {
    pricingBillingToggle.addEventListener('change', (e) => {
      const isLifetime = e.target.checked;

      priceElements.forEach((el) => {
        const monthly = el.getAttribute('data-monthly');
        const lifetime = el.getAttribute('data-lifetime');
        el.textContent = isLifetime ? lifetime : monthly;
      });

      periodElements.forEach((el) => {
        const periodText = isLifetime ? 'one-time payment' : '/ month billed monthly';
        el.textContent = periodText;
      });

      if (badgeDiscount) {
        badgeDiscount.classList.toggle('ring-sky-400', isLifetime);
      }
    });
  }

  // 6. Interactive ROI Calculator (on pricing & index)
  const clientSlider = document.getElementById('client-slider');
  const clientCountDisplay = document.getElementById('client-count');
  const hoursSavedDisplay = document.getElementById('hours-saved');
  const valueGeneratedDisplay = document.getElementById('value-generated');
  const hourlyRateInput = document.getElementById('hourly-rate-input');

  const updateROI = () => {
    if (!clientSlider) return;
    const clients = parseInt(clientSlider.value, 10);
    const rate = hourlyRateInput ? parseFloat(hourlyRateInput.value) || 125 : 125;

    // Manual stacking takes ~8.5 hours per client. G-Stack takes 0.033 hrs (2 mins).
    const hoursSaved = Math.round(clients * 8.5);
    const valueSaved = Math.round(hoursSaved * rate);

    if (clientCountDisplay) clientCountDisplay.textContent = clients;
    if (hoursSavedDisplay) hoursSavedDisplay.textContent = hoursSaved.toLocaleString() + ' hrs';
    if (valueGeneratedDisplay) valueGeneratedDisplay.textContent = '$' + valueSaved.toLocaleString();
  };

  if (clientSlider) {
    clientSlider.addEventListener('input', updateROI);
    if (hourlyRateInput) hourlyRateInput.addEventListener('input', updateROI);
    updateROI();
  }

  // 7. Interactive Live Progress Simulation Card (Hero / Preview)
  const simProgress = document.getElementById('sim-progress-bar');
  const simPercent = document.getElementById('sim-percent');
  const simAssetList = document.getElementById('sim-asset-list');

  if (simProgress && simPercent && simAssetList) {
    const assets = [
      { name: 'Google Drive Root Authority Hub', time: 300 },
      { name: '13 Subfolder Silo Taxonomy', time: 600 },
      { name: 'Master Google Sheets Directory (Synced)', time: 1000 },
      { name: 'High-Converting Google Site (Published)', time: 1400 },
      { name: 'Google Docs Keyword Silo (LSI Injected)', time: 1800 },
      { name: 'Google MyMaps with KML Driving Directions', time: 2200 },
      { name: 'Google Calendar Geotagged Events', time: 2600 },
      { name: 'Google PDF Authority Whitepaper', time: 3000 },
      { name: 'Circular Silo Interlinks Connected', time: 3400 },
      { name: 'White-Label Client Web Portal Generated', time: 3800 }
    ];

    let currentStep = 0;
    const runSimulationStep = () => {
      if (currentStep < assets.length) {
        const item = assets[currentStep];
        const percent = Math.round(((currentStep + 1) / assets.length) * 100);

        simProgress.style.width = percent + '%';
        simPercent.textContent = percent + '%';

        const row = document.createElement('div');
        row.className = 'flex items-center justify-between text-xs py-1 px-2 rounded bg-zinc-900/60 border border-zinc-800/80 text-zinc-300 animate-fadeIn';
        row.innerHTML = `
          <span class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span class="font-mono text-zinc-200">${item.name}</span>
          </span>
          <span class="text-emerald-400 font-mono text-[10px]">LIVE 200 OK</span>
        `;

        // Keep last 4 items visible for compact elegance
        if (simAssetList.children.length >= 4) {
          simAssetList.removeChild(simAssetList.firstElementChild);
        }
        simAssetList.appendChild(row);

        currentStep++;
        setTimeout(runSimulationStep, 450);
      } else {
        // Reset after a pause
        setTimeout(() => {
          simAssetList.innerHTML = '';
          currentStep = 0;
          simProgress.style.width = '5%';
          simPercent.textContent = '5%';
          runSimulationStep();
        }, 3500);
      }
    };

    setTimeout(runSimulationStep, 1000);
  }
});

// Toast notification helper
function showToast(message, type = 'success') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  const bgClass = type === 'success' ? 'bg-zinc-900 border-sky-500/50 text-white' : 'bg-red-950 border-red-500/50 text-red-200';
  toast.className = `flex items-center gap-3 px-4 py-3 rounded-xl border ${bgClass} shadow-2xl shadow-sky-950/40 text-sm font-medium transform transition-all duration-300 translate-y-2 opacity-0 pointer-events-auto backdrop-blur-md`;
  toast.innerHTML = `
    <span class="w-2 h-2 rounded-full ${type === 'success' ? 'bg-sky-400' : 'bg-red-400'} animate-ping"></span>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  // Trigger enter
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  });

  // Auto remove
  setTimeout(() => {
    toast.classList.add('translate-y-2', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
