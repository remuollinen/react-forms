function Form(props) {
	return (
		<form onSubmit={props.showPopupHandler}>
			<div className="labels">
				<label>Firstname</label>
				<label>Lastname</label>
				<label>Phone number</label>
				<label>Message</label>
				<label>Role</label>
			</div>
			<div className="inputs">
				<input
					type="text"
					name="firstname"
					required
					onChange={props.inputHandler}
				/>
				<input
					type="text"
					name="lastname"
					required
					onChange={props.inputHandler}
				/>
				<input
					type="tel"
					name="number"
					required
					onChange={props.inputHandler}
				/>
				<textarea
					cols="10"
					rows="5"
					name="message"
					required
					onChange={props.inputHandler}
				/>
				<select name="role" onChange={props.inputHandler}>
					<option value="student">Student</option>
					<option value="teacher">Teacher</option>
					<option value="other">Other</option>
				</select>
				<button type="submit" id="submit">
					SEND
				</button>
			</div>
		</form>
	);
}

export default Form;
