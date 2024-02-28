import React, { useState } from "react";
import ride from "./../../assests/ride.mp4";
import {
  CCarousel,
  CImage,
  CCard,
  CCarouselItem,
  CButton,
  CContainer,
} from "@coreui/react";
import "./buy.css";
import logo from "./../../assets/myanim/logo.png";
import boad from "./../../assets/myanim/boad.png";
import { GameGallery } from "../../Data/GalleryData";
import {
  CModal,
  CModalBody,
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
} from "@coreui/react"; // Assuming these components are custom and imported from a file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function Land() {
  const [visible, setVisible] = useState(false);
  function nCards(val) {
    return (
      <div className="col-lg-6 mb-5 ">
        <CCard
          style={{ width: "20rem", height: "10rem", backgroundSize: "cover" }}
        >
          <CImage className="d-block w-[100%]" src={val.src} alt={val.alt} />
        </CCard>
      </div>
    );
  }
  return (
    <>
      <section id="backgroud-video">
        <video
          autoPlay
          loop
          muted
          id="video-bg"
          style={{
            minHeight: "100%",
            minWidth: "100%",
            backgroundSize: "cover",
          }}
        >
          <source src={ride} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <CContainer fluid class="content">
          <CCarousel
            controls
            dark
            transition="crossfade"
            className="top-0 p-48 bg-transparent h-40 mt-5"
          >
            <CCarouselItem>
              <div className="container px-4 py-1 px-md-5 text-center text-lg-start my-5">
                <div className="row gx-lg-5 align-items-center justify-between mb-5">
                  <div className="col-lg-6 mb-5 ">
                    <CImage
                      className="d-block w-[100%]"
                      src={logo}
                      alt="slide 1"
                    />
                    <CButton
                      className=" bg-orange-600 text-3xl px-9 justify-center items-center"
                      onClick={() => setVisible(!visible)}
                    >
                      PURCHASE
                    </CButton>
                  </div>
                </div>
              </div>
            </CCarouselItem>
            <CCarouselItem>
              <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                <div className="row gx-lg-5 align-items-center mb-5">
                  <CImage
                    className="d-block w-[100%]"
                    src={boad}
                    alt="slide 1"
                  />
                </div>
              </div>
            </CCarouselItem>
            <CCarouselItem>
              <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                <div className="row gx-lg-5 align-items-center mb-5">
                  <p className=" text-lg lg:text-3xl text-wrap justify-start text-black font-extrabold">
                    Introducing Skater Republic, <br />
                    the thrilling upcoming arcade game that puts you right in
                    the heart of a dynamic skateboarding adventure! Explore
                    expansive skateparks, bustling cityscapes, and renowned
                    real-life locations for an immersive experience like no
                    other.
                  </p>
                </div>
              </div>
            </CCarouselItem>
            <CCarouselItem>
              <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                <div className="row gx-lg-5 align-items-center mb-5">
                  <h1 className=" items-center justify-center font-extrabold text-3xl text-orange-600">
                    Gallery
                  </h1>
                  {GameGallery.map(nCards)}
                </div>
              </div>
            </CCarouselItem>
            {/* digital edition */}

            <CCarouselItem>
              <section className=" bg-transparent h-auto overflow-hidden">
                <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                  <div className="row gx-lg-5 align-items-center mb-5">
                    <div className="col-lg-6 mb-5 ">
                      <CButton className="my-4 rounded-lg px-5 m-7 bg-orange-400">
                        PURCHASE
                      </CButton>
                      <CAccordion flush>
                        <div className=" my-4">
                          <CAccordionItem itemKey={1} className=" bg-teal-500">
                            <CAccordionHeader>
                              Accordion Item #1
                            </CAccordionHeader>
                            <CAccordionBody>
                              <strong>
                                This is the first item's accordion body.
                              </strong>
                            </CAccordionBody>
                          </CAccordionItem>
                        </div>
                        <div className=" my-4">
                          <CAccordionItem itemKey={2} className=" bg-teal-500">
                            <CAccordionHeader>
                              Accordion Item #1
                            </CAccordionHeader>
                            <CAccordionBody>
                              <strong>
                                This is the first item's accordion body.
                              </strong>
                            </CAccordionBody>
                          </CAccordionItem>
                        </div>
                        <div className=" my-4 ">
                          <CAccordionItem itemKey={3} className=" bg-teal-500">
                            <CAccordionHeader>
                              Accordion Item #1
                            </CAccordionHeader>
                            <CAccordionBody>
                              <strong>
                                This is the first item's accordion body.
                              </strong>
                            </CAccordionBody>
                          </CAccordionItem>
                        </div>
                      </CAccordion>
                    </div>
                    <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                      <div className="card bg-glass bg-opacity-10">
                        <div className="card-body px-4 py-5 px-md-5">
                          <h4 className=" text-orange-800">Digital Edition </h4>
                          <ul className="mb-4 w3-text-black">
                            <li> TONY HAWK’S™ PRO SKATER™ 1 + 2 GAME </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </CCarouselItem>
          </CCarousel>
        </CContainer>
      </section>

      <CModal className="  bg-current" fullscreen visible={visible} aria-labelledby="FullscreenExample1">
        <CModalBody>
          <FontAwesomeIcon
            onClick={() => setVisible(false)}
            icon={faClose}
            size="lg"
            className=" float-end justify-end"
          />
          <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
            <div className="row gx-lg-5 align-items-center mb-5">
              <div className="col-lg-6 mb-5 ">
                <CButton className="my-4 rounded-lg px-5 m-7 bg-orange-400">
                  PURCHASE
                </CButton>
                <CAccordion flush>
                  <div className=" my-4">
                    <CAccordionItem itemKey={1} className=" bg-teal-500">
                      <CAccordionHeader>Accordion Item #1</CAccordionHeader>
                      <CAccordionBody>
                        <strong>
                          This is the first item's accordion body.
                        </strong>
                      </CAccordionBody>
                    </CAccordionItem>
                  </div>
                  <div className=" my-4">
                    <CAccordionItem itemKey={2} className=" bg-teal-500">
                      <CAccordionHeader>Accordion Item #1</CAccordionHeader>
                      <CAccordionBody>
                        <strong>
                          This is the first item's accordion body.
                        </strong>
                      </CAccordionBody>
                    </CAccordionItem>
                  </div>
                  <div className=" my-4 ">
                    <CAccordionItem itemKey={3} className=" bg-teal-500">
                      <CAccordionHeader>Accordion Item #1</CAccordionHeader>
                      <CAccordionBody>
                        <strong>
                          This is the first item's accordion body.
                        </strong>
                      </CAccordionBody>
                    </CAccordionItem>
                  </div>
                </CAccordion>
              </div>
              <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                <div className="card bg-glass bg-opacity-10">
                  <div className="card-body px-4 py-5 px-md-5">
                    <ul className=" items-center texr-blck font-serif ">
                      <h1 className="px-10 justify-center text-3xl text-orange-600 underline">
                        DIGITAL DELUXE EDITION
                      </h1>
                      <li className="">TONY HAWK'S PRO SKATER 1 + 2 GAME</li>
                      <li>THE RIPPER” SKATER FROM POWELL-PERALTA</li>
                      <li>
                        UNIQUE RETRO OUTFITS FOR TONY HAWK, STEVE CABALLERO AND
                        RODNEY MULLEN
                      </li>
                      <li>UNIQUE RETRO CONTENT FOR THE CREATE-A-SKATER MODE</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CModalBody>
      </CModal>
    </>
  );
}
