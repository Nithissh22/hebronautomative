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
              <span className="hero__main-heading">Precision Die Casting components</span><br/>
              <span className="hero__company-name" style={{ marginTop: '20px' }}>HEBRON AUTOMOTIVE PRODUCTS</span>
            </h1>

            <div className="hero__actions">
              <NavLink href="/capabilities" className="btn-outline">
                {t('viewCap')}
              </NavLink>
            </div>
          </div>
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
