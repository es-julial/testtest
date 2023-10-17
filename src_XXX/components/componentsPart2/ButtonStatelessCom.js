const ButtonStatelessCom = ({
	fontSize = 10,
	borderRadius = 5,
	padding = 10,
	backgroundColor = "red",
}) => {
	return (
		<button
			style={{
				fontSize: `${fontSize}px`,
				padding: "10px",
				border: "2px solid yellow",
				borderRadius: "10px",
				backgroundColor: backgroundColor,
				color: "white",
			}}
		>
			Register
		</button>
	);
};

export default ButtonStatelessCom;
