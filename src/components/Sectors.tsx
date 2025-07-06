import Image from "next/image";
import { type Language, getTranslation } from "@/lib/i18n";

interface SectorsProps {
	params: Promise<{ lang: string }>;
}

const Sectors = async ({ params }: SectorsProps) => {
	const { lang } = await params;
	const currentLang = lang as Language;
	const t = (key: string) => getTranslation(currentLang, key);

	const sectors = [
		{
			title: t("constructionMaterials"),
			description: t("constructionDescription"),
			applications: [
				"Portland çimentosu",
				"Alçı",
				"Fayans yapıştırıcıları",
				"Kuru harçlar",
				"Duvar bileşikleri",
			],
			icon: "🏗️",
			image: "/images/products/kraft.jpg",
		},
		{
			title: t("foodAgriculture"),
			description: t("foodDescription"),
			applications: [
				"Un ve tahıllar",
				"Şeker",
				"Hayvan yemi",
				"Tohumlar",
				"Organik gübreler",
			],
			icon: "🌾",
			image: "/images/products/kraft.jpg",
		},
		{
			title: t("chemicalIndustry"),
			description: t("chemicalDescription"),
			applications: [
				"Endüstriyel tuzlar",
				"Deterjan tozları",
				"Plastik granüller",
				"Kimyasal tozlar",
				"Katalizörler",
			],
			icon: "⚗️",
			image: "/images/products/kraft.jpg",
		},
		{
			title: t("miningMinerals"),
			description: t("miningDescription"),
			applications: [
				"Kum ve agregalar",
				"Kil ürünleri",
				"Mineral tozları",
				"Kireçtaşı",
				"İşlenmiş cevherler",
			],
			icon: "⛏️",
			image: "/images/products/kraft.jpg",
		},
		{
			title: t("pharmaceutical"),
			description: t("pharmaceuticalDescription"),
			applications: [
				"Aktif bileşenler",
				"Yardımcı maddeler",
				"İlaç tozları",
				"Toplu ilaçlar",
				"Hammaddeler",
			],
			icon: "💊",
			image: "/images/products/kraft.jpg",
		},
		{
			title: t("recyclingWaste"),
			description: t("recyclingDescription"),
			applications: [
				"Geri dönüştürülmüş plastikler",
				"Kağıt atığı",
				"Metal talaşları",
				"Kompost malzemeleri",
				"Atık tozları",
			],
			icon: "♻️",
			image: "/images/products/kraft.jpg",
		},
	];

	return (
		<div className="container mx-auto px-4">
			<div className="grid lg:grid-cols-2 gap-12">
				{sectors.map((sector) => (
					<div
						key={sector.title}
						className="bg-white rounded-2xl shadow-lg overflow-hidden"
					>
						<div className="relative h-48">
							<Image
								src={sector.image}
								alt={sector.title}
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-red-600 bg-opacity-80 flex items-center justify-center">
								<div className="text-center text-white">
									<div className="text-4xl mb-2">{sector.icon}</div>
									<h3 className="text-2xl font-bold">{sector.title}</h3>
								</div>
							</div>
						</div>
						<div className="p-8">
							<p className="text-gray-700 mb-6">{sector.description}</p>
							<h4 className="font-bold text-red-600 mb-4">
								Tipik Uygulamalar:
							</h4>
							<ul className="list-disc list-inside text-gray-600 space-y-2">
								{sector.applications.map((app) => (
									<li key={app.replace(/\s+/g, "-").toLowerCase()}>{app}</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Sectors;
