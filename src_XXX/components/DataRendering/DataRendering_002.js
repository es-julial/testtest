import React, { useState } from "react";

const DataRendering = () => {
	const [products, setProducts] = useState([
		{
			name: "Mac",
			price: "120",
			desc: "Best goods ever",
		},
		{
			name: "iPhone",
			price: "300",
			desc: "Best iPhone ever",
		},
		{
			name: "Mic",
			price: "12",
			desc: "Best Mic ever",
		},
	]);

	console.log(products);
	return (
		<div>
			<h1>Data rendering</h1>
		</div>
	);
};

export default DataRendering;
