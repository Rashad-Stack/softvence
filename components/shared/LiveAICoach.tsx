import { Badge } from "../ui/badge";
import CoachingForm from "./CoachingForm";

export default function LiveAICoach() {
  return (
    <section className="bg-gradient-to-r from-[#0f3572] to-[#014fcd]">
      <div className="container mx-auto max-w-7xl py-6">
        <span className="text-lg text-[#FCE38A]">Live Ai Coach</span>
        <h1 className="my-4 text-4xl text-white">Take a Suggestion Coaching</h1>
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <div className="rounded-t-lg bg-[#fefeff] px-2 py-4">
              <h1 className="text-lg font-bold">AI Sales Coach</h1>
            </div>
            <div className="h-96 overflow-y-auto bg-[#f2f3f3]"></div>
            <div className="rounded-b-lg bg-[#fefeff] px-2 py-4">
              <div className="flex gap-3">
                <Badge variant="secondary" className="text-xs text-[#002868]">
                  How do I handle objections?
                </Badge>
                <Badge variant="secondary" className="text-xs text-[#002868]">
                  Give me a cold email templat
                </Badge>
                <Badge variant="secondary" className="text-xs text-[#002868]">
                  Closing techniques
                </Badge>
                <Badge variant="secondary" className="text-xs text-[#002868]">
                  Negotiation tips
                </Badge>
              </div>
              <CoachingForm />
            </div>
          </div>
          <div className="flex flex-1 items-center justify-between gap-4">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
