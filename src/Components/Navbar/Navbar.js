import React from "react";
import { Link } from "react-router-dom";
import { Link as Lnk } from "react-scroll";
import "./Navbar.css";
import logo from "../../assets/logo.png";
const Navbar = () => {
	return (
		<nav>
			<div className="nav-logo" id="hero">
				<img src={logo} alt="logo" />
			</div>
			<div className="nav-links">
				<ul>
					<li>
						<Lnk
							to="hero"
							spy={true}
							smooth={true}
							offset={-100}
							duration={500}
						>
							<Link to="/Home">Home</Link>
						</Lnk>
					</li>
					<li>
						<Lnk
							to="about"
							spy={true}
							smooth={true}
							offset={-100}
							duration={500}
						>
							<Link to="/About">About</Link>
						</Lnk>
					</li>
					<li>
						<Lnk
							to="skills"
							spy={true}
							smooth={true}
							offset={-100}
							duration={500}
						>
							<Link to="#Skills">Skills</Link>
						</Lnk>
					</li>
					<li>
						<Lnk
							to="projects"
							spy={true}
							smooth={true}
							offset={-100}
							duration={500}
						>
							<Link to="/Projects">Projects</Link>
						</Lnk>
					</li>
					<li>
						<Lnk
							to="contact"
							spy={true}
							smooth={true}
							offset={-150}
							duration={500}
						>
							<Link to="/Contact">Contact</Link>
						</Lnk>
					</li>
					{/* <li>
						<Link to="/demo">Demo</Link>
					</li> */}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
