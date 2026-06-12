'use client';

import { useEffect, useState } from 'react';
import { useTransition } from '@/context/TransitionContext';
import './PageLoader.css';

export default function PageLoader() {
  const { isTransitioning } = useTransition();
  const [renderState, setRenderState] = useState<'hidden' | 'enter' | 'exit'>('hidden');

  useEffect(() => {
    if (isTransitioning) {
      setRenderState('enter');
    } else if (renderState === 'enter') {
      setRenderState('exit');
      
      // Clean up after exit animation (250ms)
      const timer = setTimeout(() => {
        setRenderState('hidden');
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  if (renderState === 'hidden') return null;

  return (
    <div className={`page-loader ${renderState === 'enter' ? 'loader-enter' : 'loader-exit'}`}>
      <div className="loader-logo-container">
        {/* Outer spinning ring */}
        <svg className="loader-outer-ring" viewBox="0 0 72 72">
          <circle cx="36" cy="36" r="34.5" />
        </svg>

        {/* Static inner circle with text */}
        <div className="loader-inner-circle">
          <span>HEBRON</span>
        </div>
      </div>
    </div>
  );
}
