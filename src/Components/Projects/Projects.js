import React from "react";
import "./Projects.css";
import w1 from "../../assets/w1.jpg";
import w2 from "../../assets/w2.jpg";
import w3 from "../../assets/w3.jpg";
import w4 from "../../assets/w4.jpg";
import w5 from "../../assets/w5.jpg";
import w6 from "../../assets/w6.jpg";
const Projects = () => {
	return (
		<div className="projects-container" id="projects">
			<h1>My Recents Projects</h1>
			<div className="projects-list-container">
				<div className="projects-item">
					<img src={w1} alt="project1" />
				</div>
				<div className="projects-item">
					<img src={w2} alt="project2" />
				</div>
				<div className="projects-item">
					<img src={w3} alt="project3" />
				</div>
				<div className="projects-item">
					<img src={w4} alt="project4" />
				</div>
				<div className="projects-item">
					<img src={w5} alt="project5" />
				</div>
				<div className="projects-item">
					<img src={w6} alt="project6" />
				</div>
			</div>
		</div>
	);
};

export default Projects;
