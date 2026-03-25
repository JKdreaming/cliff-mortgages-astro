import { c as createComponent, d as createAstro, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, a as renderTemplate, r as renderComponent } from './astro/server_DYAQuqF9.mjs';
import 'piccolore';
import { $ as $$Picture } from './_astro_assets_iXBvs0Su.mjs';

const $$Astro = createAstro();
const $$GenericHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GenericHero;
  const defaultStats = [
    { title: "Expert Guidance", subtitle: "Local support with a personal touch.", iconClass: "fa-solid fa-user-tie" },
    { title: "More Options", subtitle: "Access to 100+ wholesale lenders through C2 Financial.", iconClass: "fa-solid fa-list-check" },
    { title: "Colorado Focused", subtitle: "Experience with Colorado buyers, homeowners, and investors.", iconClass: "fa-solid fa-map-marker-alt" }
  ];
  const {
    title,
    subtitle,
    imageUrl,
    imageAlt,
    quickStats = defaultStats,
    hideBadge = false,
    badgeText = "Your Trusted Colorado Mortgage Specialist",
    primaryCtaLabel = "Get a Free Quote",
    primaryCtaHref = "/get-a-quote",
    hidePrimaryCta = false,
    hideContactCta = false,
    imageObjectClassName = "object-cover",
    image,
    imageSizes = "(max-width: 1024px) 100vw, 50vw",
    imageLoading = "eager",
    statsOnRight = false,
    compactPadding = false
  } = Astro2.props;
  const titleParts = title.trim().split(" ");
  const lastWord = titleParts.pop();
  const titleStart = titleParts.join(" ");
  const showPrimaryCta = !hidePrimaryCta && !!primaryCtaLabel && !!primaryCtaHref;
  const showContactCta = !hideContactCta;
  const showCtas = showPrimaryCta || showContactCta;
  const presetWidths = [320, 480, 640, 768, 1024, 1280, 1536, 1920];
  let imageWidths = image ? presetWidths.filter((width) => width < image.width) : [];
  if (image) {
    if (!imageWidths.includes(image.width)) {
      imageWidths = [...imageWidths, image.width];
    }
    if (!imageWidths.length) {
      imageWidths = [image.width];
    }
  }
  return renderTemplate`${maybeRenderHead()}<div class="relative bg-white"> <div class="container mx-auto"> <div class="relative lg:grid lg:grid-cols-2 lg:gap-x-8"> <div${addAttribute(`relative z-10 px-4 sm:px-6 ${compactPadding ? "py-8 sm:py-12 lg:py-16" : "py-16 sm:py-24 lg:py-32"} lg:px-8 flex flex-col justify-center`, "class")}> <div class="lg:max-w-xl"> ${!hideBadge && badgeText && renderTemplate`<div class="mb-4"> <span class="inline-block bg-gray-200 text-gray-700 rounded-full px-4 py-1.5 text-sm font-semibold"> ${badgeText} </span> </div>`} <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"> ${titleStart}${" "} ${lastWord && renderTemplate`<span class="text-[#bf9f5c]">${lastWord}</span>`} </h1> <p class="mt-6 text-lg text-gray-600">${unescapeHTML(subtitle)}</p> ${showCtas && renderTemplate`<div class="mt-8 flex flex-wrap gap-4"> ${showPrimaryCta && renderTemplate`<a${addAttribute(primaryCtaHref, "href")} class="px-8 py-4 bg-[#bf9f5c] text-white font-semibold rounded-lg shadow-md hover:bg-[#a68a4c] transition duration-300"> ${primaryCtaLabel} </a>`} ${showContactCta && renderTemplate`<a href="/contact" class="px-8 py-4 bg-white text-[#09143e] font-semibold rounded-lg shadow-md border border-gray-200 hover:bg-gray-100 transition duration-300">
Contact Us
</a>`} </div>`} ${quickStats.length > 0 && !statsOnRight && renderTemplate`<div class="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-y-8 gap-x-4 text-left"> ${quickStats.map((stat) => renderTemplate`<div class="flex items-center"> <div class="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center"> <i${addAttribute(`${stat.iconClass} text-xl text-[#bf9f5c]`, "class")}></i> </div> <div class="ml-4"> <p class="font-bold text-gray-900">${stat.title}</p> <p class="text-sm text-gray-600">${stat.subtitle}</p> </div> </div>`)} </div>`} </div> </div> ${statsOnRight ? renderTemplate`<div${addAttribute(`relative px-4 sm:px-6 ${compactPadding ? "py-8 sm:py-12 lg:py-16" : "py-16 sm:py-24 lg:py-32"} lg:px-8 flex flex-col justify-center`, "class")}> ${quickStats.length > 0 && renderTemplate`<div class="grid grid-cols-1 gap-6 text-left"> ${quickStats.map((stat) => renderTemplate`<div class="flex items-center"> <div class="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center"> <i${addAttribute(`${stat.iconClass} text-xl text-[#bf9f5c]`, "class")}></i> </div> <div class="ml-4"> <p class="font-bold text-gray-900">${stat.title}</p> <p class="text-sm text-gray-600">${stat.subtitle}</p> </div> </div>`)} </div>`} </div>` : renderTemplate`<div class="relative h-80 lg:h-auto lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"> ${image ? renderTemplate`<div class="absolute inset-0"> ${renderComponent($$result, "Picture", $$Picture, { "src": image.asset, "alt": image.alt, "widths": imageWidths, "formats": ["avif", "webp"], "fallbackFormat": "jpeg", "sizes": imageSizes, "loading": imageLoading, "class": `h-full w-full ${imageObjectClassName}`, "style": "height: 100%; width: 100%; object-fit: cover;" })} </div>` : renderTemplate`<img${addAttribute(`absolute inset-0 h-full w-full ${imageObjectClassName}`, "class")}${addAttribute(imageUrl, "src")}${addAttribute(imageAlt, "alt")} loading="eager">`} </div>`} </div> </div> </div>`;
}, "/Volumes/14 Tera/Development/Cliff Mortgages/cliff-mortgages-lead-gen-site (astro edition) copy/Astro Site/src/components/GenericHero.astro", void 0);

export { $$GenericHero as $ };
