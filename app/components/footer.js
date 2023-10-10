const Footer = () => {
	return (
		<div className="h-full">
			<div className="absolute inset-x-0 bottom-0 bg-[#417b4c] text-white p-4">
				<div className="container mx-auto text-center">
					<div className="text-sm">
						&copy; {new Date().getFullYear()}{" "}
						National Management Holding
						"Baiterek". All rights reserved.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
