"use client";

import React from "react";
import {
  CheckCircle2,
  XCircle,
  Rocket,
  Target,
  Users,
  CalendarCheck,
  LucideBadgeCheck
} from "lucide-react";
import { cn } from "@/lib/utils";
import WhatsAppCTA from "./whatsapp";

const plans = [
  {
    name: "Sprint Plan",
    icon: <Target className="w-5 h-5 text-yellow-500" />,
    description: "Perfect for beginners starting their coding journey.",
    price: "₹4289.35",
    original: "₹8999",
    regular: "₹6599",
    discount: "27% OFF",
    coupon: "PAYDAY",
    validity: "12 Months",
    features: [
      { label: "All features", included: true },
      { label: "Only DSA, Core & Aptitude", included: true },
      { label: "AI Doubt Support", included: false },
      { label: "Biweekly Sessions", included: false },
      { label: "Code Review", included: false }
    ],
    button: "Buy Now @ ₹4289.35",
    highlighted: false
  },
  {
    name: "Pinnacle Plan",
    icon: <Rocket className="w-5 h-5 text-pink-600" />,
    description: "Go all in — with expert support & lifetime access.",
    price: "₹5928",
    original: "₹11999",
    regular: "₹9120",
    discount: "24% OFF",
    coupon: "PAYDAY",
    validity: "Lifetime",
    features: [
      { label: "All features", included: true },
      { label: "DSA, Core, Design & Aptitude", included: true },
      { label: "AI Doubt Support", included: true },
      { label: "Biweekly Sessions", included: true },
      { label: "Code Review", included: true }
    ],
    button: "Buy Now @ ₹5928",
    highlighted: true
  },
  {
    name: "Enterprise Plan",
    icon: <Users className="w-5 h-5 text-purple-600" />,
    description: "Perfect for a group of 30+ people looking for bulk discount.",
    price: "Custom Pricing",
    features: [
      { label: "All features of Pinnacle", included: true },
      { label: "Performance Dashboard", included: true },
      { label: "Centralized Billing & Licensing", included: true },
      { label: "Custom Curriculum", included: true },
      { label: "Exclusive Webinars & Industry Events", included: true },
      { label: "Batch Enrollment & Role Access", included: true }
    ],
    button: "Contact Us",
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <section className="w-full bg-white dark:bg-black py-16 px-4 sm:px-6 md:px-10 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Choose Your Plan
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2 max-w-md mx-auto">
          Start your learning journey with the right plan for you.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={cn(
              "relative rounded-xl border shadow-md p-6 sm:p-6 md:p-8 flex flex-col justify-between transition-all duration-300",
              plan.highlighted
                ? "bg-white dark:bg-zinc-900 border-orange-400 ring-2 ring-orange-400"
                : "bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
            )}
          >
            {/* Highlight Tag */}
            {plan.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs sm:text-sm font-semibold px-4 py-1 rounded-full shadow-md">
                Lifetime Validity
              </div>
            )}

            {/* Header */}
            <div className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2 mt-4">
              {plan.icon}
              {plan.name}
            </div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
              {plan.description}
            </p>

            {/* Pricing */}
            {plan.price !== "Custom Pricing" && (
              <div className="mb-4">
                <p className="text-gray-500 line-through text-xs sm:text-sm">
                  Original: {plan.original}
                </p>
                <p className="text-gray-700 dark:text-gray-100 text-sm sm:text-base">
                  Regular: {plan.regular}{" "}
                  <span className="text-green-600 text-sm font-semibold">
                    ({plan.discount})
                  </span>
                </p>
                <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-md px-4 py-2 font-semibold mt-2 text-sm sm:text-base">
                  Offer Price: {plan.price}
                  <p className="text-xs sm:text-sm">Coupon: {plan.coupon}</p>
                </div>
              </div>
            )}

            {/* Validity */}
            {plan.validity && (
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3">
                <CalendarCheck className="w-4 h-4" />
                Validity: {plan.validity}
              </div>
            )}

            {/* Feature List */}
            <ul className="space-y-2 mb-6">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  {f.included ? (
                    <LucideBadgeCheck className="text-green-500 w-4 h-4 mt-0.5" />
                  ) : (
                    <LucideBadgeCheck className="text-red-500 w-4 h-4 mt-0.5" />
                  )}
                  <span className="text-gray-800 dark:text-gray-200">
                    {f.label}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button
              className={cn(
                "w-full py-2 text-sm sm:text-base rounded-md font-semibold transition",
                plan.highlighted
                  ? "bg-orange-500 hover:bg-orange-600 text-white"
                  : "bg-gray-900 hover:bg-gray-800 text-white"
              )}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>

      {/* WhatsApp CTA */}
      <div className="mt-12">
        <WhatsAppCTA />
      </div>
    </section>
  );
}
