import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="fixed top-0 left-0 z-10 flex w-full items-center justify-between border-b border-gray-200 bg-white/95 px-4 py-4 backdrop-blur-lg">
        <div className="container mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image src="/logo.svg" alt="Logo" width={20} height={20} />
            <h1 className="text-lg font-semibold">SalesRank.AI</h1>
          </div>
          <nav className="flex space-x-4">
            <Link href="/" className="text-gray-700 hover:text-blue-500">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-500">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-500">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
