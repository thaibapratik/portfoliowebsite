import { useState } from "react";
import "../mesh.css";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const NavBar = ({ blurColor }) => {
	const navLinks = ["home", "experience", "project", "contact"];
	const [menu, setMenu] = useState(true);
	return (
		<nav className="sm:flex">
			<div className=" font-semibold w-full ">
				<div className="p-2 text-center text-white bg-transparent border-1 border-black/50 m-5 rounded-full w-fit flex justify-center gap-10 max-sm:hidden z-20 backdrop-blur-md fixed top-0 max-lg:p-1 capitalize">
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
				<div
					className="block cursor-pointer z-20 sm:hidden absolute top-0 left-0"
					onClick={() => setMenu(!menu)}
				>
					{menu ? (
						<FiMenu size={30} color="#11181c" />
					) : (
						<RxCross2 size={30} color="#11181c" />
					)}
				</div>
				{menu || (
					<div className="flex flex-col absolute w-40 p-2 gap-4 sm:hidden backdrop-blur-lg rounded-xl bg text-white top-10 left-0 capitalize">
						{navLinks.map((link) => (
							<a
								key={link}
								href={`#${link}`}
								className="nav-links"
							>
								{link}
							</a>
						))}
					</div>
				)}
			</div>
		</nav>
	);
};
export default NavBar;
