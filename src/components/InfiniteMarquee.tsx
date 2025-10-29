import { motion } from "motion/react";

interface InfiniteMarqueeProps {
  background?: string;
}

export function InfiniteMarquee({ background = "bg-black/90" }: InfiniteMarqueeProps) {
  const marqueeText = "COMMA ESTUDIO";
  
  return (
    <div className={`relative overflow-hidden ${background} py-6 md:py-8 border-y border-white/20`}>
      <div className="flex">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -2400],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 md:gap-8 px-6 md:px-8">
              <span className="text-white/90 tracking-[0.2em] text-xl md:text-4xl font-light">
                {marqueeText}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white/60 hidden md:block"
              >
                <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
              </svg>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white/60"
              >
                <path
                  d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-white/40 tracking-[0.15em] text-xl md:text-4xl font-light">
                COMMAESTUDIO.COM
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white/60"
              >
                <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
              </svg>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
