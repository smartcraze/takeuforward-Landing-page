"use client"

import Link from "next/link"
import { Github, Instagram, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full mt-20 border-t border-muted bg-background text-foreground px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        
        {/* Left Side: Name + Role */}
        <div>
          <h3 className="text-lg font-semibold">Suraj Vishwakarma</h3>
          <p className="text-sm text-muted-foreground">
            Fullstack Developer • B.Tech CSE @ LPU
          </p>
        </div>

        {/* Middle: Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-muted-foreground">
          <Link href="mailto:try.surajv@gmail.com" className="hover:text-foreground">
            dev.surajv@gmail.com
          </Link>
          <span className="hidden sm:inline">|</span>
          <Link href="/privacy-policy" className="hover:text-foreground">
            Privacy Policy
          </Link>
          <span className="hidden sm:inline">|</span>
          <Link href="/terms" className="hover:text-foreground">
            Terms & Conditions
          </Link>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex gap-4">
          <Link href="https://github.com/smartcraze" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://instagram.com/surajv354" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://twitter.com/surajv354" target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5 hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.5 8.5 0 0 1-2.7 1.03 4.26 4.26 0 0 0-7.32 3.89 12.1 12.1 0 0 1-8.78-4.45 4.26 4.26 0 0 0 1.32 5.68 4.23 4.23 0 0 1-1.93-.53v.05a4.26 4.26 0 0 0 3.42 4.18 4.3 4.3 0 0 1-1.92.07 4.27 4.27 0 0 0 3.98 2.96A8.54 8.54 0 0 1 2 19.55a12.1 12.1 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.38-.01-.57A8.63 8.63 0 0 0 24 5.64a8.5 8.5 0 0 1-2.54.7z"/>
            </svg>
          </Link>
          <Link href="https://www.linkedin.com/in/surajv354" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
