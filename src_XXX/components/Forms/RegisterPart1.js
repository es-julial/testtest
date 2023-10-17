import React, { useState } from "react";

const Register = () => {
	const [fullname, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	//onchange fullname
	const onChangeFullName = (e) => {
		setFullName(e.target.value);
	};

	//onchange email
	const onChangeEmail = (e) => {
		setEmail(e.target.value);
	};

	//onchange password
	const onChangePassword = (e) => {
		setPassword(e.target.value);
	};

	//submit handler
	const onFormSubmit = (e) => {
		//prevent page refresh
		e.preventDefault();
		console.log({
			fullname,
			email,
			password,
		});
	};

	return (
		<div>
			<h2>Register form</h2>
			<form onSubmit={onFormSubmit}>
				<div>
					<input
						onChange={onChangeFullName}
						placeholder="Full name"
						type="text"
						value={fullname}
					/>
				</div>

				<div>
					<input
						onChange={onChangeEmail}
						placeholder="Email"
						type="email"
						value={email}
					/>
				</div>

				<div>
					<input
						onChange={onChangePassword}
						placeholder="Password"
						type="password"
						value={password}
					/>
				</div>

				<button type="submit">Register</button>
			</form>
		</div>
	);
};

export default Register;
