import { useState } from "react";
import { useRouter } from "next/router";

export default function ContactForm({ formButtonName="Send Enquiry" }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		//console.log("sending");

		let data = {
			name,
			email,
			message,
		};

		fetch("/api/contact", {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then((res) => {
			if (res.status === 200) {
				console.log("Response received", res.status);
				setSubmitted(true);
				setName("");
				setEmail("");
				setMessage("");
			}
		});
	};

	return (
		<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
			<div className="flex-auto p-5 lg:p-10">
				<div className="relative w-full mb-3 mt-8">
					<label
						className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
						htmlFor="full-name"
					>
						Full Name
					</label>
					<input
						type="text"
						className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
						placeholder="Full Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>

				<div className="relative w-full mb-3">
					<label
						className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
						htmlFor="email"
					>
						Email
					</label>
					<input
						type="email"
						className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className="relative w-full mb-3">
					<label
						className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
						htmlFor="message"
					>
						Message
					</label>
					<textarea
						rows="4"
						cols="80"
						className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
						placeholder="Type a message..."
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</div>
				<p>{submitted ? `Message Received by Cleanex. Will get back soon. Thanks for your patience` : null}</p>
				<div className="text-center mt-6">
					<button
						className="main-color-green text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
						type="button"
						onClick={(e) => handleSubmit(e)}
					>
						{formButtonName}
					</button>
				</div>
			</div>

			{/* <div class="contact-row contact">
			<div class="col-lg-8">
				<form class="php-email-form">
					<div class="form-row">
						<div class="col form-group">
							<input
								type="text"
								name="name"
								class="form-control"
								id="name"
								placeholder="Your Name"
								data-rule="minlen:4"
								data-msg="Please enter at least 4 chars"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							<div class="validate"></div>
						</div>
						<div class="col form-group">
							<input
								type="email"
								class="form-control"
								name="email"
								id="email"
								placeholder="Your Email"
								data-rule="email"
								data-msg="Please enter a valid email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<div class="validate"></div>
						</div>
					</div>
					<div class="form-group">
						<input
							type="text"
							class="form-control"
							name="phone"
							id="phone"
							placeholder="Phone No"
							data-rule="minlen:4"
							data-msg="Please enter your mobile number"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
						<div class="validate"></div>
					</div>
					<div class="form-group">
						<textarea
							class="form-control"
							name="message"
							rows="5"
							data-rule="required"
							data-msg="Please write something for us"
							placeholder="Message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						></textarea>
						<div class="validate"></div>
					</div>
					<div class="mb-3">
						<div class="loading">Loading</div>
						<div class="error-message"></div>
						<div class="sent-message">
							Your message has been sent. Thank you!
						</div>
					</div>
					<div class="text-center atc_button">
						<button type="submit" onClick={(e) => handleSubmit(e)}>
							{formButtonName}
						</button>
					</div>
				</form>
			</div>
		</div> */}
		</div>
	);
}
