import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { languages, type Language } from "@/lib/i18n";
import { notFound } from "next/navigation";

interface LanguageLayoutProps {
	children: React.ReactNode;
	params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
	return Object.keys(languages).map((lang) => ({
		lang,
	}));
}

export default async function LanguageLayout({
	children,
	params,
}: LanguageLayoutProps) {
	const { lang } = await params;

	// Validate language parameter
	if (!Object.keys(languages).includes(lang)) {
		notFound();
	}

	const currentLang = lang as Language;

	return (
		<div className="min-h-screen flex flex-col">
			<Header currentLang={currentLang} />
			<main className="flex-1">{children}</main>
			<Footer currentLang={currentLang} />
		</div>
	);
}
