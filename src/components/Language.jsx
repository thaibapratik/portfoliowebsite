const Language = ({ Icon, name }) => {
	return (
		<div className="flex flex-col gap-2 items-center h-[80px] w-[50px]">
			<Icon size={40} />
			<p>{name}</p>
		</div>
	);
};
export default Language;
