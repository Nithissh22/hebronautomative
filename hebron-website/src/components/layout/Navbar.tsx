'use client';

import { useState, useEffect, FC } from 'react';
import { usePathname } from 'next/navigation';
import NavLink from '@/components/ui/NavLink';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Products', href: '/products' },
  { label: 'Quality', href: '/quality' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/internships' },
  { label: 'Contact', href: '/contact' },
];

interface NavbarProps {
  theme?: string;
}

const Navbar: FC<NavbarProps> = ({ theme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 72);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
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
        <img src="/logo.png" alt="Hebron Automotive" className="nav__logo" />
      </NavLink>

      <nav className={`nav__links ${mobileMenuOpen ? 'nav__links--open' : ''}`}>
        {NAV_LINKS.map((link) => {
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
