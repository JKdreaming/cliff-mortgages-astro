import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DYAQuqF9.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CKCrAOCV.mjs';
import { $ as $$GenericHero } from '../chunks/GenericHero_Dj9APbdo.mjs';
import { p as pageHeroImageKeys, a as allPageData, h as heroImageAssignments, c as backgroundImageAssignments } from '../chunks/Footer_BM-aK1EU.mjs';
export { renderers } from '../renderers.mjs';

const $$LoanPrograms = createComponent(($$result, $$props, $$slots) => {
  const pageData = allPageData["/loan-programs"];
  const heroKey = pageHeroImageKeys[pageData.path];
  const hero = heroKey ? heroImageAssignments[heroKey] : void 0;
  const corePrograms = [
    {
      path: "/loan-programs/purchase",
      name: "Purchase Loans",
      icon: "fa-solid fa-key",
      description: allPageData["/loan-programs/purchase"].description,
      titleOverride: "Home Purchase Loans"
    },
    {
      path: "/loan-programs/refinance",
      name: "Refinance",
      icon: "fa-solid fa-arrows-rotate",
      description: allPageData["/loan-programs/refinance"].description,
      titleOverride: "Refinance Your Mortgage"
    },
    {
      path: "/loan-programs/heloc",
      name: "HELOC",
      icon: "fa-solid fa-house-chimney-window",
      description: allPageData["/loan-programs/heloc"].description,
      titleOverride: "Home Equity Lines of Credit"
    },
    {
      path: "/loan-programs/conventional",
      name: "Conventional Loans",
      icon: "fa-solid fa-handshake",
      description: allPageData["/loan-programs/conventional"].description,
      titleOverride: "Conventional Loan Programs"
    }
  ];
  const governmentPrograms = [
    {
      path: "/loan-programs/fha",
      name: "FHA Loans",
      icon: "fa-solid fa-house-flag",
      description: allPageData["/loan-programs/fha"].description,
      titleOverride: "Affordable FHA Loans"
    },
    {
      path: "/loan-programs/fha-203k",
      name: "FHA 203(k) Loans",
      icon: "fa-solid fa-hammer",
      description: allPageData["/loan-programs/fha-203k"].description,
      titleOverride: "FHA 203(k) Renovation Loans"
    },
    {
      path: "/loan-programs/va",
      name: "VA Loans",
      icon: "fa-solid fa-shield-halved",
      description: allPageData["/loan-programs/va"].description,
      titleOverride: "VA Loans for Military Families"
    },
    {
      path: "/loan-programs/usda",
      name: "USDA Loans",
      icon: "fa-solid fa-tractor",
      description: allPageData["/loan-programs/usda"].description,
      titleOverride: "USDA Rural Housing Loans"
    }
  ];
  const specializedPrograms = [
    {
      path: "/loan-programs/jumbo",
      name: "Jumbo Loans",
      icon: "fa-solid fa-gem",
      description: allPageData["/loan-programs/jumbo"].description,
      titleOverride: "Jumbo Loans for High-Value Homes"
    },
    {
      path: "/loan-programs/dscr",
      name: "DSCR / Investor",
      icon: "fa-solid fa-building-columns",
      description: allPageData["/loan-programs/dscr"].description,
      titleOverride: "DSCR Investor Loans"
    },
    {
      path: "/loan-programs/non-qm",
      name: "Non-QM Loans",
      icon: "fa-solid fa-puzzle-piece",
      description: allPageData["/loan-programs/non-qm"].description,
      titleOverride: "Flexible Non-QM Solutions"
    },
    {
      path: "/loan-programs/reverse-mortgage",
      name: "Reverse Mortgages",
      icon: "fa-solid fa-user-clock",
      description: allPageData["/loan-programs/reverse-mortgage"].description,
      titleOverride: "Reverse Mortgages for Seniors"
    }
  ];
  const buildingPrograms = [
    {
      path: "/loan-programs/commercial",
      name: "Commercial Loans",
      icon: "fa-solid fa-city",
      description: allPageData["/loan-programs/commercial"].description,
      titleOverride: "Commercial Property Loans"
    },
    {
      path: "/loan-programs/construction",
      name: "Construction Loans",
      icon: "fa-solid fa-trowel-bricks",
      description: allPageData["/loan-programs/construction"].description,
      titleOverride: "Home Construction Loans"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageData": pageData }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GenericHero", $$GenericHero, { "title": pageData.h1, "subtitle": pageData.description, "imageUrl": hero?.src ?? pageData.imageUrl ?? "", "imageAlt": hero?.alt ?? pageData.imageAlt ?? "", "image": hero, "imageObjectClassName": "object-cover object-left" })} ${maybeRenderHead()}<div class="bg-gray-50 divide-y divide-gray-200"> <section class="py-16 sm:py-20"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> <div class="lg:col-span-1"> <p class="font-semibold text-[#09143e]">Core Loan Options</p> <h2 class="text-3xl font-bold text-gray-900 mt-2">
Fundamental Mortgage Solutions for Every Homebuyer
</h2> </div> <div class="lg:col-span-2"> <p class="text-gray-600">
These are the most common and versatile loan programs, perfect for
              a wide range of buyers and homeowners. Whether you are buying,
              refinancing, or tapping into equity, these options provide a solid
              foundation for your home financing journey.
</p> </div> </div> <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> ${corePrograms.map((program) => renderTemplate`<div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200/80 h-full flex flex-col"> <i${addAttribute(`${program.icon} fa-2x text-[#bf9f5c] mb-4`, "class")}></i> <h3 class="text-lg font-bold text-gray-900"> ${program.titleOverride ?? program.name} </h3> <p class="mt-2 text-gray-600 text-sm flex-grow"> ${program.description} </p> <a${addAttribute(program.path, "href")} class="mt-4 inline-block font-semibold text-[#09143e] hover:text-[#12215c] text-sm group">
Learn More${" "} <span class="transition-transform group-hover:translate-x-1 inline-block">
&rarr;
</span> </a> </div>`)} </div> </div> </section> <section class="relative bg-cover bg-left-top h-[60vh]"${addAttribute(`background-image: url('${backgroundImageAssignments.homeEquitySelectBanner.src}')`, "style")}> <div class="absolute inset-0 bg-[#09143e]/80"></div> <div class="relative z-10 h-full"> <div class="container mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center text-white gap-4"> <p class="text-sm font-bold tracking-widest uppercase text-gray-300">
New
</p> <h2 class="text-4xl md:text-5xl font-extrabold leading-tight">
EquitySelect
</h2> <p class="text-lg max-w-xl mx-auto text-gray-200">
A flexible line of credit with payment plans as low as 1% of your
            annual loan balance.
</p> <a href="/loan-programs/equity-select" class="mt-4 inline-block bg-[#bf9f5c] text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-[#a68a4c] transition-colors">
Learn More
</a> </div> </div> </section> <section class="py-16 sm:py-20"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> <div class="lg:col-span-1"> <p class="font-semibold text-[#09143e]">Government-Backed Loans</p> <h2 class="text-3xl font-bold text-gray-900 mt-2">
Accessible Financing Options with Federal Support
</h2> </div> <div class="lg:col-span-2"> <p class="text-gray-600">
Government-backed loan programs provide more accessible paths to
              homeownership, especially for buyers who need lower down payments,
              have flexible credit requirements, or are eligible for specific
              benefits like veterans and rural residents.
</p> </div> </div> <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> ${governmentPrograms.map((program) => renderTemplate`<div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200/80 h-full flex flex-col"> <i${addAttribute(`${program.icon} fa-2x text-[#bf9f5c] mb-4`, "class")}></i> <h3 class="text-lg font-bold text-gray-900"> ${program.titleOverride ?? program.name} </h3> <p class="mt-2 text-gray-600 text-sm flex-grow"> ${program.description} </p> <a${addAttribute(program.path, "href")} class="mt-4 inline-block font-semibold text-[#09143e] hover:text-[#12215c] text-sm group">
Learn More${" "} <span class="transition-transform group-hover:translate-x-1 inline-block">
&rarr;
</span> </a> </div>`)} </div> </div> </section> <section class="py-16 sm:py-20"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> <div class="lg:col-span-1"> <p class="font-semibold text-[#09143e]">
Specialized & Investor Loans
</p> <h2 class="text-3xl font-bold text-gray-900 mt-2">
Tailored Solutions for Unique Financial Scenarios
</h2> </div> <div class="lg:col-span-2"> <p class="text-gray-600">
For borrowers with diverse financial needs or investment goals, we
              provide expanded loan solutions that go beyond the basics. These
              programs are designed for high-value properties, real estate
              investors, and those with non-traditional income.
</p> </div> </div> <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> ${specializedPrograms.map((program) => renderTemplate`<div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200/80 h-full flex flex-col"> <i${addAttribute(`${program.icon} fa-2x text-[#bf9f5c] mb-4`, "class")}></i> <h3 class="text-lg font-bold text-gray-900"> ${program.titleOverride ?? program.name} </h3> <p class="mt-2 text-gray-600 text-sm flex-grow"> ${program.description} </p> <a${addAttribute(program.path, "href")} class="mt-4 inline-block font-semibold text-[#09143e] hover:text-[#12215c] text-sm group">
Learn More${" "} <span class="transition-transform group-hover:translate-x-1 inline-block">
&rarr;
</span> </a> </div>`)} </div> </div> </section> <section class="py-16 sm:py-20"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> <div class="lg:col-span-1"> <p class="font-semibold text-[#09143e]">
Building & Business Financing
</p> <h2 class="text-3xl font-bold text-gray-900 mt-2">
Funding for Your Next Big Project
</h2> </div> <div class="lg:col-span-2"> <p class="text-gray-600">
Whether you're building a custom home from the ground up or
              financing a commercial property for your business, these
              specialized loans provide the capital needed for construction,
              acquisition, and expansion.
</p> </div> </div> <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> ${buildingPrograms.map((program) => renderTemplate`<div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200/80 h-full flex flex-col"> <i${addAttribute(`${program.icon} fa-2x text-[#bf9f5c] mb-4`, "class")}></i> <h3 class="text-lg font-bold text-gray-900"> ${program.titleOverride ?? program.name} </h3> <p class="mt-2 text-gray-600 text-sm flex-grow"> ${program.description} </p> <a${addAttribute(program.path, "href")} class="mt-4 inline-block font-semibold text-[#09143e] hover:text-[#12215c] text-sm group">
Learn More${" "} <span class="transition-transform group-hover:translate-x-1 inline-block">
&rarr;
</span> </a> </div>`)} </div> </div> </section> </div> ` })}`;
}, "/Volumes/14 Tera/Development/Cliff Mortgages/cliff-mortgages-lead-gen-site (astro edition) copy/Astro Site/src/pages/loan-programs.astro", void 0);

const $$file = "/Volumes/14 Tera/Development/Cliff Mortgages/cliff-mortgages-lead-gen-site (astro edition) copy/Astro Site/src/pages/loan-programs.astro";
const $$url = "/loan-programs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LoanPrograms,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
