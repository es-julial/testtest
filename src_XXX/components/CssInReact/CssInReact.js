import ButtonStatelessCom from "../componentsPart2/ButtonStatelessCom";
import "./CssInReact.css";

const CssInReact = () => {
	return (
		<div className="container">
			<h1 className="headerTitle">CSS in react using inline styling</h1>
			<p className="desc">This is just the beginning of using css in react</p>

			<ButtonStatelessCom
				fontSize={80}
				padding={10}
				borderRadius={20}
				backgroundColor="green"
			/>
		</div>
	);
};

export default CssInReact;
