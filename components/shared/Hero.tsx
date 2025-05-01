import { LayoutDashboard, Pyramid } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-10">
      <div className="flex flex-col items-center justify-between max-xl:gap-4 max-md:justify-center lg:flex-row">
        <div className="flex flex-col max-md:justify-center md:items-start">
          <h2 className="text-4xl leading-16 font-semibold text-[#111111] max-md:text-center xl:text-6xl xl:leading-24">
            Your AI- <br /> Powered <br /> Sales Coach.
          </h2>

          <div className="m flex flex-col items-center gap-8 md:flex-row">
            <Image
              src={"/hero-ai.svg"}
              alt="AI Coach"
              width={200}
              height={200}
              className="mt-8"
            />
            <p className="mt-4 max-w-xs text-xl leading-relaxed text-[#05131D]/70">
              Get real-time coaching, script suggestions, and deal-closing
              strategies powered by advanced AI technology.
            </p>
          </div>

          <div className="mt-8 flex w-full flex-col items-center justify-between md:flex-row">
            <div className="flex items-center gap-8">
              <span className="rounded-md bg-white p-4 drop-shadow-xl">
                <LayoutDashboard className="h-8 w-8 text-[#002868]" />
              </span>
              <div>
                <h3 className="text-4xl font-semibold text-[#111111]">2000+</h3>
                <p className="text-lg text-[#05131D]/70">Your protection</p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <span className="rounded-md bg-white p-4 drop-shadow-xl">
                <Pyramid className="h-8 w-8 text-[#002868]" />
              </span>
              <div>
                <h3 className="text-4xl font-semibold text-[#111111]">7001+</h3>
                <p className="text-lg text-[#05131D]/70">Provide tailored</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:relative">
          <Image
            src={"/hero-ai2.svg"}
            alt="AI Coach"
            width={500}
            height={500}
          />
          <div className="-bottom-full max-w-sm rounded-xl bg-white p-8 drop-shadow-xl md:absolute md:-bottom-8 md:ml-8 lg:-left-0 lg:ml-0 xl:-left-32">
            <div className="flex items-center justify-between">
              <h3 className="text-4xl font-semibold text-[#111111]">721+</h3>
              <h3 className="text-4xl font-semibold text-[#111111]">1000+</h3>
            </div>
            <div className="mt-4 space-y-4">
              <h3 className="text-xl font-semibold text-[#111111]">
                Growth is our priority.
              </h3>
              <p className="text-lg text-[#05131D]/70">
                As a full-service business agency, we specialize in helping
                companies of all sizes optimize their operations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
