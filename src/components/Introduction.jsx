import Typewriter from "typewriter-effect";
import profile from "../assets/profile.jpg";
import LanguageSection from "./LanguageSection";
import { FaMapPin } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { MdOutlineCloudDownload } from "react-icons/md";
import resume from "../assets/Resume.pdf";

const Introduction = () => {
	return (
		<section className="flex items-center gap-40 h-full">
			<div className="mb-14">
				<h1 className="font-bold lg:text-4xl text-2xl">
					Hello, my name is <br />
					<span className="lg:text-5xl text-3xl">Pratik Thaiba</span>
				</h1>
				<div className="flex gap-1 py-5 items-center">
					<FaMapPin size={18} />
					<span className="text-md">Nepal, Butwal</span>
				</div>
				<div className="flex gap-[7px] xl:text-lg font-medium items-center text:md">
					<span>I'm a</span>
					<Typewriter
						options={{
							strings: ["Front End Developer."],
							autoStart: true,
							loop: true,
						}}
					/>
				</div>
				<div className="mt-3">
					<a href={resume} target="_blank" rel="noopener noreferrer">
						<Button
							endContent={<MdOutlineCloudDownload size={18} />}
							color="default"
							variant="shadow"
							radius="full"
						>
							Resume
						</Button>
					</a>
				</div>
			</div>
			<div className="h-[300px] w-[200px] xl:h-[350px] xl:w-[250px]">
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
