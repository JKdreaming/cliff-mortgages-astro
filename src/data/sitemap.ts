import type { PageData, LoanProgramLink } from './types';
import { heroImageAssignments } from './imageAssignments';

export const sitemap = {
  home: { path: '/', name: 'Home' },
  loanPrograms: [
    { path: '/loan-programs/purchase', name: 'Purchase Loans', icon: 'fa-solid fa-key', description: 'Finance your new home purchase.' },
    { path: '/loan-programs/refinance', name: 'Refinance', icon: 'fa-solid fa-arrows-rotate', description: 'Lower your rate or tap into equity.' },
    { path: '/loan-programs/heloc', name: 'HELOC', icon: 'fa-solid fa-house-chimney-window', description: 'Flexible line of credit using your equity.' },
    { path: '/loan-programs/equity-select', name: 'Equity Select', icon: 'fa-solid fa-layer-group', description: 'Flexible line of credit with predictable payments.' },
    { path: '/loan-programs/dscr', name: 'DSCR / Investor', icon: 'fa-solid fa-building-columns', description: 'For real estate investment properties.' },
    { path: '/loan-programs/reverse-mortgage', name: 'Reverse Mortgages', icon: 'fa-solid fa-user-clock', description: 'For seniors 62+ to access equity.' },
    { path: '/loan-programs/jumbo', name: 'Jumbo Loans', icon: 'fa-solid fa-gem', description: 'For loan amounts above conforming limits.' },
    { path: '/loan-programs/conventional', name: 'Conventional Loans', icon: 'fa-solid fa-handshake', description: 'The most common type of mortgage.' },
    { path: '/loan-programs/fha', name: 'FHA Loans', icon: 'fa-solid fa-house-flag', description: 'Low down payment government-backed loan.' },
    { path: '/loan-programs/va', name: 'VA Loans', icon: 'fa-solid fa-shield-halved', description: 'For eligible veterans and service members.' },
    { path: '/loan-programs/usda', name: 'USDA Loans', icon: 'fa-solid fa-tractor', description: 'For homes in eligible rural areas.' },
    { path: '/loan-programs/construction', name: 'Construction Loans', icon: 'fa-solid fa-trowel-bricks', description: 'Finance the building of a new home.' },
    { path: '/loan-programs/commercial', name: 'Commercial Loans', icon: 'fa-solid fa-city', description: 'Finance business and commercial property.' },
    { path: '/loan-programs/fha-203k', name: 'FHA 203(k) Loans', icon: 'fa-solid fa-hammer', description: 'Finance a home and its renovations.' },
    { path: '/loan-programs/non-qm', name: 'Non-QM Loans', icon: 'fa-solid fa-puzzle-piece', description: 'Flexible solutions for unique situations.' },
  ] as LoanProgramLink[],
  quote: { path: '/get-a-quote', name: 'Get a Quote' },
  about: [
      { path: '/about', name: 'About Cliff Mortgages' },
      { path: '/about/cindy-cliff', name: 'About Cindy Cliff' },
  ],
  contact: { path: '/contact', name: 'Contact' },
  legal: [
    { path: '/legal/privacy-policy', name: 'Privacy Policy' },
    { path: '/legal/accessibility', name: 'Accessibility' },
  ]
};


export const allPageData: { [key: string]: PageData } = {
  '/': {
    path: '/',
    title: 'Colorado Mortgage Broker | Cliff Mortgages / C2 Financial',
    h1: 'Your Trusted Partner for Colorado Home Financing',
    description: 'Independent Colorado mortgage broker offering Colorado home loans including HELOCs, reverse mortgages, DSCR loans, purchases, refinances, and private money.',
    breadcrumbs: [{ name: 'Home', path: '/' }],
    faqs: [
      { question: 'What makes a mortgage broker different from a bank?', answer: 'As a mortgage broker, we work with multiple lenders to present a range of loan options, often with competitive pricing and flexible programs. Unlike a single bank, we’re able to match borrowers with the lender that best fits their goals.' },
      { question: 'How long does the mortgage process typically take in Colorado?', answer: 'Mortgage timelines vary by loan type, lender, and individual circumstances. Some programs can close as quickly as 7–10 days, many purchase loans close in about 21 days, and others follow a more traditional 30–45 day timeline. We’ll give you a realistic estimate upfront and keep you informed at each stage.' },
      { question: 'What’s the first step to getting a home loan?', answer: 'The first step is a pre-qualification. You can get started by filling out the “Get a Quote” form.' },
      { question: 'Do you only serve Colorado?', answer: 'We serve all of Colorado, and through the C2 Financial network, we can connect you with loan officers licensed in 29 states.' },
      { question: 'How does Cliff Mortgages get paid?', answer: 'In most cases, we are compensated by the lender after your loan closes. This is a standard practice and all compensation is fully disclosed during the process.' }
    ]
  },
  '/loan-programs': {
    path: '/loan-programs',
    title: 'Mortgage Loan Programs in Colorado | Cliff Mortgages',
    h1: 'Explore Our Loan Programs',
    description: 'From first-time homebuyers to seasoned investors, we have a mortgage solution for everyone. Discover the right loan program for your needs in Colorado.',
    imageUrl: heroImageAssignments.loanProgramsHero.src,
    imageAlt: heroImageAssignments.loanProgramsHero.alt,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Loan Programs', path: '/loan-programs' }
    ],
    faqs: [
      { question: 'Which loan program is best for first-time homebuyers?', answer: 'FHA loans are a popular choice for first-time buyers due to their low down payment requirements and flexible credit guidelines. However, some conventional loan programs also offer low down payment options.' },
      { question: "I'm self-employed. Can I still get a mortgage?", answer: 'Yes, absolutely. We work with lenders who offer programs specifically for self-employed borrowers, often using bank statements instead of traditional income verification via Non-QM loans.' },
      { question: 'What is the difference between a conventional loan and a government-backed loan?', answer: 'Conventional loans are not insured by the federal government, while government-backed loans (FHA, VA, USDA) are. This often allows for more flexible qualification criteria on government loans.' },
      { question: 'Can I refinance to take cash out of my home?', answer: 'Yes, a cash-out refinance allows you to tap into your home\'s equity by replacing your current mortgage with a new, larger loan. A HELOC is another popular option for accessing equity.' },
      { question: 'How do I know which loan is right for me?', answer: 'The best way is to speak with one of our licensed loan officers. We\'ll analyze your financial situation and goals to recommend the most suitable options for you.' }
    ]
  },
  '/loan-programs/fha-203k': {
    path: '/loan-programs/fha-203k',
    title: 'FHA 203(k) Loans in Colorado | Cliff Mortgages / C2 Financial',
    h1: 'Colorado FHA 203(k) Renovation Loans',
    description: 'FHA 203(k) Colorado home loans that combine purchase and renovation costs into one mortgage, helping buyers finance needed repairs and upgrades.',
    imageUrl: heroImageAssignments.fha203kHero.src,
    imageAlt: heroImageAssignments.fha203kHero.alt,
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Loan Programs', path: '/loan-programs' }, { name: 'FHA 203(k) Loans', path: '/loan-programs/fha-203k' }],
    programDetails: {
      summary: 'The FHA 203(k) is a flexible renovation loan that lets you finance the home and improvements with a single mortgage. Whether you’re buying a fixer-upper or refinancing to remodel your current home, we guide you through contractor bids, HUD consultant requirements, and the draw process so your project stays on track.',
      eligibility: [
        'Buyers purchasing a primary residence that needs repairs or updates.',
        'Homeowners refinancing to include renovation costs in a new FHA loan.',
        'Borrowers who meet FHA’s standard credit, income, and down payment guidelines.',
        'Projects where the completed home will be owner-occupied.'
      ],
      benefits: [
        'One loan, one closing for both purchase (or refinance) and renovations.',
        'Low 3.5% down payment based on the total project cost (purchase price + improvements).',
        'Increases property value by funding improvements up front.',
        'Expands your home search to include properties needing repairs.'
      ],
      howItWorks: [
        { title: 'Pre-Approval & Contractor Selection', description: 'We pre-approve you for the 203(k) and help you understand what lenders require from contractors and detailed bids.', icon: 'fa-solid fa-user-hard-hat' },
        { title: 'Appraisal Based on Future Value', description: 'We coordinate with the appraiser and HUD consultant (if required) to evaluate the home’s after-improved value using your contractor’s scope of work.', icon: 'fa-solid fa-chart-line' },
        { title: 'Renovation Escrow & Draws', description: 'At closing, renovation funds go into escrow. We help you manage inspections, draw requests, and communication so contractors are paid on time.', icon: 'fa-solid fa-wallet' },
        { title: 'Project Completion', description: 'After verified inspections, the final draw is released and the loan converts to standard FHA terms with one manageable payment.', icon: 'fa-solid fa-house-wrench' }
      ]
    },
    faqs: [
      { question: 'What’s the difference between a Limited and Standard 203(k)?', answer: 'The Limited (Streamlined) 203(k) covers non-structural repairs up to $35,000. The Standard 203(k) allows major renovations and structural work and requires a HUD consultant.' },
      { question: 'What kinds of repairs are eligible?', answer: 'Most value-adding improvements are eligible, including kitchens, baths, roofing, flooring, energy upgrades, and landscaping. Luxury add-ons like pools are typically not allowed.' },
      { question: 'How does my contractor get paid?', answer: 'Renovation funds are held in escrow. After inspections confirm progress, the lender releases draws to your contractor.' },
      { question: 'Can I do the renovation work myself?', answer: 'Lenders generally require licensed, insured contractors to complete the work to ensure timelines, quality, and project oversight.' },
      { question: 'Can I refinance into a 203(k)?', answer: 'Yes. Existing homeowners can refinance, roll renovation costs into the loan, and repay everything with one monthly mortgage payment.' }
    ]
  },
    '/loan-programs/equity-select': {
    path: '/loan-programs/equity-select',
    title: 'Equity Select Loan in Colorado | Cliff Mortgages / C2 Financial',
    h1: 'Home Equity Line of Credit (HELOC) – EquitySelect Alternative',
    description:
      'EquitySelect is a flexible home-equity loan available as either a first- or second-lien. It lets homeowners access equity without replacing a low-rate mortgage (second-lien option) and offers payment plans starting around 1% of the balance. Designed for retirees, near-retirees, and homeowners seeking predictable, long-term payments.',
    imageUrl: heroImageAssignments.equitySelectProgramHero.src,
    imageAlt: heroImageAssignments.equitySelectProgramHero.alt,
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Loan Programs', path: '/loan-programs' }, { name: 'Equity Select', path: '/loan-programs/equity-select' }],
    programDetails: {
      summary:
        'EquitySelect is a flexible home-equity line of credit offered as either a first- or second-lien. Keep your existing low-rate mortgage with the second-lien option or refinance into a first position while maintaining required payments that can start around 1% of the balance for predictable, long-term planning.',
      eligibility: [
        'Homeowners who want to access equity without replacing a low-rate first mortgage',
        'Retirees or near-retirees looking for structured payments and long-term stability',
        'Borrowers who need flexible funds for improvements, medical costs, or debt payoff',
        'Clients exploring an alternative to reverse mortgages with required monthly payments'
      ],
      benefits: [
        'Payment plans starting around 1% of the balance to help manage monthly budgets',
        'Second-lien option preserves an existing low-rate first mortgage',
        'First-lien option available for borrowers who prefer a single consolidated loan',
        'Designed for predictable payments and long-range financial planning'
      ],
      howItWorks: [
        { title: "Customize Your Lien Position", description: "Choose a first- or second-lien structure based on your goals and current mortgage rate.", icon: "fa-solid fa-diagram-project" },
        { title: "Activate the Line", description: "Open the credit line and draw funds as needed for projects, expenses, or opportunities.", icon: "fa-solid fa-hand-holding-dollar" },
        { title: "Follow Predictable Payments", description: "Make required payments starting around 1% and prepay anytime to reduce the balance sooner.", icon: "fa-solid fa-calendar-check" }
      ]
    },
    faqs: [
      { question: "Is this a reverse mortgage?", answer: "No. EquitySelect is a line of credit with required payments and is available to a broader group of homeowners than reverse mortgages." },
      { question: "Would this replace my first mortgage?", answer: "It can, but doesn’t have to. Borrowers can choose a first-lien option that replaces existing liens or a second-lien option that keeps today’s low-rate mortgage in place." },
      { question: "Is there a minimum loan amount?", answer: "Yes, $75,000 or 50% of the maximum line of credit, whichever is higher." },
       { question: "How long is the term for?", answer: "Monthly payments capped for up to 40 years." },
      { question: "Can I pay off early?", answer: "Yes. You can make larger payments anytime with no prepayment penalty on principal." }
    ]
  },
  '/loan-programs/purchase': {
    path: '/loan-programs/purchase',
    title: 'Purchase Loans in Colorado | Cliff Mortgages / C2 Financial',
    h1: 'Colorado Home Purchase Loans',
    description: 'Explore Colorado home loans for first-time and repeat buyers, including conventional, FHA, VA, USDA, and creative financing options.',
    imageUrl: heroImageAssignments.purchaseHero.src,
    imageAlt: heroImageAssignments.purchaseHero.alt,
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Loan Programs', path: '/loan-programs' }, { name: 'Purchase', path: '/loan-programs/purchase' }],
    programDetails: {
      summary: 'Buying a home is a major financial move, and the right loan strategy matters. Our Colorado Purchase Loan programs give you options — not limitations. As an independent mortgage broker, we compare multiple lenders, rates, and guidelines to find the best fit for your goals. Whether you’re buying your first home, moving up, or investing, we guide you from pre-approval through closing with clarity, choice, and a streamlined experience built around you.',
      eligibility: [
        'First-time and repeat homebuyers in Colorado.',
        'Borrowers who want help comparing loan programs.',
        'Homebuyers looking for estimates from multiple participating lenders.',
        'Anyone wanting personalized support from application to closing.'
      ],
      benefits: [
        'Access to a wide range of loan options, including Conventional, FHA, VA, and USDA.',
        'Personalized guidance through each step of the home-buying process.',
        'Many lenders offer competitive pricing and flexible terms.'
      ],
      howItWorks: [
        { title: "Get Pre-Qualified", description: "We'll review your finances to determine your budget and provide a pre-qualification letter.", icon: "fa-solid fa-calculator" },
        { title: "Find Your Home", description: "Shop for a home with confidence, knowing you have financing in place.", icon: "fa-solid fa-magnifying-glass-dollar" },
        { title: "Full Application", description: "Once you're under contract, we'll guide you through the official loan application and document submission.", icon: "fa-solid fa-file-signature" },
        { title: "Closing Day", description: "Sign the final paperwork and receive the keys to your new Colorado home!", icon: "fa-solid fa-key" }
      ]
    },
    faqs: [
      { question: "How much of a down payment do I need?", answer: "This varies by loan type. VA and USDA loans can require 0% down. FHA loans require as little as 3.5% down, and some conventional loans start at just 3% down." },
      { question: "What is the difference between pre-qualification and pre-approval?", answer: "Pre-qualification is an initial estimate of what you might be able to borrow. Pre-approval is a more formal process where the lender verifies your information and provides a conditional commitment to lend." },
      { question: "What are closing costs?", answer: "Closing costs are fees for services required to finalize your mortgage, such as appraisal fees, title insurance, and loan origination fees. They typically range from 2% to 5% of the loan amount." },
      { question: "How long does it take to close on a home in Colorado?", answer: "The typical timeframe from a signed purchase contract to closing day is 30 to 45 days. We work diligently with all parties to ensure a smooth and timely closing." },
      { question: "Should I choose a fixed-rate or adjustable-rate mortgage (ARM)?", answer: "A fixed-rate mortgage has an interest rate that stays the same for the life of the loan, providing predictable payments. An ARM has a rate that can change over time. The best choice depends on your financial goals and how long you plan to stay in the home." }
    ]
  },
   '/loan-programs/refinance': {
    path: '/loan-programs/refinance',
    title: 'Refinance Loans in Colorado | Cliff Mortgages / C2 Financial',
    h1: 'Colorado Mortgage Refinance',
    description: 'Refinance your Colorado home to lower payments, change terms, or access equity with refinance-focused Colorado home loan options.',
    imageUrl: heroImageAssignments.refinanceHero.src,
    imageAlt: heroImageAssignments.refinanceHero.alt,
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Loan Programs', path: '/loan-programs' }, { name: 'Refinance', path: '/loan-programs/refinance' }],
    programDetails: {
      summary: 'Refinancing your mortgage is a powerful financial tool that can help you achieve a variety of goals. Whether you want to explore lower interest rates, pay off your home faster, consolidate high-interest debt, or access cash for major expenses, we can help. Through C2 Financial, we have access to over 100+ wholesale lenders, allowing us to compare a wide range of refinance programs and options based on your situation.',
      eligibility: [
        'Current Colorado homeowners looking to improve their loan terms.',
        'Borrowers who want to lower their interest rate and monthly payment.',
        'Individuals needing to access their home\'s equity for cash (cash-out refinance).',
        'Homeowners looking to consolidate debt or finance home improvements.'
      ],
      benefits: [
        'Potentially lower your interest rate and reduce your monthly payment.',
        'Access cash from your home\'s equity for a variety of purposes.',
        'Shorten your loan term to pay off your mortgage faster and save on interest.',
        'Consolidate other debts into a single payment (if eligible).'
      ],
      howItWorks: [
        { title: "Define Your Goals", description: "We'll discuss what you want to achieve with a refinance to determine the best loan program for you.", icon: "fa-solid fa-bullseye" },
        { title: "Lock Your Rate", description: "We'll shop our network of lenders to find you a great rate and lock it in.", icon: "fa-solid fa-lock" },
        { title: "Simple Application", description: "Our streamlined process and online portal make submitting your documentation quick and secure.", icon: "fa-solid fa-file-alt" },
        { title: "Close Your Loan", description: "Sign the final paperwork—often from the comfort of your own home—and start enjoying the benefits of your new loan.", icon: "fa-solid fa-pen-fancy" }
      ]
    },
    faqs: [
      { question: "When is a good time to refinance?", answer: "Typically, it's a good time to consider refinancing if current interest rates are significantly lower than your existing rate, or if your financial situation has improved, allowing you to qualify for better terms. A refinance can also be beneficial if you need to access your home's equity." },
      { question: "What is a 'cash-out' refinance?", answer: "A cash-out refinance replaces your current mortgage with a new, larger loan, allowing you to receive the difference in cash. It's a popular way to fund home improvements, pay for education, or consolidate debt." },
      { question: "How much does it cost to refinance?", answer: "Refinancing involves closing costs, similar to a purchase loan, which typically range from 2% to 5% of the new loan amount. We'll help you analyze whether the long-term savings outweigh these upfront costs." },
      { question: "Will I need an appraisal to refinance?", answer: "In most cases, yes, an appraisal is required to determine your home's current market value. However, some streamlined refinance programs may offer an appraisal waiver, which we can explore for you." },
      { question: "How long does the refinance process take?", answer: "At Cliff Mortgages, we pride ourselves on speed. While the industry average can be 30-45 days, our streamlined process often allows us to close a refinance in 21 days or less." }
    ]
  },
  '/loan-programs/heloc': {
    path: '/loan-programs/heloc',
    title: 'HELOC in Colorado | Cliff Mortgages / C2 Financial',
    h1: 'Colorado Home Equity Line of Credit (HELOC)',
    description: 'Access Colorado home loans that use your home equity, including HELOC options for renovations, debt payoff, and major expenses with flexible terms.',
    imageUrl: heroImageAssignments.helocHero.src,
    imageAlt: heroImageAssignments.helocHero.alt,
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Loan Programs', path: '/loan-programs' }, { name: 'HELOC', path: '/loan-programs/heloc' }],
    programDetails: {
      summary: 'A Home Equity Line of Credit (HELOC) is a revolving line of credit—similar to a credit card—that lets you borrow as needed. It gives you flexibility to access money when you need it, making it a strong solution for upcoming projects, unexpected expenses, or consolidating higher-interest debt. With a HELOC, you only pay interest on the amount you draw, and once it’s repaid, the line becomes available to use again.',
      eligibility: [
        'Colorado homeowners with sufficient equity in their property.',
        'Borrowers with stable income and good credit history.',
        'Individuals looking for flexible access to funds without a lump-sum loan.',
        'Homeowners planning improvements, debt consolidation, or managing larger expenses over time.'
      ],
      benefits: [
        'Borrow only what you need, when you need it, up to your approved credit limit.',
        'Pay interest only on the funds you draw, not the entire line.',
        'Often offers lower interest rates than personal loans or credit cards.',
        'Interest paid on a HELOC may be tax-deductible (consult a tax advisor).'
      ],
      howItWorks: [
        { title: "Apply & Get Approved", description: "We'll assess your home's equity and your financial profile to approve you for a specific credit limit.", icon: "fa-solid fa-file-signature" },
        { title: "Access Your Funds", description: "Draw funds from your HELOC as needed using a card or by transferring funds to your bank account.", icon: "fa-solid fa-hand-holding-dollar" },
        { title: "Repay and Reuse", description: "Make payments on your outstanding balance. As you pay it down, your available credit is replenished for future use.", icon: "fa-solid fa-recycle" }
      ]
    },
    faqs: [
      { question: "What's the difference between a HELOC and a home equity loan?", answer: "A HELOC is a revolving line of credit you can draw from as needed, while a home equity loan provides a one-time lump sum of cash that you repay in fixed installments." },
      { question: "How much can I borrow with a HELOC?", answer: "Typically, you can borrow up to 85% of your home's appraised value, minus the amount you still owe on your primary mortgage. We'll help you calculate your available equity." },
      { question: "Do HELOCs have variable or fixed interest rates?", answer: "Most HELOCs have variable interest rates that can change over time. However, some lenders offer the option to convert a portion of your variable-rate balance to a fixed rate." },
      { question: "What is the 'draw period' and 'repayment period'?", answer: "The 'draw period' is the time during which you can borrow from your line of credit (often 10 years). After that, the 'repayment period' begins, where you can no longer borrow and must repay the outstanding balance." },
      { question: "Can I use the funds from a HELOC for anything?", answer: "Yes, once you are approved, you can use the money for almost any purpose, including home renovations, education expenses, debt consolidation, or even a down payment on a second home." }
    ]
  },
  '/loan-programs/dscr': {
    path: '/loan-programs/dscr',
    title: 'DSCR Loans in Colorado | Cliff Mortgages / C2 Financial',
    h1: 'DSCR Loans for Real Estate Investors',
    description: 'DSCR Colorado home loans for real estate investors that qualify based on rental income rather than tax returns, supporting both short- and long-term rentals.',
    imageUrl: heroImageAssignments.dscrHero.src,
    imageAlt: heroImageAssignments.dscrHero.alt,
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Loan Programs', path: '/loan-programs' }, { name: 'DSCR', path: '/loan-programs/dscr' }],
    programDetails: {
      summary: 'Debt Service Coverage Ratio (DSCR) loans qualify investors based on a property’s rental income instead of personal tax returns. We move at an investor’s pace—running scenarios quickly, sourcing competitive DSCR programs for long- and short-term rentals, and mapping fees and cash flow so you can make smart, fast decisions.',
      eligibility: [
        'Investors purchasing or refinancing 1–4 unit income-producing properties.',
        'Borrowers building short-term or long-term rental portfolios.',
        'Clients with strong assets and credit who prefer alternative documentation.',
        'Entities and individuals seeking to close in the name of an LLC for liability management.'
      ],
      benefits: [
        'Speed & Certainty: proactive timelines that keep your contract on track.',
        'Program Expertise: access to DSCR options tailored to your specific property strategy.',
        'Transparency for ROI: clear breakdowns of rates, terms, and fees so you can model cash-on-cash returns.',
        'Alternative qualification without W-2s, tax returns, or personal DTI requirements.',
        'Flexible structures for long-term rentals, short-term rentals, and portfolio growth.'
      ],
      howItWorks: [
        { title: 'Rapid Scenario Analysis', description: 'Share the property address and projected rent—we’ll run DSCR numbers quickly and deliver a reliable term sheet.', icon: 'fa-solid fa-gauge-high' },
        { title: 'Simplified Documentation', description: 'Instead of tax returns, we focus on the appraisal, lease (or market rent), asset statements, and your LLC docs.', icon: 'fa-solid fa-folder-open' },
        { title: 'Fast Appraisal & Closing', description: 'We coordinate DSCR-savvy appraisers and lenders to keep your deal moving toward a smooth, on-time closing.', icon: 'fa-solid fa-clock-rotate-left' }
      ]
    },
    faqs: [
      { question: 'What does DSCR stand for?', answer: 'Debt Service Coverage Ratio compares a property’s rental income to its monthly debt obligations (principal, interest, taxes, insurance, and HOA). A DSCR of 1.0 means the rent covers the payment exactly.' },
      { question: 'What minimum DSCR do lenders require?', answer: 'Many lenders target 1.25+ for the best pricing, but some programs we use allow DSCRs as low as 0.75, giving you flexibility if the property needs a little seasoning.' },
      { question: 'Are short-term rentals eligible?', answer: 'Yes. Several of our DSCR partners have products built for Airbnb/VRBO properties and will qualify the loan using projected revenue from those platforms.' },
      { question: 'Do I need to be an experienced investor?', answer: 'Experience helps, but it isn’t required. We have DSCR options for first-time investors as well as seasoned portfolio owners.' },
      { question: 'Can I close in my LLC’s name?', answer: 'Absolutely. DSCR loans commonly allow title and closing in an LLC for asset protection and easier portfolio management.' }
    ]
  },
  '/loan-programs/va': {
    path: '/loan-programs/va',
    title: 'VA Loans in Colorado | Cliff Mortgages / C2 Financial',
    h1: 'Colorado VA Home Loans',
    description: 'Zero-down VA Colorado home loans for eligible service members, veterans, and surviving spouses, with flexible guidelines and no monthly PMI.',
    imageUrl: heroImageAssignments.vaHero.src,
    imageAlt: heroImageAssignments.vaHero.alt,
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Loan Programs', path: '/loan-programs' }, { name: 'VA Loans', path: '/loan-programs/va' }],
    programDetails: {
      summary: 'A VA loan, guaranteed by the U.S. Department of Veterans Affairs, is one of the most powerful mortgage options available. It is a well-earned benefit for eligible active-duty service members, veterans, and surviving spouses. The program is designed to make homeownership more accessible and affordable, featuring incredible advantages like zero down payment and no private mortgage insurance (PMI). We are honored to help our nation\'s heroes use this benefit to purchase a home.',
      eligibility: [
          'Active-duty service members and veterans who meet minimum service requirements.',
          'Members of the National Guard and Reserves with six years of service.',
          'Surviving spouses of service members who died in the line of duty or from a service-related disability.',
          'Borrowers who have a valid Certificate of Eligibility (COE) - we can help you obtain this.'
      ],
      benefits: [
        '100% Financing - No down payment is required for most borrowers.',
        'No Private Mortgage Insurance (PMI), which significantly lowers your monthly payment.',
        'Competitive interest rates, often lower than conventional loans due to the VA\'s guarantee.',
        'The VA limits the closing costs that a veteran can be charged.',
        'No prepayment penalties for paying off your loan early.',
        'The VA loan benefit is reusable for future home purchases.'
      ],
      howItWorks: [
        { title: "Obtain Your COE", description: "We\'ll help you get your Certificate of Eligibility (COE), the document that proves you qualify for the VA loan benefit.", icon: "fa-solid fa-file-certificate" },
        { title: "Get Pre-Approved", description: "We will review your finances to determine your buying power and provide a strong pre-approval letter.", icon: "fa-solid fa-user-check" },
        { title: "Find a Home & VA Appraisal", description: "Shop for a home that meets the VA's Minimum Property Requirements (MPRs) for safety and livability.", icon: "fa-solid fa-house-circle-check" },
        { title: "Close Your VA Loan", description: "Sign the final paperwork and move into your new home, leveraging the powerful financing benefit you've earned.", icon: "fa-solid fa-key" }
      ]
    },
    faqs: [
      { question: "What is the VA Funding Fee?", answer: "The VA Funding Fee is a one-time fee paid to the VA to help sustain the loan program for future generations. It varies based on your service, down payment amount, and whether it's your first time using the benefit. Veterans receiving VA disability compensation are typically exempt." },
      { question: "Do I need perfect credit for a VA loan?", answer: "No. While the VA doesn't set a minimum credit score, lenders do. However, the credit requirements for VA loans are generally more flexible than for conventional loans. Most lenders look for a score of 620 or higher." },
      { question: "Can I use my VA loan benefit more than once?", answer: "Yes, you can. You can have your full entitlement restored once your previous VA loan is paid in full. You may also have 'remaining entitlement' to use for another purchase even with an existing VA loan." },
      { question: "What are the VA's property requirements?", answer: "The property must be safe, structurally sound, and sanitary. A VA-approved appraiser will inspect the home to ensure it meets the VA's Minimum Property Requirements (MPRs) before the loan can be approved." },
      { question: "What is a Certificate of Eligibility (COE) and how do I get one?", answer: "The COE is a document from the VA that proves to the lender that you are eligible for the VA home loan benefit based on your service. As your lender, we can typically obtain your COE for you in minutes." }
    ]
  },
  '/loan-programs/fha': {
    path: '/loan-programs/fha',
    title: 'FHA Loans in Colorado | Cliff Mortgages / C2 Financial',
    h1: 'Colorado FHA Home Loans',
    description: 'FHA Colorado home loans with low down payment options, flexible credit guidelines, and gift fund opportunities to help more buyers become homeowners.',
    imageUrl: heroImageAssignments.fhaHero.src,
    imageAlt: heroImageAssignments.fhaHero.alt,
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Loan Programs', path: '/loan-programs' }, { name: 'FHA Loans', path: '/loan-programs/fha' }],
    programDetails: {
      summary: 'An FHA loan, insured by the Federal Housing Administration, is a cornerstone of accessible homeownership in America. It’s designed to help low-to-moderate-income borrowers who might not qualify for a conventional loan. With more lenient credit score and down payment requirements, FHA loans open the door for many first-time homebuyers and families to purchase a home. We are experienced in navigating FHA guidelines to help ensure a smooth and successful closing.',
      eligibility: [
        'Borrowers with a credit score of 580 or higher (though some lenders go lower).',
        'Individuals who can make a down payment of at least 3.5%.',
        'Buyers purchasing a primary residence that meets FHA property standards.',
        'Borrowers with a steady employment history and verifiable income.'
      ],
      benefits: [
        'Low 3.5% down payment requirement makes homeownership more attainable.',
        'Flexible credit score guidelines are more forgiving than conventional loans.',
        'Down payment funds can come from gifts from family members.',
        'Sellers are permitted to contribute up to 6% of the purchase price toward closing costs.',
        'FHA loans are assumable, which can be an attractive feature for future buyers if rates rise.'
      ],
      howItWorks: [
        { title: "Get FHA Pre-Approved", description: "We'll review your credit and finances to confirm your eligibility and determine your budget.", icon: "fa-solid fa-user-check" },
        { title: "Find an FHA-Approved Home", description: "Shop for a home that meets FHA's minimum property standards for safety and soundness.", icon: "fa-solid fa-house-circle-check" },
        { title: "FHA Appraisal & Underwriting", description: "We'll order an FHA-specific appraisal and guide you through the documentation process for a smooth underwriting review.", icon: "fa-solid fa-file-shield" },
        { title: "Close with Confidence", description: "Sign your final loan documents and get the keys to your new home!", icon: "fa-solid fa-key" }
      ]
    },
    faqs: [
      { question: "What is Mortgage Insurance Premium (MIP)?", answer: "MIP is required for all FHA loans and protects the lender against loss. It includes an Upfront Premium (UFMIP) that can be financed into the loan, and a monthly premium that is part of your mortgage payment." },
      { question: "Can the monthly MIP be canceled on an FHA loan?", answer: "If you make a down payment of 10% or more, the monthly MIP is paid for 11 years. If your down payment is less than 10%, the MIP is typically for the life of the loan. You would need to refinance to a conventional loan to remove it." },
      { question: "What are FHA property requirements?", answer: "The home must meet certain minimum safety, security, and soundness standards. An FHA-approved appraiser will inspect the property to ensure it meets these guidelines. This includes things like a sound roof, functioning utilities, and no lead-based paint hazards." },
      { question: "Can I get an FHA loan if I've had a bankruptcy?", answer: "Yes, it is possible. Generally, you may be eligible for an FHA loan two years after a Chapter 7 bankruptcy discharge and one year after a Chapter 13 filing, provided you've maintained a good credit history since." },
      { question: "Are there income limits for FHA loans?", answer: "No, FHA loans do not have maximum income limits. However, you must demonstrate sufficient and stable income to afford the mortgage payments, which is evaluated through your debt-to-income (DTI) ratio." }
    ]
  },
  '/loan-programs/reverse-mortgage': {
    path: '/loan-programs/reverse-mortgage',
    title: 'Reverse Mortgages in Colorado | Cliff Mortgages / C2 Financial',
    h1: 'Colorado Reverse Mortgage Loans (HECM)',
    description: 'Explore Reverse Mortgage options in Colorado. Access equity for retirement, reduce monthly expenses, or improve cash flow. Explore home loan options.',
    imageUrl: heroImageAssignments.reverseMortgageHero.src,
    imageAlt: heroImageAssignments.reverseMortgageHero.alt,
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Loan Programs', path: '/loan-programs' }, { name: 'Reverse Mortgages', path: '/loan-programs/reverse-mortgage' }],
    programDetails: {
      summary: 'A Reverse Mortgage (also called a Home Equity Conversion Mortgage or HECM) helps Colorado homeowners age 62 and older turn home equity into income or a flexible line of credit — while they continue living in their home and retain ownership. It can supplement retirement funds, cover medical or daily expenses, or simply create more financial peace of mind.',
      eligibility: [
        'Eliminate monthly mortgage payments and free up cash flow.',
        'Supplement retirement income from Social Security or other sources.',
        'Age comfortably in your own home without downsizing or selling.',
        'Establish a financial safety net for unexpected expenses or long-term planning.'
      ],
      benefits: [
        'No monthly mortgage payments required (you remain responsible for property taxes and insurance).',
        'Access your equity without selling your home or taking on new debt.',
        'The loan is repaid only when you move out of the home or pass away.',
        'Use funds for any purpose — home improvements, medical care, travel, or everyday expenses.',
        'Flexible qualification — limited income and credit requirements.'
      ],
      howItWorks: [
        { title: "HECM Counseling", description: "Complete a mandatory, independent counseling session to ensure you understand the loan.", icon: "fa-solid fa-hands-holding-child" },
        { title: "Application & Appraisal", description: "We'll guide you through the application and an appraisal will determine your home's value.", icon: "fa-solid fa-file-signature" },
        { title: "Receive Your Funds", description: "After closing, your existing mortgage is paid off and you receive your funds in the manner you've chosen.", icon: "fa-solid fa-hand-holding-dollar" },
        { title: "Live Payment-Free", description: "Enjoy living in your home without monthly mortgage payments. The loan is typically repaid when you sell the home or no longer live there.", icon: "fa-solid fa-house-user" }
      ]
    },
    faqs: [
      { question: "Will the bank own my home?", answer: "No. You retain title and ownership of your home, just like with a traditional mortgage. The bank has a lien on the property, but you are still the owner." },
      { question: "What happens if my loan balance grows larger than my home's value?", answer: "Reverse mortgages are non-recourse loans. This means that you or your heirs will never owe more than the appraised value of the home when the loan is repaid, even if the loan balance is higher." },
      { question: "How do I receive the money?", answer: "You have several flexible options: a one-time lump sum, a line of credit you can draw from as needed, fixed monthly payments for a set period or for life, or a combination of these." },
      { question: "When does the loan have to be paid back?", answer: "The loan becomes due when the last surviving borrower sells the home, moves out of the home for more than 12 consecutive months, or passes away. Your heirs can choose to repay the loan and keep the home, or sell it to pay off the balance." },
      { question: "Do I still have to pay property taxes and insurance?", answer: "Yes. As the homeowner, you are still responsible for paying your property taxes, homeowners insurance, and maintaining the home in good condition." }
    ]
  },
  '/loan-programs/conventional': {
    path: '/loan-programs/conventional',
    title: 'Conventional Loans in Colorado | Cliff Mortgages / C2 Financial',
    h1: 'Colorado Conventional Mortgage Loans',
    description: 'Conventional Colorado home loans for primary residences, second homes, and investment properties with flexible down payments and cancellable PMI.',
    imageUrl: heroImageAssignments.conventionalHero.src,
    imageAlt: heroImageAssignments.conventionalHero.alt,
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Loan Programs', path: '/loan-programs' }, { name: 'Conventional Loans', path: '/loan-programs/conventional' }],
    programDetails: {
      summary: 'Conventional mortgages are the gold standard for qualified homebuyers who want the widest range of options. We leverage your strong credit, income, and assets to shop multiple wholesale lenders, structure PMI intelligently, and secure a loan that aligns with both your short-term budget and long-term wealth strategy.',
      eligibility: [
        'Borrowers with strong credit scores (typically 620+; best pricing at 740+).',
        'Homebuyers with stable income, verifiable assets, and manageable debt-to-income ratios.',
        'Those purchasing or refinancing primary residences, second homes, or investment properties.',
        'Clients seeking jumbo-conforming or high-balance options above standard loan limits.'
      ],
      benefits: [
        'PMI that can be removed once you reach the required equity threshold.',
        'Options for a wide range of property types, including second homes and rentals.',
        'Potentially lower overall cost of ownership compared to most government-backed loans.',
        'Competitive fixed and adjustable-rate structures tailored to your financial goals.'
      ],
      howItWorks: [
        { title: 'Robust Pre-Approval', description: 'We review credit, income, and assets upfront to deliver a strong pre-approval that helps your offer stand out.', icon: 'fa-solid fa-file-circle-check' },
        { title: 'Loan Strategy Design', description: 'We analyze rate, term, and PMI options to recommend a customized structure that balances payment, equity growth, and flexibility.', icon: 'fa-solid fa-chart-pie' },
        { title: 'Streamlined Processing', description: 'Our team packages your file cleanly for underwriting, coordinates appraisal and title early, and keeps you informed at every milestone.', icon: 'fa-solid fa-bolt' },
        { title: 'Clear-to-Close & Funding', description: 'We target an early clear-to-close so the final walk-through and signing day feel calm, organized, and on schedule.', icon: 'fa-solid fa-house-circle-check' }
      ]
    },
    faqs: [
      { question: 'What credit score do I need for a conventional loan?', answer: 'Many lenders accept scores as low as 620, but the best pricing starts around 740. We’ll compare multiple lenders to find competitive terms for your specific credit profile.' },
      { question: 'How much do I need for a down payment?', answer: 'First-time buyers can put as little as 3% down. A 20% down payment removes monthly PMI, but we can also structure single-premium or lender-paid PMI to reduce costs if you’re putting less down.' },
      { question: 'Can I remove private mortgage insurance (PMI)?', answer: 'Yes. Once you reach the required equity level—often 20%—you can request PMI removal. We map out this timeline and help you monitor progress.' },
      { question: 'Are investment properties eligible?', answer: 'Absolutely. Conventional loans allow financing for second homes and investment properties. We’ll tailor the strategy to the occupancy and your long-term goals.' },
      { question: 'What are conforming loan limits in Colorado?', answer: 'In 2024 most Colorado counties have a conforming limit of $766,550, with higher limits in select high-cost areas. We’ll confirm the correct limit for your property and help structure the loan accordingly.' }
    ]
  },
  '/loan-programs/jumbo': {
    path: '/loan-programs/jumbo',
    title: 'Jumbo Loans in Colorado | Cliff Mortgages',
    h1: 'Colorado Jumbo Mortgage Loans',
    description: 'Financing for luxury homes and high-value properties that exceed conventional conforming loan limits.',
    imageUrl: heroImageAssignments.jumboHero.src,
    imageAlt: heroImageAssignments.jumboHero.alt,
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Loan Programs', path: '/loan-programs' }, { name: 'Jumbo Loans', path: '/loan-programs/jumbo' }],
    programDetails: {
      summary: 'We work with lending partners who specialize in complex income scenarios — including stock-based compensation, business ownership, and other non-traditional income sources — to help present your financial profile effectively to underwriters.',
      eligibility: [
        'Borrowers purchasing or refinancing properties above conforming loan limits.',
        'High-credit, high-income borrowers with established asset reserves.',
        'Clients who want bespoke financing structures or relationship banking.',
        'Borrowers comfortable providing detailed financial documentation.'
      ],
      benefits: [
        'Expertise in complex finances, including RSUs, K-1s, and business income.',
        'White-glove service and discretion throughout the process.',
        'Collaboration with your financial professionals to present your profile accurately.',
        'Access to private banks and portfolio lenders for tailored solutions.'
      ],
      howItWorks: [
        { title: 'Comprehensive Financial Review', description: 'We begin with an in-depth conversation to understand your goals and review your financial profile, coordinating with your CPA or advisor when helpful.', icon: 'fa-solid fa-user-tie' },
        { title: 'Strategic Lender Matching', description: 'We present your profile to our network of private banks and portfolio lenders, identifying the institution whose programs and underwriting style best fit your scenario.', icon: 'fa-solid fa-handshake' },
        { title: 'White-Glove Underwriting & Closing', description: 'We manage documentation, appraisal, and communication with the lender to support a smooth, on-time closing experience.', icon: 'fa-solid fa-gem' }
      ]
    },
    faqs: [
      { question: 'What is considered a jumbo loan?', answer: "A jumbo loan exceeds the conforming loan limits set by the FHFA. In most Colorado counties, this limit is $766,550 for 2024." },
      { question: 'Are jumbo loans harder to qualify for?', answer: 'Yes. Jumbo loans typically require higher credit scores, lower debt-to-income ratios, and significant reserves. We help structure your file to meet these guidelines.' },
      { question: 'Do jumbo loans require larger down payments?', answer: 'Often. Some lenders allow down payments as low as 10%, but 20% or more is common depending on the loan amount and borrower profile.' },
      { question: 'Can I choose adjustable or fixed rates?', answer: 'Yes. We help you compare fixed and adjustable-rate options that align with your financial strategy.' }
    ]
  },
  '/loan-programs/usda': {
    path: '/loan-programs/usda',
    title: 'USDA Loans in Colorado | Cliff Mortgages / C2 Financial',
    h1: 'USDA Loans',
    description: 'USDA Colorado home loans with no down payment for qualifying rural properties, offering affordable paths to homeownership in eligible areas.',
    imageUrl: heroImageAssignments.usdaHero.src,
    imageAlt: heroImageAssignments.usdaHero.alt,
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Loan Programs', path: '/loan-programs' }, { name: 'USDA Loans', path: '/loan-programs/usda' }],
    programDetails: {
      summary: 'A USDA loan, guaranteed by the U.S. Department of Agriculture, is designed to make homeownership more accessible in eligible rural and suburban areas. Many Colorado communities qualify. USDA loans allow eligible homebuyers to purchase a home with no down payment, creating an option for borrowers who have stable income but may not have significant savings set aside.',
      eligibility: [
        'The property is located in a USDA-eligible rural or suburban area (we can help you verify).',
        'Your household income falls within the USDA’s income limits for the area.',
        'You have a reliable income and a reasonable credit history (many lenders look for scores around 640 or higher).',
        'The home will be used as your primary residence.'
      ],
      benefits: [
        '100% financing for eligible borrowers — no down payment required.',
        'Lower mortgage insurance costs compared to many low-down-payment loan programs.',
        'Competitive 30-year fixed interest rates.',
        'Closing costs may be paid by the seller or financed into the loan when allowed.'
      ],
      howItWorks: [
        { title: 'Eligibility Verification', description: 'We’ll help you confirm income and property eligibility using current USDA guidelines and maps.', icon: 'fa-solid fa-map-location-dot' },
        { title: 'Pre-Approval', description: 'We review your finances under USDA rules to provide a solid pre-approval so you can make an offer confidently.', icon: 'fa-solid fa-user-check' },
        { title: 'Lender Underwriting', description: 'Your loan package goes through our USDA-approved lender for the initial credit approval and appraisal review.', icon: 'fa-solid fa-file-shield' },
        { title: 'Final USDA Commitment & Closing', description: 'After lender approval, we submit to USDA for the final guarantee and coordinate closing timelines to keep everything on track.', icon: 'fa-solid fa-key' }
      ]
    },
    faqs: [
      { question: 'How do I know if a property is in a USDA-eligible area?', answer: 'The USDA publishes an official eligibility map on their website. We can help you look up any property address to check its eligibility.' },
      { question: 'What are the USDA income limits?', answer: 'Income limits vary by county and household size. They are based on the area’s median income. We can help determine which income limit applies to your situation.' },
      { question: 'What is the USDA Guarantee Fee?', answer: 'USDA loans include both an upfront and an annual guarantee fee. The upfront fee can be financed into the loan, and the annual fee is paid monthly. These fees are generally lower than those for FHA loans.' },
      { question: 'Do I have to be a first-time homebuyer?', answer: 'No. You do not need to be a first-time homebuyer to use a USDA loan, but the property must be your primary residence.' },
      { question: 'What does “rural” mean for USDA loans?', answer: 'The USDA’s definition of “rural” is quite broad. Many suburban and semi-rural areas qualify. We can help you check whether a specific location meets USDA guidelines.' }
    ]
  },
  '/loan-programs/construction': {
    path: '/loan-programs/construction',
    title: 'Construction Loans in Colorado | Cliff Mortgages / C2 Financial',
    h1: 'Colorado Home Construction Loans',
    description: 'Construction Colorado home loans for ADUs, remodels, and new builds, including options to finance land, permits, and phased construction costs.',
    imageUrl: heroImageAssignments.constructionHero.src,
    imageAlt: heroImageAssignments.constructionHero.alt,
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Loan Programs', path: '/loan-programs' }, { name: 'Construction Loans', path: '/loan-programs/construction' }],
    programDetails: {
      summary: 'Financing a construction project can take many forms. Whether you’re building a new home, adding an ADU, constructing a garage or workshop, or preparing land for a future build, we offer flexible loan options to fit your goals. As a mortgage broker, we work with lenders who offer both traditional construction loans and One-Time Close programs, giving you options instead of a one-size-fits-all approach.',
      eligibility: [
        'Homeowners or buyers looking to build a home, ADU, garage, or other major improvement.',
        'Borrowers needing financing for land they own or plan to purchase.',
        'Clients working with (or selecting) a licensed builder or qualified owner/builder.',
        'Borrowers with good credit and the ability to meet standard down payment and reserve requirements.'
      ],
      benefits: [
        'Loan options for different project types, from ground-up builds to major additions.',
        'Traditional or One-Time Close structures depending on your goals.',
        'Interest-only payments during construction to help manage cash flow.',
        'Potential rate protection with early lock options, depending on lender program.',
        'Ability to finance land, site prep, permits, and construction costs in one loan.'
      ],
      howItWorks: [
        { title: 'Project & Builder Review', description: 'We review plans, budgets, and builder qualifications to ensure alignment with lender requirements.', icon: 'fa-solid fa-clipboard-check' },
        { title: 'Loan Approval & Rate Options', description: 'We help you secure the right construction loan structure and explore rate-lock choices based on your timeline.', icon: 'fa-solid fa-file-signature' },
        { title: 'Managed Draw Process', description: 'We coordinate inspections and draw requests between you, your builder, and the lender so funds are released smoothly.', icon: 'fa-solid fa-drafting-compass' },
        { title: 'Final Inspection & Completion', description: 'After construction, a final inspection is completed and the loan converts to permanent financing or you refinance into the best long-term option.', icon: 'fa-solid fa-house-user' }
      ]
    },
    faqs: [
      { question: 'What is a one-time close construction loan?', answer: 'It combines the construction financing and the final mortgage into one package, simplifying the process and removing the need to re-qualify after the home is built.' },
      { question: 'How much of a down payment is needed for a construction loan?', answer: 'Down payments are typically higher than for existing homes, often 10%–20% of the total project cost. If you already own land, its equity may count toward your down payment.' },
      { question: 'How are my builder and plans approved?', answer: 'Lenders review your builder’s licensing, insurance, and experience, as well as the project plans and budget, to ensure everything is feasible and well-structured.' },
      { question: 'How does the builder get paid during construction?', answer: 'Funds are released through a “draw” process tied to inspection milestones, ensuring work is completed before payments are made.' },
      { question: 'Can I use a construction loan for a major renovation?', answer: 'Yes — some lenders allow construction-style financing for substantial remodels or additions. For heavy fixer-uppers, an FHA 203(k) loan may be a better fit depending on the project.' }
    ]
  },
  '/loan-programs/commercial': {
    path: '/loan-programs/commercial',
    title: 'Commercial Loans in Colorado | Cliff Mortgages / C2 Financial',
    h1: 'Colorado Commercial Property Loans',
    description: 'Commercial Colorado real estate financing options for small business buildings, mixed-use properties, and investment projects.',
    imageUrl: heroImageAssignments.commercialHero.src,
    imageAlt: heroImageAssignments.commercialHero.alt,
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Loan Programs', path: '/loan-programs' }, { name: 'Commercial Loans', path: '/loan-programs/commercial' }],
    programDetails: {
      summary: 'Commercial real estate financing demands deep market knowledge, creative structuring, and access to the right capital sources. We help investors, developers, and owner-occupants evaluate scenarios, assemble lender-ready packages, and negotiate competitive terms aligned with your long-term business plan.',
      eligibility: [
        'Investors acquiring or refinancing income-producing properties.',
        'Business owners securing owner-occupied space or expansion capital.',
        'Developers pursuing ground-up construction or major repositioning projects.',
        'Clients with detailed financials, business plans, and defined exit strategies.'
      ],
      benefits: [
        'Best Lender Match: tap our network of banks, credit unions, private lenders, and institutional capital.',
        'Deal Structuring Expertise: optimize leverage, amortization, and repayment based on your strategy.',
        'Transparent Term Sheets: we compare options side-by-side so you can choose with confidence.',
        'Due Diligence Support: guidance through appraisals, environmental reports, and third-party requirements.'
      ],
      howItWorks: [
        { title: 'Initial Analysis & Strategy', description: 'We review your project’s financials, business plan, and goals to outline viable financing structures.', icon: 'fa-solid fa-chart-line' },
        { title: 'Lender Matching & Negotiation', description: 'We prepare a professional loan package, present it to targeted lenders, and help compare competitive term sheets.', icon: 'fa-solid fa-handshake' },
        { title: 'Due Diligence & Closing Support', description: 'We stay engaged through underwriting, third-party reports, and closing logistics to keep your transaction on track.', icon: 'fa-solid fa-clipboard-list' }
      ]
    },
    faqs: [
      { question: 'What property types do you finance?', answer: 'We arrange loans for multi-family, office, retail, industrial, mixed-use, hospitality, and specialty projects.' },
      { question: 'How is commercial underwriting different?', answer: 'Lenders focus on property cash flow, sponsorship strength, market conditions, and exit strategy—not just personal income.' },
      { question: 'Can you assist with SBA or owner-occupied loans?', answer: 'Yes. We originate SBA 504/7(a) and conventional owner-occupied loans for expanding businesses.' },
      { question: 'What documentation will I need?', answer: 'Expect business financials, rent rolls, leases, tax returns, market studies, and entity documents. We provide a tailored checklist up front.' },
      { question: 'Do you finance ground-up construction?', answer: 'Yes. Our lender partners fund build-to-suit, speculative, and value-add projects, subject to experience and pre-leasing requirements.' }
    ]
  },
  '/about': {
    path: '/about',
    title: 'About Cliff Mortgages | Colorado Mortgage Broker',
    h1: 'About Cliff Mortgages',
    description: 'Learn about our mission to provide tailored mortgage solutions with personalized guidance for every Coloradan.',
    imageUrl: heroImageAssignments.aboutHero.src,
    imageAlt: heroImageAssignments.aboutHero.alt,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' }
    ],
    faqs: [
      { question: 'What is your mission?', answer: 'Our mission is to provide clear, trustworthy, and expert mortgage guidance to help Coloradans achieve their homeownership dreams with confidence and peace of mind.' },
      { question: 'What areas in Colorado do you serve?', answer: 'We are licensed to serve the entire state of Colorado. Whether you\'re in Denver, Fort Collins, or a small mountain town, we can help.' },
      { question: 'Why should I use a mortgage broker?', answer: 'A mortgage broker works for you, not a single bank. We shop multiple lenders to find competitive rates and loan programs tailored to your specific needs, saving you time and money.' },
      { question: "What's the difference between Cliff Mortgages and C2 Financial?", answer: 'Cliff Mortgages is an independent mortgage brokerage that partners with C2 Financial Corporation. This structure gives us the agility of a small business with the resources, lender network, and compliance oversight of a large, reputable corporation.' },
      { question: 'How do I get started?', answer: 'The best first step is to fill out our \'Get a Quote\' form or give us a call. We\'ll start with a friendly, no-pressure conversation about your goals.' }
    ]
  },
  '/about/cindy-cliff': {
    path: '/about/cindy-cliff',
    title: 'About Cindy Cliff | Colorado Mortgage Loan Originator',
    h1: 'Cindy Cliff, NMLS #XXXXXX',
    description: 'Learn about Cindy Cliff’s experience as a Colorado mortgage broker and how she guides homeowners and investors with tailored loan strategies.',
    imageUrl: heroImageAssignments.cindyHero.src,
    imageAlt: heroImageAssignments.cindyHero.alt,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Cindy Cliff', path: '/about/cindy-cliff' }
    ],
    faqs: []
  },
  '/contact': {
    path: '/contact',
    title: 'Contact Us | Cliff Mortgages',
    h1: 'Schedule a Consultation',
    description: 'Get in touch with our team by booking a time on the calendar below.',
    imageUrl: heroImageAssignments.aboutHero.src,
    imageAlt: heroImageAssignments.aboutHero.alt,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' }
    ],
    faqs: [
      { question: 'What are your business hours?', answer: 'Our typical business hours are Monday to Friday, 9:00 AM to 5:00 PM Mountain Time. We often accommodate appointments outside of these hours as needed.' },
      { question: 'What is the best way to send you documents securely?', answer: 'Once you begin the application process, we will provide you with access to a secure online portal for uploading sensitive documents. Please do not send personal financial information via standard email.' },
      { question: 'I submitted a form, when will I hear back?', answer: 'We strive to respond to all inquiries within one business day. If your matter is urgent, please give us a call directly.' },
      { question: 'Where is your office located?', answer: 'While we serve the entire state of Colorado, our primary operations are based in [City, CO]. We can meet with clients virtually or in person as needed.' },
      { question: 'How can I opt out of text messages or calls?', answer: 'You can opt out at any time. To opt out of texts, reply "STOP". To be added to our Do Not Call list, simply let us know during any phone call or send us an email with your request.' }
    ]
  },
  '/legal/privacy-policy': {
    path: '/legal/privacy-policy',
    title: 'Privacy Policy | Cliff Mortgages',
    h1: 'Privacy Policy',
    description: 'Our commitment to protecting your personal information.',
    imageUrl: heroImageAssignments.privacyPolicyHero.src,
    imageAlt: heroImageAssignments.privacyPolicyHero.alt,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Privacy Policy', path: '/legal/privacy-policy' }
    ],
    faqs: [
      { question: 'What information do you collect?', answer: 'We collect nonpublic personal information (NPI) necessary to process your loan application, such as your name, social security number, income, and credit history. We only collect what is required.' },
      { question: 'How do you protect my information?', answer: 'We implement physical, electronic, and procedural safeguards to protect your NPI. Access is restricted to employees and authorized service providers who need the information to perform their jobs.' },
      { question: 'Do you share my information?', answer: 'We only share your information with third parties as necessary to complete your loan transaction, such as credit bureaus and title companies, or as permitted by law. We do not sell your information.' },
      { question: 'How can I opt out of information sharing?', answer: 'You may have the right to limit some, but not all, sharing of your information. Please contact us directly to discuss your options as provided under federal law.' },
      { question: 'How long do you retain my data?', answer: 'We retain your information for as long as necessary to comply with legal and regulatory requirements, typically for several years after your loan is closed or your application is withdrawn.' }
    ]
  },
  '/legal/accessibility': {
    path: '/legal/accessibility',
    title: 'Accessibility Statement | Cliff Mortgages',
    h1: 'Accessibility Statement',
    description: 'Our commitment to accessible and inclusive digital experiences for all users.',
    imageUrl: heroImageAssignments.accessibilityHero.src,
    imageAlt: heroImageAssignments.accessibilityHero.alt,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Accessibility Statement', path: '/legal/accessibility' }
    ],
    faqs: [
      { question: 'What is your accessibility standard?', answer: 'We are committed to making our website accessible and aim to conform to the World Wide Web Consortium’s Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.' },
      { question: 'How do I report an accessibility issue?', answer: 'If you encounter any accessibility barriers, please contact us at [email] or [phone]. We are committed to addressing your concerns promptly.' },
      { question: 'What assistive technologies do you support?', answer: 'Our website is designed to be compatible with modern screen readers and other assistive technologies. We recommend using the latest version of your browser and assistive tech for the best experience.' },
      { question: 'Are all features of your site accessible?', answer: 'We are continually working to improve accessibility. While we strive to make the entire site accessible, some third-party content or integrations may have limitations that we are working to address.' },
      { question: 'Can I get help if I have trouble using the site?', answer: 'Yes. Please contact us directly for assistance with any part of our website or services. We are happy to provide information and support through alternative communication methods.' }
    ]
  },
  '/loan-programs/non-qm': {
    path: '/loan-programs/non-qm',
    title: 'Non-QM Loans in Colorado | Cliff Mortgages / C2 Financial',
    h1: 'Non-QM Loans in Colorado',
    description: 'Non-QM Colorado home loans for self-employed borrowers, investors, and non-traditional income situations that fall outside standard underwriting boxes.',
    imageUrl: heroImageAssignments.nonQmHero.src,
    imageAlt: heroImageAssignments.nonQmHero.alt,
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Loan Programs', path: '/loan-programs' }, { name: 'Non-QM Loans', path: '/loan-programs/non-qm' }],
    programDetails: {
      summary: 'When traditional underwriting doesn’t tell the full story, Non-QM loans open the door. We help self-employed borrowers, investors, and clients with recent credit events structure compelling scenarios using bank statements, assets, DSCR, and other alternative documentation.',
      eligibility: [
        'Self-employed borrowers leveraging bank statements, P&Ls, or asset depletion.',
        'Real estate investors using DSCR or other cash-flow-based programs.',
        'Clients overcoming recent credit events, like bankruptcy or foreclosure.',
        'Foreign nationals or borrowers with complex, non-traditional income sources.'
      ],
      benefits: [
        'Alternative Documentation Guidance: we outline what your lender needs and package it clearly.',
        'Vast Non-QM Lender Network: access specialty programs designed for unique borrower profiles.',
        'Creative Scenario Support: we tailor solutions when traditional guidelines fall short.',
        'Flexible structures for long-term rentals, short-term rentals, and complex income situations.'
      ],
      howItWorks: [
        { title: 'Creative Scenario Review', description: 'We take time to understand your full financial picture and match you with the right Non-QM program.', icon: 'fa-solid fa-lightbulb' },
        { title: 'Documentation Blueprint', description: 'We outline exactly what to gather—bank statements, asset evidence, rental income projections—and help organize it.', icon: 'fa-solid fa-file-invoice-dollar' },
        { title: 'Specialized Underwriting & Closing', description: 'We work closely with Non-QM underwriters and lenders to keep questions answered and the transaction on schedule.', icon: 'fa-solid fa-user-tie' }
      ]
    },
    faqs: [
      { question: 'What does "Non-QM" mean?', answer: 'Non-QM stands for Non-Qualified Mortgage. A "Qualified Mortgage" (QM) is a loan that meets specific government standards for ability-to-repay. Non-QM loans have their own robust standards for determining ability-to-repay but use more flexible, alternative methods.' },
      { question: 'Are Non-QM loans the same as "subprime" loans?', answer: 'No. Today\'s Non-QM loans are not the risky "subprime" loans of the past. They are well-underwritten loans for creditworthy borrowers who simply don\'t fit the rigid box of traditional lending. They still require significant documentation to prove ability to repay.' },
      { question: 'How do bank statement loans work?', answer: 'A bank statement loan is a popular type of Non-QM loan for self-employed individuals. Instead of tax returns, the lender analyzes deposits into your personal or business bank accounts over a 12 or 24-month period to determine your qualifying income.' },
      { question: 'Can I finance investment properties with Non-QM?', answer: 'Yes. DSCR loans, which are designed specifically for real estate investors, are a very common and popular type of Non-QM loan.' },
      { question: 'Will my rate be higher?', answer: 'Non-QM rates can be slightly higher due to the flexibility, but we shop multiple specialty lenders to keep pricing competitive.' }
    ]
  },
  '/get-a-quote': {
    path: '/get-a-quote',
    title: 'Get a Mortgage Quote in Colorado | Cliff Mortgages / C2 Financial',
    h1: 'Get Your Personalized Mortgage Quote',
    description: 'Request a no-obligation quote on Colorado home loans tailored to your purchase, refinance, or equity-access scenario.',
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Get a Quote', path: '/get-a-quote' }],
    imageUrl: heroImageAssignments.getQuoteHero.src,
    imageAlt: heroImageAssignments.getQuoteHero.alt,
    faqs: []
  }
};