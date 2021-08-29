import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import PageChange from "components/PageChange/PageChange.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/tailwind.css";
import "styles/index.css";

Router.events.on("routeChangeStart", (url) => {
	console.log(`Loading: ${url}`);
	document.body.classList.add("body-page-transition");
	ReactDOM.render(
		<PageChange path={url} />,
		document.getElementById("page-transition")
	);
});
Router.events.on("routeChangeComplete", () => {
	ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
	document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
	ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
	document.body.classList.remove("body-page-transition");
});

export default class MyApp extends App {
	componentDidMount() {
		let comment = document.createComment(`

=========================================================
* Cleanex - v1.1.0 based on Tailwind Starter Kit by Creative Tim
=========================================================

* Modified by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

`);
		document.insertBefore(comment, document.documentElement);
	}
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}
	render() {
		const { Component, pageProps } = this.props;

		const Layout = Component.layout || (({ children }) => <>{children}</>);

		return (
			<React.Fragment>
				<Head>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=no"
					/>
					<meta
						name="description"
						content="Cleanex provide you with a soft and absorbent tissues manufactured and packaged here in Nepal."
					/>
					<meta
						property="og:title"
						content="Cleanex - Soft and Absorbent"
					/>
					<meta
						property="og:description"
						content="Cleanex provide you with a soft and absorbent tissues manufactured and packaged here in Nepal."
					/>
					<meta property="og:url" content="https://cleanexnepal.com/" />
					<meta property="og:type" content="website" />
					<title>Cleanex - Soft and Absorbent </title>
					{/* <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script> */}
				</Head>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</React.Fragment>
		);
	}
}
