"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

export default function Navigation({ darkMode, toggleDarkMode }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-lg shadow-black/10 border-b border-border/50" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl sm:text-2xl font-bold text-foreground"
          >
            Portfolio
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/70 hover:text-primary transition-colors duration-200 text-sm lg:text-base"
              >
                {item.name}
              </motion.button>
            ))}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleDarkMode} 
              className="ml-2 lg:ml-4 hover:bg-secondary/50 border border-border/50"
            >
              {darkMode ? <Sun className="h-4 w-4 lg:h-5 lg:w-5 text-foreground/70" /> : <Moon className="h-4 w-4 lg:h-5 lg:w-5 text-foreground/70" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2 sm:space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleDarkMode}
              className="hover:bg-secondary/50 border border-border/50 h-9 w-9"
            >
              {darkMode ? <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-foreground/70" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5 text-foreground/70" />}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:bg-secondary/50 border border-border/50 h-9 w-9"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6 text-foreground/70" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-foreground/70" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border/50"
          >
            <div className="py-3 sm:py-4 space-y-2 sm:space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 sm:py-2.5 text-foreground/70 hover:text-primary transition-colors duration-200 text-base sm:text-lg"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
