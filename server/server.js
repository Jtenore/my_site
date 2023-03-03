const { removeDirectivesFromDocument } = require("@apollo/client/utilities");
const express = require("express");
const { Client } = require("pg");
const app = express();
const client = new Client({
	user: "postgres",
	password: "9269",
	host: "localhost",
	port: 5432,
	database: "postgres",
});

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	res.header("Access-Control-Allow-Credentials", true);
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	res.header("Access-Control-Allow-Methods", "POST, PUT, DELETE, OPTIONS, GET");
	next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connect();
async function connect() {
	try {
		await client.connect();
		console.log("connected");
	} catch (e) {
		console.error(`connection failed ${e}`);
	}
}

app.get("/post", async (req, res) => {
	try {
		const results = await client.query("select * from posts");
		res.json(results.rows);
	} catch (e) {
		console.log("there was an error");
		res.send("there was an error");
	}
	res.json([]);
});

app.listen(5000, () => console.log("listening"));
