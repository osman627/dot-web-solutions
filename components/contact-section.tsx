"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, MessageCircle, Mail, MapPin } from "lucide-react"
import { supabase } from "@/lib/supabase"  // <-- IMPORT YOUR SUPABASE CLIENT

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")

    // ✅ REAL Supabase insert (not a fake timeout!)
    const { error } = await supabase
      .from("contacts")
      .insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      ])

    setIsSubmitting(false)

    if (error) {
      console.error("Supabase error:", error)
      setErrorMessage("Something went wrong. Please try again.")
      return
    }

    // Success!
    setIsSubmitted(true)
    setFormData({ name: "", email: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Let&apos;s Build Something{" "}
            <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Ready to get started? Fill out the form below or reach out to us
            directly. We&apos;d love to hear about your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="glass-card p-8 glow-primary">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 glow-primary">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground">
                  We&apos;ll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="glass border-white/10 focus:border-primary/50 bg-white/5 placeholder:text-muted-foreground/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="glass border-white/10 focus:border-primary/50 bg-white/5 placeholder:text-muted-foreground/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="glass border-white/10 focus:border-primary/50 bg-white/5 placeholder:text-muted-foreground/50 resize-none"
                  />
                </div>

                {/* ✅ Error message display */}
                {errorMessage && (
                  <p className="text-red-400 text-sm">{errorMessage}</p>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-primary glow-primary hover:opacity-90 transition-all duration-300 text-white border-0 py-6 text-base font-medium"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="block glass-card p-6 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-green-400 transition-colors">
                    WhatsApp Us
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Quick response, anytime
                  </p>
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:hello@dotwebsolutions.com"
              className="block glass-card p-6 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Email Us
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    hello@dotwebsolutions.com
                  </p>
                </div>
              </div>
            </a>

            {/* Location */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="text-muted-foreground text-sm">
                    Available Worldwide, Remote First
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Response Note */}
            <div className="glass-card p-6 border-primary/20">
              <p className="text-muted-foreground text-sm leading-relaxed">
                <span className="text-foreground font-medium">Quick Response:</span>{" "}
                We typically respond within 24 hours. For urgent inquiries, reach out via WhatsApp for faster assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}