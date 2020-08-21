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

			<section className="__doing_good py-20">
				<div className="flex container mx-auto">
					<div className="w-1/2"></div>
					<div className="w-1/2">
						<h1 className="text-4xl font-bold">
							Are you a charity making impact? Get verified to receive any legal
							tender from any country
						</h1>
						<div className="text-xl font-bold mt-4">
							You don't have to do it alone! or have limitations Connect with
							donors and volunteers looking for credible charities
						</div>
						<button className="px-8 py-4 bg-blue-600 mt-4 text-white rounded-full text-xl">
							Get subscriptions
						</button>
					</div>
				</div>
			</section>

			<section>
				<div
					className="min-h-screen container mx-auto items-center py-20"
					id="wallet-pin"
				>
					<div className="text-center relative">
						<h2 className="absolute text-6xl text-blue-600 font-bold text-opacity-25 w-full text-center mt-20">
							CAMPAIGN * GIVE * RECIEVE *
						</h2>
						<h1 className="text-3xl font-bold ">
							Take community funding to the Next level
						</h1>
						Our network and expertise are always at your disposal.
					</div>
					<div className="flex flex-wrap -mx-10  mt-20">
						<div className="flex-1 shadow-lg m-10">
							<h1>Sign Up</h1>
						</div>
						<div className="flex-1 shadow-lg m-10">
							<h1>Sign Up</h1>
						</div>
						<div className="flex-1 shadow-lg m-10">
							<h1>Sign Up</h1>
						</div>
						<div className="flex-1 shadow-lg m-10">
							<h1>Sign Up</h1>
						</div>
					</div>
				</div>
			</section>

			<section className="h-screen bg-black"></section>
		</>
	);
}
