import React from 'react';
import './QualityStrip.css';

export default function QualityStrip() {
  return (
    <section className="qual-strip">
      <div className="container qual-strip__inner">
        <div className="qual-strip__content">
          <span className="eyebrow">QUALITY ASSURANCE</span>
          <h2 className="section-heading">Zero Defect Target.</h2>
          <p className="qual-strip__text">
            Every component passes through our integrated CMM and vision 
            inspection systems. PPAP Level 3 capable with 100% traceability.
          </p>
        </div>
        <div className="qual-strip__stats">
          <div className="qual-stat">
            <span className="qual-stat__val">1.67+</span>
            <span className="qual-stat__lbl">Cpk Target</span>
          </div>
          <div className="qual-stat">
            <span className="qual-stat__val">100%</span>
            <span className="qual-stat__lbl">Traceability</span>
          </div>
        </div>
      </div>
    </section>
  );
}
