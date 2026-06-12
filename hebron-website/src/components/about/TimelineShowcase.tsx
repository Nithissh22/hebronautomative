"use client";
import React, { useEffect, useRef } from 'react';
import './TimelineShowcase.css';

const IconFactory = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21c1.147 -4.02 1.983 -8.027 2 -12h6c.017 3.973 .853 7.98 2 12"/><path d="M12.5 13h4.5c.025 2.612 .894 5.296 2 8"/><path d="M9 5a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1"/></svg>;
const IconSpray = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h16"/><path d="M12 4v6"/><path d="M12 10v10"/><path d="M8 20h8"/><path d="M8 4h8"/><path d="M4 14l4 -4"/><path d="M20 14l-4 -4"/></svg>;
const IconSettings = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><circle cx="12" cy="12" r="3" /></svg>;
const IconTool = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5" /></svg>;
const IconMicroscope = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 21h14" /><path d="M6 18h2" /><path d="M7 18v3" /><path d="M9 11l3 3l6 -6l-3 -3z" /><path d="M10.5 12.5l-1.5 1.5" /><path d="M17 3l3 3" /><path d="M12 21a6 6 0 0 0 3.715 -10.712" /></svg>;
const IconEngine = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10v6" /><path d="M12 5v3" /><path d="M10 5h4" /><path d="M5 13h-2" /><path d="M6 10h2l2 -2h3.382a1 1 0 0 1 .894 .553l1.448 2.894a1 1 0 0 0 .894 .553h1.382v-2h2v6h-2v-2h-3v2h-13z" /></svg>;
const IconRocket = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" /><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" /><circle cx="15" cy="9" r="1" /></svg>;

const milestones = [
  { year: 2019, text: "Started Hebron Automotive with 2 HPDC machines", icon: <IconFactory /> },
  { year: 2020, text: "Semi-automatic powder coating facility added", icon: <IconSpray /> },
  { year: 2021, text: "2 additional die casting machines added", icon: <IconSettings /> },
  { year: 2022, text: "New machining & bush assembly facility for Gabriel", icon: <IconTool /> },
  { year: 2023, text: "Standard Room installed — UTM, Spectro, VMM, 2D", icon: <IconMicroscope /> },
  { year: 2024, text: "2 more die casting machines added (180T & 250T)", icon: <IconEngine /> },
  { year: 2025, text: "7 GDC machines + 5 VMC machines + Tool Room setup", icon: <IconRocket /> },
];

export default function TimelineShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Observer for cards and header to trigger entrance animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.tl-observe');
    elements.forEach(el => observer.observe(el));

    // Scroll listener for the center line drawing downward
    const handleScroll = () => {
      if (!lineRef.current || !containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the container has scrolled past the center of the screen
      const startPoint = windowHeight * 0.7; // Start drawing when container top reaches 70% of screen
      const endPoint = windowHeight * 0.3;   // Full height when container bottom reaches 30% of screen
      
      let progress = (startPoint - rect.top) / (rect.height);
      
      // Clamp between 0 and 1
      progress = Math.max(0, Math.min(1, progress));
      
      lineRef.current.style.transform = `scaleY(${progress})`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headingWords = "Our Growth Story".split(" ");

  return (
    <section className="timeline-section" ref={containerRef}>
      <div className="container timeline-container">
        
        <div className="timeline-header tl-observe">
          <span className="timeline-eyebrow">YEAR-WISE JOURNEY</span>
          <h2 className="timeline-heading">
            {headingWords.map((word, i) => (
              <span 
                key={i} 
                className="word"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {word}&nbsp;
              </span>
            ))}
          </h2>
          <div className="timeline-underline"></div>
        </div>

        <div className="timeline-track">
          <div className="timeline-line-bg"></div>
          <div className="timeline-line-fill" ref={lineRef}></div>

          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={m.year} className={`timeline-row ${isLeft ? 'left' : 'right'} tl-observe`} style={{ transitionDelay: `${i * 0.1}s` }}>
                
                <div className="timeline-node">
                  <span className="node-year">{m.year}</span>
                </div>

                <div className="timeline-card-wrapper">
                  <div className="card-connector"></div>
                  <div className="timeline-card">
                    <div className="card-header">
                      <div className="card-icon">{m.icon}</div>
                      <span className="card-year">{m.year}</span>
                    </div>
                    <p className="card-text">{m.text}</p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
