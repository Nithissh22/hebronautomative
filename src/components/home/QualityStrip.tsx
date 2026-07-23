"use client";
import React from 'react';
import { useTranslation } from '@/i18n/LanguageContext';
import './QualityStrip.css';

export default function QualityStrip() {
  const t = useTranslation('qualityStrip');
  return (
    <section className="qual-strip">
      <div className="container qual-strip__inner">
        <div className="qual-strip__content">
          <span className="eyebrow" style={{ textTransform: 'uppercase' }}>{t('assurance')}</span>
          <h2 className="section-heading">{t('zeroDefect')}</h2>
          <p className="qual-strip__text">
            {t('everyComp')}
          </p>
        </div>
        <div className="qual-strip__right" style={{ display: 'flex', flexDirection: 'column', gap: '48px', width: '100%' }}>
          <div className="qual-strip__stats">
            <div className="qual-stat">
              <span className="qual-stat__val">1.67+</span>
              <span className="qual-stat__lbl" style={{ textTransform: 'uppercase' }}>{t('cpkTarget')}</span>
            </div>
            <div className="qual-stat">
              <span className="qual-stat__val">100%</span>
              <span className="qual-stat__lbl" style={{ textTransform: 'uppercase' }}>{t('traceability')}</span>
            </div>
          </div>
          
          <div className="qual-certs">
            <div className="qual-cert">
              <h4>ISO 9001:2015</h4>
              <p><strong>Issuing Body:</strong> CBF</p>
              <p><strong>Issue Date:</strong> 16.11.2021</p>
              <p><strong>Valid Until:</strong> 15.11.2026</p>
              <p><strong>Certificate No:</strong> ISO 9001:2015</p>
              <a href="#">Download Certificate →</a>
            </div>
            <div className="qual-cert">
              <h4>IATF 16949:2016</h4>
              <p><strong>Issuing Body:</strong> OST Scenes</p>
              <p><strong>Issue Date:</strong> 16.11.2021</p>
              <p><strong>Valid Until:</strong> 15.11.2026</p>
              <p><strong>Certificate No:</strong> IATF 16949:2016</p>
              <a href="#">View Certificate →</a>
            </div>
            <div className="qual-cert">
              <h4>ISO 14001:2015</h4>
              <p><strong>Issuing Body:</strong> CDF Scenes</p>
              <p><strong>Issue Date:</strong> 16.11.2021</p>
              <p><strong>Valid Until:</strong> 15.11.2026</p>
              <p><strong>Certificate No:</strong> ISO 14001:2015</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
