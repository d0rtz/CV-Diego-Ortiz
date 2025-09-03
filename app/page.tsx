"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Moon, Sun, Briefcase, GraduationCap, Code, Languages, User, Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function CVPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background transition-colors duration-300">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full shadow-lg backdrop-blur-sm w-10 h-10 sm:w-auto sm:h-auto"
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-12 max-w-4xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <Card className="p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-card via-card to-muted/30 border-2 shadow-xl">
            <CardContent className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Diego Ortiz
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-medium">
                Desarrollador Web Full Stack
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span className="text-center">Getafe, Madrid, España</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span>+34 611 51 16 51</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span className="break-all sm:break-normal">diegoortizruescas@gmail.com</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Linkedin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <a href="https://www.linkedin.com/in/d0rtz" className="text-primary hover:underline">
                    LinkedIn
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Professional Summary */}
        <Section icon={<User />} title="Resumen Profesional">
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground">
            Desarrollador web <strong className="text-foreground">full stack</strong> con{" "}
            <strong className="text-foreground">2 años</strong> de experiencia y un sólido conocimiento de{" "}
            <strong className="text-foreground">JavaScript</strong> y frameworks modernos como{" "}
            <strong className="text-foreground">React</strong>. He demostrado éxito en la creación de soluciones web
            personalizadas, la optimización del rendimiento y la implementación de sistemas backend robustos. Mi
            experiencia en los sectores <strong className="text-foreground">inmobiliario y bancario</strong> incluye el
            diseño y desarrollo de aplicaciones web y la colaboración en equipos multidisciplinarios.
          </p>
        </Section>

        {/* Experience Timeline */}
        <Section icon={<Briefcase />} title="Experiencia Laboral">
          <TimelineExperience />
        </Section>

        {/* Skills Section */}
        <Section icon={<Code />} title="Habilidades Técnicas">
          <SkillsSection />
        </Section>

        {/* Education */}
        <Section icon={<GraduationCap />} title="Educación y Formación">
          <div className="space-y-6">
            <EducationItem
              title="Grado Superior en Desarrollo de Aplicaciones Web"
              institution="IES Laguna de Joatzel"
              location="Getafe, Madrid"
              period="Septiembre 2020 - Junio 2022"
            />
            <EducationItem
              title="Grado Medio en Sistemas Microinformáticos y Redes"
              institution="IES Juan Bosco"
              location="Alcázar de San Juan, Ciudad Real"
              period="Septiembre 2018 - Junio 2020"
            />
          </div>
        </Section>

        {/* Languages */}
        <Section icon={<Languages />} title="Idiomas">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LanguageItem language="Español" level="Nativo" progress={100} />
            <LanguageItem language="Inglés" level="Avanzado" progress={85} />
          </div>
        </Section>
      </div>
    </div>
  )
}

function Section({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="mb-8 sm:mb-12"
    >
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">{icon}</div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">{title}</h2>
      </div>
      <Card className="p-3 sm:p-4 lg:p-6 shadow-lg">
        <CardContent>{children}</CardContent>
      </Card>
    </motion.section>
  )
}

function TimelineExperience() {
  const experiences = [
    {
      title: "Desarrollador Web Full Stack",
      company: "Velzia",
      location: "Madrid, España",
      period: "Marzo 2024 - Noviembre 2024",
      responsibilities: [
        "Desarrollador único para la migración del sitio web de bienes raíces de lujo de WordPress a una plataforma personalizada, mejorando el rendimiento y la seguridad.",
        "Diseñé y desarrollé una solución web completa con HTML5, CSS3, JavaScript, Node.js con Express.js y MySQL.",
        "Implementé la aplicación en un VPS, utilizando Nginx y PM2 para la administración del servidor.",
        "Desarrollé funciones dinámicas y elementos de interfaz de usuario avanzados para mejorar la experiencia del usuario.",
        "Colaboré con un equipo de cuatro personas para integrar soluciones tecnológicas alineadas con los objetivos del negocio.",
      ],
    },
    {
      title: "Desarrollador Front-end",
      company: "BBVA IT",
      location: "Madrid, España",
      period: "Abril 2023 - Octubre 2023",
      responsibilities: [
        "Proporcioné soporte a aplicaciones bancarias críticas, analizando registros y resolviendo incidencias de frontend.",
        "Implementé mejoras en la usabilidad y el rendimiento de la aplicación utilizando LitElement (Cells).",
        "Colaboré directamente con clientes para diagnosticar y resolver problemas de manera eficiente.",
        "Trabajé en equipos multifuncionales, utilizando Jira y Bitbucket para la gestión de proyectos y control de versiones.",
      ],
    },
    {
      title: "Desarrollador de Software Junior",
      company: "Jusan",
      location: "Madrid, España",
      period: "Marzo 2022 - Abril 2023",
      responsibilities: [
        "Diseñé y desarrollé aplicaciones con Spring Boot, aplicando principios de arquitectura limpia.",
        "Implementé y mantuve microservicios escalables e integrados en la arquitectura principal de la aplicación.",
        "Desarrollé aplicaciones web con React, creando interfaces dinámicas y optimizadas.",
        "Colaboré en la construcción de una aplicación móvil con React Native, integrando APIs de terceros para ampliar funcionalidades.",
      ],
    },
  ]

  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <TimelineItem key={index} experience={exp} index={index} />
        ))}
      </div>
    </div>
  )
}

function TimelineItem({ experience, index }: { experience: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative pl-8 sm:pl-12"
    >
      <div className="absolute left-1 sm:left-2 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full border-2 sm:border-4 border-background shadow-lg"></div>
      <Card className="p-3 sm:p-4 lg:p-6 hover:shadow-xl transition-shadow duration-300 border-l-2 sm:border-l-4 border-l-primary">
        <CardContent>
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">{experience.title}</h3>
          <p className="text-sm sm:text-base text-primary font-semibold mb-1">{experience.company}</p>
          <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{experience.period}</p>
          <ul className="space-y-1.5 sm:space-y-2">
            {experience.responsibilities.map((resp: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-secondary rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                <span className="leading-relaxed">{resp}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5/CSS3", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React.js", level: 85 },
        { name: "LitElement", level: 75 },
      ],
      color: "chart-1",
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Java", level: 75 },
        { name: "Spring Boot", level: 70 },
      ],
      color: "chart-2",
    },
    {
      category: "Bases de Datos",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 70 },
        { name: "PhpMyAdmin", level: 80 },
      ],
      color: "chart-3",
    },
    {
      category: "DevOps & Herramientas",
      skills: [
        { name: "Git", level: 90 },
        { name: "Nginx", level: 75 },
        { name: "PM2", level: 70 },
        { name: "Jira", level: 80 },
      ],
      color: "chart-4",
    },
  ]

  return (
    <div className="space-y-8">
      {skillCategories.map((category, index) => (
        <SkillCategory key={index} category={category} index={index} />
      ))}
    </div>
  )
}

function SkillCategory({ category, index }: { category: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
        <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-${category.color}`}></div>
        {category.category}
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
        {category.skills.map((skill: any, skillIndex: number) => (
          <SkillBar key={skillIndex} skill={skill} delay={skillIndex * 0.1} color={category.color} />
        ))}
      </div>
    </motion.div>
  )
}

function SkillBar({ skill, delay, color }: { skill: any; delay: number; color: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setProgress(skill.level)
      }, delay * 1000)
      return () => clearTimeout(timer)
    }
  }, [isInView, skill.level, delay])

  return (
    <div ref={ref} className="space-y-1.5 sm:space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-xs sm:text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-xs sm:text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <Progress value={progress} className="h-1.5 sm:h-2" />
    </div>
  )
}

function EducationItem({
  title,
  institution,
  location,
  period,
}: {
  title: string
  institution: string
  location: string
  period: string
}) {
  return (
    <div className="border-l-2 sm:border-l-4 border-l-secondary pl-3 sm:pl-4">
      <h3 className="text-base sm:text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm sm:text-base text-secondary font-medium">{institution}</p>
      <p className="text-xs sm:text-sm text-muted-foreground">{location}</p>
      <p className="text-xs sm:text-sm text-muted-foreground italic">{period}</p>
    </div>
  )
}

function LanguageItem({ language, level, progress }: { language: string; level: string; progress: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [currentProgress, setCurrentProgress] = useState(0)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setCurrentProgress(progress)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isInView, progress])

  return (
    <div ref={ref} className="space-y-1.5 sm:space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm sm:text-base font-medium text-foreground">{language}</span>
        <span className="text-xs sm:text-sm text-muted-foreground">{level}</span>
      </div>
      <Progress value={currentProgress} className="h-1.5 sm:h-2" />
    </div>
  )
}
