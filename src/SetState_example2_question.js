import { useState } from "react";

function SetState(){
	// console.log("component in");

	let subjects=["HTML", "CSS", "JavaScript"];

	let chageSubject=["React", "Vue.js", "NodeJS", "TypeScript"];

	let [comment, setState]=useState(subjects);

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
		setState(chageSubject);
	};

	return(
		<>
			<ul>
				{
					comment.map((d, i) =>
						<li key={i}>{d}</li>
					)
				}
			</ul>
			<button style={buttonStyle} onClick={changState}>State 변경</button>
		</>
	);
}

export default SetState;