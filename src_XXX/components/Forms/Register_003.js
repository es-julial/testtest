import React, { useState } from "react";

const Register = () => {
	//initial

	const [formData, setFormData] = useState({
		fullname: "Ben",
		email: "be@gmail.comn",
		password: "12345",
	});

	//onchange handler

	const onChangeHandler = (e) => {
		console.log(e);
		setFormData({
			...formData,
		});
	};

	return (
		<div>
			<h2>Register form</h2>
			<form>
				<div>
					<input
						value={formData.fullname}
						placeholder="Full name"
						type="text"
						onChange={onChangeHandler}
						name="fullname"
					/>
				</div>
				<div>
					<input
						value={formData.email}
						placeholder="Email"
						type="email"
						onChange={onChangeHandler}
						name="email"
					/>
				</div>
				<div>
					<input
						value={formData.password}
						placeholder="Password"
						type="password"
						onChange={onChangeHandler}
						name="password"
					/>
				</div>
				<button type="submit">Register</button>
			</form>
		</div>
	);
};

export default Register;
