import emailjs from "emailjs-com";
import React, { useRef } from "react";

export const Contactme = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_siflat9",
				"basic_template",
				form.current,
				"_DSBOypfRJBFIh00g"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		alert("Message sent");
		e.target.reset();
	};

	return (
		<div className="contact_div_form, left_pad">
			<h1>Contact Me</h1>

			<div className="left_pad">
				<form ref={form} onSubmit={sendEmail}>
					<div className="contact_input">
						<label>Name</label>
						<br />
						<input className="input" type="text" name="name" required />
					</div>
					<div className="contact_input">
						<label>Email</label>
						<br />
						<input className="input" type="email" name="email" required />
					</div>
					<div className="contact_input">
						<label>Subject</label>
						<br />
						<input className="input" type="text" name="subject" required />
					</div>
					<div className="contact_input">
						<label>Message</label>
						<br />
						<textarea name="message" required />
					</div>
					<div className="contact_input">
						<input type="submit" value="Send" />
					</div>
				</form>
			</div>
		</div>
	);
};
