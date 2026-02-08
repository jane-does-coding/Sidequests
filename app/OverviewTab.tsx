"use client";

const sponsors = [
	{
		sponsor: "Hack Club",
		logo: "https://assets.hackclub.com/flag-standalone-wtransparent.svg",
		link: "https://hackclub.com",
	},
	{
		sponsor: "JLCPCB",
		logo: "https://avatars.githubusercontent.com/u/73433441",
		link: "https://jlcpcb.com/",
	},
	{
		sponsor: "EasyEDA",
		logo: "https://easyeda.com/images/easyeda-thumbnail.png?id=d5ed1fe5930602975df1",
		link: "https://easyeda.com/",
	},
	{
		sponsor: "OSHWLab",
		logo: "https://image.easyeda.com/avatars/2021/5/6EAsNJObiifSxgljeBxOOBQdfviaMB9Yt4KWoUnD.png",
		link: "https://oshwlab.com/",
	},
	{
		sponsor: "Yubico",
		logo: "https://www.yubico.com/wp-content/uploads/2023/10/icon-yubico-verified@2x.png",
		link: "https://www.yubico.com/",
	},
	{
		sponsor: "Epomaker",
		logo: "https://i0.wp.com/companyglance.com/wp-content/uploads/2024/09/Epomaker-logo.webp",
		link: "https://epomaker.com/",
	},
	{
		sponsor: "Waystar",
		logo: "https://cdn.theorg.com/402d8bc4-f236-4426-9c69-d02529e58f79_medium.jpg",
		link: "https://www.waystar.com/",
	},
];

function OverviewTab() {
	return (
		<div className="flex flex-col items-center gap-[4vh] w-full h-full py-[4vh]">
			{/* Description */}
			<div className="w-[70vw] bg-neutral-50 border-4 border-stone-400 rounded-[2vh] p-[4vh] text-center flex flex-col gap-[2vh]">
				<h1 className="jersey text-[4vh] text-stone-400">Campfire Hackathon</h1>
				<p className="jersey text-[2.75vh] text-stone-500 leading-relaxed">
					Campfire is a beginner-friendly, high-energy hackathon where students
					explore technology, build fun projects, and learn new skills in a
					supportive environment. Over the course of a single day, participants
					will collaborate, experiment, and create projects ranging from games
					and apps to hardware experiments. No prior experience is required—just
					bring curiosity, ideas, and a spirit of experimentation!
				</p>
				<p className="jersey text-[2.5vh] text-stone-500">
					All projects are welcome, and our mentors are here to help you bring
					your vision to life.
				</p>
			</div>

			{/* Sponsors Section */}
			<div className="w-[70vw] flex flex-col gap-[2vh]">
				<h2 className="jersey text-[3.25vh] text-stone-400 text-center">
					Sponsored By
				</h2>
				<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-[2vw] items-center justify-center">
					{sponsors.map((sponsor) => (
						<a
							key={sponsor.sponsor}
							href={sponsor.link}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center p-[2vh] border-4 border-stone-300 bg-neutral-900 rounded-[1vh] hover:scale-105 transition-transform"
						>
							<img
								src={sponsor.logo}
								alt={sponsor.sponsor}
								className="max-h-[6vh] object-contain"
							/>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}

export default OverviewTab;
