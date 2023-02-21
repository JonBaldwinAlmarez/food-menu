import {
	AiOutlineBars,
	AiOutlineClose,
	AiOutlineSearch,
	AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill, BsWallet2 } from "react-icons/bs";
import { TbTruck } from "react-icons/tb";
import { MdFavoriteBorder, MdOutlineHelpOutline } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
	const [nav, setNav] = useState(false);
	return (
		<div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
			{/*Left Side*/}
			<div className=" flex items-center">
				<div onClick={() => setNav(!nav)} className="cursor-pointer">
					<AiOutlineBars size={30} />
				</div>
				<h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
					Best <span className=" font-bold">Foods</span>
				</h1>

				<div className="hidden lg:flex items-center bg-gray-400 rounded-full text-[14px]">
					<p className=" bg-black text-white rounded-full p-2">Delivery</p>
					<p className="px-1">Pick-Up</p>
				</div>
			</div>

			{/*Search Input*/}
			<div className="flex bg-gray-200 rounded-full px-2 items-center w-[200px] sm:w-[400px] lg:w-[500px]">
				<AiOutlineSearch size={20} />
				<input
					className=" bg-transparent p-2 focus:outline-none w-full"
					type="text"
					placeholder="Seach Food"
				/>
			</div>
			{/*Cart Button*/}
			<button className=" bg-black text-white items-center py-2 rounded-full hidden md:flex">
				<BsFillCartFill size={20} className=" mr-2" />
				Cart
			</button>

			{/*Mobile Menu*/}
			{/*Overlay*/}
			{nav ? (
				<div className=" bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
			) : (
				false
			)}

			{/*Side Menu*/}
			<div
				className={
					nav
						? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
						: "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
				}
			>
				<AiOutlineClose
					size={20}
					className=" absolute right-4 top-4 cursor-pointer"
					onClick={() => setNav(!nav)}
				/>

				<h2 className=" text-2xl py-2">
					Best <span className="font-bold">Foods</span>
				</h2>
				<nav>
					<ul className="flex flex-col p-4 text-black items-center">
						<li className="flex text-xl py-4 hover:text-cyan-500">
							<TbTruck size={25} className="mr-4" /> Orders
						</li>
						<li className="flex text-xl py-4 hover:text-cyan-500">
							<MdFavoriteBorder size={25} className="mr-4" /> Favorites
						</li>
						<li className="flex text-xl py-4 hover:text-cyan-500">
							<BsWallet2 size={25} className="mr-4" /> Wallet
						</li>
						<li className="flex text-xl py-4 hover:text-cyan-500">
							<MdOutlineHelpOutline size={25} className="mr-4" /> Help
						</li>
						<li className="flex text-xl py-4 hover:text-cyan-500">
							<AiFillTag size={25} className="mr-4" /> Promotions
						</li>
						<li className="flex text-xl py-4 hover:text-cyan-500">
							<BsFillSaveFill size={25} className="mr-4" /> Best One
						</li>
						<li className="flex text-xl py-4 hover:text-cyan-500">
							<FaUserFriends size={25} className="mr-4" /> Invite friends
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Navbar;
