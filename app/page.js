import Link from "next/link";
import "regenerator-runtime/runtime";
// hello world
const Bot = ({ bot }) => {
	return (
		<Link
			href={bot.href}
			className="group drop-shadow-xl hover:scale-110 mt-8 duration-200"
		>

			<img
			
				src={bot.src}
				className="w-96 h-auto group-hover:bg-[#417b4c] object-cover rounded-t-xl "
				
				alt={bot.name}
			/>
			<div className="text-[#417b4c] group-hover:bg-[#417b4c] relative bottom-16 group-hover:text-white text-xl py-4 rounded-b-xl px-4 bg-white">
				<div>Chat with </div>
				<div className="font-bold text-4xl">
					{bot.name} ➔
				</div>
			</div>
		</Link>
	);
};

function Home() {
	const bots = [
		{
			src: "/images/amalia.png",
			name: "Amalia",
			language: "Russian",
			href: "./pages/amalia",
		},
		{
			src: "/images/arman.png",
			name: "Arman",
			language: "Kazakh",
			href: "./arman",
		},
	];

	return (
		<div>
			<div className="flex justify-center gap-24 items-center pt-24">
				{bots.map((bot, index) => (
					<Bot key={index} bot={bot} />
				))}
			</div>
		</div>
	);
}

export default Home;
