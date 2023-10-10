const Header = () => {
	const logoSrc = "/images/logo.png";
	return (
		<div className="bg-[#417b4c] text-white p-4 shadow-xl">
			<div className="container mx-auto">
				<div className="flex justify-around items-center font-bold">
					<div className="bg-white p-2 rounded-xl">
						<img
							src={logoSrc}
							alt="logo"
							className="w-8"
						/>
					</div>
					<div className="space-x-8">
						<a
							href="#"
							className="hover:underline"
						>
							Home
						</a>
						<a
							href="#"
							className="hover:underline"
						>
							Chat
						</a>
						<a
							href="#"
							className="hover:underline"
						>
							About Baiterek
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
