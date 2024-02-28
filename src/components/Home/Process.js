import React, {useEffect} from "react";
import "./design.css";
import { Parallax } from "react-parallax";
import g1 from "./../../assets/myanim/g1.jpg";
import g2 from "./../../assets/myanim/g2.jpg";
import g3 from "./../../assets/myanim/g3.jpg";
import { CButton} from "@coreui/react";
import join from "./../../assets/animation/join.png";
import { motion, useAnimation } from 'framer-motion';

export default function Process() {
   const controls = useAnimation();
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const cardElements = document.querySelectorAll('.mycard');
      
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
    <div>
      <div className="App">
        <Parallax strength={300} bgImage={g1}>
          <div className="content" >
            <motion.div class="mycard row justify-content-center" variants={cardVariants} initial="hidden" animate={controls}>
              <div class="col-md-8">
                <div
                  class="mycard bg-transparent p-4 rounded-lg card"
                  style={{ border: "none" }}
                >
                  <h1 className=" font-bold text-orange-500 w3-center text-5xl">
                    Create without limits
                  </h1>
                  <p class=" m-5 space-y-3 text-2xl text-justify justify-center">
                    With Unreal Engine, you can bring amazing real-time
                    experiences to life using the world’s most advanced
                    real-time 3D creation tool. From first projects to the most
                    demanding challenges, our free and accessible resources and
                    inspirational community empower everyone to realize their
                    ambitions..
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Parallax>

        <Parallax strength={300} blur={{ min: -5, max: 15 }} bgImage={g2}>
          <div className="content">
            <section className="inner-conatiner modal-body mask my-lg-5 mx-lg-5 pb-5 mt-3">
              <div className="w3-container mask rounded">
                <div className="w3-row-padding">
                  <div className="w3-col m6 my-lg-4">
                    <h3></h3>
                    <h1 className="display-9 w3-jumbo font-serif">
                      Join The Community
                    </h1>
                    <div className="w3-container my-1 p-2">
                      <CButton className="w3-xlarge px-5 bg-orange-600 hover:bg-slate-500">
                        join us
                      </CButton>
                    </div>
                    <br />
                  </div>
                  <div className="w3-col m6">
                    <img
                      className="w3-image w3-round-large"
                      src={join}
                      alt="Buildings"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Parallax>
      </div>
    </div>
  );
}
