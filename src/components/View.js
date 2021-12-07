function View(props) {
	return (
		<div className="View">
			<div className="notebook">
				<div>
					<span className="line"></span>
					<p>
						Firstname <span>{props.firstname}</span>
					</p>
				</div>
				<div>
					<span className="line"></span>
					<p>
						Lastname <span>{props.lastname}</span>
					</p>
				</div>
				<div>
					<span className="line"></span>
					<p>
						Phone number <span>{props.number}</span>
					</p>
				</div>
				<div>
					<span className="line"></span>
					<p>
						Message <span>{props.message}</span>
					</p>
				</div>
				<div>
					<span className="line"></span>
					<p>
						Role <span>{props.role}</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default View;
