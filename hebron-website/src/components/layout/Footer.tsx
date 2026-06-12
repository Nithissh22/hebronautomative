import React from 'react';
import NavLink from '@/components/ui/NavLink';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        
        <div className="footer__col">
          <img src="/logo.png" alt="Hebron Automotive" className="footer__logo" />
          <p className="footer__text">
            Precision aluminium die casting, machining, and sub-assembly for global automotive OEMs.
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__h4">Processes</h4>
          <NavLink href="/capabilities">High Pressure Die Casting</NavLink>
          <NavLink href="/capabilities">Gravity Die Casting</NavLink>
          <NavLink href="/capabilities">VMC / CNC Machining</NavLink>
          <NavLink href="/capabilities">Powder Coating</NavLink>
        </div>

        <div className="footer__col">
          <h4 className="footer__h4">Company</h4>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/quality">Quality & Certifications</NavLink>
          <NavLink href="/products">Components</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>

        <div className="footer__col">
          <h4 className="footer__h4">Contact</h4>
          <p className="footer__text">Plot No. 123, Sector 4<br/>Auto Nagar, Hosur, TN</p>
          <a href="mailto:sales@hebronautomotive.com" className="footer__link">sales@hebronautomotive.com</a>
        </div>

      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Hebron Automotive Pvt Ltd.</span>
        <span>IATF 16949:2016 Certified</span>
        <span className="footer__credit">Developed by <span className="footer__credit-name">CodeMeshFlow</span></span>
      </div>
    </footer>
  );
}
