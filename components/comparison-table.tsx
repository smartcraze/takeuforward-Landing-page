"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Check, X, BadgeCheck, BadgeCheckIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ComparisonFeature {
    feature: string
    tuf: string
    others: string
}

const comparisonData: ComparisonFeature[] = [
    {
        feature: "DSA (Basics to Advanced)",
        tuf: "Yes (Curated list of beginners with practice set)",
        others: "Yes",
    },
    {
        feature: "Live Content",
        tuf: "No (Too crowded and chaotic)",
        others: "Yes",
    },
    {
        feature: "Recorded Content",
        tuf: "Yes (Broken down to smaller parts to save time)",
        others: "Yes",
    },
    {
        feature: "DSA (Pattern Wise)",
        tuf: "Yes",
        others: "No",
    },
    {
        feature: "1000+ Practice Problems",
        tuf: "Yes",
        others: "No (Apart from very few)",
    },
    {
        feature: "Customised Roadmap",
        tuf: "Yes",
        others: "No",
    },
    {
        feature: "Course + Platform",
        tuf: "Yes",
        others: "No (Apart from few dead ones)",
    },
    {
        feature: "Notes Downloader to Google Docs",
        tuf: "Yes",
        others: "No",
    },
    {
        feature: "Lifetime Validity",
        tuf: "Yes",
        others: "No",
    },
    {
        feature: "Single subscription for all",
        tuf: "Yes",
        others: "No (Buy individual courses)",
    },
    {
        feature: "Placement Assistance",
        tuf: "No",
        others: "Yes (Mostly false promises)",
    },
    {
        feature: "Premium Problems",
        tuf: "Yes",
        others: "No (Only one with extremely high cost)",
    },
    {
        feature: "Interview Follow-up Questions",
        tuf: "Yes",
        others: "No",
    },
    {
        feature: "Frequently Occuring Doubts",
        tuf: "Yes",
        others: "No",
    },
    {
        feature: "End to End Platform Experience",
        tuf: "Yes",
        others: "No",
    },
    {
        feature: "OOPS with Practice Problems",
        tuf: "Yes",
        others: "Yes (Only videos) (Separate Course)",
    },
    {
        feature: "LLD with Practice Problems",
        tuf: "Yes",
        others: "Yes (Only videos) (Separate Course)",
    },
    {
        feature: "Code Reviewer",
        tuf: "Yes",
        others: "No",
    },
]


const ResponseCell = ({ response }: { response: string }) => {
    const isYes = response.toLowerCase().startsWith("yes")
    const isNo = response.toLowerCase().startsWith("no")
    const additionalText = response.replace(/^(yes|no)\s*/i, "").trim()

    return (
        <div className="flex items-center justify-center gap-2 text-sm text-foreground text-left">
            {isYes && (
                <>
                    <BadgeCheck className="w-4 h-4 text-green-500" />
                    {additionalText && <span className="text-muted-foreground">{additionalText}</span>}
                </>
            )}
            {isNo && (
                <>
                    <BadgeCheck className="w-4 h-4 text-red-500" />
                    {additionalText && <span className="text-muted-foreground">{additionalText}</span>}
                </>
            )}
            {!isYes && !isNo && <span className="text-muted-foreground">{response}</span>}
        </div>
    )
}

export default function ComparisonTable() {
    const [showAll, setShowAll] = useState(false)
    const displayedData = showAll ? comparisonData : comparisonData.slice(0, 8)

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-10">
            <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg">
                {/* Header */}
                <div className="grid grid-cols-1 sm:grid-cols-3 items-center bg-muted rounded-xl mb-6 py-6 px-4 sm:px-6">
                    <div className="text-foreground font-semibold text-base sm:text-lg text-center sm:text-left mb-4 sm:mb-0">
                        Features
                    </div>
                    <div className="flex justify-center">
                        {/* Dark mode logo */}
                        <Image
                            src="/tufplus.png"
                            alt="TUF Logo (Dark)"
                            width={100}
                            height={40}
                            className="object-contain hidden dark:block"
                        />
                        {/* Light mode logo */}
                        <Image
                            src="/tufplus-black.png"
                            alt="TUF Logo (Light)"
                            width={100}
                            height={40}
                            className="object-contain block dark:hidden"
                        />
                    </div>

                    <div className="text-foreground font-semibold text-base sm:text-lg text-center sm:text-right mt-4 sm:mt-0">
                        Other Platforms
                    </div>
                </div>

                {/* Feature Rows */}
                <div className="space-y-2">
                    {displayedData.map((item, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 text-sm"
                        >
                            <div className="text-left text-foreground">{item.feature}</div>
                            <div className="text-center">
                                <ResponseCell response={item.tuf} />
                            </div>
                            <div className="text-right">
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
                                Show Less
                                <ChevronUp className="ml-2 w-4 h-4" />
                            </>
                        ) : (
                            <>
                                Show More
                                <ChevronDown className="ml-2 w-4 h-4" />
                            </>
                        )}
                    </Button>
                </div>
            </div>
        </div>
    )
}
