import React, { useEffect, useState } from "react";

const HTTPRequest = () => {
	//error
	//loading
	//data
	const apiURL = "http://jsonplaceholder.typicode.com/posts";

	useEffect(() => {
		//http request
		fetch(apiURL)
			.then((data) => data.json().then((post) => console.log(post)))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<h1>Making http request using useEffect</h1>
		</div>
	);
};

export default HTTPRequest;
