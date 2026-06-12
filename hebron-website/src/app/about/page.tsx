import React from 'react';
import Navbar from '@/components/layout/Navbar';
import './about.css';
import NavLink from '@/components/ui/NavLink';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      {/* 1. Hero Banner */}
      <section className="about-hero">
        <div className="container about-hero__content">
          <div className="eyebrow" style={{ marginBottom: 'var(--space-2)' }}>
            HEBRON AUTOMOTIVE PRODUCTS PVT. LTD.
          </div>
          <h1 className="section-heading" style={{ color: 'var(--text-on-dark)' }}>
            Precision manufacturing<br />
            built on 6 years of<br />
            automotive supply excellence
          </h1>
          <div className="about-hero__facts">
            Established 2019 &middot; Hosur, Tamil Nadu &middot; IATF 16949 Certified
          </div>
        </div>
      </section>

      <main id="main-content" style={{ paddingBottom: '0' }}>
        
        {/* 2. Heading */}
        <section className="about-intro-section">
          <div className="container">
            <h2 className="section-heading intro-heading">Engineered in India.<br/>Trusted Globally.</h2>
            <p className="intro-subline">Aluminium die casting and precision machining for automotive assembly lines since 2019.</p>
          </div>
        </section>

        {/* 3. Metrics Strip */}
        <section className="about-metrics-section" style={{ paddingBottom: 'var(--space-12)' }}>
          <div className="container">
            <div className="about-metrics">
              <div className="about-metric-item">
                <span className="about-metric-number">2019</span>
                <span className="about-metric-label">Established</span>
              </div>
              <div className="about-metric-item">
                <span className="about-metric-number">42,000</span>
                <span className="about-metric-label">sq. ft.</span>
              </div>
              <div className="about-metric-item">
                <span className="about-metric-number">120+</span>
                <span className="about-metric-label">Employees</span>
              </div>
              <div className="about-metric-item">
                <span className="about-metric-number">3</span>
                <span className="about-metric-label">Shifts/day</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Company Story & Facts Table */}
        <section className="about-details-section">
          <div className="container">
            <div className="about-grid">
              
              <div className="about-story">
                <span className="eyebrow section-cyan-label">OUR FOUNDATION</span>
                <div className="story-content">
                  <p>Established in 2019 in Hosur — India's automotive manufacturing corridor — Hebron Automotive began as a precision die casting operation serving domestic OEMs. Over 6 years, we have expanded to include 5-axis CNC machining, sub-assembly, and full quality systems certified to IATF 16949:2016.</p>
                  <p>Today, Hebron supplies structural and functional aluminium components to global Tier-1s like Gabriel India and Hitachi Astemo — held to the zero-defect standards demanded by the automotive industry.</p>
                </div>
              </div>

              <div className="about-facts-table">
                <table className="data-table">
                  <tbody>
                    <tr><th>ESTABLISHED</th><td className="tabular-data">2019</td></tr>
                    <tr><th>HEADQUARTERS</th><td>Hosur, Tamil Nadu</td></tr>
                    <tr><th>FACILITY AREA</th><td className="tabular-data">42,000 sq. ft.</td></tr>
                    <tr><th>EMPLOYEES</th><td className="tabular-data">120+</td></tr>
                    <tr><th>SHIFTS</th><td>3-shift, 365 days</td></tr>
                    <tr><th>KEY CUSTOMERS</th><td>Gabriel India — Hosur, Parwanoo, Hitachi Astemo — Tumkur</td></tr>

                    <tr><th>ANNUAL CAPACITY</th><td className="tabular-data">2,400 metric tons / year</td></tr>
                    <tr><th>ANNUAL TURNOVER</th><td className="tabular-data">INR 41 Crores / Annum</td></tr>
                    <tr><th>CERTIFICATIONS</th><td className="tabular-data">ISO 9001:2015 &middot; IATF 16949:2016 &middot; ISO 14001:2015</td></tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Our Customers */}
        <section className="about-customers-section">
          <div className="container">
            <span className="eyebrow section-cyan-label">OUR CUSTOMERS</span>
            <h2 className="section-heading" style={{ color: 'var(--brand-navy)', fontSize: '32px', margin: '12px 0 0' }}>Trusted by India&apos;s Leading OEMs</h2>

            <div className="about-clients-grid">

              <div className="about-client-row">
                <div className="about-client-logo-wrap">
                  <img
                    src="/clients/gabriel.png"
                    alt="Gabriel India Limited"
                    className="about-client-logo"
                  />
                </div>
                <div className="about-client-details">
                  <span className="about-client-name">
                    Gabriel India Limited
                  </span>
                  <span className="about-client-plants">
                    Hosur Main Plant · Hosur Satellite Plant · Parwanoo Plant
                  </span>
                </div>
              </div>

              <div className="about-client-row">
                <div className="about-client-logo-wrap">
                  <img
                    src="/clients/ather.png"
                    alt="Ather Energy"
                    className="about-client-logo"
                  />
                </div>
                <div className="about-client-details">
                  <span className="about-client-name">Ather Energy</span>
                  <span className="about-client-plants">
                    Electric Vehicle Precision Components
                  </span>
                </div>
              </div>

              <div className="about-client-row">
                <div className="about-client-logo-wrap">
                  <img
                    src="/clients/tvs.png"
                    alt="TVS Motor Company"
                    className="about-client-logo"
                  />
                </div>
                <div className="about-client-details">
                  <span className="about-client-name">
                    TVS Motor Company
                  </span>
                  <span className="about-client-plants">
                    Two-Wheeler Aluminium Components
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4.5. Year-Wise Journey */}
        <section className="about-journey-section" style={{ paddingBottom: '100px', backgroundColor: 'var(--bg-white)' }}>
          <div className="container">
            <span className="eyebrow section-cyan-label">YEAR-WISE JOURNEY</span>
            <div className="journey-timeline" style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '800px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '16px' }}>
                <div className="tabular-data" style={{ color: 'var(--accent)', fontWeight: 600 }}>2019</div>
                <div style={{ color: 'var(--text-dark)' }}>Started Hebron Automotive with 2 HPDC machines</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '16px' }}>
                <div className="tabular-data" style={{ color: 'var(--accent)', fontWeight: 600 }}>2020</div>
                <div style={{ color: 'var(--text-dark)' }}>Semi-automatic powder coating facility added</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '16px' }}>
                <div className="tabular-data" style={{ color: 'var(--accent)', fontWeight: 600 }}>2021</div>
                <div style={{ color: 'var(--text-dark)' }}>2 additional die casting machines added</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '16px' }}>
                <div className="tabular-data" style={{ color: 'var(--accent)', fontWeight: 600 }}>2022</div>
                <div style={{ color: 'var(--text-dark)' }}>New machining & bush assembly facility for Gabriel</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '16px' }}>
                <div className="tabular-data" style={{ color: 'var(--accent)', fontWeight: 600 }}>2023</div>
                <div style={{ color: 'var(--text-dark)' }}>Standard Room installed — UTM, Spectro, VMM, 2D</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '16px' }}>
                <div className="tabular-data" style={{ color: 'var(--accent)', fontWeight: 600 }}>2024</div>
                <div style={{ color: 'var(--text-dark)' }}>2 more die casting machines added (180T & 250T)</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '16px' }}>
                <div className="tabular-data" style={{ color: 'var(--accent)', fontWeight: 600 }}>2025</div>
                <div style={{ color: 'var(--text-dark)' }}>7 GDC machines + 5 VMC machines + Tool Room setup</div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Sectors Served */}
        <section className="sectors-section">
          <div className="container">
            <div className="sectors-container">
              <span className="eyebrow section-cyan-label">SECTORS SERVED</span>
              <div className="sectors-grid">
                <div className="sector-column">
                  <div className="sector-title">Passenger Vehicles</div>
                  <ul className="sector-list">
                    <li>Shock absorbers</li>
                    <li>Suspension arms</li>
                    <li>Brake calipers</li>
                  </ul>
                </div>
                <div className="sector-column">
                  <div className="sector-title">Commercial Vehicles</div>
                  <ul className="sector-list">
                    <li>Chassis brackets</li>
                    <li>Engine mounts</li>
                    <li>Transmission parts</li>
                  </ul>
                </div>
                <div className="sector-column">
                  <div className="sector-title">Two-Wheelers</div>
                  <ul className="sector-list">
                    <li>Brake parts</li>
                    <li>Frame parts</li>
                    <li>Handlebar assy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Leadership */}
        <section className="leadership-section">
          <div className="container">
            <span className="eyebrow section-cyan-label">LEADERSHIP</span>
            <div className="leadership-grid">
              
              <div className="leader-card">
                <div className="leader-photo-container">
                  {/* TODO: Add real photo src once provided */}
                  <div className="leader-photo placeholder-photo"></div>
                </div>
                <div className="leader-info">
                  <div className="leader-name">Mr. N. Kumar</div>
                  <div className="leader-title">Managing Director</div>
                  <div className="leader-contact tabular-data" style={{ fontSize: '13px', marginTop: '4px', color: 'var(--text-body)' }}>+91 94426 19772</div>
                </div>
              </div>

              <div className="leader-card">
                <div className="leader-photo-container">
                  {/* TODO: Add real photo src once provided */}
                  <div className="leader-photo placeholder-photo"></div>
                </div>
                <div className="leader-info">
                  <div className="leader-name">R. Smith</div>
                  <div className="leader-title">VP of Engineering</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 7. Bottom CTA */}
        <section className="about-cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="section-heading">Interested in partnering with Hebron?</h2>
              <p>We work with procurement teams at every stage — from initial DFM review to production supply.</p>
              <div className="cta-buttons">
                <button className="btn-outline" style={{ color: 'white', borderColor: 'white' }}>Download Company Profile</button>
                <NavLink href="/contact" className="btn-primary">Send RFQ &rarr;</NavLink>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
