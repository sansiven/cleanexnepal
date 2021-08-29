/* eslint-disable react/jsx-no-target-blank */
import dynamic from "next/dynamic";

import React, { useEffect } from "react";
import Link from "next/link";
import ContactForm from "../components/Utils/ContactForm";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

//since these libraries only work on client side, we should use no ssr and import the packages like below
const MouseParticles = dynamic(() => import("react-mouse-particles"), {
	ssr: false,
});

const ParticlesBg = dynamic(() => import("particles-bg"), { ssr: false });

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
	const [pause, setPause] = React.useState(false);
	const timer = React.useRef();
	const colour = ["#6fc06a", "#000000", "#e2e9f1", "#ef476f", "#ffd166"];
	const secondary = ["#008000", "#9c0505", "#ff99ab", "#ffa500", "#0000ff"];
	const [sliderRef, slider] = useKeenSlider({
		slidesPerView: 1,
		mode: "free-snap",
		spacing: 15,
		loop: true,
		duration: 1200,
		dragStart: () => {
			setPause(true);
		},
		dragEnd: () => {
			setPause(false);
		},
		breakpoints: {
			"(min-width: 768px)": {
				slidesPerView: 2,
			},
			"(min-width: 1200px)": {
				slidesPerView: 3,
			},
		},
	});

	useEffect(() => {
		sliderRef.current.addEventListener("mouseover", () => {
			setPause(true);
		});
		sliderRef.current.addEventListener("mouseout", () => {
			setPause(false);
		});
	}, [sliderRef]);

	useEffect(() => {
		timer.current = setInterval(() => {
			if (!pause && slider) {
				slider.next();
			}
		}, 2000);
		return () => {
			clearInterval(timer.current);
		};
	}, [pause, slider]);

	return (
		<>
			<IndexNavbar fixed />
			<ParticlesBg
				num={8}
				type="circle"
				bg={true}
				color={secondary}
				scale={[0.1, 0.2]}
			/>
			<section className="header relative pt-16 items-center flex h-screen max-h-860-px">
				<div className="container mx-auto items-center flex flex-wrap">
					<div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
						<div className="pt-32 sm:pt-0">
							<h2 className="font-semibold text-4xl nav-items-color">
								Cleanex
							</h2>
							<p className="mt-4 text-lg leading-relaxed text-black">
								Cleanex toilet paper is woven like a washcloth
								and just cleans better than the leading bargain
								brand, so you can be Cleanex clean and proud of
								it. <br />
								Our Premium Paper Rolls are equipped with
								"floral" designs which are soft, absorbent and
								have high dry strength however they are much
								rapidly dissolving and disintegrate much faster
								than average toilet paper.
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
						<div className="w-10/12 md:w-6/12 lg:w-4/12 sm:w-12 md:px-4 mr-auto ml-auto -mt-32">
							<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
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
										<b>'Cleanex'</b> provide you with the
										high quality options to choose from. You
										can be sure its the soft products for
										your everyday use, like napkins, popup
										box, tissue paper, and toilet papers,
										kitchen towels as well. Its "soft &
										absorbent" because we care about you.
										Try "Cleanex" and see for yourself.
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
												Kitchen Towels
											</h6>
											<p className="mb-4 text-blueGray-500">
												Cleanex provide you a convenient
												alternative to cloth bathroom
												towels, these clean, fresh,
												disposable hand towels promote
												health and hygience and we
												provide with easy-to-access box
												as well.
											</p>
										</div>
									</div>
									<div className="relative flex flex-col min-w-0">
										<div className="px-4 py-5 flex-auto">
											<div className="icon-color p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
												<i className="fas fa-hand-sparkles"></i>
											</div>
											<h6 className="text-xl mb-1 font-semibold">
												Tissue Paper Rolls
											</h6>
											<p className="mb-4 text-blueGray-500">
												Our tissues and toilet paper
												that you love offer soft,
												strong, absorbent 2-ply, 3-ply
												care for your face and hands. We
												provide you with different rolls
												and weight. See below forfurther
												information.
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
											<h6 className="text-xl mb-1 font-semibold">
												Napkins
											</h6>
											<p className="mb-4 text-blueGray-500">
												Get our popups napkins either to
												put in your popup-box or for
												general use. We also provide
												popup-box as well. We also
												provide boxes that are easy to
												access for your cars as well.
											</p>
										</div>
									</div>
									<div className="relative flex flex-col min-w-0">
										<div className="px-4 py-5 flex-auto">
											<div className="icon-color p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
												<i className="fas fa-leaf"></i>
											</div>
											<h6 className="text-xl mb-1 font-semibold">
												What is "ply" ?
											</h6>
											<p className="mb-4 text-blueGray-500">
												The word "ply" simply refers to
												the amount of layers that toilet
												paper has. At Cleanex, we
												provide 2-ply and 3-ply papers
												with the highest quality.
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
								Papers and Design
							</h3>
							<p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-700">
								Our Premium Paper Rolls are equipped with
								"floral" designs which are soft, absorbent and
								have high dry strength however they are much
								rapidly dissolving and disintegrate much faster
								than average toilet paper. We get raw materials
								from CenturyPaper which is a international brand
								providing raw materials from long time. Our
								Tissues are Eco- friendly, Bleach and chlorine
								free. These safe to use napkins are appreciated
								for their characteristics like
								bio-biodegradability, soft texture, easily
								disposable and highly absorbent.
							</p>
						</div>

						<div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
							<div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0 small-screen">
								<img
									alt="..."
									src="/img/cleanex white.png"
									className="w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3 changeable-cleanex-white"
								/>
								<img
									alt="..."
									src="/img/cleanex2.png"
									className="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px changeable-img-three"
								/>
								<img
									alt="..."
									src="https://images.unsplash.com/photo-1588318072736-5d5a82354cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
									className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2 changeable-img-black"
								/>
								<img
									alt="..."
									src="https://images.unsplash.com/photo-1609840112990-4265448268d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=776&q=80"
									className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px changeable-img-yellow"
								/>
								<img
									alt="..."
									src="/img/cleanex pink.png"
									className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px changeable-cleanex-pink"
								/>
							</div>
						</div>
					</div>

					{/* Keen slider */}
					<div ref={sliderRef} className="keen-slider cleanex">
						<div className="keen-slider__slide number-slide1">
							<img alt="..." src="/img/cleanex 026.jpg" />
						</div>
						<div className="keen-slider__slide number-slide2">
							<img alt="..." src="/img/1orange.jpg" />
						</div>
						<div className="keen-slider__slide number-slide2">
							<img alt="..." src="/img/4orange.jpg" />
						</div>
						<div className="keen-slider__slide number-slide3">
							<img alt="..." src="/img/6pack_orange.jpg" />
						</div>
						<div className="keen-slider__slide number-slide2">
							<img alt="..." src="/img/10pack_orange.jpg" />
						</div>
						<div className="keen-slider__slide number-slide3">
							<img alt="..." src="/img/1red.jpg" />
						</div>
						<div className="keen-slider__slide number-slide3">
							<img alt="..." src="/img/4red.jpg" />
						</div>
						<div className="keen-slider__slide number-slide3">
							<img alt="..." src="/img/6pack_red.jpg" />
						</div>
						<div className="keen-slider__slide number-slide3">
							<img alt="..." src="/img/10pack_red.jpg" />
						</div>
						<div className="keen-slider__slide number-slide4">
							<img alt="..." src="/img/cleanex 144.jpg" />
						</div>
						<div className="keen-slider__slide number-slide3">
							<img alt="..." src="/img/4pack.jpg" />
						</div>
						<div className="keen-slider__slide number-slide3">
							<img alt="..." src="/img/6pack.jpg" />
						</div>
						<div className="keen-slider__slide number-slide3">
							<img alt="..." src="/img/10pack.jpg" />
						</div>
						<div className="keen-slider__slide number-slide5">
							<img alt="..." src="/img/004.jpeg" />
						</div>
						<div className="keen-slider__slide number-slide5">
							<img alt="..." src="/img/009.jpeg" />
						</div>
					</div>

					<div className="flex flex-wrap items-center">
						{/* pt-32 */}
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
									<a href="img/6pack.jpg" target="_blank">
										<div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
											<img
												alt="..."
												className="shadow-md max-w-full w-20 mx-auto bg-white"
												src="img/6pack.jpg"
											/>
										</div>
									</a>
									<a href="/img/004.jpeg" target="_blank">
										<div className="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8">
											<img
												alt="..."
												className="shadow-md max-w-full w-20 mx-auto bg-white"
												src="/img/004.jpeg"
											/>
										</div>
									</a>
								</div>
								<div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
									<a
										href="https://images.unsplash.com/photo-1618034229737-cb68d1277aa1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
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
									<a href="/img/asd1.png" target="_blank">
										<div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
											<img
												alt="..."
												className="shadow-md max-w-full w-20 mx-auto bg-white"
												src="/img/asd1.png"
											/>
										</div>
									</a>
									<a
										href="/img/cleanex 013.jpg"
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
								Great packages to choose from
							</h3>
							<p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-700">
								To cater your needs, we have bundled our
								products into packages of 2 pieces, 4 pieces, 6 pieces and
								10 pieces of both the 2-ply and 3-ply paper
								rolls so that you never run out of cleanex at your house.
							</p>
							<p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-700">
								Our design inspired by washcloth-like cleaning
								featuring "floral" embossing patterns.
								<br />
								Strong 2-ply and 3-ply paper to help clean
								better
								<br/><br/>
								Our <span className="text-orange-500"><b>Orange</b></span> pack weighs about 160gm of 2-ply paper.
								<br/><br/>
								Our <span className="text-red-500"><b>Red</b></span> pack weighs about 130gm of 3-ply paper.
								<br/><br/>
								Our <span className="text-blue-cleanex"><b>Blue</b></span> pack weighs about 170gm of 2-ply paper.
								<br/><br/>
								Our Popup pack to refill your popup boxes made up of 2-ply paper.
							</p>
						</div>
					</div>
				</div>

				<div className="justify-center text-center flex flex-wrap mt-24">
					<div className="w-full md:w-6/12 px-12 md:px-4">
						<h2 className="font-semibold text-4xl">
							Trusting the PROCESS!!
						</h2>
						<p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
							How our products gets delivered toyou and how it is
							done in the office located in Naikap, Kathmandu.
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
									<Link href="javascript:void(0)">
										<div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150 mt-12">
											<img
												alt="..."
												className="align-middle border-none max-w-full h-auto rounded-lg"
												src="/img/rawmaterials.png"
											/>
										</div>
									</Link>
								</div>

								<div className="w-full lg:w-4/12 px-4">
									<h5 className="text-xl font-semibold pb-4 text-center">
										Processing
									</h5>
									{/* <Link href="javascript:void(0)"> */}
										<div className="hover:-mt-4 relative flex flex-row min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150" style={{background:'transparent', justifyContent:'center'}}>
											<img
												alt="..."
												className="align-middle border-none max-w-full h-auto rounded-lg"
												src="/img/processing_img_1.png"
											/>
										</div>
										<div className="hover:-mt-4 relative flex flex-row min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150 bg-transparent justify-items-center" style={{background:'transparent', justifyContent:'center'}}>
											<img
												alt="..."
												className="align-middle border-none max-w-full h-auto rounded-lg"
												src="/img/processing_img_2.png"
											/>
										</div>
									{/* </Link> */}
								</div>

								<div className="w-full lg:w-4/12 px-4">
									<h5 className="text-xl font-semibold pb-4 text-center">
										Packaged Goods
									</h5>
									<Link href="javascript:void(0)">
										<div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150 mt-12">
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
							<p>
								We at Trident Manufacturers Private Limited have
								started our journey with aspirations and
								ambitions of leading the Nepali markets for a
								variety of multipurpose Tissue Papers etc under
								the brand name CLEANEX. Today, we are one of
								fastest rising names in the field because of our
								innovation-oriented and technology friendly work
								approaches. As a manufacturer, we are devoted to
								producing & supplying most value for money items
								to our prestigious customers residing all across
								Nepal and in future overseas as well.{" "}
							</p>
							<p>
								Trident manufacturers is the only company in
								Nepal which is using the latest Chinese
								technology, machines and produces the finest
								product in the market. We bring the skilled
								manpower from India and Bangladesh who are best
								at their work. Our company's main objective is
								to provide the best product to the consumers at
								a reasonable price. We have been here since 2019
								, and the feedback we get is positive and we
								feel we are going in the right direction with
								support from you.{" "}
							</p>
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
					<div className="maybe_bg flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 sm:px-6 md:px-8 lg:px-12 relative z-10">
						<div className="w-full text-center lg:w-8/12" id="bulk">
							<p className="text-4xl text-center">
								{/* <span role="img" aria-label="love">
                  😍
                </span> */}
							</p>
							<h3 className="font-semibold text-3xl">
								Describe Your BUYING Requirement *
							</h3>
							<p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
								If you want to try some samples or leave with a
								bulk order or any other requests, leave us a
								message. We will get back to you in 2-3 business
								days.
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
			<MouseParticles
				g={1}
				num={6}
				color="random"
				cull="stats,image-wrapper"
				level={6}
			/>
		</>
	);
}
