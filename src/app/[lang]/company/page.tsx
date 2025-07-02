import Image from "next/image";
import { type Language, getTranslation } from "@/lib/i18n";

interface CompanyPageProps {
	params: Promise<{ lang: string }>;
}

// SEO metadata
export async function generateMetadata({ params }: CompanyPageProps) {
	const { lang } = await params;
	const currentLang = lang as Language;
	const t = (key: string) => getTranslation(currentLang, key);

	return {
		title: t("companyTitle"),
		description: t("companyMetaDescription"),
	};
}

export default async function CompanyPage({ params }: CompanyPageProps) {
	const { lang } = await params;
	const currentLang = lang as Language;
	const t = (key: string) => getTranslation(currentLang, key);

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="bg-red-600 text-white py-20">
				<div className="container mx-auto px-4">
					<h1 className="text-4xl md:text-6xl font-bold mb-6">
						{t("company")}
					</h1>
					<p className="text-xl md:text-2xl max-w-3xl">
						{t("companyDescription")}
					</p>
				</div>
			</section>

			{/* Company Story */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
						{t("ourStory")}
					</h2>
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<div className="space-y-6 text-lg text-gray-700">
								<p>{t("companyStoryText1")}</p>
								<p>{t("companyStoryText2")}</p>
								<p>{t("companyStoryText3")}</p>
							</div>
						</div>
						<div className="rounded-2xl overflow-hidden hidden md:block">
							<Image
								src="/factory-images/factory.png"
								alt="ADAKA Factory"
								width={600}
								height={400}
								className="w-full h-auto"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className="bg-gray-100 py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-16">
						{t("ourValues")}
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-white p-8 rounded-2xl shadow-sm text-center">
							<div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-white text-2xl font-bold">Q</span>
							</div>
							<h3 className="text-xl font-bold mb-4">{t("quality")}</h3>
							<p className="text-gray-600">{t("qualityDescription")}</p>
						</div>
						<div className="bg-white p-8 rounded-2xl shadow-sm text-center">
							<div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-white text-2xl font-bold">I</span>
							</div>
							<h3 className="text-xl font-bold mb-4">{t("innovation")}</h3>
							<p className="text-gray-600">{t("innovationDescription")}</p>
						</div>
						<div className="bg-white p-8 rounded-2xl shadow-sm text-center">
							<div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-white text-2xl font-bold">S</span>
							</div>
							<h3 className="text-xl font-bold mb-4">
								{t("sustainabilityShort")}
							</h3>
							<p className="text-gray-600">{t("sustainabilityDescription")}</p>
						</div>
					</div>
				</div>
			</section>

			{/* Manufacturing Excellence */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="rounded-2xl overflow-hidden">
							<Image
								src="/images/products/kraft.jpg"
								alt="Manufacturing Process"
								width={600}
								height={400}
								className="w-full h-auto"
							/>
						</div>
						<div>
							<h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
								{t("manufacturingExcellence")}
							</h2>
							<div className="space-y-6 text-lg text-gray-700">
								<p>{t("manufacturingText1")}</p>
								<p>{t("manufacturingText2")}</p>
								<p>{t("manufacturingText3")}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
