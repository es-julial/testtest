import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Navbar />
				<Header />
				<Skills />
				<Projects />
				<Footer />
			</div>

			<Routes>
				<Route path="/" element={<Navbar />} />
				<Route path="/about" element={<Header />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Footer />} />
				{/* 404 */}
				<Route
					path="*"
					element={<h1 style={{ textAlign: "center" }}>404. Not Found</h1>}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
