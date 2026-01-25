"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

/**
 * Custom Animated Cursor Component
 * 
 * UX Benefits:
 * - Provides visual feedback on interactive elements
 * - Creates a premium, polished feel
 * - Enhances user engagement through micro-interactions
 * - Modern portfolio standard (2024-2025)
 */
export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorFollowerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorFollower = cursorFollowerRef.current

    if (!cursor || !cursorFollower) return

    // Hide default cursor on desktop
    document.body.style.cursor = "none"

    let mouseX = 0
    let mouseY = 0
    let followerX = 0
    let followerY = 0

    // Update cursor position on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // Immediate cursor position
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0,
      })

      // Smooth follower position with delay
      gsap.to(cursorFollower, {
        x: mouseX,
        y: mouseY,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    // Helper function to check if an element is interactive
    const isInteractiveElement = (target: EventTarget | null): boolean => {
      if (!target) return false
      
      // Check if target is an Element (not a text node)
      const element = target instanceof Element ? target : (target as Node).parentElement
      if (!element) return false

      // Check tag name
      if (element.tagName === "A" || element.tagName === "BUTTON") {
        return true
      }

      // Check if element or parent has interactive attributes
      if (element.closest && (
        element.closest("a") ||
        element.closest("button") ||
        element.closest("[data-cursor-hover]") ||
        element.closest(".group")
      )) {
        return true
      }

      return false
    }

    // Handle hover state changes
    let isHoveringInteractive = false

    const updateCursorState = (e: MouseEvent) => {
      const isInteractive = isInteractiveElement(e.target)
      
      if (isInteractive && !isHoveringInteractive) {
        // Entering interactive element
        isHoveringInteractive = true
        gsap.to(cursor, {
          scale: 0.5,
          backgroundColor: "hsl(200, 100%, 60%, 0.3)",
          duration: 0.3,
          ease: "power2.out",
        })
        gsap.to(cursorFollower, {
          scale: 2,
          backgroundColor: "hsl(200, 100%, 60%, 0.1)",
          duration: 0.3,
          ease: "power2.out",
        })
      } else if (!isInteractive && isHoveringInteractive) {
        // Leaving interactive element
        isHoveringInteractive = false
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: "hsl(200, 100%, 60%)",
          duration: 0.3,
          ease: "power2.out",
        })
        gsap.to(cursorFollower, {
          scale: 1,
          backgroundColor: "hsl(200, 100%, 60%, 0.05)",
          duration: 0.3,
          ease: "power2.out",
        })
      }
    }

    // Combined mouse move handler
    const handleMouseMoveWithHover = (e: MouseEvent) => {
      handleMouseMove(e)
      updateCursorState(e)
    }

    window.addEventListener("mousemove", handleMouseMoveWithHover)

    // Hide cursor on mobile/touch devices
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) {
      cursor.style.display = "none"
      cursorFollower.style.display = "none"
      document.body.style.cursor = "auto"
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMoveWithHover)
      document.body.style.cursor = "auto"
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-primary pointer-events-none z-[9999] mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      {/* Cursor follower ring */}
      <div
        ref={cursorFollowerRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary/20 pointer-events-none z-[9998] mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  )
}
