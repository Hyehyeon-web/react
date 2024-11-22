import { useState } from "react";

function Setstate() {
	console.log("component in");
	// useState를 사용해서 State 변수를 업데이트하면 다시 컴포넌트를 재진입한다
	// comment 변수는 기초값이 0이므로 0으로 대입
	// console.log(useState(0));

	// 초기값, 변경 함수
	// console.log( useState(0) ); // [0, f]

	let [comment, setState] = useState(0); // state 변수, state 변경 함수
	// console.log(comment, setState); // 0, f


	/*
		// 해체할당
		let array = [0, function () { console.log("log"); }];
		let [a, b] = array;
	
		(b); // log
	
		let obj = { c: 0, d: 1 };
		let { c, d } = obj;
	
		console.log(c, d);
	*/

	let buttonStyle = {
		marginTop: 20,
		padding: 10,
		fontSize: 14,
		backgroundColor: "#999",
		color: "#fff",
		border: "none",
		cursor: "pointer"
	};

	let changeState = () => {
		comment += 1;

		setState(comment);
		// state 변수가 변경되었을 경우, useState() 함수를 
	}

	return (
		<>
			<p>{comment}</p>
			<button style={buttonStyle} onClick={changeState}>State 변경</button>
			{/* <a href="" onClick={changeState}>A로 State 변경</a> */}
		</>
	);
}

export default Setstate;