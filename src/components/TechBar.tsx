import { useEffect, useRef, useState } from "react";

interface TechIcon {
  id: string;
  name: string;
  img: string;
  href: string;
}

interface TechBarProps {
  techIcons: TechIcon[];
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  element: HTMLDivElement;
  icon: TechIcon;
}

export function TechBar({ techIcons }: TechBarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0, radius: 100 });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const particles: Particle[] = [];

    // Create particle elements
    techIcons.forEach((icon, index) => {
      const element = document.createElement("div");
      element.className = "absolute rounded-lg overflow-hidden shadow-lg tech-icon";
      element.style.width = "60px";
      element.style.height = "60px";
      element.style.cursor = "pointer";
      element.style.transition = "transform 0.2s ease";
      element.style.zIndex = "10";

      // Add hover effect
      element.addEventListener("mouseenter", () => {
        element.style.transform = "scale(1.2) rotate(5deg)";
      });
      element.addEventListener("mouseleave", () => {
        element.style.transform = "scale(1) rotate(0deg)";
      });

      // Create image
      const img = document.createElement("img");
      img.src = icon.img;
      img.alt = icon.name;
      img.className = "w-full h-full object-cover";
      img.style.pointerEvents = "none";

      // Wrap in link if href exists
      if (icon.href) {
        const link = document.createElement("a");
        link.href = icon.href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.appendChild(img);
        element.appendChild(link);
      } else {
        element.appendChild(img);
      }

      container.appendChild(element);

      // Random starting position
      const x = Math.random() * container.offsetWidth;
      const y = Math.random() * container.offsetHeight;

      element.style.left = `${x}px`;
      element.style.top = `${y}px`;

      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        element,
        icon,
      });
    });

    particlesRef.current = particles;

    // Animation loop
    const animate = () => {
      const particles = particlesRef.current;
      const containerRect = container.getBoundingClientRect();
      const mouse = mouseRef.current;

      particles.forEach((particle) => {
        // Gravity towards mouse
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          particle.vx += Math.cos(angle) * force * 0.5;
          particle.vy += Math.sin(angle) * force * 0.5;
        }

        // Update velocity with slight friction
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary collision
        if (particle.x < 0 || particle.x > container.offsetWidth - 60) {
          particle.vx *= -0.8;
          particle.x = particle.x < 0 ? 0 : container.offsetWidth - 60;
        }
        if (particle.y < 0 || particle.y > container.offsetHeight - 60) {
          particle.vy *= -0.8;
          particle.y = particle.y < 0 ? 0 : container.offsetHeight - 60;
        }

        // Apply position
        particle.element.style.left = `${particle.x}px`;
        particle.element.style.top = `${particle.y}px`;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    container.addEventListener("mousemove", handleMouseMove);
    animationRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current);
      container.removeEventListener("mousemove", handleMouseMove);
      particles.forEach((particle) => {
        particle.element.remove();
      });
    };
  }, [techIcons]);

  return (
    <div className="relative w-full">
      <div 
        ref={containerRef} 
        className="relative w-full h-32 bg-gradient-to-r from-accent/5 to-accent/10 rounded-lg overflow-hidden border border-accent/10"
      />
      
      {/* Instruction label */}
      <div className="text-center mt-4 text-sm text-muted-foreground">
        <span className="inline-block px-3 py-1 bg-accent/10 rounded-full">
          🎯 Hover to attract icons • Click to visit
        </span>
      </div>
    </div>
  );
}