import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DYAQuqF9.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CKCrAOCV.mjs';
import { $ as $$GenericHero } from '../../chunks/GenericHero_Dj9APbdo.mjs';
import { h as heroImageAssignments, s as supplementalImageKeys, a as allPageData } from '../../chunks/Footer_BM-aK1EU.mjs';
export { renderers } from '../../renderers.mjs';

const $$CindyCliff = createComponent(($$result, $$props, $$slots) => {
  const pageData = allPageData["/about/cindy-cliff"];
  const hero = heroImageAssignments.cindyHero;
  const portrait = heroImageAssignments[supplementalImageKeys.cindyPortrait];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageData": pageData }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GenericHero", $$GenericHero, { "title": pageData.h1, "subtitle": pageData.description, "imageUrl": hero.src, "imageAlt": hero.alt, "image": hero })} ${maybeRenderHead()}<section class="bg-white py-16 sm:py-20"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 md:grid-cols-3 gap-12 items-center"> <div class="md:col-span-1"> <img${addAttribute(portrait.src, "src")}${addAttribute(portrait.alt, "alt")} class="rounded-full shadow-2xl mx-auto w-64 h-64 object-cover" loading="lazy"> </div> <div class="md:col-span-2"> <h2 class="text-3xl font-bold tracking-tight text-gray-900">A Trusted Guide in Your Homeownership Journey</h2> <p class="mt-4 text-xl font-semibold text-[#09143e]">NMLS #2075376</p> <p class="text-xl font-semibold text-[#09143e]">DRE #100524014</p> <p class="mt-6 text-lg text-gray-600">
With over 15 years of experience in the mortgage industry, Cindy Cliff is a passionate and dedicated loan originator serving the entire state of Colorado. Her mission is to make the home loan process transparent, understandable, and as smooth as possible for every client.
</p> <p class="mt-4 text-gray-600">
Cindy believes that education is key to empowerment. She takes the time to walk each borrower through their options, explaining the details of different loan programs to ensure they make a confident and informed decision that aligns with their long-term financial goals.
</p> </div> </div> </div> </section> <section class="bg-gray-50 py-16 sm:py-20"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 class="text-3xl font-bold text-gray-900">Why Work With Cindy?</h2> <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left"> <div class="bg-white p-6 rounded-lg shadow"> <h3 class="font-bold text-lg text-gray-800">Expert Guidance</h3> <p class="mt-2 text-gray-600">Leverage deep industry knowledge to navigate complex loan scenarios with ease.</p> </div> <div class="bg-white p-6 rounded-lg shadow"> <h3 class="font-bold text-lg text-gray-800">Access to Lenders</h3> <p class="mt-2 text-gray-600">As a broker, Cindy shops dozens of lenders to find you competitive rates and terms.</p> </div> <div class="bg-white p-6 rounded-lg shadow"> <h3 class="font-bold text-lg text-gray-800">Proactive Communication</h3> <p class="mt-2 text-gray-600">You'll be kept in the loop at every stage of the process, so you're never left wondering.</p> </div> </div> </div> </section> <section class="bg-[#09143e]"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"> <h2 class="text-3xl font-bold text-white">Let's Discuss Your Homeownership Goals</h2> <p class="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
Whether you're buying your first home or refinancing, Cindy is ready to help you find the perfect loan.
</p> <a href="/get-a-quote" class="mt-8 inline-block bg-white text-[#09143e] font-bold py-4 px-10 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
Start a Conversation
</a> </div> </section> ` })}`;
}, "/Volumes/14 Tera/Development/Cliff Mortgages/cliff-mortgages-lead-gen-site (astro edition) copy/Astro Site/src/pages/about/cindy-cliff.astro", void 0);

const $$file = "/Volumes/14 Tera/Development/Cliff Mortgages/cliff-mortgages-lead-gen-site (astro edition) copy/Astro Site/src/pages/about/cindy-cliff.astro";
const $$url = "/about/cindy-cliff";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CindyCliff,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
