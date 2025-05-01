import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="my-8 bg-[F6F6F6] lg:my-15">
      <div className="container mx-auto max-w-7xl py-6 max-lg:px-4">
        <h4 className="text-lg font-normal text-[#001C4A] max-md:mb-3 md:text-[24px]">
          Frequently asked
          <br />
          questions
        </h4>

        <h2 className="mx-auto max-w-3xl text-center text-2xl leading-relaxed font-normal text-[#262626] md:text-center md:text-5xl">
          Cnstant collaboration is how we roll. Les&apos;s see if we are a good
          fit.
        </h2>

        <Accordion type="single" collapsible className="mt-5 w-full md:mt-10">
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex justify-between text-lg font-normal md:text-xl">
              <div>
                <span className="mr-2 font-semibold text-[#9A8C64]">01</span>
                Why should I choose Humestic?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Bottleneck mice my capacity is full, nor incentivization we need
              to start advertising on social media, or helicopter view, for what
              the. Let&apos;s put a pin in that we need to build it so that it
              scales, are there any leftovers in the kitchen?, if you&apos;re
              not hurting you&apos;re not winning loop back.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="flex justify-between text-lg font-normal md:text-xl">
              <div>
                <span className="mr-2 font-semibold text-[#9A8C64]">02</span>I
                like your works, how do we start a project?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Bottleneck mice my capacity is full, nor incentivization we need
              to start advertising on social media, or helicopter view, for what
              the. Let&apos;s put a pin in that we need to build it so that it
              scales, are there any leftovers in the kitchen?, if you&apos;re
              not hurting you&apos;re not winning loop back.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="flex justify-between text-lg font-normal md:text-xl">
              <div>
                <span className="mr-2 font-semibold text-[#9A8C64]">03</span>
                What info is required to get a quotation?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              1. Product or Service Details – What exactly are you requesting a
              quote for? 2. Quantity – How many units or how much service do you
              need? 3. Specifications or Requirements – Size, features,
              materials, customization, etc. 4. Delivery Location – Where should
              it be shipped or delivered? 5. Timeline – When do you need it
              (delivery or completion date)? 6. Contact Information – Your name,
              email, and phone number.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
