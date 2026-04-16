"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Star } from "lucide-react"

function FloatingStars3D() {
  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-1000">
      {/* Central glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-[60px]" />
      
      {/* Floating stars container */}
      <div className="relative w-64 h-64 preserve-3d animate-float-rotate">
        {/* Central star */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 animate-pulse">
            <Star className="w-10 h-10 text-white" />
          </div>
        </div>
        
        {/* Orbiting elements */}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 glass-card flex items-center justify-center rounded-xl">
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 glass-card flex items-center justify-center rounded-xl">
            <Sparkles className="w-4 h-4 text-accent" />
          </div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 glass-card flex items-center justify-center rounded-xl">
            <Star className="w-4 h-4 text-primary" />
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 glass-card flex items-center justify-center rounded-xl">
            <Star className="w-4 h-4 text-accent" />
          </div>
        </div>
        
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border border-white/10 animate-spin-reverse" />
        <div className="absolute -inset-8 rounded-full border border-primary/10 animate-spin-slow" style={{ animationDuration: '25s' }} />
        
        {/* Floating particles */}
        <div className="absolute -top-4 -right-4 w-2 h-2 bg-primary rounded-full animate-twinkle" />
        <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-accent rounded-full animate-twinkle" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/4 -right-8 w-1 h-1 bg-white rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }} />
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        @keyframes float-rotate {
          0%, 100% { transform: translateY(0) rotateY(0deg); }
          50% { transform: translateY(-15px) rotateY(180deg); }
        }
        .animate-float-rotate {
          animation: float-rotate 10s ease-in-out infinite;
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
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export function CTASection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-8 md:p-12 lg:p-16 relative overflow-hidden">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-50" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
              {/* Left - Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Ready to start?</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                  Let&apos;s Build Your{" "}
                  <span className="text-gradient">Dream Website</span>
                </h2>
                
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed text-pretty">
                  Join hundreds of businesses that trust us to bring their vision to life. 
                  Get started today with a free consultation.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="gradient-primary glow-primary hover:opacity-90 transition-all duration-300 text-white border-0 px-8 py-6 text-base font-medium group"
                  >
                    <a href="#contact">
                      Start Your Project
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <span className="text-muted-foreground text-sm">
                    Free consultation included
                  </span>
                </div>
              </div>

              {/* Right - 3D Scene */}
              <div className="relative hidden lg:block h-[300px]">
                <FloatingStars3D />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
