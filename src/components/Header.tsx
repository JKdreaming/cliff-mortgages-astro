import React, { useEffect, useMemo, useRef, useState } from 'react';
import { sitemap } from '../data/sitemap';
import type { LoanProgramLink } from '../data/types';
import cliffmortgagesLogo from '../assets/images/cliffmortgages-logo.webp';

interface HeaderProps {
  currentPath: string;
}

const loanProgramBuckets = () => {
  const loanPrograms = sitemap.loanPrograms;

  const homebuyersPrograms: LoanProgramLink[] = loanPrograms.filter(program =>
    ['/loan-programs/purchase', '/loan-programs/refinance', '/loan-programs/heloc', '/loan-programs/conventional'].includes(program.path)
  );
  const governmentPrograms: LoanProgramLink[] = loanPrograms.filter(program =>
    ['/loan-programs/fha', '/loan-programs/va', '/loan-programs/usda', '/loan-programs/fha-203k'].includes(program.path)
  );
  const investorPrograms: LoanProgramLink[] = loanPrograms.filter(program =>
    ['/loan-programs/dscr', '/loan-programs/non-qm', '/loan-programs/commercial'].includes(program.path)
  );
  const specializedPrograms: LoanProgramLink[] = loanPrograms.filter(program =>
    ['/loan-programs/jumbo', '/loan-programs/reverse-mortgage', '/loan-programs/construction', '/loan-programs/equity-select'].includes(program.path)
  );

  return { homebuyersPrograms, governmentPrograms, investorPrograms, specializedPrograms };
};

const isPathActive = (targetPath: string, currentPath: string) => {
  if (targetPath === '/') {
    return currentPath === '/';
  }

  return currentPath === targetPath || currentPath.startsWith(`${targetPath}/`);
};

const Header: React.FC<HeaderProps> = ({ currentPath }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const megaMenuRef = useRef<HTMLDivElement | null>(null);

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

    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMegaMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMegaMenuOpen]);

  const navLinkClasses = (active: boolean) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      active ? 'bg-gray-100 text-[#09143e]' : 'text-gray-700 hover:bg-gray-100 hover:text-[#09143e]'
    }`;

  const mobileNavLinkClasses = (active: boolean) =>
    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
      active ? 'bg-gray-100 text-[#09143e]' : 'text-gray-700 hover:bg-gray-100 hover:text-[#09143e]'
    }`;

  const handleLoanProgramsClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isMegaMenuOpen) {
      event.preventDefault();
      setIsMegaMenuOpen(true);
      return;
    }

    event.preventDefault();
    setIsMegaMenuOpen(false);
  };

  const handleLoanProgramsKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsMegaMenuOpen(prev => !prev);
    }

    if (event.key === 'Escape') {
      setIsMegaMenuOpen(false);
    }
  };

  const renderMobileDropdown = () => {
    const isOpen = openMobileDropdown === 'loan';
    const sections = [
      { title: 'For Homebuyers', programs: homebuyersPrograms },
      { title: 'Government Programs', programs: governmentPrograms },
      { title: 'Investor & Non-QM', programs: investorPrograms },
      { title: 'Specialized Financing', programs: specializedPrograms },
    ];

    return (
      <div>
        <button
          onClick={() => setOpenMobileDropdown(prev => (prev === 'loan' ? null : 'loan'))}
          className="group flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100"
        >
          <span>Loan Programs</span>
          <i className={`fas fa-chevron-down ml-1 text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
          <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
            <a
              href="/loan-programs"
              className="block rounded-lg bg-[#09143e] px-4 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#0f1d5a]"
              role="menuitem"
            >
              View All Loan Programs
            </a>
            <div className="mt-4 grid gap-4" style={{ gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
              {sections.map(section => (
                <div key={section.title} className="space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">{section.title}</p>
                  <div className="space-y-2">
                    {section.programs.map(program => (
                      <a
                        key={program.path}
                        href={program.path}
                        className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 text-left transition-colors hover:border-[#bf9f5c] hover:bg-[#f7f1e2]"
                        role="menuitem"
                      >
                        <i className={`${program.icon} mt-1 text-xl text-[#bf9f5c] flex-shrink-0`}></i>
                        <div className="space-y-1">
                          <p className="text-sm font-semibold text-gray-900">{program.name}</p>
                          <p className="text-xs leading-snug text-gray-500">{program.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/">
                <img src={cliffmortgagesLogo.src} alt="Cliff Mortgages Logo" className="h-10 w-auto rounded-[10px]" />
              </a>
            </div>
            <nav className="hidden xl:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className={navLinkClasses(isPathActive('/', currentPath))}>
                  Home
                </a>

                <div className="relative" ref={megaMenuRef}>
                  <a
                    href="/loan-programs"
                    className={navLinkClasses(isPathActive('/loan-programs', currentPath))}
                    onClick={handleLoanProgramsClick}
                    onKeyDown={handleLoanProgramsKeyDown}
                    aria-expanded={isMegaMenuOpen}
                    aria-haspopup="true"
                  >
                    <span>Loan Programs</span>
                    <i className={`fas fa-chevron-down text-xs ml-1 transition-transform transform ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
                  </a>
                  {isMegaMenuOpen && (
                    <div className="absolute top-full mt-2 w-[900px] bg-white rounded-lg shadow-2xl p-6 grid grid-cols-4 gap-x-8 gap-y-4 left-1/2 -translate-x-1/2">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">For Homebuyers</h3>
                        <div className="space-y-1">
                          {homebuyersPrograms.map(program => (
                            <a
                              href={program.path}
                              key={program.path}
                              className="flex items-start p-3 rounded-lg hover:bg-gray-100 transition-colors -mx-3"
                            >
                              <i className={`${program.icon} text-[#bf9f5c] text-xl w-8 text-center mt-1`}></i>
                              <div className="ml-4">
                                <p className="font-semibold text-gray-900 text-sm">{program.name}</p>
                                <p className="text-xs text-gray-500 mt-1">{program.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Government Programs</h3>
                        <div className="space-y-1">
                          {governmentPrograms.map(program => (
                            <a
                              href={program.path}
                              key={program.path}
                              className="flex items-start p-3 rounded-lg hover:bg-gray-100 transition-colors -mx-3"
                            >
                              <i className={`${program.icon} text-[#bf9f5c] text-xl w-8 text-center mt-1`}></i>
                              <div className="ml-4">
                                <p className="font-semibold text-gray-900 text-sm">{program.name}</p>
                                <p className="text-xs text-gray-500 mt-1">{program.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Investor & Non-QM</h3>
                        <div className="space-y-1">
                          {investorPrograms.map(program => (
                            <a
                              href={program.path}
                              key={program.path}
                              className="flex items-start p-3 rounded-lg hover:bg-gray-100 transition-colors -mx-3"
                            >
                              <i className={`${program.icon} text-[#bf9f5c] text-xl w-8 text-center mt-1`}></i>
                              <div className="ml-4">
                                <p className="font-semibold text-gray-900 text-sm">{program.name}</p>
                                <p className="text-xs text-gray-500 mt-1">{program.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Specialized Financing</h3>
                        <div className="space-y-1">
                          {specializedPrograms.map(program => (
                            <a
                              href={program.path}
                              key={program.path}
                              className="flex items-start p-3 rounded-lg hover:bg-gray-100 transition-colors -mx-3"
                            >
                              <i className={`${program.icon} text-[#bf9f5c] text-xl w-8 text-center mt-1`}></i>
                              <div className="ml-4">
                                <p className="font-semibold text-gray-900 text-sm">{program.name}</p>
                                <p className="text-xs text-gray-500 mt-1">{program.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <a href="/about" className={navLinkClasses(isPathActive('/about', currentPath))}>
                  About
                </a>
                <a href="/contact" className={navLinkClasses(isPathActive('/contact', currentPath))}>
                  Contact
                </a>
              </div>
            </nav>
          </div>
          <div className="hidden xl:block">
            <a
              href="/get-a-quote"
              className="px-4 py-2 bg-[#bf9f5c] text-white font-semibold rounded-lg shadow-sm hover:bg-[#a68a4c] transition-transform hover:scale-105 text-sm"
            >
              Get a Quote
            </a>
          </div>
          <div className="-mr-2 flex xl:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#09143e]"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <i className="fas fa-times block h-6 w-6"></i> : <i className="fas fa-bars block h-6 w-6"></i>}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="xl:hidden max-h-[calc(100vh-4rem)] overflow-y-auto" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className={mobileNavLinkClasses(isPathActive('/', currentPath))}>
              Home
            </a>
            {renderMobileDropdown()}
            <a href="/about" className={mobileNavLinkClasses(isPathActive('/about', currentPath))}>
              About
            </a>
            <a href="/contact" className={mobileNavLinkClasses(isPathActive('/contact', currentPath))}>
              Contact
            </a>
            <div className="mt-4">
              <a
                href="/get-a-quote"
                className="block w-full text-center px-4 py-3 bg-[#bf9f5c] text-white font-semibold rounded-lg shadow-sm hover:bg-[#a68a4c] transition duration-300 text-sm"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
