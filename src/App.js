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

	showPopupHandler = (event) => {
		event.preventDefault();
		this.setState({
			showPopup: true,
		});
	};

	closePopupHandler = () => {
		this.setState({
			showPopup: false,
		});
	};

	render() {
		return (
			<div className="App">
				<Form
					inputHandler={this.inputHandler}
					showPopupHandler={this.showPopupHandler}
				/>
				<View
					firstname={this.state.firstname}
					lastname={this.state.lastname}
					number={this.state.number}
					message={this.state.message}
					role={this.state.role}
				/>
				<Popup
					showPopup={this.state.showPopup}
					showPopupHandler={this.showPopupHandler}
					closePopupHandler={this.closePopupHandler}
					firstname={this.state.firstname}
					lastname={this.state.lastname}
					number={this.state.number}
					message={this.state.message}
					role={this.state.role}
				/>
			</div>
		);
	}
}

export default App;
