import React, { useState } from "react";
import "./Form.css";

const Form = () => {
	const [data, setData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setData({ ...data, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert(data);
	};

	return (
		<div className="form-container" id="contact">
			<form
				className="form-content"
				action="https://formspree.io/f/mpzgkgpe"
				method="POST"
				onSubmit={handleSubmit}
			>
				<h1>
					Contact <span>Me</span>
				</h1>
				<input
					type="text"
					name="name"
					id=""
					onChange={handleChange}
					value={data.name}
					placeholder="Enter name"
					required
				/>
				<input
					type="email"
					name="email"
					id=""
					onChange={handleChange}
					value={data.email}
					placeholder="example@gmail.com"
					required
				/>
				<input
					type="phone"
					name="phone"
					id=""
					onChange={handleChange}
					value={data.phone}
					placeholder="+212"
					required
				/>
				<textarea
					name="message"
					id=""
					cols="30"
					rows="10"
					onChange={handleChange}
					value={data.message}
					placeholder="Type here..."
					required
				/>
				<button type="submit">Send</button>
				{/* <p>
					{data.name} ,{data.email} ,{data.phone} ,{data.message}
				</p> */}
			</form>
		</div>
	);
};

export default Form;
