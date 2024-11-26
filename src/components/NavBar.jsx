import "../mesh.css";

const NavBar = ({ blurColor }) => {
	return (
		<section
			className={`flex justify-center items-center gap-10 text-white bg-transparent border-1 border-black/50 m-5 p-2 rounded-full w-fit text-center font-semibold backdrop-blur-md fixed top-0 max-lg:p-1`}
		>
			<a href="" className="nav-links">
				Home
			</a>
			<a href="" className="nav-links">
				About me
			</a>
			<a href="" className="nav-links">
				Projects
			</a>
			<a href="" className="nav-links">
				Contact me
			</a>
		</section>
	);
};
export default NavBar;
