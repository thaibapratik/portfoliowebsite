import cct from "../assets/cct.jpg";
import ExperienceTable from "./ExperienceTable";

const Work = () => {
	const works = [];

	return (
		<div className="border border-white m-10 rounded-xl text-white h-[19rem] w-[39rem] flex justify-end">
			{works.length === 0 ? (
				<h2 className="text-2xl text-white text-center w-full p-10">
					No results found!
				</h2>
			) : (
				<div className="border-l border-white w-[35rem] pt-14">
					{works.map((work) => (
						<ExperienceTable key={work.title} experience={work} />
					))}
				</div>
			)}
		</div>
	);
};
export default Work;
