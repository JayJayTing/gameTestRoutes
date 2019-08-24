import Phaser from "phaser";

class SceneA extends Phaser.Scene {
	constructor() {
		super({ key: "SceneA", active: true });
	}
}

export default function startGame() {
	let config = {
		type: Phaser.AUTO,
		width: 800,
		height: 600,
		scene: [SceneA]
	};

	let game = new Phaser.Game(config);
}
