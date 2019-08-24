import React from "react";
import Phaser from "phaser";
import SceneA from "./GameTestScenes/SceneA";
let game;
let config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	scene: [SceneA]
};

function GameTest(props) {
	let socket = props.socket;
	console.log("OVER HERE", props.socket);
	socket.emit("hello", { message: "just saying hello" });
	console.log("OVER HERE");
	socket.on("hello", data => {
		console.log(data);
	});

	if (!game) {
		game = new Phaser.Game(config);
	} else {
		console.log("destroying game");
		game.destroy(true);
		game = new Phaser.Game(config);
	}

	return <div>game page</div>;
}

export default GameTest;
