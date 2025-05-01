import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Feedback() {
  return (
    <section>
      <div className="container mx-auto max-w-7xl py-6 max-xl:px-4">
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <h3 className="text-sm font-semibold text-[#010205] lg:text-xl">
                  “ They thoroughly analyze our industry and target audience,
                  allowing them to develop customized campaigns that effectively
                  reach and engage our customers. Their creative ideas and
                  cutting-edge techniques have helped us stay ahead of the
                  competition.”
                </h3>
                <div className="mt-5 flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    {/* You might want to use different images/data per item later */}
                    <AvatarImage src={""} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h1 className="text-lg font-bold text-[#010205]">
                      Michael Kaizer {index + 1} {/* Example dynamic content */}
                    </h1>
                    <span>CEO of Basecamp Corp</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
