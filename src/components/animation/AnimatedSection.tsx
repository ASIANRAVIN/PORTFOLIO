import React from 'react';
import { animated } from '@react-spring/web';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  fromOpacity?: number;
  toOpacity?: number;
  fromTransform?: string;
  toTransform?: string;
  useGentleConfig?: boolean;
  as?: React.ElementType;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  threshold = 0.1,
  rootMargin = '-50px 0px',
  triggerOnce = true,
  delay = 0,
  fromOpacity = 0,
  toOpacity = 1,
  fromTransform = 'translateY(20px)',
  toTransform = 'translateY(0)',
  useGentleConfig = true,
  as: Component = 'div',
  className = '',
  ...props
}) => {
  const { ref, style } = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce,
    delay,
    fromOpacity,
    toOpacity,
    fromTransform,
    toTransform,
    useGentleConfig,
  });
  
  const AnimatedComponent = animated(Component as React.ElementType);
  
  return (
    <AnimatedComponent
      ref={ref}
      style={style}
      className={className}
      {...props}
    >
      {children}
    </AnimatedComponent>
  );
};