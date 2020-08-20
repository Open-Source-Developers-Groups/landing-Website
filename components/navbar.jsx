import React from "react";

export default function Nav() {
	const links = ["About", "FAQ", "Organizations", "Log In"];
	return (
		<div className="fixed w-full">
			<div className="container mx-auto flex justify-between items-center py-3">
				<div className="brandname text-bold font-xl">DONATION</div>
				<ul className="flex items-center">
					{links.map((e) => {
						return (
							<li key={e} className="mr-4">
								{e}
							</li>
						);
					})}
					<button className="bg-blue-600 text-white rounded-full px-4 py-2">
						Open Account
					</button>
				</ul>
			</div>
		</div>
	);
}
