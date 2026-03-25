import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DYAQuqF9.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CKCrAOCV.mjs';
import { a as allPageData } from '../chunks/Footer_BM-aK1EU.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const pageData = allPageData["/contact"];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageData": pageData }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-white py-16 sm:py-20"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto text-center"> <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"> ${pageData.h1} </h1> <p class="mt-4 text-xl text-gray-600">
Use the calendar below to book a free, no-obligation 30-minute consultation. We're happy to answer your questions and help you get started.
</p> </div> <div class="mt-12 max-w-4xl mx-auto h-[1050px] overflow-hidden rounded-lg shadow-lg border"> <iframe src="https://calendly.com/cindy-cliffmortgages/30min?embed_domain=www.cliffmortgages.com&embed_type=Inline" width="100%" height="100%" frameborder="0" title="Schedule a consultation with Cliff Mortgages via Calendly"></iframe> </div> </div> </section> ` })}`;
}, "/Volumes/14 Tera/Development/Cliff Mortgages/cliff-mortgages-lead-gen-site (astro edition) copy/Astro Site/src/pages/contact.astro", void 0);

const $$file = "/Volumes/14 Tera/Development/Cliff Mortgages/cliff-mortgages-lead-gen-site (astro edition) copy/Astro Site/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
