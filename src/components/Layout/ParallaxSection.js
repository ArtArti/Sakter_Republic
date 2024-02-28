import React from 'react'
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./layout.css";
import rider from "./../../assets/Logo/rider.mp4";
import Process from '../Home/Process';
function ParallaxSection() {
  return (
    <>
      <div className="parallax-section">
      <div className="parallax-content">
      <Parallax pages={8} style={{ top: "0", left: "0" }}>
         {/* layer 1 */}
          <ParallaxLayer offset={0} speed={0.25}>
            <div className="animation_layer parallax">
              <video autoPlay loop muted id="video-bg">
                <source src={rider} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </ParallaxLayer>
          {/* layer 2 */}
            <ParallaxLayer offset={1} speed={0.25}>
                  <Process/>
            </ParallaxLayer>
            {/* layer 3 */}
          <ParallaxLayer offset={2} speed={0.25}>
           <section className=' mt-xxl-5'>
           <div id="textblock">
              <div id="textblock-container">
                <h1 id="textblock-title">Skater Republic</h1>
                <p id="textblock-content">
                  The year is 1989.
                  <br />
                  <br />
                  Introducing Skater Republic, the thrilling upcoming arcade
                  game that puts you right in the heart of a dynamic
                  skateboarding adventure! Explore expansive skateparks,
                  bustling cityscapes, and renowned real-life locations for an
                  immersive experience like no other. Featuring intuitive
                  controls, a sophisticated trick system, and a compelling
                  progression framework, players will find themselves immersed
                  in a world where every achievement feels truly gratifying.
                  Keep an eye out as we work diligently to bring this
                  extraordinary gaming experience to life.
                </p>
              </div>
              <footer id="textblock-footer">
                Demo Created With 🧡 By&nbsp;
                <a
                  id="textblock-devsense"
                  href="https://youtube.com/c/DevSense19"
                >
                  DevSense
                </a>
              </footer>
            </div>
           </section>
          </ParallaxLayer>

          <ParallaxLayer offset={4} speed={0.25}>
            <div className="animation_layer parallax" id="junglejpg"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={0.3}>
            <div className="animation_layer parallax" id="rock"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={0.3}>
            <div className="animation_layer parallax" id="manonmountain"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={0.35}>
            <div className="animation_layer parallax" id="man2"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={5} speed={0.25} style={{ height: "100%" }}>
            <div id="textblock" style={{ marginTop: "250px" }}>
              <div id="textblock-container">
                <h1 id="textblock-title">Skater Republic</h1>
                <p id="textblock-content">
                  The year is 1989.
                  <br />
                  <br />
                  Introducing Skater Republic, the thrilling upcoming arcade
                  game that puts you right in the heart of a dynamic
                  skateboarding adventure! Explore expansive skateparks,
                  bustling cityscapes, and renowned real-life locations for an
                  immersive experience like no other. Featuring intuitive
                  controls, a sophisticated trick system, and a compelling
                  progression framework, players will find themselves immersed
                  in a world where every achievement feels truly gratifying.
                  Keep an eye out as we work diligently to bring this
                  extraordinary gaming experience to life.
                </p>
              </div>
              <footer id="textblock-footer">
                Demo Created With 🧡 By&nbsp;
                <a
                  id="textblock-devsense2"
                  href="https://youtube.com/c/DevSense19"
                >
                  DevSense
                </a>
              </footer>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={6}
            speed={0.5}
            style={{
              backgroundColor: "#abcdef",
              backgroundImage: 'url("/background-image.jpg")',
              backgroundSize: "cover",
            }}
          />

          {/* Content Layer */}
          <ParallaxLayer offset={7} speed={1}>
            <div className="content">
              <h1>Welcome to my website</h1>
              <p>This is some content</p>
            </div>
          </ParallaxLayer>

          {/* Another Content Layer */}
          <ParallaxLayer offset={8} speed={0.7}>
            <div className="content">
              <h2>More content here</h2>
              <p>More information</p>
            </div>
          </ParallaxLayer>
        </Parallax>
        </div>
      </div>   
    </>
  )
}

export default ParallaxSection
