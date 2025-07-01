import Image from "next/image";
import Link from "next/link";
import { type Language, getTranslation } from "@/lib/i18n";

interface ValveSacksPageProps {
	params: Promise<{ lang: string }>;
}

export default async function ValveSacksPage({ params }: ValveSacksPageProps) {
	const { lang } = await params;
	const currentLang = lang as Language;
	const t = (key: string) => getTranslation(currentLang, key);

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="bg-red-600 text-white py-20">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h1 className="text-4xl md:text-6xl font-bold mb-6">
								{t("valveSacks")}
							</h1>
							<p className="text-xl md:text-2xl mb-8">
								{t("valveSacksDescription")}
							</p>
							<Link
								href={`/${currentLang}/contacts`}
								className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
							>
								{t("contactUs")}
							</Link>
						</div>
						<div className="rounded-2xl overflow-hidden">
							<Image
								src="/images/products/kraft.jpg"
								alt="Valve Sacks"
								width={600}
								height={400}
								className="w-full h-auto"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-16">
						Key Features
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="text-center">
							<div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-white text-2xl font-bold">💪</span>
							</div>
							<h3 className="text-xl font-bold mb-4">
								{t("highStrengthConstruction")}
							</h3>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-white text-2xl font-bold">⚙️</span>
							</div>
							<h3 className="text-xl font-bold mb-4">
								{t("automaticFillingCompatibility")}
							</h3>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-white text-2xl font-bold">🔒</span>
							</div>
							<h3 className="text-xl font-bold mb-4">
								{t("dustTightClosure")}
							</h3>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-white text-2xl font-bold">📏</span>
							</div>
							<h3 className="text-xl font-bold mb-4">
								{t("customizableSizes")}
							</h3>
						</div>
					</div>
				</div>
			</section>

			{/* Applications */}
			<section className="bg-gray-100 py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-16">
						{t("applications")}
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="bg-white p-8 rounded-2xl shadow-sm text-center">
							<div className="text-4xl mb-4">🏗️</div>
							<h3 className="text-xl font-bold mb-4">{t("construction")}</h3>
							<p className="text-gray-600">{t("constructionProducts")}</p>
						</div>
						<div className="bg-white p-8 rounded-2xl shadow-sm text-center">
							<div className="text-4xl mb-4">🌾</div>
							<h3 className="text-xl font-bold mb-4">{t("food")}</h3>
							<p className="text-gray-600">{t("foodProducts")}</p>
						</div>
						<div className="bg-white p-8 rounded-2xl shadow-sm text-center">
							<div className="text-4xl mb-4">⚗️</div>
							<h3 className="text-xl font-bold mb-4">{t("chemicals")}</h3>
							<p className="text-gray-600">{t("chemicalProducts")}</p>
						</div>
						<div className="bg-white p-8 rounded-2xl shadow-sm text-center">
							<div className="text-4xl mb-4">🌱</div>
							<h3 className="text-xl font-bold mb-4">{t("agriculture")}</h3>
							<p className="text-gray-600">{t("agricultureProducts")}</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-red-600 text-white py-20">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						{t("readyToEnhanceValveSacks")}
					</h2>
					<p className="text-xl mb-8 max-w-2xl mx-auto">
						{t("readyToEnhanceValveSacksDescription")}
					</p>
					<Link
						href={`/${currentLang}/contacts`}
						className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
					>
						{t("contactUs")}
					</Link>
				</div>
			</section>
		</div>
	);
}
