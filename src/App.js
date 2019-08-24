import React, { useEffect, useState } from "react";

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


const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1)
	},
	input: {
		display: "block"
	}
}));


const App = () => {

	let socket;
	const serverPORT = 3001;

	const [messages, setMessages] = useState([])

	useEffect(() => {
		if (!socket) {
			socket = io(`:${serverPORT}`)
			setMessages(["started!"])
		}
	}, [])

	useEffect(() => {
		if (socket) {
			socket.on("hello", (data) => {
				setMessages(msgs => msgs.concat([data.message]))
			})
		}
	})

	const respondToServer = () => {
		if (socket) {
			console.log('responding back')
			socket.emit("hello", { message: "just responding hello" })
		} else {
			console.log("socket is false")
		}
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
						return (
							<GameTest
								messages={messages}
								respondToServer={respondToServer}
							/>);
					}}
				/>
			</Switch>
		</Router>
	);
}

export default App;
