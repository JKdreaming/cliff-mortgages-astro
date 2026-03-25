import { c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DYAQuqF9.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CKCrAOCV.mjs';
import { $ as $$GenericHero } from '../chunks/GenericHero_Dj9APbdo.mjs';
import { p as pageHeroImageKeys, a as allPageData, h as heroImageAssignments } from '../chunks/Footer_BM-aK1EU.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$GetAQuote = createComponent(($$result, $$props, $$slots) => {
  const pageData = allPageData["/get-a-quote"];
  const heroKey = pageHeroImageKeys[pageData.path];
  const hero = heroKey ? heroImageAssignments[heroKey] : void 0;
  return renderTemplate(_a || (_a = __template(["", ` <script>
  if (typeof window !== 'undefined') {
    const existing = document.querySelector('script[data-formcan="true"]');
    if (!existing) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = '//static.formcan.com/assets/dist/formbuilder.js?v=20';
      script.dataset.formcan = 'true';

      const trackEvent = (eventName, params = {}) => {
        const gtag = window.gtag;
        if (!gtag) return;
        gtag('event', eventName, params);
      };

      script.addEventListener('load', () => {
        trackEvent('quote_form_submit', {
          page: window.location.pathname,
          form_id: 'get_a_quote',
          action: 'form_displayed',
        });
      });

      document.body.appendChild(script);
    }
  }
<\/script>`])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageData": pageData }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GenericHero", $$GenericHero, { "title": pageData.h1, "subtitle": pageData.description, "imageUrl": hero?.src ?? pageData.imageUrl, "imageAlt": hero?.alt ?? pageData.imageAlt, "image": hero, "hidePrimaryCta": true, "statsOnRight": true, "compactPadding": true, "hideContactCta": true, "imageObjectClassName": "object-cover" })} ${maybeRenderHead()}<section class="bg-gray-50 py-8 sm:py-10"> <div id="quote-form-section" class="container mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24"> <div class="plato-form-widget" data-pf-id="frk5f5bmmwx" data-pf-host="form.formcan.com/"></div> <noscript>Please enable JavaScript to load the quote request form.</noscript> </div> </section> ` }));
}, "/Volumes/14 Tera/Development/Cliff Mortgages/cliff-mortgages-lead-gen-site (astro edition) copy/Astro Site/src/pages/get-a-quote.astro", void 0);

const $$file = "/Volumes/14 Tera/Development/Cliff Mortgages/cliff-mortgages-lead-gen-site (astro edition) copy/Astro Site/src/pages/get-a-quote.astro";
const $$url = "/get-a-quote";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GetAQuote,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
