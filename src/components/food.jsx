import React, { useState } from "react";
import { data } from "../data/data.js";

function Food() {
	const [foods, setFoods] = useState(data);

	{
		/*Filter For Catergory*/
	}
	const FilterForCategory = (category) => {
		setFoods(data.filter((item) => category === item.category));
	};

	{
		/*Filter For price*/
	}

	const FilterForPrice = (price) => {
		setFoods(
			data.filter((item) => {
				return item.price === price;
			})
		);
	};

	return (
		<div className="max-w-[1640px] py-12 px-4 m-auto items-center">
			<h1 className=" text-orange-600 font-bold text-4xl text-center pb-2">
				Top Rated Items
			</h1>

			<div>
				{/*Filter Row*/}
				<div className="flex flex-col lg:flex-row justify-between">
					{/*Filter Type*/}
					<p className="font-bold text-gray-700">Filter Type</p>

					<div className="flex justify-between flex-wrap">
						<button
							onClick={() => setFoods(data)}
							className="m-2 p-2 h-12 w-12 text-center border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
						>
							All
						</button>
						<button
							onClick={() => FilterForCategory("burger")}
							className="m-2 p-2 h-15 w-15 text-center border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
						>
							Burgers
						</button>
						<button
							onClick={() => FilterForCategory("pizza")}
							className="m-2 p-2 h-15 w-15 text-center border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
						>
							Salad
						</button>
						<button
							onClick={() => FilterForCategory("salad")}
							className="m-2 p-2 h-15 w-15 text-center border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
						>
							Pizza
						</button>
						<button
							onClick={() => FilterForCategory("chicken")}
							className="m-2 p-2 h-15 w-15 text-center border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
						>
							Chicken
						</button>
					</div>
					{/*Filter Price*/}
					<div>
						<p className="font-bold text-gray-700">Filter Price</p>

						<div className="flex justify-between max-w-[390px] w-full">
							<button
								onClick={() => FilterForPrice("$")}
								className="m-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
							>
								$
							</button>
							<button
								onClick={() => FilterForPrice("$$")}
								className="m-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
							>
								$$
							</button>
							<button
								onClick={() => FilterForPrice("$$$")}
								className="m-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
							>
								$$$
							</button>
							<button
								onClick={() => FilterForPrice("$$$$")}
								className="m-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
							>
								$$$$
							</button>
						</div>
					</div>
				</div>
			</div>
			{/*Display Food Images*/}
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
				{foods.map((item, index) => (
					<div
						className="border rounded-t-lg shadow-lg hover:scale-105 duration-200"
						key={index}
					>
						<img
							className="w-full h-[200px] object-cover rounded-t-lg"
							src={item.image}
							alt={item.name}
						/>
						<div className="flex justify-between py-4 px-2">
							<p className="font-bold">{item.name}</p>
							<p>
								<span className="bg-orange-500 text-white p-1 rounded-full">
									{item.price}
								</span>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Food;
