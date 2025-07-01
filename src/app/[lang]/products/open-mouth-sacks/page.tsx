import Image from "next/image";
import Link from "next/link";
import { type Language, getTranslation } from "@/lib/i18n";

interface OpenMouthSacksPageProps {
	params: Promise<{ lang: string }>;
}

export default async function OpenMouthSacksPage({
	params,
}: OpenMouthSacksPageProps) {
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
								{t("openMouthSacks")}
							</h1>
							<p className="text-xl md:text-2xl mb-8">
								{t("openMouthSacksDescription")}
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
								src="/images/products/sacchi-carta-kraft.jpeg"
								alt="Open Mouth Sacks"
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
								<span className="text-white text-2xl font-bold">🔧</span>
							</div>
							<h3 className="text-xl font-bold mb-4">
								{t("durableMultiLayer")}
							</h3>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-white text-2xl font-bold">📂</span>
							</div>
							<h3 className="text-xl font-bold mb-4">
								{t("wideOpeningFilling")}
							</h3>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-white text-2xl font-bold">🔒</span>
							</div>
							<h3 className="text-xl font-bold mb-4">
								{t("strongSealingCapabilities")}
							</h3>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-white text-2xl font-bold">📏</span>
							</div>
							<h3 className="text-xl font-bold mb-4">
								{t("availableVariousCapacities")}
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

			{/* Advantages */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
								Why Choose Open Mouth Sacks?
							</h2>
							<div className="space-y-6">
								<div className="flex items-start space-x-4">
									<div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
										<span className="text-white text-sm font-bold">✓</span>
									</div>
									<div>
										<h3 className="font-bold mb-2">Easy Filling</h3>
										<p className="text-gray-600">
											Wide opening allows for efficient manual or automated
											filling processes.
										</p>
									</div>
								</div>
								<div className="flex items-start space-x-4">
									<div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
										<span className="text-white text-sm font-bold">✓</span>
									</div>
									<div>
										<h3 className="font-bold mb-2">Versatile Applications</h3>
										<p className="text-gray-600">
											Suitable for a wide range of products from powders to
											granules.
										</p>
									</div>
								</div>
								<div className="flex items-start space-x-4">
									<div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
										<span className="text-white text-sm font-bold">✓</span>
									</div>
									<div>
										<h3 className="font-bold mb-2">Cost Effective</h3>
										<p className="text-gray-600">
											Economical solution for bulk packaging requirements.
										</p>
									</div>
								</div>
								<div className="flex items-start space-x-4">
									<div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
										<span className="text-white text-sm font-bold">✓</span>
									</div>
									<div>
										<h3 className="font-bold mb-2">Secure Closure</h3>
										<p className="text-gray-600">
											Strong sealing options ensure product protection during
											transport and storage.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="rounded-2xl overflow-hidden">
							<Image
								src="/images/products/sacchi-carta-kraft.jpeg"
								alt="Open mouth sacks advantages"
								width={600}
								height={400}
								className="w-full h-auto"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-red-600 text-white py-20">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						{t("readyToEnhanceOpenMouthSacks")}
					</h2>
					<p className="text-xl mb-8 max-w-2xl mx-auto">
						{t("readyToEnhanceOpenMouthSacksDescription")}
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
