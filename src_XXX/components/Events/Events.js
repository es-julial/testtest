const Events = () => {
	const handleClick = (e) => {
		console.log(e);
	};

	return (
		<div>
			<h3>Event Handler</h3>
			<button onClick={(e) => handleClick(e)}>Click me</button>
		</div>
	);
};

export default Events;
