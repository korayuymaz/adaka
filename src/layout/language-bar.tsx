"use client";

import { useAppContext } from "@/context/AppContext";

const LanguageBar = () => {
	const { setLanguage } = useAppContext();

	return (
		<div className="flex justify-end items-center gap-2 bg-red-500 p-2">
			<button
				className="text-white text-bold hover:text-[#cc0000] text-sm cursor-pointer"
				onClick={() => setLanguage("TR")}
			>
				TR
			</button>
			<button
				className="text-white text-bold hover:text-[#cc0000] text-sm cursor-pointer"
				onClick={() => setLanguage("EN")}
			>
				EN
			</button>
		</div>
	);
};

export default LanguageBar;
