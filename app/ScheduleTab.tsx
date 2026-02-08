function ScheduleTab() {
	const items = [
		{ time: "8:30 AM", title: "Doors open" },
		{ time: "8:30-9:00 AM", title: "Icebreakers & Brekfast" },
		{
			time: "9:00-9:45 AM",
			title: "Opening Ceremony & Team Forming",
		},
		{ time: "9:45-11:00 PM", title: "Godot Workshop" },
		{ time: "11:00-1:45 PM", title: "Locking in" },
		{ time: "1:45-2:15 PM", title: "Lunch" },
		{ time: "2:15-5:30 PM", title: "Locking in" },
		{ time: "5:30-6:30 PM", title: "Presending & Dinner" },
		{ time: "7:30 PM", title: "Doors close" },
	];

	return (
		<div className="w-[60vw] h-[70vh] border-4 border-blue-400 bg-yellow-50 rounded-[2vh] p-[3vh] flex flex-col gap-[2vh]">
			<h1 className="jersey text-[4vh] text-blue-600 text-center">
				Event Schedule
			</h1>

			<div className="flex flex-col gap-[1.5vh] overflow-y-auto pr-[1vw]">
				{items.map((item) => (
					<div
						key={item.time}
						className="flex justify-between items-center border-4 border-blue-300 rounded-[1.5vh] px-[2vw] py-[1vh] bg-blue-200/40"
					>
						<span className="jersey text-[2.75vh] text-blue-800">
							{item.time}
						</span>
						<span className="jersey text-[2.75vh] text-blue-600">
							{item.title}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}

export default ScheduleTab;
