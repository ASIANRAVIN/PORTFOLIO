import React from 'react';
import { animated } from '@react-spring/web';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface AnimatedListProps extends React.HTMLAttributes<HTMLDivElement> {
  items: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  fromOpacity?: number;
  toOpacity?: number;
  fromTransform?: string;
  toTransform?: string;
  useGentleConfig?: boolean;
  staggerDelay?: number;
}

export const AnimatedList: React.FC<AnimatedListProps> = ({
  items,
  renderItem,
  threshold = 0.1,
  rootMargin = '-50px 0px',
  triggerOnce = true,
  fromOpacity = 0,
  toOpacity = 1,
  fromTransform = 'translateY(20px)',
  toTransform = 'translateY(0)',
  useGentleConfig = true,
  staggerDelay = 100,
  className = '',
  ...props
}) => {
  return (
    <div className={className} {...props}>
      {items.map((item, index) => (
        <AnimatedListItem
          key={index}
          item={item}
          index={index}
          renderItem={renderItem}
          threshold={threshold}
          rootMargin={rootMargin}
          triggerOnce={triggerOnce}
          fromOpacity={fromOpacity}
          toOpacity={toOpacity}
          fromTransform={fromTransform}
          toTransform={toTransform}
          useGentleConfig={useGentleConfig}
          staggerDelay={staggerDelay}
        />
      ))}
    </div>
  );
};

const AnimatedListItem: React.FC<{
  item: any;
  index: number;
  renderItem: (item: any, index: number) => React.ReactNode;
  threshold: number;
  rootMargin: string;
  triggerOnce: boolean;
  fromOpacity: number;
  toOpacity: number;
  fromTransform: string;
  toTransform: string;
  useGentleConfig: boolean;
  staggerDelay: number;
}> = ({ 
  item, 
  index, 
  renderItem,
  threshold,
  rootMargin,
  triggerOnce,
  fromOpacity,
  toOpacity,
  fromTransform,
  toTransform,
  useGentleConfig,
  staggerDelay
}) => {
  const { ref, style } = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce,
    delay: index * staggerDelay,
    fromOpacity,
    toOpacity,
    fromTransform,
    toTransform,
    useGentleConfig,
  });

  return (
    <animated.div ref={ref} style={style}>
      {renderItem(item, index)}
    </animated.div>
  );
};