'use client';

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface TransitionContextType {
  isTransitioning: boolean;
  startTransition: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export function TransitionProvider({ children }: { children: ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  const startTransition = useCallback(
    (href: string) => {
      // If we are already transitioning, don't start a new one
      if (isTransitioning) return;
      
      // Minimum duration 400ms. We use 400ms here, but to be safe against quick flashing, 
      // let's wait 400ms minimum before allowing it to hide.
      setIsTransitioning(true);
      
      const startTime = Date.now();
      
      // Start the route transition immediately but keep the loader visible for minimum 400ms
      router.push(href);
      
      const checkAndHide = () => {
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime >= 400) {
          // If 400ms has passed, hide
          setIsTransitioning(false);
        } else {
          // Otherwise wait for the remainder
          setTimeout(() => setIsTransitioning(false), 400 - elapsedTime);
        }
      };

      // In Next.js App Router, router.push is not a Promise that resolves when done,
      // so we rely on the 400ms hold. If the actual navigation takes longer, 
      // next.js handles it behind the scenes, but typically it's very fast locally.
      // Wait a moment for navigation to kick in, then hide. 
      // Let's hold for 600ms total to ensure smooth animation and transition.
      // The user suggested 600ms if 400 flashes too fast.
      setTimeout(() => {
         setIsTransitioning(false);
      }, 600);
      
    },
    [router, isTransitioning]
  );

  return (
    <TransitionContext.Provider value={{ isTransitioning, startTransition }}>
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  const context = useContext(TransitionContext);
  if (context === undefined) {
    throw new Error('useTransition must be used within a TransitionProvider');
  }
  return context;
}
