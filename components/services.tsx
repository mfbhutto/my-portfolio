"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Smartphone, Palette, Search, Server, Zap, Users, BarChart3 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
      description: "End-to-end web application development from concept to deployment, including both frontend and backend development with modern technologies.",
      features: ["Complete Web Apps", "System Architecture", "DevOps & Deployment", "Maintenance & Support"],
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Services I Offer</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I provide comprehensive digital solutions to help bring your ideas to life
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 w-full">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group flex-1 min-w-[280px] max-w-sm"
              style={{ flexBasis: '0' }}
            >
              <Card className="h-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border-0 hover:border-blue-500/20 flex flex-col justify-between">
                <CardContent className="p-6 text-center flex flex-col h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"
                  >
                    {service.icon}
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{service.description}</p>

                  <div className="flex-1 flex items-center justify-center">
                    <ul className="space-y-2 text-sm w-full">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + featureIndex * 0.05 }}
                          className="text-gray-500 dark:text-gray-400 flex items-center justify-center"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Let's discuss your ideas and create something amazing together. I'm here to help you bring your vision to
            life.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
