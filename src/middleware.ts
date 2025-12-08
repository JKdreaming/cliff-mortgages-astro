import type { MiddlewareHandler } from 'astro';

const securityHeaders: Record<string, string> = {
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()'
};

type CspDirective = Record<string, readonly string[]>;

// Centralised allow-lists make it easier to audit third-party dependencies and
// enforce CSP once the report-only phase is complete.
const CSP_SOURCES: CspDirective = {
  'default-src': ["'self'"],
  'script-src': [
    "'self'",
    "'unsafe-inline'",
    'https://www.googletagmanager.com',
    'https://www.google-analytics.com',
    'https://www.gstatic.com',
    'https://widgetbe.com',
    'https://static.formcan.com',
    'https://form.formcan.com'
  ],
  'connect-src': [
    "'self'",
    'https://www.google-analytics.com',
    'https://www.googletagmanager.com',
    'https://stats.g.doubleclick.net',
    'https://widgetbe.com',
    'https://form.formcan.com'
  ],
  'style-src': ["'self'", "'unsafe-inline'", 'https://cdnjs.cloudflare.com'],
  'font-src': ["'self'", 'https://cdnjs.cloudflare.com'],
  'img-src': [
    "'self'",
    'data:',
    'https://www.googletagmanager.com',
    'https://www.google-analytics.com',
    'https://stats.g.doubleclick.net',
    'https://widgetbe.com'
  ],
  'frame-src': ["'self'", 'https://widgetbe.com', 'https://calendly.com'],
  'report-uri': ['https://cliffmortgages.report-uri.com/r/d/csp/reportOnly']
};

const buildCsp = (directives: CspDirective) =>
  Object.entries(directives)
    .map(([directive, sources]) => `${directive} ${sources.join(' ')};`)
    .join(' ');

const cspReportOnly = buildCsp(CSP_SOURCES);

export const onRequest: MiddlewareHandler = async (context, next) => {
  const response = await next();

  const headers = response.headers;

  Object.entries(securityHeaders).forEach(([key, value]) => {
    if (!headers.has(key)) {
      headers.set(key, value);
    }
  });

  if (!headers.has('Content-Security-Policy') && !headers.has('Content-Security-Policy-Report-Only')) {
    headers.set('Content-Security-Policy-Report-Only', cspReportOnly);
  }

  if (!headers.has('Cross-Origin-Resource-Policy')) {
    headers.set('Cross-Origin-Resource-Policy', 'same-origin');
  }

  if (!headers.has('Cross-Origin-Opener-Policy')) {
    headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  }

  return response;
};
