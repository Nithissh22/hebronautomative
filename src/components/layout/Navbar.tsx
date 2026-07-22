'use client';

import { useState, useEffect, FC } from 'react';
import { usePathname } from 'next/navigation';
import NavLink from '@/components/ui/NavLink';
import './Navbar.css';

const NAV_LINKS = [
  { 
    label: 'Capabilities', 
    href: '/capabilities',
    subLinks: [
      { label: 'Die Casting', href: '/capabilities?id=die-casting' },
      { label: 'CNC Machining', href: '/capabilities?id=cnc-machining' },
      { label: 'Powder Coating', href: '/capabilities?id=powder-coating' },
      { label: 'Sub Assembly', href: '/capabilities?id=sub-assembly' },
      { label: 'Quality & Inspection', href: '/capabilities?id=quality-systems' }
    ]
  },
  { 
    label: 'Products', 
    href: '/products',
    subLinks: [
      { label: 'Eyelet Assembly', href: '/products#eyelet-assembly' },
      { label: 'Spring Seat Adjuster', href: '/products#spring-seat-adjuster' },
      { label: 'Outer Tube LH & RH', href: '/products#outer-tube' }
    ]
  },
  { label: 'Quality', href: '/quality' },
  { label: 'About', href: '/about' },
  { 
    label: 'Careers', 
    href: '#',
    subLinks: [
      { label: 'Job Vacancies', href: '/careers' },
      { label: 'Internships', href: '/internships' }
    ]
  },
  { label: 'Contact', href: '/contact' },
];

const LANGUAGES = [
  { code: 'EN', name: 'England' },
  { code: 'JP', name: 'Japan' },
  { code: 'ES', name: 'Spain' },
  { code: 'DE', name: 'German' },
  { code: 'IL', name: 'Israel' },
  { code: 'RU', name: 'Russia' },
  { code: 'FR', name: 'France' },
  { code: 'PL', name: 'Poland' }
];

interface NavbarProps {
  theme?: string;
}

const Navbar: FC<NavbarProps> = ({ theme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 72);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setLangDropdownOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''} ${theme === 'light' ? 'nav--light' : ''} ${mobileMenuOpen ? 'nav--mobile-open' : ''}`}>

      <NavLink href="/" className="nav__brand">
        <img src="/images/hebron-logo_v2.png" alt="Hebron Automotive" className="nav__logo" />
      </NavLink>

      <nav className={`nav__links ${mobileMenuOpen ? 'nav__links--open' : ''}`}>
        {NAV_LINKS.map((link) => {
          if (link.subLinks) {
            return (
              <div 
                key={link.label} 
                className="nav__dropdown-container"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.href === '#' ? (
                  <span className={`nav__dropdown-trigger ${pathname.startsWith('/careers') || pathname.startsWith('/internships') ? 'active' : ''}`}>
                    {link.label}
                  </span>
                ) : (
                  <NavLink 
                    href={link.href}
                    className={`nav__dropdown-trigger ${pathname.startsWith(link.href) && link.href !== '#' ? 'active' : ''}`}
                  >
                    {link.label}
                  </NavLink>
                )}
                <div className={`nav__dropdown-menu ${activeDropdown === link.label ? 'is-active' : ''}`}>
                  {link.subLinks.map(sub => (
                    <NavLink key={sub.label} href={sub.href} className="nav__dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                      {sub.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            );
          }
          
          const isActive = pathname === link.href;
          return (
            <NavLink 
              key={link.label}
              href={link.href} 
              className={isActive ? 'active' : ''}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          );
        })}
      </nav>

      <div className="nav__right">
        <div 
          className="nav__lang-switcher"
          onMouseEnter={() => setLangDropdownOpen(true)}
          onMouseLeave={() => setLangDropdownOpen(false)}
        >
          <span className="nav__lang-current">{currentLang}</span>
          <div className={`nav__dropdown-menu nav__lang-menu ${langDropdownOpen ? 'is-active' : ''}`}>
            {LANGUAGES.map(lang => (
              <button 
                key={lang.code} 
                className="nav__dropdown-item nav__lang-btn"
                onClick={() => {
                  setCurrentLang(lang.code);
                  setLangDropdownOpen(false);
                }}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>

        <NavLink href="/contact" className="nav__cta">
          Request Quote
          <span className="nav__cta-arrow">→</span>
        </NavLink>

        <button 
          className={`nav__mobile-toggle ${mobileMenuOpen ? 'is-open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

    </header>
  );
};

export default Navbar;
