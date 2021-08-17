/* eslint-disable react/jsx-no-target-blank */
import dynamic from 'next/dynamic';

import React from "react";
import Link from "next/link";
import ContactForm from '../components/Utils/ContactForm'

//since these libraries only work on client side, we should use no ssr and import the packages like below
const MouseParticles = dynamic(
  () => import('react-mouse-particles'),
  {ssr: false}
)

const ParticlesBg = dynamic(
  () => import('particles-bg'),
  {ssr: false}
)

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <ParticlesBg color="#000000" num={100} type="lines" bg={true} />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Cleanex
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Cleanex toilet paper is woven like a washcloth and just cleans better than the leading bargain brand, so you can be Cleanex clean and proud of it.
              </p>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/pattern_green.png"
          alt="..."
        />
      </section>

      
      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
      {/* <ParticlesBg color="#ff0000" num={200} type="circle" bg={true} /> */}
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1545039986-62628085718b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blueGray-700 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Great for your household needs
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Cleanex provide you the soft products for your everyday use, like napkins, popup box, tissue paper, and toilet papers as well. Its "soft" because we care about you. Try te Cleanex and see for yourself.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="icon-color p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-hands-wash"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Great options to choose from
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        {/* Notus NextJS comes with a huge number of Fully Coded CSS
                        components. */}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="icon-color p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-hand-sparkles"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Napkins
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      Sixth. Days replenish creepeth bearing lesser give beast can't fish own abundantly you're bring thing given creeping firmament land. 
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="icon-color p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-people-carry"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Popups</h6>
                      <p className="mb-4 text-blueGray-500">
                      Sixth called place land. Give seasons said whales winged under moved behold grass were our beginning open signs rule lights one he, very hath won't.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="icon-color p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-leaf"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Fragrance
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      Greater which fifth life our place cattle herb also dominion Was place waters good air. Void rule.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="icon-color p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-sitemap text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Napkins And Tissue Papers
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Our Premium Paper Rolls are equipped with "floral" designs which are soft, absorbent and have high dry strength however they are much rapidly dissolving and disintegrate much faster than average toilet paper. Our Tissues are Eco- friendly, Bleach and chlorine free. These safe to use napkins are appreciated for their characteristics like bio-biodegradability, soft texture, easily disposable and highly absorbent.
              </p>
              
              
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src="/img/cleanex white.png"
                  className="w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3"
                />
                <img
                  alt="..."
                  src="/img/cleanex2.png"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
                />
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1588318072736-5d5a82354cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2"
                />
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1609840112990-4265448268d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=776&q=80"
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                />
                <img
                  alt="..."
                  src="/img/cleanex pink.png"
                  className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <a
                    href="https://images.unsplash.com/photo-1605043145565-51b91a0878dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    target="_blank"
                  >
                    <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md max-w-full w-20 mx-auto bg-white"
                        src="https://images.unsplash.com/photo-1605043145565-51b91a0878dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                      />
                      
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md max-w-full w-20 mx-auto bg-white"
                        src="https://images.unsplash.com/photo-1583496597467-d968d2fa33a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                      />
                    
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md max-w-full w-20 mx-auto bg-white"
                        src="https://images.unsplash.com/photo-1589828994425-cee7c6e8dbf8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=786&q=80"
                      />
                      
                    </div>
                  </a>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md max-w-full w-20 mx-auto bg-white"
                        src="https://images.unsplash.com/photo-1618034229737-cb68d1277aa1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                      />
                      
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md max-w-full w-20 mx-auto bg-white"
                        src="/img/asd1.png"
                      />
                    
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md max-w-full w-20 mx-auto bg-white"
                        src="/img/cleanex 013.jpg"
                      />
                      
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="icon-color p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-recycle text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Great line of products
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                At Cleanex we provide you with the high quality options to choose from. You can get the popups refiller, napkins, toilet paper rolls. 
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Our design inspired by washcloth-like cleaning featuring "floral" embossing patterns.<br/>Strong 2-ply and 3-ply paper to help clean better
              </p>
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Trusting the PROCESS!!</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              How our products gets delivered toyou and how it is done in the office located in Naikap, Kathmandu.
            </p>
          </div>
        </div>
      </section>

      <section className="block relative z-1 bg-black">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Raw Materials
                  </h5>
                  <Link href="/">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="https://images.unsplash.com/photo-1582282352927-04277241ea93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Processing
                  </h5>
                  <Link href="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/cleanex 020.jpg"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Packaged Goods
                  </h5>
                  <Link href="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/cleanex 045.jpg"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="text-white w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                About Us
              </h3>
              <p>We at Trident Manufacturers Private Limited have started our journey with aspirations and ambitions of leading the Nepali markets for a variety of Tissue Papers and Wet Wipes. Today, we are one of fastest rising names in the field because of our innovation-oriented and technology friendly work approaches. As a manufacturer, we are devoted to producing & supplying most value for money items to our prestigious customers residing all across Nepal and in future overseas as well. </p>
              <p>We are here today after facing many thorns and cuts in our way, success doesn't come just simple it requires a lot patience and hard work. We started our company with many ideas and moulded ourselves on our way facing many hinders to cross the boundaries and this is not our place there is still so much to go let me join you all in lifting the thorns in paving better paths and developing better services on the way, its now time for us to grow with Sun Rite Crafts & Papers.</p>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="icon-color fas fa-leaf absolute text-55 -top-150-px -right-100 left-auto opacity-80"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-pattern pb-16 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="bg-red-pattern fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="maybe_bg flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                {/* <span role="img" aria-label="love">
                  😍
                </span> */}
              </p>
              <h3 className="font-semibold text-3xl">
                Describe Your BUYING Requirement * 
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                If you want to try some samples or leave with a bulk order or any other requests, leave us a message. We will get back to you in 2-3 business days. 
              </p>
              
              <div className="sm:block flex flex-col mt-10">
                <div className="w-full lg:w-6 px-4">
                  <ContactForm />
                </div>
                {/* <a
                  href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                  target="_blank"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  <i className="fab fa-github text-lg mr-1"></i>
                  <span>Send a message</span>
                </a> */}
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* <MouseParticles g={1} color="random" cull="col,image-wrapper"/> */}
      <MouseParticles g={1} num={6} color="random" cull="stats,image-wrapper" level={6} />
    </>
  );
}
