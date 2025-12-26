import React from 'react';
import { AnimatedSection } from './AnimatedSection';

interface AnimatedPageProps {
  children: React.ReactNode;
  sectionDelay?: number;
}

export const AnimatedPage: React.FC<AnimatedPageProps> = ({ 
  children, 
  sectionDelay = 100 
}) => {
  const childrenArray = React.Children.toArray(children);
  
  return (
    <div className="min-h-screen">
      {childrenArray.map((child, index) => {
        if (React.isValidElement(child)) {
          const childElement = child as React.ReactElement;
          
          // Check if the child already has animation props
          const childProps = childElement.props as any;
          const hasAnimation = childProps.delay !== undefined;
          
          if (hasAnimation) {
            return child;
          }
          
          return (
            <AnimatedSection 
              key={index} 
              delay={index * sectionDelay}
            >
              {childElement}
            </AnimatedSection>
          );
        }
        
        return child;
      })}
    </div>
  );
};