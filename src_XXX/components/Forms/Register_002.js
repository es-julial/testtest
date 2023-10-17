import React, { useState } from "react";

const Register = () => {
	const [fullname, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div>
			<h2>Register form</h2>
			<form>
				<div>
					<input placeholder="Full name" type="text" value={fullname} />
				</div>

				<div>
					<input placeholder="Email" type="email" value={email} />
				</div>

				<div>
					<input placeholder="Password" type="password" value={password} />
				</div>

				<button type="submit">Register</button>
			</form>
		</div>
	);
};

export default Register;
