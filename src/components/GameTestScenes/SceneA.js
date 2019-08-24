import Phaser from "phaser";
import io from "socket.io-client";
const serverPORT = 3001;

let socket;

export default class SceneA extends Phaser.Scene {
	constructor() {
		super({ key: "SceneA", active: true });
		this.switch = true;
	}
	preload() {}
	create() {
		if (this.switch) {
		}
	}
	update() {}
}
