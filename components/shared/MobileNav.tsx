import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger className="ml-auto md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:w-3/4 md:hidden">
        <SheetHeader>
          <SheetTitle asChild>
            <div className="flex items-center space-x-1">
              <Image src="/logo.svg" alt="Logo" width={20} height={20} />
              <h1 className="text-lg font-semibold">SalesRank.AI</h1>
            </div>
          </SheetTitle>

          <SheetDescription className="flex flex-col items-start space-y-4 pt-4">
            <Link href="/" className="text-sm font-semibold">
              <SheetTrigger>Home</SheetTrigger>
            </Link>
            <Link href="/about" className="text-sm font-semibold">
              <SheetTrigger>About</SheetTrigger>
            </Link>
            <Link href="/contact" className="text-sm font-semibold">
              <SheetTrigger>Contact</SheetTrigger>
            </Link>
            <Link href="/services" className="text-sm font-semibold">
              <SheetTrigger>Services</SheetTrigger>
            </Link>
            <Link href="/pricing" className="text-sm font-semibold">
              <SheetTrigger>Pricing</SheetTrigger>
            </Link>
            <Link href="/consulting" className="text-sm font-semibold">
              <SheetTrigger>Consulting</SheetTrigger>
            </Link>
            <Link href="/ai-coach" className="text-sm font-semibold">
              <SheetTrigger>AI Coach</SheetTrigger>
            </Link>
          </SheetDescription>
        </SheetHeader>
        <SheetDescription className="mt-auto mb-4 w-full px-2">
          <Button
            className="border-accent-foreground w-full rounded-full"
            variant="outline"
          >
            Get Started
          </Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
