// import React, { useState } from "react";
// import "./MyPlayer.css";
// import video from "../../assets/video.mp4";

// const MyPlayer = () => {
// 	const [show, setShow] = useState(true);
// 	return (
		
// 		show?<div className="demo-container">
// 			<h1>
// 				Demo: <span> Portfolio </span>
// 			</h1>
// 			<video className="video-container" with="750" height="500" controls>
// 				<source className="src-content" src={video} type="video/mp4" />
// 			</video>
// 			<button onClick={() => setShow(!show)}>Toggle</button>
// 		</div>:null
		
		
		
// 	);
// };

// export default MyPlayer;

import React from "react";
import "./MyPlayer.css";
import video from "../../assets/video.mp4";

const MyPlayer = () => {
	
	return (
		
		<div className="demo-container" id="demo">
			<h1>
				Demo: <span> Portfolio </span>
			</h1>
			<video className="video-container" with="750" height="500" controls>
				<source className="src-content" src={video} type="video/mp4" />
			</video>
			
		</div>
		
		
		
	);
};

export default MyPlayer;

