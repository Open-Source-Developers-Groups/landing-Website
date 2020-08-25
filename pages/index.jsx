import React, { useEffect } from "react";
import gsap, { TimelineLite, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Slider from "../components/simpleSlider";

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

	const platform = [
		{
			title: "Give what you have",
			subtitle:
				"Everyone has something to give- surplus food, clothes, books. We help you connect with those who need what you have to give.",
			img: "donate2.png",
		},

		{
			title: "Receive",
			subtitle:
				"Sign up now to get relief. Connect with potential donors in your community who love the work you do with children.",
			img: "donation3.jpg",
		},

		{
			title: "Start a Campaign",
			subtitle:
				"Get support for your cause. We connect you with other good people who share your passion, using social media and quick links.",
			img: "fundraising2.jpg",
		},

		{
			title: "Donate Monthly",
			subtitle:
				"A little consistent giving makes a big difference. Set up a convenient monthly donation to your charity of choice.",
			img: "CreditCard.png",
		},
	];

	useEffect(() => {
		mountedPage();
	}, []);

	return (
		<>
			<div>
				<div
					className="bg-black absolute w-full h-full z-20"
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
						<button className="px-8 py-4 bg-blue-600 mt-4 text-white rounded-full text-xl hover:shadow-xl transition-all duration-300 ease-in">
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
							CAMPAIGN * GIVE * RECIEVE
						</h2>
						<h1 className="text-3xl font-bold ">
							Take community funding to the Next level
						</h1>
						Our network and expertise are always at your disposal.
					</div>
					<div className="flex flex-wrap -mx-10  mt-20 pt-10">
						{platform.map((e, i) => {
							return (
								<div
									className="flex-1 shadow p-3 m-10 hover:shadow-lg rounded"
									key={e.title + i}
								>
									<h1 className="text-center font-bold mt-5 text-lg">
										{e.title}
									</h1>
									<p className="text-center mt-3 text-sm text-gray-600 p-2">
										{e.subtitle}
									</p>
									<div
										style={{ height: "200px" }}
										className="flex items-center justify-center p-3"
									>
										<img src={e.img} alt="" />
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			<section className="mb-20 pb-20">
				<h1 className="text-center text-2xl font-bold mb-3">💔 Help !!! 💔</h1>
				<div className="container mx-auto">
					<Slider />
				</div>
			</section>

			<section className=" bg-blue-600 pt-5">
				<div className="flex container mx-auto items-center">
					<div className="w-1/2">
						<img src={"Lucy-Story4.png"} className="w-full" />
					</div>
					<div className="w-1/2">
						<h1 className="text-3xl font-bold text-white">
							Be The Hero of Thousands,
						</h1>
						<p className="text-3xl font-bold text-white">
							Join Our Wait List and Subscribe to our News-letter
						</p>
						<form action="">
							<div>
								<input
									type="text"
									placeholder="Enter Full Name"
									className="w-full my-3 px-5 py-3 rounded-full shadow-lg"
								/>
							</div>
							<div className="flex w-full -mx-3">
								<div className="w-1/2 m-3">
									<input
										type="text"
										className="px-5 py-3 rounded-full shadow-lg"
										placeholder="Phone Number"
									/>
								</div>
								<div className="w-1/2 m-3">
									<input
										type="text"
										className="px-5 py-3 rounded-full shadow-lg"
										placeholder="Email"
									/>
								</div>
							</div>
							<div>
								<button
									type="submit"
									className="bg-white rounded-full px-8 py-2 mt-3 text-blue-500 outline-none border-blue-600 text-2xl font-bold hover:border-white hover:text-black  border-2 transition-all duration-200 ease-in"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
}
