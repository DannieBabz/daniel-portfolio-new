import React from 'react'
import * as motion from "motion/react-client"
import { fadeRight, fadeUp } from '@/lib/animation'

const CardItems = [
  {
    title: "4+",
    label: "Years of experience",
  },
  {
    title: "30+",
    label: "Projects completed",
  },
  {
    title: "12",
    label: "Happy clients",
  },
  {
    title: "∞",
    label: "Coffee consumed",
  },
];

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-full justify-evenly h-fit lg:h-screen py-10 flex items-center bg-background border-t border-b">
    <div className="px-5 h-fit flex max-md:flex-col w-3/4 mx-auto justify-center gap-16 lg:p-0">
        <div className="max-w-full">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeRight}
            transition={{ duration: 1.2 }}
            viewport={{ once: false}}
            className="text-accent flex items-center my-6 space-x-2 text">
          <span>01</span>
          <div className="w-3 h-px border-accent border"></div>
            <span >ABOUT ME</span>
          <div className="w-20 h-px border-muted border"></div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 1.2 }}
            className="max-w-3/4">
            <h2 className="hero-text2">
              Crafting the web, one pixel at a time.
            </h2>
            <p className="text-muted mt-4">
              Hi, I'm Daniel - a front-end developer based in Lagos, Nigeria. I specialize in building modern web applications with a strong focus on performance, clean code, and user experience. 
            </p>
            <p className="text-muted mt-4">
              With years in the industry, I've had the priviledge of working with diverse clients and teams, delivering high-quality web applications that are both functional and visually appealing.
            </p>
            <p className="text-muted mt-4">
              When I'm not coding, you can find me exploring the latest web technologies,  reading or solidifying my skills in chess.
            </p>
          </motion.div>
        </div>
          <div className="flex justify-center items-end">
            <div className="grid grid-cols-2 gap-1 justify-center mt-8 lg:mt-0">
              {CardItems.map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 200 }}
                  transition={{ duration: 0.8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-[rgba(12,12,14,0.85)] border border-muted/30 p-6 text-center"
                >
                  <h3 className="hero-text2 text-accent">{item.title}</h3>
                  <p className="text-muted label uppercase font-mono mt-2">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
    </section>
  )
}

export default About