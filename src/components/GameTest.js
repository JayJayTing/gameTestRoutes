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

const GameTest = ({ messages, respondToServer }) => {

	// useEffect(() => {
		
	// })

	// if (!game) {
	// 	game = new Phaser.Game(config);
	// } else {
	// 	console.log("destroying game");
	// 	game.destroy(true);
	// 	game = new Phaser.Game(config);
	// }

	return (
		<div>
			<h1>game page with {messages.length} messages</h1>
			<button onClick={respondToServer}>Emit Message</button>
			{messages.map(msg => (<p key={msg}>{msg}</p>))}
		</div>
	);
}

export default GameTest;
