import React from 'react';
import NavLink from '@/components/ui/NavLink';
import './HomeCTA.css';

export default function HomeCTA() {
  return (
    <section className="home-cta">
      <div className="container home-cta__inner">
        <h2 className="section-heading section-heading--light">
          Ready to scale<br/>your assembly line?
        </h2>
        <p className="home-cta__sub">
          Send us your drawings for a technical review and quote within 48 hours.
        </p>
        <div className="home-cta__actions">
          <NavLink href="/contact" className="btn-primary">
            Request Quote
          </NavLink>
          <a href="mailto:sales@hebronautomotive.com" className="btn-outline--light">
            Email Sales
          </a>
        </div>
      </div>
    </section>
  );
}
