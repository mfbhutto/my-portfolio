"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Player } from "@lottiefiles/react-lottie-player"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Enhanced Hero Section with GSAP Animations
 * 
 * UX Benefits:
 * - Text stagger creates visual hierarchy and guides attention
 * - Fade + slide animations feel smooth and professional
 * - Parallax effect adds depth without being distracting
 * - Entrance animations create a memorable first impression
 */
export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const textContainerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const nameRef = useRef<HTMLSpanElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const socialLinksRef = useRef<HTMLDivElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation with fade + slide
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.3,
          }
        )
      }

      // Name highlight animation
      if (nameRef.current) {
        gsap.fromTo(
          nameRef.current,
          { opacity: 0, scale: 0.8, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            delay: 0.8,
          }
        )
      }

      // Subtitle typewriter effect
      if (subtitleRef.current) {
        const subtitleText = subtitleRef.current.textContent || ""
        subtitleRef.current.textContent = ""
        gsap.to(subtitleRef.current, {
          text: subtitleText,
          duration: 1.2,
          ease: "none",
          delay: 1.2,
        })
      }

      // Description fade + slide
      if (descriptionRef.current) {
        gsap.fromTo(
          descriptionRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 1.4,
          }
        )
      }

      // Buttons stagger
      if (buttonsRef.current) {
        const buttons = buttonsRef.current.querySelectorAll("button, a")
        gsap.fromTo(
          buttons,
          { opacity: 0, y: 20, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.2)",
            delay: 1.6,
          }
        )
      }

      // Social links fade in
      if (socialLinksRef.current) {
        const links = socialLinksRef.current.querySelectorAll("a")
        gsap.fromTo(
          links,
          { opacity: 0, scale: 0 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.5)",
            delay: 1.8,
          }
        )
      }

      // Image container parallax and entrance
      if (imageContainerRef.current) {
        gsap.fromTo(
          imageContainerRef.current,
          { opacity: 0, x: 50, scale: 0.9 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            delay: 0.5,
          }
        )

        // Parallax effect on scroll
        gsap.to(imageContainerRef.current, {
          y: -50,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        })
      }

      // Scroll indicator animation
      if (scrollIndicatorRef.current) {
        gsap.fromTo(
          scrollIndicatorRef.current,
          { opacity: 0, y: -10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 2,
          }
        )

        // Continuous bounce animation
        gsap.to(scrollIndicatorRef.current.querySelector("button"), {
          y: 10,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: 2.5,
        })
      }

      // Subtle parallax for text container
      if (textContainerRef.current) {
        gsap.to(textContainerRef.current, {
          y: 30,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        })
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Subtle gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div ref={textContainerRef} className="text-center lg:text-left">
            <h1
              ref={headingRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              <span className="inline-block text-foreground/90">Hi, I'm</span>{" "}
              <span
                ref={nameRef}
                className="text-primary inline-block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
              >
                Muhammad Faheem
              </span>
            </h1>

            <div
              ref={subtitleRef}
              className="text-xl sm:text-2xl text-foreground/70 mb-8 font-medium"
            >
              Full Stack Developer
            </div>

            <p
              ref={descriptionRef}
              className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-2xl leading-relaxed px-4 sm:px-0"
            >
              I create beautiful, responsive web applications using modern technologies. Passionate about clean code,
              user experience, and bringing ideas to life.
            </p>

            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 px-4 sm:px-0"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:scale-[1.02] border-0 w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6"
                onClick={() => {
                  const el = document.querySelector("#projects")
                  if (el) el.scrollIntoView({ behavior: "smooth" })
                }}
                data-cursor-hover
              >
                View My Work
              </Button>
              <a
                href="https://drive.google.com/file/d/1RmDNn8x82ksNrv_3LHbxHATT5an9vdzm/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border/50 bg-card/50 hover:bg-card hover:border-primary/50 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6"
                >
                  Download CV
                </Button>
              </a>
            </div>

            <div
              ref={socialLinksRef}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/mfbhutto"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-secondary/50 transition-all duration-300 transform hover:scale-110 border border-border/50"
                >
                  <Github className="h-5 w-5 text-foreground/70 hover:text-primary" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-faheem-5715ab352/"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-secondary/50 transition-all duration-300 transform hover:scale-110 border border-border/50"
                >
                  <Linkedin className="h-5 w-5 text-foreground/70 hover:text-primary" />
                </Button>
              </a>
              <a href="mailto:mfbhutto45@gmail.com" data-cursor-hover>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-secondary/50 transition-all duration-300 transform hover:scale-110 border border-border/50"
                >
                  <Mail className="h-5 w-5 text-foreground/70 hover:text-primary" />
                </Button>
              </a>
            </div>
          </div>

          {/* Profile Image with Parallax */}
          <div ref={imageContainerRef} className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/10 flex items-center justify-center bg-card transition-transform duration-500 group-hover:scale-[1.02] group-hover:border-primary/50">
                <Player
                  autoplay
                  loop
                  src="/animations/hero-animation.json"
                  className="w-full h-full"
                />
              </div>
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow hidden sm:block" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToAbout}
            className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-secondary/50 border border-border/50"
            aria-label="Scroll to about section"
            data-cursor-hover
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
