import React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { ListTodo, Sparkles } from "lucide-react";

export default function Features() {
    return (
        <section className="w-full bg-white dark:bg-black py-20 px-4 md:px-10 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

                <div className="w-full lg:w-1/2">
                    <CardSpotlight className="w-full h-auto p-6 md:p-10">
                        <p className="text-2xl font-bold relative z-20 mt-2 text-white">
                            Built to save your time and effort
                        </p>
                        <div className="text-neutral-200 mt-4 relative z-20">
                            <ul className="list-none mt-2 space-y-3">
                                <Step title="Curated syllabus for every subject" />
                                <Step title="Company-specific prep & premium questions" />
                                <Step title="Syllabus, Features, Plans, Reviews & more" />
                                <Step title="No context switching, everything you need, nothing you don’t" />
                            </ul>
                        </div>
                        <p className="text-neutral-300 mt-6 relative z-20 text-sm">
                            A streamlined experience tailored for serious learners.
                        </p>
                    </CardSpotlight>
                </div>

               <div className="w-full flex justify-center px-4">
      <div className="p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-700 shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(255,255,255,0.05)] max-w-3xl w-full">
        
        {/* Heading with Icon */}
        <h2 className="flex items-center justify-center gap-2 text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-3">
          <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          100+ Beginner Problems
        </h2>
        
        {/* Video */}
        <video
          src="/showcase.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full rounded-xl border border-gray-300 dark:border-gray-600 shadow-lg"
        />
      </div>
    </div>

            </div>
        </section>
    );
}

// Step List Item Component
const Step = ({ title }: { title: string }) => (
    <li className="flex gap-2 items-start">
        <CheckIcon />
        <p className="text-white text-base">{title}</p>
    </li>
);

// Check Icon Component
const CheckIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4 text-blue-500 mt-1 shrink-0"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
            d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
            fill="currentColor"
            strokeWidth="0"
        />
    </svg>
);
