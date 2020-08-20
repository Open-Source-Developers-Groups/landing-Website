import React, { useEffect } from "react";
import { TimelineLite, Power2 } from "gsap";

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

	useEffect(() => {
		mountedPage();
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

			<section className="__full">
				<div className="min-h-screen container mx-auto flex items-center ">
					<div>
						<img src={"/view.png"} alt="laptop" className="inline" />
					</div>
					<div>
						<h2 className="text-5xl font-bold">
							Get full Donations <br /> from anywhere in the world
						</h2>
						<h3 className="mt-3">
							Cash, Store cryptocurrencies, Cheque, Debit Card we got you
							covered
						</h3>
					</div>
				</div>
			</section>
		</>
	);
}
