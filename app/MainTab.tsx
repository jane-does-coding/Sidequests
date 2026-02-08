"use client";
import { useState } from "react";
import CountdownTimer from "./CountdownTimer";

function MainTab() {
	const [showDownloadPopup, setShowDownloadPopup] = useState(false);
	const [showAssetsPopup, setShowAssetsPopup] = useState(false);

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

	const assetLinks = [
		{
			name: "Character Sprites - Kenney",
			link: "https://kenney.itch.io/character-pack",
		},
		{
			name: "Tileset - Pixel Adventure",
			link: "https://pixeladventures.itch.io/pixel-tileset",
		},
		{
			name: "Fantasy RPG Tileset",
			link: "https://itch.io/game-assets/tag-tileset",
		},
	];

	return (
		<div className="flex w-full relative">
			<div className="w-1/2 h-[75vh] flex flex-col gap-[3vh]">
				<div className="border-4 border-blue-200 bg-yellow-50 rounded-[2vh] w-full h-[35.5vh] flex flex-col items-center justify-between px-[1vw] py-[2vh]">
					{[
						{
							text: "Presentation Guide",
							href: "https://docs.google.com/presentation/d/1P1PPWVV5pOnIgWPb1AHV3q0YJxWdyzBtPM-fqUDVUnQ/edit?usp=sharing",
						},
						{
							text: "Written Guide",
							href: "https://daydream.jumpstart.hackclub.com/attendee/guide.html",
						},
						{ text: "Asset Options", href: null },
						{ text: "Download Links", href: null },
					].map((item, i) => {
						if (item.text === "Asset Options") {
							return (
								<button
									key={item.text}
									onClick={() => setShowAssetsPopup(true)}
									className={`
										jersey text-[3vh] text-center min-w-full
										px-[2vw] py-[0.75vh] border-4 border-blue-300/70
										bg-blue-100 hover:bg-blue-200/30 transition-all
										rounded-[1vh] cursor-pointer
										${i === 0 && "rounded-t-[1.9vh]"}
									`}
								>
									{item.text}
								</button>
							);
						}

						if (item.text === "Download Links") {
							return (
								<button
									key={item.text}
									onClick={() => setShowDownloadPopup(true)}
									className={`
										jersey text-[3vh] text-center min-w-full
										px-[2vw] py-[0.75vh] border-4 border-blue-300/70
										bg-blue-100 hover:bg-blue-200/30 transition-all
										rounded-[1vh] cursor-pointer
										${i === 3 && "rounded-b-[1.9vh]"}
									`}
								>
									{item.text}
								</button>
							);
						}

						return (
							<a
								key={item.text}
								href={item.href ? item.href : "#"}
								target="_blank"
								rel="noopener noreferrer"
								className={`
									jersey text-[3vh] text-center min-w-full
									px-[2vw] py-[0.75vh] border-4 border-blue-300/70
									bg-blue-100 hover:bg-blue-200/30 transition-all
									rounded-[1vh]
									${i === 0 && "rounded-t-[1.9vh]"}
								`}
							>
								{item.text}
							</a>
						);
					})}
				</div>

				<div className="border-4 border-blue-200 bg-yellow-50 rounded-[2vh] w-full h-[35.5vh] flex items-center justify-center">
					<h2 className="jersey text-[3vh] text-blue-600  px-[2vw]">
						If you are a beginner, I recommend using Godot to make your very
						first game! It's super easy to learn and has a great community. You
						can find tons of tutorials online for help, and there will be a
						workshop.
					</h2>
				</div>
			</div>

			<div className="flex flex-col w-1/2 border-4 border-blue-200 bg-yellow-50 rounded-[2vh] h-[74vh] ml-[2vw]">
				<CountdownTimer />
			</div>

			{showDownloadPopup && (
				<div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] flex items-center justify-center z-50">
					<div className="bg-yellow-100 border-4 border-stone-400 rounded-[2vh] p-[3vh] w-[50%] flex flex-col gap-[2vh] items-center">
						<h2 className="jersey text-[3vh] text-stone-900">Download Links</h2>
						<div className="flex flex-col gap-[1vh] w-full">
							{downloadLinks.map((item) => (
								<a
									key={item.name}
									href={item.link}
									target="_blank"
									rel="noopener noreferrer"
									className="jersey text-[2.75vh] text-center border-4 border-stone-300 bg-blue-100 rounded-[blue]2py-[1vh] hover:bg-stone-300/20 transition-all"
								>
									{item.name}
								</a>
							))}
						</div>
						<button
							onClick={() => setShowDownloadPopup(false)}
							className="jersey text-[2.5vh] text-stone-900 mt-[1vh] px-[2vw] py-[0.5vh] border-4 border-stone-300 rounded-[1vh] bg-yellow-50 hover:bg-yellow-200 transition-all"
						>
							Close
						</button>
					</div>
				</div>
			)}

			{showAssetsPopup && (
				<div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] flex items-center justify-center z-50">
					<div className="bg-yellow-100 border-4 border-stone-400 rounded-[2vh] p-[3vh] w-[50%] flex flex-col gap-[2vh] items-center">
						<h2 className="jersey text-[3vh] text-stone-900">Asset Options</h2>
						<div className="flex flex-col gap-[1vh] w-full">
							{assetLinks.map((item) => (
								<a
									key={item.name}
									href={item.link}
									target="_blank"
									rel="noopener noreferrer"
									className="jersey text-[2.75vh] text-center border-4 border-stone-300 bg-blue-100 rounded-[blue]2py-[1vh] hover:bg-stone-300/20 transition-all"
								>
									{item.name}
								</a>
							))}
						</div>
						<button
							onClick={() => setShowAssetsPopup(false)}
							className="jersey text-[2.5vh] text-stone-900 mt-[1vh] px-[2vw] py-[0.5vh] border-4 border-stone-300 rounded-[1vh] bg-yellow-50 hover:bg-yellow-200 transition-all"
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
