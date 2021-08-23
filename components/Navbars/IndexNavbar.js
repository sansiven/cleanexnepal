import React from "react";
import Link from "next/link";

// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<>
			<nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						<Link href="/">
							<a
								className="header-text text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
								href="#pablo"
							>
								Cleanex
							</a>
						</Link>
						<button
							className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<i className="fas fa-bars"></i>
						</button>
					</div>
					<div
						className={
							"lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
							(navbarOpen ? " block" : " hidden")
						}
						id="example-navbar-warning"
					>
						<ul className="flex flex-col lg:flex-row list-none mr-auto"></ul>
						<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
							<li className="flex items-center">
								<a
									className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
									href=" https://www.facebook.com/cleanexnepal"
									target="_blank"
								>
									<i className="nav-items-color fab fa-facebook text-lg leading-lg " />
									<span className="lg:hidden inline-block ml-2">
										Share
									</span>
								</a>
							</li>

							<li className="flex items-center">
								<a
									className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
									href="https://www.instagram.com/cleanextissuesnepal/"
									target="_blank"
								>
									<i className="nav-items-color fab fa-instagram text-lg leading-lg " />
									<span className="lg:hidden inline-block ml-2">
										Insta
									</span>
								</a>
							</li>

							<li className="flex items-center">
								<a
									className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
									href="javascript:void(0)"
									
								>
									<i className="nav-items-color fab fa-youtube text-lg leading-lg " />
									<span className="lg:hidden inline-block ml-2">
										Video
									</span>
								</a>
							</li>

							<li className="flex items-center">
								<button
									className="bg-nav-items-color text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
									type="button"
									onClick={() => (document.getElementById("bulk").scrollIntoView({ behavior: 'smooth'}))}
								>
									<i className="fas fa-truck"></i> Bulk Orders
									?
								</button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
