import { React, useState, useEffect } from "react";

export const Home = () => {
	const [post, setPost] = useState([]);

	useEffect(() => {
		fetchPost();
	}, []);

	const fetchPost = async () => {
		const response = await fetch("http://localhost:5000/post");
		const data = await response.json();
		setPost(data);
	};

	return (
		<div className="home_main, side_pad">
			<h1>Joseph Tenore</h1>
			<h1>Julio said I did a great job</h1>

			<p className="top_pad">
				not ready for mobile
				<br />
				constantly under maintenance
			</p>

			<form>
				<input type="text" name="name" />
				<input type="submit" name="submit" />
			</form>
			<div className="blog_posts">
				<div>
					{post.map((t) => (
						<div className="blog_posts" key={t.post_id}>
							<div className="top_pad">
								<h1>{t.post_title}</h1> <br />
								{t.post_content}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
