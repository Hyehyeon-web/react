// useEffect 라이브러리는 화면 로딩 후의 상황을 연출할 수 있다 
// useEffect 라이브러리를 불러온다
import { useEffect } from "react";

function Lifecycle() {
	console.log("component in");

	useEffect(() => { // window.addEventListener("load", function(){});
		console.log("useEffect");
	});

	// 단독의 스타일이나 스크립트를 작성할 경우

	// function titleFn() {
	let titleFn = () => {
		console.log("click");
	};
	
	let h2style = {
		lineHeight: "150%",
		color: "#f90"
	};

	return (
		<h2 className="title" onClick={titleFn}>Life Cycle</h2>
	);
}

export default Lifecycle;