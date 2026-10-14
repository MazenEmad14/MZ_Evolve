import { Metadata } from "next";
import { ProjectEstimator } from "@/components/estimator/ProjectEstimator";

export const metadata: Metadata = {
  title: "Project Scope & Effort Estimator",
  description:
    "Interactively calculate architectural scope, required modules, team composition, and delivery milestones for your upcoming AI or software platform.",
};

export default function EstimatorPage() {
  return (
    <div className="min-h-screen bg-[#111413] text-white">
      <ProjectEstimator />
    </div>
  );
}
