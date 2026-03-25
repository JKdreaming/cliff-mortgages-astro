import { c as createComponent, d as createAstro, m as maybeRenderHead, a as renderTemplate, b as addAttribute, g as renderScript, r as renderComponent, e as renderSlot, f as renderHead, u as unescapeHTML } from './astro/server_DYAQuqF9.mjs';
import 'piccolore';
import { jsxs, jsx } from 'react/jsx-runtime';
import React, { useState, useRef, useMemo, useEffect } from 'react';
import { d as cliffmortgagesLogo, b as sitemap, a as allPageData, $ as $$Footer } from './Footer_BM-aK1EU.mjs';
import 'clsx';
/* empty css                         */

const loanProgramBuckets = () => {
  const loanPrograms = sitemap.loanPrograms;
  const homebuyersPrograms = loanPrograms.filter(
    (program) => ["/loan-programs/purchase", "/loan-programs/refinance", "/loan-programs/heloc", "/loan-programs/conventional"].includes(program.path)
  );
  const governmentPrograms = loanPrograms.filter(
    (program) => ["/loan-programs/fha", "/loan-programs/va", "/loan-programs/usda", "/loan-programs/fha-203k"].includes(program.path)
  );
  const investorPrograms = loanPrograms.filter(
    (program) => ["/loan-programs/dscr", "/loan-programs/non-qm", "/loan-programs/commercial"].includes(program.path)
  );
  const specializedPrograms = loanPrograms.filter(
    (program) => ["/loan-programs/jumbo", "/loan-programs/reverse-mortgage", "/loan-programs/construction", "/loan-programs/equity-select"].includes(program.path)
  );
  return { homebuyersPrograms, governmentPrograms, investorPrograms, specializedPrograms };
};
const isPathActive = (targetPath, currentPath) => {
  if (targetPath === "/") {
    return currentPath === "/";
  }
  return currentPath === targetPath || currentPath.startsWith(`${targetPath}/`);
};
const Header = ({ currentPath }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const megaMenuRef = useRef(null);
  const { homebuyersPrograms, governmentPrograms, investorPrograms, specializedPrograms } = useMemo(
    () => loanProgramBuckets(),
    []
  );
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    setOpenMobileDropdown(null);
  }, [currentPath]);
  useEffect(() => {
    if (!isMegaMenuOpen) {
      return;
    }
    const handleClickOutside = (event) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setIsMegaMenuOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMegaMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMegaMenuOpen]);
  const navLinkClasses = (active) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${active ? "bg-gray-100 text-[#09143e]" : "text-gray-700 hover:bg-gray-100 hover:text-[#09143e]"}`;
  const mobileNavLinkClasses = (active) => `block px-3 py-2 rounded-md text-base font-medium transition-colors ${active ? "bg-gray-100 text-[#09143e]" : "text-gray-700 hover:bg-gray-100 hover:text-[#09143e]"}`;
  const handleLoanProgramsClick = (event) => {
    if (!isMegaMenuOpen) {
      event.preventDefault();
      setIsMegaMenuOpen(true);
      return;
    }
    event.preventDefault();
    setIsMegaMenuOpen(false);
  };
  const handleLoanProgramsKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsMegaMenuOpen((prev) => !prev);
    }
    if (event.key === "Escape") {
      setIsMegaMenuOpen(false);
    }
  };
  const renderMobileDropdown = () => {
    const isOpen = openMobileDropdown === "loan";
    const sections = [
      { title: "For Homebuyers", programs: homebuyersPrograms },
      { title: "Government Programs", programs: governmentPrograms },
      { title: "Investor & Non-QM", programs: investorPrograms },
      { title: "Specialized Financing", programs: specializedPrograms }
    ];
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setOpenMobileDropdown((prev) => prev === "loan" ? null : "loan"),
          className: "group flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100",
          children: [
            /* @__PURE__ */ jsx("span", { children: "Loan Programs" }),
            /* @__PURE__ */ jsx("i", { className: `fas fa-chevron-down ml-1 text-xs transition-transform ${isOpen ? "rotate-180" : ""}` })
          ]
        }
      ),
      isOpen && /* @__PURE__ */ jsxs("div", { className: "mt-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/loan-programs",
            className: "block rounded-lg bg-[#09143e] px-4 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#0f1d5a]",
            role: "menuitem",
            children: "View All Loan Programs"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "mt-4 grid gap-4", style: { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }, children: sections.map((section) => /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("p", { className: "text-[11px] font-semibold uppercase tracking-wide text-gray-500", children: section.title }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2", children: section.programs.map((program) => /* @__PURE__ */ jsxs(
            "a",
            {
              href: program.path,
              className: "flex items-start gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 text-left transition-colors hover:border-[#bf9f5c] hover:bg-[#f7f1e2]",
              role: "menuitem",
              children: [
                /* @__PURE__ */ jsx("i", { className: `${program.icon} mt-1 text-xl text-[#bf9f5c] flex-shrink-0` }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-gray-900", children: program.name }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs leading-snug text-gray-500", children: program.description })
                ] })
              ]
            },
            program.path
          )) })
        ] }, section.title)) })
      ] })
    ] });
  };
  return /* @__PURE__ */ jsxs("header", { className: "bg-white shadow-sm sticky top-0 z-50", children: [
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx("img", { src: cliffmortgagesLogo.src, alt: "Cliff Mortgages Logo", className: "h-10 w-auto rounded-[10px]" }) }) }),
        /* @__PURE__ */ jsx("nav", { className: "hidden xl:block", children: /* @__PURE__ */ jsxs("div", { className: "ml-10 flex items-baseline space-x-4", children: [
          /* @__PURE__ */ jsx("a", { href: "/", className: navLinkClasses(isPathActive("/", currentPath)), children: "Home" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", ref: megaMenuRef, children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "/loan-programs",
                className: navLinkClasses(isPathActive("/loan-programs", currentPath)),
                onClick: handleLoanProgramsClick,
                onKeyDown: handleLoanProgramsKeyDown,
                "aria-expanded": isMegaMenuOpen,
                "aria-haspopup": "true",
                children: [
                  /* @__PURE__ */ jsx("span", { children: "Loan Programs" }),
                  /* @__PURE__ */ jsx("i", { className: `fas fa-chevron-down text-xs ml-1 transition-transform transform ${isMegaMenuOpen ? "rotate-180" : ""}` })
                ]
              }
            ),
            isMegaMenuOpen && /* @__PURE__ */ jsxs("div", { className: "absolute top-full mt-2 w-[900px] bg-white rounded-lg shadow-2xl p-6 grid grid-cols-4 gap-x-8 gap-y-4 left-1/2 -translate-x-1/2", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3", children: "For Homebuyers" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-1", children: homebuyersPrograms.map((program) => /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: program.path,
                    className: "flex items-start p-3 rounded-lg hover:bg-gray-100 transition-colors -mx-3",
                    children: [
                      /* @__PURE__ */ jsx("i", { className: `${program.icon} text-[#bf9f5c] text-xl w-8 text-center mt-1` }),
                      /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
                        /* @__PURE__ */ jsx("p", { className: "font-semibold text-gray-900 text-sm", children: program.name }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: program.description })
                      ] })
                    ]
                  },
                  program.path
                )) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3", children: "Government Programs" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-1", children: governmentPrograms.map((program) => /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: program.path,
                    className: "flex items-start p-3 rounded-lg hover:bg-gray-100 transition-colors -mx-3",
                    children: [
                      /* @__PURE__ */ jsx("i", { className: `${program.icon} text-[#bf9f5c] text-xl w-8 text-center mt-1` }),
                      /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
                        /* @__PURE__ */ jsx("p", { className: "font-semibold text-gray-900 text-sm", children: program.name }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: program.description })
                      ] })
                    ]
                  },
                  program.path
                )) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3", children: "Specialized Financing" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-1", children: specializedPrograms.map((program) => /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: program.path,
                    className: "flex items-start p-3 rounded-lg hover:bg-gray-100 transition-colors -mx-3",
                    children: [
                      /* @__PURE__ */ jsx("i", { className: `${program.icon} text-[#bf9f5c] text-xl w-8 text-center mt-1` }),
                      /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
                        /* @__PURE__ */ jsx("p", { className: "font-semibold text-gray-900 text-sm", children: program.name }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: program.description })
                      ] })
                    ]
                  },
                  program.path
                )) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3", children: "Investor & Non-QM" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-1", children: investorPrograms.map((program) => /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: program.path,
                    className: "flex items-start p-3 rounded-lg hover:bg-gray-100 transition-colors -mx-3",
                    children: [
                      /* @__PURE__ */ jsx("i", { className: `${program.icon} text-[#bf9f5c] text-xl w-8 text-center mt-1` }),
                      /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
                        /* @__PURE__ */ jsx("p", { className: "font-semibold text-gray-900 text-sm", children: program.name }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: program.description })
                      ] })
                    ]
                  },
                  program.path
                )) }),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "/loan-programs",
                    className: "mt-4 flex items-center justify-between rounded-2xl bg-[#09143e] px-4 py-3 text-xs font-semibold uppercase tracking-wide text-white shadow-lg transition hover:bg-[#0f1d5a]",
                    children: [
                      /* @__PURE__ */ jsx("span", { children: "Explore all loan programs" }),
                      /* @__PURE__ */ jsx("span", { className: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20", children: /* @__PURE__ */ jsx("i", { className: "fas fa-compass text-sm", "aria-hidden": "true" }) })
                    ]
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("a", { href: "/about", className: navLinkClasses(isPathActive("/about", currentPath)), children: "About" }),
          /* @__PURE__ */ jsx("a", { href: "/contact", className: navLinkClasses(isPathActive("/contact", currentPath)), children: "Contact" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hidden xl:block", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "/get-a-quote",
          className: "px-4 py-2 bg-[#bf9f5c] text-white font-semibold rounded-lg shadow-sm hover:bg-[#a68a4c] transition-transform hover:scale-105 text-sm",
          children: "Get a Quote"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "-mr-2 flex xl:hidden", children: /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
          type: "button",
          className: "bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#09143e]",
          "aria-controls": "mobile-menu",
          "aria-expanded": isMobileMenuOpen,
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open main menu" }),
            isMobileMenuOpen ? /* @__PURE__ */ jsx("i", { className: "fas fa-times block h-6 w-6" }) : /* @__PURE__ */ jsx("i", { className: "fas fa-bars block h-6 w-6" })
          ]
        }
      ) })
    ] }) }),
    isMobileMenuOpen && /* @__PURE__ */ jsx("nav", { className: "xl:hidden max-h-[calc(100vh-4rem)] overflow-y-auto", id: "mobile-menu", children: /* @__PURE__ */ jsxs("div", { className: "px-2 pt-2 pb-3 space-y-1 sm:px-3", children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: mobileNavLinkClasses(isPathActive("/", currentPath)), children: "Home" }),
      renderMobileDropdown(),
      /* @__PURE__ */ jsx("a", { href: "/about", className: mobileNavLinkClasses(isPathActive("/about", currentPath)), children: "About" }),
      /* @__PURE__ */ jsx("a", { href: "/contact", className: mobileNavLinkClasses(isPathActive("/contact", currentPath)), children: "Contact" }),
      /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "/get-a-quote",
          className: "block w-full text-center px-4 py-3 bg-[#bf9f5c] text-white font-semibold rounded-lg shadow-sm hover:bg-[#a68a4c] transition duration-300 text-sm",
          children: "Get a Quote"
        }
      ) })
    ] }) })
  ] });
};

const trackEvent = (eventName, params) => {
  if (typeof window === "undefined") return;
  const gtag = window.gtag;
  if (!gtag) return;
  gtag("event", eventName, params || {});
};

const APPLY_NOW_URL = "https://135622.my1003app.com/2075376/register";
const ApplyNowCTA = ({ title }) => {
  const handleClick = React.useCallback(() => {
    if (typeof window === "undefined") return;
    trackEvent("apply_now_cta_click", { page: window.location.pathname });
  }, []);
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "text-white",
      style: { backgroundColor: "rgb(191 159 92 / var(--tw-bg-opacity, 1))" },
      children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6 text-white", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-widest text-white", children: "Ready to take the next step?" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: title }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto max-w-2xl text-base text-white", children: "Start your application to lock in your rate and move forward with confidence. Our team will guide you through every stage of the mortgage process." }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          "a",
          {
            href: APPLY_NOW_URL,
            target: "_blank",
            rel: "noopener noreferrer",
            onClick: handleClick,
            className: "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-white hover:opacity-90",
            style: { backgroundColor: "rgb(9 20 62 / var(--tw-bg-opacity, 1))" },
            children: "Apply Now"
          }
        ) })
      ] })
    }
  );
};

const $$Astro$1 = createAstro();
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { items = [] } = Astro2.props;
  return renderTemplate`${items.length > 0 && renderTemplate`${maybeRenderHead()}<nav aria-label="Breadcrumb" class="bg-gray-100"><div class="container mx-auto px-4 sm:px-6 lg:px-8"><ol class="flex items-center space-x-2 py-3 text-sm">${items.map((item, index) => renderTemplate`<li class="flex items-center">${index > 0 && renderTemplate`<i class="fa-solid fa-chevron-right text-[#8a6c30] mx-2 text-xs" aria-hidden="true"></i>`}${index === items.length - 1 ? renderTemplate`<span class="text-gray-700 font-semibold" aria-current="page">${item.name}</span>` : renderTemplate`<a${addAttribute(item.path, "href")} class="text-[#0b1640] hover:underline">${item.name}</a>`}</li>`)}</ol></div></nav>`}`;
}, "/Volumes/14 Tera/Development/Cliff Mortgages/cliff-mortgages-lead-gen-site (astro edition) copy/Astro Site/src/components/Breadcrumbs.astro", void 0);

const FAQAccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "border-b", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setIsOpen((prev) => !prev),
        className: "w-full flex justify-between items-center text-left py-4 px-2 hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-[#09143e] focus-visible:ring-opacity-75",
        "aria-expanded": isOpen,
        children: [
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-lg text-gray-800", children: item.question }),
          /* @__PURE__ */ jsx("i", { className: `fa-solid fa-chevron-down text-[#bf9f5c] transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}` })
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsx("div", { className: "px-2 pb-4 text-gray-600", children: /* @__PURE__ */ jsx("p", { children: item.answer }) })
  ] });
};
const FAQBlock = ({ faqs }) => {
  if (!faqs || faqs.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsx("div", { className: "bg-white py-16 sm:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center text-gray-900 mb-12", children: "Frequently Asked Questions" }),
    /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto", children: faqs.map((faq, index) => /* @__PURE__ */ jsx(FAQAccordionItem, { item: faq }, `${faq.question}-${index}`)) })
  ] }) });
};

const CTA_TITLE_OVERRIDES = {
  "/": "Start Your Colorado Mortgage Application",
  "/loan-programs": "Find the Right Loan Program and Apply Today",
  "/get-a-quote": "Apply to Get Your Personalized Mortgage Quote",
  "/about": "Apply for Your Colorado Home Loan",
  "/about/cindy-cliff": "Apply with Cindy Cliff Today",
  "/contact": "Apply and Connect with Our Mortgage Team"
};
const DEFAULT_CTA_TITLE = "Apply for your home loan today";
const sanitizePath = (pathname) => {
  if (!pathname) {
    return "/";
  }
  if (pathname !== "/" && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
};
const getApplyNowTitle = (pathname) => {
  const sanitized = sanitizePath(pathname);
  if (CTA_TITLE_OVERRIDES[sanitized]) {
    return CTA_TITLE_OVERRIDES[sanitized];
  }
  const pageData = allPageData[sanitized];
  if (pageData?.h1) {
    const heading = pageData.h1.trim();
    if (/^apply/i.test(heading)) {
      return heading;
    }
    return `Apply for ${heading}`;
  }
  return DEFAULT_CTA_TITLE;
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageData } = Astro2.props;
  const currentPath = Astro2.url.pathname;
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
  const socialImage = pageData.seoImageUrl ?? DEFAULT_SOCIAL_IMAGE_URL;
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
    url: canonicalUrl,
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
    sameAs: [
      "https://www.facebook.com/profile.php?id=61557149998918",
      "https://www.linkedin.com/company/cliff-mortgages/"
    ]
  };
  const schemas = [faqSchema, breadcrumbSchema, organizationSchema].filter(Boolean);
  const applyNowTitle = getApplyNowTitle(currentPath);
  return renderTemplate(_b || (_b = __template(['<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>', '</title><meta name="description"', '><meta name="title"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:image"', '><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><link rel="canonical"', `><link rel="icon" type="image/png" href="/cliffmortgages-favicon.png"><link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin><link rel="preconnect" href="https://widgetbe.com" crossorigin><link rel="preconnect" href="https://www.googletagmanager.com" crossorigin><link rel="dns-prefetch" href="https://cdnjs.cloudflare.com"><link rel="dns-prefetch" href="https://widgetbe.com"><link rel="dns-prefetch" href="https://www.googletagmanager.com"><link rel="preload" as="style" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" onload="this.onload=null;this.rel='stylesheet'">`, `<noscript><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer"></noscript><style>
      @font-face {
        font-display: swap;
      }
    </style><script async src="https://www.googletagmanager.com/gtag/js?id=G-RTE0P19P15"><\/script><script>
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
    <\/script>`, "", '</head> <body class="bg-gray-50 min-h-screen font-sans text-gray-800"> <div class="flex flex-col min-h-screen"> ', ' <main class="flex-grow"> ', " ", " ", " </main> ", " ", " </div> ", " </body> </html>"])), normalisedTitle, addAttribute(metaDescription, "content"), addAttribute(normalisedTitle, "content"), addAttribute(normalisedTitle, "content"), addAttribute(metaDescription, "content"), addAttribute(canonicalUrl, "content"), addAttribute(socialImage, "content"), addAttribute(normalisedTitle, "content"), addAttribute(metaDescription, "content"), addAttribute(socialImage, "content"), addAttribute(canonicalUrl, "href"), maybeRenderHead(), schemas.map((schema) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema)))), renderHead(), renderComponent($$result, "Header", Header, { "client:idle": true, "currentPath": currentPath, "client:component-hydration": "idle", "client:component-path": "/Volumes/14 Tera/Development/Cliff Mortgages/cliff-mortgages-lead-gen-site (astro edition) copy/Astro Site/src/components/Header", "client:component-export": "default" }), renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "items": pageData.breadcrumbs }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "FAQBlock", FAQBlock, { "client:idle": true, "faqs": pageData.faqs, "client:component-hydration": "idle", "client:component-path": "/Volumes/14 Tera/Development/Cliff Mortgages/cliff-mortgages-lead-gen-site (astro edition) copy/Astro Site/src/components/FAQBlock", "client:component-export": "default" }), renderComponent($$result, "ApplyNowCTA", ApplyNowCTA, { "client:idle": true, "title": applyNowTitle, "client:component-hydration": "idle", "client:component-path": "/Volumes/14 Tera/Development/Cliff Mortgages/cliff-mortgages-lead-gen-site (astro edition) copy/Astro Site/src/components/ApplyNowCTA", "client:component-export": "default" }), renderComponent($$result, "Footer", $$Footer, {}), renderScript($$result, "/Volumes/14 Tera/Development/Cliff Mortgages/cliff-mortgages-lead-gen-site (astro edition) copy/Astro Site/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"));
}, "/Volumes/14 Tera/Development/Cliff Mortgages/cliff-mortgages-lead-gen-site (astro edition) copy/Astro Site/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
