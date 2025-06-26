import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/layout/navbar";
import Footer from "@/layout/footer";
import LanguageBar from "@/layout/language-bar";
import { AppProvider } from "@/context/AppContext";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "adaka",
	description: "Adana Kağıt Torba San. Tic. A.Ş.",
	icons: {
		icon: "/icon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<AppProvider>
					<div>
						<LanguageBar />
						<div>
							<Header />
							{children}
							<Footer />
						</div>
					</div>
				</AppProvider>
			</body>
		</html>
	);
}
