"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Database, Globe, Smartphone, Server, Palette, GitBranch, Cloud } from "lucide-react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Custom flex layout for 3 cards in first row, 2 in second row, all centered */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-wrap justify-center gap-6 w-full">
            {skills.slice(0, 3).map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 min-w-[260px] max-w-xs w-[320px] flex-1"
              >
                <div
                  className={`${skill.color} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-4 mx-auto`}
                >
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-4">{skill.category}</h3>
                <div className="space-y-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + techIndex * 0.05 }}
                      className="bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-gray-300 text-center"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6 w-full">
            {skills.slice(3, 5).map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: (index + 3) * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 min-w-[260px] max-w-xs w-[320px] flex-1"
              >
                <div
                  className={`${skill.color} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-4 mx-auto`}
                >
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-4">{skill.category}</h3>
                <div className="space-y-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: (index + 3) * 0.1 + techIndex * 0.05 }}
                      className="bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-gray-300 text-center"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skill Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">Proficiency Levels</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: "React/Next.js", level: 95 },
              { name: "TypeScript", level: 90 },
              { name: "Node.js", level: 85 },
              { name: "Python", level: 80 },
            ].map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-blue-600 h-2 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
