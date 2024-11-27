const ExperienceTable = ({ experience }) => {
	return (
		<div className="flex gap-8 pb-14 items-center pl-5 relative">
			<div className="">
				{experience.icon && (
					<img
						src={experience.icon}
						alt={`${experience.institution} logo`}
						className="rounded-full object-cover h-10 w-10 absolute top-2 -left-5 border-white border-3"
					/>
				)}
			</div>
			<div>
				<p className="text-sm font-light text-white/60">
					{experience.date}
				</p>
				<h3>{experience.institution}</h3>
				<p className="text-sm font-light text-white/60">
					{experience.major ? experience.major : experience.position}
				</p>
			</div>
		</div>
	);
};
export default ExperienceTable;
