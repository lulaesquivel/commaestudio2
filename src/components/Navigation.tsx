import { motion } from "motion/react";
import { useState, useEffect } from "react";

interface NavigationProps {
  activeSection: string;
}

export function Navigation({ activeSection }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { id: "inicio", label: "Inicio" },
    { id: "servicios", label: "Servicios" },
    { id: "proyectos", label: "Proyectos" },
    { id: "estudio", label: "Estudio" },
    { id: "contacto", label: "Contacto" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#f5f1e8]/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.button
          onClick={() => scrollToSection("inicio")}
          className="text-black/90 tracking-[0.2em] text-sm"
          whileHover={{ scale: 1.05 }}
        >
          COMMA ESTUDIO
        </motion.button>

        <div className="hidden md:flex gap-8">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`text-black/70 hover:text-black transition-colors relative text-sm ${
                activeSection === section.id ? "text-black" : ""
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {section.label}
              {activeSection === section.id && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-px bg-black"
                  layoutId="activeSection"
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
