import "../mesh.css";

const NavBar = ({ blurColor }) => {
	return (
		<nav
			className={`z-50 flex justify-center items-center gap-10 text-white bg-transparent border-1 border-black/50 m-5 p-2 rounded-full w-fit text-center font-semibold backdrop-blur-md fixed top-0 max-lg:p-1`}
		>
			<a href="#home" className="nav-links">
				Home
			</a>
			<a href="#experience" className="nav-links">
				Experience
			</a>
			<a href="#project" className="nav-links">
				Project
			</a>
			<a href="" className="nav-links">
				Contact me
			</a>
		</nav>
	);
};
export default NavBar;
