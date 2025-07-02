import { type Language, getTranslation } from "@/lib/i18n";
import ContactForm from "@/components/ContactForm";

interface ContactsPageProps {
	params: Promise<{ lang: string }>;
}

// SEO metadata
export async function generateMetadata({ params }: ContactsPageProps) {
	const { lang } = await params;
	const currentLang = lang as Language;
	const t = (key: string) => getTranslation(currentLang, key);

	return {
		title: t("contactsTitle"),
		description: t("contactsMetaDescription"),
	};
}

export default async function ContactsPage({ params }: ContactsPageProps) {
	const { lang } = await params;
	const currentLang = lang as Language;
	const t = (key: string) => getTranslation(currentLang, key);

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="bg-red-600 text-white py-20">
				<div className="container mx-auto px-4">
					<h1 className="text-4xl md:text-6xl font-bold mb-6">
						{t("contacts")}
					</h1>
					<p className="text-xl md:text-2xl max-w-3xl">{t("getInTouch")}</p>
				</div>
			</section>

			{/* Contact Content */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12">
						{/* Contact Information */}
						<div>
							<h2 className="text-3xl font-bold text-red-600 mb-8">
								{t("contactInformation")}
							</h2>
							<div className="space-y-6">
								<div className="bg-gray-50 p-6 rounded-lg">
									<h3 className="font-bold text-lg mb-2">{t("headOffice")}</h3>
									<p className="text-gray-700">
										ADAKA Kağıt San. Tic. A.Ş.
										<br />
										Adana Organize Sanayi Bölgesi
										<br />
										Sağlıklı Mah. 2. Cadde No:8
										<br />
										Tarsus OSB
										<br />
										Mersin/Türkiye
									</p>
								</div>
								<div className="bg-gray-50 p-6 rounded-lg">
									<h3 className="font-bold text-lg mb-2">{t("phone")}</h3>
									<p className="text-gray-700">
										<a
											href="tel:+905551234567"
											className="hover:text-red-600 transition-colors"
										>
											+90 324 651 53 53
										</a>
									</p>
								</div>
								<div className="bg-gray-50 p-6 rounded-lg">
									<h3 className="font-bold text-lg mb-2">{t("email")}</h3>
									<p className="text-gray-700">
										<a
											href="mailto:info@adaka.com.tr"
											className="hover:text-red-600 transition-colors"
										>
											info@adaka.com.tr
										</a>
									</p>
								</div>
								<div className="bg-gray-50 p-6 rounded-lg">
									<h3 className="font-bold text-lg mb-2">
										{t("businessHours")}
									</h3>
									<p className="text-gray-700">
										{t("mondayFriday")}
										<br />
										{t("saturday")}
										<br />
										{t("sunday")}
									</p>
								</div>
							</div>
						</div>

						{/* Contact Form */}
						<div>
							<h2 className="text-3xl font-bold text-red-600 mb-8">
								{t("sendMessage")}
							</h2>
							<ContactForm currentLang={currentLang} />
						</div>
					</div>
				</div>
			</section>

			{/* Map Section */}
			<section className="bg-gray-100 py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-red-600 text-center mb-8">
						{t("ourLocation")}
					</h2>
					<div className="h-96 rounded-lg overflow-hidden shadow-lg">
						<iframe
							src="https://maps.google.com/maps?q=37.009611,34.935194&hl=tr&z=15&output=embed"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="ADAKA Lokasyonu"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
