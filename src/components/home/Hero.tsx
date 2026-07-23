'use client';

import React from 'react';
import Image from 'next/image';
import NavLink from '@/components/ui/NavLink';
import { useTranslation } from '@/i18n/LanguageContext';
import './Hero.css';

export default function Hero() {
  const t = useTranslation('hero');
  return (
    <>
      <section className="hero">

        {/* Background image */}
        <Image
          src="/images/hero-bg-2.png"
          alt="Hebron Automotive Factory Background"
          className="hero__bg-image"
          fill
          priority
          sizes="100vw"
        />

        {/* Dark overlay */}
        <div className="hero__overlay" />

        {/* Content — centered */}
        <div className="hero__body">
          <div className="hero__center">
            <h1 className="hero__h1">
              <span className="hero__company-name" style={{ display: 'block', marginBottom: '16px', color: '#ffffff', fontSize: '1.2em', whiteSpace: 'nowrap', textAlign: 'center', width: '100%' }}>HEBRON AUTOMOTIVE PRODUCTS</span>
              <span className="hero__main-heading" style={{ color: '#94a3b8', fontWeight: 400, fontSize: '0.8em', display: 'block', textAlign: 'center', width: '100%' }}>Precision Die Casting components</span>
            </h1>

            <div className="hero__actions">
              <NavLink href="/capabilities" className="btn-outline">
                {t('viewCap')}
              </NavLink>
            </div>
          </div>
        </div>

        {/* Floating image right corner */}
        <div style={{ position: 'absolute', bottom: '60px', right: '60px', zIndex: 2, width: '400px', height: '260px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }} className="hero__right-corner-image">
          <Image src="/images/home_right_corner.jpg" alt="Hebron Quality" fill style={{ objectFit: 'cover' }} />
        </div>

      </section>

      {/* Cert bar — OUTSIDE and AFTER hero */}
      <div className="cert-bar">
        <div className="cert-bar-marquee">
          {[...Array(3)].map((_, i) => (
            <React.Fragment key={i}>
              {[
                'IATF 16949:2016',
                'ISO 9001:2015',
                'ISO 14001:2015',
                'ADC12 · A380 · LM6',
                '3-Shift · 365 Days',
                'Free Capacity: 34%',
              ].map(c => (
                <div className="cert-bar__item" key={c}>
                  <span className="cert-bar__dot" />
                  <span>{c}</span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
