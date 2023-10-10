"use client";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
// import { useSpeechRecognition } from "react-speech-recognition";
// import "regenerator-runtime/runtime";

const ArmanBot = () => {
	const [query, setQuery] = useState("");
	const [chat, setChat] = useState([]);
	const [videoUrl, setVideoUrl] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	// const {
	// 	transcript,
	// 	listening,
	// 	resetTranscript,
	// 	browserSupportsSpeechRecognition,
	// } = useSpeechRecognition();

	// const handleVoiceCommand = () => {
	// 	if (listening) {
	// 		useSpeechRecognition.stopListening();
	// 		setQuery(transcript);
	// 		fetchResponse();
	// 		resetTranscript();
	// 	} else {
	// 		useSpeechRecognition.startListening();
	// 	}
	// };

	// if (!browserSupportsSpeechRecognition) {
	// 	return <p>Browser doesn't support speech recognition.</p>;
	// }

	const messageVariants = {
		hidden: { opacity: 0, y: 10 },
		visible: { opacity: 1, y: 0 },
	};

	const fetchResponse = async () => {
		try {
			setIsLoading(true);
			setChat([...chat, { type: "user", content: query }]);

			const result = await axios.post(
				`https://baiterek-backend.onrender.com/baiterek/getResponse?query=${query}&language=KK`,
				{},
				{
					headers: {
						accept: "application/json",
					},
				}
			);

			setChat([
				...chat,
				{ type: "user", content: query },
				{ type: "arman", content: result.data.text },
			]);
			setVideoUrl(result.data.video_url);
		} catch (error) {
			console.error("Error fetching response:", error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="flex items-center flex-col ">
			{videoUrl ? (
				<video autoplay className="w-96 max-h-1/3">
					<source src={videoUrl} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			) : (
				<img
					src="/images/armanchat.png"
					alt="Arman"
					className="w-96 max-h-1/3 object-cover drop-shadow-xl"
				/>
			)}

			<div className="min-w-[720px] absolute bottom-[240px] flex-1 overflow-y-auto p-4 space-y-4 max-h-[500px]">
				{chat.map((message, idx) => (
					<motion.div
						key={idx}
						initial="hidden"
						animate="visible"
						variants={messageVariants}
						className={`flex ${
							message.type === "user"
								? "justify-end"
								: "justify-start"
						}`}
					>
						<div
							className={`rounded-md drop-shadow-md max-w-[360px] p-2 ${
								message.type === "user"
									? "bg-gray-100"
									: "bg-[rgb(113,194,128)] text-white"
							}`}
						>
							{message.content}
						</div>
					</motion.div>
				))}
			</div>

			<div className="p-4 border-t border-gray-200 drop-shadow-md">
				<input
					type="text"
					placeholder="Ask Arman a question..."
					className="w-full p-2 border rounded-md min-w-[720px]"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					onKeyPress={(e) =>
						e.key === "Enter" &&
						!isLoading &&
						fetchResponse()
					}
					disabled={isLoading}
				/>
				{/* <button
					onClick={handleVoiceCommand}
					className="px-4 py-2 bg-blue-600 text-white rounded-md"
				>
					{listening ? "Stop" : "Speak"}
				</button> */}
			</div>
		</div>
	);
};

export default ArmanBot;
