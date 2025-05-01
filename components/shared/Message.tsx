import { Alert, AlertDescription } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import clsx from "clsx";
import ReactMarkdown from "react-markdown"; // Import the library

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

      <Alert>
        <AlertDescription className={clsx(ai ? "" : "text-right")}>
          {/* Use ReactMarkdown to render the message content */}
          <ReactMarkdown>{message}</ReactMarkdown>
        </AlertDescription>
      </Alert>
    </div>
  );
}
