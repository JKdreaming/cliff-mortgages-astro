import React from 'react';

interface QuickStat {
  title: string;
  subtitle: string;
  iconClass: string;
}

export interface GenericHeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  quickStats?: QuickStat[];
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  hideContactCta?: boolean;
  imageObjectClassName?: string;
}

const defaultStats: QuickStat[] = [
  {
    title: 'Expert Guidance',
    subtitle: 'Local support with a personal touch.',
    iconClass: 'fa-solid fa-user-tie',
  },
  {
    title: 'More Options',
    subtitle: 'Access to 100+ wholesale lenders through C2 Financial.',
    iconClass: 'fa-solid fa-list-check',
  },
  {
    title: 'Colorado Focused',
    subtitle: 'Experience with Colorado buyers, homeowners, and investors.',
    iconClass: 'fa-solid fa-map-marker-alt',
  },
];

export const GenericHeroReact: React.FC<GenericHeroProps> = ({
  title,
  subtitle,
  imageUrl,
  imageAlt,
  quickStats,
  primaryCtaLabel = 'Get a Free Quote',
  primaryCtaHref = '/get-a-quote',
  hideContactCta = false,
  imageObjectClassName = 'object-cover',
}) => {
  const statsToRender = quickStats && quickStats.length ? quickStats : defaultStats;

  const titleParts = title.trim().split(' ');
  const lastWord = titleParts.pop();
  const titleStart = titleParts.join(' ');

  return (
    <div className="relative bg-white">
      <div className="container mx-auto">
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="relative z-10 px-4 sm:px-6 py-16 sm:py-24 lg:py-32 lg:px-8 flex flex-col justify-center">
            <div className="lg:max-w-xl">
              <div className="mb-4">
                <span className="inline-block bg-gray-200 text-gray-700 rounded-full px-4 py-1.5 text-sm font-semibold">
                  Your Trusted Colorado Mortgage Specialist
                </span>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                {titleStart}{' '}
                {lastWord && <span className="text-[#bf9f5c]">{lastWord}</span>}
              </h1>
              <p className="mt-6 text-lg text-gray-600" dangerouslySetInnerHTML={{ __html: subtitle }} />

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={primaryCtaHref}
                  className="px-8 py-4 bg-[#bf9f5c] text-white font-semibold rounded-lg shadow-md hover:bg-[#a68a4c] transition duration-300"
                >
                  {primaryCtaLabel}
                </a>
                {!hideContactCta && (
                  <a
                    href="/contact"
                    className="px-8 py-4 bg-white text-[#09143e] font-semibold rounded-lg shadow-md border border-gray-200 hover:bg-gray-100 transition duration-300"
                  >
                    Contact Us
                  </a>
                )}
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-y-8 gap-x-4 text-left">
                {statsToRender.map((stat) => (
                  <div className="flex items-center" key={stat.title}>
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <i className={`${stat.iconClass} text-xl text-[#bf9f5c]`} aria-hidden="true"></i>
                    </div>
                    <div className="ml-4">
                      <p className="font-bold text-gray-900">{stat.title}</p>
                      <p className="text-sm text-gray-600">{stat.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative h-80 lg:h-auto lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className={`absolute inset-0 h-full w-full ${imageObjectClassName}`}
              src={imageUrl}
              alt={imageAlt}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericHeroReact;
