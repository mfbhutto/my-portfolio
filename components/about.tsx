"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Enhanced About Section with GSAP ScrollTrigger
 * 
 * UX Benefits:
 * - ScrollTrigger animations reveal content as user scrolls, maintaining engagement
 * - Staggered text reveals create visual interest without overwhelming
 * - Smooth fade + slide animations feel polished and professional
 * - Content appears naturally as user explores the page
 */
export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const dividerRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const paragraph1Ref = useRef<HTMLParagraphElement>(null)
  const paragraph2Ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }

      // Divider animation
      if (dividerRef.current) {
        gsap.fromTo(
          dividerRef.current,
          {
            scaleX: 0,
            opacity: 0,
          },
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: dividerRef.current,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }

      // Subtitle animation
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          {
            opacity: 0,
            y: 30,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.2)",
            delay: 0.2,
            scrollTrigger: {
              trigger: subtitleRef.current,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }

      // Paragraphs stagger animation
      if (paragraph1Ref.current) {
        gsap.fromTo(
          paragraph1Ref.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.3,
            scrollTrigger: {
              trigger: paragraph1Ref.current,
              start: "top 85%",
              end: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }

      if (paragraph2Ref.current) {
        gsap.fromTo(
          paragraph2Ref.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.5,
            scrollTrigger: {
              trigger: paragraph2Ref.current,
              start: "top 85%",
              end: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }

      // Parallax effect for the entire section
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          y: -30,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[70vh] relative"
    >
      {/* Section separator with gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div ref={containerRef} className="max-w-4xl mx-auto w-full">
        <div className="text-center">
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6 px-4"
          >
            About Me
          </h2>
          <div
            ref={dividerRef}
            className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-6 sm:mb-8 rounded-full"
          ></div>
          <h3
            ref={subtitleRef}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary mb-4 sm:mb-6 px-4"
          >
            I'm a passionate Full Stack Developer
          </h3>
          <p
            ref={paragraph1Ref}
            className="text-base sm:text-lg lg:text-xl text-foreground/80 mb-4 sm:mb-6 max-w-3xl mx-auto leading-relaxed px-4"
          >
            With over 3 years of experience in web development, I specialize in creating modern, responsive, and user-friendly applications. I love turning complex problems into simple, beautiful designs.
          </p>
          <p
            ref={paragraph2Ref}
            className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4"
          >
            My journey in tech started with a curiosity about how websites work, and it has evolved into a passion for creating digital experiences that make a difference. I'm always learning new technologies and staying up-to-date with industry trends.
          </p>
        </div>
      </div>
    </section>
  )
}
