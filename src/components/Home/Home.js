import React from "react";
import Process2 from "./Process2";
import OfferCard from "./OfferCard";
import Process from "./Process";
import MySection from "./MySection";
import Cover from "./Cover";


export default function Home() {
  return (
    <> 
       <Cover/>
       <MySection/>
       <Process2 /> 
       <Process/>
       <OfferCard/>
    </>
  );
}




