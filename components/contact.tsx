"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Enhanced Contact Section with GSAP ScrollTrigger
 * 
 * UX Benefits:
 * - Improved spacing and typography for better readability
 * - Clear form layout with proper visual hierarchy
 * - Smooth animations on scroll
 * - Enhanced hover interactions for contact cards
 */
export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const contactInfoRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "mfbhutto45@gmail.com",
      link: "mailto:mfbhutto45@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+92 311 8289019",
      link: "tel:+923118289019",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Karachi, Pakistan",
      link: "#",
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

      // Contact info cards animation
      if (contactInfoRef.current) {
        const infoCards = contactInfoRef.current.querySelectorAll(".contact-info-card")
        gsap.fromTo(
          infoCards,
          {
            opacity: 0,
            x: -50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contactInfoRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        )

        // Hover effects for contact cards
        infoCards.forEach((card) => {
          const icon = card.querySelector(".contact-icon")
          const handleMouseEnter = () => {
            gsap.to(card, {
              y: -5,
              scale: 1.02,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              duration: 0.3,
              ease: "power2.out",
            })
            if (icon) {
              gsap.to(icon, {
                scale: 1.1,
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
              boxShadow: "0 4px 6px -2px rgba(0, 0, 0, 0.05)",
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

      // Form animation
      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          {
            opacity: 0,
            x: 50,
            scale: 0.95,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Section separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-12 sm:mb-20 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Get In Touch
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {/* Contact Information */}
          <div ref={contactInfoRef} className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                I'm always interested in hearing about new projects and opportunities. Whether you're a company looking
                to hire, or you're someone with an idea, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((info) => (
                <div key={info.title} className="contact-info-card">
                  <Card className="bg-card border border-border/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-4 sm:p-5">
                      <a
                        href={info.link}
                        className="flex items-center space-x-3 sm:space-x-4 group"
                        data-cursor-hover
                      >
                        <div className="contact-icon w-10 h-10 sm:w-12 sm:h-12 bg-secondary/50 border border-border/30 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 flex-shrink-0">
                          {info.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-semibold text-foreground text-sm sm:text-base">
                            {info.title}
                          </h4>
                          <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300 text-xs sm:text-sm break-words">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="lg:col-span-2 flex items-center justify-center min-h-[400px] sm:min-h-[500px]">
            <div className="w-full max-w-2xl">
              <Card className="bg-card border border-border/50 shadow-lg rounded-xl">
                <CardContent className="p-6 sm:p-8 md:p-10">
                  <form
                    action="https://formspree.io/f/mvgrllvp"
                    method="POST"
                    className="space-y-4 sm:space-y-6"
                    onSubmit={handleSubmit}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground/80 mb-2"
                        >
                          Full Name
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full bg-background border-border/50 text-sm sm:text-base"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground/80 mb-2"
                        >
                          Email Address
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full bg-background border-border/50 text-sm sm:text-base"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground/80 mb-2"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        className="w-full min-h-[120px] sm:min-h-[140px] bg-background border-border/50 text-sm sm:text-base"
                        placeholder="Type your message here..."
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-semibold shadow-lg hover:shadow-primary/20 transition-all duration-200 flex items-center gap-2 transform hover:scale-[1.02] border-0 w-full sm:w-auto"
                        data-cursor-hover
                      >
                        <Send className="h-4 w-4 sm:h-5 sm:w-5" /> Send Message
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
