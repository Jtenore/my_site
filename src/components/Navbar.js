import { Link } from "react-router-dom";
import "../index.css";

export const Navbar = () => {
	return (
		<div
			className="navbar"
			style={{ paddingBottom: 20, paddingTop: 20, paddingLeft: 20 }}
		>
			<nav>
				<Link to="/" className="navlink" style={{ textDecoration: "none" }}>
					Home
				</Link>
				<Link
					to="/Contactme"
					className="navlink"
					style={{ textDecoration: "none" }}
				>
					Contact me
				</Link>
				<Link
					to="/Resume"
					className="navlink"
					style={{ textDecoration: "none" }}
				>
					Resume
				</Link>
				<Link
					to="/Certificate"
					className="navlink"
					style={{ textDecoration: "none" }}
				>
					Certificates
				</Link>
			</nav>
		</div>
	);
};
