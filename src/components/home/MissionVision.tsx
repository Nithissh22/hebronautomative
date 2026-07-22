import React from 'react';
import './MissionVision.css';

export default function MissionVision() {
  return (
    <section className="mission-vision">
      <div className="container">
        <div className="mission-vision__header">
          <span className="eyebrow">OUR CORE VALUES</span>
          <h2 className="section-heading">Mission & Vision</h2>
          <div className="heading-rule" />
        </div>
        
        <div className="mission-vision__content">
          <div className="mission-card">
            <h3>Our Mission</h3>
            <p>To deliver precision-engineered aluminium die casting and machining solutions of the highest quality to the global automotive industry. We are committed to operational excellence, continuous technological advancement, and forging strong partnerships with leading OEMs by consistently exceeding their expectations in performance, durability, and on-time delivery.</p>
          </div>
          <div className="mission-card">
            <h3>Our Vision</h3>
            <p>To be recognized globally as the most trusted and innovative manufacturing partner in the automotive component sector. We strive to set new benchmarks in precision engineering and sustainable manufacturing practices, driving the future of mobility through our world-class infrastructure and unwavering commitment to quality.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
