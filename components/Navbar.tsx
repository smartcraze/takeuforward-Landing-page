"use client";
import React, { useState } from "react";
import { Code, BookOpen, Users, Menu as MenuIcon, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./Mode-toggler";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let dropdownTimeout: NodeJS.Timeout;

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <Image
            src="/tufplus.png"
            alt="Logo"
            width={100}
            height={40}
            className="hidden dark:block object-contain"
          />
          <Image
            src="/tufplus-black.png"
            alt="Logo"
            width={100}
            height={40}
            className="block dark:hidden object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 relative z-10">
          {/* Plus Dashboard */}
          <Link
            href="/plus-dashboard"
            className="bg-orange-500 text-white px-4 py-2 rounded-md font-medium hover:bg-orange-600 transition"
          >
            Plus Dashboard
          </Link>

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearTimeout(dropdownTimeout);
              setIsDropdownOpen(true);
            }}
            onMouseLeave={() => {
              dropdownTimeout = setTimeout(() => {
                setIsDropdownOpen(false);
              }, 150);
            }}
          >
            <button className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-orange-600 transition">
              Resources
            </button>

            {/* Dropdown Panel */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-lg shadow-lg p-4 space-y-4 z-50">
                <Link href="/web-dev" className="flex items-center gap-3 hover:text-orange-600 transition">
                  <Code className="w-4 h-4 text-blue-500" />
                  <div>
                    <div className="font-medium">Striver's DSA Sheet</div>
                    <p className="text-xs text-muted-foreground">Complete DSA for interviews</p>
                  </div>
                </Link>

                <Link href="/system-design" className="flex items-center gap-3 hover:text-orange-600 transition">
                  <BookOpen className="w-4 h-4 text-purple-500" />
                  <div>
                    <div className="font-medium">System Design Sheet</div>
                    <p className="text-xs text-muted-foreground">Design better systems</p>
                  </div>
                </Link>

                <Link href="/core-subjects" className="flex items-center gap-3 hover:text-orange-600 transition">
                  <BookOpen className="w-4 h-4 text-orange-500" />
                  <div>
                    <div className="font-medium">Core Subjects</div>
                    <p className="text-xs text-muted-foreground">Build strong fundamentals</p>
                  </div>
                </Link>

                <Link href="/interview-experiences" className="flex items-center gap-3 hover:text-orange-600 transition">
                  <Users className="w-4 h-4 text-green-500" />
                  <div className="flex items-center gap-2">
                    <div>
                      <div className="font-medium">Interview Experiences</div>
                      <p className="text-xs text-muted-foreground">Learn from others' journeys</p>
                    </div>
                    <span className="text-xs bg-orange-500 text-white px-1.5 py-0.5 rounded-md font-semibold">
                      New
                    </span>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <ModeToggle />
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-20 text-gray-700 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-4 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700 z-40">
          <Link
            href="/plus-dashboard"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition"
          >
            Plus Dashboard
          </Link>

          <Link href="/web-dev" className="block text-sm font-medium hover:text-orange-500 transition">Striver's DSA Sheet</Link>
          <Link href="/system-design" className="block text-sm font-medium hover:text-orange-500 transition">System Design Sheet</Link>
          <Link href="/core-subjects" className="block text-sm font-medium hover:text-orange-500 transition">Core Subjects</Link>
          <Link href="/interview-experiences" className="block text-sm font-medium hover:text-orange-500 transition">Interview Experiences</Link>

          <ModeToggle />
        </div>
      )}
    </header>
  );
}
