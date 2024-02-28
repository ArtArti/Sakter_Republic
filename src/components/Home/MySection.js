import React, { useEffect, useState } from "react";
import "./design.css";
import {
  CImage,
  CCarousel,
  CCarouselItem,
  CCarouselCaption,
} from "@coreui/react";
import g5 from "./../../assets/animation/g5.jpg";
import g6 from "./../../assets/animation/g6.jpg";
import g7 from "./../../assets/animation/g7.jpg";
import g8 from "./../../assets/animation/g8.jpg";
import g9 from "./../../assets/animation/g9.jpg";
import g10 from "./../../assets/animation/g10.jpg";

import { motion, useAnimation } from "framer-motion";

export default function MySection() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const cardElements = document.querySelectorAll(".card");

    cardElements.forEach((card, index) => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < windowHeight * 0.75) {
        // Adjust threshold as needed
        setIsVisible(true);
      }
    });
  };
  useEffect(() => {
    handleScroll(); // Call handleScroll on component mount to check visibility on load
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Remove controls dependency since we're not using it here

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isVisible, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariants1 = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };

  const myStyle = {
    width: "1500",
    height: "300",
  };

  return (
    <>
      <section className="pt-24 bg-orange-200 m-0">
        <motion.div
          className="row justify-content-center"
          variants={cardVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="col-md-8">
            <div
              className=" bg-transparent p-4 rounded-lg card"
              style={{ border: "none" }}
            >
              <h1 className=" font-bold text-orange-500 w3-center text-5xl">
                A thriving community of creators
              </h1>
              <p className=" m-5 space-y-3 text-2xl text-justify justify-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                pulvinar nisi auctor, pretium nisl et, fermentum nisl. In hac
                habitasse platea dictumst.
              </p>
            </div>
          </div>
        </motion.div>

        <div className=" w-full flex flex-wrap justify-center items-center">
          <motion.div
            className="my-1 mx-4 rounded-lg font-mono text-lg w-72 card"
            variants={cardVariants1}
            initial="hidden"
            animate={controls}
          >
            <CImage src={g5} alt="g1" />
          </motion.div>
          <motion.div
            className="my-1 mx-4 rounded-lg font-mono text-lg w-72 card"
            variants={cardVariants1}
            initial="hidden"
            animate={controls}
          >
            <CImage src={g6} alt="g1" />
          </motion.div>
          <motion.div
            className=" my-1 mx-4 rounded-lg font-mono text-lg w-72 card"
            variants={cardVariants1}
            initial="hidden"
            animate={controls}
          >
            <CImage src={g7} alt="g1" />
          </motion.div>
        </div>

        <section className="inner-conatiner modal-body mask mx-lg-5 pb-5">
          <div className="w3-container mask rounded">
            <div className="w3-row-padding">
              <CCarousel controls indicators>
                <CCarouselItem>
                  <CImage
                    className="h-96 d-block w-100"
                    src={g8}
                    alt="image 1"
                  />
                  <CCarouselCaption className="d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <CImage
                    className="h-96 d-block w-100"
                    src={g9}
                    alt="image 2"
                  />
                  <CCarouselCaption className="d-none d-md-block">
                    <h5>Second slide </h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <CImage
                    className="h-96 d-block w-100"
                    src={g10}
                    alt="image 3"
                  />
                  <CCarouselCaption className="d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </CCarouselCaption>
                </CCarouselItem>
              </CCarousel>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
