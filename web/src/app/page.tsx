'use client';

import Image from "next/image";
import Typewriter from "../components/Typewriter";
import { useState } from "react";

export default function Home() {
  const line1 = "Coming sooner than you might think...";
  const line2 = "Sounds interesting? Then grab your email-client and getintouch@clever.legal";
  const typeSpeed = 45;
  const [showSecond, setShowSecond] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="flex flex-col items-center">
        <Image
          src="/cleverlegal-intro2.png"
          alt="CleverLegal"
          width={480}
          height={360}
          sizes="(max-width: 768px) 80vw, 480px"
          priority
          quality={90}
          className="w-[min(80vw,480px)] h-auto"
        />
        {!showSecond ? (
          <Typewriter
            text={line1}
            speedMs={typeSpeed}
            onComplete={() => setShowSecond(true)}
            className="block mt-2 w-[min(80vw,480px)] text-center text-lg text-zinc-700 dark:text-zinc-300"
          />
        ) : (
          <Typewriter
            text={line2}
            speedMs={typeSpeed}
            className="block mt-2 w-[min(80vw,480px)] text-center text-lg text-zinc-700 dark:text-zinc-300"
            render={(t) => {
              const email = "getintouch@clever.legal";
              const idx = t.indexOf(email);
              if (idx === -1) return t;
              return (
                <>
                  {t.slice(0, idx)}
                  <a
                    href={`mailto:${email}`}
                    className="underline decoration-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                  >
                    {t.slice(idx, idx + email.length)}
                  </a>
                  {t.slice(idx + email.length)}
                </>
              );
            }}
          />
        )}
      </div>
    </div>
  );
}
