"use client";
import "leaflet/dist/leaflet.css";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Map = () => {
  return (
    <motion.section
    variants={fadeIn('up', 0.3)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.2}}
    id="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2152.253796934739!2d89.17085438123658!3d24.875971308572407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc5964bd3fbd43%3A0xdcbb1b19b9c669a4!2sHanif%20enterprise!5e0!3m2!1sen!2sbd!4v1693199158377!5m2!1sen!2sbd"
        width="100%"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </motion.section>
  );
};

export default Map;
