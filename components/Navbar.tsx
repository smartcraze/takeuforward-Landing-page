"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./Mode-toggler";
import {
    Code,
    BookOpen,

    Users,
} from "lucide-react";

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-4" />
            <p className="text-black dark:text-white"></p>
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className={cn("fixed top-6 inset-x-0 max-w-5xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <div className="flex items-center justify-between w-full px-4">
                    <div className="relative ">
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


                    <div className="flex items-center space-x-6">
                        <Link
                            href="/plus-dashboard"
                            className="inline-flex items-center justify-center rounded-md 
             bg-orange-500 text-white 
             dark:bg-gray-800 dark:text-white 
             px-4 py-2 text-sm font-semibold shadow-sm 
             transition-colors hover:bg-orange-600 dark:hover:bg-gray-700"
                        >
                            Plus Dashboard
                        </Link>

                        <MenuItem setActive={setActive} active={active} item="Resources">
                            <div className="flex flex-col space-y-3 text-sm">
                                <HoveredLink href="/web-dev">
                                    <div className="flex items-center gap-3">
                                        <Code className="h-4 w-4 text-blue-500" />
                                        <div>
                                            <div className="font-medium">Striver's DSA Sheet</div>
                                            <div className="text-xs text-muted-foreground">Complete DSA for interviews</div>
                                        </div>
                                    </div>
                                </HoveredLink>

                                <HoveredLink href="/system-design">
                                    <div className="flex items-center gap-3">
                                        <BookOpen className="h-4 w-4 text-purple-500" />
                                        <div>
                                            <div className="font-medium">System Design Sheet</div>
                                            <div className="text-xs text-muted-foreground">Design better systems</div>
                                        </div>
                                    </div>
                                </HoveredLink>

                                <HoveredLink href="/core-subjects">
                                    <div className="flex items-center gap-3">
                                        <BookOpen className="h-4 w-4 text-orange-500" />
                                        <div>
                                            <div className="font-medium">Core Subjects</div>
                                            <div className="text-xs text-muted-foreground">Build strong fundamentals</div>
                                        </div>
                                    </div>
                                </HoveredLink>

                                <HoveredLink href="/interview-experiences">
                                    <div className="flex items-center gap-3">
                                        <Users className="h-4 w-4 text-green-500" />
                                        <div className="flex items-center gap-2">
                                            <div>
                                                <div className="font-medium">Interview Experiences</div>
                                                <div className="text-xs text-muted-foreground">Learn from others' journeys</div>
                                            </div>
                                            <span className="ml-1 text-xs font-semibold text-white bg-orange-500 px-1.5 py-0.5 rounded-md">
                                                New
                                            </span>
                                        </div>
                                    </div>
                                </HoveredLink>
                            </div>
                        </MenuItem>


                        <ModeToggle />
                    </div>
                </div>
            </Menu>
        </div>
    );
}
