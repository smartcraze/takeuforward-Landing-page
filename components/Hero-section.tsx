import Image from "next/image";
import { ContainerTextFlipDemo } from "./Text-flip";

function Heropage() {
  return (
    <main className="pt-[90px] bg-gradient-to-b from-white via-zinc-100 to-white dark:from-black dark:via-zinc-900 dark:to-black text-gray-900 dark:text-white flex flex-col lg:flex-row items-center justify-between gap-8 px-10 py-10 overflow-hidden ">

      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6 max-w-2xl">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-black dark:text-white">
            Upskill yourself <br /> With Just one
          </h1>
          <h1 className="text-orange-600 text-4xl sm:text-5xl md:text-6xl font-extrabold mt-2 leading-tight tracking-tight">
            SUBSCRIPTION
          </h1>
        </div>

        <p className="text-base sm:text-xl text-gray-700 dark:text-gray-300 max-w-md">
          The most trusted platform for engineers to upskill and crack tech interviews in the least time.
        </p>

        {/* Animated Text Flip */}
        <div className="w-full mt-6">
          <ContainerTextFlipDemo />
        </div>
      </div>

      {/* Right Section - hidden on small screens */}
      <div className="hidden lg:flex w-1/2 justify-center items-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 rounded-4xl overflow-hidden">
          {/* Glowing Core */}
          <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-gray-300/10 via-gray-500/5 to-transparent dark:from-gray-800/20 dark:via-gray-700/10 rounded-full blur-3xl" />

          {/* Rings */}
          <div className="absolute w-[500px] h-[250px] border border-gray-400/20 rounded-full rotate-12 animate-spin-slow dark:border-gray-600/20" />
          <div className="absolute w-[650px] h-[325px] border border-gray-500/15 rounded-full -rotate-12 animate-spin-reverse dark:border-gray-700/20" />
          <div className="absolute w-[800px] h-[400px] border border-gray-600/10 rounded-full rotate-6 animate-spin-slow dark:border-gray-800/15" />

          {/* Orbs */}
          <div className="absolute w-3 h-3 bg-gray-500/50 rounded-full animate-orbit-1 shadow-md dark:bg-gray-400/70" />
          <div className="absolute w-2 h-2 bg-gray-600/45 rounded-full animate-orbit-2 shadow-md dark:bg-gray-500/60" />
          <div className="absolute w-4 h-4 bg-gray-700/40 rounded-full animate-orbit-3 shadow-md dark:bg-gray-600/55" />
          <div className="absolute w-2.5 h-2.5 bg-gray-400/45 rounded-full animate-orbit-4 shadow-md dark:bg-gray-300/60" />

          {/* Particles */}
          <div className="absolute w-1 h-1 bg-gray-500/60 rounded-full animate-float-1 dark:bg-gray-400/70" />
          <div className="absolute w-1.5 h-1.5 bg-gray-600/50 rounded-full animate-float-2 dark:bg-gray-500/60" />
          <div className="absolute w-1 h-1 bg-gray-700/55 rounded-full animate-float-3 dark:bg-gray-600/65" />

          {/* Radial Overlay */}
          <div className="absolute inset-0 w-[200%] h-[200%] bg-gradient-radial from-transparent via-transparent to-white dark:to-black opacity-50 blur-2xl" />
          {/* Top Light Gradient */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-white/30 via-transparent to-transparent dark:from-zinc-900/40 rounded-full blur-xl" />
        </div>

        {/* Image */}
        <Image
          src="/landing.png"
          alt="Hero Image"
          width={600}
          height={600}
          className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain drop-shadow-2xl relative z-10"
          priority
        />
      </div>
    </main>
  );
}

export default Heropage;
