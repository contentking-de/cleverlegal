import Image from "next/image";
import Typewriter from "../components/Typewriter";

export default function Home() {
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
        <Typewriter
          text="Coming sooner than you might think..."
          speedMs={45}
          className="block mt-2 w-[min(80vw,480px)] text-center text-lg text-zinc-700 dark:text-zinc-300"
        />
      </div>
    </div>
  );
}
