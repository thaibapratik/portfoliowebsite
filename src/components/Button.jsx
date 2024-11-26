const Button = ({ children }) => {
	return (
		<button className="bg-darkerGrey hover:bg-vividBlue px-10 py-5 rounded-lg text-white">
			{children}
		</button>
	);
};
export default Button;
