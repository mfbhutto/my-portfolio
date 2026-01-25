"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Enhanced Projects Section with GSAP Stagger Animations
 * 
 * UX Benefits:
 * - Stagger animation creates visual flow as cards appear sequentially
 * - Enhanced hover effects (lift, glow, image zoom) provide rich feedback
 * - ScrollTrigger ensures animations only play when visible
 * - Professional card interactions elevate the portfolio quality
 */
export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const projectsContainerRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      title: "InfluitiveZone",
      description:
        "InfluitiveZone is a modern full-stack web application built with Next.js, SCSS, and GSAP to deliver a smooth, animated user experience. The backend uses Express.js, with Docker-based CI/CD pipelines and deployment on an AWS EC2 instance. It also features an AI-powered chatbot built using the open-source TinyLLaMA model.",
      imageUrl: "/influitivezone.png",
      technologies: ["Next.js", "SCSS", "GSAP", "Express.js", "Docker", "AWS", "EC2"],
      githubUrl: "https://www.influitivezone.com/digital-agency",
      featured: true,
    },
    {
      title: "Home Services Platform",
      description:
        "Home Services Platform is a modern web application built with Next.js that connects customers with skilled service providers such as mechanics, plumbers, electricians, and more. The platform supports two user roles—customers and service partners—allowing individuals to register as service providers, create profiles, and offer reliable on-demand home services through a seamless and scalable system.",
      imageUrl: "/home-services.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Authentication"],
      githubUrl: "https://home-services-eta.vercel.app/",
      featured: true,
    },
    {
      title: "TechsaZone",
      description:
        "TechsaZone is a dynamic digital agency website built with Next.js and enhanced with engaging Lottie animations for an interactive user experience. Designed to showcase creative services and professional solutions, the site highlights TechsaZone's commitment to innovation, visual appeal, and high-quality digital experiences that help brands stand out online.",
      imageUrl: "/techsazone.png",
      technologies: ["Next.js", "Lottie Animations", "TypeScript", "Tailwind CSS", "React"],
      githubUrl: "https://www.techsazone.com/",
      featured: true,
    },
    {
      title: "MedHope",
      description:
        "MedHope is a charity-based web platform built with Next.js and enhanced using Lottie animations for an engaging UI. It supports multiple roles—admin, needy person, volunteer, and donor—with a structured verification and approval workflow. A key highlight is its privacy-first approach, ensuring no personal details of needy individuals are publicly displayed.",
      imageUrl: "/med-hope.png",
      technologies: ["Next.js", "Lottie Animations", "TypeScript", "Role-Based Access", "Privacy-First"],
      githubUrl: "https://med-hope.vercel.app/",
      featured: true,
    },
    {
      title: "Hospital Management System",
      description:
        "A full-stack hospital management system developed using NestJS and SQL. It includes features such as patient registration, doctor scheduling, appointment management, and complete administrative control for efficient hospital operations.",
      imageUrl: "https://i.postimg.cc/k64mbp07/hospital-management.png",
      technologies: ["NestJS", "SQL", "TypeScript"],
      githubUrl: "https://github.com/mfbhutto/Hospital-Management",
      featured: true,
    },
    {
      title: "Collaborative Task Management Application",
      description:
        "Developed the backend of a collaborative task management application using MySQL and NestJS, integrating RESTful APIs, Firebase push notifications for real-time updates, automated workflows with cron jobs, and deployed the application on AWS.",
      imageUrl: "https://i.postimg.cc/VS4w58H7/smart-paw.png",
      technologies: ["NestJS", "SQL", "TypeScript", "AWS"],
      githubUrl: "https://github.com/mfbhutto/Smart-Paw",
      featured: true,
    },
    {
      title: "Python-Based Web Data Extraction System",
      description:
        "Built a data scraping tool using Python that extracts information from any website by providing its URL, utilizing libraries such as Selenium, Pandas, and BeautifulSoup for efficient data collection and processing.",
      imageUrl: "https://i.postimg.cc/YGswfx7Y/ds-py.png",
      technologies: ["Python", "Selenium", "Pandas", "BeautifulSoup"],
      githubUrl: "https://github.com/mfbhutto/Data-Scrapping",
      featured: true,
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

      // Projects stagger animation
      if (projectsContainerRef.current) {
        // Use a small delay to ensure all cards are rendered
        const setupHoverEffects = () => {
          const projectCards = projectsContainerRef.current?.querySelectorAll(".project-card")
          
          if (!projectCards || projectCards.length === 0) return

          // Enhanced hover effects for each card
          projectCards.forEach((card) => {
            const image = card.querySelector(".project-image") as HTMLElement
            const overlay = card.querySelector(".project-overlay") as HTMLElement
            const cardContent = card.querySelector(".project-content") as HTMLElement

            // Ensure overlay starts with opacity 0
            if (overlay) {
              gsap.set(overlay, { opacity: 0 })
            }

            const handleMouseEnter = (e: Event) => {
              e.stopPropagation()
              
              // Lift card
              gsap.to(card, {
                y: -15,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                duration: 0.4,
                ease: "power2.out",
              })

              // Zoom image
              if (image) {
                gsap.to(image, {
                  scale: 1.15,
                  duration: 0.5,
                  ease: "power2.out",
                })
              }

              // Show overlay with fade
              if (overlay) {
                gsap.to(overlay, {
                  opacity: 1,
                  duration: 0.3,
                  ease: "power2.out",
                })
              }

              // Slight scale for content
              if (cardContent) {
                gsap.to(cardContent, {
                  scale: 1.01,
                  duration: 0.3,
                  ease: "power2.out",
                })
              }
            }

            const handleMouseLeave = (e: Event) => {
              e.stopPropagation()
              
              // Reset card
              gsap.to(card, {
                y: 0,
                scale: 1,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                duration: 0.4,
                ease: "power2.out",
              })

              // Reset image
              if (image) {
                gsap.to(image, {
                  scale: 1,
                  duration: 0.5,
                  ease: "power2.out",
                })
              }

              // Hide overlay
              if (overlay) {
                gsap.to(overlay, {
                  opacity: 0,
                  duration: 0.3,
                  ease: "power2.out",
                })
              }

              // Reset content
              if (cardContent) {
                gsap.to(cardContent, {
                  scale: 1,
                  duration: 0.3,
                  ease: "power2.out",
                })
              }
            }

            // Add event listeners
            card.addEventListener("mouseenter", handleMouseEnter as EventListener, { passive: true })
            card.addEventListener("mouseleave", handleMouseLeave as EventListener, { passive: true })

            // Store cleanup on the card element itself
            ;(card as any).__cleanupHover = () => {
              card.removeEventListener("mouseenter", handleMouseEnter as EventListener)
              card.removeEventListener("mouseleave", handleMouseLeave as EventListener)
            }
          })
        }

        const projectCards = projectsContainerRef.current.querySelectorAll(".project-card")
        
        gsap.fromTo(
          projectCards,
          {
            opacity: 0,
            y: 80,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: projectsContainerRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
            onComplete: () => {
              // Setup hover effects after animation completes
              setupHoverEffects()
            },
          }
        )

        // Also setup hover effects immediately in case animation is already complete
        setupHoverEffects()
      }
    }, sectionRef)

    return () => {
      // Cleanup all hover event listeners
      if (projectsContainerRef.current) {
        const projectCards = projectsContainerRef.current.querySelectorAll(".project-card")
        projectCards.forEach((card) => {
          if ((card as any).__cleanupHover) {
            ;(card as any).__cleanupHover()
            delete (card as any).__cleanupHover
          }
        })
      }
      ctx.revert()
    }
  }, [projects.length]) // Add projects.length as dependency to re-run when projects change

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Section separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-12 sm:mb-20 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Featured Projects
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        {/* Projects Grid with Stagger Animation */}
        <div
          ref={projectsContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16"
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card w-full group"
              data-cursor-hover
            >
              <Card className="overflow-hidden bg-card border border-border/50 shadow-lg shadow-black/20 h-full flex flex-col transition-all duration-300 hover:border-primary/30 hover:shadow-primary/10">
                <div className="relative overflow-hidden h-48 sm:h-64">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="project-image w-full h-full object-cover transition-transform duration-500"
                  />
                  <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-0 transition-opacity duration-300 flex items-end justify-center p-6">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-[1.02] transition-transform duration-200 border-0"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {project.githubUrl.includes("github.com") ? (
                          <>
                        <Github className="h-4 w-4 mr-2" />
                            View Code
                          </>
                        ) : (
                          <>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Visit Website
                          </>
                        )}
                      </a>
                    </Button>
                  </div>
                </div>
                <CardContent className="project-content p-4 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed flex-1 text-sm sm:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-secondary/50 border border-border/30 text-foreground/80 text-xs sm:text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-border/50 bg-card/50 hover:bg-card hover:border-primary/50 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
            data-cursor-hover
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
