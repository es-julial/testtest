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

	return (
		<div>
			<h1>Data rendering</h1>
			{products.map((product) => {
				console.log(product);
				return (
					<div>
						<h1>{product.name}</h1>
						<p>$ {product.price}</p>
						<p>{product.desc}</p>
					</div>
				);
			})}
		</div>
	);
};

export default DataRendering;
