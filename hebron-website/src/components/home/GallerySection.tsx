import React from 'react';
import Image from 'next/image';
import './GallerySection.css';

const images = [
  '/gallery/1hebron.jpg',
  '/gallery/2hebron.jpg',
  '/gallery/3hebron.jpg',
  '/gallery/4hebron.jpg',
  '/gallery/5hebron.jpg',
  '/gallery/6hebron.jpg',
  '/gallery/7hebron.jpg',
  '/gallery/8hebron.jpg',
  '/gallery/image_1135x468_1.jpg',
  '/gallery/9hebron.jpg',
  '/gallery/10hebron.jpg',
  '/gallery/11hebron.jpg',
  '/gallery/12hebron.jpg',
  '/gallery/13hebron.jpg',
  '/gallery/14hebron.jpg',
  '/gallery/15hebron.jpg',
  '/gallery/16hebron.jpg',
  '/gallery/17hebron.png',
  '/gallery/18hebron.jpg',
  '/gallery/19hebron.png',
  '/gallery/20hebron.png',
  '/gallery/21hebron.png',
  '/gallery/22hebron.png',
];

export default function GallerySection() {
  return (
    <section className="gallery-section">
      <div className="gallery-section__header">
        <span className="eyebrow">OUR FACILITIES</span>
        <h2 className="section-heading">Company Gallery</h2>
        <div className="heading-rule" style={{ margin: '0 auto 32px' }} />
      </div>
      
      <div className="gallery-container">
        <div className="gallery-track">
          {[...images, ...images].map((src, index) => (
            <div key={index} className="gallery-item">
              <Image
                src={src}
                alt={`Hebron Automotive Facility ${index + 1}`}
                fill
                sizes="(max-width: 768px) 300px, 400px"
              />
              <div className="gallery-item__overlay" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
