'use client';

import React from 'react';
import NavLink from '@/components/ui/NavLink';
import { useTranslation } from '@/i18n/LanguageContext';
import TimelineShowcase from '@/components/about/TimelineShowcase';
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
          <div className="cap-video-content">
            <h2 className="cap-video-heading">Toyo Die Casting Machine</h2>
          </div>
        </div>
        
        {/* TIMELINE INSTEAD OF VIDEO 2 */}
        <TimelineShowcase />
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
              ['Alloys', '-ADC12\n-AC2BF\nAluminium Alloys'],
            ],
            image: '/images/hpdc_cap.jpg',
          },
          {
            num: '02',
            title: t('vmc'),
            id: 'cnc-machining',
            specs: [
              ['Centers', '4-axis VMC'],
              ['Make', 'HAAS USA'],
            ],
            image: '/images/vmc_machine_uploaded.jpg',
          },
          {
            num: '03',
            title: t('gdc'),
            id: 'die-casting',
            specs: [
              ['GDC Units', '7 Machines'],
              ['Furnaces', '3 Melting + 1 Holding'],
            ],
            image: '/images/gdc_machine_uploaded.jpg',
          },
          {
            num: '04',
            title: t('powder'),
            id: 'powder-coating',
            specs: [
              ['Lines', '2 Semi-Auto Lines'],
              ['Testing', 'DFT Meter Lab'],
            ],
            image: '/images/powder_cap.jpg',
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
                  <span className="spec-value" style={{ whiteSpace: 'pre-line' }}>{v}</span>
                </div>
              ))}
            </div>
            <div className="cap-card__image-wrapper" style={{ marginTop: '24px', flex: 1, minHeight: '120px', position: 'relative', borderRadius: '4px', overflow: 'hidden' }}>
              <img src={cap.image} alt={cap.title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <span className="cap-card__link" style={{ marginTop: '24px' }}>
              {t('viewDetails')}
            </span>
          </NavLink>
        ))}
      </div>
    </section>
  );
}
