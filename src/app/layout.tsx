import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "ADAKA | Kraft Kağıt Çuval & Endüstriyel Kraft Torba Üretimi - Adana",
	description:
		"ADAKA, hem vanalı hem de açık ağızlı büyük kapasiteli endüstriyel çuval üretiminde uzmanlaşmıştır. ADAKA güvenilir ve saygın bir pazar oyuncusu olarak uluslararası prestije sahip müşteriler sunmaktadır.",
	keywords: `kraft paper sack, valve paper bag, kraft paper bag, valve paper sack, kraft torba, kraft kağıt çuval, vanalı çuval, açık ağızlı çuval,
			endüstriyel kraft torba, endüstriyel kraft torba üretimi,
			kraft kağıt çuval üretimi, vanalı çuval üretimi,
			kraft kağıt çuval fiyatları, vanalı çuval fiyatları, endüstriyel kraft torba fiyatları, 
			price, Adana, ADAKA, Adana çuval üretimi, kraft torba
			`,
	authors: [{ name: "ADAKA" }],
	openGraph: {
		title: "ADAKA Kağıt Çuval & Endüstriyel Kraft Torba Üretimi - Adana",
		description:
			"ADAKA, hem vanalı hem de açık ağızlı büyük kapasiteli endüstriyel çuval üretiminde uzmanlaşmıştır.",
		type: "website",
		locale: "tr_TR",
		alternateLocale: [
			"it_IT",
			"en_US",
			"de_DE",
			"fr_FR",
			"es_ES",
			"el_GR",
			"ru_RU",
			"ar_AA",
		],
	},
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: "https://adaka.com.tr/",
		languages: {
			tr: "https://adaka.com.tr/tr/",
			it: "https://adaka.com.tr/it/",
			en: "https://adaka.com.tr/en/",
			de: "https://adaka.com.tr/de/",
			fr: "https://adaka.com.tr/fr/",
			es: "https://adaka.com.tr/es/",
			el: "https://adaka.com.tr/el/",
			ru: "https://adaka.com.tr/ru/",
			ar: "https://adaka.com.tr/ar/",
		},
	},
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="tr">
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="icon" href="/favicon.ico" type="image/png" />
				<link rel="apple-touch-icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="robots" content="noindex, nofollow" />
				<meta
					name="description"
					content={metadata.description || ""}
					key="desc"
				/>
			</head>
			<body className={`${geist.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
