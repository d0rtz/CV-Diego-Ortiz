"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Desarrollador Web Full Stack",
    company: "Velzia",
    location: "Madrid, España",
    period: "Marzo 2024 - Noviembre 2024",
    achievements: [
      "Desarrollador único para la migración del sitio web de bienes raíces de lujo de WordPress a una plataforma personalizada, mejorando el rendimiento y la seguridad.",
      "Diseñé y desarrollé una solución web completa con HTML5, CSS3, JavaScript, Node.js con Express.js y MySQL.",
      "Implementé la aplicación en un VPS, utilizando Nginx y PM2 para la administración del servidor.",
      "Desarrollé funciones dinámicas y elementos de interfaz de usuario avanzados para mejorar la experiencia del usuario.",
      "Colaboré con un equipo de cuatro personas para integrar soluciones tecnológicas alineadas con los objetivos del negocio.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "MySQL", "Nginx", "PM2"],
  },
  {
    title: "Desarrollador Front-end",
    company: "BBVA IT",
    location: "Madrid, España",
    period: "Abril 2023 - Octubre 2023",
    achievements: [
      "Proporcioné soporte a aplicaciones bancarias críticas, analizando registros y resolviendo incidencias de frontend.",
      "Implementé mejoras en la usabilidad y el rendimiento de la aplicación utilizando LitElement (Cells).",
      "Colaboré directamente con clientes para diagnosticar y resolver problemas de manera eficiente.",
      "Trabajé en equipos multifuncionales, utilizando Jira y Bitbucket para la gestión de proyectos y control de versiones.",
    ],
    technologies: ["LitElement", "JavaScript", "Jira", "Bitbucket"],
  },
  {
    title: "Desarrollador de Software Junior",
    company: "Jusan",
    location: "Madrid, España",
    period: "Marzo 2022 - Abril 2023",
    achievements: [
      "Diseñé y desarrollé aplicaciones con Spring Boot, aplicando principios de arquitectura limpia.",
      "Implementé y mantuve microservicios escalables e integrados en la arquitectura principal de la aplicación.",
      "Desarrollé aplicaciones web con React, creando interfaces dinámicas y optimizadas.",
      "Colaboré en la construcción de una aplicación móvil con React Native, integrando APIs de terceros para ampliar funcionalidades.",
    ],
    technologies: ["Spring Boot", "Java", "React", "React Native", "Microservicios"],
  },
]

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl font-bold text-center mb-12 font-playfair gradient-text">Experiencia Laboral</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className={`shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${
                  isVisible ? `animate-slide-in-left animate-delay-${(index + 1) * 100}` : "opacity-0"
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary font-playfair">{exp.title}</CardTitle>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                    <span className="font-semibold text-foreground">{exp.company}</span>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
