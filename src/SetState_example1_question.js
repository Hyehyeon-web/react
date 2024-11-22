import { useState } from "react";

function SetState(){
	// console.log("component in");

	let [comment, setState]=useState("JavaScript");

	let changeComment="React";

	let buttonStyle={
		marginTop: 20,
		padding: 10,
		fontSize: 14,
		backgroundColor: "#999",
		color: "#fff",
		border: "none",
		cursor: "pointer"
	};

	let changState = () => {
		setState(changeComment);
	};

	return(
		<>
			<p>{comment}</p>
			<button style={buttonStyle} onClick={changState}>State 변경</button>
		</>
	);
}

export default SetState;