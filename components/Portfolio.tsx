// ✅ FILE: components/Portfolio.tsx
"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Services from "@/components/services"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"

/**
 * Main Portfolio Component
 * 
 * Includes:
 * - Custom animated cursor for enhanced interactivity
 * - Smooth scroll behavior
 * - Dark mode support
 * - All portfolio sections with GSAP animations
 */
export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true) // Default to dark mode

  useEffect(() => {
    // Always set dark mode as default
    document.documentElement.classList.add("dark")
    setDarkMode(true)
    localStorage.setItem("darkMode", "true")
  }, [])

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth"
    
    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem("darkMode", newDarkMode.toString())
    if (newDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <CustomCursor />
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
