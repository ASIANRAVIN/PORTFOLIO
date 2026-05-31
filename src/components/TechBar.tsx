import { motion } from "framer-motion";

interface TechBarProps {
  techIcons: Array<{
    id: string;
    name: string;
    img: string;
    href: string;
  }>;
}

export function TechBar({ techIcons }: TechBarProps) {
  return (
    <div className="w-full">
      <div className="tech-bar-track w-full h-32 flex items-center justify-center px-4">
        <div className="flex items-center justify-center gap-6 px-4 py-2">
          {techIcons.map((icon) => (
            <a
              key={icon.id}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center cursor-pointer flex-shrink-0"
              title={icon.name}
            >
              <motion.div
                className="tech-bar-bubble rounded-full overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-2 border-accent/30 shadow-lg flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 relative group flex-shrink-0"
                initial={{ scale: 0, rotate: -90 }}
                animate={{
                  scale: 1,
                  rotate: 1080,
                }}
                transition={{
                  scale: {
                    duration: 0.8,
                    ease: [0.12, 0.34, 0.67, 0.89],
                  },
                  rotate: {
                    duration: 1.2,
                    ease: "easeOut",
                  },
                  opacity: { duration: 1, ease: [0, 0, 0, 1] },
                }}
                whileHover={{
                  scale: 1.15,
                  rotate: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 25,
                  },
                }}
                whileTap={{ scale: 0.98 }}
                style={{ transformOrigin: "center" }}
                aria-hidden={false}
              >
                <img
                  src={icon.img}
                  alt={icon.name}
                  className="tech-bar-img object-contain pointer-events-none relative z-10 group-hover:brightness-150 transition-all duration-300"
                />
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
