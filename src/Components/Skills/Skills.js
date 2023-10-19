import React from "react";
import "./Skills.css";
const PDF_FILE_URL = "http://localhost:3000/myCV.pdf";

const Skills = () => {
	const downloadFileAtURL = (url) => {
		const filename = url.split("/").pop();
		const aTag = document.createElement("a");
		aTag.href = url;
		aTag.setAttribute("download", filename);
		document.body.appendChild(aTag);
		aTag.click();
		aTag.remove();
	};
	return (
		<div className="skills-container" id="skills">
			<div className="skills-list-container">
				{/* desc */}
				<div className="skills-desc-container">
					<h1>
						My Awesome <span>Skills</span>
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magnam
						eveniet est possimus doloribus delectus voluptatibus animi facilis
						autem numquam? Similique doloribus totam consequuntur odio
						voluptates asperiores architecto libero repellendus. Lorem ipsum
						dolor sit amet, consectetur adipisicing elit. Ipsum iusto at illo
						odit officia rem voluptate, obcaecati quisquam nam. In facere
						repellendus dolorum. Numquam quisquam laborum doloremque eum nostrum
						quia.
					</p>
					<button
						onClick={() => {
							downloadFileAtURL(PDF_FILE_URL);
						}}
					>
						Hire Me
					</button>
				</div>
				{/* items */}
				<div className="skills-item-container">
					<div className="skills-item">
						<i className="fa-solid fa-code"></i>
						<div className="item-desc">
							<h3>Web Development</h3>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
								nostrum totam nobis incidunt, autem voluptatem nulla, iusto
								voluptatibus suscipit, animi earum magnam consequatur ipsum
								quidem fugiat molestias accusamus distinctio corporis.
							</p>
						</div>
					</div>
					<div className="skills-item">
						<i className="fa-solid fa-desktop"></i>
						<div className="item-desc">
							<h3>Desktop Development</h3>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
								nostrum totam nobis incidunt, autem voluptatem nulla, iusto
								voluptatibus suscipit, animi earum magnam consequatur ipsum
								quidem fugiat molestias accusamus distinctio corporis.
							</p>
						</div>
					</div>
					<div className="skills-item">
						<i className="fa-solid fa-tablet-alt"></i>
						<div className="item-desc">
							<h3>UX Design</h3>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
								nostrum totam nobis incidunt, autem voluptatem nulla, iusto
								voluptatibus suscipit, animi earum magnam consequatur ipsum
								quidem fugiat molestias accusamus distinctio corporis.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
