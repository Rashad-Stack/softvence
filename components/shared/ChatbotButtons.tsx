import {
  ClipboardList,
  RotateCcw,
  ThumbsDown,
  ThumbsUp,
  Volume2,
} from "lucide-react";

export default function ChatbotButtons() {
  return (
    <div className="flex flex-row gap-5 rounded-full bg-white px-4 py-4 max-sm:w-full max-sm:justify-center lg:flex-col lg:py-8">
      <RotateCcw className="h-4 w-4 text-[#002868]" />
      <ThumbsUp className="h-4 w-4 text-[#002868]" />
      <ThumbsDown className="h-4 w-4 text-[#002868]" />
      <ClipboardList className="h-4 w-4 text-[#002868]" />
      <Volume2 className="h-4 w-4 text-[#002868]" />
    </div>
  );
}
