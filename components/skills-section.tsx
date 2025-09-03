"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "LitElement", level: 75 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "Spring Boot", level: 75 },
      { name: "Java", level: 70 },
      { name: "Microservicios", level: 75 },
    ],
  },
  {
    category: "Bases de Datos",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 70 },
      { name: "PhpMyAdmin", level: 80 },
    ],
  },
  {
    category: "Herramientas & DevOps",
    skills: [
      { name: "Git", level: 90 },
      { name: "Nginx", level: 80 },
      { name: "PM2", level: 75 },
      { name: "Jira", level: 85 },
      { name: "Bitbucket", level: 80 },
    ],
  },
]

const additionalSkills = ["REST API", "GraphQL", "Diseño Responsivo", "Gestión de VPS", "React Native"]

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set())
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate progress bars with delay
          setTimeout(() => {
            skillCategories.forEach((category, categoryIndex) => {
              category.skills.forEach((skill, skillIndex) => {
                setTimeout(
                  () => {
                    setAnimatedSkills((prev) => new Set([...prev, `${categoryIndex}-${skillIndex}`]))
                  },
                  categoryIndex * 200 + skillIndex * 100,
                )
              })
            })
          }, 300)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl font-bold text-center mb-12 font-playfair gradient-text">Habilidades Técnicas</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className={`shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isVisible ? `animate-scale-in animate-delay-${(categoryIndex + 1) * 100}` : "opacity-0"
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary font-playfair">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress
                          value={animatedSkills.has(`${categoryIndex}-${skillIndex}`) ? skill.level : 0}
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-primary font-playfair text-center">
                Tecnologías Adicionales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-3">
                {additionalSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className={`text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default ${
                      isVisible ? `animate-scale-in animate-delay-${(index + 1) * 50}` : "opacity-0"
                    }`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
