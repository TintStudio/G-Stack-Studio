/**
 * G-Stack Studio — Centralized Plan & Entitlement Data Source
 * Single Source of Truth for Plan Names, Billing Types, Prices, Quotas,
 * Cloud Access, Page Limits, Device Limits, Batch Limits, and Checkout URLs.
 * 
 * Complies strictly with the Website v3.0 Specification:
 * - Starter does NOT include Cloud Sites, cloud websites, or cloud publishing.
 * - Monthly plans are recurring subscriptions.
 * - Lifetime deals are one-time payments with monthly quota resets.
 * - Reseller program is a separate business partner offer.
 */

window.GSTACK_PRICING = {
  // Recurring Monthly Subscriptions
  monthly: {
    starter: {
      id: "starter-monthly",
      name: "Starter",
      badge: null,
      monthlyPrice: 49,
      billingCycle: "billed monthly",
      googleStacksPerMonth: 6,
      batchBuilderClients: 0,
      batchBuilderIncluded: false,
      cloudSitesPerMonth: 0,
      cloudPublishing: false,
      pagesPerSite: 0,
      devices: 1,
      devicePolicy: "1 PC license (HWID locked, 1 free transfer/30 days)",
      aiWriting: true,
      whiteLabelReports: true,
      supportedCloudHosts: [],
      checkoutUrl: "https://gstackstudio.gumroad.com/l/g-stack-Studio-Monthly",
      description: "For solo freelancers and consultants starting with Google entity stacks."
    },
    pro: {
      id: "pro-monthly",
      name: "Pro",
      badge: null,
      monthlyPrice: 99,
      billingCycle: "billed monthly",
      googleStacksPerMonth: 12,
      batchBuilderClients: 3,
      batchBuilderIncluded: true,
      cloudSitesPerMonth: 30,
      cloudPublishing: true,
      pagesPerSite: 50,
      devices: 1,
      devicePolicy: "1 PC license (HWID locked, 1 free transfer/30 days)",
      aiWriting: true,
      whiteLabelReports: true,
      supportedCloudHosts: ["AWS S3", "Backblaze B2", "Netlify", "Vercel", "GitHub Pages", "Cloudflare Pages", "Firebase", "Neocities"],
      checkoutUrl: "https://gstackstudio.gumroad.com/l/g-stack-Studio-Monthly",
      description: "Google stacks plus multi-cloud static authority website generation."
    },
    agency: {
      id: "agency-monthly",
      name: "Agency",
      badge: "Most Popular",
      monthlyPrice: 199,
      billingCycle: "billed monthly",
      googleStacksPerMonth: 70,
      batchBuilderClients: 5,
      batchBuilderIncluded: true,
      cloudSitesPerMonth: 100,
      cloudPublishing: true,
      pagesPerSite: 100,
      devices: 1,
      devicePolicy: "1 PC license (HWID locked, 1 free transfer/30 days)",
      aiWriting: true,
      whiteLabelReports: true,
      supportedCloudHosts: ["AWS S3", "Backblaze B2", "Netlify", "Vercel", "GitHub Pages", "Cloudflare Pages", "Firebase", "Neocities"],
      checkoutUrl: "https://gstackstudio.gumroad.com/l/g-stack-Studio-Monthly",
      description: "High-volume stacks and cloud sites for growing digital agencies."
    },
    ultimate: {
      id: "ultimate-monthly",
      name: "Ultimate",
      badge: "Maximum Power",
      monthlyPrice: 399,
      billingCycle: "billed monthly",
      googleStacksPerMonth: 100,
      batchBuilderClients: 10,
      batchBuilderIncluded: true,
      cloudSitesPerMonth: 200,
      cloudPublishing: true,
      pagesPerSite: 200,
      devices: 1,
      devicePolicy: "1 PC license (HWID locked, 1 free transfer/30 days)",
      aiWriting: true,
      whiteLabelReports: true,
      supportedCloudHosts: ["AWS S3", "Backblaze B2", "Netlify", "Vercel", "GitHub Pages", "Cloudflare Pages", "Firebase", "Neocities"],
      checkoutUrl: "https://gstackstudio.gumroad.com/l/g-stack-Studio-Monthly",
      description: "Enterprise limits and maximum batch speed for large-scale operations."
    }
  },

  // One-Time Lifetime License Deals (Quotas reset monthly forever)
  lifetime: {
    starter: {
      id: "starter-lifetime",
      name: "Starter Lifetime",
      badge: null,
      oneTimePrice: 299,
      billingCycle: "one-time payment",
      googleStacksPerMonth: 6,
      batchBuilderClients: 0,
      batchBuilderIncluded: false,
      cloudSitesPerMonth: 0,
      cloudPublishing: false,
      pagesPerSite: 0,
      devices: 1,
      devicePolicy: "1 PC activation (HWID locked, 1 free transfer/30 days)",
      lifetimeUpdates: true,
      aiWriting: true,
      whiteLabelReports: true,
      supportedCloudHosts: [],
      checkoutUrl: "https://gstackstudio.gumroad.com/l/g-stack-studio-lifetime-plan",
      description: "Pay once for perpetual access to Google Stack automation without recurring fees."
    },
    pro: {
      id: "pro-lifetime",
      name: "Pro Lifetime",
      badge: null,
      oneTimePrice: 449,
      billingCycle: "one-time payment",
      googleStacksPerMonth: 12,
      batchBuilderClients: 3,
      batchBuilderIncluded: true,
      cloudSitesPerMonth: 30,
      cloudPublishing: true,
      pagesPerSite: 30,
      devices: 1,
      devicePolicy: "1 PC activation (HWID locked, 1 free transfer/30 days)",
      lifetimeUpdates: true,
      aiWriting: true,
      whiteLabelReports: true,
      supportedCloudHosts: ["AWS S3", "Backblaze B2", "Netlify", "Vercel", "GitHub Pages", "Cloudflare Pages", "Firebase", "Neocities"],
      checkoutUrl: "https://gstackstudio.gumroad.com/l/g-stack-studio-lifetime-plan",
      description: "Lifetime Google stacks and static cloud publishing for professional consultants."
    },
    agency: {
      id: "agency-lifetime",
      name: "Agency Lifetime",
      badge: "Best Value",
      oneTimePrice: 999,
      billingCycle: "one-time payment",
      googleStacksPerMonth: 50,
      batchBuilderClients: 5,
      batchBuilderIncluded: true,
      cloudSitesPerMonth: 100,
      cloudPublishing: true,
      pagesPerSite: 100,
      devices: 2,
      devicePolicy: "2 PC device activations (independent machine locks and transfers)",
      lifetimeUpdates: true,
      aiWriting: true,
      whiteLabelReports: true,
      supportedCloudHosts: ["AWS S3", "Backblaze B2", "Netlify", "Vercel", "GitHub Pages", "Cloudflare Pages", "Firebase", "Neocities"],
      checkoutUrl: "https://gstackstudio.gumroad.com/l/g-stack-studio-lifetime-plan",
      description: "Our top-selling lifetime license with dual PC activations and heavy monthly quotas."
    },
    ultimate: {
      id: "ultimate-lifetime",
      name: "Ultimate Lifetime",
      badge: null,
      oneTimePrice: 1499,
      billingCycle: "one-time payment",
      googleStacksPerMonth: 100,
      batchBuilderClients: 10,
      batchBuilderIncluded: true,
      cloudSitesPerMonth: 200,
      cloudPublishing: true,
      pagesPerSite: 200,
      devices: 1,
      devicePolicy: "1 PC activation (HWID locked, 1 free transfer/30 days)",
      lifetimeUpdates: true,
      aiWriting: true,
      whiteLabelReports: true,
      supportedCloudHosts: ["AWS S3", "Backblaze B2", "Netlify", "Vercel", "GitHub Pages", "Cloudflare Pages", "Firebase", "Neocities"],
      checkoutUrl: "https://gstackstudio.gumroad.com/l/g-stack-studio-lifetime-plan",
      description: "Maximum single-operator quotas for aggressive agency SEO deployment."
    },
    ultimateAgency: {
      id: "ultimate-agency-lifetime",
      name: "Ultimate Agency Lifetime (5 PCs)",
      badge: "Fleet License",
      oneTimePrice: 3999,
      billingCycle: "one-time payment",
      googleStacksPerMonth: 200, // or 100/mo per license (500 total)
      stacksDescription: "100 Google stacks/mo per license (500 total/mo across team)",
      batchBuilderClients: 10,
      batchDescription: "10 clients at once per workstation",
      cloudSitesPerMonth: 400, // or 200/mo per license (1,000 total)
      cloudDescription: "200 cloud sites/mo per license (1,000 total/mo across team)",
      cloudPublishing: true,
      pagesPerSite: 200,
      devices: 5,
      devicePolicy: "5 separate Ultimate licenses (managed & transferred independently)",
      lifetimeUpdates: true,
      aiWriting: true,
      whiteLabelReports: true,
      supportedCloudHosts: ["AWS S3", "Backblaze B2", "Netlify", "Vercel", "GitHub Pages", "Cloudflare Pages", "Firebase", "Neocities"],
      checkoutUrl: "https://gstackstudio.gumroad.com/l/g-stack-studio-lifetime-plan",
      description: "Complete 5-workstation agency fleet with independent licenses and updates."
    }
  },

  // Reseller Program Terms & Partner Guidelines
  reseller: {
    title: "Authorized Reseller Program",
    type: "Wholesale Partner Distribution",
    minCommitment: 10,
    portalUrl: "trusted-reseller.html",
    contactRoute: "https://wa.me/923028981089",
    contactText: "+92 302 8981089",
    features: [
      "Access to the dedicated Reseller License Generation Portal",
      "Instant on-demand single & bulk key generation",
      "Customer status tracking & license validation",
      "White-label delivery reports (PDF & Excel)",
      "Priority WhatsApp technical partner support desk"
    ],
    pricingNote: "Wholesale tier pricing and bulk discounts are arranged directly through our partnership desk based on volume commitment. Contact us for the current reseller schedule."
  },

  // Supported Cloud Stacking Providers
  cloudProviders: [
    { name: "AWS S3", icon: "🪣", type: "Bucket / Directory", desc: "Direct S3 API static hosting with Amazon global CDN" },
    { name: "Backblaze B2", icon: "🗄️", type: "Bucket / S3 Compatible", desc: "Low-cost, high-speed S3-compatible cloud object storage" },
    { name: "Netlify", icon: "🌐", type: "API Site Deploy", desc: "Automated edge-network static site deployment" },
    { name: "Vercel", icon: "▲", type: "Serverless Project", desc: "Ultra-fast global edge deployments with zero configuration" },
    { name: "GitHub Pages", icon: "🐙", type: "Repository Branch", desc: "Direct Git-backed static site publishing with custom domains" },
    { name: "Cloudflare Pages", icon: "☁️", type: "Edge Project", desc: "Lightning-fast CDN deployment on Cloudflare's 300+ edge nodes" },
    { name: "Firebase", icon: "🔥", type: "Google Firebase Project", desc: "Google Cloud backed static hosting with instant SSL" },
    { name: "Neocities", icon: "🐱", type: "Static Site Folders", desc: "Independent static web hosting platform with folder structure" }
  ],

  // 20 Google Cloud Stack Assets
  googleAssets: [
    { name: "Google Drive Root Hub", category: "Core Foundation", desc: "Public master folder orchestrating the entire entity ecosystem." },
    { name: "13 Subfolder Silos", category: "Architecture", desc: "Semantic keyword and asset taxonomy organizing all child files." },
    { name: "Google Docs Keyword Silos", category: "Content", desc: "In-depth keyword-optimized articles published to the web." },
    { name: "Google Sheets Directory", category: "Data & Citations", desc: "Master spreadsheet indexing all URLs, keywords, and live citations." },
    { name: "Google Slides Deck", category: "Visual Entity", desc: "Branded entity presentation published with embed iframes." },
    { name: "Google Lead Forms", category: "Conversion", desc: "Interactive customer contact and lead intake questionnaire." },
    { name: "Google Drawings Graphic", category: "Vector Schema", desc: "Custom SVG diagram modeling business entity relationships." },
    { name: "Google Public Calendar", category: "Local Signals", desc: "Geotagged operating hours and appointment event schedules." },
    { name: "Custom Google My Maps", category: "Geographic Citations", desc: "Interactive driving directions and KML geospatial pins." },
    { name: "Google Sites Entity Portal", category: "Web Hub", desc: "Multi-page public Google Site embedding all Drive assets." },
    { name: "PDF Document Exports", category: "Document Silo", desc: "High-authority PDF exports stored in Drive for search crawlers." },
    { name: "ODT Document Exports", category: "Open Document", desc: "OpenDocument format copies broadening crawlable mime-types." },
    { name: "PowerPoint (PPTX) Mirror", category: "Presentation", desc: "Downloadable presentation files establishing document footprints." },
    { name: "EPUB Digital Publication", category: "E-Book Format", desc: "Digital publication format stored in the public Drive silo." },
    { name: "HTML / Web Bundle Export", category: "Web Source", desc: "Standalone web-ready asset package published in Drive." },
    { name: "Plain Text / Markdown", category: "Raw Content", desc: "Pure markdown and text exports for NLP and entity analysis." },
    { name: "Geotagged Image Silo", category: "Media Signal", desc: "Optimized, EXIF-geotagged images stored in dedicated folders." },
    { name: "CSV Master Data Dump", category: "Tabular Data", desc: "Structured CSV data dump for external tool ingestion." },
    { name: "Public RSS / XML Feed", category: "Syndication", desc: "Live feed tracking all newly published stack assets." },
    { name: "Google Apps Script Engine", category: "Automation", desc: "Drive-level script asset enhancing entity connectivity." }
  ]
};
