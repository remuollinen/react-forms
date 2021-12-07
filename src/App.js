import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Notes from "./components/Notes";
import Popup from "./components/Popup";
import View from "./components/View";
import axios from "axios";

class App extends Component {
	state = {
		firstname: "",
		lastname: "",
		number: "",
		message: "",
		role: "",
		showPopup: false,
		data: [],
	};

	componentDidMount() {
		axios
			.get("http://localhost:3001/notes")
			.then((res) => this.setState({ data: res.data }));
	}

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
		const props = {
			firstname: this.state.firstname,
			lastname: this.state.lastname,
			number: this.state.number,
			message: this.state.message,
			role: this.state.role,
		};

		return (
			<div className="App">
				<Form
					inputHandler={this.inputHandler}
					showPopupHandler={this.showPopupHandler}
				/>
				<div className="result-area">
					<View {...props} />
					{this.state.data.map((note) => (
						<Notes {...note} />
					))}
				</div>
				{this.state.showPopup && (
					<Popup
						showPopup={this.state.showPopup}
						showPopupHandler={this.showPopupHandler}
						closePopupHandler={this.closePopupHandler}
						{...props}
					/>
				)}
			</div>
		);
	}
}

export default App;
