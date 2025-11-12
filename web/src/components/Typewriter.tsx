'use client';

import { useEffect, useState, type ReactNode } from 'react';

type TypewriterProps = {
  text: string;
  speedMs?: number;
  delayMs?: number;
  onComplete?: () => void;
  render?: (currentText: string) => ReactNode;
  className?: string;
};

export default function Typewriter({
  text,
  speedMs = 50,
  delayMs = 0,
  onComplete,
  render,
  className
}: TypewriterProps) {
  const [display, setDisplay] = useState('');

  // Reset bei Textwechsel
  useEffect(() => {
    setDisplay('');
  }, [text]);

  useEffect(() => {
    // Nichts zu tun, wenn bereits fertig
    if (display.length >= text.length) return;

    const isFirstChar = display.length === 0;
    const timeoutMs = isFirstChar ? delayMs : speedMs;

    const timeoutId = setTimeout(() => {
      const nextLen = Math.min(display.length + 1, text.length);
      setDisplay(text.slice(0, nextLen));
      if (nextLen === text.length && onComplete) {
        onComplete();
      }
    }, timeoutMs);

    return () => clearTimeout(timeoutId);
  }, [display, text, speedMs, delayMs, onComplete]);

  return (
    <span className={className}>
      {render ? render(display) : display}
      <span aria-hidden="true" className="ml-1 inline-block h-[1em] w-[2px] align-[-0.2em] bg-current animate-pulse" />
    </span>
  );
}


