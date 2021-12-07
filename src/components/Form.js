function Form({ showPopupHandler, inputHandler }) {
	return (
		<form onSubmit={showPopupHandler}>
			<div className="labels">
				<label>Firstname</label>
				<label>Lastname</label>
				<label>Phone number</label>
				<label>Message</label>
				<label>Role</label>
			</div>
			<div className="inputs">
				<input type="text" name="firstname" required onChange={inputHandler} />
				<input type="text" name="lastname" required onChange={inputHandler} />
				<input type="tel" name="number" required onChange={inputHandler} />
				<textarea
					cols="10"
					rows="5"
					name="message"
					required
					onChange={inputHandler}
				/>
				<select name="role" onChange={inputHandler} required>
					<option value="" disabled>
						Choose a role ...
					</option>
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
