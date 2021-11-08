function View(props) {
	return (
		<div className="View">
			<h2>Here are your inputs</h2>
			<p>
				Firstname <span>{props.firstname}</span>
			</p>
			<p>
				Lastname <span>{props.lastname}</span>
			</p>
			<p>
				Phone number <span>{props.number}</span>
			</p>
			<p>
				Message <span>{props.message}</span>
			</p>
			<p>
				Role <span>{props.role}</span>
			</p>
		</div>
	);
}

export default View;
