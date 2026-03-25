import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DYAQuqF9.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CKCrAOCV.mjs';
import { $ as $$SellDirectCarouselHero, a as $$WeMakeThatEasyGrid } from '../chunks/WeMakeThatEasyGrid_CCPszjKV.mjs';
export { renderers } from '../renderers.mjs';

const $$ComponentsWeUse = createComponent(($$result, $$props, $$slots) => {
  const pageData = {
    path: "/components-we-use",
    title: "Components We Use | Cliff Mortgages",
    h1: "UI Components Library",
    description: "Reference-ready marketing sections that stay aligned with our current design language.",
    seoDescription: "Reusable Cliff Mortgages marketing components, ready to drop into landing pages and campaigns.",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Components We Use", path: "/components-we-use" }
    ],
    faqs: []
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageData": pageData }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-white"> <section class="space-y-16"> ${renderComponent($$result2, "SellDirectCarouselHero", $$SellDirectCarouselHero, {})} ${renderComponent($$result2, "WeMakeThatEasyGrid", $$WeMakeThatEasyGrid, {})} </section> </main> ` })}`;
}, "/Volumes/14 Tera/Development/Cliff Mortgages/cliff-mortgages-lead-gen-site (astro edition) copy/Astro Site/src/pages/components-we-use.astro", void 0);

const $$file = "/Volumes/14 Tera/Development/Cliff Mortgages/cliff-mortgages-lead-gen-site (astro edition) copy/Astro Site/src/pages/components-we-use.astro";
const $$url = "/components-we-use";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ComponentsWeUse,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
