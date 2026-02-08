"use client";

import { useState } from "react";
import CountdownTimer from "./CountdownTimer";
import MainTab from "./MainTab";
import TabButton from "./TabButton";
import ScheduleTab from "./ScheduleTab";
import OverviewTab from "./OverviewTab";
import IdeasTab from "./IdeasTab";

type Tab = "main" | "schedule" | "overview" | "ideas";

export default function Home() {
	const [activeTab, setActiveTab] = useState<Tab>("main");

	return (
		<div className="bg-blue-300 w-full h-screen fixed">
			{/* content */}
			<div className="w-full h-[85vh] bg-yellow-100 fixed bottom-0 left-0 border-t-blue-400 border-4 z-10 flex items-center justify-center">
				<div className="flex w-[90vw] h-full items-center justify-center">
					{activeTab === "main" && <MainTab />}
					{activeTab === "schedule" && <ScheduleTab />}
					{activeTab === "overview" && <OverviewTab />}
					{activeTab === "ideas" && <IdeasTab />}
				</div>
			</div>

			{/* tabs */}
			<div className="fixed bottom-[84.6vh] z-50 w-[50vw] h-[10vh] flex gap-[1vw] items-end justify-center ml-[16vw]">
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
			</div>
		</div>
	);
}
