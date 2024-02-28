import React, { useEffect } from 'react';
import { Parallax } from 'react-parallax';
import { motion, useAnimation } from 'framer-motion'; // Import motion and useAnimation
import { CButton } from '@coreui/react';
import g2 from './../../assets/myanim/g2.jpg';
import rider from './cover.mp4';

function Cover() {
  const controls = useAnimation(); // Initialize animation controls
  const controls2 = useAnimation();
  useEffect(() => {
    controls.start("visible"); // Start animation when component mounts
  }, [controls]); // Depend on controls to trigger animation

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.9} }
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const cardElements = document.querySelectorAll('.cardstyle');
      
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

  const cardVariants2 = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };


  return (
    <div className="App">
      <Parallax strength={300}>
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            minWidth: "100%",
            minHeight: "100%",
            objectFit: "cover",
          }}
        >
          <source src={rider} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Wrap content with motion.div for animation */}
        <motion.div
          className="content mycard"
          initial="hidden"
          animate={controls}
          variants={cardVariants}
        >
          <div className="w3-display-right text-content bg-transparent font-serif text-9xl">
            Built by developers. For developers. With fair terms for all. Let's
            build incredible things together.
            <CButton className="border-3 text-lg px-10">
              learn more about
            </CButton>
          </div>
        </motion.div>
      </Parallax>
      <Parallax strength={-600} bgImage={g2}>
        <div className="content">
          <div class="p-5 row justify-content-center">
            <div class="col-md-8">
              <div
                class="mycard bg-transparent p-4 rounded-lg card"
                style={{ border: "none" }}
              >
                <h1 className=" font-bold text-orange-500 w3-center text-6xl">
                  SHAPE YOUR RIDER'S CAREER
                </h1>
                <p class=" font-serif m-5 space-y-3 text-3xl text-justify justify-center">
                  4 sports, 6 disciplines: It's up to you to master all of them
                  and become a legend of the Republic. Draw the attention of
                  prestigious sponsors in the most renowned sports competitions
                  such as Red Bull Rampage or the X-Games and progress in each
                  discipline to unlock better gear.​
                </p>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default Cover;
