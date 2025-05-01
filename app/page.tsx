import Header from "@/components/shared/Header";
import MobileNav from "@/components/shared/MobileNav";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="fixed top-0 left-0 z-10 flex w-full items-center justify-between bg-gradient-to-tl from-blue-50 from-0% via-yellow-50 via-50% to-blue-200 to-100% px-4 py-4 backdrop-blur-lg">
        <div className="container mx-auto max-w-6xl">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-1">
                <Image src="/logo.svg" alt="Logo" width={20} height={20} />
                <h1 className="text-lg font-semibold">SalesRank.AI</h1>
              </div>
              <Header />
            </div>

            <Button
              className="border-accent-foreground ml-auto rounded-full max-md:hidden"
              variant="outline"
            >
              Get Started
            </Button>
            <MobileNav />
          </nav>
        </div>
      </header>
    </main>
  );
}
