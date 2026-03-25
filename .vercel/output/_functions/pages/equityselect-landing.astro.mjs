import { c as createComponent, r as renderComponent, a as renderTemplate, b as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_DYAQuqF9.mjs';
import 'piccolore';
import { $ as $$LandingLayout } from '../chunks/LandingLayout_Bz6cSVHX.mjs';
import { $ as $$GenericHero } from '../chunks/GenericHero_Dj9APbdo.mjs';
import { $ as $$EquitySelectSections } from '../chunks/EquitySelectSections_oEuDVCHs.mjs';
import { h as heroImageAssignments, a as allPageData } from '../chunks/Footer_BM-aK1EU.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$EquityselectLanding = createComponent(($$result, $$props, $$slots) => {
  const hero = heroImageAssignments.equitySelectLandingHero;
  const landingFaqs = [
    {
      question: "Does a HELOC replace my existing mortgage?",
      answer: "Not necessarily. Many HELOC options can be structured as a second lien, which may let you keep a low-rate first mortgage in place while accessing equity separately."
    },
    {
      question: "How is a HELOC different from a cash-out refinance?",
      answer: "A cash-out refinance replaces your existing mortgage with a new one. A HELOC is typically a separate line of credit that can provide access to equity without refinancing your primary mortgage."
    },
    {
      question: "Can I draw funds over time, or do I receive a lump sum?",
      answer: "Many HELOCs allow you to draw funds as needed during a draw period, which can be useful for projects or planned expenses that happen in stages."
    },
    {
      question: "Are HELOC rates fixed or variable?",
      answer: "Many HELOCs have variable rates, though some lenders offer fixed-rate options for portions of the balance. We\u2019ll help you compare what\u2019s available and how payments may change."
    },
    {
      question: "How do I know if a HELOC is a good fit for me?",
      answer: "It depends on your equity, credit profile, timeline, and whether keeping your current first mortgage matters. The next step is to request a quote so we can review available options and structure."
    }
  ];
  const pageData = {
    path: "/equityselect-landing",
    title: "EquitySelect Home-Equity Line Alternative | Cliff Mortgages",
    h1: "Use Your Home\u2019s Equity \u2014 Without Touching Your Low-Rate First Mortgage",
    description: "A flexible Home Equity Line of Credit for cash, repairs, or planned expenses \u2014 not a refinance. EquitySelect is one HELOC option available for homeowners who want flexible access to equity while keeping their low-rate first mortgage in place. We help homeowners explore available HELOC structures based on their goals and situation.",
    seoDescription: "Explore EquitySelect, a first- or second-lien home-equity line designed for predictable long-term planning. Request a free quote from Cliff Mortgages to confirm eligibility and payment options.",
    seoImageUrl: hero.src,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "EquitySelect Landing", path: "/equityselect-landing" }
    ],
    faqs: landingFaqs
  };
  const equitySelectProgram = allPageData["/loan-programs/equity-select"];
  const howItWorks = equitySelectProgram && equitySelectProgram.programDetails && equitySelectProgram.programDetails.howItWorks || [
    {
      title: "Customize Your Lien Position",
      description: "Choose a first- or second-lien structure based on your goals and current mortgage rate.",
      icon: "fa-solid fa-diagram-project"
    },
    {
      title: "Activate the Line",
      description: "Open the credit line and draw funds as needed for projects, expenses, or opportunities.",
      icon: "fa-solid fa-hand-holding-dollar"
    },
    {
      title: "Follow Predictable Payments",
      description: "Make required payments starting around 1% of the outstanding balance, with the ability to prepay at any time to reduce the balance sooner.",
      icon: "fa-solid fa-calendar-check"
    }
  ];
  return renderTemplate`${renderComponent($$result, "LandingLayout", $$LandingLayout, { "pageData": pageData, "footerVariant": "landing-page-footer-varient" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", " ", '<section class="bg-gray-50 py-16 sm:py-24"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <h2 class="text-3xl font-bold text-center text-gray-900">How It Works</h2> <p class="mt-4 text-center text-muted-foreground max-w-3xl mx-auto">\nA simple overview of how EquitySelect is structured and how borrowers typically use it.\n</p> <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"> ', ' </div> </div> </section> <section class="bg-white py-16 sm:py-24" data-heloc-faqs> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">HELOC FAQs</h2> <div class="max-w-3xl mx-auto"> ', ` </div> <script>
        (() => {
          const root = document.querySelector('[data-heloc-faqs]');
          if (!root) return;
          const items = Array.from(root.querySelectorAll('details'));
          items.forEach((details) => {
            details.addEventListener('toggle', () => {
              if (!details.open) return;
              items.forEach((other) => {
                if (other !== details) other.open = false;
              });
            });
          });
        })();
      <\/script> </div> </section> <section class="bg-[#09143e]"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"> <h2 class="text-3xl font-bold text-white">Ready to Check Your HELOC Options?</h2> <p class="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
Request a free quote to see if EquitySelect is a fit for your goals.
</p> <a href="https://www.cliffmortgages.com/get-a-quote" class="mt-8 inline-block bg-white text-[#09143e] font-bold py-4 px-10 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
Check HELOC Options
</a> <p class="mt-6 text-xs text-gray-200 opacity-80 max-w-2xl mx-auto">
Loan approval is subject to lender review and conditions. Rates, terms, and product availability may change with market conditions.
</p> </div> </section> `])), renderComponent($$result2, "GenericHero", $$GenericHero, { "title": pageData.h1, "subtitle": pageData.description, "imageUrl": hero.src, "imageAlt": hero.alt, "image": hero, "hideBadge": true, "hideContactCta": true, "quickStats": [], "primaryCtaLabel": "Check HELOC Options", "primaryCtaHref": "https://www.cliffmortgages.com/get-a-quote" }), renderComponent($$result2, "EquitySelectSections", $$EquitySelectSections, { "landing": true }), maybeRenderHead(), howItWorks.map((step, index) => renderTemplate`<div class="rounded-2xl border bg-white p-6 shadow-sm h-full"> <div class="flex items-center gap-4 h-full"> <div class="flex-shrink-0 w-12 h-12 rounded-full bg-gray-50 border flex items-center justify-center"> <i${addAttribute(`${step.icon} text-xl text-[#bf9f5c]`, "class")}></i> </div> <div class="flex flex-col justify-center"> <p class="text-sm font-semibold text-gray-900">${step.title}</p> <p class="mt-1 text-sm text-muted-foreground">${step.description}</p> </div> </div> </div>`), landingFaqs.map((faq) => renderTemplate`<details class="group border-b"> <summary class="w-full flex justify-between items-center text-left py-4 px-2 hover:bg-gray-50 cursor-pointer"> <span class="font-semibold text-lg text-gray-800">${faq.question}</span> <i class="fa-solid fa-chevron-down text-[#bf9f5c] transform transition-transform duration-300 group-open:rotate-180"></i> </summary> <div class="px-2 pb-4 text-gray-600"> <p>${faq.answer}</p> </div> </details>`)) })}`;
}, "/Volumes/14 Tera/Development/Cliff Mortgages/cliff-mortgages-lead-gen-site (astro edition) copy/Astro Site/src/pages/equityselect-landing.astro", void 0);

const $$file = "/Volumes/14 Tera/Development/Cliff Mortgages/cliff-mortgages-lead-gen-site (astro edition) copy/Astro Site/src/pages/equityselect-landing.astro";
const $$url = "/equityselect-landing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EquityselectLanding,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
