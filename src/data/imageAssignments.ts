import type { ImageMetadata } from 'astro';

import homeHeroImage from '../assets/images/black-real-estate-agent-showing-property-to-her-cl-2024-12-13-22-29-55-utc.jpg';
import homeEquityBannerBackground from '../assets/images/Depositphotos_600595700_L.jpg';
import aboutHeroImage from '../assets/images/multiracial-team-of-architects-having-a-meeting-wh-2025-04-01-13-10-07-utc.jpg';
import cindyHeroImage from '../assets/images/business-woman-handshake-and-applause-deal-with-s-2025-04-05-22-52-06-utc.jpg';
import cindyPortraitImage from '../assets/images/laughing-brunette-elegant-woman-giving-pointers-t-2025-08-31-03-28-56-utc.jpg';
import loanProgramsHeroImage from '../assets/images/vitaly-gariev-4_gR8nkzeuQ-unsplash.jpg';
import loanProgramsHeroPanelBackground from '../assets/images/exterior-design-of-a-modern-house-exterior-with-wa-2025-02-10-06-45-01-utc.jpg';
import loanProgramsEquityBackground from '../assets/images/portrait-of-a-young-couple-standing-outside-their-2025-04-05-13-10-04-utc.jpg';
import getQuoteHeroImage from '../assets/images/docusign-P9kDDB8APmE-unsplash.jpg';
import privacyHeroImage from '../assets/images/customers-who-choose-to-buy-a-condominium-room-and-2024-11-01-18-28-48-utc.jpg';
import accessibilityHeroImage from '../assets/images/portrait-of-senior-couple-standing-outside-front-d-2024-10-22-12-30-23-utc.jpg';
import disclosuresHeroImage from '../assets/images/architect-engineer-team-discusses-modern-house-mod-2025-03-08-14-31-58-utc.jpg';
import equitySelectProgramHeroImage from '../assets/images/senior-couple-holding-keys-and-standing-outside-th-2025-04-01-13-23-24-utc.jpg';
import purchaseHeroImage from '../assets/images/family-with-cardboard-boxes-and-labrador-dog-stand-2024-11-19-07-47-21-utc.jpg';
import refinanceHeroImage from '../assets/images/smiling-mature-couple-embracing-in-garden-of-their-2024-09-19-01-31-00-utc.jpg';
import helocHeroImage from '../assets/images/Depositphotos_587140642_L.jpg';
import dscrHeroImage from '../assets/images/Depositphotos_607609090_L.jpg';
import vaHeroImage from '../assets/images/Depositphotos_511183850_L.jpg';
import reverseMortgageHeroImage from '../assets/images/Depositphotos_60887993_L.jpg';
import jumboHeroImage from '../assets/images/Depositphotos_8716913_L.jpg';
import usdaHeroImage from '../assets/images/Depositphotos_663082552_L.jpg';
import commercialHeroImage from '../assets/images/Depositphotos_2561504_L.jpg';
import conventionalHeroImage from '../assets/images/portrait-of-happy-caucasian-couple-sitting-on-terr-2025-04-04-05-17-17-utc.jpg';
import fhaHeroImage from '../assets/images/young-happy-family-having-fun-on-sofa-in-bright-in-2024-10-16-17-43-16-utc.jpg';
import constructionHeroImage from '../assets/images/a-construction-site-a-domestic-house-being-built-2025-04-04-08-31-53-utc.jpg';
import fha203kHeroImage from '../assets/images/a-builder-sweeping-and-tidying-up-in-a-renovated-r-2025-04-04-00-29-21-utc.jpg';
import nonQmHeroImage from '../assets/images/portrait-of-successful-and-smiling-business-team-w-2025-01-10-04-29-07-utc.jpg';
import equitySelectBannerBackground from '../assets/images/portrait-of-a-latin-family-with-afro-hair-with-a-7-2025-01-08-03-41-40-utc.jpg';

export type NamedImageKey =
  | 'homeHero'
  | 'loanProgramsHero'
  | 'aboutHero'
  | 'cindyHero'
  | 'cindyPortrait'
  | 'getQuoteHero'
  | 'privacyPolicyHero'
  | 'accessibilityHero'
  | 'disclosuresHero'
  | 'equitySelectProgramHero'
  | 'purchaseHero'
  | 'refinanceHero'
  | 'helocHero'
  | 'dscrHero'
  | 'vaHero'
  | 'fhaHero'
  | 'reverseMortgageHero'
  | 'jumboHero'
  | 'conventionalHero'
  | 'usdaHero'
  | 'constructionHero'
  | 'commercialHero'
  | 'fha203kHero'
  | 'nonQmHero';

export interface ImageAssignment {
  asset: ImageMetadata;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface BackgroundAssignment {
  asset: ImageMetadata;
  src: string;
  width: number;
  height: number;
  description: string;
}

const createHeroAssignment = (asset: ImageMetadata, alt: string): ImageAssignment => ({
  asset,
  src: asset.src,
  width: asset.width,
  height: asset.height,
  alt,
});

export const heroImageAssignments: Record<NamedImageKey, ImageAssignment> = {
  homeHero: createHeroAssignment(conventionalHeroImage, 'Happy couple sitting on their patio discussing finances.'),
  loanProgramsHero: createHeroAssignment(loanProgramsHeroImage, 'Contemporary Colorado home with a clean modern exterior.'),
  aboutHero: createHeroAssignment(aboutHeroImage, 'Mortgage advisory team collaborating around a table.'),
  cindyHero: createHeroAssignment(cindyHeroImage, 'Mortgage professional celebrating clients with a handshake.'),
  cindyPortrait: createHeroAssignment(cindyPortraitImage, 'Friendly mortgage advisor smiling while offering guidance.'),
  getQuoteHero: createHeroAssignment(getQuoteHeroImage, "Client signing mortgage documents through an e-sign platform."),
  privacyPolicyHero: createHeroAssignment(privacyHeroImage, 'Borrowers reviewing documents in a modern condominium office.'),
  accessibilityHero: createHeroAssignment(accessibilityHeroImage, 'Smiling senior couple standing outside an accessible home entrance.'),
  disclosuresHero: createHeroAssignment(disclosuresHeroImage, 'Architects examining blueprints for compliance and licensing.'),
  equitySelectProgramHero: createHeroAssignment(equitySelectProgramHeroImage, 'Senior couple holding keys after unlocking home equity.'),
  purchaseHero: createHeroAssignment(purchaseHeroImage, 'Family moving into a new Colorado home with their dog.'),
  refinanceHero: createHeroAssignment(refinanceHeroImage, 'Homeowners embracing in their garden after refinancing success.'),
  helocHero: createHeroAssignment(helocHeroImage, 'Couple reviewing home equity options together at their kitchen table.'),
  dscrHero: createHeroAssignment(dscrHeroImage, 'Modern multifamily building representing a Colorado investment property.'),
  vaHero: createHeroAssignment(vaHeroImage, 'Veteran and spouse smiling outside their new Colorado home.'),
  fhaHero: createHeroAssignment(fhaHeroImage, 'Young family relaxing together on a bright living room sofa.'),
  reverseMortgageHero: createHeroAssignment(reverseMortgageHeroImage, 'Senior couple relaxing together in a bright living room.'),
  jumboHero: createHeroAssignment(jumboHeroImage, 'Expansive luxury home showcasing a spacious Colorado estate.'),
  conventionalHero: createHeroAssignment(homeHeroImage, 'Real estate agent guiding clients through a Colorado home showing.'),
  usdaHero: createHeroAssignment(usdaHeroImage, 'Scenic rural landscape with open fields and a farmhouse.'),
  constructionHero: createHeroAssignment(constructionHeroImage, 'Crew framing a new single-family home under blue skies.'),
  commercialHero: createHeroAssignment(commercialHeroImage, 'Commercial property owners meeting inside a modern office building.'),
  fha203kHero: createHeroAssignment(fha203kHeroImage, 'Contractor managing a renovation project in a new space.'),
  nonQmHero: createHeroAssignment(nonQmHeroImage, 'Successful business team collaborating on financing solutions.'),
};

export const supplementalImageKeys = {
  cindyPortrait: 'cindyPortrait' as const,
};

export const pageHeroImageKeys: Record<string, NamedImageKey> = {
  '/': 'homeHero',
  '/loan-programs': 'loanProgramsHero',
  '/about': 'aboutHero',
  '/about/cindy-cliff': 'cindyHero',
  '/get-a-quote': 'getQuoteHero',
  '/legal/privacy-policy': 'privacyPolicyHero',
  '/legal/accessibility': 'accessibilityHero',
  '/loan-programs/equity-select': 'equitySelectProgramHero',
  '/loan-programs/purchase': 'purchaseHero',
  '/loan-programs/refinance': 'refinanceHero',
  '/loan-programs/heloc': 'helocHero',
  '/loan-programs/dscr': 'dscrHero',
  '/loan-programs/va': 'vaHero',
  '/loan-programs/fha': 'fhaHero',
  '/loan-programs/reverse-mortgage': 'reverseMortgageHero',
  '/loan-programs/jumbo': 'jumboHero',
  '/loan-programs/conventional': 'conventionalHero',
  '/loan-programs/usda': 'usdaHero',
  '/loan-programs/construction': 'constructionHero',
  '/loan-programs/commercial': 'commercialHero',
  '/loan-programs/fha-203k': 'fha203kHero',
  '/loan-programs/non-qm': 'nonQmHero',
};

const createBackgroundAssignment = (asset: ImageMetadata, description: string): BackgroundAssignment => ({
  asset,
  src: asset.src,
  width: asset.width,
  height: asset.height,
  description,
});

export const backgroundImageAssignments: Record<string, BackgroundAssignment> = {
  homeEquitySelectBanner: createBackgroundAssignment(
    homeEquityBannerBackground,
    'Modern Colorado home exterior with impressive architectural details.'
  ),
  loanProgramsEquitySelectBanner: createBackgroundAssignment(
    loanProgramsEquityBackground,
    'Young couple outside their home discussing flexible financing.'
  ),
  loanProgramsHeroRightPanel: createBackgroundAssignment(
    loanProgramsHeroPanelBackground,
    'Contemporary home exterior with a welcoming entryway.'
  ),
  equitySelectProgramHighlight: createBackgroundAssignment(
    equitySelectBannerBackground,
    'Happy Latinx family spending time together at home.'
  ),
};
