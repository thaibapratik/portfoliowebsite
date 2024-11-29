import { Button, link } from "@nextui-org/react";
import { IoIosMail } from "react-icons/io";
import { FaGithub as Github } from "react-icons/fa";
import { FaLinkedin as Linkedin } from "react-icons/fa";

const Contact = () => {
	const socials = [
		{
			name: "Github",
			icon: Github,
			link: "https://github.com/thaibapratik",
		},
		{
			name: "Linkedin",
			icon: Linkedin,
			link: "https://www.linkedin.com/in/pratik-thaiba-6a0a21309/",
		},
	];

	return (
		<section className="pb-32">
			<h2 className="heading">Contact</h2>
			<div className="flex justify-center gap-52 max-sm:flex-col max-sm:gap-0 max-sm:text-center">
				<h1 className="text-6xl max-sm:text-4xl text-white mt-32 ml-20 leading-[1.5] max-sm:ml-5">
					Let's start a <br />
					project together
				</h1>
				<div>
					<div>
						<h3 className="text-xl text-white tracking-wider pt-32 max-sm:pt-20">
							Email
						</h3>
						<ul className="text-md text-white">
							<li>thaibapratik890@gmail.com</li>
						</ul>
						<div className="mt-3">
							<a href="mailto:thaibapratik890@gmail.com">
								<Button size="lg">
									Send mail <IoIosMail size={20} />
								</Button>
							</a>
						</div>
					</div>
					<div>
						<h3 className="text-xl text-white tracking-wider mt-10">
							Socials
						</h3>
						<div className="flex flex-col gap-1 mt-1 max-sm:items-center">
							{socials.map((social) => (
								<a
									href={social.link}
									target="_blank"
									className="social-links"
								>
									<div className="flex flex-row flex-1 items-center gap-1">
										<div className="">
											<social.icon
												color="white"
												size={20}
											/>
										</div>
										{social.name}
									</div>
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Contact;
