export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center glow-primary transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-sm">.</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              <span className="text-gradient">.DOT</span> Web Solutions
            </span>
          </a>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <a
              href="#services"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              How It Works
            </a>
            <a
              href="#portfolio"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} .DOT Web Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
