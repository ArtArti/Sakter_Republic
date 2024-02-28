import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './about.css'

function Animation() {
  return (
    <div className="py-16 ">
      <Parallax pages={2} style={{ top: '0', left: '0' }} className="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div className="animation_layer parallax" id="logoland"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div className="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.40}>
          <div className="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="jungle5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
        <div id="mytextblock">
            <div id="mytextblock-container">
                <h1 id="mytextblock-title">Skater Republic</h1>
                <p id="mytextblock-content">
                The year is 1989.<br/><br/>
                Introducing Skater Republic, the thrilling upcoming arcade game that puts you right in the heart of a dynamic skateboarding adventure! Explore expansive skateparks, bustling cityscapes, and renowned real-life locations for an immersive experience like no other. Featuring intuitive controls, a sophisticated trick system, and a compelling progression framework, players will find themselves immersed in a world where every achievement feels truly gratifying. Keep an eye out as we work diligently to bring this extraordinary gaming experience to life.
                </p>
            </div>
            <footer id='mytextblock-footer'>SKETER REPULIC</footer>
        </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Animation;