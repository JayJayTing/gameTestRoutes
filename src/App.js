import React from "react";

import logo from "./logo.svg";
import io from "socket.io-client";
import "./App.css";
import NavBar from "./components/NavBar";
import Lobby from "./components/Lobby";
import About from "./components/About";
import Home from "./components/Home";
import GameTest from "./components/GameTest";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
//import Button from "@material-ui/core/Button";
// import { Socket } from "net";
const serverPORT = 3001;

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1)
	},
	input: {
		display: "block"
	}
}));

let socket;
function App() {
	const classes = useStyles();
	if (!socket) {
		console.log("initializing socket.io from client");
		socket = io(`:${serverPORT}`);
	}

	return (
		<Router>
			<NavBar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/about" exact component={About} />
				<Route path="/lobby" exact component={Lobby} />
				<Route
					path="/gametest"
					exact
					render={() => {
						return <GameTest socket={socket} />;
					}}
				/>
			</Switch>
		</Router>
	);
}

export default App;
