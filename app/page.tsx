import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import LiveAICoach from "@/components/shared/LiveAICoach";
import MobileNav from "@/components/shared/MobileNav";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="flex w-full items-center justify-between bg-gradient-to-tl from-white from-40% via-[#004FCE]/10 via-70% to-[#004FCE]/20 to-100% px-4 py-4 backdrop-blur-lg">
        <div className="container mx-auto max-w-7xl">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-1">
                <Image src="/logo.svg" alt="Logo" width={20} height={20} />
                <h1 className="text-lg font-semibold">SalesRank.AI</h1>
              </div>
              <Header />
            </div>

            <Button
              className="border-accent-foreground ml-auto rounded-full text-base font-bold max-md:hidden"
              variant="outline"
            >
              Get Started
            </Button>
            <MobileNav />
          </nav>

          <Hero />
        </div>
      </header>
      <LiveAICoach />
    </main>
  );
}
