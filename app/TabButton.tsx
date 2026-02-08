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
				rounded-t-[2vh] border-4 border-stone-400
				jersey text-[5vh] font-light text-stone-400
				transition-all ease-in-out
				${
					active
						? "h-[120%] bg-neutral-100 border-b-neutral-100 border-b-0"
						: "h-[90%] bg-neutral-100/80 opacity-70 hover:opacity-100 hover:h-[100%]"
				}
			`}
		>
			{label}
		</button>
	);
}

export default TabButton;
