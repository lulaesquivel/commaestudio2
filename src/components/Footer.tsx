import { motion } from "motion/react";
import { Mail, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#f5f1e8] to-[#ede8dc] border-t border-black/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {/* Logo with dotted effect */}
          <div className="md:col-span-1">
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-black/90 tracking-[0.2em] text-2xl mb-1" style={{
                fontFamily: "monospace",
              }}>
                COMMA
              </div>
              <div className="text-black/90 tracking-[0.2em] text-2xl" style={{
                fontFamily: "monospace",
              }}>
                ESTUDIO
              </div>
            </motion.div>
          </div>

          {/* Social */}
          <div className="md:col-span-1">
            <h4 className="text-black/40 mb-6 text-xs tracking-widest uppercase">Social</h4>
            <div className="space-y-3">
              <a
                href="https://instagram.com/comma.estudio"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-black/70 hover:text-black transition-colors text-sm"
              >
                Instagram @comma.estudio
              </a>
              <a
                href="https://www.facebook.com/comma.estudio"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-black/70 hover:text-black transition-colors text-sm"
              >
                Facebook /comma.estudio
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div className="md:col-span-1">
            <h4 className="text-black/40 mb-6 text-xs tracking-widest uppercase">Servicios</h4>
            <div className="space-y-3">
              <button className="block text-black/70 hover:text-black transition-colors text-left text-sm">
                Arquitectura residencial
              </button>
              <button className="block text-black/70 hover:text-black transition-colors text-left text-sm">
                Arquitectura comercial
              </button>
              <button className="block text-black/70 hover:text-black transition-colors text-left text-sm">
                Manual de arquitectura
              </button>
            </div>
          </div>

          {/* Contacto */}
          <div className="md:col-span-1">
            <h4 className="text-black/40 mb-6 text-xs tracking-widest uppercase">Trabajo y contactos</h4>
            <a
              href="mailto:Hola@commaestudio.com"
              className="block text-black/70 hover:text-black transition-colors mb-3 text-sm"
            >
              Hola@commaestudio.com
            </a>
            <p className="text-black/50 text-sm">Buenos Aires, Argentina</p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-black/10 text-center">
          <p className="text-black/30 text-xs tracking-wider">
            © {new Date().getFullYear()} COMMA ESTUDIO · TODOS LOS DERECHOS RESERVADOS
          </p>
        </div>
      </div>
    </footer>
  );
}
