import { motion, AnimatePresence } from "framer-motion";

const TypingIndicator = () => {
	const dotVariants = {
		hidden: { y: 0 },
		visible: {
			y: [-2, 2, -2],
			transition: { duration: 0.5, repeat: Infinity },
		},
	};
	return (
		<div className="flex space-x-2 rounded-md drop-shadow-md max-w-[360px] p-2 bg-[#71c280]">
			<motion.div
				className="bg-white rounded-full h-2 w-2 animate-dotPulse animation-delay-100"
				variants={dotVariants}
				initial="hidden"
				animate="visible"
				transition={{ delay: 0.1 }}
			></motion.div>
			<motion.div
				className="bg-white rounded-full h-2 w-2 animate-dotPulse animation-delay-200"
				variants={dotVariants}
				initial="hidden"
				animate="visible"
				transition={{ delay: 0.4 }}
			></motion.div>
			<motion.div
				className="bg-white rounded-full h-2 w-2 animate-dotPulse animation-delay-300"
				variants={dotVariants}
				initial="hidden"
				animate="visible"
				transition={{ delay: 0.7 }}
			></motion.div>
		</div>
	);
};

export default TypingIndicator;
