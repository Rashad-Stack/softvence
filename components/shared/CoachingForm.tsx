"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { getCoachingStream } from "@/lib/actions/chat.action";
import { ArrowUp } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Badge } from "../ui/badge";

// Define the message structure expected by the state setter
interface IMessages {
  picture: string; // URL or identifier for the avatar
  message: string;
  ai: boolean;
}

const formSchema = z.object({
  message: z.string().min(2, {
    message: "message must be at least 2 characters long",
  }),
});

export default function CoachingForm({
  setMessages,
}: {
  setMessages: Dispatch<SetStateAction<IMessages[]>>;
}) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // TODO: Handle the streaming response and update messages state
      // For now, just logging the action call

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          picture: "https://github.com/shadcn.png",
          message: values.message,
          ai: false,
        },
      ]);

      const response = await getCoachingStream({ message: values.message }); // You'll need to adapt this to
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          picture: "https://github.com/shadcn.png",
          message: response!,
          ai: true,
        },
      ]);
      form.reset();
    } catch (error) {
      console.error("Error in onSubmit:", error);
    }
  }

  return (
    <>
      <div className="flex gap-3">
        <Badge
          variant="secondary"
          className="cursor-pointer text-xs text-[#002868]"
          onClick={() => onSubmit({ message: "How do I handle objections?" })}
        >
          How do I handle objections?
        </Badge>
        <Badge
          variant="secondary"
          className="cursor-pointer text-xs text-[#002868]"
          onClick={() => onSubmit({ message: " Give me a cold email templat" })}
        >
          Give me a cold email templat
        </Badge>
        <Badge
          variant="secondary"
          className="cursor-pointer text-xs text-[#002868]"
          onClick={() => onSubmit({ message: "Closing techniques" })}
        >
          Closing techniques
        </Badge>
        <Badge
          variant="secondary"
          className="cursor-pointer text-xs text-[#002868]"
          onClick={() => onSubmit({ message: "Negotiation tips" })}
        >
          Negotiation tips
        </Badge>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-5 flex w-full gap-2"
        >
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input placeholder="Ask anything you need" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="bg-[#002868]"
          >
            <span>Send</span> <ArrowUp className="h-4 w-4" />
          </Button>
        </form>
      </Form>
    </>
  );
}
