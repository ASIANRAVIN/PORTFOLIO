import React from 'react';
import { AnimatedSection } from './AnimatedSection';

interface AnimatedPageWrapperProps {
  children: React.ReactNode;
}

export const AnimatedPageWrapper: React.FC<AnimatedPageWrapperProps> = ({ children }) => {
  return (
    <AnimatedSection
      fromOpacity={0}
      toOpacity={1}
      delay={0}
      className="min-h-screen"
    >
      {children}
    </AnimatedSection>
  );
};