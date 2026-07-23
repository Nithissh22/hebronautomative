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
      </div>
    </section>
  );
}
