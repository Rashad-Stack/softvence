import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Header() {
  return (
    <NavigationMenu className="max-md:hidden">
      <NavigationMenuList className="flex items-center space-x-4">
        <NavigationMenuItem className="text-sm font-semibold">
          <Link href="/" passHref>
            Home
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="text-sm font-semibold">
          <Link href="/about" passHref>
            About
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="text-sm font-semibold">
          <Link href="/pricing" passHref>
            Pricing
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="text-sm font-semibold">
          <Link href="/consulting" passHref>
            Consulting
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="text-sm font-semibold">
          <Link href="/ai-coach" passHref>
            AI Coach
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
