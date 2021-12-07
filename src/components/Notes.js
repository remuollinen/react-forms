import React from "react";

const Notes = ({ firstname, lastname, number, role, message }) => {
	return (
		<div className="Notes">
			<p>
				<span>
					{firstname} {lastname} - {role}
				</span>
				|<span>{number}</span>|<span>{message}</span>
			</p>
		</div>
	);
};

export default Notes;
