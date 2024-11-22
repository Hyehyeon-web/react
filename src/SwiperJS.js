import { useEffect, useState } from 'react';

function SwiperJS() {
	console.log("component in");

	// let output = 1;
	// let [스테이트 변수명, 변경 함수] = useState(초기화);
	let [output, setData] = useState(1);

	let plus = () => {
		// output += 1; // 변수 값이 변해도 화면은 바뀌지 않는다. 컴포넌트를 재진입하지 않기 때문 
		setData(++output); // 스테이트 값이 변경되면, 컴포넌트 값이 재진입된다.  
		console.log("plus");
	};

	let minus = () => {
		// output -= 1;
		setData(--output);
		console.log("minus");
	};

	
	return (
		<>
			<div className="out put">{output}</div>

			<button onClick={plus}>더하기</button>
			<button onClick={minus}>빼기</button>
		</>
	);
}

export default SwiperJS;