import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DYAQuqF9.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CKCrAOCV.mjs';
import { $ as $$GenericHero } from '../../chunks/GenericHero_Dj9APbdo.mjs';
import { p as pageHeroImageKeys, a as allPageData, h as heroImageAssignments } from '../../chunks/Footer_BM-aK1EU.mjs';
export { renderers } from '../../renderers.mjs';

const $$Accessibility = createComponent(($$result, $$props, $$slots) => {
  const pageData = allPageData["/legal/accessibility"];
  const heroKey = pageHeroImageKeys[pageData.path];
  const hero = heroKey ? heroImageAssignments[heroKey] : void 0;
  const contactInfo = {
    phone: "970-699-3900",
    email: "corp@cliffmortgages.com",
    mailingAddress: "378 Nancy Court, Loveland, CO 80537"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageData": pageData }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GenericHero", $$GenericHero, { "title": pageData.h1, "subtitle": pageData.description, "imageUrl": hero?.src ?? pageData.imageUrl, "imageAlt": hero?.alt ?? pageData.imageAlt, "image": hero })} ${maybeRenderHead()}<section class="bg-white py-16 sm:py-20"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <article class="max-w-3xl mx-auto prose prose-headings:text-gray-900 prose-strong:text-gray-900 prose-a:text-[#09143e] prose-a:no-underline hover:prose-a:underline"> <p>
Cliff Mortgages is committed to providing a website experience that is usable and accessible for all visitors. We aim to make our online information
          easy to navigate and understand, regardless of the technology used to access it.
</p> <p>
Some features on our website—such as calculators, scheduling tools, or other embedded services—are provided by third-party vendors. While we cannot
          control the accessibility of these external platforms, we do our best to select reputable partners and offer assistance if you encounter any
          difficulty using them.
</p> <p>If you experience a barrier on our website or need help accessing information, please contact us and we will be happy to assist you.</p> <ul> <li><strong>Phone:</strong> ${contactInfo.phone}</li> <li> <strong>Email:</strong> <a${addAttribute(`mailto:${contactInfo.email}`, "href")}>${contactInfo.email}</a> </li> <li><strong>Mailing Address:</strong> ${contactInfo.mailingAddress}</li> </ul> <h2>Accessibility FAQ</h2> <h3>What steps do you take to support accessibility?</h3> <p>We aim to make our website easy to use and navigate for all visitors. If you experience any difficulty accessing information, please reach out so we can help.</p> <h3>Are third-party tools always accessible?</h3> <p>Some features on our site—such as calculators, scheduling tools, or other embedded services—are provided by outside vendors. Because we do not control those platforms, their accessibility may vary.</p> <h3>How can I request assistance?</h3> <p>If you need help accessing any part of our site or have questions about the information presented, please contact us by phone, email, or mail, and we will be happy to assist you.</p> </article> </div> </section> ` })}`;
}, "/Volumes/14 Tera/Development/Cliff Mortgages/cliff-mortgages-lead-gen-site (astro edition) copy/Astro Site/src/pages/legal/accessibility.astro", void 0);

const $$file = "/Volumes/14 Tera/Development/Cliff Mortgages/cliff-mortgages-lead-gen-site (astro edition) copy/Astro Site/src/pages/legal/accessibility.astro";
const $$url = "/legal/accessibility";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Accessibility,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
