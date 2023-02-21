import React from "react";
import { categories } from "../data/data.js";

function category() {
	return (
		<div className="max-w-[1640px] px-4 py-12">
			<h1 className=" text-cyan-600 font-bold text-center text-4xl">
				Top Seller Items
			</h1>
			{/*Catergories*/}

			<div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-2 py-4">
				{categories.map((item, index) => (
					<div
						className="rounded-full bg-cyan-100 hover:border hover:border-zinc-900 items-center p-4 flex justify-between shadow-lg hover:scale-105 duration-200"
						key={index}
					>
						<h2 className=" font-bold sm:text-xl">{item.name}</h2>
						<img className="w-20" src={item.image} alt={item.name} />
					</div>
				))}
			</div>
		</div>
	);
}

export default category;
