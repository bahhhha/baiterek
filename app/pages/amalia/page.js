"use client";
import "regenerator-runtime/runtime";

import SpeechRecognition, {
	useSpeechRecognition,
} from "react-speech-recognition";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import TypingIndicator from "@/app/components/TypingIndicator";
import { motion, AnimatePresence } from "framer-motion";

const AmaliaBot = () => {
	const [audioUrl, setAudioUrl] = useState(null);
	const [query, setQuery] = useState("");
	const [chat, setChat] = useState([]);
	const [videoUrl, setVideoUrl] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const scrollToBottom = () => {
		chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};
	const chatEndRef = useRef(null);
	const { transcript, listening, resetTranscript } =
		useSpeechRecognition();

	const submitTimeoutRef = useRef(null); // Reference to manage the timeout

	useEffect(() => {
		const handleKeyDown = (e) => {
			// Check if the pressed key is the Space bar
			if (e.target.tagName === "INPUT") {
				return;
			}

			// Check if the pressed key is the Space bar
			if (e.code === "Space") {
				e.preventDefault(); // Prevent the default behavior (e.g., page scroll)
				handleListenClick();
			}
		};

		// Add the event listener
		window.addEventListener("keydown", handleKeyDown);

		// Cleanup: Remove the event listener when the component unmounts
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);
	useEffect(() => {
		// Update the query state with the transcript whenever it changes
		setQuery(transcript);
	}, [transcript]);

	useEffect(() => {
		// Check if the listening state has changed from true to false (i.e., user stopped speaking)
		if (!listening && transcript !== "") {
			fetchResponse();
		} else {
			// If the user starts speaking again, clear any existing timeout to prevent submission
			if (submitTimeoutRef.current) {
				clearTimeout(submitTimeoutRef.current);
			}
		}

		// Cleanup: Clear any existing timeout when the component unmounts
		return () => {
			if (submitTimeoutRef.current) {
				clearTimeout(submitTimeoutRef.current);
			}
		};
	}, [listening]);

	const handleListenClick = () => {
		if (listening) {
			SpeechRecognition.stopListening();
		} else {
			resetTranscript(); // reset the transcript before starting to listen again
			SpeechRecognition.startListening({
				language: "ru-RU", // set the language to Russian
			});
		}
	};
	const messageVariants = {
		hidden: { opacity: 0, y: 10 },
		visible: { opacity: 1, y: 0 },
	};

	const fetchResponse = async () => {
		try {
			setIsLoading(true);

			// Immediately display the user's message
			setChat((prevChat) => [
				...prevChat,
				{ type: "user", content: query },
			]);

			// Fetch the text response
			const textResult = await axios.post(
				`https://baiterek-backend.onrender.com/baiterek/getResponse?query=${query}&language=RU`,
				{},
				{
					headers: {
						accept: "application/json",
					},
				}
			);

			// Fetch the audio response
			const audioResult = await axios.post(
				`https://baiterek-backend.onrender.com/baiterek/getAudio?query=${encodeURIComponent(
					textResult.data.text
				)}&language=RU`,
				{},
				{
					headers: {
						accept: "application/json",
					},
				}
			);

			setAudioUrl(audioResult.data.audio_url); // Set the received audio URL to the state

			// After both the text and audio responses are fetched, display the bot's response
			setChat((prevChat) => [
				...prevChat,
				{ type: "amalia", content: textResult.data.text },
			]);
		} catch (error) {
			console.error("Error fetching response:", error);
		} finally {
			setIsLoading(false);
			scrollToBottom();
		}
	};
	const audioRef = useRef(null);
	const videoRef = useRef(null);
	const [isVideoPlaying, setIsVideoPlaying] = useState(false);

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.onplay = () => {
				setIsVideoPlaying(true);
				if (videoRef.current) {
					videoRef.current.play();
					videoRef.current.currentTime = 0;
				}
			};

			audioRef.current.onended = () => {
				setIsVideoPlaying(false);
			};
		}
	}, [audioUrl]);

	return (
		<div className="flex items-center relative lg:top-0 top-48 rounded-lg py-2 h-full flex-col max-w-[720px] m-auto">
			{isVideoPlaying ? (
				<video
					ref={videoRef}
					autoPlay
					muted
					className="w-80 scale-[120%] ml-12 mt-24 absolute max-h-1/3"
				>
					<source
						src="/AmaliaSpeaking.mp4"
						type="video/mp4"
					/>
				</video>
			) : (
				<img
					src="/images/amaliachat.png"
					alt="Amalia"
					className="w-96 max-h-1/3 mt-4 object-cover drop-shadow-xl"
				/>
			)}
			<div className="min-w-[720px] absolute lg:bottom-[240px] flex-1 overflow-y-auto p-4 space-y-4 max-h-[400px]">
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
									: "bg-[#71c280] text-white"
							}`}
						>
							{message.content}
						</div>
					</motion.div>
				))}

				{isLoading && (
					<div className="flex justify-start mt-2">
						<TypingIndicator />
					</div>
				)}
				<div ref={chatEndRef} />
			</div>
			<div className="absolute lg:bottom-24 bottom-2 px-4 py-2 border-t flex flex-col items-center rounded-b-lg border-gray-200 drop-shadow-md bg-white w-[480px] m-auto">
				<input
					type="text"
					placeholder="Скажите Амалии что-нибудь..."
					className="w-full p-2 border rounded-md max-w-[420px]"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					onKeyPress={(e) =>
						e.key === "Enter" &&
						!isLoading &&
						fetchResponse()
					}
					disabled={isLoading}
				/>
				<div className="flex justify-center pb-8">
					<button
						onClick={handleListenClick}
						className={`mt-4 p-4 rounded-xl duration-150 ${
							listening
								? "bg-red-500 hover:bg-red-800"
								: "bg-green-500 hover:bg-green-600"
						}`}
					>
						<img
							src="/logos/mic.svg"
							alt="Microphone"
							className="w-6 h-6"
						/>
					</button>
					{audioUrl && (
						<audio
							ref={audioRef}
							src={audioUrl}
							autoPlay
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default AmaliaBot;
