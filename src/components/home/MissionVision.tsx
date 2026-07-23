'use client';

import React from 'react';
import { useTranslation } from '@/i18n/LanguageContext';
import './MissionVision.css';

export default function MissionVision() {
  const t = useTranslation('mission');
  return (
    <section className="mission-vision">
      <div className="container">
        <div className="mission-vision__header">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="section-heading section-heading--light">{t('title')}</h2>
          <div className="heading-rule" />
        </div>
        
        <div className="mission-vision__content">
          <div className="mission-card">
            <h3>{t('missionTitle')}</h3>
            <p>{t('missionDesc')}</p>
          </div>
          <div className="mission-card">
            <h3>{t('visionTitle')}</h3>
            <p>{t('visionDesc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
