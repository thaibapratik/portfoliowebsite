import Typewriter from "typewriter-effect";
import profile from "../assets/profile.jpg";
import LanguageSection from "./LanguageSection";
import { FaMapPin } from "react-icons/fa";

const Introduction = () => {
	return (
		<section className="flex items-center gap-40">
			<div className="mb-14">
				<h1 className="font-bold text-4xl">
					Hello, my name is <br />
					<span className="text-5xl">Pratik Thaiba</span>
				</h1>
				<div className="flex gap-1 py-5 justify-items-center">
					<FaMapPin size={25} />{" "}
					<span className="text-lg">Nepal, Butwal</span>
				</div>
				<div className="flex gap-[7px] text-lg font-medium items-center">
					<span>I'm a</span>
					<Typewriter
						options={{
							strings: ["Front End Developer."],
							autoStart: true,
							loop: true,
						}}
					/>
				</div>
			</div>
			<div className="h-[450px] w-[350px]">
				<img
					src={profile}
					alt="profile"
					className="object-cover h-full w-full rounded-[50px] img-shadow"
				/>
			</div>
		</section>
	);
};
export default Introduction;
