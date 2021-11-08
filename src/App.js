import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Popup from "./components/Popup";
import View from "./components/View";

class App extends Component {
	state = {
		firstname: "",
		lastname: "",
		number: "",
		message: "",
		role: "",
		showPopup: false,
	};

	inputHandler = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	render() {
		return (
			<div className="App">
				<Form inputHandler={this.inputHandler} />
				<View
					firstname={this.state.firstname}
					lastname={this.state.lastname}
					number={this.state.number}
					message={this.state.message}
					role={this.state.role}
				/>
				<Popup showPopup={this.showPopup} />
			</div>
		);
	}
}

export default App;

// come back 1245
