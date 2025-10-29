import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { AnimatedGradientBackground } from "./components/AnimatedGradientBackground";
import { Navigation } from "./components/Navigation";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { ProjectFolder } from "./components/ProjectFolder";
import { ProjectCollage } from "./components/ProjectCollage";
import { InfiniteMarquee } from "./components/InfiniteMarquee";
import { Footer } from "./components/Footer";
import { ArrowRight, Mail, Instagram } from "lucide-react";
import eugeniaImg from "figma:asset/818c9a79face153f475a5b7ce047ce73288316b7.png";
import manuelaImg from "figma:asset/6f2485879e58636e0a81b4b74f24be293b2b0dfd.png";

export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "servicios", "proyectos", "estudio", "contacto"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8 },
  };

  const projects = [
    {
      title: "Residencia Moderna",
      category: "Arquitectura Residencial",
      image: "https://images.unsplash.com/photo-1704040686324-e0552fbc9167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjE2OTc2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "#9da88f",
    },
    {
      title: "Espacio Minimalista",
      category: "Arquitectura Residencial",
      image: "https://images.unsplash.com/photo-1761414500964-5602621f9277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcmVzaWRlbnRpYWwlMjBzcGFjZXxlbnwxfHx8fDE3NjE2OTc2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "#c4a57b",
    },
    {
      title: "Local Comercial",
      category: "Arquitectura Comercial",
      image: "https://images.unsplash.com/photo-1687945727613-a4d06cc41024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBjb21tZXJjaWFsJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxNjk3Njk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "#6b7b8c",
    },
    {
      title: "Estudio Creativo",
      category: "Manual de Arquitectura",
      image: "https://images.unsplash.com/photo-1635182473361-1f72e7b4be83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZGVzaWduJTIwc3R1ZGlvfGVufDF8fHx8MTc2MTY1MzY0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      color: "#d4b5a0",
    },
    {
      title: "Reforma Integral",
      category: "Arquitectura Residencial",
      image: "https://images.unsplash.com/photo-1704040686324-e0552fbc9167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjE2OTc2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "#8b9a8d",
    },
    {
      title: "Identidad de Marca",
      category: "Manual de Arquitectura",
      image: "https://images.unsplash.com/photo-1687945727613-a4d06cc41024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBjb21tZXJjaWFsJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxNjk3Njk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "#a8b5a0",
    },
  ];

  const services = [
    {
      title: "Arquitectura residencial",
      description:
        "Creamos y reformamos, potenciando lo inherente de cada lugar. Diseñamos espacios a medida, entendiendo las necesidades y formas de habitar de cada persona. Acompañamos todo el proceso, desde la idea inicial hasta la obra, con una mirada sensible sobre el espacio, los materiales, la luz y el entorno.",
    },
    {
      title: "Manual de arquitectura",
      description:
        "Desarrollamos manuales de arquitectura para marcas que buscan expandirse a través de franquicias o nuevos locales. Estas guías aseguran una estética coherente y alineada con la identidad visual, permitiendo que cada espacio mantenga el espíritu de la marca, adaptándose a distintos contextos sin perder unidad.",
    },
    {
      title: "Arquitectura comercial",
      description:
        "Con la base fundamental del concept y el anteproyecto, el servicio de proyecto es el paso final del proceso de diseño donde se materializan todos los detalles, proporcionándote los planos precisos y las especificaciones necesarias para la construcción. Con el fin de asegurarte de que cada aspecto de tu proyecto esté cuidadosamente planificado y ejecutado.",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <Navigation activeSection={activeSection} />

      {/* INICIO */}
      <section id="inicio">
        <AnimatedGradientBackground colors={["#1a0a2e", "#4a1565", "#7b2d95"]}>
          <div className="container mx-auto px-6 flex items-center justify-center min-h-screen">
            <div className="text-center max-w-4xl">
              <motion.h1
                className="text-black/90 mb-8 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                TRANSFORMAMOS IDEAS EN ESPACIOS CON IDENTIDAD Y PROPÓSITO
              </motion.h1>
              <motion.button
                onClick={() => scrollToSection("proyectos")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-black/10 backdrop-blur-sm border border-black/20 text-black/80 rounded-full hover:bg-black/15 transition-all"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                Mirá nuestros proyectos
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </AnimatedGradientBackground>
      </section>

      {/* Marquee separator */}
      <InfiniteMarquee background="bg-black/80" />

      {/* PROYECTOS */}
      <section id="proyectos">
        <AnimatedGradientBackground colors={["#16697a", "#489fb5", "#82c0cc"]}>
          <div className="container mx-auto px-6 py-32">
            <motion.div className="max-w-4xl mx-auto mb-16 text-center" {...fadeInUp}>
              <h2 className="text-black/90 mb-6">PROYECTOS</h2>
              <p className="text-black/80 text-lg leading-relaxed">
                Diseñamos espacios que responden a las formas de habitar, sentir y experimentar cada
                lugar. Acompañamos a personas y marcas en todo el proceso desde la idea inicial
                hasta la materialización con una mirada sensible y estratégica. Nos especializamos
                en proyectos residenciales, comerciales y de expansión de marca, integrando
                arquitectura, identidad y contexto para crear propuestas únicas, funcionales y
                coherentes.
              </p>
            </motion.div>
            
            <ProjectCollage projects={projects} />
          </div>
        </AnimatedGradientBackground>
      </section>

      {/* SERVICIOS */}
      <section id="servicios">
        <AnimatedGradientBackground colors={["#0a4d3c", "#2d6a4f", "#40916c"]}>
          <div className="container mx-auto px-6 py-32">
            <motion.h2 className="text-black/90 mb-16 text-center" {...fadeInUp}>
              SERVICIOS
            </motion.h2>

            <div className="max-w-5xl mx-auto space-y-16">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-black/10 rounded-2xl p-8 md:p-12"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-black/90 mb-4">{service.title}</h3>
                  <p className="text-black/70 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedGradientBackground>
      </section>

      {/* ESTUDIO */}
      <section id="estudio">
        <AnimatedGradientBackground colors={["#8b4513", "#a0522d", "#cd853f"]}>
          <div className="container mx-auto px-6 py-32">
            <div className="max-w-5xl mx-auto">
              <motion.div className="text-center mb-16" {...fadeInUp}>
                <h2 className="text-black/90 mb-4">SOBRE</h2>
                <h3 className="text-black/90 mb-2">COMMA</h3>
                <h3 className="text-black/90 mb-8">ESTUDIO</h3>
                <p className="text-black/80 text-xl mb-12">
                  TRANSFORMAMOS IDEAS EN ESPACIOS CON IDENTIDAD Y PROPÓSITO.
                </p>
              </motion.div>

              <motion.div className="mb-16" {...fadeInUp}>
                <p className="text-black/80 text-lg leading-relaxed mb-6">
                  Somos un estudio de arquitectura y diseño con base en Buenos Aires. Creemos que
                  los espacios son una extensión de quienes los habitan, ya sea una persona o una
                  marca. Por eso, nuestro proceso de diseño pone la identidad en el centro de todo.
                </p>
                <p className="text-black/80 text-lg leading-relaxed">
                  El estudio está liderado por Eugenia Esquivel y Manuela Verdun, arquitectas
                  apasionadas por la intersección entre el diseño, la funcionalidad y la narrativa
                  de marca.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-6">
                    <img
                      src={eugeniaImg}
                      alt="Eugenia Esquivel"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-black/90 mb-2">Eugenia Esquivel</h4>
                  <p className="text-black/60">Fundadora de Comma Estudio</p>
                </motion.div>

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-6">
                    <img
                      src={manuelaImg}
                      alt="Manuela Verdun"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-black/90 mb-2">Manuela Verdun</h4>
                  <p className="text-black/60">Fundadora de Comma Estudio</p>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedGradientBackground>
      </section>

      {/* CONTACTO */}
      <section id="contacto">
        <AnimatedGradientBackground colors={["#2d1b4e", "#512b58", "#7b3e5d"]}>
          <div className="container mx-auto px-6 py-32">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div {...fadeInUp}>
                <h2 className="text-black/90 mb-6">HACÉ UN</h2>
                <h2 className="text-black/90 mb-6">PROYECTO</h2>
                <h2 className="text-black/90 mb-12">CON COMMA</h2>

                <p className="text-black/80 text-lg leading-relaxed mb-16 max-w-3xl mx-auto">
                  La propuesta de Comma Estudio se basa en un enfoque especializado y único en la
                  creación de espacios comerciales y residenciales, poniendo énfasis en el diseño
                  para transmitir identidad.
                </p>

                <p className="text-black/80 text-lg leading-relaxed mb-16 max-w-3xl mx-auto">
                  Utilizamos la arquitectura no solo para crear espacios sino para ayudar a
                  construir la identidad completa de la marca a través de la experiencia visual y
                  sensorial.
                </p>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h3 className="text-black/90 mb-8">Contacto Directo</h3>

                <a
                  href="mailto:Hola@commaestudio.com"
                  className="flex items-center justify-center gap-3 text-black/80 hover:text-black transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Hola@commaestudio.com</span>
                </a>

                <p className="text-black/60">Oficina: Buenos Aires - Argentina</p>

                <a
                  href="https://instagram.com/comma.estudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-black/80 hover:text-black transition-colors group"
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>@comma.estudio</span>
                </a>
              </motion.div>
            </div>
          </div>
        </AnimatedGradientBackground>
      </section>

      {/* Infinite Marquee */}
      <InfiniteMarquee />

      {/* Footer */}
      <Footer />
    </div>
  );
}
