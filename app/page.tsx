"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";
import MainTab from "./MainTab";
import TabButton from "./TabButton";
import ScheduleTab from "./ScheduleTab";
import OverviewTab from "./OverviewTab";
import IdeasTab from "./IdeasTab";

type Tab = "main" | "schedule" | "overview" | "ideas" | "star";

export default function Home() {
	const [activeTab, setActiveTab] = useState<Tab>("main");

	return (
		<div className="bg-blue-300 w-full h-screen fixed">
			{/* CONTENT */}
			<div className="w-full h-[85vh] bg-yellow-100 fixed bottom-0 left-0 border-t-blue-400 border-4 z-10 flex items-center justify-center">
				<div className="flex w-[90vw] h-full items-center justify-center">
					{activeTab === "main" && <MainTab />}
					{activeTab === "schedule" && <ScheduleTab />}
					{activeTab === "overview" && <OverviewTab />}
					{activeTab === "ideas" && <IdeasTab />}

					{activeTab === "star" && (
						<div className="w-full h-full flex flex-col items-center justify-center">
							<div className="w-[80%] h-[80%] border-4 border-blue-400 rounded-[2vh] overflow-hidden bg-black">
								<iframe
									className="w-full h-full"
									src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=1"
									title="Totally Serious Content"
									allow="autoplay; encrypted-media"
									allowFullScreen
								/>
							</div>
							<p className="jersey text-blue-600 text-[4vh] mt-[1vh]">
								If you are a reviewer, you just got Rickrolled!
							</p>
						</div>
					)}
				</div>
			</div>

			{/* TABS */}
			<div className="fixed bottom-[84.6vh] z-50 w-full h-[10vh] flex gap-[1vw] items-end justify-center px-[5vw]">
				<TabButton
					label="Main"
					active={activeTab === "main"}
					onClick={() => setActiveTab("main")}
				/>
				<TabButton
					label="Schedule"
					active={activeTab === "schedule"}
					onClick={() => setActiveTab("schedule")}
				/>
				<TabButton
					label="Overview"
					active={activeTab === "overview"}
					onClick={() => setActiveTab("overview")}
				/>
				<TabButton
					label="Ideas"
					active={activeTab === "ideas"}
					onClick={() => setActiveTab("ideas")}
				/>
				<TabButton
					label={<FaStar />}
					active={activeTab === "star"}
					onClick={() => setActiveTab("star")}
					compact
					right
				/>
			</div>
		</div>
	);
}
