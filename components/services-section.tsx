"use client"

import { Globe, Layout, RefreshCw, Search } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description:
      "Professional websites that showcase your brand and help convert visitors into customers.",
    features: ["Custom Design", "Mobile Responsive", "Contact Forms"],
    color: "from-blue-500 to-cyan-500",
    shadowColor: "shadow-blue-500/20",
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description:
      "High-converting landing pages designed to capture leads and drive specific actions.",
    features: ["Conversion Focused", "Fast Loading", "A/B Testing Ready"],
    color: "from-primary to-accent",
    shadowColor: "shadow-primary/20",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description:
      "Transform your outdated website into a modern, user-friendly experience.",
    features: ["Modern UI/UX", "Performance Boost", "SEO Improvement"],
    color: "from-accent to-pink-500",
    shadowColor: "shadow-accent/20",
  },
  {
    icon: Search,
    title: "Basic SEO Setup",
    description:
      "Essential search engine optimization to help your website get found online.",
    features: ["Meta Tags", "Schema Markup", "Speed Optimization"],
    color: "from-green-500 to-emerald-500",
    shadowColor: "shadow-green-500/20",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/[0.03] rounded-full blur-3xl" />
        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/10 rounded-full blur-2xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-medium uppercase tracking-wider glass px-4 py-2 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Everything You Need to{" "}
            <span className="text-gradient">Go Online</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            From simple landing pages to complete business websites, we offer a range
            of services to meet your needs.
          </p>
        </div>

        {/* Services Grid with 3D-like hover effects */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:glow-primary relative overflow-hidden perspective-1000"
              style={{ 
                animationDelay: `${index * 100}ms`,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* 3D-like gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className={`absolute inset-[1px] rounded-2xl bg-background`} />
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-20`} />
              </div>
              
              {/* Floating particles effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-6 right-6 w-2 h-2 bg-primary rounded-full animate-ping" />
                <div className="absolute bottom-12 left-12 w-1 h-1 bg-accent rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-1/2 right-12 w-1.5 h-1.5 bg-primary/50 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
              </div>

              <div className="relative z-10">
                {/* Header with 3D icon */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl ${service.shadowColor}`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-gradient transition-all">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features with animated underline */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-4 py-1.5 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20 group-hover:border-primary/40 transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Service number */}
                <div className="absolute -bottom-2 -right-2 text-8xl font-bold text-white/[0.02] group-hover:text-primary/5 transition-colors duration-500 select-none">
                  0{index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-5deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
          animation-delay: 2s;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  )
}
