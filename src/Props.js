

function Props(props) {
	// console.log(props);

	// case1
	// let data = props.propsValue;
	// console.log(data);

	// case2 
	let { propsValue } = props; // {propsValue: Array}
	console.log(propsValue);

	const obj = { a: 0, b: 1, c: 2 };
	let { a, b, c } = obj;
	console.log(a, b, c); // 0 , 1 , 2 

	return (
		<>
			<header id="header">
				<nav>
					<ul>
						{
							propsValue.map(b =>
								<li key={d.idx}>{d.menu}</li>
							)
						}
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Props;