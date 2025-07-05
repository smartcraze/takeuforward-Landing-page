"use client"

import type React from "react"

import { useState } from "react"
import {
  BookOpen,
  Server,
  Lightbulb,
  Sparkles,
  BrainCircuit,
  TestTubes,
  ClipboardList,
  Database,
  Network,
  Code2,
  Target,
  Calculator,
  MessageSquare,
  Crown,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Type definitions
interface CourseItem {
  title: string
  topics?: string
  contests?: string
  problems?: string
  description: string
  icon: React.ReactNode
}

interface TabData {
  [key: string]: CourseItem[]
}

interface TabConfig {
  name: string
  isNew?: boolean
}

// Configuration for tabs
const tabsConfig: TabConfig[] = [
  { name: "DSA" },
  { name: "Premium", isNew: true },
  { name: "Core Subjects" },
  { name: "System Design", isNew: true },
  { name: "Aptitude", isNew: true },
]

// Course data with improved icons
const tabData: TabData = {
  DSA: [
    {
      title: "DSA",
      topics: "19+ Topics",
      contests: "16+ Contests",
      problems: "473+ Problems",
      description: "Designed for beginners as well as experts to prepare DSA",
      icon: <Code2 className="w-12 h-12 text-cyan-500" />,
    },
    {
      title: "DSA (Concept Revision)",
      topics: "40+ Topics",
      problems: "199+ Problems",
      description: "Suitable for people looking to study concepts for similar kind of problems",
      icon: <Lightbulb className="w-12 h-12 text-yellow-500" />,
    },
    {
      title: "DSA (Quick Revision)",
      topics: "10+ Topics",
      problems: "79+ Problems",
      description: "Suitable to bump up your last moment confidence with quick revision",
      icon: <Target className="w-12 h-12 text-orange-500" />,
    },
  ],
  Premium: [
    {
      title: "Premium Plan",
      topics: "All Tracks Unlocked",
      contests: "Live Mentorship",
      problems: "Exclusive Doubt Support",
      description: "Access advanced content, biweekly live sessions, and AI doubt assistant.",
      icon: <Crown className="w-12 h-12 text-amber-500" />,
    },
  ],
  "Core Subjects": [
    {
      title: "Operating Systems",
      topics: "10+ Modules",
      problems: "50+ Questions",
      description: "Understand processes, memory, and scheduling from basics to GATE level.",
      icon: <Server className="w-12 h-12 text-indigo-500" />,
    },
    {
      title: "DBMS",
      topics: "8+ Modules",
      problems: "45+ Questions",
      description: "Learn ER models, normalization, and transactions with visual examples.",
      icon: <Database className="w-12 h-12 text-green-500" />,
    },
    {
      title: "Computer Networks",
      topics: "9+ Modules",
      problems: "40+ Questions",
      description: "Everything from OSI layers to TCP/IP with animations and mock tests.",
      icon: <Network className="w-12 h-12 text-blue-500" />,
    },
  ],
  "System Design": [
    {
      title: "System Design (Beginner)",
      topics: "10+ Topics",
      problems: "Low-Level + HLD",
      description: "Start your system design journey with real-world examples and patterns.",
      icon: <Sparkles className="w-12 h-12 text-purple-500" />,
    },
    {
      title: "Object-Oriented Programming",
      topics: "8+ Topics",
      problems: "50+ Problems",
      description: "Master OOP concepts with practical examples and exercises.",
      icon: <ClipboardList className="w-12 h-12 text-teal-500" />,
    },
  ],
  Aptitude: [
    {
      title: "Logical Reasoning",
      topics: "13+ Topics",
      problems: "720+ Problems",
      description: "Widely thought of college grads/professionals covering basic to advance topics",
      icon: <BrainCircuit className="w-12 h-12 text-rose-500" />,
    },
    {
      title: "Mock Test",
      topics: "3+ Topics",
      problems: "1500+ Problems",
      description: "Practice tests to evaluate your preparation and performance",
      icon: <TestTubes className="w-12 h-12 text-emerald-500" />,
    },
    {
      title: "Quantitative Aptitude",
      topics: "25+ Topics",
      problems: "1500+ Problems",
      description: "Widely thought of college grads/professionals covering basic to advance topics",
      icon: <Calculator className="w-12 h-12 text-violet-500" />,
    },
    {
      title: "Verbal Ability",
      topics: "8+ Topics",
      problems: "480+ Problems",
      description: "Widely thought of college grads/professionals covering basic to advance topics",
      icon: <MessageSquare className="w-12 h-12 text-pink-500" />,
    },
  ],
}

// Feature item component for better reusability
const FeatureItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-center gap-2 text-sm text-muted-foreground">
    <span className="text-green-500">✓</span>
    {children}
  </li>
)

// Course card component with consistent height
const CourseCard: React.FC<{ item: CourseItem }> = ({ item }) => (
  <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-border h-full flex flex-col">
    <CardHeader className="text-center pb-4">
      <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        {item.icon}
      </div>
      <CardTitle className="text-lg font-semibold leading-tight">{item.title}</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col flex-1 space-y-4">
      <ul className="space-y-2">
        {item.topics && <FeatureItem>{item.topics}</FeatureItem>}
        {item.contests && <FeatureItem>{item.contests}</FeatureItem>}
        {item.problems && <FeatureItem>{item.problems}</FeatureItem>}
      </ul>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.description}</p>
      <Button
        variant="outline"
        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent mt-auto"
      >
        <BookOpen className="w-4 h-4 mr-2" />
        View Syllabus
      </Button>
    </CardContent>
  </Card>
)

export default function SyllabusTabs() {
  const [activeTab, setActiveTab] = useState<string>("DSA")

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 dark:bg-black ">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight mb-2">Everything You Need to Crack Interviews 💪</h2>
        <p className="text-muted-foreground">Choose your learning path and start your journey</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="grid w-full max-w-2xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1 h-auto p-1">
            {tabsConfig.map((tab) => (
              <TabsTrigger
                key={tab.name}
                value={tab.name}
                className="relative px-3 py-2 text-xs sm:text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <span className="truncate">{tab.name}</span>
                {tab.isNew && (
                  <Badge
                    variant="secondary"
                    className="absolute -top-2 -right-2 text-xs px-1.5 py-0.5 bg-orange-500 text-white border-0"
                  >
                    New
                  </Badge>
                )}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {tabsConfig.map((tab) => (
          <TabsContent key={tab.name} value={tab.name} className="mt-6">
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
              {tabData[tab.name]?.map((item, idx) => (
                <div
                  key={`${tab.name}-${idx}`}
                  className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)] max-w-sm flex"
                >
                  <CourseCard item={item} />
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
