import CountdownTimer from "./CountdownTimer";

function MainTab() {
	return (
		<div className="flex w-full">
			<div className="w-1/2 h-[75vh] flex flex-col gap-[3vh]">
				<div className="border-4 border-stone-400 bg-neutral-50 rounded-[2vh] w-full h-[35.5vh] flex flex-col items-center justify-between px-[1vw] py-[2vh]">
					{[
						"Presentation Guide",
						"Written Guide",
						"Asset Options",
						"Download Links",
					].map((text, i) => (
						<a
							key={text}
							href=""
							className={`
									jersey text-[3vh] text-center min-w-full
									px-[2vw] py-[0.75vh] border-4 border-stone-300/70
									bg-stone-300/55 hover:bg-stone-300/20 transition-all
									rounded-[1vh]
									${i === 0 && "rounded-t-[1.9vh]"}
									${i === 3 && "rounded-b-[1.9vh]"}
								`}
						>
							{text}
						</a>
					))}
				</div>

				<div className="border-4 border-stone-400 bg-neutral-50 rounded-[2vh] w-full h-[35.5vh] flex items-center justify-center">
					<h2 className="jersey text-[3vh] text-stone-600 px-[2vw]">
						If you are a beginner, I recommend use Godot to make your very first
						game! It's super easy to learn and has a great community. You can
						find tons of tutorials online for help, and there will be a
						workshop.
					</h2>
				</div>
			</div>

			<div className="flex flex-col w-1/2 border-4 border-stone-400 bg-neutral-50 rounded-[2vh] h-[74vh] ml-[2vw]">
				<CountdownTimer />
			</div>
		</div>
	);
}

export default MainTab;
