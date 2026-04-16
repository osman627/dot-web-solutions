"use client"

import { MessageSquare, Lightbulb, Code, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Contact Us",
    description: "Reach out via our contact form or WhatsApp to discuss your project.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "We Understand Your Needs",
    description: "We learn about your business, goals, and design preferences.",
    color: "from-primary to-blue-500",
  },
  {
    icon: Code,
    step: "03",
    title: "We Design & Build",
    description: "Our team creates your custom website with regular updates and feedback rounds.",
    color: "from-accent to-primary",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Delivery & Support",
    description: "We launch your website and provide ongoing support to ensure everything runs smoothly.",
    color: "from-pink-500 to-accent",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating particles */}
        <div className="absolute top-1/3 left-[10%] w-2 h-2 bg-primary/30 rounded-full animate-float-particle" />
        <div className="absolute top-2/3 right-[15%] w-3 h-3 bg-accent/30 rounded-full animate-float-particle-delayed" />
        <div className="absolute bottom-1/4 left-[20%] w-1.5 h-1.5 bg-primary/20 rounded-full animate-float-particle" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-medium uppercase tracking-wider glass px-4 py-2 rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Simple Process,{" "}
            <span className="text-gradient">Amazing Results</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Getting your website is easy. Here&apos;s our straightforward process
            from start to finish.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop with animated gradient */}
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-[3px] -translate-y-1/2">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full animate-shimmer" style={{ opacity: 0.5 }} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="relative group perspective-1000"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Card with 3D hover effect */}
                <div className="glass-card p-8 text-center hover:bg-white/10 transition-all duration-500 hover:-translate-y-3 hover:glow-primary h-full relative overflow-hidden preserve-3d group-hover:rotate-y-[-2deg] group-hover:rotate-x-[2deg]">
                  {/* Glowing orb behind step number */}
                  <div className={`absolute top-4 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br ${step.color} rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                  
                  {/* Step Number with 3D effect */}
                  <div className="relative mb-6">
                    <div className="text-5xl font-bold text-gradient group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                    {/* Reflection */}
                    <div className="text-5xl font-bold text-gradient opacity-10 scale-y-[-1] absolute top-full left-1/2 -translate-x-1/2 blur-[2px]">
                      {step.step}
                    </div>
                  </div>

                  {/* Icon with 3D floating effect */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-gradient transition-all">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Hover particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                    <div className="absolute top-4 right-4 w-1 h-1 bg-primary rounded-full animate-ping" />
                    <div className="absolute bottom-8 left-6 w-1 h-1 bg-accent rounded-full animate-ping" style={{ animationDelay: '0.3s' }} />
                  </div>
                </div>

                {/* Animated Arrow - Desktop (between cards) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                    <div className="w-10 h-10 rounded-full glass border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-4 h-4 text-primary animate-pulse"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-particle {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-30px) translateX(10px); opacity: 0.6; }
        }
        @keyframes float-particle-delayed {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(-15px); opacity: 0.5; }
        }
        .animate-float-particle {
          animation: float-particle 6s ease-in-out infinite;
        }
        .animate-float-particle-delayed {
          animation: float-particle-delayed 8s ease-in-out infinite;
          animation-delay: 1s;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-\\[-2deg\\] {
          transform: rotateY(-2deg);
        }
        .rotate-x-\\[2deg\\] {
          transform: rotateX(2deg);
        }
      `}</style>
    </section>
  )
}
