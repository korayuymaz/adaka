"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { languages, type Language, getTranslation } from "@/lib/i18n";

interface HeaderProps {
	currentLang: Language;
}

export default function Header({ currentLang }: HeaderProps) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isProductsOpen, setIsProductsOpen] = useState(false);

	const t = (key: string) => getTranslation(currentLang, key);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<>
			{/* Language Switcher Bar */}
			<div className="bg-zinc-800 text-white py-2 px-4">
				<div className="container mx-auto flex justify-end">
					<div className="flex space-x-4 text-sm">
						{Object.keys(languages).map((lang) => (
							<Link
								key={lang}
								href={`/${lang}`}
								className={`hover:text-green-400 transition-colors ${
									currentLang === lang ? "text-green-400 font-semibold" : ""
								}`}
							>
								{lang.toUpperCase()}
							</Link>
						))}
					</div>
				</div>
			</div>

			{/* Main Header */}
			<header className="bg-white shadow-lg relative z-50">
				<div className="container mx-auto px-4">
					<div className="flex items-center justify-between h-20">
						{/* Logo */}
						<Link href={`/${currentLang}`} className="flex-shrink-0">
							<Image
								src="/images/adakalogo.jpeg"
								alt="ADAKA"
								width={300}
								height={80}
								className="h-12 w-auto max-w-none lg:m-[0px] lg:py-[0px] lg:px-[50px]"
								priority
							/>
						</Link>

						{/* Desktop Navigation */}
						<nav className="hidden lg:flex items-center space-x-8">
							<Link
								href={`/${currentLang}/company`}
								className="text-gray-700 hover:text-red-600 font-medium transition-colors"
							>
								{t("company")}
							</Link>

							{/* Products Dropdown */}
							<div className="relative group">
								<button
									className="flex items-center space-x-1 text-gray-700 hover:text-red-600 font-medium transition-colors"
									onClick={() => setIsProductsOpen(!isProductsOpen)}
								>
									<span>{t("products")}</span>
									<ChevronDown className="w-4 h-4" />
								</button>
								<div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg border min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
									<Link
										href={`/${currentLang}/products/valve-sacks`}
										className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
									>
										{t("valveSacks")}
									</Link>
									<Link
										href={`/${currentLang}/products/open-mouth-sacks`}
										className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
									>
										{t("openMouthSacks")}
									</Link>
								</div>
							</div>

							<Link
								href={`/${currentLang}/product-sectors`}
								className="text-gray-700 hover:text-red-600 font-medium transition-colors"
							>
								{t("productSectors")}
							</Link>

							<Link
								href={`/${currentLang}/sustainability`}
								className="text-gray-700 hover:text-red-600 font-medium transition-colors"
							>
								{t("sustainability")}
							</Link>

							{/* Contact Button */}
							<Link
								href={`/${currentLang}/contacts`}
								className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
							>
								{t("contactUs")}
							</Link>
						</nav>

						{/* Mobile Menu Button */}
						<button
							className="lg:hidden p-2 text-gray-700 hover:text-red-600 transition-colors"
							onClick={toggleMobileMenu}
						>
							{isMobileMenuOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</button>
					</div>

					{/* Mobile Menu */}
					{isMobileMenuOpen && (
						<div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
							<div className="px-4 py-2">
								<Link
									href={`/${currentLang}/company`}
									className="block py-3 text-gray-700 hover:text-red-600 font-medium transition-colors border-b"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									{t("company")}
								</Link>

								<div className="border-b">
									<button
										className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-red-600 font-medium transition-colors"
										onClick={() => setIsProductsOpen(!isProductsOpen)}
									>
										<span>{t("products")}</span>
										<ChevronDown
											className={`w-4 h-4 transform transition-transform ${
												isProductsOpen ? "rotate-180" : ""
											}`}
										/>
									</button>
									{isProductsOpen && (
										<div className="pl-4 pb-2">
											<Link
												href={`/${currentLang}/products/valve-sacks`}
												className="block py-2 text-gray-600 hover:text-red-600 transition-colors"
												onClick={() => setIsMobileMenuOpen(false)}
											>
												{t("valveSacks")}
											</Link>
											<Link
												href={`/${currentLang}/products/open-mouth-sacks`}
												className="block py-2 text-gray-600 hover:text-red-600 transition-colors"
												onClick={() => setIsMobileMenuOpen(false)}
											>
												{t("openMouthSacks")}
											</Link>
										</div>
									)}
								</div>

								<Link
									href={`/${currentLang}/product-sectors`}
									className="block py-3 text-gray-700 hover:text-red-600 font-medium transition-colors border-b"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									{t("productSectors")}
								</Link>

								<Link
									href={`/${currentLang}/sustainability`}
									className="block py-3 text-gray-700 hover:text-red-600 font-medium transition-colors border-b"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									{t("sustainability")}
								</Link>

								<div className="pt-4 pb-2">
									<Link
										href={`/${currentLang}/contacts`}
										className="block w-full text-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
										onClick={() => setIsMobileMenuOpen(false)}
									>
										{t("contactUs")}
									</Link>
								</div>
							</div>
						</div>
					)}
				</div>
			</header>
		</>
	);
}
