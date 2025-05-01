import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

type CardProps = React.ComponentProps<typeof Card>;

export default function OurCourses({ className, ...props }: CardProps) {
  return (
    <section className="bg-[#fafafa]">
      <div className="container mx-auto max-w-7xl py-6 max-lg:px-4">
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <div>
            <h1 className="my-4 text-5xl font-semibold text-[#262626]">
              Our Courses
            </h1>
            <p className="text-lg text-[#59595A]">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. <br /> Cras eu sit dignissim lorem nibh
              et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <Button className="cursor-pointer rounded-sm bg-[#002868] py-3 text-sm font-medium text-white max-md:w-full">
            <Link href="/">View All</Link>
          </Button>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center gap-6 sm:flex-row">
          {/* card-1  */}
          <Card className={cn("flex-1 bg-[#F0F0F0]", className)} {...props}>
            <CardHeader>
              <div>
                <Image
                  src="/course1.svg"
                  alt="Web Design Fundamentals "
                  width={400}
                  height={300}
                  className="w-full"
                />
              </div>
            </CardHeader>
            <CardContent className="">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex gap-2">
                  <Button className="cursor-pointer border bg-white text-sm font-medium text-[#989898] shadow hover:text-white">
                    4 Weeks
                  </Button>
                  <Button className="cursor-pointer border bg-white text-sm font-medium text-[#989898] shadow hover:text-white">
                    Beginner
                  </Button>
                </div>
                <p className="text-[#989898]">By Jhon Smith</p>
              </div>
              <div className="pt-6">
                <CardTitle>
                  <h3 className="pb-4 text-xl font-semibold text-[#262626]">
                    Web Design Fundamentals
                  </h3>
                </CardTitle>
                <CardDescription>
                  <p>
                    Get started on your journey to becoming a web designer! This
                    beginner-friendly course introduces you to the core concepts
                    of web design, including layout principles, typography,
                    color theory, and responsive design.
                  </p>
                </CardDescription>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#002868] py-6">Get it Now</Button>
            </CardFooter>
          </Card>

          {/* card-2  */}
          <Card className={cn("flex-1 bg-[#F0F0F0]", className)} {...props}>
            <CardHeader>
              <div>
                <Image
                  src="/course2.svg"
                  alt="Web Design Fundamentals "
                  width={400}
                  height={300}
                  className="w-full"
                />
              </div>
            </CardHeader>
            <CardContent className="">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex gap-2">
                  <Button className="cursor-pointer border bg-white text-sm font-medium text-[#989898] shadow hover:text-white">
                    4 Weeks
                  </Button>
                  <Button className="cursor-pointer border bg-white text-sm font-medium text-[#989898] shadow hover:text-white">
                    Beginner
                  </Button>
                </div>
                <p className="text-[#989898]">By Jhon Smith</p>
              </div>
              <div className="pt-6">
                <CardTitle>
                  <h3 className="pb-4 text-xl font-semibold text-[#262626]">
                    Web Design Fundamentals
                  </h3>
                </CardTitle>
                <CardDescription>
                  <p>
                    Get started on your journey to becoming a web designer! This
                    beginner-friendly course introduces you to the core concepts
                    of web design, including layout principles, typography,
                    color theory, and responsive design.
                  </p>
                </CardDescription>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#002868] py-6">Get it Now</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
