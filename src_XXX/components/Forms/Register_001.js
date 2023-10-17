import React from "react";

const Register = () => {
	//give initial values for each form input
	//onchange
	//submit
	return (
		<div>
			<h2>Register form</h2>
			<form>
				<div>
					<input placeholder="Fullname" type="text" />
				</div>

				<div>
					<input placeholder="Email" type="email" />
				</div>

				<div>
					<input placeholder="Password" type="password" />
				</div>

				<button type="submit">Register</button>
			</form>
		</div>
	);
};

export default Register;
