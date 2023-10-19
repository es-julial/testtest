import React from "react";
import { Link } from "react-router-dom";
// import { Link, useNavigate, useHistory } from "react-router-dom";
import { Link as Lnk } from "react-scroll";
import Typical from "react-typical";
import profileImg from "../../assets/profile.png";
import "./Header.css";

const PDF_FILE_URL = "http://localhost:3000/myCV.pdf";

const Header = () => {
	// const [show, setShow] = useState(true);
	// const navigate = useNavigate();

	// function goToDemo() {
	// 	// navigate("/demo", { replace: true });
	// 	// let path = `newPath`;
	// 	// navigate(path);
	// 	window.location.href = "http://localhost:3000/demo";
	// }

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
		<div className="header-container">
			{/* header content */}
			<div className="header-content">
				<h1>Hy! Am</h1>
				<h2 className="fullname">Precious Onyeukwu</h2>
				<h2>
					I'm a {""}
					<Typical
						steps={[
							"Full Stack Developer 💙",
							1000,
							"Frontend Developer ✅",
							1000,
							"Backend Developer 🏆",
							1000,
							"React Developer ⚛️",
							1000,
						]}
						loop={Infinity}
						wrapper="b"
					/>
				</h2>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
					libero facilis labore commodi voluptas delectus esse eius rem
					consequatur est tenetur quaerat laboriosam nostrum dicta, vero aperiam
					officiis reprehenderit itaque! Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Inventore sapiente expedita iure beatae aliquid
					quis, accusamus, nostrum natus corrupti ipsa cumque sit omnis
					voluptates alias impedit recusandae aspernatur voluptate molestias.
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
					repellendus quae incidunt di dolor enim culpa fugit sunt molestias
					harum dolorum asperiores magnam quod quaerat perspiciatis iste
					excepturi!
				</p>
				{/* payment links */}
				<div className="header-payment-container">
					<Lnk to="demo" spy={true} smooth={true} offset={-100} duration={500}>
						<Link to="/Demo">
							<button className="btn2">Demo</button>
						</Link>
					</Lnk>
					<Lnk
						to="contact"
						spy={true}
						smooth={true}
						offset={-100}
						duration={500}
					>
						<Link to="/Contact">
							<button className="btn2">Hire Me</button>
						</Link>
					</Lnk>

					<button
						className="btn3"
						onClick={() => {
							downloadFileAtURL(PDF_FILE_URL);
						}}
					>
						Resume
					</button>

					<i className="fa-brands fa-paypal"></i>
					<i class="fa-brands fa-cc-visa"></i>
					<i class="fa-brands fa-cc-mastercard"></i>
					<i class="fa-brands fa-cc-amex"></i>
				</div>
			</div>
			{/* image container */}
			<div className="profile-img-container">
				<img src={profileImg} alt="" />
				<div className="circle-1"></div>
				<div className="circle-2"></div>
			</div>
		</div>
	);
};

export default Header;
