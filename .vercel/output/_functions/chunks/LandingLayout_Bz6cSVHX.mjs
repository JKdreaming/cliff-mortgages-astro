import { c as createComponent, d as createAstro, a as renderTemplate, r as renderComponent, e as renderSlot, b as addAttribute, f as renderHead, u as unescapeHTML, m as maybeRenderHead } from './astro/server_DYAQuqF9.mjs';
import 'piccolore';
/* empty css                         */
import { $ as $$Footer, d as cliffmortgagesLogo } from './Footer_BM-aK1EU.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro();
const $$LandingLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LandingLayout;
  const { pageData, footerVariant = "default" } = Astro2.props;
  const SITE_BASE_URL = "https://cliffmortgages.com";
  const DEFAULT_SOCIAL_IMAGE_URL = `${SITE_BASE_URL}/cliff-default-social-share-image.jpg`;
  const sanitizePath = (path) => {
    if (!path) return "/";
    if (path.startsWith("http")) return path;
    return path.startsWith("/") ? path : `/${path}`;
  };
  const canonicalUrl = (() => {
    if (!pageData.path) return SITE_BASE_URL;
    if (pageData.path.startsWith("http")) return pageData.path;
    return `${SITE_BASE_URL}${sanitizePath(pageData.path)}`;
  })();
  const resolveAbsoluteUrl = (url) => {
    if (!url) return DEFAULT_SOCIAL_IMAGE_URL;
    if (url.startsWith("http")) return url;
    return `${SITE_BASE_URL}${sanitizePath(url)}`;
  };
  const BRAND_SUFFIX = "Cliff Mortgages / C2 Financial / Colorado Mortgage Broker";
  const LEGACY_SUFFIX_PATTERN = /\s*\|\s*Cliff Mortgages\b/;
  const normalizeTitle = (rawTitle) => {
    if (!rawTitle) return BRAND_SUFFIX;
    if (rawTitle.includes(BRAND_SUFFIX)) return rawTitle;
    if (LEGACY_SUFFIX_PATTERN.test(rawTitle)) {
      return rawTitle.replace(LEGACY_SUFFIX_PATTERN, ` / ${BRAND_SUFFIX}`);
    }
    return `${rawTitle} | ${BRAND_SUFFIX}`;
  };
  const normalisedTitle = normalizeTitle(pageData.title);
  const metaDescription = pageData.seoDescription ?? pageData.description;
  const socialImage = resolveAbsoluteUrl(pageData.seoImageUrl ?? DEFAULT_SOCIAL_IMAGE_URL);
  const faqSchema = pageData.faqs?.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pageData.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  } : null;
  const breadcrumbSchema = pageData.breadcrumbs?.length ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: pageData.breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${SITE_BASE_URL}${sanitizePath(crumb.path)}`
    }))
  } : null;
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MortgageBroker",
    name: "Cliff Mortgages",
    url: SITE_BASE_URL,
    logo: `${SITE_BASE_URL}/cliffmortgages-logo.webp`,
    image: DEFAULT_SOCIAL_IMAGE_URL,
    telephone: "970-699-3900",
    email: "cindy@cliffmortgages.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "12230 El Camino Real, Suite 100",
      addressLocality: "San Diego",
      addressRegion: "CA",
      postalCode: "92130",
      addressCountry: "US"
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Colorado"
    },
    sameAs: ["https://www.facebook.com/profile.php?id=61557149998918", "https://www.linkedin.com/company/cliff-mortgages/"]
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Cliff Mortgages",
    url: SITE_BASE_URL
  };
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: normalisedTitle,
    description: metaDescription,
    inLanguage: "en",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: socialImage
    },
    isPartOf: {
      "@type": "WebSite",
      url: SITE_BASE_URL,
      name: "Cliff Mortgages"
    },
    publisher: {
      "@type": "Organization",
      name: "Cliff Mortgages",
      url: SITE_BASE_URL
    }
  };
  const schemas = [webpageSchema, faqSchema, breadcrumbSchema, organizationSchema, websiteSchema].filter(Boolean);
  return renderTemplate(_b || (_b = __template(['<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>', '</title><meta name="description"', '><meta name="title"', '><meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:image"', '><meta property="og:site_name" content="Cliff Mortgages"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><link rel="canonical"', `><link rel="icon" type="image/png" href="/cliffmortgages-favicon.png"><link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin><link rel="preconnect" href="https://www.googletagmanager.com" crossorigin><link rel="dns-prefetch" href="https://cdnjs.cloudflare.com"><link rel="dns-prefetch" href="https://www.googletagmanager.com"><link rel="preload" as="style" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" onload="this.onload=null;this.rel='stylesheet'">`, `<noscript><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer"></noscript><script async src="https://www.googletagmanager.com/gtag/js?id=G-RTE0P19P15"><\/script><script>
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', 'G-RTE0P19P15');
    <\/script><script>
      const waitForGtag = (callback, maxWait = 5000) => {
        const start = Date.now();
        const check = () => {
          if (typeof window.gtag === 'function') {
            callback();
          } else if (Date.now() - start < maxWait) {
            setTimeout(check, 100);
          }
        };
        check();
      };

      const attachTrackEventListeners = () => {
        const trackEvent = (eventName, params = {}) => {
          if (typeof window === 'undefined') return;
          const gtag = window.gtag;
          if (!gtag) return;
          gtag('event', eventName, params);
        };

        document.querySelectorAll('[data-track-event]').forEach((element) => {
          element.addEventListener('click', () => {
            const eventName = element.getAttribute('data-track-event');
            if (!eventName) return;
            const location = element.getAttribute('data-event-location');
            const payload = location
              ? { location, page: window.location.pathname }
              : { page: window.location.pathname };
            trackEvent(eventName, payload);
          });
        });
      };

      waitForGtag(attachTrackEventListeners);
    <\/script>`, "", '</head> <body class="bg-gray-50 min-h-screen font-sans text-gray-800"> <div class="flex flex-col min-h-screen"> <header class="bg-white shadow-sm"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center"> <img', ' alt="Cliff Mortgages Logo" class="h-10 w-auto rounded-[10px]" width="160" height="40" loading="eager"> </div> </header> <main class="flex-grow"> ', " </main> ", " </div> </body></html>"])), normalisedTitle, addAttribute(metaDescription, "content"), addAttribute(normalisedTitle, "content"), addAttribute(normalisedTitle, "content"), addAttribute(metaDescription, "content"), addAttribute(canonicalUrl, "content"), addAttribute(socialImage, "content"), addAttribute(normalisedTitle, "content"), addAttribute(metaDescription, "content"), addAttribute(socialImage, "content"), addAttribute(canonicalUrl, "href"), maybeRenderHead(), schemas.map((schema) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema)))), renderHead(), addAttribute(cliffmortgagesLogo.src, "src"), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "variant": footerVariant }));
}, "/Volumes/14 Tera/Development/Cliff Mortgages/cliff-mortgages-lead-gen-site (astro edition) copy/Astro Site/src/layouts/LandingLayout.astro", void 0);

export { $$LandingLayout as $ };
