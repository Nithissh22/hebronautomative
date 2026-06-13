import React from 'react';
import './ClientsSection.css';

export default function ClientsSection() {
  return (
    <section className="clients-sec">
      <div className="container">
        <div className="clients-sec__header">
          <span className="eyebrow">TRUSTED BY OEMS</span>
          <h2 className="section-heading section-heading--light">
            Our Approved End Customers
          </h2>
          <div className="heading-rule" />
        </div>

        <div className="clients-sec__logos">
          <img src="/clients/tvs.png" alt="TVS Motor Company" className="client-logo" />
          <img src="/clients/honda.png" alt="Honda" className="client-logo" />
          <img src="/clients/royalenfield.png" alt="Royal Enfield" className="client-logo" />
          <img src="/clients/mahindra.png" alt="Mahindra" className="client-logo" />
          <img src="/clients/ather.png" alt="Ather Energy" className="client-logo" />
          <img src="/clients/yamaha.png" alt="Yamaha" className="client-logo" />
          <img src="/clients/jawa.png" alt="Jawa Motorcycles" className="client-logo" />
          <img src="/clients/ola.svg" alt="Ola Electric" className="client-logo" />
        </div>
      </div>
    </section>
  );
}
