"use client"

import { Code2, Palette, Rocket } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Design",
    description:
      "We create stunning, modern designs that capture your brand identity and engage your visitors.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code2,
    title: "Develop",
    description:
      "We build fast, responsive websites using the latest technologies for optimal performance.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "We handle deployment, testing, and optimization to ensure your website is ready for success.",
    gradient: "from-accent to-pink-500",
  },
]

function Floating3DDecor() {
  return (
    <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-40 hidden xl:block pointer-events-none">
      <div className="relative w-full h-full perspective-1000">
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 animate-float-slow">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border border-primary/30 animate-spin-slow" />
          {/* Inner ring */}
          <div className="absolute inset-12 rounded-full border border-accent/20 animate-spin-reverse" />
          {/* Center glow */}
          <div className="absolute inset-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl animate-pulse" />
          {/* Floating dots */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-float-particle" />
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-accent rounded-full animate-float-particle-delayed" />
          <div className="absolute top-1/2 right-0 w-4 h-4 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse" />
        </div>
      </div>
      
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-slow 15s linear infinite reverse;
        }
        @keyframes float-particle {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(-15px); opacity: 1; }
        }
        .animate-float-particle {
          animation: float-particle 3s ease-in-out infinite;
        }
        .animate-float-particle-delayed {
          animation: float-particle 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </div>
  )
}

export function WhatWeDoSection() {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background 3D Element - Decorative Floating Shape */}
      <Floating3DDecor />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-medium uppercase tracking-wider glass px-4 py-2 rounded-full mb-4">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Websites Built for{" "}
            <span className="text-gradient">Your Success</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            We design and build websites for businesses. You tell us your needs,
            and we create a complete website for you.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group glass-card p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-3 hover:glow-primary relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-accent/5" />
              
              {/* Floating particles on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <div className="absolute top-4 right-4 w-1 h-1 bg-primary rounded-full animate-ping" />
                <div className="absolute bottom-8 left-8 w-1 h-1 bg-accent rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
              </div>

              <div className="relative z-10">
                {/* Icon with 3D-like effect */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-primary/20`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-gradient transition-all">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Step Number */}
                <div className="absolute top-6 right-6 text-6xl font-bold text-white/[0.03] group-hover:text-primary/10 transition-colors duration-500">
                  0{index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
