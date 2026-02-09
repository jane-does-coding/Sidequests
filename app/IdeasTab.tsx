"use client";

function IdeasTab() {
	return (
		<div className="flex w-full h-[75vh] justify-center">
			<div className="w-[80%] border-4 border-blue-300 bg-yellow-50 rounded-[2vh] p-[3vh] flex flex-col gap-[3vh] overflow-y-auto">
				<h1 className="jersey text-[4vh] text-blue-600 text-center">
					Project Ideas
				</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-[2vh]">
					{[
						{
							title: "Cozy Platformer",
							desc: "A small platformer with one level and a simple story.",
						},
						{
							title: "Top-Down Adventure",
							desc: "Explore a map, start from the top, get to the bottom, through platforms and enemies.",
						},
						{
							title: "Puzzle Game",
							desc: "Push boxes, flip switches, or rotate tiles to solve puzzles.",
						},
						{
							title: "Clicker / Idle Game",
							desc: "Earn points, upgrade stuff, watch numbers go up.",
						},
						{
							title: "Rhythm Game",
							desc: "Press keys in time with music or sound effects.",
						},
						{
							title: "Weird Experimental Game",
							desc: "Something funny, cursed, or totally unexpected.",
						},
					].map((idea) => (
						<div
							key={idea.title}
							className="border-4 border-blue-300 bg-blue-50 rounded-[1.5vh] p-[2vh]"
						>
							<h2 className="jersey text-[2.8vh] text-blue-700">
								{idea.title}
							</h2>
							<p className="jersey text-[2.2vh] text-stone-700 mt-[0.5vh]">
								{idea.desc}
							</p>
						</div>
					))}
				</div>

				<p className="jersey text-[2.2vh] text-black text-center">
					Keep it small. Finish something. Ship it. Add onto it.
				</p>
			</div>
		</div>
	);
}

export default IdeasTab;
