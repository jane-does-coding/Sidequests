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
		return <div className="jersey text-[5vh] text-yellow-500">It’s time!</div>;
	}

	const total = (hours * 60 * 60 + minutes * 60) * 1000;
	const progress = Math.max(0, Math.min(1, timeLeft / total));

	const totalHours = Math.floor(timeLeft / 1000 / 60 / 60);
	const mins = Math.floor((timeLeft / 1000 / 60) % 60);

	const radius = 180;
	const center = 200;
	const circumference = 2 * Math.PI * radius;
	const svgSize = 400;

	return (
		<div className="relative flex flex-col items-center justify-center h-full gap-[2vh]">
			{/* Settings */}
			<button
				onClick={() => setShowSettings(true)}
				className="absolute top-[2vh] right-[2vh] text-yellow-500 text-[4vh] hover:rotate-90 transition-transform"
			>
				<IoSettingsOutline />
			</button>

			<p className="jersey text-[4.5vh] text-blue-600">Until {label}</p>

			{/* Circular Timer */}
			<svg width={svgSize} height={svgSize}>
				{/* Track */}
				<circle
					cx={center}
					cy={center}
					r={radius}
					stroke="#fde68a" /* yellow-200 */
					strokeWidth="14"
					fill="none"
				/>

				{/* Progress */}
				<circle
					cx={center}
					cy={center}
					r={radius}
					stroke="#facc15" /* yellow-400 */
					strokeWidth="14"
					fill="none"
					strokeDasharray={circumference}
					strokeDashoffset={circumference * (1 - progress)}
					strokeLinecap="round"
					transform={`rotate(-90 ${center} ${center})`}
				/>

				{/* Time */}
				<text
					x="50%"
					y="50%"
					textAnchor="middle"
					dominantBaseline="middle"
					className="jersey fill-blue-600"
					fontSize="52"
				>
					{totalHours}h {mins}m
				</text>
			</svg>

			{/* Settings Modal */}
			{showSettings && (
				<div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-[2vh]">
					<div className="bg-yellow-100 border-4 border-yellow-300 rounded-[2vh] p-[2vh] w-[80%] flex flex-col gap-[1.5vh]">
						<h2 className="jersey text-[3vh] text-yellow-500 text-center">
							Timer Settings
						</h2>

						<input
							value={label}
							onChange={(e) => setLabel(e.target.value)}
							className="jersey border-4 border-yellow-300 rounded-[1vh] px-[1vw] py-[0.5vh]"
							placeholder="Label"
						/>

						<div className="flex gap-[1vw]">
							<input
								type="number"
								min="0"
								value={hours}
								onChange={(e) => setHours(Number(e.target.value))}
								className="jersey border-4 border-yellow-300 rounded-[1vh] px-[1vw] py-[0.5vh] w-1/2"
								placeholder="Hours"
							/>
							<input
								type="number"
								min="0"
								value={minutes}
								onChange={(e) => setMinutes(Number(e.target.value))}
								className="jersey border-4 border-yellow-300 rounded-[1vh] px-[1vw] py-[0.5vh] w-1/2"
								placeholder="Minutes"
							/>
						</div>

						<div className="flex gap-[1vw] justify-end">
							<button
								onClick={() => setShowSettings(false)}
								className="jersey text-yellow-500"
							>
								Cancel
							</button>
							<button
								onClick={applySettings}
								className="jersey px-[2vw] py-[0.5vh] bg-yellow-200 border-4 border-yellow-300 rounded-[1vh]"
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
