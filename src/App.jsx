import Introduction from "./components/Introduction";
import NavBar from "./components/NavBar";

const App = () => {
	return (
		<main className="mesh h-[100vh] flex justify-center items-center">
			<NavBar blurColor="bg-black/20" />
			<Introduction />
		</main>
	);
};
export default App;
