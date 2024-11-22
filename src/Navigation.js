import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Navigation(props) {
	// console.log(props);
	let data = props.propsValue;
	// console.log(data);

	useEffect(() => {
		let n = 0;

		let top = document.querySelector(".top");
		let content = document.querySelector(".content");
		let contentList = content.querySelectorAll("div[id^=area]");
		let gnb = document.getElementById("gnb");
		let gnbList = gnb.querySelectorAll("ul li");

		gnbList[n].classList.add("active");

		window.addEventListener("scroll", function () {
			if (window.scrollY > 80) {
				if (top.classList.contains("fixed") === false) {
					top.classList.add("fixed");
					gsap.fromTo(top, { top: -100 }, { top: 0, duration: 0.3, delay: 0.5 });
				}
			}
			else {
				if (top.classList.contains("fixed") === true) {
					top.classList.remove("fixed");
					top.removeAttribute("style");
				}
			}
		});

		contentList.forEach(function (item, i) {
			gsap.timeline({
				scrollTrigger: {
					trigger: item,
					start: "top 80%",
					end: "bottom 20%",
					onEnter: function () {
						controlMenu(i);
					},
					onEnterBack: function () {
						controlMenu(i);
					}
				}
			});
		});

		function controlMenu(n) {
			gnbList.forEach(function (item, i) {
				if (i === n) {
					item.classList.add("active");
				}
				else {
					item.classList.remove("active");
				}
			});
		}

		gnbList.forEach(function (item, i) {
			item.addEventListener("click", function (e) {
				e.preventDefault();
				gsap.to(window, { scrollTo: contentList[i].offsetTop, duration: 0.5 });
			});
		});
	});

	return (
		<nav id="gnb">
			<ul>
				{/*
				<li><a href="#area1">HOME</a></li>
				<li><a href="#area2">ABOUT US</a></li>
				<li><a href="#area3">PAGES</a></li>
				<li><a href="#area4">FEATURES</a></li>
				<li><a href="#area5">PORTFOLIO</a></li>
				<li><a href="#area6">BLOG</a></li>
				<li><a href="#area7">SHOP</a></li>
				<li><a href="#area8">CONTACT US</a></li>
				*/}

				{
					data.map((d, i) => 
						<li key={i+1}><a href={d.id}>{d.text}</a></li>
					)
				}
			</ul>
		</nav>
	);
}

export default Navigation;