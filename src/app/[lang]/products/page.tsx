import Image from "next/image";
import Link from "next/link";
import { type Language, getTranslation } from "@/lib/i18n";

interface ProductsPageProps {
	params: Promise<{ lang: string }>;
}

// SEO metadata
export async function generateMetadata({ params }: ProductsPageProps) {
	const { lang } = await params;
	const currentLang = lang as Language;
	const t = (key: string) => getTranslation(currentLang, key);

	return {
		title: t("productsTitle"),
		description: t("productsMetaDescription"),
	};
}

export default async function ProductsPage({ params }: ProductsPageProps) {
	const { lang } = await params;
	const currentLang = lang as Language;
	const t = (key: string) => getTranslation(currentLang, key);

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="bg-red-600 text-white py-20">
				<div className="container mx-auto px-4">
					<h1 className="text-4xl md:text-6xl font-bold mb-6">
						{t("products")}
					</h1>
					<p className="text-xl md:text-2xl max-w-3xl">
						{t("kraftSacksDescription")}
					</p>
				</div>
			</section>

			{/* Products Grid */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12">
						{/* Valve Sacks */}
						<div className="bg-white rounded-2xl shadow-lg overflow-hidden">
							<div className="relative h-64">
								<Image
									src="/images/products/kraft.jpg"
									alt="Valve Sacks"
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-red-600 bg-opacity-80 flex items-center justify-center">
									<h2 className="text-3xl font-bold text-white text-center">
										{t("valveSacks")}
									</h2>
								</div>
							</div>
							<div className="p-8">
								<p className="text-gray-700 mb-6">
									{t("valveSacksDescription")}
								</p>
								<div className="grid md:grid-cols-2 gap-4 mb-6">
									<div className="flex items-center space-x-2">
										<span className="text-red-600">✓</span>
										<span className="text-sm">
											{t("highStrengthConstruction")}
										</span>
									</div>
									<div className="flex items-center space-x-2">
										<span className="text-red-600">✓</span>
										<span className="text-sm">
											{t("automaticFillingCompatibility")}
										</span>
									</div>
									<div className="flex items-center space-x-2">
										<span className="text-red-600">✓</span>
										<span className="text-sm">{t("dustTightClosure")}</span>
									</div>
									<div className="flex items-center space-x-2">
										<span className="text-red-600">✓</span>
										<span className="text-sm">{t("customizableSizes")}</span>
									</div>
								</div>
								<Link
									href={`/${currentLang}/products/valve-sacks`}
									className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
								>
									{t("learnMore")}
								</Link>
							</div>
						</div>

						{/* Open Mouth Sacks */}
						<div className="bg-white rounded-2xl shadow-lg overflow-hidden">
							<div className="relative h-64">
								<Image
									src="/images/products/kraft.jpg"
									alt="Open Mouth Sacks"
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-red-600 bg-opacity-80 flex items-center justify-center">
									<h2 className="text-3xl font-bold text-white text-center">
										{t("openMouthSacks")}
									</h2>
								</div>
							</div>
							<div className="p-8">
								<p className="text-gray-700 mb-6">
									{t("openMouthSacksDescription")}
								</p>
								<div className="grid md:grid-cols-2 gap-4 mb-6">
									<div className="flex items-center space-x-2">
										<span className="text-red-600">✓</span>
										<span className="text-sm">{t("durableMultiLayer")}</span>
									</div>
									<div className="flex items-center space-x-2">
										<span className="text-red-600">✓</span>
										<span className="text-sm">{t("wideOpeningFilling")}</span>
									</div>
									<div className="flex items-center space-x-2">
										<span className="text-red-600">✓</span>
										<span className="text-sm">
											{t("strongSealingCapabilities")}
										</span>
									</div>
									<div className="flex items-center space-x-2">
										<span className="text-red-600">✓</span>
										<span className="text-sm">
											{t("availableVariousCapacities")}
										</span>
									</div>
								</div>
								<Link
									href={`/${currentLang}/products/open-mouth-sacks`}
									className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
								>
									{t("learnMore")}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Innovation Section */}
			<section className="bg-gray-100 py-20">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
								{t("continuousInnovation")}
							</h2>
							<div className="space-y-6 text-lg text-gray-700">
								<p>{t("innovationText1")}</p>
								<p>{t("innovationText2")}</p>
								<p>{t("innovationText3")}</p>
							</div>
						</div>
						<div className="rounded-2xl overflow-hidden">
							<Image
								src="/images/products/kraft.jpg"
								alt="Innovation"
								width={600}
								height={400}
								className="w-full h-auto"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Applications */}
			<section className="py-20">
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
						{t("readyToEnhance")}
					</h2>
					<p className="text-xl mb-8 max-w-2xl mx-auto">
						Kraft torba çözümleriniz için uzman ekibimizle iletişime geçin ve
						ihtiyaçlarınıza en uygun ürünleri keşfedin.
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
