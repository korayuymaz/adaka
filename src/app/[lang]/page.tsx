import Image from "next/image";
import Link from "next/link";
import { type Language, getTranslation } from "@/lib/i18n";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import CustomerLogosGrid from "@/components/CustomerLogosGrid";

interface HomePageProps {
	params: Promise<{ lang: string }>;
}

// SEO metadata
export async function generateMetadata({ params }: HomePageProps) {
	const { lang } = await params;
	const currentLang = lang as Language;
	const t = (key: string) => getTranslation(currentLang, key);

	return {
		title: t("homeTitle"),
		description: t("homeDescription"),
	};
}

export default async function HomePage({ params }: HomePageProps) {
	const { lang } = await params;
	const currentLang = lang as Language;
	const t = (key: string) => getTranslation(currentLang, key);

	const customerLogos = [
		{ name: "Çimko", src: "/images/customers/cimko.png" },
		{ name: "Çimsa", src: "/images/customers/cimsa.png" },
		{ name: "Akçansa", src: "/images/customers/akcansa.png" },
		{ name: "Şişecam", src: "/images/customers/sisecam.png" },
		{ name: "Beşan", src: "/images/customers/besan.png" },
		{ name: "Eti Gıda", src: "/images/customers/eti.png" },
		{ name: "Bekaert", src: "/images/customers/bekaert.png" },
		{ name: "Ak Nişasta", src: "/images/customers/aknisasta.png" },
		{ name: "Matkim", src: "/images/customers/matkim.png" },
		{ name: "Sönmez Çimento", src: "/images/customers/sonmez-cimento.png" },
	];

	return (
		<div className="overflow-hidden">
			{/* Hero Section */}
			<section className="relative min-h-screen bg-zinc-600 text-white overflow-hidden">
				<div className="absolute inset-0">
					<Image
						src="/images/banners/hero-image.jpeg"
						alt="ADAKA Packaging"
						fill
						className="object-cover"
						priority
					/>
					<div className="absolute inset-0 bg-black bg-opacity-40" />
				</div>

				<div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
					<div className="max-w-2xl">
						<h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
							{t("heroTitle")
								.split("\\n")
								.map((line, index) => (
									<span
										key={`hero-line-${line.replace(/\s+/g, "-").toLowerCase()}`}
									>
										{line}
										{index === 0 && <br />}
									</span>
								))}
						</h1>
						<p className="text-xl md:text-2xl text-gray-200">
							{t("heroSubtitle")}
						</p>
					</div>
				</div>
			</section>

			{/* Company Description Section */}
			<section className="bg-red-600 text-white py-20 rounded-t-3xl -mt-6 relative z-20">
				<div className="container mx-auto px-4">
					<h2 className="text-2xl md:text-3xl font-light leading-relaxed max-w-4xl">
						{t("companyDescription")}
					</h2>
				</div>
			</section>

			{/* Products Section */}
			<section className="bg-white py-20 rounded-t-3xl -mt-6 relative z-30">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h3 className="text-[#333333] text-lg font-bold mb-4">
								{t("packagingTitle")}
							</h3>
							<h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
								{t("kraftSacksTitle")}
							</h2>
							<p className="text-[#333333] text-lg mb-8">
								{t("kraftSacksDescription")}
							</p>
							<Link
								href={`/${currentLang}/products`}
								className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
							>
								{t("discoverProducts")}
							</Link>
						</div>
						<div className="rounded-3xl overflow-hidden">
							<Image
								src="/images/products/kraft.jpg"
								alt="Kraft paper sacks"
								width={800}
								height={534}
								className="w-full h-auto"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Customers Section */}
			<section className="bg-gray-100 py-20 rounded-t-3xl -mt-6 relative z-40">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl md:text-5xl font-bold text-[#333333] text-center mb-6">
						{t("ourCustomers")}
					</h2>
					<p className="text-lg text-[#333333] text-center mb-16 max-w-3xl mx-auto">
						{t("customerDescription")}
					</p>

					{/* Customer Logos Grid */}
					<CustomerLogosGrid customerLogos={customerLogos} />
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="bg-white py-20 rounded-t-3xl -mt-6 relative z-50">
				<div className="container mx-auto px-4">
					<TestimonialsCarousel currentLang={currentLang} />
				</div>
			</section>

			{/* Reasons Section */}
			<section className="bg-white py-20 rounded-t-3xl -mt-6 relative z-60">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl md:text-5xl font-bold text-[#333333] text-center mb-16">
						{t("reasonsTitle")}
					</h2>

					<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
						<div className="bg-red-600 text-white rounded-2xl overflow-hidden">
							<div className="p-8">
								<h3 className="text-2xl font-bold mb-6">
									{t("customerFocus")}
								</h3>
								<p className="text-lg leading-relaxed mb-6">
									{t("customerFocusDescription")}
								</p>
								<Link
									href={`/${currentLang}/product-sectors`}
									className="inline-block text-white underline hover:no-underline transition-all"
								>
									{t("industriesWeServe")}
								</Link>
							</div>
							<div className="h-64 relative">
								<Image
									src="/images/customer-foc.jpeg"
									alt="Customer focus"
									fill
									className="object-cover rounded-b-2xl"
								/>
							</div>
						</div>

						<div className="bg-red-600 text-white rounded-2xl overflow-hidden">
							<div className="p-8">
								<h3 className="text-2xl font-bold mb-6">
									{t("qualityInnovation")}
								</h3>
								<p className="text-lg leading-relaxed mb-6">
									{t("qualityInnovationDescription")}
								</p>
								<Link
									href={`/${currentLang}/sustainability`}
									className="inline-block text-white underline hover:no-underline transition-all"
								>
									{t("learnSustainability")}
								</Link>
							</div>
							<div className="h-64 relative">
								<Image
									src="/images/quality-innovation.webp"
									alt="Quality innovation"
									fill
									className="object-cover rounded-b-2xl"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Final CTA Section */}
			<section className="bg-red-600 py-20 rounded-t-3xl -mt-6 relative z-70">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
						{t("readyToEnhance")}
					</h2>
					<Link
						href={`/${currentLang}/contacts`}
						className="inline-block bg-[#333333] hover:bg-[#333333]/80 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
					>
						{t("contactUs")}
					</Link>
				</div>
			</section>
		</div>
	);
}
