"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Code, Server, Palette } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Enhanced Services Section with GSAP ScrollTrigger
 * 
 * UX Benefits:
 * - Improved visual hierarchy with better spacing and typography
 * - Clear call-to-action buttons with micro-interactions
 * - Stagger animations create engaging reveal effect
 * - Professional card hover effects
 */
export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies like React, Next.js, and Node.js. Responsive, fast, and user-friendly.",
      features: ["Responsive Design", "Modern Frameworks", "Performance Optimization", "Cross-browser Compatibility"],
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Backend Development",
      description:
        "Robust server-side solutions with APIs, databases, and cloud infrastructure for scalable applications.",
      features: ["RESTful APIs", "Database Design", "Cloud Deployment", "Security Implementation"],
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Full Stack Solutions",
      description:
        "End-to-end web application development from concept to deployment, including both frontend and backend development with modern technologies.",
      features: ["Complete Web Apps", "System Architecture", "DevOps & Deployment", "Maintenance & Support"],
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }

      // Cards stagger animation
      if (cardsRef.current) {
        const serviceCards = cardsRef.current.querySelectorAll(".service-card")
        gsap.fromTo(
          serviceCards,
          {
            opacity: 0,
            y: 60,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        )

        // Enhanced hover effects
        serviceCards.forEach((card) => {
          const icon = card.querySelector(".service-icon")
          const handleMouseEnter = () => {
            gsap.to(card, {
              y: -12,
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              duration: 0.3,
              ease: "power2.out",
            })
            if (icon) {
              gsap.to(icon, {
                scale: 1.15,
                rotate: 5,
                duration: 0.3,
                ease: "back.out(1.5)",
              })
            }
          }

          const handleMouseLeave = () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              duration: 0.3,
              ease: "power2.out",
            })
            if (icon) {
              gsap.to(icon, {
                scale: 1,
                rotate: 0,
                duration: 0.3,
                ease: "power2.out",
              })
            }
          }

          card.addEventListener("mouseenter", handleMouseEnter)
          card.addEventListener("mouseleave", handleMouseLeave)

          return () => {
            card.removeEventListener("mouseenter", handleMouseEnter)
            card.removeEventListener("mouseleave", handleMouseLeave)
          }
        })
      }

      // CTA section animation
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        )

        // Button hover animation
        const ctaButton = ctaRef.current.querySelector("button")
        if (ctaButton) {
          ctaButton.addEventListener("mouseenter", () => {
            gsap.to(ctaButton, {
              scale: 1.05,
              duration: 0.2,
              ease: "power2.out",
            })
          })
          ctaButton.addEventListener("mouseleave", () => {
            gsap.to(ctaButton, {
              scale: 1,
              duration: 0.2,
              ease: "power2.out",
            })
          })
        }
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Section separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-12 sm:mb-20 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Services I Offer
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I provide comprehensive digital solutions to help bring your ideas to life
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card w-full group"
              data-cursor-hover
            >
              <Card className="h-full bg-card border border-border/50 shadow-lg shadow-black/20 hover:border-primary/30 hover:shadow-primary/10 transition-all duration-300 flex flex-col">
                <CardContent className="p-6 sm:p-8 text-center flex flex-col h-full">
                  <div className="service-icon w-12 h-12 sm:w-16 sm:h-16 bg-secondary/50 border border-border/30 rounded-lg flex items-center justify-center text-primary mx-auto mb-4 sm:mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {service.icon}
                  </div>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>

                  <div className="flex-1 flex items-center justify-center">
                    <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm w-full">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-foreground/70 flex items-center justify-center"
                        >
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div
          ref={ctaRef}
          className="text-center bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20 border border-primary/20 rounded-xl sm:rounded-2xl p-6 sm:p-10 lg:p-12 shadow-2xl shadow-primary/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-foreground">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-4">
              Let's discuss your ideas and create something amazing together. I'm here to help you bring your vision to
              life.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-primary/20 transform hover:scale-[1.02] border-0 w-full sm:w-auto"
              onClick={() => {
                const el = document.querySelector("#contact")
                if (el) el.scrollIntoView({ behavior: "smooth" })
              }}
              data-cursor-hover
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
