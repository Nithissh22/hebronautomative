'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import LazyVideo from '@/components/ui/LazyVideo';
import './capabilities.css';

// Reusable SVG Icons
const Icons = {
  Process: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21v-7"/><path d="M4 10V3"/><path d="M12 21v-9"/><path d="M12 8V3"/><path d="M20 21v-5"/><path d="M20 12V3"/><path d="M1 14h6"/><path d="M9 8h6"/><path d="M17 16h6"/></svg>,
  Tonnage: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
  Machines: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20"/><path d="M4 20V8l8-4 8 4v12"/><path d="M9 20v-5h6v5"/><path d="M14 10v4"/><path d="M10 10v4"/></svg>,
  Alloys: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
  Check: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  Layers: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
  Settings: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
};

const DRAWER_DATA = {
  'die-casting': {
    title: 'Die Casting Specs',
    specs: [
      { label: 'Tonnage Range', value: '120T - 250T' },
      { label: 'Alloys Handled', value: 'ADC12, A380, LM6' },
      { label: 'Max Part Weight', value: '5.2 kg' },
      { label: 'General Tolerance', value: '±0.1 mm' },
      { label: 'Production Volume', value: 'High Volume (Automated)' },
      { label: 'Secondary Ops', value: 'Shot Blasting, Vibro Finishing' },
    ]
  },
  'machining': {
    title: 'Machining Specs',
    specs: [
      { label: 'Machine Type', value: '4-Axis VMC & CNC Turning' },
      { label: 'Precision / Tolerance', value: '±0.005 mm' },
      { label: 'Spindle Speed', value: 'Up to 12,000 RPM' },
      { label: 'Materials', value: 'Aluminum, Cast Iron, Steel' },
      { label: 'Surface Finish', value: 'Ra 0.8 µm' },
      { label: 'Quality Control', value: 'In-line CMM Inspection' },
    ]
  },
  'assembly': {
    title: 'GDC & Assembly Specs',
    specs: [
      { label: 'GDC Capacity', value: '7 Machines' },
      { label: 'Core Competency', value: 'Outer Tube LH & RH' },
      { label: 'Assembly Methods', value: 'Press Fit, Staking, Riveting' },
      { label: 'Error Proofing', value: 'Poka-Yoke Systems' },
      { label: 'Torque Control', value: 'DC Nutrunner Verification' },
      { label: 'Testing', value: '100% Leak & Pressure Testing' },
    ]
  },
  'powder-coating': {
    title: 'Powder Coating Specs',
    specs: [
      { label: 'Process Type', value: 'Semi-Automatic Line' },
      { label: 'Lines', value: '2 Independent Lines' },
      { label: 'DFT Tolerance', value: '60 - 80 Microns' },
      { label: 'Salt Spray Test', value: '500+ Hours Resistance' },
      { label: 'Pre-treatment', value: '7-Tank Process' },
      { label: 'Quality Lab', value: 'In-house DFT & Adhesion Testing' },
    ]
  }
};

export default function CapabilitiesPage() {
  const [activeDrawer, setActiveDrawer] = useState<string | null>(null);

  useEffect(() => {
    if (activeDrawer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeDrawer]);

  const activeData = activeDrawer ? DRAWER_DATA[activeDrawer as keyof typeof DRAWER_DATA] : null;

  return (
    <>
      <Navbar theme="dark" />
      
      {/* Page Header */}
      <header className="capabilities-header page-padding">
        <div className="container">
          <div className="eyebrow">
            MANUFACTURING INFRASTRUCTURE
          </div>
          <h1 className="section-heading capabilities-header__title">
            Manufacturing<br />Capabilities
          </h1>
          <p className="capabilities-header__subtitle">
            Four integrated processes. One supply chain partner.
          </p>
          <div className="capabilities-header__standards">
            Die Casting · CNC Machining · Assembly · Inspection
          </div>
        </div>
      </header>

      <main id="main-content">
        
        {/* Section 01 — Die Casting */}
        <section className="capability-section">
          <div className="capability-section__video">
            <LazyVideo webmSrc="/die-casting.webm" mp4Src="/die-casting.mp4" posterSrc="/die-casting-poster.jpg" />
          </div>
          <div className="capability-section__specs">
            <h2 className="capability-section__title">DIE CASTING</h2>
            
            <div className="spec-table">
              <div className="spec-table__cell">
                <div className="spec-table__icon"><Icons.Process /></div>
                <div className="spec-table__label">PROCESS</div>
                <div className="spec-table__value">Cold Chamber HPDC</div>
              </div>
              <div className="spec-table__cell">
                <div className="spec-table__icon"><Icons.Tonnage /></div>
                <div className="spec-table__label">TONNAGE</div>
                <div className="spec-table__value">120T / 180T / 250T</div>
              </div>
              <div className="spec-table__cell">
                <div className="spec-table__icon"><Icons.Machines /></div>
                <div className="spec-table__label">MACHINES</div>
                <div className="spec-table__value">7 PDC Machines</div>
              </div>
              <div className="spec-table__cell">
                <div className="spec-table__icon"><Icons.Alloys /></div>
                <div className="spec-table__label">ALLOYS</div>
                <div className="spec-table__value">ADC12, A380, LM6</div>
              </div>
            </div>
            
            <div className="equipment-header">
              <div className="equipment-header__tab equipment-header__tab--inactive">EQUIPMENT LIST</div>
              <div className="equipment-header__tab equipment-header__tab--active">DETAILED INVENTORY</div>
            </div>
            
            <div className="equipment-list">
              <div className="equipment-card equipment-card--primary">
                <span className="equipment-card__name">120 Tonnage Machine</span>
                <span className="equipment-card__badge">x 5 UNITS</span>
              </div>
              <div className="equipment-card">
                <span className="equipment-card__name">180 Tonnage Machine</span>
                <span className="equipment-card__badge">x 1 UNIT</span>
              </div>
              <div className="equipment-card">
                <span className="equipment-card__name">250 Tonnage Machine</span>
                <span className="equipment-card__badge">x 1 UNIT</span>
              </div>
              <div className="equipment-card">
                <span className="equipment-card__name">Shot Blasting Machine</span>
                <span className="equipment-card__badge">x 1 UNIT</span>
              </div>
              <div className="equipment-card">
                <span className="equipment-card__name">Vibro Finishing Machine</span>
                <span className="equipment-card__badge">x 2 UNITS</span>
              </div>
            </div>

            <button onClick={() => setActiveDrawer('die-casting')} className="capability-section__btn">
              VIEW FULL SPECS & QUOTE <span>→</span>
            </button>
          </div>
        </section>

        {/* Section 02 — VMC / CNC Machining (reversed) */}
        <section className="capability-section capability-section--reversed">
          <div className="capability-section__video">
            <LazyVideo webmSrc="/machining.webm" mp4Src="/machining.mp4" posterSrc="/machining-poster.jpg" />
          </div>
          <div className="capability-section__specs">
            <h2 className="capability-section__title">VMC / CNC MACHINING</h2>
            
            <div className="spec-table">
              <div className="spec-table__cell">
                <div className="spec-table__icon"><Icons.Settings /></div>
                <div className="spec-table__label">MACHINING</div>
                <div className="spec-table__value">VMC + CNC Turning</div>
              </div>
              <div className="spec-table__cell">
                <div className="spec-table__icon"><Icons.Machines /></div>
                <div className="spec-table__label">VMC MAKE</div>
                <div className="spec-table__value">HAAS USA</div>
              </div>
              <div className="spec-table__cell">
                <div className="spec-table__icon"><Icons.Process /></div>
                <div className="spec-table__label">VMC COUNT</div>
                <div className="spec-table__value">4 Machines</div>
              </div>
              <div className="spec-table__cell">
                <div className="spec-table__icon"><Icons.Check /></div>
                <div className="spec-table__label">ACCURACY</div>
                <div className="spec-table__value">±0.005mm</div>
              </div>
            </div>
            
            <div className="equipment-header">
              <div className="equipment-header__tab equipment-header__tab--inactive">EQUIPMENT LIST</div>
              <div className="equipment-header__tab equipment-header__tab--active">DETAILED INVENTORY</div>
            </div>
            
            <div className="equipment-list">
              <div className="equipment-card equipment-card--primary">
                <span className="equipment-card__name">VMC Machine (HAAS USA)</span>
                <span className="equipment-card__badge">x 4 UNITS</span>
              </div>
              <div className="equipment-card">
                <span className="equipment-card__name">CNC Turning Centre</span>
                <span className="equipment-card__badge">x 1 UNIT</span>
              </div>
              <div className="equipment-card">
                <span className="equipment-card__name">Auto Multi-Tapping Machine</span>
                <span className="equipment-card__badge">x 5 UNITS</span>
              </div>
              <div className="equipment-card">
                <span className="equipment-card__name">Traub Turning Machine (⌀32mm)</span>
                <span className="equipment-card__badge">x 10 UNITS</span>
              </div>
              <div className="equipment-card">
                <span className="equipment-card__name">10 Tonnage Press</span>
                <span className="equipment-card__badge">x 4 UNITS</span>
              </div>
            </div>

            <button onClick={() => setActiveDrawer('machining')} className="capability-section__btn">
              VIEW FULL SPECS & QUOTE <span>→</span>
            </button>
          </div>
        </section>

        {/* Section 03 — Assembly & Sub-assembly */}
        <section className="capability-section">
          <div className="capability-section__video">
            <LazyVideo webmSrc="/assembly.webm" mp4Src="/assembly.mp4" posterSrc="/assembly-poster.jpg" />
          </div>
          <div className="capability-section__specs">
            <h2 className="capability-section__title">GDC &amp; ASSEMBLY</h2>
            
            <div className="spec-table">
              <div className="spec-table__cell">
                <div className="spec-table__icon"><Icons.Process /></div>
                <div className="spec-table__label">GDC OPERATIONS</div>
                <div className="spec-table__value">Outer Tube LH & RH</div>
              </div>
              <div className="spec-table__cell">
                <div className="spec-table__icon"><Icons.Machines /></div>
                <div className="spec-table__label">FURNACES</div>
                <div className="spec-table__value">Melting & Holding</div>
              </div>
              <div className="spec-table__cell">
                <div className="spec-table__icon"><Icons.Layers /></div>
                <div className="spec-table__label">ASSEMBLY</div>
                <div className="spec-table__value">Press fit, staking</div>
              </div>
              <div className="spec-table__cell">
                <div className="spec-table__icon"><Icons.Check /></div>
                <div className="spec-table__label">VERIFICATION</div>
                <div className="spec-table__value">Torque Verification</div>
              </div>
            </div>
            
            <div className="equipment-header">
              <div className="equipment-header__tab equipment-header__tab--inactive">EQUIPMENT LIST</div>
              <div className="equipment-header__tab equipment-header__tab--active">DETAILED INVENTORY</div>
            </div>
            
            <div className="equipment-list">
              <div className="equipment-card equipment-card--primary">
                <span className="equipment-card__name">GDC Machines</span>
                <span className="equipment-card__badge">x 7 UNITS</span>
              </div>
              <div className="equipment-card">
                <span className="equipment-card__name">Melting Furnace</span>
                <span className="equipment-card__badge">x 3 UNITS</span>
              </div>
              <div className="equipment-card">
                <span className="equipment-card__name">Holding Furnace</span>
                <span className="equipment-card__badge">x 1 UNIT</span>
              </div>
              <div className="equipment-card">
                <span className="equipment-card__name">VMC Machined Parts (LH & RH)</span>
                <span className="equipment-card__badge">INCLUDED</span>
              </div>
            </div>

            <button onClick={() => setActiveDrawer('assembly')} className="capability-section__btn">
              VIEW FULL SPECS & QUOTE <span>→</span>
            </button>
          </div>
        </section>

        {/* Section 04 — Powder Coating (reversed) */}
        <section className="capability-section capability-section--reversed">
          <div className="capability-section__video">
            <LazyVideo webmSrc="/inspection.webm" mp4Src="/inspection.mp4" posterSrc="/inspection-poster.jpg" />
          </div>
          <div className="capability-section__specs">
            <h2 className="capability-section__title">POWDER COATING</h2>
            
            <div className="spec-table">
              <div className="spec-table__cell">
                <div className="spec-table__icon"><Icons.Process /></div>
                <div className="spec-table__label">PROCESS</div>
                <div className="spec-table__value">Semi-Automatic</div>
              </div>
              <div className="spec-table__cell">
                <div className="spec-table__icon"><Icons.Layers /></div>
                <div className="spec-table__label">LINES</div>
                <div className="spec-table__value">2 Production Lines</div>
              </div>
              <div className="spec-table__cell">
                <div className="spec-table__icon"><Icons.Tonnage /></div>
                <div className="spec-table__label">APPLICATION</div>
                <div className="spec-table__value">Auto Components</div>
              </div>
              <div className="spec-table__cell">
                <div className="spec-table__icon"><Icons.Check /></div>
                <div className="spec-table__label">FINISH</div>
                <div className="spec-table__value">DFT Verified</div>
              </div>
            </div>
            
            <div className="equipment-header">
              <div className="equipment-header__tab equipment-header__tab--inactive">EQUIPMENT LIST</div>
              <div className="equipment-header__tab equipment-header__tab--active">DETAILED INVENTORY</div>
            </div>
            
            <div className="equipment-list">
              <div className="equipment-card equipment-card--primary">
                <span className="equipment-card__name">Semi-Automatic Powder Coating Line</span>
                <span className="equipment-card__badge">x 2 UNITS</span>
              </div>
              <div className="equipment-card">
                <span className="equipment-card__name">Powder Coating Lab (DFT Meter)</span>
                <span className="equipment-card__badge">x 1 UNIT</span>
              </div>
            </div>

            <button onClick={() => setActiveDrawer('powder-coating')} className="capability-section__btn">
              VIEW FULL SPECS & QUOTE <span>→</span>
            </button>
          </div>
        </section>

        {/* Bottom Strip */}
        <section className="capabilities-summary">
          <div className="container">
            <div className="capabilities-summary__grid">
              <div className="summary-cell">
                <div className="summary-cell__title">Die Casting</div>
                <div className="summary-cell__text">7 PDC Machines · 120T–250T</div>
              </div>
              <div className="summary-cell">
                <div className="summary-cell__title">Machining</div>
                <div className="summary-cell__text">HAAS VMC USA · ±0.005mm</div>
              </div>
              <div className="summary-cell">
                <div className="summary-cell__title">GDC / Assembly</div>
                <div className="summary-cell__text">7 GDC Machines · Outer Tube Parts</div>
              </div>
              <div className="summary-cell">
                <div className="summary-cell__title">Inspection</div>
                <div className="summary-cell__text">Cpk ≥ 1.67 · Standard Room</div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Specs Drawer Overlay */}
      <div 
        className={`specs-drawer-backdrop ${activeDrawer ? 'is-open' : ''}`} 
        onClick={() => setActiveDrawer(null)} 
      />
      
      {/* Specs Drawer Panel */}
      <div className={`specs-drawer ${activeDrawer ? 'is-open' : ''}`}>
        <div className="specs-drawer__header">
          <h3 className="specs-drawer__title">{activeData?.title}</h3>
          <button className="specs-drawer__close" onClick={() => setActiveDrawer(null)} aria-label="Close drawer">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        
        <div className="specs-drawer__content">
          <div className="specs-drawer__section">
            <h4 className="specs-drawer__section-title">Technical Specifications</h4>
            <div className="specs-data-list">
              {activeData?.specs.map((spec, i) => (
                <div className="specs-data-item" key={i}>
                  <div className="specs-data-label">{spec.label}</div>
                  <div className="specs-data-value">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="specs-drawer__section">
            <h4 className="specs-drawer__section-title">Request a Quote</h4>
            <form className="quote-form" onSubmit={(e) => { 
              e.preventDefault(); 
              alert('Quote request submitted successfully.'); 
              setActiveDrawer(null); 
            }}>
              <input type="text" placeholder="Your Name or Company" required />
              <input type="email" placeholder="Email Address" required />
              <textarea placeholder="Describe your part requirements, volume, or timeline..." required></textarea>
              <button type="submit">Submit Request</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
