import ChildComp from "./ChildComp";

const ParentComp = () => {
	return (
		<div>
			<h1>Parent component</h1>
			<ChildComp />
		</div>
	);
};

export default ParentComp;
