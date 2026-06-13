import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import CapabilitiesOverview from '@/components/home/CapabilitiesOverview';
import ClientsSection from '@/components/home/ClientsSection';
import QualityStrip from '@/components/home/QualityStrip';
import GallerySection from '@/components/home/GallerySection';
import HomeCTA from '@/components/home/HomeCTA';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <CapabilitiesOverview />
        <ClientsSection />
        <QualityStrip />
        <GallerySection />
        <HomeCTA />
      </main>
    </>
  );
}
