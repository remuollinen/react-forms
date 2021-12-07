function View({ firstname, lastname, number, role, message }) {
	return (
		<div className="View">
			<div className="notebook">
				<div>
					<span className="line"></span>
					<p>
						Firstname <span>{firstname}</span>
					</p>
				</div>
				<div>
					<span className="line"></span>
					<p>
						Lastname <span>{lastname}</span>
					</p>
				</div>
				<div>
					<span className="line"></span>
					<p>
						Phone number <span>{number}</span>
					</p>
				</div>
				<div>
					<span className="line"></span>
					<p>
						Message <span>{message}</span>
					</p>
				</div>
				<div>
					<span className="line"></span>
					<p>
						Role <span>{role}</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default View;
