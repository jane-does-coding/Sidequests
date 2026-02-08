"use client";

function OrgPage() {
	return (
		<div className="bg-blue-300 w-full h-screen fixed">
			{/* CONTENT */}
			<div className="w-full h-[85vh] bg-yellow-100 fixed bottom-0 left-0 border-t-blue-400 border-4 flex items-center justify-center">
				<div className="w-[85vw] h-[75vh] border-4 border-blue-200 bg-yellow-50 rounded-[5vh] p-[4vh] overflow-y-auto flex flex-col gap-[3vh]">
					{/* Header */}
					<h1 className="jersey text-[4vh] text-neutral-950 text-center">
						Campfire Utah - Organizer Info
					</h1>

					{/* Confirmed Info */}
					<section className="border-4 border-blue-200 bg-blue-50 rounded-[3vh] p-[3vh]">
						<h2 className="jersey text-[3.2vh] text-blue-600 mb-[1.5vh]">
							Confirmed Info
						</h2>

						<ul className="jersey text-[2.4vh] text-gray-700 flex flex-col gap-[1vh]">
							<li>
								<span className="text-gray-900">Website:</span>{" "}
								<a
									href="https://campfire.hackclub.com/utah"
									target="_blank"
									rel="noopener noreferrer"
									className="underline hover:text-gray-900"
								>
									campfire.hackclub.com/utah
								</a>
							</li>
							<li>
								<span className="text-gray-900">Date & Time:</span> Feb 28th,
								8:00 AM – 8:00 PM
							</li>
							<li>
								<span className="text-gray-900">Venue:</span> Redo Office, 14761
								Future Way Suite 400, Draper, UT 84020
							</li>
							<li>
								<span className="text-gray-900">Sponsors:</span>
								<ul className="ml-[3vh] list-disc mt-[0.5vh]">
									<li>JLCPCB</li>
									<li>Yubico</li>
									<li>Waystar (final confirmation Monday/Tuesday)</li>
								</ul>
							</li>
						</ul>
					</section>

					{/* Not Confirmed */}
					<section className="border-4 border-blue-200 bg-blue-50 rounded-[3vh] p-[3vh]">
						<h2 className="jersey text-[3.2vh] text-blue-600 mb-[1vh]">
							Not Confirmed
						</h2>
						<ul className="jersey text-[2.4vh] text-gray-700 list-disc ml-[3vh]">
							<li>Epomaker (sponsor)</li>
						</ul>
					</section>

					{/* Schedule */}
					<section className="border-4 border-blue-200 bg-blue-50 rounded-[3vh] p-[3vh]">
						<h2 className="jersey text-[3.2vh] text-blue-600 mb-[1.5vh]">
							Schedule — Feb 28th
						</h2>

						<div className="grid grid-cols-1 gap-[1vh] jersey text-[2.3vh] text-gray-700">
							{[
								["8:30 AM", "Doors open"],
								["8:30–9:00 AM", "Icebreakers & Breakfast"],
								["9:00–9:45 AM", "Opening Ceremony & Team Forming"],
								["9:45–11:00 AM", "Godot Workshop"],
								["11:00–1:45 PM", "Locking in"],
								["1:45–2:15 PM", "Lunch"],
								["2:15–5:30 PM", "Locking in"],
								["5:30–6:30 PM", "Presenting & Dinner"],
								["7:30 PM", "Doors close"],
							].map(([time, label]) => (
								<div key={time}>
									<span className="text-gray-900">{time}</span> — {label}
								</div>
							))}
						</div>
					</section>

					{/* Food */}
					<section className="border-4 border-blue-200 bg-blue-50 rounded-[3vh] p-[3vh]">
						<h2 className="jersey text-[3.2vh] text-blue-600 mb-[1vh]">Food</h2>

						<ul className="jersey text-[2.4vh] text-gray-700 flex flex-col gap-[1vh]">
							<li>
								<span className="text-gray-900">Breakfast:</span>{" "}
								<a
									href="https://ebcatering.com/index.cfm?fuseaction=order&action=menu-categories&channel-id=2&store_code=3910"
									target="_blank"
									rel="noopener noreferrer"
									className="underline hover:text-gray-900"
								>
									Einstein Bros. Bagels
								</a>
							</li>
							<li>
								<span className="text-gray-900">Lunch:</span>{" "}
								<a
									href="https://order.littlecaesars.com/en-us/order/pickup/stores/8375/menu/"
									target="_blank"
									rel="noopener noreferrer"
									className="underline hover:text-gray-900"
								>
									Little Caesars (tentative)
								</a>
							</li>
						</ul>
					</section>
				</div>
			</div>

			{/* SINGLE TAB */}
			<div className="bottom-[84.6vh] fixed w-full h-[10vh] flex justify-center items-end">
				<div className="h-[120%] bg-yellow-100 px-[6vw] rounded-t-[3vh] border-4 border-blue-400 border-b-yellow-100 border-b-0 flex items-center justify-center">
					<span className="jersey text-[5vh] text-blue-600 font-light">
						Organizer
					</span>
				</div>
			</div>
		</div>
	);
}

export default OrgPage;
