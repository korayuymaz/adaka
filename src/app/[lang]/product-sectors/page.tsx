import Sectors from "@/components/Sectors";
import { type Language, getTranslation } from "@/lib/i18n";

interface ProductSectorsPageProps {
	params: Promise<{ lang: string }>;
}

// SEO metadata
export async function generateMetadata({ params }: ProductSectorsPageProps) {
	const { lang } = await params;
	const currentLang = lang as Language;
	const t = (key: string) => getTranslation(currentLang, key);

	return {
		title: t("productSectorsTitle"),
		description: t("productSectorsMetaDescription"),
	};
}

export default async function ProductSectorsPage({
	params,
}: ProductSectorsPageProps) {
	const { lang } = await params;
	const currentLang = lang as Language;
	const t = (key: string) => getTranslation(currentLang, key);

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="bg-red-600 text-white py-20">
				<div className="container mx-auto px-4">
					<h1 className="text-4xl md:text-6xl font-bold mb-6">
						{t("productSectors")}
					</h1>
					<p className="text-xl md:text-2xl max-w-3xl">
						{t("servingDiverseIndustries")} - {t("industriesWeServe")}
					</p>
				</div>
			</section>

			{/* Introduction */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-8">
							{t("servingDiverseIndustries")}
						</h2>
						<p className="text-lg text-gray-700 leading-relaxed">
							{t("productSectorsIntro")}
						</p>
					</div>
				</div>
			</section>

			{/* Sectors Grid */}
			<section className="bg-gray-50 py-20">
				<Sectors params={params} />
			</section>

			{/* Packaging Requirements */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-16">
						{t("industrySpecificRequirements")}
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="text-center">
							<div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-white text-2xl font-bold">🛡️</span>
							</div>
							<h3 className="text-xl font-bold mb-4">
								{t("barrierProtection")}
							</h3>
							<p className="text-gray-600">{t("barrierDescription")}</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-white text-2xl font-bold">💪</span>
							</div>
							<h3 className="text-xl font-bold mb-4">
								{t("strengthDurability")}
							</h3>
							<p className="text-gray-600">{t("strengthDescription")}</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-white text-2xl font-bold">🍽️</span>
							</div>
							<h3 className="text-xl font-bold mb-4">{t("foodSafety")}</h3>
							<p className="text-gray-600">{t("foodSafetyDescription")}</p>
						</div>
					</div>
				</div>
			</section>

			{/* Custom Solutions */}
			<section className="bg-red-600 text-white py-20">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl md:text-4xl font-bold mb-6">
								{t("customSolutions")}
							</h2>
							<div className="space-y-4">
								<p className="text-lg">{t("customSolutionsText")}</p>
								<ul className="space-y-2">
									<li>✓ Özel boyutlar ve kapasiteler</li>
									<li>✓ Özel bariyer özellikleri</li>
									<li>✓ Sektöre özel sertifikalar</li>
									<li>✓ Optimize edilmiş doldurma ve kullanım özellikleri</li>
									<li>✓ Sürdürülebilir malzeme seçenekleri</li>
								</ul>
							</div>
						</div>
						<div className="text-center">
							<div className="bg-white bg-opacity-20 rounded-2xl p-8">
								<h3 className="text-2xl font-bold mb-4">
									{t("readyToDiscuss")}
								</h3>
								<p className="mb-6">{t("readyToDiscussText")}</p>
								<a
									href={`/${currentLang}/contacts`}
									className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
								>
									{t("contactUs")}
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Quality Standards */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-16">
						{t("qualityStandardsCompliance")}
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="text-center">
							<div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-red-600 text-sm font-bold">FDA</span>
							</div>
							<h3 className="font-bold mb-2">{t("fdaApproved")}</h3>
							<p className="text-gray-600 text-sm">{t("fdaDescription")}</p>
						</div>
						<div className="text-center">
							<div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-red-600 text-sm font-bold">GMP</span>
							</div>
							<h3 className="font-bold mb-2">{t("gmpCompliant")}</h3>
							<p className="text-gray-600 text-sm">{t("gmpDescription")}</p>
						</div>
						<div className="text-center">
							<div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-red-600 text-sm font-bold">BRC</span>
							</div>
							<h3 className="font-bold mb-2">{t("brcCertified")}</h3>
							<p className="text-gray-600 text-sm">{t("brcDescription")}</p>
						</div>
						<div className="text-center">
							<div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-red-600 text-sm font-bold">HACCP</span>
							</div>
							<h3 className="font-bold mb-2">{t("haccpSystem")}</h3>
							<p className="text-gray-600 text-sm">{t("haccpDescription")}</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
