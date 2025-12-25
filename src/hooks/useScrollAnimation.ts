import { useSpring, config as springConfig } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  fromOpacity?: number;
  toOpacity?: number;
  fromTransform?: string;
  toTransform?: string;
  useGentleConfig?: boolean;
}

export function useScrollAnimation({
  threshold = 0.1,
  rootMargin = '-50px 0px',
  triggerOnce = true,
  delay = 0,
  fromOpacity = 0,
  toOpacity = 1,
  fromTransform = 'translateY(20px)',
  toTransform = 'translateY(0)',
  useGentleConfig = true,
}: UseScrollAnimationOptions = {}) {
  const [ref, inView] = useInView({
    threshold,
    rootMargin,
    triggerOnce,
  });

  const animation = useSpring({
    opacity: inView ? toOpacity : fromOpacity,
    transform: inView ? toTransform : fromTransform,
    config: useGentleConfig ? springConfig.gentle : springConfig.default,
    delay,
  });

  return { ref, style: animation, inView };
}