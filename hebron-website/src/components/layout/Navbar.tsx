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
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 72);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>

      <NavLink href="/" className="nav__brand">
        <img src="/logo.png" alt="Hebron Automotive" className="nav__logo" />
      </NavLink>

      <nav className="nav__links">
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <NavLink 
              key={link.label}
              href={link.href} 
              className={isActive ? 'active' : ''}
            >
              {link.label}
            </NavLink>
          );
        })}
      </nav>

      <NavLink href="/contact" className="nav__cta">
        Request Quote
        <span className="nav__cta-arrow">→</span>
      </NavLink>

    </header>
  );
};

export default Navbar;
