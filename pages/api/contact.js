require("dotenv").config();

export default function (req, res) {
	const PASSWORD = process.env.password;

	let nodemailer = require("nodemailer");
	const transporter = nodemailer.createTransport({
		port: 465,
		host: "smtp.gmail.com",
		auth: {
			user: "himalayangoat2020@gmail.com",
			pass: PASSWORD,
		},
		secure: true,
	});

	const mailData = {
		from: "THGAF mail forwarder <himalayangoat2020@gmail.com>",
		//to: "sansiven@gmail.com, himalayangoat2020@gmail.com",
		to:"sansiven@yopmail.com",
		subject: `Message From ${req.body.name}`,
		text: req.body.message + " | Sent from: " + req.body.email,
		html: `<div><b>Message:</b> ${req.body.message}</div>
		<p><b>Sent from: </b>${req.body.email}</p>`,
	};

	transporter.sendMail(mailData, function (err, info) {
		if (err) console.log(err);
		else console.log(info);
	});

    res.status(200).send('success');
}
