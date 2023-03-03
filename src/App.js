import {
	BrowserRouter as Router,
	Route,
	Routes as Switch,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import { Contactme } from "./components/Contactme.js";
import { Certificate } from "./components/Certificate.js";
import { Home } from "./components/Home.js";
import { Resume } from "./components/Resume.js";
import { Navbar } from "./components/Navbar";

function App() {
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Joseph Tenore</title>
				<link rel="canonical" href="http://mysite.com/example" />
				<meta
					name="description"
					content="Learning how implement deploying a personal website"
				/>
			</Helmet>
			<Router>
				<div>
					<Navbar />
					<Switch>
						<Route exact path="/" element={<Home />} />
						<Route path="/Contactme" element={<Contactme />} />
						<Route path="/Resume" element={<Resume />} />
						<Route path="/Certificate" element={<Certificate />} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
