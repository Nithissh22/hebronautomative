import React from 'react';
import NavLink from '@/components/ui/NavLink';
import './CapabilitiesOverview.css';

export default function CapabilitiesOverview() {
  return (
    <section className="cap-overview">
      <div className="cap-overview__header">
        <span className="eyebrow">PROCESS CAPABILITIES</span>
        <h2 className="section-heading">
          Four processes.<br/>One supply partner.
        </h2>
        <div className="heading-rule" />
      </div>
      <div className="cap-overview__grid">
        {[
          {
            num: '01',
            title: 'High Pressure Die Casting',
            id: 'die-casting',
            specs: [
              ['Tonnage', '120T – 800T'],
              ['Machines', '7 PDC Lines'],
              ['Alloys', 'ADC12, A380, LM6'],
              ['Process', 'Cold Chamber HPDC'],
            ],
          },
          {
            num: '02',
            title: 'VMC / CNC Machining',
            id: 'cnc-machining',
            specs: [
              ['Centers', '3/4/5-axis'],
              ['Make', 'HAAS USA'],
              ['Accuracy', '±0.005mm'],
              ['Finish', 'Ra 0.8–6.3 μm'],
            ],
          },
          {
            num: '03',
            title: 'Gravity Die Casting',
            id: 'die-casting',
            specs: [
              ['GDC Units', '7 Machines'],
              ['Furnaces', '3 Melting + 1 Holding'],
              ['Parts', 'Outer Tube LH & RH'],
              ['Process', 'Tilt + Fixed GDC'],
            ],
          },
          {
            num: '04',
            title: 'Powder Coating',
            id: 'powder-coating',
            specs: [
              ['Lines', '2 Semi-Auto Lines'],
              ['Testing', 'DFT Meter Lab'],
              ['Finish', 'Corrosion resistant'],
              ['Standard', 'Automotive grade'],
            ],
          },
        ].map(cap => (
          <div className="cap-card" key={cap.num}>
            <div className="cap-card__top">
              <span className="cap-card__num">{cap.num}</span>
              <h3 className="cap-card__title">{cap.title}</h3>
            </div>
            <div className="cap-card__specs">
              {cap.specs.map(([l, v]) => (
                <div className="cap-card__row" key={l}>
                  <span className="spec-label">{l}</span>
                  <span className="spec-value">{v}</span>
                </div>
              ))}
            </div>
            <NavLink href={`/capabilities${cap.id ? `?id=${cap.id}` : ''}`} className="cap-card__link">
              View Details →
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  );
}
