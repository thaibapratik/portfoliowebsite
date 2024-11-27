import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";

const ProjectCard = ({ project }) => {
	return (
		<div>
			<Card className="py-4 ">
				<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
					<h4 className="font-bold text-large">{project.title}</h4>

					<div className="flex gap-2 w-[15rem] flex-wrap h-[4rem]">
						{project.languages.map((language) => (
							<div className="mt-1" key={language.name}>
								<Chip
									color="default"
									startContent={<language.icon />}
									size="sm"
								>
									{language.name}
								</Chip>
							</div>
						))}
					</div>
				</CardHeader>
				<CardBody className="overflow-visible py-2">
					<Image
						alt="Card background"
						className="object-cover rounded-xl"
						src="https://nextui.org/images/hero-card-complete.jpeg"
						width={270}
					/>
				</CardBody>
			</Card>
		</div>
	);
};
export default ProjectCard;
