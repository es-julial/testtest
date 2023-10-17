import React, { useState } from "react";

const StatefullComp = () => {
	//internal state
	const [user, setUser] = useState({
		firstname: "Joe",
		lastname: "Don",
		age: 23,
	});

	console.log(user);
	return (
		<div>
			<h2>Stateful component</h2>
			<h3>
				firstname: {user.firstname} {user.lastname}
			</h3>
			<p>Age: {user.age}</p>
		</div>
	);
};

export default StatefullComp;
