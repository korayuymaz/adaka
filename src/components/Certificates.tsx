import Image from "next/image";
import { type Language, getTranslation } from "@/lib/i18n";

interface CertificatesProps {
	params: Promise<{ lang: string }>;
}

const Certificates = async ({ params }: CertificatesProps) => {
	const { lang } = await params;
	const currentLang = lang as Language;
	const t = (key: string) => getTranslation(currentLang, key);

	const certificates = [
		{
			image: "/certificates/fsc.png",
			alt: "FSC",
			title: "FSC Sertifikalı",
			description:
				"Orman Koruma Konseyi sertifikalı sürdürülebilir kaynak tedariki",
		},
		{
			image: "/certificates/iso.png",
			alt: "ISO",
			title: "ISO 14001",
			description: "Çevresel yönetim sistemi sertifikasyonu",
		},
		{
			image: "/certificates/pefc.png",
			alt: "PEFC",
			title: "PEFC Sertifikalı",
			description: "Orman sertifikasyonu onay programı",
		},
		{
			image: "/certificates/ce.svg",
			alt: "CE",
			title: "CE Markalaması",
			description: "Avrupa uygunluk standartları uyumluluğu",
		},
	];

	return (
		<div className="container mx-auto px-4">
			<h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-red-600">
				{t("certifications")}
			</h2>
			<div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto bg-gray-200 p-4 rounded-lg">
				{certificates.map((certificate) => (
					<div className="text-center" key={certificate.alt}>
						<div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
							<Image
								src={certificate.image}
								alt={certificate.alt}
								width={60}
								height={60}
								className="object-contain"
							/>
						</div>
						<h3 className="font-bold mb-2">{certificate.title}</h3>
						<p className="text-gray-600 text-sm">{certificate.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Certificates;
