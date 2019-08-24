const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const PORT = 3001;

app.get("/", (req, res) => {
	res.send("<h1>Hellow World</h1>");
});

http.listen(PORT, () => {
	console.log(`listening on Port ${PORT}`);
});

const defaultPlayerDataTest = {
	rooms: [],
	username: "jayjay",
	email: "jayjay@toronto.com"
};

const onlinePlayers = {};

io.on("connection", socket => {
	///////////////////////////
	console.log("A user has been connected: ", socket.id);
	onlinePlayers[socket.id] = defaultPlayerDataTest;
	///////////////////////////////
	socket.on("disconnect", () => {
		console.log("a user has been disconnected", socket.id);
		delete onlinePlayers[socket.id];
		console.log(onlinePlayers);
	});
	socket.on("hello", data => {
		console.log(data);
	});
	let count = 1;
	setInterval(() => {
		console.log("emitting hello")
		count++
		socket.emit("hello", { message: `hello ${count}` });
	}, 2000)
});
