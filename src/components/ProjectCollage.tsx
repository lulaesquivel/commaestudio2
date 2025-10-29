import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

interface Project {
  title: string;
  category: string;
  image: string;
  color: string;
}

interface ProjectCollageProps {
  projects: Project[];
}

export function ProjectCollage({ projects }: ProjectCollageProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Define un layout asimétrico con diferentes tamaños y posiciones
  const collageLayout = [
    { row: "span 2", col: "span 1", height: "h-[500px]" }, // 0: vertical alto
    { row: "span 1", col: "span 2", height: "h-[240px]" }, // 1: horizontal ancho
    { row: "span 1", col: "span 1", height: "h-[240px]" }, // 2: pequeño
    { row: "span 1", col: "span 1", height: "h-[240px]" }, // 3: pequeño
    { row: "span 1", col: "span 2", height: "h-[240px]" }, // 4: horizontal ancho
    { row: "span 2", col: "span 1", height: "h-[500px]" }, // 5: vertical alto
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-auto gap-4 md:gap-6 max-w-7xl mx-auto">
      {projects.map((project, index) => {
        const layout = collageLayout[index % collageLayout.length];
        const isHovered = hoveredIndex === index;
        
        return (
          <motion.div
            key={index}
            className={`relative overflow-hidden rounded-lg cursor-pointer ${layout.height}`}
            style={{ gridRow: layout.row, gridColumn: layout.col }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Imagen de fondo */}
            <div className="absolute inset-0">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700"
                style={{
                  transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                }}
              />
            </div>

            {/* Overlay con degradado de color del proyecto - estilo Vang Studios */}
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                opacity: isHovered ? 1 : 0,
                background: `linear-gradient(135deg, ${project.color}dd 0%, ${project.color}88 50%, transparent 100%)`,
              }}
            />

            {/* Información del proyecto */}
            <div 
              className="absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-500"
              style={{ opacity: isHovered ? 1 : 0 }}
            >
              <motion.div
                initial={{ y: 0, opacity: 0 }}
                animate={{ 
                  y: isHovered ? 0 : 20, 
                  opacity: isHovered ? 1 : 0 
                }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-white/90 text-sm mb-2">{project.category}</p>
                <h3 className="text-white drop-shadow-lg">{project.title}</h3>
              </motion.div>
            </div>

            {/* Indicador de color */}
            <div
              className="absolute top-4 right-4 w-3 h-3 rounded-full ring-2 ring-white/50 transition-opacity duration-300"
              style={{ 
                backgroundColor: project.color,
                opacity: isHovered ? 0 : 1
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
