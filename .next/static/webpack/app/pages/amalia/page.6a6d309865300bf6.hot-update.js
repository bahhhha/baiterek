"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/amalia/page",{

/***/ "(app-pages-browser)/./app/pages/amalia/page.js":
/*!**********************************!*\
  !*** ./app/pages/amalia/page.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"(app-pages-browser)/./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_speech_recognition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-speech-recognition */ \"(app-pages-browser)/./node_modules/react-speech-recognition/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _app_components_TypingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/TypingIndicator */ \"(app-pages-browser)/./app/components/TypingIndicator.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst AmaliaBot = ()=>{\n    _s();\n    const [audioUrl, setAudioUrl] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [chat, setChat] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [videoUrl, setVideoUrl] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const scrollToBottom = ()=>{\n        var _chatEndRef_current;\n        (_chatEndRef_current = chatEndRef.current) === null || _chatEndRef_current === void 0 ? void 0 : _chatEndRef_current.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    };\n    const chatEndRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const { transcript, listening, resetTranscript } = (0,react_speech_recognition__WEBPACK_IMPORTED_MODULE_2__.useSpeechRecognition)();\n    const submitTimeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null); // Reference to manage the timeout\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const handleKeyDown = (e)=>{\n            // Check if the pressed key is the Space bar\n            if (e.target.tagName === \"INPUT\") {\n                return;\n            }\n            // Check if the pressed key is the Space bar\n            if (e.code === \"Space\") {\n                e.preventDefault(); // Prevent the default behavior (e.g., page scroll)\n                handleListenClick();\n            }\n        };\n        // Add the event listener\n        window.addEventListener(\"keydown\", handleKeyDown);\n        // Cleanup: Remove the event listener when the component unmounts\n        return ()=>{\n            window.removeEventListener(\"keydown\", handleKeyDown);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // Update the query state with the transcript whenever it changes\n        setQuery(transcript);\n    }, [\n        transcript\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // Check if the listening state has changed from true to false (i.e., user stopped speaking)\n        if (!listening && transcript !== \"\") {\n            fetchResponse();\n        } else {\n            // If the user starts speaking again, clear any existing timeout to prevent submission\n            if (submitTimeoutRef.current) {\n                clearTimeout(submitTimeoutRef.current);\n            }\n        }\n        // Cleanup: Clear any existing timeout when the component unmounts\n        return ()=>{\n            if (submitTimeoutRef.current) {\n                clearTimeout(submitTimeoutRef.current);\n            }\n        };\n    }, [\n        listening\n    ]);\n    const handleListenClick = ()=>{\n        if (listening) {\n            react_speech_recognition__WEBPACK_IMPORTED_MODULE_2__[\"default\"].stopListening();\n        } else {\n            resetTranscript(); // reset the transcript before starting to listen again\n            react_speech_recognition__WEBPACK_IMPORTED_MODULE_2__[\"default\"].startListening({\n                language: \"ru-RU\"\n            });\n        }\n    };\n    const messageVariants = {\n        hidden: {\n            opacity: 0,\n            y: 10\n        },\n        visible: {\n            opacity: 1,\n            y: 0\n        }\n    };\n    const fetchResponse = async ()=>{\n        try {\n            setIsLoading(true);\n            // Immediately display the user's message\n            setChat((prevChat)=>[\n                    ...prevChat,\n                    {\n                        type: \"user\",\n                        content: query\n                    }\n                ]);\n            // Fetch the text response\n            const textResult = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"https://baiterek-backend.onrender.com/baiterek/getResponse?query=\".concat(query, \"&language=RU\"), {}, {\n                headers: {\n                    accept: \"application/json\"\n                }\n            });\n            // Fetch the audio response\n            const audioResult = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"https://baiterek-backend.onrender.com/baiterek/getAudio?query=\".concat(encodeURIComponent(textResult.data.text), \"&language=RU\"), {}, {\n                headers: {\n                    accept: \"application/json\"\n                }\n            });\n            setAudioUrl(audioResult.data.audio_url); // Set the received audio URL to the state\n            // After both the text and audio responses are fetched, display the bot's response\n            setChat((prevChat)=>[\n                    ...prevChat,\n                    {\n                        type: \"amalia\",\n                        content: textResult.data.text\n                    }\n                ]);\n        } catch (error) {\n            console.error(\"Error fetching response:\", error);\n        } finally{\n            setIsLoading(false);\n            scrollToBottom();\n        }\n    };\n    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const [isVideoPlaying, setIsVideoPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (audioRef.current) {\n            audioRef.current.onplay = ()=>{\n                setIsVideoPlaying(true);\n                if (videoRef.current) {\n                    videoRef.current.play();\n                    videoRef.current.currentTime = 0;\n                }\n            };\n            audioRef.current.onended = ()=>{\n                setIsVideoPlaying(false);\n            };\n        }\n    }, [\n        audioUrl\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center relative lg:top-0 top-16 rounded-lg py-2 h-full max-w-full lg:max-w-[720px] m-auto\",\n        children: [\n            isVideoPlaying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                ref: videoRef,\n                autoPlay: true,\n                muted: true,\n                className: \"w-3/4 lg:w-80 scale-100 lg:scale-[120%] ml-0 lg:ml-12 mt-6 lg:mt-24 absolute max-h-1/4 lg:max-h-1/3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: \"/AmaliaSpeaking.mp4\",\n                    type: \"video/mp4\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Aibar\\\\Desktop\\\\baiterek\\\\app\\\\pages\\\\amalia\\\\page.js\",\n                    lineNumber: 165,\n                    columnNumber: 6\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Aibar\\\\Desktop\\\\baiterek\\\\app\\\\pages\\\\amalia\\\\page.js\",\n                lineNumber: 159,\n                columnNumber: 5\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/images/amaliachat.png\",\n                alt: \"Amalia\",\n                className: \"w-3/4 lg:w-96 max-h-1/4 lg:max-h-1/3 absolute mt-2 lg:mt-4 object-cover drop-shadow-xl\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Aibar\\\\Desktop\\\\baiterek\\\\app\\\\pages\\\\amalia\\\\page.js\",\n                lineNumber: 171,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-1 w-full lg:min-w-[720px] absolute bottom-0 lg:bottom-[240px] flex-1 overflow-y-auto p-4 space-y-4 max-h-[300px] lg:max-h-[400px]\",\n                children: [\n                    chat.map((message, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                            initial: \"hidden\",\n                            animate: \"visible\",\n                            variants: messageVariants,\n                            className: \"flex \".concat(message.type === \"user\" ? \"justify-end\" : \"justify-start\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"rounded-md drop-shadow-md max-w-[360px] p-2 \".concat(message.type === \"user\" ? \"bg-gray-100\" : \"bg-[#71c280] text-white\"),\n                                children: message.content\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Aibar\\\\Desktop\\\\baiterek\\\\app\\\\pages\\\\amalia\\\\page.js\",\n                                lineNumber: 190,\n                                columnNumber: 7\n                            }, undefined)\n                        }, idx, false, {\n                            fileName: \"C:\\\\Users\\\\Aibar\\\\Desktop\\\\baiterek\\\\app\\\\pages\\\\amalia\\\\page.js\",\n                            lineNumber: 179,\n                            columnNumber: 6\n                        }, undefined)),\n                    isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-start mt-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_TypingIndicator__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Aibar\\\\Desktop\\\\baiterek\\\\app\\\\pages\\\\amalia\\\\page.js\",\n                            lineNumber: 204,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Aibar\\\\Desktop\\\\baiterek\\\\app\\\\pages\\\\amalia\\\\page.js\",\n                        lineNumber: 203,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: chatEndRef\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Aibar\\\\Desktop\\\\baiterek\\\\app\\\\pages\\\\amalia\\\\page.js\",\n                        lineNumber: 207,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Aibar\\\\Desktop\\\\baiterek\\\\app\\\\pages\\\\amalia\\\\page.js\",\n                lineNumber: 177,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-1 absolute lg:bottom-24 top-72 px-4 py-2 border-t flex flex-col items-center rounded-b-lg border-gray-200 drop-shadow-md bg-white w-[280px] m-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Скажите Амалии что-нибудь...\",\n                        className: \"w-full p-2 border rounded-md max-w-[420px]\",\n                        value: query,\n                        onChange: (e)=>setQuery(e.target.value),\n                        onKeyPress: (e)=>e.key === \"Enter\" && !isLoading && fetchResponse(),\n                        disabled: isLoading\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Aibar\\\\Desktop\\\\baiterek\\\\app\\\\pages\\\\amalia\\\\page.js\",\n                        lineNumber: 210,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center pb-4 lg:pb-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleListenClick,\n                                className: \"mt-4 p-4 rounded-xl duration-150 \".concat(listening ? \"bg-red-500 hover:bg-red-800\" : \"bg-green-500 hover:bg-green-600\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/logos/mic.svg\",\n                                    alt: \"Microphone\",\n                                    className: \"w-6 h-6\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Aibar\\\\Desktop\\\\baiterek\\\\app\\\\pages\\\\amalia\\\\page.js\",\n                                    lineNumber: 232,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Aibar\\\\Desktop\\\\baiterek\\\\app\\\\pages\\\\amalia\\\\page.js\",\n                                lineNumber: 224,\n                                columnNumber: 6\n                            }, undefined),\n                            audioUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                                ref: audioRef,\n                                src: audioUrl,\n                                autoPlay: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Aibar\\\\Desktop\\\\baiterek\\\\app\\\\pages\\\\amalia\\\\page.js\",\n                                lineNumber: 239,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Aibar\\\\Desktop\\\\baiterek\\\\app\\\\pages\\\\amalia\\\\page.js\",\n                        lineNumber: 223,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Aibar\\\\Desktop\\\\baiterek\\\\app\\\\pages\\\\amalia\\\\page.js\",\n                lineNumber: 209,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Aibar\\\\Desktop\\\\baiterek\\\\app\\\\pages\\\\amalia\\\\page.js\",\n        lineNumber: 157,\n        columnNumber: 3\n    }, undefined);\n};\n_s(AmaliaBot, \"DSKcP1Xkxwq9kMFgyuHEJjynI6g=\", false, function() {\n    return [\n        react_speech_recognition__WEBPACK_IMPORTED_MODULE_2__.useSpeechRecognition\n    ];\n});\n_c = AmaliaBot;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AmaliaBot);\nvar _c;\n$RefreshReg$(_c, \"AmaliaBot\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlcy9hbWFsaWEvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDcUM7QUFJSDtBQUNrQjtBQUMxQjtBQUNxQztBQUNQO0FBRXhELE1BQU1TLFlBQVk7O0lBQ2pCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNVLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDWSxNQUFNQyxRQUFRLEdBQUdiLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkMsTUFBTSxDQUFDYyxVQUFVQyxZQUFZLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2dCLFdBQVdDLGFBQWEsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU1rQixpQkFBaUI7WUFDdEJDO1NBQUFBLHNCQUFBQSxXQUFXQyxPQUFPLGNBQWxCRCwwQ0FBQUEsb0JBQW9CRSxjQUFjLENBQUM7WUFBRUMsVUFBVTtRQUFTO0lBQ3pEO0lBQ0EsTUFBTUgsYUFBYWxCLDZDQUFNQSxDQUFDO0lBQzFCLE1BQU0sRUFBRXNCLFVBQVUsRUFBRUMsU0FBUyxFQUFFQyxlQUFlLEVBQUUsR0FDL0MxQiw4RUFBb0JBO0lBRXJCLE1BQU0yQixtQkFBbUJ6Qiw2Q0FBTUEsQ0FBQyxPQUFPLGtDQUFrQztJQUV6RUMsZ0RBQVNBLENBQUM7UUFDVCxNQUFNeUIsZ0JBQWdCLENBQUNDO1lBQ3RCLDRDQUE0QztZQUM1QyxJQUFJQSxFQUFFQyxNQUFNLENBQUNDLE9BQU8sS0FBSyxTQUFTO2dCQUNqQztZQUNEO1lBRUEsNENBQTRDO1lBQzVDLElBQUlGLEVBQUVHLElBQUksS0FBSyxTQUFTO2dCQUN2QkgsRUFBRUksY0FBYyxJQUFJLG1EQUFtRDtnQkFDdkVDO1lBQ0Q7UUFDRDtRQUVBLHlCQUF5QjtRQUN6QkMsT0FBT0MsZ0JBQWdCLENBQUMsV0FBV1I7UUFFbkMsaUVBQWlFO1FBQ2pFLE9B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UixXQUFVOzs7Ozs7Ozs7Ozs0QkFHWDlELDBCQUNBLDhEQUFDc0Y7Z0NBQ0F0QixLQUFLWDtnQ0FDTGUsS0FBS3BFO2dDQUNMaUUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2Y7R0E3T01sRTs7UUFXSlIsMEVBQW9CQTs7O0tBWGhCUTtBQStPTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZXMvYW1hbGlhL3BhZ2UuanM/YmQ0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCI7XHJcblxyXG5pbXBvcnQgU3BlZWNoUmVjb2duaXRpb24sIHtcclxuXHR1c2VTcGVlY2hSZWNvZ25pdGlvbixcclxufSBmcm9tIFwicmVhY3Qtc3BlZWNoLXJlY29nbml0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBUeXBpbmdJbmRpY2F0b3IgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvVHlwaW5nSW5kaWNhdG9yXCI7XHJcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmNvbnN0IEFtYWxpYUJvdCA9ICgpID0+IHtcclxuXHRjb25zdCBbYXVkaW9VcmwsIHNldEF1ZGlvVXJsXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW2NoYXQsIHNldENoYXRdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFt2aWRlb1VybCwgc2V0VmlkZW9VcmxdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBzY3JvbGxUb0JvdHRvbSA9ICgpID0+IHtcclxuXHRcdGNoYXRFbmRSZWYuY3VycmVudD8uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuXHR9O1xyXG5cdGNvbnN0IGNoYXRFbmRSZWYgPSB1c2VSZWYobnVsbCk7XHJcblx0Y29uc3QgeyB0cmFuc2NyaXB0LCBsaXN0ZW5pbmcsIHJlc2V0VHJhbnNjcmlwdCB9ID1cclxuXHRcdHVzZVNwZWVjaFJlY29nbml0aW9uKCk7XHJcblxyXG5cdGNvbnN0IHN1Ym1pdFRpbWVvdXRSZWYgPSB1c2VSZWYobnVsbCk7IC8vIFJlZmVyZW5jZSB0byBtYW5hZ2UgdGhlIHRpbWVvdXRcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGhhbmRsZUtleURvd24gPSAoZSkgPT4ge1xyXG5cdFx0XHQvLyBDaGVjayBpZiB0aGUgcHJlc3NlZCBrZXkgaXMgdGhlIFNwYWNlIGJhclxyXG5cdFx0XHRpZiAoZS50YXJnZXQudGFnTmFtZSA9PT0gXCJJTlBVVFwiKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBDaGVjayBpZiB0aGUgcHJlc3NlZCBrZXkgaXMgdGhlIFNwYWNlIGJhclxyXG5cdFx0XHRpZiAoZS5jb2RlID09PSBcIlNwYWNlXCIpIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgYmVoYXZpb3IgKGUuZy4sIHBhZ2Ugc2Nyb2xsKVxyXG5cdFx0XHRcdGhhbmRsZUxpc3RlbkNsaWNrKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gQWRkIHRoZSBldmVudCBsaXN0ZW5lclxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xyXG5cclxuXHRcdC8vIENsZWFudXA6IFJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXIgd2hlbiB0aGUgY29tcG9uZW50IHVubW91bnRzXHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XHJcblx0XHR9O1xyXG5cdH0sIFtdKTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Ly8gVXBkYXRlIHRoZSBxdWVyeSBzdGF0ZSB3aXRoIHRoZSB0cmFuc2NyaXB0IHdoZW5ldmVyIGl0IGNoYW5nZXNcclxuXHRcdHNldFF1ZXJ5KHRyYW5zY3JpcHQpO1xyXG5cdH0sIFt0cmFuc2NyaXB0XSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHQvLyBDaGVjayBpZiB0aGUgbGlzdGVuaW5nIHN0YXRlIGhhcyBjaGFuZ2VkIGZyb20gdHJ1ZSB0byBmYWxzZSAoaS5lLiwgdXNlciBzdG9wcGVkIHNwZWFraW5nKVxyXG5cdFx0aWYgKCFsaXN0ZW5pbmcgJiYgdHJhbnNjcmlwdCAhPT0gXCJcIikge1xyXG5cdFx0XHRmZXRjaFJlc3BvbnNlKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyBJZiB0aGUgdXNlciBzdGFydHMgc3BlYWtpbmcgYWdhaW4sIGNsZWFyIGFueSBleGlzdGluZyB0aW1lb3V0IHRvIHByZXZlbnQgc3VibWlzc2lvblxyXG5cdFx0XHRpZiAoc3VibWl0VGltZW91dFJlZi5jdXJyZW50KSB7XHJcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHN1Ym1pdFRpbWVvdXRSZWYuY3VycmVudCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBDbGVhbnVwOiBDbGVhciBhbnkgZXhpc3RpbmcgdGltZW91dCB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcclxuXHRcdHJldHVybiAoKSA9PiB7XHJcblx0XHRcdGlmIChzdWJtaXRUaW1lb3V0UmVmLmN1cnJlbnQpIHtcclxuXHRcdFx0XHRjbGVhclRpbWVvdXQoc3VibWl0VGltZW91dFJlZi5jdXJyZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9LCBbbGlzdGVuaW5nXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUxpc3RlbkNsaWNrID0gKCkgPT4ge1xyXG5cdFx0aWYgKGxpc3RlbmluZykge1xyXG5cdFx0XHRTcGVlY2hSZWNvZ25pdGlvbi5zdG9wTGlzdGVuaW5nKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXNldFRyYW5zY3JpcHQoKTsgLy8gcmVzZXQgdGhlIHRyYW5zY3JpcHQgYmVmb3JlIHN0YXJ0aW5nIHRvIGxpc3RlbiBhZ2FpblxyXG5cdFx0XHRTcGVlY2hSZWNvZ25pdGlvbi5zdGFydExpc3RlbmluZyh7XHJcblx0XHRcdFx0bGFuZ3VhZ2U6IFwicnUtUlVcIiwgLy8gc2V0IHRoZSBsYW5ndWFnZSB0byBSdXNzaWFuXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0Y29uc3QgbWVzc2FnZVZhcmlhbnRzID0ge1xyXG5cdFx0aGlkZGVuOiB7IG9wYWNpdHk6IDAsIHk6IDEwIH0sXHJcblx0XHR2aXNpYmxlOiB7IG9wYWNpdHk6IDEsIHk6IDAgfSxcclxuXHR9O1xyXG5cclxuXHRjb25zdCBmZXRjaFJlc3BvbnNlID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0c2V0SXNMb2FkaW5nKHRydWUpO1xyXG5cclxuXHRcdFx0Ly8gSW1tZWRpYXRlbHkgZGlzcGxheSB0aGUgdXNlcidzIG1lc3NhZ2VcclxuXHRcdFx0c2V0Q2hhdCgocHJldkNoYXQpID0+IFtcclxuXHRcdFx0XHQuLi5wcmV2Q2hhdCxcclxuXHRcdFx0XHR7IHR5cGU6IFwidXNlclwiLCBjb250ZW50OiBxdWVyeSB9LFxyXG5cdFx0XHRdKTtcclxuXHJcblx0XHRcdC8vIEZldGNoIHRoZSB0ZXh0IHJlc3BvbnNlXHJcblx0XHRcdGNvbnN0IHRleHRSZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG5cdFx0XHRcdGBodHRwczovL2JhaXRlcmVrLWJhY2tlbmQub25yZW5kZXIuY29tL2JhaXRlcmVrL2dldFJlc3BvbnNlP3F1ZXJ5PSR7cXVlcnl9Jmxhbmd1YWdlPVJVYCxcclxuXHRcdFx0XHR7fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XHRcdGFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdC8vIEZldGNoIHRoZSBhdWRpbyByZXNwb25zZVxyXG5cdFx0XHRjb25zdCBhdWRpb1Jlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcblx0XHRcdFx0YGh0dHBzOi8vYmFpdGVyZWstYmFja2VuZC5vbnJlbmRlci5jb20vYmFpdGVyZWsvZ2V0QXVkaW8/cXVlcnk9JHtlbmNvZGVVUklDb21wb25lbnQoXHJcblx0XHRcdFx0XHR0ZXh0UmVzdWx0LmRhdGEudGV4dFxyXG5cdFx0XHRcdCl9Jmxhbmd1YWdlPVJVYCxcclxuXHRcdFx0XHR7fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XHRcdGFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdHNldEF1ZGlvVXJsKGF1ZGlvUmVzdWx0LmRhdGEuYXVkaW9fdXJsKTsgLy8gU2V0IHRoZSByZWNlaXZlZCBhdWRpbyBVUkwgdG8gdGhlIHN0YXRlXHJcblxyXG5cdFx0XHQvLyBBZnRlciBib3RoIHRoZSB0ZXh0IGFuZCBhdWRpbyByZXNwb25zZXMgYXJlIGZldGNoZWQsIGRpc3BsYXkgdGhlIGJvdCdzIHJlc3BvbnNlXHJcblx0XHRcdHNldENoYXQoKHByZXZDaGF0KSA9PiBbXHJcblx0XHRcdFx0Li4ucHJldkNoYXQsXHJcblx0XHRcdFx0eyB0eXBlOiBcImFtYWxpYVwiLCBjb250ZW50OiB0ZXh0UmVzdWx0LmRhdGEudGV4dCB9LFxyXG5cdFx0XHRdKTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyByZXNwb25zZTpcIiwgZXJyb3IpO1xyXG5cdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0c2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0c2Nyb2xsVG9Cb3R0b20oKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cdGNvbnN0IHZpZGVvUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cdGNvbnN0IFtpc1ZpZGVvUGxheWluZywgc2V0SXNWaWRlb1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKGF1ZGlvUmVmLmN1cnJlbnQpIHtcclxuXHRcdFx0YXVkaW9SZWYuY3VycmVudC5vbnBsYXkgPSAoKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNWaWRlb1BsYXlpbmcodHJ1ZSk7XHJcblx0XHRcdFx0aWYgKHZpZGVvUmVmLmN1cnJlbnQpIHtcclxuXHRcdFx0XHRcdHZpZGVvUmVmLmN1cnJlbnQucGxheSgpO1xyXG5cdFx0XHRcdFx0dmlkZW9SZWYuY3VycmVudC5jdXJyZW50VGltZSA9IDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0YXVkaW9SZWYuY3VycmVudC5vbmVuZGVkID0gKCkgPT4ge1xyXG5cdFx0XHRcdHNldElzVmlkZW9QbGF5aW5nKGZhbHNlKTtcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHR9LCBbYXVkaW9VcmxdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcmVsYXRpdmUgbGc6dG9wLTAgdG9wLTE2IHJvdW5kZWQtbGcgcHktMiBoLWZ1bGwgbWF4LXctZnVsbCBsZzptYXgtdy1bNzIwcHhdIG0tYXV0b1wiPlxyXG5cdFx0XHR7aXNWaWRlb1BsYXlpbmcgPyAoXHJcblx0XHRcdFx0PHZpZGVvXHJcblx0XHRcdFx0XHRyZWY9e3ZpZGVvUmVmfVxyXG5cdFx0XHRcdFx0YXV0b1BsYXlcclxuXHRcdFx0XHRcdG11dGVkXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LTMvNCBsZzp3LTgwIHNjYWxlLTEwMCBsZzpzY2FsZS1bMTIwJV0gbWwtMCBsZzptbC0xMiBtdC02IGxnOm10LTI0IGFic29sdXRlIG1heC1oLTEvNCBsZzptYXgtaC0xLzNcIlxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxzb3VyY2VcclxuXHRcdFx0XHRcdFx0c3JjPVwiL0FtYWxpYVNwZWFraW5nLm1wNFwiXHJcblx0XHRcdFx0XHRcdHR5cGU9XCJ2aWRlby9tcDRcIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L3ZpZGVvPlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdHNyYz1cIi9pbWFnZXMvYW1hbGlhY2hhdC5wbmdcIlxyXG5cdFx0XHRcdFx0YWx0PVwiQW1hbGlhXCJcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInctMy80IGxnOnctOTYgbWF4LWgtMS80IGxnOm1heC1oLTEvMyBhYnNvbHV0ZSBtdC0yIGxnOm10LTQgb2JqZWN0LWNvdmVyIGRyb3Atc2hhZG93LXhsXCJcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQpfVxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInotMSB3LWZ1bGwgbGc6bWluLXctWzcyMHB4XSBhYnNvbHV0ZSBib3R0b20tMCBsZzpib3R0b20tWzI0MHB4XSBmbGV4LTEgb3ZlcmZsb3cteS1hdXRvIHAtNCBzcGFjZS15LTQgbWF4LWgtWzMwMHB4XSBsZzptYXgtaC1bNDAwcHhdXCI+XHJcblx0XHRcdFx0e2NoYXQubWFwKChtZXNzYWdlLCBpZHgpID0+IChcclxuXHRcdFx0XHRcdDxtb3Rpb24uZGl2XHJcblx0XHRcdFx0XHRcdGtleT17aWR4fVxyXG5cdFx0XHRcdFx0XHRpbml0aWFsPVwiaGlkZGVuXCJcclxuXHRcdFx0XHRcdFx0YW5pbWF0ZT1cInZpc2libGVcIlxyXG5cdFx0XHRcdFx0XHR2YXJpYW50cz17bWVzc2FnZVZhcmlhbnRzfVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BmbGV4ICR7XHJcblx0XHRcdFx0XHRcdFx0bWVzc2FnZS50eXBlID09PSBcInVzZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0PyBcImp1c3RpZnktZW5kXCJcclxuXHRcdFx0XHRcdFx0XHRcdDogXCJqdXN0aWZ5LXN0YXJ0XCJcclxuXHRcdFx0XHRcdFx0fWB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Byb3VuZGVkLW1kIGRyb3Atc2hhZG93LW1kIG1heC13LVszNjBweF0gcC0yICR7XHJcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlLnR5cGUgPT09IFwidXNlclwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdD8gXCJiZy1ncmF5LTEwMFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdDogXCJiZy1bIzcxYzI4MF0gdGV4dC13aGl0ZVwiXHJcblx0XHRcdFx0XHRcdFx0fWB9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHR7bWVzc2FnZS5jb250ZW50fVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cclxuXHRcdFx0XHQpKX1cclxuXHJcblx0XHRcdFx0e2lzTG9hZGluZyAmJiAoXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBtdC0yXCI+XHJcblx0XHRcdFx0XHRcdDxUeXBpbmdJbmRpY2F0b3IgLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdFx0PGRpdiByZWY9e2NoYXRFbmRSZWZ9IC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInotMSBhYnNvbHV0ZSBsZzpib3R0b20tMjQgdG9wLTcyIHB4LTQgcHktMiBib3JkZXItdCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciByb3VuZGVkLWItbGcgYm9yZGVyLWdyYXktMjAwIGRyb3Atc2hhZG93LW1kIGJnLXdoaXRlIHctWzI4MHB4XSBtLWF1dG9cIj5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0KHQutCw0LbQuNGC0LUg0JDQvNCw0LvQuNC4INGH0YLQvi3QvdC40LHRg9C00YwuLi5cIlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIHAtMiBib3JkZXIgcm91bmRlZC1tZCBtYXgtdy1bNDIwcHhdXCJcclxuXHRcdFx0XHRcdHZhbHVlPXtxdWVyeX1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0b25LZXlQcmVzcz17KGUpID0+XHJcblx0XHRcdFx0XHRcdGUua2V5ID09PSBcIkVudGVyXCIgJiZcclxuXHRcdFx0XHRcdFx0IWlzTG9hZGluZyAmJlxyXG5cdFx0XHRcdFx0XHRmZXRjaFJlc3BvbnNlKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGRpc2FibGVkPXtpc0xvYWRpbmd9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcGItNCBsZzpwYi04XCI+XHJcblx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZUxpc3RlbkNsaWNrfVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BtdC00IHAtNCByb3VuZGVkLXhsIGR1cmF0aW9uLTE1MCAke1xyXG5cdFx0XHRcdFx0XHRcdGxpc3RlbmluZ1xyXG5cdFx0XHRcdFx0XHRcdFx0PyBcImJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTgwMFwiXHJcblx0XHRcdFx0XHRcdFx0XHQ6IFwiYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTYwMFwiXHJcblx0XHRcdFx0XHRcdH1gfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0c3JjPVwiL2xvZ29zL21pYy5zdmdcIlxyXG5cdFx0XHRcdFx0XHRcdGFsdD1cIk1pY3JvcGhvbmVcIlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctNiBoLTZcIlxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHR7YXVkaW9VcmwgJiYgKFxyXG5cdFx0XHRcdFx0XHQ8YXVkaW9cclxuXHRcdFx0XHRcdFx0XHRyZWY9e2F1ZGlvUmVmfVxyXG5cdFx0XHRcdFx0XHRcdHNyYz17YXVkaW9Vcmx9XHJcblx0XHRcdFx0XHRcdFx0YXV0b1BsYXlcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFtYWxpYUJvdDtcclxuIl0sIm5hbWVzIjpbIlNwZWVjaFJlY29nbml0aW9uIiwidXNlU3BlZWNoUmVjb2duaXRpb24iLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsImF4aW9zIiwiVHlwaW5nSW5kaWNhdG9yIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiQW1hbGlhQm90IiwiYXVkaW9VcmwiLCJzZXRBdWRpb1VybCIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJjaGF0Iiwic2V0Q2hhdCIsInZpZGVvVXJsIiwic2V0VmlkZW9VcmwiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJzY3JvbGxUb0JvdHRvbSIsImNoYXRFbmRSZWYiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsInRyYW5zY3JpcHQiLCJsaXN0ZW5pbmciLCJyZXNldFRyYW5zY3JpcHQiLCJzdWJtaXRUaW1lb3V0UmVmIiwiaGFuZGxlS2V5RG93biIsImUiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwiY29kZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlTGlzdGVuQ2xpY2siLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZldGNoUmVzcG9uc2UiLCJjbGVhclRpbWVvdXQiLCJzdG9wTGlzdGVuaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJsYW5ndWFnZSIsIm1lc3NhZ2VWYXJpYW50cyIsImhpZGRlbiIsIm9wYWNpdHkiLCJ5IiwidmlzaWJsZSIsInByZXZDaGF0IiwidHlwZSIsImNvbnRlbnQiLCJ0ZXh0UmVzdWx0IiwicG9zdCIsImhlYWRlcnMiLCJhY2NlcHQiLCJhdWRpb1Jlc3VsdCIsImVuY29kZVVSSUNvbXBvbmVudCIsImRhdGEiLCJ0ZXh0IiwiYXVkaW9fdXJsIiwiZXJyb3IiLCJjb25zb2xlIiwiYXVkaW9SZWYiLCJ2aWRlb1JlZiIsImlzVmlkZW9QbGF5aW5nIiwic2V0SXNWaWRlb1BsYXlpbmciLCJvbnBsYXkiLCJwbGF5IiwiY3VycmVudFRpbWUiLCJvbmVuZGVkIiwiZGl2IiwiY2xhc3NOYW1lIiwidmlkZW8iLCJyZWYiLCJhdXRvUGxheSIsIm11dGVkIiwic291cmNlIiwic3JjIiwiaW1nIiwiYWx0IiwibWFwIiwibWVzc2FnZSIsImlkeCIsImluaXRpYWwiLCJhbmltYXRlIiwidmFyaWFudHMiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsIm9uS2V5UHJlc3MiLCJrZXkiLCJkaXNhYmxlZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJhdWRpbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/pages/amalia/page.js\n"));

/***/ })

});