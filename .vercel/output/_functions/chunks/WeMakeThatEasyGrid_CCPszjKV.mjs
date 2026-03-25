import { c as createComponent, d as createAstro, a as renderTemplate, b as addAttribute, r as renderComponent, F as Fragment, m as maybeRenderHead } from './astro/server_DYAQuqF9.mjs';
import 'piccolore';
/* empty css                                     */
import 'clsx';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro();
const $$SellDirectCarouselHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SellDirectCarouselHero;
  const defaultRailImages = [
    { imageUrl: "/carousel-house-1.jpg" },
    { imageUrl: "/carousel-house-2.jpg" },
    { imageUrl: "/carousel-house-3.jpg" },
    { imageUrl: "/carousel-house-4.jpg" },
    { imageUrl: "/carousel-house-5.jpg" },
    { imageUrl: "/carousel-house-6.jpg" },
    { imageUrl: "/carousel-house-7.jpg" },
    { imageUrl: "/carousel-house-8.jpg" },
    { imageUrl: "/carousel-house-9.jpg" }
  ];
  const {
    eyebrow = "Home Equity Line of Credit",
    title = "Unlock your home's value with a Cliff HELOC",
    subtitle = "Access the equity you've built in your home without giving up your current low mortgage rate. Colorado homeowners trust Cliff Mortgages for fast, flexible financing.",
    ctaLabel = "Fill out the form",
    ctaHref = "#hero-form-section",
    secondaryCtaLabel = "See how it works",
    secondaryCtaHref = "#",
    railImages = defaultRailImages,
    showTrustBadges = false
  } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<section class="component-sell-direct-hero relative bg-white pb-10 overflow-hidden font-sans" data-astro-cid-d3ssv3wg> <div class="relative pt-16 pb-12" data-astro-cid-d3ssv3wg> <!-- Background Image - Confined to top section --> <div class="absolute inset-0 z-0" data-astro-cid-d3ssv3wg> <img src="/HELOC_Front_Door_Landing_Page_47757791_XL-(1).jpg" alt="Background" class="h-full w-full object-cover object-center" data-astro-cid-d3ssv3wg> <!-- Gradient Overlay: Solid white at top, solid white at bottom --> <div class="absolute inset-0 bg-gradient-to-b from-white/75 to-white" data-astro-cid-d3ssv3wg></div> </div> <div class="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-d3ssv3wg> <div class="grid gap-12 lg:grid-cols-2 lg:items-center" data-astro-cid-d3ssv3wg> <!-- Left Column: Content --> <div class="text-left" data-astro-cid-d3ssv3wg> <p class="text-sm font-semibold uppercase tracking-wide text-[#bf9f5c]" data-astro-cid-d3ssv3wg> ', ' </p> <h1 class="text-[48px] leading-[1.1] font-bold text-gray-900 sm:text-[64px] mb-6 tracking-tight mt-2" data-astro-cid-d3ssv3wg> ', ' </h1> <p class="mt-6 text-[18px] leading-relaxed text-gray-500 max-w-xl font-medium" data-astro-cid-d3ssv3wg> ', ' </p> <div class="mt-10 flex flex-col gap-4 sm:flex-row" data-astro-cid-d3ssv3wg> ', ' </div> </div> <!-- Right Column: Form --> <div class="relative" id="hero-form-section" data-astro-cid-d3ssv3wg> <div class="rounded-3xl border border-[#09143e]/30 bg-[rgba(9,20,62,0.95)] p-8 backdrop-blur-[30px] shadow-[0_20px_50px_-12px_rgba(9,20,62,0.35)]" data-astro-cid-d3ssv3wg> <h2 class="text-3xl font-bold text-white mb-6 text-left" data-astro-cid-d3ssv3wg>\nFill Out Our Quick Form\n</h2> <div class="plato-form-widget" data-pf-id="fr6g8ai1fed" data-pf-host="form.formcan.com/" data-astro-cid-d3ssv3wg></div> </div> </div> </div> </div> </div> <!-- Horizontal Photo Rail - Exact Layout Staggering --> <div class="relative mt-5 h-[450px] w-full" data-astro-cid-d3ssv3wg> <div class="absolute left-1/2 top-0 flex -translate-x-1/2 items-center space-x-[-80px]" data-astro-cid-d3ssv3wg> ', ` </div> </div> </section> <script>
  if (typeof window !== "undefined") {
    const existing = document.querySelector('script[data-formcan="true"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "//static.formcan.com/assets/dist/formbuilder.js?v=20";
      script.async = true;
      script.dataset.formcan = "true";
      document.body.appendChild(script);
    }
  }
<\/script> `])), maybeRenderHead(), eyebrow, title, subtitle, showTrustBadges ? renderTemplate`<div class="flex flex-wrap items-center gap-8 rounded-2xl bg-white border border-gray-200 px-8 py-6 shadow-sm" data-astro-cid-d3ssv3wg> <div class="flex flex-col items-center text-center bbb-button" data-astro-cid-d3ssv3wg> <img src="/logos/bbb trust logo.webp" alt="Better Business Bureau A+ Accredited Business - Cliff Mortgages" class="h-20 w-auto object-contain mb-2" loading="lazy" decoding="async" data-astro-cid-d3ssv3wg> <p class="text-sm font-semibold text-gray-700" data-astro-cid-d3ssv3wg>A+ Rating</p> </div> <div class="flex flex-col items-center text-center google-reviews-button" data-astro-cid-d3ssv3wg> <img src="/logos/google-reviews.png" alt="Google Reviews 5 Star Rating - Cliff Mortgages Customer Reviews" class="h-20 w-auto object-contain mb-2" loading="lazy" decoding="async" data-astro-cid-d3ssv3wg> <p class="text-sm font-semibold text-gray-700" data-astro-cid-d3ssv3wg>5.0 ★★★★★</p> </div> </div>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-d3ssv3wg": true }, { "default": ($$result2) => renderTemplate` <a${addAttribute(ctaHref, "href")} class="inline-flex items-center justify-center rounded-xl bg-[#09143e] px-8 py-4 text-[15px] font-bold text-white transition hover:bg-[#0c1d5a] active:scale-95 shadow-lg shadow-blue-900/10" data-astro-cid-d3ssv3wg> ${ctaLabel} </a> <a${addAttribute(secondaryCtaHref, "href")} class="inline-flex items-center justify-center rounded-xl border-2 border-gray-100 bg-white px-8 py-4 text-[15px] font-bold text-gray-900 transition hover:bg-gray-50 active:scale-95" data-astro-cid-d3ssv3wg> ${secondaryCtaLabel} </a> ` })}`, railImages.map((image, index) => {
    const configs = [
      { h: "h-[180px]", mt: "mt-[120px]", z: "z-[1]" },
      // 0
      { h: "h-[220px]", mt: "mt-[60px]", z: "z-[2]" },
      // 1
      { h: "h-[200px]", mt: "mt-[140px]", z: "z-[3]" },
      // 2
      { h: "h-[260px]", mt: "mt-[40px]", z: "z-[4]" },
      // 3
      { h: "h-[320px]", mt: "mt-[0px]", z: "z-[10]", isCenter: true },
      // 4 (Center focus)
      { h: "h-[260px]", mt: "mt-[100px]", z: "z-[4]" },
      // 5
      { h: "h-[240px]", mt: "mt-[20px]", z: "z-[3]" },
      // 6
      { h: "h-[210px]", mt: "mt-[170px]", z: "z-[2]" },
      // 7
      { h: "h-[180px]", mt: "mt-[90px]", z: "z-[1]" }
      // 8
    ];
    const config = configs[index % configs.length];
    return renderTemplate`<div${addAttribute(`relative w-[260px] shrink-0 overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-transform hover:z-50 hover:scale-105 ${config.h} ${config.mt} ${config.z} ${config.isCenter ? "ring-[12px] ring-white shadow-2xl scale-110" : "ring-4 ring-white"}`, "class")} data-astro-cid-d3ssv3wg> <img${addAttribute(image.imageUrl, "src")} alt="Colorado Home" class="h-full w-full object-cover" loading="lazy" data-astro-cid-d3ssv3wg> </div>`;
  }));
}, "/Volumes/14 Tera/Development/Cliff Mortgages/cliff-mortgages-lead-gen-site (astro edition) copy/Astro Site/src/components/marketing/SellDirectCarouselHero.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$WeMakeThatEasyGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WeMakeThatEasyGrid;
  const defaultCards = [
    {
      title: "Apply in minutes",
      description: "Submit your basic info and property details through our secure online application.",
      stepNumber: 1,
      image: "/made-easy/friends-looking-at-the-restaurant-menu-2026-01-08-22-27-51-utc.jpg",
      type: "photo"
    },
    {
      title: "Instant valuation",
      description: "We use local Denver market data to determine your home's equity in real-time.",
      stepNumber: 2,
      image: "/made-easy/architects-are-reviewing-plans-together-buildings-2026-01-07-01-00-06-utc.jpg",
      type: "photo"
    },
    {
      title: "E-sign your documents",
      description: "Review your terms and sign everything digitally from the comfort of your home.",
      stepNumber: 3,
      image: "/made-easy/top-view-of-business-people-putting-their-hands-on-2026-01-08-07-14-39-utc.jpg",
      type: "photo"
    },
    {
      title: "Get your funds",
      description: "Once approved, your line of credit is ready to use for home improvements, debt, or more.",
      stepNumber: 4,
      image: "/made-easy/overjoyed-black-woman-holding-money-cash-in-hands-2026-01-08-23-10-47-utc.jpg",
      type: "photo"
    }
  ];
  const defaultTallCard = {
    icon: "fa-solid fa-house-chimney-user",
    value: "Get Started",
    label: "Apply for Your HELOC",
    description: "Take the first step toward financial flexibility. Fill out our quick form and unlock the equity in your Colorado home today.",
    ctaLabel: "Fill out the form",
    ctaHref: "#hero-form-section"
  };
  const {
    title = "HELOCs made easy.",
    description = "Our streamlined digital process helps you access your home's equity in record time with minimal paperwork.",
    cards = defaultCards,
    tallCard = defaultTallCard
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<section class="component-we-make-that-easy bg-white py-24 font-sans"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-20"> <h2 class="text-[44px] leading-tight font-bold text-black mb-4 tracking-tight"> ', ' </h2> <p class="mx-auto max-w-2xl text-[17px] text-[#666] leading-relaxed"> ', ' </p> </div> <div class="grid gap-6 lg:grid-cols-3 items-stretch"> <!-- Column 1 --> <div class="flex flex-col gap-6">  <div class="flex-1 flex flex-col rounded-[32px] bg-[#f9f9f9] p-8 transition-all hover:bg-[#f0f0f0]"> <div class="aspect-[1.4] w-full rounded-2xl overflow-hidden mb-8 shadow-sm"> <img', ' class="h-full w-full object-cover" alt="Homeowners filling out HELOC application information"> </div> <div> <div class="flex items-center gap-3 mb-2 text-[#ccc] font-bold text-[11px]"> <span>0', '</span> <div class="h-[1px] flex-1 bg-[#eee]"></div> </div> <h3 class="text-[20px] font-bold text-black leading-tight mb-2"> ', ' </h3> <p class="text-[14px] leading-relaxed text-[#666]"> ', ' </p> </div> </div>  <div class="flex-1 flex flex-col rounded-[32px] bg-[#f9f9f9] p-8 transition-all hover:bg-[#f0f0f0]"> <div class="aspect-[1.4] w-full rounded-2xl overflow-hidden mb-8 shadow-sm"> <img', ' class="h-full w-full object-cover" alt="Reviewing HELOC loan terms and conditions"> </div> <div> <div class="flex items-center gap-3 mb-2 text-[#ccc] font-bold text-[11px]"> <span>0', '</span> <div class="h-[1px] flex-1 bg-[#eee]"></div> </div> <h3 class="text-[20px] font-bold text-black leading-tight mb-2"> ', ' </h3> <p class="text-[14px] leading-relaxed text-[#666]"> ', ' </p> </div> </div> </div> <!-- Column 2 --> <div class="flex flex-col gap-6">  <div class="flex-1 flex flex-col rounded-[32px] bg-[#f9f9f9] p-8 transition-all hover:bg-[#f0f0f0]"> <div class="aspect-[1.4] w-full rounded-2xl overflow-hidden mb-8 shadow-sm"> <img', ' class="h-full w-full object-cover" alt="Property analysis for equity valuation in Colorado"> </div> <div> <div class="flex items-center gap-3 mb-2 text-[#ccc] font-bold text-[11px]"> <span>0', '</span> <div class="h-[1px] flex-1 bg-[#eee]"></div> </div> <h3 class="text-[20px] font-bold text-black leading-tight mb-2"> ', ' </h3> <p class="text-[14px] leading-relaxed text-[#666]"> ', ' </p> </div> </div>  <div class="flex-1 flex flex-col rounded-[32px] bg-[#f9f9f9] p-8 transition-all hover:bg-[#f0f0f0]"> <div class="aspect-[1.4] w-full rounded-2xl overflow-hidden mb-8 shadow-sm"> <img', ' class="h-full w-full object-cover" alt="Happy homeowner receiving HELOC funds"> </div> <div> <div class="flex items-center gap-3 mb-2 text-[#ccc] font-bold text-[11px]"> <span>0', '</span> <div class="h-[1px] flex-1 bg-[#eee]"></div> </div> <h3 class="text-[20px] font-bold text-black leading-tight mb-2"> ', ' </h3> <p class="text-[14px] leading-relaxed text-[#666]"> ', ' </p> </div> </div> </div> <!-- Column 3 --> <div class="flex flex-col rounded-[40px] bg-[#bf9f5c] border border-[#bf9f5c]/20 p-10 text-center shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]"> <div class="flex-1 flex flex-col items-center justify-center py-12 getStartedWrapper sticky top-24 self-start"> <div class="h-20 w-20 rounded-3xl bg-white flex items-center justify-center text-[#09143e] text-3xl mb-12 shadow-2xl"> <i', '></i> </div> <div class="mb-8"> <span class="text-[48px] font-bold tracking-tighter text-white leading-none">', '</span> <p class="text-[12px] font-bold uppercase tracking-[0.2em] text-white/80 mt-2"> ', ' </p> </div> <p class="text-[16px] leading-relaxed text-white/90 mb-12"> ', " </p> <a", ' class="inline-block w-full rounded-full bg-[#09143e] py-5 text-[14px] font-bold text-white transition-all hover:bg-[#0f1d4d] active:scale-95" data-scroll-to-form>', '</a> </div> </div> </div> </div> </section> <script>\n  document.querySelectorAll("[data-scroll-to-form]").forEach((button) => {\n    button.addEventListener("click", (e) => {\n      e.preventDefault();\n      const targetId = button.getAttribute("href");\n      const targetElement = document.querySelector(targetId);\n      if (targetElement) {\n        const offset = 100; // Account for fixed header if present\n        const elementPosition = targetElement.getBoundingClientRect().top;\n        const offsetPosition = elementPosition + window.pageYOffset - offset;\n\n        window.scrollTo({\n          top: offsetPosition,\n          behavior: "smooth",\n        });\n      }\n    });\n  });\n<\/script>'])), maybeRenderHead(), title, description, addAttribute(cards[0].image, "src"), cards[0].stepNumber, cards[0].title, cards[0].description, addAttribute(cards[2].image, "src"), cards[2].stepNumber, cards[2].title, cards[2].description, addAttribute(cards[1].image, "src"), cards[1].stepNumber, cards[1].title, cards[1].description, addAttribute(cards[3].image, "src"), cards[3].stepNumber, cards[3].title, cards[3].description, addAttribute(tallCard.icon, "class"), tallCard.value, tallCard.label, tallCard.description, addAttribute(tallCard.ctaHref, "href"), tallCard.ctaLabel);
}, "/Volumes/14 Tera/Development/Cliff Mortgages/cliff-mortgages-lead-gen-site (astro edition) copy/Astro Site/src/components/marketing/WeMakeThatEasyGrid.astro", void 0);

export { $$SellDirectCarouselHero as $, $$WeMakeThatEasyGrid as a };
