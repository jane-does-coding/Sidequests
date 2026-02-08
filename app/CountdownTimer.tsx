"use client";
import { useEffect, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";

function CountdownTimer() {
	const [label, setLabel] = useState("Campfire Starts");
	const [hours, setHours] = useState(1);
	const [minutes, setMinutes] = useState(30);

	const [endTime, setEndTime] = useState(
		Date.now() + (1 * 60 * 60 + 30 * 60) * 1000
	);
	const [timeLeft, setTimeLeft] = useState(endTime - Date.now());

	const [showSettings, setShowSettings] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeLeft(endTime - Date.now());
		}, 1000);
		return () => clearInterval(interval);
	}, [endTime]);

	function applySettings() {
		const durationMs = (hours * 60 * 60 + minutes * 60) * 1000;
		setEndTime(Date.now() + durationMs);
		setTimeLeft(durationMs);
		setShowSettings(false);
	}

	if (timeLeft <= 0) {
		return <div className="jersey text-[4vh] text-stone-400">It’s time!</div>;
	}

	const total = (hours * 60 * 60 + minutes * 60) * 1000;
	const progress = Math.max(0, Math.min(1, timeLeft / total));

	const totalHours = Math.floor(timeLeft / 1000 / 60 / 60);
	const mins = Math.floor((timeLeft / 1000 / 60) % 60);

	const radius = 120;
	const center = 150;
	const circumference = 2 * Math.PI * radius;

	return (
		<div className="relative flex flex-col items-center justify-center h-full gap-[2vh]">
			{/* ⚙️ Settings Button */}
			<button
				onClick={() => setShowSettings(true)}
				className="absolute top-[1.5vh] right-[1.5vh] text-stone-400 text-[3vh] hover:rotate-90 transition-transform"
			>
				<IoSettingsOutline />
			</button>

			<p className="jersey text-[3.75vh] text-stone-400">Until {label}</p>

			<svg width="300" height="300">
				<circle
					cx={center}
					cy={center}
					r={radius}
					stroke="#d6d3d1"
					strokeWidth="10"
					fill="none"
				/>
				<circle
					cx={center}
					cy={center}
					r={radius}
					stroke="#78716c"
					strokeWidth="10"
					fill="none"
					strokeDasharray={circumference}
					strokeDashoffset={circumference * (1 - progress)}
					strokeLinecap="round"
					transform={`rotate(-90 ${center} ${center})`}
				/>
				<text
					x="50%"
					y="50%"
					textAnchor="middle"
					dominantBaseline="middle"
					className="jersey fill-stone-400"
					fontSize="36"
				>
					{totalHours}h {mins}m
				</text>
			</svg>

			{showSettings && (
				<div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-[2vh]">
					<div className="bg-neutral-100 border-4 border-stone-400 rounded-[2vh] p-[2vh] w-[80%] flex flex-col gap-[1.5vh]">
						<h2 className="jersey text-[3vh] text-stone-400 text-center">
							Timer Settings
						</h2>

						<input
							value={label}
							onChange={(e) => setLabel(e.target.value)}
							className="jersey border-4 border-stone-300 rounded-[1vh] px-[1vw] py-[0.5vh]"
							placeholder="Label"
						/>

						<div className="flex gap-[1vw]">
							<input
								type="number"
								min="0"
								value={hours}
								onChange={(e) => setHours(Number(e.target.value))}
								className="jersey border-4 border-stone-300 rounded-[1vh] px-[1vw] py-[0.5vh] w-1/2"
								placeholder="Hours"
							/>
							<input
								type="number"
								min="0"
								value={minutes}
								onChange={(e) => setMinutes(Number(e.target.value))}
								className="jersey border-4 border-stone-300 rounded-[1vh] px-[1vw] py-[0.5vh] w-1/2"
								placeholder="Minutes"
							/>
						</div>

						<div className="flex gap-[1vw] justify-end">
							<button
								onClick={() => setShowSettings(false)}
								className="jersey text-stone-400"
							>
								Cancel
							</button>
							<button
								onClick={applySettings}
								className="jersey px-[2vw] py-[0.5vh] bg-stone-300/60 border-4 border-stone-300 rounded-[1vh]"
							>
								Apply
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default CountdownTimer;
