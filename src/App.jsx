import Introduction from "./components/Introduction";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";
import purpleBall from "./assets/purpleball.png";
import greyball from "./assets/greyball.png";
import ProjectCard from "./components/ProjectCard";
import Projects from "./components/Projects";

const App = () => {
	return (
		<main className="dark bg-background w-full overflow-hidden">
			{/* home */}
			<div
				className="mesh flex justify-center items-center h-[100vh]"
				id="home"
			>
				<NavBar blurColor="bg-black/20" />
				<Introduction />
			</div>

			{/* experience */}
			<div
				className="bg-darkGrey1 flex justify-center items-center h-fill pb-32 border-b-1 border-white/40"
				id="experience"
			>
				<span className="z-10">
					<Experience />
				</span>
				<div>
					<img
						src={purpleBall}
						alt=""
						className="absolute opacity-50 blur-3xl h-[250px] right-0 top-[40rem]"
					/>
					<img
						src={greyball}
						alt=""
						className="absolute opacity-50 blur-3xl h-[250px] left-0 mt-[180px] "
					/>
				</div>
			</div>

			{/* Projects */}
			<div
				className="bg-darkGrey1 h-fill flex justify-center pb-52"
				id="project"
			>
				<Projects />
			</div>
		</main>
	);
};
export default App;
