import React, { useState } from "react";

const Register = () => {
	//initial

	const [formData, setFormData] = useState({
		fullname: "",
		email: "",
		password: "",
	});

	//onchange handler

	const onChangeHandler = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const submitHandler = (e) => {
		e.preventDefault();
		console.log(formData);
	};
	return (
		<div>
			<h2>Register form</h2>
			<form onSubmit={submitHandler}>
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
