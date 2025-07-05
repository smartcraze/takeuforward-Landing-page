"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ComparisonFeature {
  feature: string;
  tuf: string;
  others: string;
}

const comparisonData: ComparisonFeature[] = [
  { feature: "DSA (Basics to Advanced)", tuf: "Yes (Curated list of beginners with practice set)", others: "Yes" },
  { feature: "Live Content", tuf: "No (Too crowded and chaotic)", others: "Yes" },
  { feature: "Recorded Content", tuf: "Yes (Broken down to smaller parts to save time)", others: "Yes" },
  { feature: "DSA (Pattern Wise)", tuf: "Yes", others: "No" },
  { feature: "1000+ Practice Problems", tuf: "Yes", others: "No (Apart from very few)" },
  { feature: "Customised Roadmap", tuf: "Yes", others: "No" },
  { feature: "Course + Platform", tuf: "Yes", others: "No (Apart from few dead ones)" },
  { feature: "Notes Downloader to Google Docs", tuf: "Yes", others: "No" },
  { feature: "Lifetime Validity", tuf: "Yes", others: "No" },
  { feature: "Single subscription for all", tuf: "Yes", others: "No (Buy individual courses)" },
  { feature: "Placement Assistance", tuf: "No", others: "Yes (Mostly false promises)" },
  { feature: "Premium Problems", tuf: "Yes", others: "No (Only one with extremely high cost)" },
  { feature: "Interview Follow-up Questions", tuf: "Yes", others: "No" },
  { feature: "Frequently Occuring Doubts", tuf: "Yes", others: "No" },
  { feature: "End to End Platform Experience", tuf: "Yes", others: "No" },
  { feature: "OOPS with Practice Problems", tuf: "Yes", others: "Yes (Only videos) (Separate Course)" },
  { feature: "LLD with Practice Problems", tuf: "Yes", others: "Yes (Only videos) (Separate Course)" },
  { feature: "Code Reviewer", tuf: "Yes", others: "No" },
];

const ResponseCell = ({ response }: { response: string }) => {
  const isYes = response.toLowerCase().startsWith("yes");
  const isNo = response.toLowerCase().startsWith("no");
  const additionalText = response.replace(/^(yes|no)\s*/i, "").trim();

  return (
    <div className="flex items-start gap-2 text-sm text-left">
      {isYes && (
        <>
          <BadgeCheck className="w-4 h-4 text-green-500 mt-1" />
          {additionalText && <span className="text-muted-foreground">{additionalText}</span>}
        </>
      )}
      {isNo && (
        <>
          <BadgeCheck className="w-4 h-4 text-red-500 mt-1" />
          {additionalText && <span className="text-muted-foreground">{additionalText}</span>}
        </>
      )}
      {!isYes && !isNo && <span className="text-muted-foreground">{response}</span>}
    </div>
  );
};

export default function ComparisonTable() {
  const [showAll, setShowAll] = useState(false);
  const displayedData = showAll ? comparisonData : comparisonData.slice(0, 8);

  return (
    <div className="w-full min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-card dark:bg-zinc-900 border border-border dark:border-zinc-800 rounded-2xl p-5 sm:p-8 shadow-lg">
          
          {/* Header (Hidden on Mobile) */}
          <div className="hidden sm:grid grid-cols-3 items-center bg-muted dark:bg-zinc-800 rounded-xl mb-6 py-6 px-6">
            <div className="text-foreground font-semibold text-lg text-left">Features</div>
            <div className="flex justify-center">
              <Image
                src="/tufplus.png"
                alt="TUF Logo (Dark)"
                width={100}
                height={40}
                className="object-contain hidden dark:block"
              />
              <Image
                src="/tufplus-black.png"
                alt="TUF Logo (Light)"
                width={100}
                height={40}
                className="object-contain block dark:hidden"
              />
            </div>
            <div className="text-foreground font-semibold text-lg text-right">Other Platforms</div>
          </div>

          {/* Feature Rows */}
          <div className="space-y-4">
            {displayedData.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 border border-border dark:border-zinc-800 rounded-xl bg-background dark:bg-zinc-950"
              >
                <div className="font-medium text-foreground text-base">{item.feature}</div>

                <div className="sm:text-center text-left">
                  <div className="sm:hidden text-xs font-semibold text-muted-foreground mb-1">TUF+</div>
                  <ResponseCell response={item.tuf} />
                </div>

                <div className="sm:text-right text-left">
                  <div className="sm:hidden text-xs font-semibold text-muted-foreground mb-1">Others</div>
                  <ResponseCell response={item.others} />
                </div>
              </div>
            ))}
          </div>

          {/* Toggle Button */}
          <div className="text-center mt-8">
            <Button
              onClick={() => setShowAll(!showAll)}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="ml-2 w-4 h-4" />
                </>
              ) : (
                <>
                  Show More <ChevronDown className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
