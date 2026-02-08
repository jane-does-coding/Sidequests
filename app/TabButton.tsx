function TabButton({
	label,
	active,
	onClick,
}: {
	label: string;
	active: boolean;
	onClick: () => void;
}) {
	return (
		<button
			onClick={onClick}
			className={`
				min-w-fit px-[5vw] flex items-center justify-center
				rounded-t-[2vh] border-4 border-blue-400
				jersey text-[5vh] font-light text-blue-600
				transition-all ease-in-out
				${
					active
						? "h-[120%] bg-yellow-100 border-b-yellow-100 border-b-0"
						: "h-[90%] bg-yellow-100/80 opacity-70 hover:opacity-100 hover:h-[100%]"
				}
			`}
		>
			{label}
		</button>
	);
}

export default TabButton;
