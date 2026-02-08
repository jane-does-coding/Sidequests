"use client";
import { useState } from "react";
import CountdownTimer from "./CountdownTimer";

function MainTab() {
	const [showDownloadPopup, setShowDownloadPopup] = useState(false);

	const downloadLinks = [
		{
			name: "Godot",
			link: "https://godotengine.org/download",
		},
		{
			name: "GitHub Desktop",
			link: "https://desktop.github.com/",
		},
	];

	return (
		<div className="flex w-full relative">
			{/* Left Column */}
			<div className="w-1/2 h-[75vh] flex flex-col gap-[3vh]">
				<div className="border-4 border-stone-400 bg-neutral-50 rounded-[2vh] w-full h-[35.5vh] flex flex-col items-center justify-between px-[1vw] py-[2vh]">
					{[
						"Presentation Guide",
						"Written Guide",
						"Asset Options",
						"Download Links",
					].map((text, i) => {
						// For Download Links, we want to open popup
						if (text === "Download Links") {
							return (
								<button
									key={text}
									onClick={() => setShowDownloadPopup(true)}
									className={`
											jersey text-[3vh] text-center min-w-full
											px-[2vw] py-[0.75vh] border-4 border-stone-300/70
											bg-stone-300/55 hover:bg-stone-300/20 transition-all
											rounded-[1vh] cursor-pointer
											${i === 0 && "rounded-t-[1.9vh]"}
											${i === 3 && "rounded-b-[1.9vh]"}
										`}
								>
									{text}
								</button>
							);
						}

						return (
							<a
								key={text}
								href=""
								className={`
										jersey text-[3vh] text-center min-w-full
										px-[2vw] py-[0.75vh] border-4 border-stone-300/70
										bg-stone-300/55 hover:bg-stone-300/20 transition-all
										rounded-[1vh]
										${i === 0 && "rounded-t-[1.9vh]"}
									`}
							>
								{text}
							</a>
						);
					})}
				</div>

				{/* Info Box */}
				<div className="border-4 border-stone-400 bg-neutral-50 rounded-[2vh] w-full h-[35.5vh] flex items-center justify-center">
					<h2 className="jersey text-[3vh] text-stone-600 px-[2vw]">
						If you are a beginner, I recommend using Godot to make your very
						first game! It's super easy to learn and has a great community. You
						can find tons of tutorials online for help, and there will be a
						workshop.
					</h2>
				</div>
			</div>

			{/* Right Column */}
			<div className="flex flex-col w-1/2 border-4 border-stone-400 bg-neutral-50 rounded-[2vh] h-[74vh] ml-[2vw]">
				<CountdownTimer />
			</div>

			{/* Download Links Popup */}
			{showDownloadPopup && (
				<div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] overflow-hidden rounded-[2vh] flex items-center justify-center z-50">
					<div className="bg-neutral-100 border-4 border-stone-400 rounded-[2vh] p-[3vh] w-[50%] flex flex-col gap-[2vh] items-center">
						<h2 className="jersey text-[3vh] text-stone-400">Download Links</h2>
						<div className="flex flex-col gap-[1vh] w-full">
							{downloadLinks.map((item) => (
								<a
									key={item.name}
									href={item.link}
									target="_blank"
									rel="noopener noreferrer"
									className="jersey text-[2.75vh] text-center border-4 border-stone-300 bg-stone-300/55 rounded-[1vh] py-[1vh] hover:bg-stone-300/20 transition-all"
								>
									{item.name}
								</a>
							))}
						</div>
						<button
							onClick={() => setShowDownloadPopup(false)}
							className="jersey text-[2.5vh] text-stone-400 mt-[1vh] px-[2vw] py-[0.5vh] border-4 border-stone-300 rounded-[1vh] bg-neutral-50 hover:bg-neutral-200 transition-all"
						>
							Close
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default MainTab;
