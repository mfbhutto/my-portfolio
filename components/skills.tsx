"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Code2, Database, Globe, Server, GitBranch } from "lucide-react"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Enhanced Skills Section with GSAP ScrollTrigger
 * 
 * UX Benefits:
 * - Cards animate in with stagger effect, creating visual rhythm
 * - ScrollTrigger ensures animations only play when visible
 * - Hover effects provide immediate feedback
 * - Progress bars animate on scroll, showing skill levels dynamically
 */
export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const progressSectionRef = useRef<HTMLDivElement>(null)

  const skills = [
    {
      category: "Frontend",
      icon: <Code2 className="h-8 w-8" />,
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      color: "bg-blue-500",
    },
    {
      category: "Backend",
      icon: <Server className="h-8 w-8" />,
      technologies: ["Node.js", "Express", "Python", "Nest.js", "REST APIs"],
      color: "bg-green-500",
    },
    {
      category: "Database",
      icon: <Database className="h-8 w-8" />,
      technologies: ["PostgreSQL", "MongoDB", "Prisma", "Supabase"],
      color: "bg-purple-500",
    },
    {
      category: "Tools",
      icon: <GitBranch className="h-8 w-8" />,
      technologies: ["Git", "GitHub", "VS Code", "Postman"],
      color: "bg-indigo-500",
    },
    {
      category: "Web",
      icon: <Globe className="h-8 w-8" />,
      technologies: ["HTML5", "CSS3", "JavaScript", "Webpack"],
      color: "bg-teal-500",
    },
  ]

  const proficiencySkills = [
    { name: "React/Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
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
        const cardElements = cardsRef.current.querySelectorAll(".skill-card")
        gsap.fromTo(
          cardElements,
          {
            opacity: 0,
            y: 60,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        )

        // Hover animations for cards
        cardElements.forEach((card) => {
          const handleMouseEnter = () => {
            gsap.to(card, {
              y: -12,
              scale: 1.03,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              duration: 0.3,
              ease: "power2.out",
            })
          }

          const handleMouseLeave = () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              duration: 0.3,
              ease: "power2.out",
            })
          }

          card.addEventListener("mouseenter", handleMouseEnter)
          card.addEventListener("mouseleave", handleMouseLeave)

          return () => {
            card.removeEventListener("mouseenter", handleMouseEnter)
            card.removeEventListener("mouseleave", handleMouseLeave)
          }
        })
      }

      // Technology tags stagger within cards
      if (cardsRef.current) {
        const techTags = cardsRef.current.querySelectorAll(".tech-tag")
        gsap.fromTo(
          techTags,
          {
            opacity: 0,
            x: -20,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }

      // Progress bars animation
      if (progressSectionRef.current) {
        gsap.fromTo(
          progressSectionRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: progressSectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        )

        const progressBars = progressSectionRef.current.querySelectorAll(".progress-bar")
        progressBars.forEach((bar, index) => {
          const level = proficiencySkills[index]?.level || 0
          gsap.fromTo(
            bar,
            { width: 0 },
            {
              width: `${level}%`,
              duration: 1.2,
              ease: "power2.out",
              delay: index * 0.15,
              scrollTrigger: {
                trigger: bar,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          )
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Section separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div
          ref={headerRef}
          className="text-center mb-20"
        >
          <h2
            ref={titleRef}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-4"
          >
            Skills & Technologies
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Cards with Stagger Animation */}
        <div ref={cardsRef} className="flex flex-col items-center gap-6 sm:gap-10 mb-20">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full">
            {skills.slice(0, 3).map((skill) => (
              <div
                key={skill.category}
                className="skill-card bg-card border border-border/50 rounded-xl p-4 sm:p-6 shadow-lg shadow-black/20 w-full sm:min-w-[260px] sm:max-w-xs sm:w-[320px] transition-all duration-300 cursor-pointer hover:border-primary/30 hover:shadow-primary/10"
                data-cursor-hover
              >
                <div
                  className={`${skill.color} w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-white mb-3 sm:mb-4 mx-auto transform transition-transform duration-300 group-hover:scale-110`}
                >
                  {skill.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground text-center mb-3 sm:mb-4">
                  {skill.category}
                </h3>
                <div className="space-y-1.5 sm:space-y-2">
                  {skill.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="tech-tag bg-secondary/50 border border-border/30 rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-foreground/80 text-center"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full">
            {skills.slice(3, 5).map((skill) => (
              <div
                key={skill.category}
                className="skill-card bg-card border border-border/50 rounded-xl p-4 sm:p-6 shadow-lg shadow-black/20 w-full sm:min-w-[260px] sm:max-w-xs sm:w-[320px] transition-all duration-300 cursor-pointer hover:border-primary/30 hover:shadow-primary/10"
                data-cursor-hover
              >
                <div
                  className={`${skill.color} w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-white mb-3 sm:mb-4 mx-auto transform transition-transform duration-300 group-hover:scale-110`}
                >
                  {skill.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground text-center mb-3 sm:mb-4">
                  {skill.category}
                </h3>
                <div className="space-y-1.5 sm:space-y-2">
                  {skill.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="tech-tag bg-secondary/50 border border-border/30 rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-foreground/80 text-center"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Progress Bars */}
        <div ref={progressSectionRef} className="mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground text-center mb-8 sm:mb-12 px-4">
            Proficiency Levels
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
            {proficiencySkills.map((skill) => (
              <div key={skill.name} className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-foreground/90 font-semibold text-base sm:text-lg">
                    {skill.name}
                  </span>
                  <span className="text-muted-foreground font-medium text-sm sm:text-base">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-secondary/30 rounded-full h-2.5 sm:h-3 overflow-hidden border border-border/30">
                  <div
                    className="progress-bar bg-gradient-to-r from-primary to-primary/80 h-2.5 sm:h-3 rounded-full shadow-sm shadow-primary/20"
                    style={{ width: 0 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
