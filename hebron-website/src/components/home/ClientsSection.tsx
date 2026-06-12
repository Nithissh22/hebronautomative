import React from 'react';
import './ClientsSection.css';

export default function ClientsSection() {
  return (
    <section className="clients-sec">
      <div className="container">
        <div className="clients-sec__header">
          <span className="eyebrow">TRUSTED BY OEMS</span>
          <h2 className="section-heading section-heading--light">
            Supplying the leaders<br/>in automotive motion.
          </h2>
          <div className="heading-rule" />
        </div>

        <div className="clients-sec__logos">
          <img src="/clients/gabriel.png" alt="Gabriel India" className="client-logo" />
          <img src="/clients/ather.png" alt="Ather Energy" className="client-logo" />
          <img src="/clients/tvs.png" alt="TVS Motor Company" className="client-logo" />
        </div>
      </div>
    </section>
  );
}
