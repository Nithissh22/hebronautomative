import React, { useState } from 'react';
import { capabilitiesList } from './capabilityData';
import MiniNav from './MiniNav';
import './CapabilityDetail.css';

interface CapabilityDetailProps {
  activeIndex: number;
  onClose: () => void;
  onSelect: (index: number) => void;
  onQuoteRequest: (drawerKey: string) => void;
}

export default function CapabilityDetail({ activeIndex, onClose, onSelect, onQuoteRequest }: CapabilityDetailProps) {
  const cap = capabilitiesList[activeIndex];
  const [activeTab, setActiveTab] = useState<'equipment' | 'inventory' | 'process'>('equipment');
  const [prevIndex, setPrevIndex] = useState(activeIndex);

  // Derived state pattern instead of useEffect to avoid cascading render error
  if (activeIndex !== prevIndex) {
    setPrevIndex(activeIndex);
    setActiveTab('equipment');
  }

  return (
    <div className="capability-detail-container" role="region" aria-label={`${cap.title} Details`}>
      <MiniNav activeIndex={activeIndex} onSelect={onSelect} />
      
      <button className="btn-back" onClick={onClose}>
        ← All Capabilities
      </button>

      <div className="detail-split">
        {/* Left Panel */}
        <div className="detail-media-panel">
          <video autoPlay muted loop playsInline preload="auto" className="detail-media-video">
            <source src={cap.videoSrc.replace('.mp4', '.webm')} type="video/webm" />
            <source src={cap.videoSrc} type="video/mp4" />
          </video>
          <div className="detail-media-gradient"></div>
          
          <div className="detail-media-watermark">
            {cap.title}
          </div>
          
          {cap.certBadge && (
            <div className="detail-media-badge">
              {cap.certBadge}
            </div>
          )}
        </div>

        {/* Right Panel */}
        <div className="detail-specs-panel">
          <div className="detail-specs-header">
            <span className="detail-specs-eyebrow">{cap.number} &nbsp;·&nbsp; {cap.title}</span>
            <p className="detail-specs-power">{cap.powerStatement}</p>
          </div>

          <div className="detail-specs-grid">
            {cap.specs.map((spec, i) => (
              <div key={i} className="spec-card">
                <i className={`${spec.icon} spec-card-icon`}></i>
                <div className="spec-card-content">
                  <span className="spec-card-label">{spec.label}</span>
                  <span className="spec-card-value">{spec.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="detail-tabs">
            <button className={`tab-btn ${activeTab === 'equipment' ? 'active' : ''}`} onClick={() => setActiveTab('equipment')}>Equipment</button>
            <button className={`tab-btn ${activeTab === 'inventory' ? 'active' : ''}`} onClick={() => setActiveTab('inventory')}>Detailed Inventory</button>
            <button className={`tab-btn ${activeTab === 'process' ? 'active' : ''}`} onClick={() => setActiveTab('process')}>Process Flow</button>
          </div>

          <div className="detail-tab-content">
            {activeTab === 'equipment' && (
              <ul className="equipment-list-simple">
                {cap.equipmentList.map((eq, i) => (
                  <li key={i}>{eq.name} <span className="eq-qty">{eq.qty}</span></li>
                ))}
              </ul>
            )}
            
            {activeTab === 'inventory' && (
              <div className="inventory-view">
                <p style={{ color: '#64748b', marginBottom: '16px', fontSize: '14px' }}>Full inventory details are available upon request.</p>
                <ul className="equipment-list-simple">
                  {cap.equipmentList.map((eq, i) => (
                    <li key={i}>{eq.name} <span className="eq-qty">{eq.qty}</span></li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'process' && (
              <div className="process-flow-stepper">
                {cap.processFlow.map((step, i) => (
                  <div key={i} className="process-step" style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="process-step-node">{i + 1}</div>
                    <div className="process-step-label">{step}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="detail-trust-points">
            {cap.trustPoints.map((point, i) => (
              <div key={i} className="trust-point">
                <i className="ti ti-check trust-point-icon"></i> {point}
              </div>
            ))}
          </div>

          <button className="btn-primary detail-cta" onClick={() => onQuoteRequest(cap.drawerKey)}>
            {cap.ctaText}
          </button>
        </div>
      </div>
    </div>
  );
}

