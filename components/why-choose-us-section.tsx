"use client"

import { Sparkles, Zap, Smartphone, DollarSign } from "lucide-react"

const reasons = [
  {
    icon: Sparkles,
    title: "Modern Designs",
    description: "Clean, contemporary aesthetics that make your brand stand out.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising on quality.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly",
    description: "Responsive designs that look great on all devices.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Competitive rates that fit your budget requirements.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Built Different,{" "}
            <span className="text-gradient">Built Better</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            We combine expertise, efficiency, and affordability to deliver
            exceptional websites for your business.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group text-center p-6 rounded-2xl hover:bg-white/5 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mx-auto mb-4 group-hover:glow-primary transition-all duration-300 group-hover:scale-110">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 glass-card p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">50+</div>
              <div className="text-muted-foreground text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">40+</div>
              <div className="text-muted-foreground text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">98%</div>
              <div className="text-muted-foreground text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-muted-foreground text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
