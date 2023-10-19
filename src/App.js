import { BrowserRouter, Routes,  Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Form from "./Components/Form/Form";
import MyPlayer from "./Components/MyPlayer/MyPlayer";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Navbar />
				<Header />
				<Skills />
				<Projects />
				<MyPlayer />
				<Form />
				<Footer />
			</div>

			<Routes>
				<Route path="/" component={<Navbar />} />
				<Route path="/home" component={<Navbar />} />
				<Route path="/about" component={<Header />} />
				<Route path="/skills" component={<Skills />} />
				<Route path="/projects" component={<Projects />} />
				<Route path="/contact" component={<Form />} />
				<Route path="/demo" element={<MyPlayer />} />
				{/* 404 */}
				<Route
					path="*"
					component={<h1 style={{ textAlign: "center" }}>404. Not Found</h1>}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
