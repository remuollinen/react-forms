import React from "react";

const Popup = (props) => {
	return (
		<div className={props.showPopup ? "Popup active" : "Popup"}>
			<div className="popup-wrapper">
				<div className="popup-header">
					<h3>Your inputs</h3>
					<button id="close-btn" onClick={() => window.location.reload()}>
						Close
					</button>
				</div>
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
			</div>
		</div>
	);
};

export default Popup;
