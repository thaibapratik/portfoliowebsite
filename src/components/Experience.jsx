import { useState } from "react";
import Work from "./Work";
import Education from "./Education";

const Experience = () => {
	const [selectedTab, setSelectedTab] = useState("Education");
	return (
		<div>
			<div className="text-white mt-16 text-center">
				<Tabs
					title="Education"
					selectedTab={selectedTab}
					setSelectedTab={setSelectedTab}
				></Tabs>
				<Tabs
					title="Work"
					selectedTab={selectedTab}
					setSelectedTab={setSelectedTab}
				></Tabs>
			</div>
			{selectedTab === "Education" ? <Education /> : <Work />}
		</div>
	);
};
export default Experience;

const Tabs = ({ title, selectedTab, setSelectedTab }) => {
	return (
		<div
			className={`cursor-pointer inline text-center border-2 border-white py-5 px-3
				${
					title === "Education"
						? "rounded-l-full border-r-0"
						: "rounded-r-full border-l-0"
				}
				`}
			onClick={() => setSelectedTab(title)}
		>
			<div
				className={`inline px-16 py-3 ${
					selectedTab === title && "bg-darkerGrey rounded-full "
				}`}
			>
				{title}
			</div>
		</div>
	);
};
