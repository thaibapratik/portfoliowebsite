import everest from "../assets/everest.jpg";
import cct from "../assets/cct.jpg";
import ExperienceTable from "./ExperienceTable";

const Education = () => {
	const educations = [
		{
			title: "High School",
			institution: "Everest English Boarding Seconday School",
			icon: everest,
			date: "2019-2021",
			major: "Management in Computer Science",
		},

		{
			title: "Bachelor",
			institution: "Crimson College of Technology",
			icon: cct,
			date: "2022-present",
			major: "Bachelor in Computer Application",
		},
	];
	return (
		<div className="border-1 border-white m-10 rounded-xl text-white h-[19rem] w-[39rem] flex justify-end">
			<div className="border-l-1 w-[35rem] pt-14">
				{educations.map((education) => (
					<ExperienceTable
						key={education.title}
						experience={education}
					/>
				))}
			</div>
		</div>
	);
};
export default Education;
