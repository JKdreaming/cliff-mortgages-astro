import React from 'react';
import { trackEvent } from '../data/types';

export interface ApplyNowCTAProps {
  title: string;
}

const APPLY_NOW_URL = 'https://135622.my1003app.com/2075376/register';

const ApplyNowCTA: React.FC<ApplyNowCTAProps> = ({ title }) => {
  const handleClick = React.useCallback(() => {
    if (typeof window === 'undefined') return;
    trackEvent('apply_now_cta_click', { page: window.location.pathname });
  }, []);

  return (
    <section
      className="text-white"
      style={{ backgroundColor: 'rgb(191 159 92 / var(--tw-bg-opacity, 1))' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6 text-white">
        <p className="text-sm font-semibold uppercase tracking-widest text-white">
          Ready to take the next step?
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
        <p className="mx-auto max-w-2xl text-base text-white">
          Start your application to lock in your rate and move forward with confidence. Our team will guide you
          through every stage of the mortgage process.
        </p>
        <div>
          <a
            href={APPLY_NOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
            style={{ backgroundColor: 'rgb(9 20 62 / var(--tw-bg-opacity, 1))' }}
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ApplyNowCTA;
