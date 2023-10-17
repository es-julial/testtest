import React, { useState } from "react";

const UsestateComp = () => {
	const [count, setCount] = useState(0);
	console.log(count);
	return (
		<div>
			<h2>Counter App</h2>
			<h3>Counter is {count} </h3>
		</div>
	);
};

export default UsestateComp;
