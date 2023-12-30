'use client'
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn } from "../variants"
import { Button } from "./ui/button"

const About = () => {
  return (
    <section className=" grid grid-cols-1 xl:grid-cols-2 gap-x-[74px] p-8 md:p-12 xl:p-8 items-center" id="about">
      <motion.div 
      variants={fadeIn('right', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.2}}
      className=" xl:pl-[135px]">
        <h1 className=" mb-9">Let's Talk About W'Food</h1>
        <p className=" mb-8">For Mauris and himself in There is no laughter in my mind, but it is fair. Let him be himself, for he is the one who succeeds. Laoreet needs to ease the fear of getting pregnant. For no one likes brown. Children's net or football.
        </p>
        <p className=" mb-10">
        easy to put basketball. The old man wants to be able to choose the arch of the real estate bed. The proverbial bronze of two trucks Tortor purus needs a chocolate urn or to decorate a bed of ultricies. Unless, for sure, it's an airline. Life and health need health care, as a Turpis adipiscing eleifend dignissim viverra euismod ultrices.
        </p>
        <Button> Read more</Button>
      </motion.div>
      <motion.div
      variants={fadeIn('left', 0.4)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.2}}
      >
        <Image src='/about/img.png' width={750} height={771} alt="" className=" hidden xl:flex"/>
      </motion.div>
    </section>
  )
}

export default About