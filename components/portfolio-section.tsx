"use client"

import { ExternalLink, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "TechStart Solutions",
    category: "Business Website",
    description: "A modern corporate website for a tech startup, featuring clean design and intuitive navigation.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Bloom & Grow",
    category: "E-Commerce Landing",
    description: "High-converting landing page for a plant subscription service with seamless checkout integration.",
    gradient: "from-emerald-500 to-green-500",
    bgGradient: "from-emerald-500/20 to-green-500/20",
  },
  {
    title: "Fitness Pro Academy",
    category: "Service Website",
    description: "Dynamic website for a fitness coaching business with membership signup and scheduling features.",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/20 to-red-500/20",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-[10%] w-4 h-4 border border-primary/20 rounded rotate-45 animate-spin-slow" />
        <div className="absolute bottom-1/4 right-[15%] w-6 h-6 border border-accent/20 rounded-full animate-bounce-slow" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-medium uppercase tracking-wider glass px-4 py-2 rounded-full mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Our Recent{" "}
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Take a look at some of the websites we&apos;ve created for our clients.
            Each project is unique and tailored to the client&apos;s needs.
          </p>
        </div>

        {/* Projects Grid with 3D effects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group perspective-1000"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="glass-card overflow-hidden hover:glow-primary transition-all duration-500 preserve-3d group-hover:-translate-y-3 group-hover:rotate-x-[2deg]">
                {/* Project Preview - 3D Floating Browser */}
                <div className={`relative h-56 bg-gradient-to-br ${project.bgGradient} overflow-hidden`}>
                  {/* Ambient glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  {/* 3D Mock Browser UI */}
                  <div className="absolute inset-5 preserve-3d">
                    <div className="glass-card overflow-hidden group-hover:scale-105 group-hover:-translate-y-2 group-hover:rotate-y-[-3deg] transition-all duration-500 shadow-2xl h-full">
                      {/* Browser Header with realistic styling */}
                      <div className="h-8 bg-gradient-to-b from-white/15 to-white/5 flex items-center gap-2 px-4 border-b border-white/10">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400/80 group-hover:bg-red-400 transition-colors" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80 group-hover:bg-yellow-400 transition-colors" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-400/80 group-hover:bg-green-400 transition-colors" />
                        </div>
                        <div className="flex-1 mx-4">
                          <div className="h-4 bg-white/10 rounded-md flex items-center px-2">
                            <div className="w-3 h-3 rounded-full bg-white/20 mr-2" />
                            <div className="h-2 bg-white/20 rounded-sm flex-1" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Content Preview - More realistic layout */}
                      <div className="p-5 space-y-3">
                        {/* Hero section mock */}
                        <div className={`h-6 bg-gradient-to-r ${project.gradient} rounded-md w-2/3 opacity-30`} />
                        <div className="space-y-1.5">
                          <div className="h-2.5 bg-white/20 rounded w-full" />
                          <div className="h-2.5 bg-white/15 rounded w-4/5" />
                          <div className="h-2.5 bg-white/10 rounded w-3/5" />
                        </div>
                        <div className="flex gap-2 pt-2">
                          <div className={`h-7 w-20 bg-gradient-to-r ${project.gradient} rounded-md opacity-50`} />
                          <div className="h-7 w-20 bg-white/10 rounded-md border border-white/20" />
                        </div>
                        
                        {/* Feature cards mock */}
                        <div className="flex gap-2 pt-3">
                          <div className="flex-1 h-12 bg-white/5 rounded border border-white/10" />
                          <div className="flex-1 h-12 bg-white/5 rounded border border-white/10" />
                          <div className="flex-1 h-12 bg-white/5 rounded border border-white/10" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating shadow */}
                  <div className="absolute bottom-2 left-8 right-8 h-4 bg-black/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                </div>

                {/* Project Info */}
                <div className="p-6 relative">
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer pointer-events-none" />
                  
                  <span className={`inline-block text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent border border-white/10`}>
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mt-3 mb-3 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent group/btn"
                  >
                    View Project
                    <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          0% { transform: rotate(45deg); }
          100% { transform: rotate(405deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-x-\\[2deg\\] {
          transform: rotateX(2deg);
        }
        .rotate-y-\\[-3deg\\] {
          transform: rotateY(-3deg);
        }
      `}</style>
    </section>
  )
}
