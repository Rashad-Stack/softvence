import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-bl from-white from-40% via-[#004FCE]/10 via-70% to-[#004FCE]/20 to-100%">
      <div className="container mx-auto max-w-7xl max-lg:px-4">
        <div className="relative py-10">
          {/* Background image */}
          {/* <div className="absolute inset-0 bg-[url('/Background-Noise.png')] bg-cover bg-center opacity-40"></div> */}

          {/* Ready to Hire content with blur */}
          <div className="relative z-10 backdrop-blur-lg">
            <div className="mx-auto mt-8 mb-14 flex flex-col items-center justify-center rounded-lg bg-gradient-to-r from-[#103570] to-[#004FCE] py-14">
              <div className="text text-center">
                <h2 className="pb-4 text-2xl font-semibold text-white">
                  Ready to Hire Smarter?
                </h2>
                <p className="text-[#B9BDC7]">
                  Unlock Exclusive Insights Subscribe to Our Newsletter
                </p>
              </div>
              <Button className="mt-10 cursor-pointer rounded-full bg-[#FCE38A] text-black transition-all duration-300 hover:text-white">
                Join Now
              </Button>
            </div>
          </div>

          <div className="mx-auto grid grid-cols-1 gap-8 border-b pb-4 md:grid-cols-2">
            {/* Left site  */}
            <div className="flex flex-col md:w-[95%]">
              <div className="flex items-center space-x-1">
                <Image src="/logo.svg" alt="Logo" width={20} height={20} />
                <h1 className="text-lg font-semibold">SalesRank.AI</h1>
              </div>
              <div>
                <p className="py-4 text-sm text-[#335386]">
                  SalesRank.AI offers a comprehensive suite of AI-powered
                  solutions to help you find expert sales professionals who can
                  elevate every aspect of your business. From performance
                  rankings and skill verification to industry benchmarking and
                  real-time analytics, we provide the insights and tools to
                  optimize your sales strategy and drive growth.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Facebook className="rounded-full bg-blue-100 p-1 text-xl text-[#103570] shadow" />
                <Twitter className="rounded-full bg-blue-100 p-1 text-xl text-[#103570] shadow" />
                <Linkedin className="rounded-full bg-blue-100 p-1 text-xl text-[#103570] shadow" />
                <Instagram className="rounded-full bg-blue-100 p-1 text-xl text-[#103570] shadow" />
              </div>
            </div>

            {/* Right site  */}
            <div className="grid list-none grid-cols-2 gap-8 md:grid-cols-3">
              <div>
                <nav>
                  <h4 className="pb-4 text-xl font-semibold text-[#001C4A]">
                    Navigation
                  </h4>
                  <li className="text-sm font-normal text-[#335386]">
                    <Link href="#">Service</Link>
                  </li>
                  <li className="text-sm font-normal text-[#335386]">
                    <Link href="#">Agency</Link>
                  </li>
                  <li className="text-sm font-normal text-[#335386]">
                    <Link href="#">Case Study</Link>
                  </li>
                  <li className="text-sm font-normal text-[#335386]">
                    <Link href="#">Resource</Link>
                  </li>
                  <li className="text-sm font-normal text-[#335386]">
                    <Link href="#">Contact</Link>
                  </li>
                </nav>
              </div>
              <div>
                <nav>
                  <h4 className="pb-4 text-xl font-semibold text-[#001C4A]">
                    Licence
                  </h4>
                  <li className="text-sm text-[#335386]">
                    <Link href="#">Privacy Policy</Link>
                  </li>
                  <li className="text-sm text-[#335386]">
                    <Link href="#">Copyright</Link>
                  </li>
                  <li className="text-sm text-[#335386]">
                    <Link href="#">Email Address</Link>
                  </li>
                </nav>
              </div>
              <div>
                <nav>
                  <h4 className="pb-4 text-xl font-semibold text-[#001C4A]">
                    Navigation
                  </h4>
                  <li>
                    <Link href="#">
                      <p className="inline-flex gap-1 text-sm text-[#335386]">
                        <Phone className="text-md text-[#103570]" />
                        (406) 555-0120
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <p className="inline-flex gap-1 text-sm text-[#335386]">
                        <Mail className="text-md text-[#103570]" />
                        Hey@boostim.com
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <p className="inline-flex gap-1 text-sm text-[#335386]">
                        <MapPin className="text-md text-[#103570]" size={50} />
                        2972 Westheimer Rd. Santa Ana, Illinois 85486
                      </p>
                    </Link>
                  </li>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
