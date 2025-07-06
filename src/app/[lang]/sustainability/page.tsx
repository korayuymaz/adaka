import Image from "next/image";
import { type Language, getTranslation } from "@/lib/i18n";
import Certificates from "@/components/Certificates";

interface SustainabilityPageProps {
	params: Promise<{ lang: string }>;
}

// SEO metadata
export async function generateMetadata({ params }: SustainabilityPageProps) {
	const { lang } = await params;
	const currentLang = lang as Language;
	const t = (key: string) => getTranslation(currentLang, key);

	return {
		title: t("sustainabilityTitle"),
		description: t("sustainabilityMetaDescription"),
	};
}

export default async function SustainabilityPage({
	params,
}: SustainabilityPageProps) {
	const { lang } = await params;
	const currentLang = lang as Language;
	const t = (key: string) => getTranslation(currentLang, key);

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="text-white py-20 bg-red-600">
				<div className="container mx-auto px-4">
					<h1 className="text-4xl md:text-6xl font-bold mb-6">
						{t("sustainability")}
					</h1>
					<p className="text-xl md:text-2xl max-w-3xl">
						Operasyonlarımızın merkezinde çevresel sorumluluk
					</p>
				</div>
			</section>

			{/* Environmental Commitment */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-600">
								{t("environmentalCommitment")}
							</h2>
							<div className="space-y-6 text-lg text-gray-700">
								<p>{t("sustainabilityText1")}</p>
								<p>{t("sustainabilityText2")}</p>
								<p>{t("sustainabilityText3")}</p>
							</div>
						</div>
						<div className="rounded-2xl overflow-hidden">
							<Image
								src="/images/products/kraft.jpg"
								alt="Sustainable packaging"
								width={600}
								height={400}
								className="w-full h-auto"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Sustainability Initiatives */}
			<section className="bg-gray-100 py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-red-600">
						{t("sustainabilityInitiatives")}
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-white p-8 rounded-2xl shadow-sm text-center">
							<div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-white text-2xl font-bold">♻</span>
							</div>
							<h3 className="text-xl font-bold mb-4">
								{t("recyclableMaterials")}
							</h3>
							<p className="text-gray-600">{t("recyclableDescription")}</p>
						</div>
						<div className="bg-white p-8 rounded-2xl shadow-sm text-center">
							<div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-white text-2xl font-bold">🌱</span>
							</div>
							<h3 className="text-xl font-bold mb-4">
								{t("renewableResources")}
							</h3>
							<p className="text-gray-600">{t("renewableDescription")}</p>
						</div>
						<div className="bg-white p-8 rounded-2xl shadow-sm text-center">
							<div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-white text-2xl font-bold">⚡</span>
							</div>
							<h3 className="text-xl font-bold mb-4">
								{t("energyEfficiency")}
							</h3>
							<p className="text-gray-600">{t("energyDescription")}</p>
						</div>
						<div className="bg-white p-8 rounded-2xl shadow-sm text-center">
							<div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-white text-2xl font-bold">📋</span>
							</div>
							<h3 className="text-xl font-bold mb-4">{t("zeroWasteGoals")}</h3>
							<p className="text-gray-600">{t("zeroWasteDescription")}</p>
						</div>
						<div className="bg-white p-8 rounded-2xl shadow-sm text-center">
							<div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-white text-2xl font-bold">🚛</span>
							</div>
							<h3 className="text-xl font-bold mb-4">{t("carbonFootprint")}</h3>
							<p className="text-gray-600">{t("carbonDescription")}</p>
						</div>
						<div className="bg-white p-8 rounded-2xl shadow-sm text-center">
							<div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-white text-2xl font-bold">🔬</span>
							</div>
							<h3 className="text-xl font-bold mb-4">
								{t("innovationSustainable")}
							</h3>
							<p className="text-gray-600">
								{t("innovationSustainableDescription")}
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Certifications */}
			<section className="py-20" id="certifications">
				<Certificates params={params} />
			</section>

			{/* Future Goals */}
			<section className="text-white py-20 bg-red-600">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-8">
							{t("our2030Goals")}
						</h2>
						<div className="grid md:grid-cols-3 gap-8 mt-12">
							<div>
								<div className="text-4xl font-bold mb-2">%50</div>
								<p>{t("carbonReduction")}</p>
							</div>
							<div>
								<div className="text-4xl font-bold mb-2">%100</div>
								<p>{t("renewableEnergyGoal")}</p>
							</div>
							<div>
								<div className="text-4xl font-bold mb-2">%0</div>
								<p>{t("zeroLandfill")}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
