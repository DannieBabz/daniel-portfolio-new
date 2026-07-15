import React from "react";
import * as motion from "motion/react-client";
import { containerVariants, fadeUp } from "@/lib/animation";

const SKILLS = [
  {
    title: "FRONTEND",
    languages: ["React", "Next.js", "Typescript", "TailwindCSS", "Motion"],
  },
  {
    title: "BACKEND",
    languages: ["Node.js", "REST APIs", "Express", "MongoDB"],
  },
  {
    title: "TOOLS",
    languages: ["Git", "Vercel", "Figma"],
  },
];

const Skills = () => {
  return (
    <section className="mx-auto max-w-full justify-center h-fit lg:h-screen flex items-center py-20 bg-background border-t border-b">
      <div className="px-5 h-fit flex w-3/4 flex-col max-w-5xl mx-auto lg:p-0 lg:justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <motion.div
            variants={fadeUp}
            className="text-accent flex items-center my-6 space-x-2"
          >
            <span>02</span>
            <div className="w-3 h-px border border-accent"></div>
            <span>SKILLS</span>
            <div className="w-20 h-px border border-muted"></div>
          </motion.div>

          <motion.h2 variants={fadeUp} className="hero-text2">
            What I work with.
          </motion.h2>
        </motion.div>

        <div className="flex justify-center lg:items-end">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center mt-8 lg:mt-10"
          >
            {SKILLS.map((skill) => (
              <motion.div
                key={skill.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group relative overflow-hidden bg-primary border border-muted/30 p-10 max-w-xs transition-colors duration-300 hover:border-accent/40 hover:shadow-[0_10px_40px_rgba(255,255,255,0.03)]"
              >
                {/* Animated top border */}
                <div
                  className="
                    absolute
                    top-0
                    left-0
                    h-[2px]
                    w-full
                    origin-left
                    scale-x-0
                    bg-accent
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-x-100
                  "
                />

                <h3 className="label text-[12px] text-accent mb-5">
                  {skill.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skill.languages.map((language) => (
                    <div
                      key={language}
                      className="
                        label
                        font-mono
                        text-[12px]
                        text-muted
                        border
                        border-muted/40
                        px-2
                        py-1
                        transition-all
                        duration-300
                        group-hover:border-accent/40
                        group-hover:text-white
                      "
                    >
                      {language}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;