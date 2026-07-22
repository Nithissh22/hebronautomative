import React from 'react';
import Navbar from '@/components/layout/Navbar';
import './products.css';

const CAPABILITIES_DATA = [
  {
    slug: 'eyelet-assembly',
    title: 'Eyelet Assembly',
    subtitle: 'PDC PARTS — SHOCK ABSORBER APPLICATION',
    image: '/images/eyelet-assembly.png',
    specs: [
      { label: 'MATERIAL', value: 'ADC12' },
      { label: 'PROCESS', value: 'HPDC + VMC Machining' },
      { label: 'CUSTOMER', value: 'Gabriel (Hosur Main Plant & Satellite)' },
    ],
  },
  {
    slug: 'spring-seat-adjuster',
    title: 'Spring Seat Adjuster',
    subtitle: 'PDC PARTS — TWO WHEELER SUSPENSION',
    image: '/images/spring-seat-adjuster.png',
    specs: [
      { label: 'MATERIAL', value: 'ADC12' },
      { label: 'PROCESS', value: 'HPDC + Powder Coating' },
      { label: 'CUSTOMER', value: 'Automotive OEM Supply' },
    ],
  },
  {
    slug: 'outer-tube',
    title: 'Outer Tube LH & RH',
    subtitle: 'GDC PARTS — SHOCK ABSORBER ASSEMBLY',
    image: '/images/outer-tube.png',
    specs: [
      { label: 'MATERIAL', value: 'Aluminium Alloy' },
      { label: 'PROCESS', value: 'GDC + VMC Machining + Powder Coating' },
      { label: 'CUSTOMER', value: 'Gabriel, Hitachi Astemo' },
    ],
  }
];

export default function ProductsPage() {
  const featured = CAPABILITIES_DATA[0];
  const secondary = CAPABILITIES_DATA.slice(1);

  return (
    <>
      <Navbar />
      
      <section className="products-hero">
        <img 
          src="/images/process-capabilities-bg.png" 
          alt="Process Capabilities Background" 
          className="products-hero__bg" 
        />
        <div className="products-hero__overlay"></div>
        
        <div className="container products-hero__content">
          <div className="eyebrow hero-eyebrow">
            MANUFACTURING INFRASTRUCTURE
          </div>
          <h1 className="hero-serif-title">Process Capabilities</h1>
        </div>
      </section>

      <main id="main-content" style={{ backgroundColor: '#F8FAFC', padding: '64px 0 120px 0' }}>
        <div className="container">

          <div className="product-bento-grid">
            {/* Featured Card (Left) */}
            <div id={featured.slug} className="bento-card bento-card--featured" style={{ scrollMarginTop: '100px' }}>
              <div className="bento-card__image-wrap">
                <img src={featured.image} alt={featured.title} className="bento-photo" />
              </div>
              <div className="bento-card__content">
                <h2 className="bento-title">{featured.title}</h2>
                <p className="bento-subtitle">{featured.subtitle}</p>
                
                <div className="bento-featured-specs">
                  {featured.specs.map((spec, idx) => (
                    <React.Fragment key={idx}>
                      <div className="featured-spec-item">
                        {spec.value}
                      </div>
                      {idx < featured.specs.length - 1 && <div className="spec-divider-vertical"></div>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Secondary Cards (Right) */}
            <div className="bento-secondary-col">
              {secondary.map((cap) => (
                <div key={cap.slug} id={cap.slug} className="bento-card bento-card--secondary" style={{ scrollMarginTop: '100px' }}>
                  <div className="bento-card__image-wrap">
                    <img src={cap.image} alt={cap.title} className="bento-photo" />
                  </div>
                  <div className="bento-card__content">
                    <h2 className="bento-title">{cap.title}</h2>
                    
                    <div className="bento-secondary-specs">
                      {cap.specs.map((spec, idx) => (
                        <div key={idx} className="secondary-spec-row">
                          <span className="spec-label">{spec.label}</span>
                          <div className="spec-divider-small"></div>
                          <span className="spec-value">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
