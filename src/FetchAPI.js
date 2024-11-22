import { useState, useEffect } from "react";

function FetchAPI(){
	let [state, setState]=useState({
		error: null,
		isLoaded: false,
		data: null
	});

	useEffect(() => {
		setTimeout(function(){
			fetch("/data/data.json")
				.then(res => res.json())
				.then(
					res => {
						setState({
							error: null,
							isLoaded: true,
							data: res.data
						});
					},
					err => {
						setState({
							error: err,
							isLoaded: true,
							data: []
						});
					}
				);
		}, 2000);
	}, []);

	let {error, isLoaded, data}=state;

	console.log(error, isLoaded, data); // 2회차에 정상 로딩

	if(error){
		return(
			<div>Error : {error.message}</div>
		);
	}

	if(!isLoaded){
		return(
			<div>Loading ...</div>
		);
	}
	else{
		return(
			<ul>
				{
					data.map((d, i) =>
						<li key={i+1}>{d.name} : {d.price}</li>
					)
				}
			</ul>
		);
	}
}

export default FetchAPI;