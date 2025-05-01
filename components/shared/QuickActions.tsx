import { MessageCircleMore, NotepadTextDashed } from "lucide-react";

export default function QuickActions() {
  return (
    <div className="w-full flex-1 rounded-lg bg-[#f2f3f3] p-8">
      <h1 className="text-start text-2xl font-bold text-[#002868]">
        Quick Actions
      </h1>
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="mt-4 flex-1 rounded-lg bg-white p-4">
          <span className="">
            <NotepadTextDashed className="h-6 w-6" />
            <span className="text-sm font-semibold text-[#002868]">
              Generate Script
            </span>
          </span>
        </div>
        <div className="mt-4 flex-1 rounded-lg bg-white p-4">
          <span className="">
            <MessageCircleMore className="h-6 w-6" />
            <span className="text-sm font-semibold text-[#002868]">
              Practice Pitch
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
