import { useEffect } from 'react';
import $ from 'jquery';

function Header(props){
	let data=props.propsValue;

	useEffect(() => {
		$(window).on("resize", function(){
			if($(window).width() > 736){
				$("#header").removeClass("open");
				$(".right_area").removeClass("open");
			}
		});

		$(".tab").on("click", function(e){
			e.preventDefault();

			if($(window).width() > 736){
				return false;
			}

			if($("#header").hasClass("open") == true){
				$("#header").removeClass("open");
				$(".right_area").removeClass("open");
				$("#menu > ul > li").removeClass("active");
			}
			else{
				$("#header").addClass("open");
				$(".right_area").addClass("open");
			}
		});

		$("#menu > ul > li").on("click", function(e){
			e.preventDefault();

			$("#menu > ul > li").removeClass("active");
			$(this).addClass("active");
		});
	});

	let a = "bus";

	(a) ? console.log("true") : console.log("false");

	return(
		<header id="header">
			<div className="title_area">
				<h2>Menu</h2>
			</div>
			<nav id="menu">
				<ul>
					{/*
					<li>
						<a href="">homepage</a>
						<ul className="sub">
							<li><a href="">lorem dolor</a></li>
							<li><a href="">ipsum adipiscing</a></li>
							<li><a href="">tempus magna</a></li>
							<li><a href="">feugiat veroeros</a></li>
						</ul>
					</li>
					<li>
						<a href="">generic</a>
						<ul className="sub">
							<li><a href="">lorem dolor</a></li>
							<li><a href="">ipsum adipiscing</a></li>
							<li><a href="">tempus magna</a></li>
							<li><a href="">feugiat veroeros</a></li>
						</ul>
					</li>
					<li><a href="">elements</a></li>
					<li><a href="">submenu</a></li>
					*/}

					{/*
						data.map((d1, i) =>
							<li key={i+1}>
								<a href="">{d1.depth1}</a>
								<ul className="sub">
									{
										d1.depth2.map((d2, j) =>
											<li key={j+1}><a href="">{d2}</a></li>
										)
									}
								</ul>
							</li>
						)
					*/}

					{
						data.map((d1, i) =>
							<li key={i+1}>
								<a href="">{d1.depth1}</a>
								{
									(d1.depth2) ?
										<ul className="sub">
											{
												d1.depth2.map((d2, j) =>
													<li key={j + 1}><a href="">{d2}</a></li>
												)
											}
										</ul>
										:null
								}
							</li>
						)
					}
				</ul>
			</nav>
		</header>
	);
}

export default Header;