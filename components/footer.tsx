"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 sm:col-span-2 lg:col-span-2"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">Muhammad Faheem</h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Full Stack Developer passionate about creating beautiful, functional web applications that make a
              difference.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <motion.a
                href="https://github.com/mfbhutto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-secondary/50 border border-border/30 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                target="_blank" rel="noopener noreferrer"
              >
                <Github className="h-5 w-5 text-foreground/70" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/muhammad-faheem-5715ab352/"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-secondary/50 border border-border/30 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                target="_blank" rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5 text-foreground/70" />
              </motion.a>
              <motion.a
                href="mailto:mfbhutto45@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-secondary/50 border border-border/30 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Mail className="h-5 w-5 text-foreground/70" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {["Home", "About", "Skills", "Projects", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm sm:text-base"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Services</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                "Web Development",
                "Backend Development",
                "Full Stack Solutions",
              ].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm sm:text-base">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-border/50 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0"
        >
          <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">© {currentYear} Muhammad Faheem. All rights reserved.</p>
          <p className="text-muted-foreground text-xs sm:text-sm flex items-center justify-center">
            Made with <Heart className="h-3 w-3 sm:h-4 sm:w-4 mx-1 text-primary" /> using Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
