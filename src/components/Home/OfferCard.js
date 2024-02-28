import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { CImage } from '@coreui/react';
import g7 from "./../../assets/animation/g7.jpg";
import g8 from "./../../assets/animation/g8.jpg";
import g9 from "./../../assets/animation/g9.jpg";
export default function OfferCard() {
  const controls = useAnimation();
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const cardElements = document.querySelectorAll('.card');
      
      cardElements.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowHeight * 0.9) { // Adjust threshold as needed
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className='h-full w-full flex flex-wrap justify-center items-center bg-slate-600'>
      <motion.div className='bg-neutral-300 rounded-lg font-mono text-lg w-72 h-96 p-5 m-5 card' 
      variants={cardVariants} initial="hidden" animate={controls}
      style={{  backgroundImage: `url(${g7})`, backgroun:'cover'}}
      >
      </motion.div>
      <motion.div className='bg-neutral-300 rounded-lg font-mono text-lg w-72 h-96 p-5 m-5 card'
       variants={cardVariants} initial="hidden" animate={controls}
       style={{  backgroundImage: `url(${g8})`, backgroun:'cover'}}>
      </motion.div>
      <motion.div className=' bg-cover rounded-lg font-mono text-lg w-72 h-96 p-5 m-5 card' 
      variants={cardVariants} initial="hidden" animate={controls}
       style={{  backgroundImage: `url(${g9})`, backgroun:'cover'}}
      >
      </motion.div>
    </div>
  );
}
