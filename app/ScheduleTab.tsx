function ScheduleTab() {
	const items = [
		{ time: "9:00 AM", title: "Check-in & Breakfast" },
		{ time: "9:30 AM", title: "Opening Ceremony" },
		{ time: "10:00 AM", title: "Hacking Begins 🔥" },
		{ time: "1:00 PM", title: "Lunch" },
		{ time: "5:30 PM", title: "Submissions Close" },
		{ time: "6:00 PM", title: "Demos & Judging" },
		{ time: "7:00 PM", title: "Awards + Closing" },
	];

	return (
		<div className="w-[60vw] h-[70vh] border-4 border-stone-400 bg-neutral-50 rounded-[2vh] p-[3vh] flex flex-col gap-[2vh]">
			<h1 className="jersey text-[4vh] text-stone-400 text-center">
				Event Schedule
			</h1>

			<div className="flex flex-col gap-[1.5vh] overflow-y-auto pr-[1vw]">
				{items.map((item) => (
					<div
						key={item.time}
						className="flex justify-between items-center border-4 border-stone-300 rounded-[1.5vh] px-[2vw] py-[1vh] bg-stone-200/40"
					>
						<span className="jersey text-[2.75vh] text-stone-500">
							{item.time}
						</span>
						<span className="jersey text-[2.75vh] text-stone-400">
							{item.title}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}

export default ScheduleTab;
