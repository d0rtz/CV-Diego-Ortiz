"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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
    <section id="about" ref={sectionRef} className="py-20 bg-secondary">
      <div className="max-w-4xl mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl font-bold text-center mb-12 font-playfair gradient-text">Resumen Profesional</h2>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground font-source-sans">
                Desarrollador web <strong className="text-primary">full stack</strong> con{" "}
                <strong className="text-primary">2 años</strong> de experiencia y un sólido conocimiento de{" "}
                <strong className="text-primary">JavaScript</strong> y frameworks modernos como{" "}
                <strong className="text-primary">React</strong>. He demostrado éxito en la creación de soluciones web
                personalizadas, la optimización del rendimiento y la implementación de sistemas backend robustos. Mi
                experiencia en los sectores <strong className="text-primary">inmobiliario y bancario</strong> incluye el
                diseño y desarrollo de aplicaciones web y la colaboración en equipos multidisciplinarios. Busco un nuevo
                desafío donde pueda aplicar mis habilidades técnicas y contribuir a proyectos de gran impacto.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
