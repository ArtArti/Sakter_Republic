import React from 'react'
import ParallaxSection from './ParallaxSection'
import { CContainer } from '@coreui/react'
import bg from "./../../assets/Logo/bg.jpg";
import "./layout.css";
function Home() {
  return (
    <> 
       <CContainer>
          <ParallaxSection/>
       </CContainer>
    </>
  )
}

export default Home