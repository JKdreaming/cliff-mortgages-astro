import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DP6RtkO9.mjs';
import { manifest } from './manifest_B58whOx2.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about/cindy-cliff.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/submit-heloc-form.astro.mjs');
const _page4 = () => import('./pages/components-we-use.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/equity-select-short-landing.astro.mjs');
const _page7 = () => import('./pages/equityselect-landing.astro.mjs');
const _page8 = () => import('./pages/get-a-quote.astro.mjs');
const _page9 = () => import('./pages/heloc-access-landing.astro.mjs');
const _page10 = () => import('./pages/legal/accessibility.astro.mjs');
const _page11 = () => import('./pages/legal/privacy-policy.astro.mjs');
const _page12 = () => import('./pages/loan-programs/_slug_.astro.mjs');
const _page13 = () => import('./pages/loan-programs.astro.mjs');
const _page14 = () => import('./pages/wide-equity-select-short-landing-page.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about/cindy-cliff.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/submit-heloc-form.ts", _page3],
    ["src/pages/components-we-use.astro", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/equity-select-short-landing.astro", _page6],
    ["src/pages/equityselect-landing.astro", _page7],
    ["src/pages/get-a-quote.astro", _page8],
    ["src/pages/heloc-access-landing.astro", _page9],
    ["src/pages/legal/accessibility.astro", _page10],
    ["src/pages/legal/privacy-policy.astro", _page11],
    ["src/pages/loan-programs/[slug].astro", _page12],
    ["src/pages/loan-programs.astro", _page13],
    ["src/pages/wide-equity-select-short-landing-page.astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "d4b5f527-cb9a-4d3a-9bc4-931429234705",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
