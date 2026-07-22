import React from 'react';
import NavLink from '@/components/ui/NavLink';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        
        <div className="footer__col footer__col--brand">
          <img src="/images/hebron-logo_v2.png" alt="Hebron Automotive" className="footer__logo" />
          <p className="footer__text">
            Precision aluminium die casting, machining, and sub-assembly for global automotive OEMs.
          </p>
          <div className="footer__map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15570.612053147321!2d77.8188046!3d12.7231454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baae17f573c09f1%3A0xc619e072b21735cb!2sAuto%20Nagar%2C%20Hosur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="150" 
              style={{ border: 0, borderRadius: '8px', marginTop: '16px' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
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
          <NavLink href="/products">Products</NavLink>
          <NavLink href="/careers">Job Vacancies</NavLink>
          <NavLink href="/internships">Internships</NavLink>
        </div>

        <div className="footer__col">
          <h4 className="footer__h4">Contact</h4>
          <p className="footer__text">Plot No. 123, Sector 4<br/>Auto Nagar, Hosur, TN, India</p>
          <a href="mailto:sales@hebronautomotive.com" className="footer__link">sales@hebronautomotive.com</a>
          <NavLink href="/contact" className="footer__link-btn">Contact Us</NavLink>
        </div>

      </div>
      <div className="container footer__bottom">
        <span>© 2026 Hebron Automotive Pvt Ltd.</span>
        <span className="footer__flag">
          🇮🇳 India
        </span>
      </div>
    </footer>
  );
}
