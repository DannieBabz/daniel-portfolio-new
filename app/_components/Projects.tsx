import Image from "next/image";
import * as motion from "motion/react-client";
import { containerVariants, fadeUp } from "@/lib/animation";
import Link from "next/link";

const CardItems = [
  {
    id: 1,
    title: "Weather App",
    label: "A weather app with real-time updates and a clean interface.",
    image: "/project1.png",
    link: "https://weather-app-cyan-chi-46.vercel.app/",
    languages: ["React", "TailwindCSS", "OpenWeather API"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="mx-auto max-w-full justify-center h-fit lg:h-screen py-10 flex items-center bg-primary border-t border-b"
    >
      <div className="mx-auto px-5 h-fit flex w-3/4 flex-col lg:p-0 lg:justify-center">
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="text-accent flex items-center my-6 space-x-2"
          >
            <span>03</span>
            <div className="w-3 h-px border border-accent"></div>
            <span>PROJECTS</span>
            <div className="w-20 h-px border border-muted"></div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <h2 className="hero-text2">Things I&apos;ve built.</h2>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="my-8"
        >

          {CardItems.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group relative overflow-hidden bg-background border border-transparent"
            >
              <Link href={item.link} target="_blank">
              <div
                className="
                  absolute
                  top-0
                  left-0
                  h-0.5
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

              <div className="flex flex-col lg:flex-row items-center my-8 mx-auto lg:mx-20">
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1000}
                    height={1500}
                    className="transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="w-full lg:w-1/2 lg:p-10 flex flex-col">
                  <div className="flex flex-row py-10">
                    <div className="relative lg:-top-10 left-40 lg:-right-40 flex lg:justify-end">
                      <span className="label font-mono cursor-pointer text-xl transition-all duration-300 hover:text-accent hover:scale-110">
                        ↗
                      </span>
                    </div>

                    <div>
                      <h3 className="label font-mono text-accent">
                        01 - FEATURED
                      </h3>

                      <h2 className="text-xl font-bold mt-1">
                        {item.title}
                      </h2>

                      <p className="label text-lg lg:text-xl mt-2">
                        {item.label}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4 px-4">
                    {item.languages.map((language) => (
                      <div
                        key={language}
                        className="label font-mono text-[12px] text-muted border px-2 py-1 transition-colors duration-300 group-hover:border-accent/40"
                      >
                        {language}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;