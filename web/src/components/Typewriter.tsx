'use client';

import { useEffect, useState } from 'react';

type TypewriterProps = {
  text: string;
  speedMs?: number;
  className?: string;
};

export default function Typewriter({ text, speedMs = 50, className }: TypewriterProps) {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    let index = 0;
    setDisplay('');
    const intervalId = setInterval(() => {
      setDisplay((prev) => prev + text.charAt(index));
      index += 1;
      if (index >= text.length) {
        clearInterval(intervalId);
      }
    }, speedMs);
    return () => clearInterval(intervalId);
  }, [text, speedMs]);

  return (
    <span className={className}>
      {display}
      <span aria-hidden="true" className="ml-1 inline-block h-[1em] w-[2px] align-[-0.2em] bg-current animate-pulse" />
    </span>
  );
}


