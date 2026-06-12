"use client";
import React, { useEffect, useState, useRef } from 'react';
import './FoundationShowcase.css';

interface AnimatedCounterProps {
  target: number;
  start?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  useComma?: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  target, 
  start = 0, 
  duration = 1500, 
  suffix = '', 
  prefix = '', 
  useComma = false 
}) => {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let startTime: number | null = null;
        const animate = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          // Ease out exponential curve
          const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          setCount(Math.floor(start + (target - start) * easeOut));
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
        observer.unobserve(el);
      }
    }, { threshold: 0.1 });
    
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, start, duration]);

  const displayCount = useComma ? count.toLocaleString('en-US') : count;

  return <span ref={ref}>{prefix}{displayCount}{suffix}</span>;
};

export default function FoundationShowcase() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fd-observe').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="foundation-section">
      <div className="foundation-container">
        
        {/* Header Block */}
        <div className="fd-header fd-observe">
          <div className="fd-heading-wrap">
            <h2 className="fd-heading">Engineered in India.<br />Trusted Globally.</h2>
          </div>
          <p className="fd-subtext">Aluminium die casting and precision machining for automotive assembly lines since 2019.</p>
        </div>

        {/* Stats Strip */}
        <div className="fd-stats-row fd-observe">
          <div className="fd-stat-card">
            <div className="fd-stat-num">
              <AnimatedCounter start={2015} target={2019} duration={1500} />
            </div>
            <div className="fd-stat-label">ESTABLISHED</div>
          </div>
          <div className="fd-stat-card">
            <div className="fd-stat-num">
              <AnimatedCounter target={42000} useComma={true} />
            </div>
            <div className="fd-stat-label">SQ. FT.</div>
          </div>
          <div className="fd-stat-card">
            <div className="fd-stat-num">
              <AnimatedCounter target={120} suffix="+" />
            </div>
            <div className="fd-stat-label">EMPLOYEES</div>
          </div>
          <div className="fd-stat-card">
            <div className="fd-stat-num">
              <AnimatedCounter target={3} />
            </div>
            <div className="fd-stat-label">SHIFTS/DAY</div>
          </div>
        </div>

        {/* Two-Column Body */}
        <div className="fd-body">
          <div className="fd-left fd-observe">
            <div className="fd-eyebrow">
              <span className="fd-dot">●</span> Our foundation
            </div>
            <div className="fd-text-content">
              <p>
                <span className="fw-500">Established in 2019 in Hosur — India's automotive manufacturing corridor — Hebron Automotive began as a precision die casting operation serving domestic OEMs.</span> Over 6 years, we have expanded to include 5-axis CNC machining, sub-assembly, and full quality systems certified to IATF 16949:2016.
              </p>
              <p>
                <span className="fw-500">Today, Hebron supplies structural and functional aluminium components to global Tier-1s like Gabriel India and Hitachi Astemo</span> — held to the zero-defect standards demanded by the automotive industry.
              </p>
            </div>
          </div>

          <div className="fd-right fd-observe">
            <div className="fd-facts-card">
              <div className="fd-card-eyebrow">COMPANY AT A GLANCE</div>
              <table className="fd-facts-table">
                <tbody>
                  <tr>
                    <th>ESTABLISHED</th>
                    <td>2019</td>
                  </tr>
                  <tr>
                    <th>HEADQUARTERS</th>
                    <td>Hosur, Tamil Nadu</td>
                  </tr>
                  <tr>
                    <th>FACILITY AREA</th>
                    <td>42,000 sq. ft.</td>
                  </tr>
                  <tr>
                    <th>EMPLOYEES</th>
                    <td>120+</td>
                  </tr>
                  <tr>
                    <th>SHIFTS</th>
                    <td>3-shift, 365 days</td>
                  </tr>
                  <tr>
                    <th>KEY CUSTOMERS</th>
                    <td>Gabriel India — Hosur, Parwanoo, Hitachi Astemo — Tumkur</td>
                  </tr>
                  <tr>
                    <th>ANNUAL CAPACITY</th>
                    <td>2,400 metric tons / year</td>
                  </tr>
                  <tr>
                    <th>ANNUAL TURNOVER</th>
                    <td>INR 41 Crores / Annum</td>
                  </tr>
                  <tr>
                    <th>CERTIFICATIONS</th>
                    <td>ISO 9001:2015 &middot; IATF 16949:2016 &middot; ISO 14001:2015</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
