'use client';

import React from 'react';
import NavLink from '@/components/ui/NavLink';
import { useTranslation } from '@/i18n/LanguageContext';
import './CapabilitiesOverview.css';

export default function CapabilitiesOverview() {
  const t = useTranslation('capabilities');
  return (
    <section className="cap-overview">
      <div className="cap-overview__videos-container">
        {/* VIDEO 1 */}
        <div className="cap-video-container">
          <video 
            className="cap-video-element" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/videos/video1.mp4" type="video/mp4" />
          </video>
          <div className="cap-video-overlay"></div>
          <div className="cap-video-content">
            <h2 className="cap-video-heading">Precision Machining Excellence</h2>
          </div>
        </div>
        
        {/* VIDEO 2 */}
        <div className="cap-video-container">
          <video 
            className="cap-video-element" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/videos/video2.mp4" type="video/mp4" />
          </video>
          <div className="cap-video-overlay"></div>
          <div className="cap-video-content">
            <h2 className="cap-video-heading">Automotive Component Assembly</h2>
          </div>
        </div>
      </div>
      
      <div className="cap-overview__header" style={{ marginTop: '80px' }}>
        <span className="eyebrow">{t('eyebrow')}</span>
        <div className="heading-rule" />
      </div>
      <div className="cap-overview__grid">
        {[
          {
            num: '01',
            title: t('hpdc'),
            id: 'die-casting',
            specs: [
              ['Tonnage', '120T – 800T'],
              ['Machines', '7 PDC Lines'],
              ['Alloys', 'ADC12, A380, LM6'],
              ['Process', 'Cold Chamber HPDC'],
            ],
          },
          {
            num: '02',
            title: t('vmc'),
            id: 'cnc-machining',
            specs: [
              ['Centers', '3/4/5-axis'],
              ['Make', 'HAAS USA'],
              ['Accuracy', '±0.005mm'],
              ['Finish', 'Ra 0.8–6.3 μm'],
            ],
          },
          {
            num: '03',
            title: t('gdc'),
            id: 'die-casting',
            specs: [
              ['GDC Units', '7 Machines'],
              ['Furnaces', '3 Melting + 1 Holding'],
              ['Parts', 'Outer Tube LH & RH'],
              ['Process', 'Tilt + Fixed GDC'],
            ],
          },
          {
            num: '04',
            title: t('powder'),
            id: 'powder-coating',
            specs: [
              ['Lines', '2 Semi-Auto Lines'],
              ['Testing', 'DFT Meter Lab'],
              ['Finish', 'Corrosion resistant'],
              ['Standard', 'Automotive grade'],
            ],
          },
        ].map(cap => (
          <NavLink href={`/capabilities${cap.id ? `?id=${cap.id}` : ''}`} className="cap-card" key={cap.num}>
            <div className="cap-card__top">
              <span className="cap-card__num">{cap.num}</span>
              <h3 className="cap-card__title">{cap.title}</h3>
            </div>
            <div className="cap-card__specs">
              {cap.specs.map(([l, v]) => (
                <div className="cap-card__row" key={l}>
                  <span className="spec-label">{l}</span>
                  <span className="spec-value">{v}</span>
                </div>
              ))}
            </div>
            <span className="cap-card__link">
              {t('viewDetails')}
            </span>
          </NavLink>
        ))}
      </div>
    </section>
  );
}
