import { Alert, AlertDescription } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import Markdown from "react-markdown"; // Import the library
import remarkGfm from "remark-gfm";

type IMessage = {
  picture: string;
  message: string;
  ai: boolean;
};

export default function Message({ picture, message, ai }: IMessage) {
  return (
    <div
      className={clsx(
        "flex w-full items-start gap-4",
        ai ? "" : "flex-row-reverse",
      )}
    >
      <Avatar>
        <AvatarImage src={picture} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <Alert className={cn(ai ? "" : "text-right", "w-fit")}>
        <AlertDescription>
          {/* Use ReactMarkdown to render the message content */}
          {message && (
            <Markdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
              {message}
            </Markdown>
          )}
        </AlertDescription>
      </Alert>
    </div>
  );
}
