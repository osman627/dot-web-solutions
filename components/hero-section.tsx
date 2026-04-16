"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay
    }
  })
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay
    }
  })
}

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.3
    }
  }
}

// Animated 3D Sphere Component
function Animated3DSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    setIsLoaded(true)

    const dpr = window.devicePixelRatio || 1
    const size = 500
    canvas.width = size * dpr
    canvas.height = size * dpr
    canvas.style.width = `${size}px`
    canvas.style.height = `${size}px`
    ctx.scale(dpr, dpr)

    let animationFrame: number
    let rotation = 0
    let targetRotationX = 0
    let targetRotationY = 0
    let currentRotationX = 0
    let currentRotationY = 0

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      targetRotationX = (e.clientY - centerY) * 0.0002
      targetRotationY = (e.clientX - centerX) * 0.0002
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Particle system
    const particles: { x: number; y: number; z: number; size: number; speed: number }[] = []
    for (let i = 0; i < 100; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 140 + Math.random() * 20
      particles.push({
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.5
      })
    }

    const drawSphere = () => {
      ctx.clearRect(0, 0, size, size)
      
      const centerX = size / 2
      const centerY = size / 2
      const radius = 140

      // Smooth rotation interpolation
      currentRotationX += (targetRotationX - currentRotationX) * 0.05
      currentRotationY += (targetRotationY - currentRotationY) * 0.05

      // Background glow
      const bgGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius * 2)
      bgGlow.addColorStop(0, "rgba(139, 92, 246, 0.15)")
      bgGlow.addColorStop(0.4, "rgba(99, 102, 241, 0.08)")
      bgGlow.addColorStop(1, "transparent")
      ctx.fillStyle = bgGlow
      ctx.fillRect(0, 0, size, size)

      // Draw outer rings
      for (let i = 0; i < 3; i++) {
        const ringRadius = radius + 30 + i * 25
        ctx.beginPath()
        ctx.arc(centerX, centerY, ringRadius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 - i * 0.03})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Main sphere glow
      const sphereGlow = ctx.createRadialGradient(
        centerX - radius * 0.3,
        centerY - radius * 0.3,
        0,
        centerX,
        centerY,
        radius * 1.2
      )
      sphereGlow.addColorStop(0, "rgba(139, 92, 246, 0.3)")
      sphereGlow.addColorStop(0.5, "rgba(99, 102, 241, 0.15)")
      sphereGlow.addColorStop(1, "transparent")
      ctx.fillStyle = sphereGlow
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * 1.2, 0, Math.PI * 2)
      ctx.fill()

      // Wireframe sphere
      ctx.strokeStyle = "rgba(139, 92, 246, 0.2)"
      ctx.lineWidth = 0.5

      // Latitude lines
      for (let lat = -80; lat <= 80; lat += 20) {
        const latRad = (lat * Math.PI) / 180
        const y = centerY + radius * Math.sin(latRad) * Math.cos(currentRotationX * 10)
        const latRadius = radius * Math.cos(latRad)
        
        ctx.beginPath()
        ctx.ellipse(centerX, y, latRadius, latRadius * 0.3, 0, 0, Math.PI * 2)
        ctx.stroke()
      }

      // Longitude lines
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI + rotation + currentRotationY * 10
        
        ctx.beginPath()
        ctx.ellipse(
          centerX,
          centerY,
          radius * Math.abs(Math.cos(angle)),
          radius,
          0,
          0,
          Math.PI * 2
        )
        ctx.stroke()
      }

      // Sphere edge highlight
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      const edgeGradient = ctx.createLinearGradient(
        centerX - radius,
        centerY - radius,
        centerX + radius,
        centerY + radius
      )
      edgeGradient.addColorStop(0, "rgba(139, 92, 246, 0.5)")
      edgeGradient.addColorStop(0.5, "rgba(99, 102, 241, 0.3)")
      edgeGradient.addColorStop(1, "rgba(59, 130, 246, 0.2)")
      ctx.strokeStyle = edgeGradient
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw and animate particles
      particles.forEach((p, i) => {
        const rotatedX = p.x * Math.cos(rotation * p.speed) - p.z * Math.sin(rotation * p.speed)
        const rotatedZ = p.x * Math.sin(rotation * p.speed) + p.z * Math.cos(rotation * p.speed)
        
        // Apply mouse rotation
        const finalX = rotatedX + currentRotationY * 50
        const finalY = p.y + currentRotationX * 50
        
        const screenX = centerX + rotatedX
        const screenY = centerY + p.y
        const depth = (rotatedZ + 200) / 400
        
        if (rotatedZ > -50) {
          ctx.beginPath()
          ctx.arc(screenX, screenY, p.size * depth, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(139, 92, 246, ${depth * 0.8})`
          ctx.fill()
        }
      })

      // Orbiting elements
      const orbitRadius = radius + 60
      for (let i = 0; i < 3; i++) {
        const orbitAngle = rotation * (2 + i * 0.5) + (i * Math.PI * 2) / 3
        const orbitX = centerX + orbitRadius * Math.cos(orbitAngle)
        const orbitY = centerY + orbitRadius * Math.sin(orbitAngle) * 0.4
        const orbitZ = Math.sin(orbitAngle)
        
        if (orbitZ > -0.5) {
          // Orbiting dot
          ctx.beginPath()
          ctx.arc(orbitX, orbitY, 6, 0, Math.PI * 2)
          const dotGradient = ctx.createRadialGradient(orbitX, orbitY, 0, orbitX, orbitY, 6)
          dotGradient.addColorStop(0, "rgba(255, 255, 255, 0.9)")
          dotGradient.addColorStop(1, "rgba(139, 92, 246, 0.6)")
          ctx.fillStyle = dotGradient
          ctx.fill()
          
          // Trail
          ctx.beginPath()
          ctx.arc(orbitX, orbitY, 12, 0, Math.PI * 2)
          const trailGradient = ctx.createRadialGradient(orbitX, orbitY, 0, orbitX, orbitY, 12)
          trailGradient.addColorStop(0, "rgba(139, 92, 246, 0.3)")
          trailGradient.addColorStop(1, "transparent")
          ctx.fillStyle = trailGradient
          ctx.fill()
        }
      }

      // Center core glow
      const coreGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 30)
      coreGlow.addColorStop(0, "rgba(255, 255, 255, 0.1)")
      coreGlow.addColorStop(0.5, "rgba(139, 92, 246, 0.05)")
      coreGlow.addColorStop(1, "transparent")
      ctx.fillStyle = coreGlow
      ctx.beginPath()
      ctx.arc(centerX, centerY, 30, 0, Math.PI * 2)
      ctx.fill()

      rotation += 0.004
      animationFrame = requestAnimationFrame(drawSphere)
    }

    drawSphere()

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <motion.div 
      className="relative w-full h-full flex items-center justify-center"
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      custom={0.2}
    >
      {/* Ambient glow */}
      <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute w-72 h-72 bg-accent/15 rounded-full blur-[100px] translate-x-16 translate-y-16 animate-pulse-slow animation-delay-1000" />
      
      <canvas
        ref={canvasRef}
        className={`relative z-10 transition-opacity duration-1000 cursor-pointer ${isLoaded ? "opacity-100" : "opacity-0"}`}
      />
      
      {/* Floating tech badges */}
      <motion.div 
        className="absolute top-8 right-4 glass-card px-4 py-2 flex items-center gap-2"
        initial={{ opacity: 0, y: -20, x: 20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs text-muted-foreground">Live Deployment</span>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-16 left-0 glass-card px-4 py-2 flex items-center gap-2"
        initial={{ opacity: 0, y: 20, x: -20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="text-xs font-mono text-primary">99.9%</span>
        <span className="text-xs text-muted-foreground">Uptime</span>
      </motion.div>
      
      <motion.div 
        className="absolute top-1/3 -left-4 glass-card p-3"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.6, type: "spring" }}
      >
        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </motion.div>
    </motion.div>
  )
}

// Animated text with word-by-word reveal
function AnimatedHeadline() {
  const line1 = "We build websites"
  const line2 = "that turn visitors into Customers"

  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
      <span className="block overflow-hidden">
        {line1.split(" ").map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-[0.25em]"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.3 + i * 0.1
            }}
          >
            {word}
          </motion.span>
        ))}
      </span>
      <span className="block overflow-hidden">
        {line2.split(" ").map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-[0.25em] text-gradient"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.6 + i * 0.1
            }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    </h1>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      {/* Animated grid */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      {/* Gradient orbs with animation */}
      <motion.div 
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.12, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Animated Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-sm text-muted-foreground">Available for new projects</span>
            </motion.div>

            {/* Animated Headline */}
            <AnimatedHeadline />

            {/* Animated Subheadline */}
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.8}
            >
              Modern, fast, and professional websites designed to help your business grow. From concept to launch in weeks, not months.
            </motion.p>

            {/* Animated CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-base font-medium bg-white text-background hover:bg-white/90 hover:scale-105 transition-all duration-300 rounded-full shadow-lg shadow-white/10"
              >
                <a href="#contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="h-14 px-6 text-base font-medium text-muted-foreground hover:text-foreground transition-all duration-300 group"
              >
                <a href="#portfolio" className="flex items-center gap-3">
                  <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                    <Play className="w-4 h-4 ml-0.5" />
                  </span>
                  View Our Work
                </a>
              </Button>
            </motion.div>

            {/* Animated Trust indicators */}
            <motion.div 
              className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-muted-foreground"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={1.2}
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div 
                      key={i} 
                      className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 border-2 border-background flex items-center justify-center text-xs font-medium"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.4 + i * 0.1, type: "spring", stiffness: 200 }}
                    >
                      {String.fromCharCode(64 + i)}
                    </motion.div>
                  ))}
                </div>
                <span className="text-sm">50+ Happy Clients</span>
              </div>
              <div className="h-4 w-px bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>5.0 Average Rating</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side - 3D Sphere */}
          <div className="order-1 lg:order-2 relative h-[350px] sm:h-[400px] lg:h-[550px]">
            <Animated3DSphere />
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        <span className="text-xs text-muted-foreground mb-1">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-2">
          <motion.div 
            className="w-1.5 h-1.5 bg-white/60 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  )
}
