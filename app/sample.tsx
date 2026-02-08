export default function Home() {
	return (
		<div className="">
			<div className="bg-yellow-100 w-full h-screen fixed">
				{/* content */}
				<div className="w-full h-[85vh] bg-yellow-100 fixed bottom-0 left-0 border-t-yellow-200 border-4 z-1 flex items-center justify-center">
					<div className="flex w-[90vw]">
						<div className="w-1/2 h-[75vh] flex flex-col gap-[3vh]">
							<div className="border-4 border-yellow-100 bg-yellow-50 rounded-[5vh] w-full h-[35.5vh] flex flex-col items-center justify-between px-[1vw] py-[2vh]">
								<a
									href=""
									className="rounded-[1vh] rounded-t-[4vh] px-[2vw] py-[1.25vh] jersey text-[3vh] bg-gray-200 min-w-full"
								>
									Presentation Guide
								</a>
								<a
									href=""
									className="rounded-[1vh] px-[2vw] py-[1.25vh] jersey text-[3vh] bg-gray-200 min-w-full"
								>
									Written Guide
								</a>
								<a
									href=""
									className="rounded-[1vh] px-[2vw] py-[1.25vh] jersey text-[3vh] bg-gray-200 min-w-full"
								>
									Asset Options
								</a>
								<a
									href=""
									className="rounded-[1vh] rounded-b-[4vh] px-[2vw] py-[1.25vh] jersey text-[3vh] bg-gray-200 min-w-full"
								>
									Download Links
								</a>
							</div>
							<div className="border-4 border-yellow-100 bg-yellow-50 rounded-[5vh] w-full h-[35.5vh] flex flex-col items-center justify-between px-[1vw] py-[2vh]">
								<h2 className="jersey text-[3vh] text-yellow-400">
									More text here?!
								</h2>
							</div>
						</div>
						<div className="flex flex-col w-1/2"></div>
					</div>
				</div>
				{/* tabs */}
				<div className="bg-red-300/0 bottom-[84.6vh] z-99 fixed w-[50vw] h-[10vh] flex gap-[1vw] items-end justify-center mx-[5vw]">
					<div className="h-[120%] bg-yellow-100 min-w-fit px-[5vw] rounded-t-[3vh] border-4 border-yellow-200 border-b-yellow-100 border-b-0 flex items-center justify-center">
						<a
							href="/"
							className="text-yellow-300 text-[5vh] jersey font-light"
						>
							Main
						</a>
					</div>
					<div className="h-[90%] bg-yellow-100 min-w-fit px-[5vw] rounded-t-[3vh] border-4 border-yellow-200 opacity-70 hover:opacity-100 hover:h-[100%] transition-all ease-in-out cursor-pointer flex items-center justify-center">
						<a
							href="/"
							className="text-yellow-300 text-[5vh] jersey font-light"
						>
							Explore
						</a>
					</div>
					<div className="h-[90%] bg-yellow-100 min-w-fit px-[5vw] rounded-t-[3vh] border-4 border-yellow-200 opacity-70 hover:opacity-100 hover:h-[100%] transition-all ease-in-out cursor-pointer flex items-center justify-center">
						<a
							href="/"
							className="text-yellow-300 text-[5vh] jersey font-light"
						>
							Profile
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
