import { FaHtml5 } from "react-icons/fa";
import Language from "./Language";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const LanguageSection = () => {
	const Icons = [
		{
			name: "html",
			url: FaHtml5,
		},
		{
			name: "css",
			url: FaCss3Alt,
		},
		{
			name: "javascript",
			url: FaJs,
		},
		{
			name: "react",
			url: FaReact,
		},
		{
			name: "git",
			url: FaGitAlt,
		},
		{
			name: "github",
			url: FaGithub,
		},
	];

	return (
		<div className="mt-10 grid lg:grid-cols-3 grid-cols-2 ">
			{Icons.map((icon) => (
				<Language Icon={icon.url} name={icon.name} key={icon.name} />
			))}
		</div>
	);
};

export default LanguageSection;
