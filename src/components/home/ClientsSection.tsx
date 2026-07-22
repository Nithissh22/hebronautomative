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

        <div className="clients-sec__marquee-container">
          <div className="clients-sec__marquee">
            {[...Array(2)].map((_, i) => (
              <div className="clients-sec__logos" key={i}>
                <img src="/assets/TVS_Motor_Company_v3.png" alt="TVS Motor Company" className="client-logo" />
                <img src="/assets/Honda_v3.png" alt="Honda" className="client-logo" />
                <img src="/assets/Royal_Enfield_v2.png" alt="Royal Enfield" className="client-logo" />
                <img src="/assets/Mahindra_v2.png" alt="Mahindra" className="client-logo" />
                <img src="/assets/Ather_Energy_v2.png" alt="Ather Energy" className="client-logo" />
                <img src="/assets/Yamaha_v2.png" alt="Yamaha" className="client-logo" />
                <img src="/assets/Jawa_Motorcycles_v2.png" alt="Jawa Motorcycles" className="client-logo" />
                <img src="/assets/Ola_Electric.svg" alt="Ola Electric" className="client-logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
