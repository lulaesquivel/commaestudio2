import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectFolderProps {
  title: string;
  category: string;
  image: string;
  color?: string;
  index: number;
}

export function ProjectFolder({ title, category, image, color = "#d4d4d4", index }: ProjectFolderProps) {
  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -15, scale: 1.02 }}
    >
      <div className="relative aspect-[3/4] perspective-1000">
        {/* Back layers - creating depth */}
        <div
          className="absolute inset-0 bg-gray-700 rounded-sm shadow-xl"
          style={{
            transform: "translate(12px, 12px) rotate(-2deg)",
            zIndex: 1,
          }}
        />
        <div
          className="absolute inset-0 bg-gray-600 rounded-sm shadow-xl"
          style={{
            transform: "translate(6px, 6px) rotate(-1deg)",
            zIndex: 2,
          }}
        />

        {/* Main folder */}
        <div
          className="absolute inset-0 rounded-sm shadow-2xl overflow-hidden transition-transform duration-300 group-hover:shadow-3xl"
          style={{
            backgroundColor: color,
            zIndex: 3,
          }}
        >
          {/* Embossed text on folder */}
          <div className="absolute top-8 left-0 right-0 text-center z-10">
            <h3
              className="opacity-30 tracking-wider px-4"
              style={{
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                color: "rgba(0,0,0,0.3)",
              }}
            >
              {title.toUpperCase()}
            </h3>
          </div>

          {/* Image inside folder - visible on hover */}
          <div className="absolute inset-4 top-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="w-full h-full bg-white shadow-lg p-2">
              <ImageWithFallback
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Folder texture overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Paper clip */}
        <motion.div
          className="absolute -top-3 right-8 z-20"
          animate={{
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            width="40"
            height="80"
            viewBox="0 0 40 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-md"
          >
            <path
              d="M20 5 C20 5, 25 5, 25 10 L25 60 C25 70, 15 70, 15 60 L15 15 C15 10, 20 10, 20 15 L20 55 C20 58, 18 58, 18 55 L18 20"
              stroke="#d4d4d4"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              style={{
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
              }}
            />
          </svg>
        </motion.div>

        {/* Binder clip alternative (randomly shown) */}
        {index % 3 === 0 && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
            <div className="w-12 h-8 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-sm shadow-lg relative">
              {/* Clip handles */}
              <div className="absolute -left-2 top-1 w-2 h-6 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full shadow" />
              <div className="absolute -right-2 top-1 w-2 h-6 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full shadow" />
              {/* Clip shine */}
              <div className="absolute top-0 left-2 right-2 h-1 bg-white/20 rounded-t-sm" />
            </div>
          </div>
        )}
      </div>

      {/* Labels below folder */}
      <motion.div
        className="mt-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 + index * 0.1 }}
      >
        <h4 className="text-black/90 mb-1">{title}</h4>
        <p className="text-black/60 text-sm tracking-wide">{category}</p>
      </motion.div>
    </motion.div>
  );
}
