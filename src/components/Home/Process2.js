import React ,{useEffect} from "react";
import "./design.css";
import { motion, useAnimation } from 'framer-motion';

export default function Process2() {
  const controls = useAnimation();
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const cardElements = document.querySelectorAll('.stylecard');
      
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };
  return (
    <>
     <div className='min-h-screen w-full flex flex-wrap bg-orange-600 justify-center items-center'>
      <section className="min-h-screen w-full text-center lower-section my-5 mx-5">
        <div className="row">
        <motion.div className="stylecard bg-transparent m-5 w-80 p-5 col-xlg-3 col-md-4 mb-md-5 mb-lg-0 position-relative square" variants={cardVariants} initial="hidden" animate={controls}>
            <h1 className="text-black text-4xl font-extrabold tracking-wide mb-3">
              Free download—includes every feature!
            </h1>
            <p className="leading-snug font-thin text-lg text-white will-change-scroll justify-evenly">
              Unreal Engine comes fully loaded and production-ready out of the
              box, with every feature and full source code access included.
            </p>
          </motion.div>
          <motion.div className="stylecard  border-5 w-96 p-5 col-xlg-3 col-md-4 m-2 mb-md-5 mb-lg-0 position-relative square p-lg-5 hover:bg-slate-50" variants={cardVariants} initial="hidden" animate={controls}>
            <h1 className="text-black text-3xl font-extrabold tracking-wide mb-3">
              GET UNREAL ENGINE
            </h1>
            <p className="leading-snug font-thin text-sm text-orange-700 will-change-scroll justify-evenly">
              Get started for free!.
            </p>
            <p className="leading-10 text-justify text-wrap">
              Unreal Engine is free to use for creating linear content, custom
              projects, and internal projects. It's also free to get started for
              game development—a 5% royalty only kicks in when your title earns
              over $1 million USD.
            </p>
          </motion.div>
          <motion.div className="stylecard border-5 w-96 p-5 col-xlg-3 col-md-4 m-2 mb-md-0 position-relative square p-lg-5 hover:bg-slate-50" variants={cardVariants} initial="hidden" animate={controls}>
            <h1 className="text-black text-3xl font-extrabold tracking-wide mb-3">
              TALK TO US
            </h1>
            <p className="leading-snug font-thin text-sm text-orange-700 will-change-scroll justify-evenly">
              Other license options
            </p>
            <p className="leading-10  text-justify text-wrap">
              Looking for premium support, private training, custom terms, or a
              direct relationship with Epic Games? Talk to us about an Unreal
              Enterprise Program license or custom solution.
            </p>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
}
