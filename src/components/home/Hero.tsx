'use client';

import React from 'react';
import Image from 'next/image';
import NavLink from '@/components/ui/NavLink';
import './Hero.css';

export default function Hero() {
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
            <span className="eyebrow">
              IATF 16949:2016 · ISO 9001:2015 · ISO 14001:2015
            </span>

            <h1 className="hero__h1">
              <span className="hero__company-name">HEBRON AUTOMOTIVE</span><br/>
              <span className="hero__main-heading">Precision Die Casting</span><br/>
              <em>for</em> Automotive Assembly Lines
            </h1>

            <p className="hero__sub">
              Aluminium HPDC, GDC, CNC machining and<br/>
              Powder coating — supplied to Gabriel India<br/>
              and Hitachi Astemo since 2019.
            </p>

            <div className="hero__actions">
              <NavLink href="/contact" className="btn-primary">
                Request Quote →
              </NavLink>
              <NavLink href="/capabilities" className="btn-outline">
                View Capabilities →
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
