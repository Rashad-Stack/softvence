import { ChartArea, CircleCheck } from "lucide-react";
import { Progress } from "../ui/progress";

export default function Analysis() {
  return (
    <div className="w-full rounded-lg bg-[#f2f3f3] p-8">
      <h1 className="text-start text-2xl font-bold text-[#002868]">
        Real-time Analysis
      </h1>
      <div className="mt-4 flex flex-col items-start justify-between space-y-4 rounded-lg bg-white p-4">
        <span className="flex items-center gap-1">
          <CircleCheck className="h-6 w-6 text-white" fill="#06b217" />
          <span className="text-lg font-semibold text-[#002868]">
            Confidence Level
          </span>
        </span>
        <div className="flex w-full items-center justify-between gap-3">
          {/* Add class to change the indicator color */}
          <Progress
            value={60}
            className="[&>[data-slot=progress-indicator]]:bg-[#06b217]"
          />
          <span className="text-sm text-[#002868]">60%</span>
        </div>
      </div>

      <div className="mt-4 flex flex-col items-start justify-between space-y-4 rounded-lg bg-white p-4">
        <span className="flex items-center gap-1">
          <ChartArea className="h-6 w-6 text-white" fill="#06b217" />
          <span className="text-lg font-semibold text-[#002868]">
            Confidence Level
          </span>
        </span>
        <span className="text-sm text-[#909090]">
          85% improvement in objection handling
        </span>
      </div>
    </div>
  );
}
