import { allPageData } from '../data/sitemap';

const CTA_TITLE_OVERRIDES: Record<string, string> = {
  '/': 'Start Your Colorado Mortgage Application',
  '/loan-programs': 'Find the Right Loan Program and Apply Today',
  '/get-a-quote': 'Apply to Get Your Personalized Mortgage Quote',
  '/about': 'Apply for Your Colorado Home Loan',
  '/about/cindy-cliff': 'Apply with Cindy Cliff Today',
  '/contact': 'Apply and Connect with Our Mortgage Team',
};

const DEFAULT_CTA_TITLE = 'Apply for your home loan today';

const sanitizePath = (pathname: string) => {
  if (!pathname) {
    return '/';
  }

  if (pathname !== '/' && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }

  return pathname;
};

export const getApplyNowTitle = (pathname: string) => {
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
