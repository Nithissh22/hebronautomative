"use client";
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import './quality.css';

const EQUIPMENT_DATA = {
  DIMENSIONAL: [
    { name: 'VMM', cap: '136×56.10mm', cov: '5 Coverage' },
    { name: '2D Height Master', cap: '500×22.5um', cov: '1.50~160mm' },
    { name: 'CPCustom Coating Facilitator', cap: '1.50~15.50um', cov: 'Coverage' },
  ],
  MECHANICAL: [
    { name: 'Auto Universal Testing Machine', cap: 'Mechanical property testing', cov: 'Per heat lot' },
  ],
  'MATERIAL ANALYSIS': [
    { name: 'Spectrometer (Spectro Analysis)', cap: 'Alloy composition verification', cov: 'Per melt' },
  ],
  'SURFACE FINISH': [
    { name: 'Roughness Tester (Ra)', cap: 'Surface finish measurement', cov: 'Per batch' },
  ],
  COATING: [
    { name: 'Powder Coating DFT Meter', cap: 'Coating thickness verification', cov: 'Every run' },
    { name: 'Salt Spray Test (SST) Chamber', cap: 'Corrosion resistance testing', cov: 'Validation' },
  ]
};

export default function QualityPage() {
  const [activeTab, setActiveTab] = useState('DIMENSIONAL');
  
  return (
    <>
      <Navbar />
      
      {/* SECTION 1: Hero */}
      <section className="quality-hero">
        <video 
          className="quality-hero__video" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/quality-hero.webm" type="video/webm" />
          <source src="/quality-hero.mp4" type="video/mp4" />
        </video>
        <div className="quality-hero__overlay"></div>
        
        <div className="container quality-hero__content">
          <div className="eyebrow hero-tech-label">
            QUALITY ASSURANCE SYSTEM
          </div>
          <h1 className="hero-serif-title">Quality<br />System</h1>
          <p className="quality-hero__subtitle">
            Zero-defect manufacturing through process control, in-line inspection, 
            and documented traceability at every stage of production.
          </p>
          <div className="quality-hero__standards">
            ISO 9001:2015 · IATF 16949:2016 · PPAP LEVEL 3 CAPABLE
          </div>
        </div>
      </section>

      <main id="main-content" style={{ paddingBottom: '0', backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div className="quality-sections">
            
            {/* SECTION 2: Certifications */}
            <section className="certifications-section">
              <h2 className="eyebrow section-header text-center">Certifications</h2>
              <div className="certifications-grid">
                
                <div className="new-cert-card">
                  <div className="cert-header">
                    <h3 className="cert-title">ISO 9001:2015</h3>
                  </div>
                  <div className="cert-body">
                    <div className="cert-row"><span className="cert-lbl">Issuing Body:</span> CBF</div>
                    <div className="cert-row"><span className="cert-lbl">Issue Date:</span> 16.11.2026</div>
                    <div className="cert-row"><span className="cert-lbl">Valid Until:</span> 11.11.2021</div>
                    <div className="cert-row"><span className="cert-lbl">Certificate No.</span> ISO 9001:2015</div>
                  </div>
                  <a href="/cert-iso.pdf" className="cert-btn">Download Certificate &rarr;</a>
                </div>

                <div className="new-cert-card">
                  <div className="cert-header">
                    <h3 className="cert-title">IATF 16949:2016</h3>
                  </div>
                  <div className="cert-body">
                    <div className="cert-row"><span className="cert-lbl">Issuing Body:</span> OST Scenes</div>
                    <div className="cert-row"><span className="cert-lbl">Issue Date:</span> 16.11.2026</div>
                    <div className="cert-row"><span className="cert-lbl">Valid Until:</span> 11.11.2021</div>
                    <div className="cert-row"><span className="cert-lbl">Certificate No.</span> IATF 16949:2016</div>
                  </div>
                  <a href="/cert-iatf.pdf" className="cert-btn">Download Certificate &rarr;</a>
                </div>

                <div className="new-cert-card">
                  <div className="cert-header">
                    <h3 className="cert-title">ISO 14001:2015</h3>
                  </div>
                  <div className="cert-body">
                    <div className="cert-row"><span className="cert-lbl">Issuing Body:</span> CDF Scenes</div>
                    <div className="cert-row"><span className="cert-lbl">Issue Date:</span> 16.11.2026</div>
                    <div className="cert-row"><span className="cert-lbl">Valid Until:</span> 11.11.2021</div>
                    <div className="cert-row"><span className="cert-lbl">Certificate No.</span> ISO 14001:2015</div>
                  </div>
                  <a href="/cert-iso14001.pdf" className="cert-btn">Download Certificate &rarr;</a>
                </div>

              </div>
            </section>

            {/* KPI Dashboard */}
            <section className="kpi-dashboard">
              <h2 className="eyebrow section-header text-left">Key Performance Indicators</h2>
              <div className="kpi-grid">
                
                {/* KPI 1: Gauge */}
                <div className="kpi-card">
                  <div className="kpi-visual">
                    <div className="gauge-container">
                      <svg viewBox="0 0 100 50" className="gauge-svg">
                        <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#e2e8f0" strokeWidth="12" strokeLinecap="round" />
                        <path d="M 10 50 A 40 40 0 0 1 70 15" fill="none" stroke="#00529b" strokeWidth="12" strokeLinecap="round" strokeDasharray="125.6" strokeDashoffset="0" />
                      </svg>
                      <div className="gauge-needle"></div>
                    </div>
                  </div>
                  <div className="kpi-value">Cpk ≥ 1.67</div>
                  <div className="kpi-label">Critical dims</div>
                </div>

                {/* KPI 2: Bars */}
                <div className="kpi-card">
                  <div className="kpi-visual">
                    <div className="bars-container">
                      {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
                        <div key={i} className="kpi-bar"></div>
                      ))}
                    </div>
                  </div>
                  <div className="kpi-value">100%</div>
                  <div className="kpi-label">Vision-insp on all parts</div>
                </div>

                {/* KPI 3: Column Chart */}
                <div className="kpi-card">
                  <div className="kpi-visual">
                    <div className="columns-container">
                      <div className="kpi-col h-40"></div>
                      <div className="kpi-col h-60"></div>
                      <div className="kpi-col h-30"></div>
                      <div className="kpi-col h-80"></div>
                      <div className="kpi-col h-20"></div>
                    </div>
                  </div>
                  <div className="kpi-value">0 PPM</div>
                  <div className="kpi-label">Target defect rate</div>
                </div>

                {/* KPI 4: Checkmark */}
                <div className="kpi-card">
                  <div className="kpi-visual">
                    <div className="kpi-check">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00529b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div className="kpi-value">PPAP L3</div>
                  <div className="kpi-label">Capable</div>
                </div>

              </div>
            </section>

          </div>
        </div>

        {/* Tabbed Inspection Equipment */}
        <section className="inspection-equipment-section">
          <div className="container">
            <h2 className="eyebrow section-header text-left">INSPECTION EQUIPMENT</h2>
            
            <div className="tabs-container">
              <div className="tabs-header">
                {Object.keys(EQUIPMENT_DATA).map(tab => (
                  <button 
                    key={tab} 
                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              <div className="tab-content">
                <table className="clean-table">
                  <thead>
                    <tr>
                      <th>EQUIPMENT</th>
                      <th>CAPABILITY</th>
                      <th>COVERAGE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {EQUIPMENT_DATA[activeTab as keyof typeof EQUIPMENT_DATA].map((row, idx) => (
                      <tr key={idx}>
                        <td className="fw-500">{row.name}</td>
                        <td>{row.cap}</td>
                        <td>{row.cov}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Process Controls Grid */}
        <div className="container">
          <section className="process-control-section">
            <h2 className="eyebrow section-header text-left">PROCESS CONTROL FRAMEWORK</h2>
            <div className="new-process-grid">
              <div className="new-process-cell">
                <div className="np-label">FMEA</div>
                <div className="np-value">Failure Mode & Effects<br/>Analysis per part</div>
              </div>
              <div className="new-process-cell">
                <div className="np-label">CONTROL PLAN</div>
                <div className="np-value">Per part number, full traceability</div>
              </div>
              <div className="new-process-cell">
                <div className="np-label">MSA</div>
                <div className="np-value">Gauge R&R studies for all<br/>gauges</div>
              </div>
              <div className="new-process-cell">
                <div className="np-label">SPC / CPK ≥ 1.67</div>
                <div className="np-value">Maintained on critical<br/>dimensions</div>
              </div>
              <div className="new-process-cell">
                <div className="np-label">PPAP LEVEL 3</div>
                <div className="np-value">Full capability for automotive<br/>submissions</div>
              </div>
              <div className="new-process-cell">
                <div className="np-label">8D PROBLEM SOLVING</div>
                <div className="np-value">Documented corrective actions</div>
              </div>
            </div>
          </section>
        </div>

        {/* SECTION 6: Future Plan Neon */}
        <section className="neon-section">
          <div className="container">
            <h2 className="eyebrow section-header neon-header">UPCOMING CAPABILITY</h2>
            
            <div className="neon-card">
              <h3 className="neon-title">X-Ray CT Imaging & Analysis</h3>
              <p className="neon-target">TARGET: MARCH 2026</p>
              
              <div className="neon-specs">
                <p><strong>Equipment:</strong> Karma DX160 (160kV) & DX225 (225kV)</p>
                <p><strong>Component size:</strong> up to 800×800×1200mm</p>
                <p><strong>Max component weight:</strong> 100kg</p>
              </div>
              
              <p className="neon-desc">
                This investment signals our commitment to moving toward internal NDT<br/>
                capability — a Tier-1 requirement for structural components.
              </p>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
