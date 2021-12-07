import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Notes from "./components/Notes";
import Popup from "./components/Popup";
import View from "./components/View";
import axios from "axios";

class App extends Component {
	state = {
		inputData: {
			firstname: "",
			lastname: "",
			number: "",
			message: "",
			role: "",
		},
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
			inputData: {
				...this.state.inputData,
				[event.target.name]: event.target.value,
			},
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

	postHandler = () => {
		axios
			.post("http://localhost:3001/notes", this.state.inputData)
			.then((res) => {
				console.log(res);
				this.setState({ showPopup: false });
				window.location.reload();
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<div className="App">
				<Form
					inputHandler={this.inputHandler}
					showPopupHandler={this.showPopupHandler}
				/>
				<div className="result-area">
					<View {...this.state.inputData} />
					{this.state.data.map((note) => (
						<Notes key={note.id} {...note} />
					))}
				</div>
				{this.state.showPopup && (
					<Popup
						{...this.state.inputData}
						showPopup={this.state.showPopup}
						closePopupHandler={this.closePopupHandler}
						post={this.postHandler}
					/>
				)}
			</div>
		);
	}
}

export default App;
