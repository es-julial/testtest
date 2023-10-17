import React, { useState } from "react";

const UsestateComp = () => {
	const [count, setCount] = useState(0);

	const increaseCount = () => {
		setCount((preState) => preState + 10);
	};

	//increaseCount();
	return (
		<div>
			<h2>Counter App</h2>
			<h3>Counter is {count} </h3>
			<button onClick={increaseCount}>Increase Count</button>
			<button onClick={() => setCount((preState) => preState - 100)}>
				Decrease Count
			</button>
			<button onClick={() => setCount(0)}>Reset Count</button>
		</div>
	);
};

export default UsestateComp;
