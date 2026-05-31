import { useEffect, useState } from "react";

const TYPE_MS = 55;
const DELETE_MS = 28;
const PAUSE_AFTER_TYPED_MS = 2800;
const PAUSE_AFTER_DELETED_MS = 350;

type TypewriterTitleProps = {
  titles: string[];
  className?: string;
};

export function TypewriterTitle({ titles, className }: TypewriterTitleProps) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || titles.length === 0) {
      return;
    }

    const currentTitle = titles[titleIndex];

    if (!isDeleting && displayText === currentTitle) {
      const timeout = window.setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPED_MS);
      return () => window.clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      const timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setTitleIndex((index) => (index + 1) % titles.length);
      }, PAUSE_AFTER_DELETED_MS);
      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentTitle.slice(0, displayText.length - 1));
      } else {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      }
    }, isDeleting ? DELETE_MS : TYPE_MS);

    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, prefersReducedMotion, titleIndex, titles]);

  useEffect(() => {
    if (!prefersReducedMotion) {
      return;
    }

    setDisplayText(titles[0] ?? "");
    const interval = window.setInterval(() => {
      setTitleIndex((index) => {
        const nextIndex = (index + 1) % titles.length;
        setDisplayText(titles[nextIndex] ?? "");
        return nextIndex;
      });
    }, 5000);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion, titles]);

  return (
    <p className={className} aria-live="polite">
      <span className="typewriter-text">{displayText}</span>
      {!prefersReducedMotion && (
        <span className="typewriter-cursor" aria-hidden="true">
          |
        </span>
      )}
    </p>
  );
}
