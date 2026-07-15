import * as motion from "motion/react-client";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="mx-auto justify-center h-screen w-full flex items-center py-6 bg-[rgba(12,12,14,0.85)] relative bg-[linear-gradient(#232329_1px,transparent_1px),linear-gradient(90deg,#232329_1px,transparent_1px)] bg-size-[80px_80px] lg:mask-[radial-gradient(ellipse_70%_80%_at_50%_50%,black_30%,transparent_100%)] mask-[radial-gradient(ellipse_70%_80%_at_50%_50%,black_30%,transparent_100%)]">
      <div className="m-auto justify-center h-screen flex items-center">
        <div className="flex flex-col gap-10 mx-5">

          <motion.div
            className="flex text items-center gap-2"
            initial={{ opacity: 0.2, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="w-6 h-px border-accent border"></div>
            <span className="text-accent">Hi There! I'm</span>
          </motion.div>

          <motion.div
            className="w-xs"
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
          >
            <h1 className="hero-text">
              Daniel <span className="text-accent">Babatunde</span>
            </h1>
            <p className="text-muted">
              I build fast, accessible, and beautifully crafted web experiences
              — from pixel-perfect UIs to robust full-stack systems.
            </p>
          </motion.div>

          <motion.div
            className="gap-4 flex flex-row text"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div 
              whileHover={{ scale: 1.1, skewY: 1, skewX: 1 }} 
              whileTap={{ scale: 0.95 }}>
              <Link href="#projects" className="bg-accent py-7 px-5 text-background hover:bg-accent/80">
                View Projects →
              </Link>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.1,skewY: 1, skewX: 1 }} 
              whileTap={{ scale: 0.95 }}>
              <Link href="#contact" className="py-7 px-5 border-accent border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50">
                Get in Touch
              </Link>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;