import ContactForm from '@/components/contact-form/form'
import Link from 'next/link'
import * as motion from "motion/react-client"
import { fadeLeft, fadeRight, fadeUp } from '@/lib/animation'

const Contact = () => {
  return (
    <section id="contact" className="mx-auto justify-center h-fit lg:h-screen py-10 flex items-center bg-background border-t border-b">
      <div className="px-5 h-fit flex flex-col lg:flex-row w-3/4 mx-auto gap-16 lg:p-0">
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="text-accent flex items-center my-6 space-x-2 text">
          <span>04</span>
          <div className="w-3 h-px border-accent border"></div>
            <span >CONTACT</span>
          <div className="w-20 h-px border-muted border"></div>
          </motion.div>
          <div className="h-fit flex flex-col mx-auto lg:p-0">
            <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="max-w-3/4"
            >
                <h2 className="hero-text2">
                Let&apos;s build something great together.
                </h2>
                <p className="text-muted">I&apos;m currently available for freelance work and open to new opportunities.</p>
            </motion.div>
                <Link href="mailto:similoluwababatunde@gmail.com" className="text-white block my-10 w-fit hero-text2 text-xl md:text-2xl lg:text-4xl transition-all border-b-2 pb-2 hover:border-accent">similoluwababatunde@gmail.com</Link>
          </div>
        </div>
        <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="w-full max-w-2xl">
            <ContactForm />
        </motion.div>

        </div>
    </section>
  )
}

export default Contact