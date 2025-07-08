"use client";

import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { type Language, getTranslation } from "@/lib/i18n";
import Image from "next/image";

interface FooterProps {
	currentLang: Language;
}

export default function Footer({ currentLang }: FooterProps) {
	const t = (key: string) => getTranslation(currentLang, key);

	return (
		<footer className="bg-[#333333] text-white py-16 rounded-t-lg">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Company Info */}
					<div className="lg:col-span-2">
						<Image
							src="/logo-black.webp"
							alt="ADAKA Logo"
							width={250}
							height={300}
							className="mb-4 "
						/>

						<p className="text-gray-300 mb-6 max-w-md text-sm">
							{t("customerDescription")}
						</p>
						<p className="text-gray-300 mb-6 max-w-md text-sm">
							Şahin, 33400 Tarsus/Mersin <br />
							Türkiye
						</p>
						<p className="text-gray-300 mb-6 max-w-md">Tel. (0324) 651 53 53</p>
						<p className="text-gray-300 mb-6 max-w-md">info@adaka.com.tr</p>
					</div>

					{/* Products Section */}
					<div>
						<h4 className="text-lg font-semibold text-white mb-4 text-right">
							{t("products")}
						</h4>
						<ul className="space-y-3 text-right">
							<li>
								<Link
									href={`/${currentLang}/products/valve-sacks`}
									className="text-gray-300 hover:text-green-600 transition-colors"
								>
									{t("valveSacks")}
								</Link>
							</li>
							<li>
								<Link
									href={`/${currentLang}/products/open-mouth-sacks`}
									className="text-gray-300 hover:text-green-600 transition-colors"
								>
									{t("openMouthSacks")}
								</Link>
							</li>
							<li>
								<Link
									href={`/${currentLang}/products#innovation`}
									className="text-gray-300 hover:text-green-600 transition-colors"
								>
									Innovation and development
								</Link>
							</li>
							<li>
								<Link
									href={`/${currentLang}/sustainability`}
									className="text-gray-300 hover:text-green-600 transition-colors"
								>
									{t("sustainability")}
								</Link>
							</li>
						</ul>
					</div>

					{/* Info Section */}
					<div>
						<h4 className="text-lg font-semibold text-white mb-4 text-right">
							{t("info")}
						</h4>
						<ul className="space-y-3 text-right">
							<li>
								<Link
									href="mailto:info@adaka.com.tr"
									className="text-gray-300 hover:text-gray-300 transition-colors"
								>
									{t("workForUs")}
								</Link>
							</li>
							<li>
								<Link
									href={`/${currentLang}/contacts`}
									className="text-gray-300 hover:text-gray-300 transition-colors"
								>
									{t("contactUs")}
								</Link>
							</li>
							<li>
								<Link
									href={`/${currentLang}/sustainability#certifications`}
									className="text-gray-300 hover:text-gray-300 transition-colors"
								>
									{t("certifications")}
								</Link>
							</li>
							<li>
								<Link
									href={`/${currentLang}/cookie-policy`}
									className="text-gray-300 hover:text-gray-300 transition-colors"
								>
									{t("cookiePolicy")}
								</Link>
							</li>
							<li>
								<Link
									href={`/${currentLang}/privacy-policy`}
									className="text-gray-300 hover:text-gray-300 transition-colors"
								>
									{t("privacyPolicy")}
								</Link>
							</li>
							<li>
								<Link
									href="/documents/general-conditions.pdf"
									target="_blank"
									className="text-gray-300 hover:text-gray-300 transition-colors text-sm"
								>
									{t("generalConditions")}
								</Link>
							</li>
						</ul>

						{/* Social Media */}
						<div className="flex justify-end space-x-4 mt-8">
							<Link
								href="https://www.instagram.com"
								target="_blank"
								rel="noreferrer"
								className="w-10 h-10 bg-gray-700 hover:bg-gray-300 text-white rounded-full flex items-center justify-center transition-colors"
							>
								<Instagram className="w-5 h-5" />
							</Link>
							<Link
								href="https://www.linkedin.com/in/adaka-adana-ka%C4%9Fit-san-tic-a-%C5%9F-63805647/"
								target="_blank"
								rel="noreferrer"
								className="w-10 h-10 bg-gray-700 hover:bg-gray-200 text-white rounded-full flex items-center justify-center transition-colors"
							>
								<Linkedin className="w-5 h-5" />
							</Link>
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-gray-300 mt-12 pt-8">
					<div className="text-center text-gray-300 text-sm">
						<p>
							&copy; 2024 ADAKA Adana Kağıt San. Tic. A.Ş. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
