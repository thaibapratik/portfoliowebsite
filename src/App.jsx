import Introduction from "./components/Introduction";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";

const App = () => {
	return (
		<main className="dark bg-background">
			<div className="mesh flex justify-center items-center h-[100vh]">
				<NavBar blurColor="bg-black/20" />
				<Introduction />
			</div>
			<div className="bg-darkGrey1 flex justify-center items-start h-[100vh]">
				<Experience />
			</div>
		</main>
	);
};
export default App;
