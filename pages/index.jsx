import React, { useEffect } from "react";
import gsap, { TimelineLite, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
	const tl = new TimelineLite();

	const mountedPage = () => {
		tl.to(
			"#full-absolute",
			1.9,
			{
				left: "-100vw",
				ease: Power2.easeInOut,
			},
			"0.5"
		)
			.fromTo(
				"#laptop",
				1,
				{
					x: "-100px",
					opacity: 0,
				},
				{
					opacity: 1,
					x: 0,
				},
				"-=1"
			)
			.fromTo(
				"#text-1",
				0.5,
				{
					opacity: 0,
					y: 100,
				},
				{ ease: "easein", y: 0, opacity: 1 }
			);
	};

	const scrollAnimation = () => {
		tl.to("#view", 0.7, {
			scale: 1,
			ease: Power2.easeIn,
			scrollTrigger: {
				trigger: "#laptop",
				scrub: true,
			},
			reversed: true,
		});
		tl.to("#wallet", {
			ease: "none",
			duration: 4,
			rotation: 360,
			// y: 500,
			scrollTrigger: {
				trigger: "#wallet-pin",
				scrub: true,
				pin: true,
			},
		});
	};

	useEffect(() => {
		mountedPage();
		scrollAnimation();
	}, []);

	return (
		<>
			<div>
				<div
					className="bg-black absolute w-full h-full"
					id="full-absolute"
				></div>
				<div className="container mx-auto h-screen pt-20 flex items-center">
					<div className="w-1/2 " id="text-1">
						<h1 className="text-3xl font-bold mb-2">
							Donation built for startups
						</h1>
						<h1 className="text-3xl font-bold mb-2" id="text-2">
							Donation made easier for everyone
						</h1>
						<h1 className="text-3xl font-bold mb-2" id="text-3">
							World wide donations with any legal tender
						</h1>
						<button className="bg-blue-600 rounded-full px-8 py-2 mt-3 text-white outline-none border-blue-600 text-2xl font-bold hover:bg-white hover:text-black hover:border-black border-2 transition-all duration-200 ease-in">
							Open Account
						</button>
					</div>
					<div className="w-1/2">
						<img
							src={"/laptop-2x.png"}
							alt="laptop"
							className="inline"
							id="laptop"
						/>
					</div>
				</div>
			</div>

			<section className="__full" id="view-container">
				<div className="min-h-screen container mx-auto flex items-center ">
					<div>
						<img
							src={"/view.png"}
							alt="laptop"
							className="inline"
							id="view"
							style={{ transform: " scale(0.3)" }}
						/>
					</div>
					<div>
						<h2 className="text-5xl font-bold text-white">
							Get full Donations <br /> from anywhere in the world
						</h2>
						<h3 className="mt-3 text-white">
							Cash, Store cryptocurrencies, Cheque, Debit Card we got you
							covered
						</h3>
					</div>
				</div>
			</section>

			<section>
				<div
					className="min-h-screen container mx-auto flex items-center"
					id="wallet-pin"
				>
					<div className="w-1/2">
						<h1 className="text-5xl font-bold ">
							Take community funding to the Next level
						</h1>
						Our network and expertise are always at your disposal.
					</div>
					<div className="w-1/2">
						<img
							src={"/145.jpg"}
							alt="laptop"
							className="inline shadow"
							id="wallet"
						/>
					</div>
				</div>
			</section>

			<section className="h-screen bg-black"></section>
		</>
	);
}
