"use client";
import React, { useEffect, useRef, useState } from 'react';
import './CustomersShowcase.css';

export default function CustomersShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ partners: 0, plants: 0, years: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepTime = Math.abs(Math.floor(duration / steps));
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounts({
        partners: Math.min(3, Math.floor((3 / steps) * currentStep)),
        plants: Math.min(5, Math.floor((5 / steps) * currentStep)),
        years: Math.min(10, Math.floor((10 / steps) * currentStep))
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  const words = "Trusted by India's Leading OEMs".split(" ");

  return (
    <section className="showcase-section" ref={sectionRef}>
      <div className="showcase-bg"></div>

      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter id="extract-white">
          <feColorMatrix type="matrix" values="
            0 0 0 0 1
            0 0 0 0 1
            0 0 0 0 1
            1 0 0 0 0
          " />
        </filter>
      </svg>

      <div className="container showcase-content">
        <span className="showcase-eyebrow">OUR CUSTOMERS</span>
        
        <h2 className="showcase-heading">
          {words.map((word, i) => (
            <span 
              key={i} 
              className={`word ${isVisible ? 'animate' : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {word}&nbsp;
            </span>
          ))}
        </h2>

        <div className={`showcase-stats ${isVisible ? 'animate' : ''}`}>
          <div className="stat-item">
            <span className="stat-num">{counts.partners}</span>
            <span className="stat-label">OEM Partners</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-num">{counts.plants}</span>
            <span className="stat-label">Plants</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-num">{counts.years}+</span>
            <span className="stat-label">Years</span>
          </div>
        </div>

        <div className={`showcase-ticker-wrapper ${isVisible ? 'animate' : ''}`}>
           <div className="showcase-ticker">
              <div className="ticker-track">
                <img src="/clients/gabriel.png" alt="Gabriel" />
                <img src="/clients/ather.png" alt="Ather" />
                <img src="/clients/tvs.png" alt="TVS" />
                <img src="/clients/gabriel.png" alt="Gabriel" />
                <img src="/clients/ather.png" alt="Ather" />
                <img src="/clients/tvs.png" alt="TVS" />
              </div>
              <div className="ticker-track">
                <img src="/clients/gabriel.png" alt="Gabriel" />
                <img src="/clients/ather.png" alt="Ather" />
                <img src="/clients/tvs.png" alt="TVS" />
                <img src="/clients/gabriel.png" alt="Gabriel" />
                <img src="/clients/ather.png" alt="Ather" />
                <img src="/clients/tvs.png" alt="TVS" />
              </div>
           </div>
        </div>

        <div className="showcase-cards">
          <div className={`sc-card c-gabriel ${isVisible ? 'animate' : ''}`} style={{ animationDelay: '0.4s' }}>
            <div className="sc-glow"></div>
            <div className="sc-content">
              <div className="sc-logo-area logo-wrapper">
                <img src="/clients/gabriel.png" alt="Gabriel" />
              </div>
              <h3 className="sc-name">Gabriel India Limited</h3>
              <span className="sc-tag">Suspension Systems</span>
              <p className="sc-plants">Hosur Main Plant &middot; Hosur Satellite &middot; Parwanoo</p>
            </div>
          </div>

          <div className={`sc-card c-ather ${isVisible ? 'animate' : ''}`} style={{ animationDelay: '0.6s' }}>
            <div className="sc-glow"></div>
            <div className="sc-content">
              <div className="sc-logo-area logo-wrapper">
                <img src="/clients/ather.png" alt="Ather" />
              </div>
              <h3 className="sc-name">Ather Energy</h3>
              <span className="sc-tag">EV Components</span>
              <p className="sc-plants">Electric Vehicle Precision Components</p>
            </div>
          </div>

          <div className={`sc-card c-tvs ${isVisible ? 'animate' : ''}`} style={{ animationDelay: '0.8s' }}>
            <div className="sc-glow"></div>
            <div className="sc-content">
              <div className="sc-logo-area logo-wrapper">
                <img src="/clients/tvs.png" alt="TVS" />
              </div>
              <h3 className="sc-name">TVS Motor Company</h3>
              <span className="sc-tag">2W Aluminium Parts</span>
              <p className="sc-plants">Two-Wheeler Aluminium Components</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
