const Message = (props) => {
	console.log(props.age);
	return (
		<div>
			<h2>Good morning, {props.userName}</h2>
			<p>Welcome to this event</p>
			<p>Your age is {props.age} </p>
		</div>
	);
};

export default Message;
