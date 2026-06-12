'use client';

import React from 'react';
import NavLink from '@/components/ui/NavLink';
import './Hero.css';

export default function Hero() {
  return (
    <>
      <section className="hero">

        {/* Video background */}
        <video
          className="hero__video"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/images/hero-poster.jpg"
        >
          <source src="/video/hero.webm" type="video/webm" />
          <source src="/video/hero.mp4"  type="video/mp4"  />
        </video>

        {/* Dark overlay */}
        <div className="hero__overlay" />

        {/* Content — bottom anchored by flex-end on .hero */}
        <div className="hero__body">

          {/* LEFT: heading, sub, buttons */}
          <div className="hero__left">

            <span className="eyebrow">
              IATF 16949:2016 · ISO 9001:2015 · ISO 14001:2015
            </span>

            <h1 className="hero__h1">
              <span className="hero__company-name">HEBRON AUTOMOTIVE</span><br/>
              Precision Die Casting<br/>
              <em>for</em> Automotive Assembly Lines
            </h1>

            <p className="hero__sub">
              Aluminium HPDC, GDC, CNC machining and
              powder coating — supplied to Gabriel India
              and Hitachi Astemo since 2019.
            </p>

            <div className="hero__actions">
              <NavLink href="/contact" className="btn-primary">
                Request Quote →
              </NavLink>
              <NavLink href="/capabilities" className="hero__link-plain">
                View Capabilities →
              </NavLink>
            </div>

          </div>

          {/* RIGHT: stat stack */}
          <div className="hero__right">
            <div className="hero__stat-stack">
              {[
                { v: '2019',  l: 'Established'     },
                { v: '120+',  l: 'Engineers'        },
                { v: '34%',   l: 'Free Capacity'    },
                { v: '₹41Cr', l: 'Annual Turnover'  },
              ].map(s => (
                <div className="hero__stat" key={s.l}>
                  <span className="hero__stat-value">{s.v}</span>
                  <span className="hero__stat-label">{s.l}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Cert bar — OUTSIDE and AFTER hero */}
      <div className="cert-bar">
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
      </div>
    </>
  );
}
