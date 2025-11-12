import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <Image
        src="/cleverlegal-intro.png"
        alt="CleverLegal"
        width={480}
        height={360}
        sizes="(max-width: 768px) 80vw, 480px"
        priority
        quality={90}
        className="w-[min(80vw,480px)] h-auto"
      />
    </div>
  );
}
