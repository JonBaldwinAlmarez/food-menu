import React from "react";

const Hero = () => {
	return (
		<div className=" max-w-[1640px] mx-auto p-4">
			<div className=" max-h-[500px] relative">
				{/*OverLay*/}
				<div className="absolute w-full h-full max-h-[500px] text-gray-200 bg-black/40 flex flex-col justify-center">
					<h1 className="px-4 text-4xl sm:text-4xl md:text-4xl lg:text-7xl font-bold">
						The<span className=" text-orange-500"> Best</span>
					</h1>
					<h1 className="px-4 text-4xl sm:text-4xl md:text-4xl lg:text-7xl font-bold">
						<span className=" text-orange-500">Food</span> in the{" "}
						<span className=" text-orange-500">City</span>
					</h1>
				</div>

				<img
					className=" w-full max-h-[500px] object-cover "
					src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600"
					alt="Image"
				/>
			</div>
		</div>
	);
};

export default Hero;
