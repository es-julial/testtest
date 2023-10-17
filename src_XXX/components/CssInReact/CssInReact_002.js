import ButtonStatelessCom from "../componentsPart2/ButtonStatelessCom";
import "./CssInReact.css";

const CssInReact = () => {
	return (
		<div className="container">
			<h1 className="headerTitle">CSS in react using inline styling</h1>
			<p className="desc">This is just the beginning of using css in react</p>

			<ButtonStatelessCom />
		</div>
	);
};

export default CssInReact;