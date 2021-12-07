import React from "react";

const Popup = ({
	showPopup,
	firstname,
	lastname,
	number,
	role,
	message,
	closePopupHandler,
	post,
}) => {
	return (
		<div className={showPopup ? "Popup active" : "Popup"}>
			<div className="popup-wrapper">
				<h2>Your note</h2>
				<div className="popup-content">
					<p>
						Firstname: <span>{firstname}</span>
					</p>
					<p>
						Lastname: <span>{lastname}</span>
					</p>
					<p>
						Phone number: <span>{number}</span>
					</p>
					<p>
						Message: <span>{message}</span>
					</p>
					<p>
						Role: <span>{role}</span>
					</p>
				</div>
				<div className="buttons">
					<button onClick={post}>Yes I'm sure</button>
					<button onClick={closePopupHandler}>
						No I don't want to post it
					</button>
				</div>
			</div>
		</div>
	);
};

export default Popup;
