// context/AppContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// 1️⃣ Define language type
type Language = "TR" | "EN";

type AppContextType = {
	language: Language;
	setLanguage: (lang: Language) => void;
	currentUrl: string;
	setCurrentUrl: (url: string) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
	// 2️⃣ Set initial type for useState
	const [language, setLanguage] = useState<Language>("TR");
	const [currentUrl, setCurrentUrl] = useState("/");

	return (
		<AppContext.Provider
			value={{ language, setLanguage, currentUrl, setCurrentUrl }}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error("useAppContext must be used within an AppProvider");
	}
	return context;
};
