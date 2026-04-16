"use client"

import { Zap, Shield, Smartphone, Globe, Code, Database, Layers, Sparkles } from "lucide-react"

const techFeatures = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed and performance",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Built with security best practices",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Perfect on every device and screen",
  },
  {
    icon: Globe,
    title: "Global Ready",
    description: "Scalable infrastructure worldwide",
  },
]

function TechCube3D() {
  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-1000">
      {/* Outer glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-full blur-[80px] animate-pulse" />
      
      {/* Main 3D container */}
      <div className="relative preserve-3d animate-rotate-3d">
        {/* Central cube structure */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 preserve-3d">
          {/* Front face */}
          <div 
            className="absolute inset-0 glass-card border border-primary/30 rounded-2xl flex items-center justify-center"
            style={{ transform: 'translateZ(80px)' }}
          >
            <Code className="w-16 h-16 text-primary/60" />
          </div>
          
          {/* Back face */}
          <div 
            className="absolute inset-0 glass-card border border-accent/30 rounded-2xl flex items-center justify-center"
            style={{ transform: 'rotateY(180deg) translateZ(80px)' }}
          >
            <Database className="w-16 h-16 text-accent/60" />
          </div>
          
          {/* Left face */}
          <div 
            className="absolute inset-0 glass-card border border-primary/20 rounded-2xl flex items-center justify-center"
            style={{ transform: 'rotateY(-90deg) translateZ(80px)' }}
          >
            <Layers className="w-16 h-16 text-primary/50" />
          </div>
          
          {/* Right face */}
          <div 
            className="absolute inset-0 glass-card border border-accent/20 rounded-2xl flex items-center justify-center"
            style={{ transform: 'rotateY(90deg) translateZ(80px)' }}
          >
            <Sparkles className="w-16 h-16 text-accent/50" />
          </div>
          
          {/* Top face */}
          <div 
            className="absolute inset-0 glass-card border border-white/10 rounded-2xl"
            style={{ transform: 'rotateX(90deg) translateZ(80px)' }}
          />
          
          {/* Bottom face */}
          <div 
            className="absolute inset-0 glass-card border border-white/10 rounded-2xl"
            style={{ transform: 'rotateX(-90deg) translateZ(80px)' }}
          />
        </div>
        
        {/* Orbiting rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border border-primary/20 animate-spin-slow" />
          <div className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full border border-accent/15 animate-spin-reverse" />
          <div className="absolute w-64 h-64 md:w-72 md:h-72 rounded-full border border-white/10 animate-spin-slow" style={{ animationDuration: '25s' }} />
        </div>
        
        {/* Floating particles */}
        <div className="absolute -top-4 left-1/4 w-3 h-3 bg-primary rounded-full animate-float-up opacity-70" />
        <div className="absolute -bottom-4 right-1/4 w-2 h-2 bg-accent rounded-full animate-float-up opacity-60" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" />
        <div className="absolute top-1/2 -left-8 w-3 h-3 bg-gradient-to-r from-accent to-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        @keyframes rotate-3d {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          25% { transform: rotateX(10deg) rotateY(90deg); }
          50% { transform: rotateX(0deg) rotateY(180deg); }
          75% { transform: rotateX(-10deg) rotateY(270deg); }
          100% { transform: rotateX(0deg) rotateY(360deg); }
        }
        .animate-rotate-3d {
          animation: rotate-3d 20s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-slow 20s linear infinite reverse;
        }
        @keyframes float-up {
          0%, 100% { transform: translateY(0); opacity: 0.7; }
          50% { transform: translateY(-20px); opacity: 1; }
        }
        .animate-float-up {
          animation: float-up 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export function TechShowcaseSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-accent/[0.02]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - 3D Scene */}
          <div className="relative order-2 lg:order-1 h-[400px] md:h-[500px]">
            <TechCube3D />
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-primary text-sm font-medium uppercase tracking-wider glass px-4 py-2 rounded-full mb-6">
              Modern Technology
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Built with the{" "}
              <span className="text-gradient">Latest Tech</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed text-pretty">
              We use cutting-edge technologies to build websites that are fast, 
              secure, and scalable. Your website will be ready for the future.
            </p>

            {/* Tech Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {techFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group glass-card p-5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-xs">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
