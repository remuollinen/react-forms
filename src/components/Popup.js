import React from "react";

const Popup = (props) => {
	return (
		<div className={props.showPopup ? "Popup active" : "Popup"}>
			<div className="popup-wrapper">
				<h2>Your note</h2>
				<div className="popup-content">
					<p>
						Firstname: <span>{props.firstname}</span>
					</p>
					<p>
						Lastname: <span>{props.lastname}</span>
					</p>
					<p>
						Phone number: <span>{props.number}</span>
					</p>
					<p>
						Message: <span>{props.message}</span>
					</p>
					<p>
						Role: <span>{props.role}</span>
					</p>
				</div>
				<div className="buttons">
					<button onClick={() => window.location.reload()}>Yes I'm sure</button>
					<button onClick={props.closePopupHandler}>
						No I don't want to post it
					</button>
				</div>
			</div>
		</div>
	);
};

export default Popup;
