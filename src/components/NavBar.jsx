import { useState } from "react";
import "../mesh.css";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const NavBar = ({ blurColor }) => {
	const navLinks = ["home", "experience", "project", "contact"];
	const [menu, setMenu] = useState(true);

	return (
		<nav className="relative z-20">
			{/* Desktop Navbar */}
			<div className="hidden sm:flex justify-center items-center font-semibold fixed top-0 left-0 w-full z-20 ">
				<div className="p-2 bg-transparent border border-black/50 my-5 rounded-full text-white flex gap-10 capitalize backdrop-blur-md">
					{navLinks.map((link) => (
						<a
							key={link}
							href={`#${link}`}
							className="nav-links hover:bg-black/50"
						>
							{link}
						</a>
					))}
				</div>
			</div>

			{/* Mobile Navbar */}
			<div
				className="block cursor-pointer z-20 sm:hidden absolute top-5 left-5"
				onClick={() => setMenu(!menu)}
			>
				{menu ? (
					<FiMenu size={30} color="#11181c" />
				) : (
					<RxCross2 size={30} color="#11181c" />
				)}
			</div>

			{!menu && (
				<div className="flex flex-col absolute left-1/2 transform -translate-x-1/2 w-40 p-2 gap-4 sm:hidden backdrop-blur-lg rounded-xl bg-black text-white top-16 capitalize">
					{navLinks.map((link) => (
						<a key={link} href={`#${link}`} className="nav-links">
							{link}
						</a>
					))}
				</div>
			)}
		</nav>
	);
};

export default NavBar;
