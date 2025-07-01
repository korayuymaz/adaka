"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type Language, getTranslation } from "@/lib/i18n";
import { useCallback } from "react";

interface TestimonialsCarouselProps {
	currentLang: Language;
}

export default function TestimonialsCarousel({
	currentLang,
}: TestimonialsCarouselProps) {
	const t = (key: string) => getTranslation(currentLang, key);

	const testimonials = [
		{
			quote: t("testimonialCimko"),
			author: "Çimko Çimento",
		},
		{
			quote: t("testimonialCimsa"),
			author: "Çimsa Çimento",
		},
		{
			quote: t("testimonialAkcansa"),
			author: "Akçansa Çimento",
		},
		{
			quote: t("testimonialSisecam"),
			author: "Şişecam Grup",
		},
		{
			quote: t("testimonialBekaert"),
			author: "Bekaert Türkiye",
		},
		{
			quote: t("testimonialMatkim"),
			author: "Matkim İskenderun",
		},
	];

	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			loop: true,
			align: "start",
			slidesToScroll: 1,
			breakpoints: {
				"(min-width: 768px)": { slidesToScroll: 1 },
				"(min-width: 1024px)": { slidesToScroll: 1 },
			},
		},
		[AutoPlay({ delay: 6000, stopOnInteraction: false })]
	);

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<div className="relative max-w-6xl mx-auto">
			<div className="overflow-hidden" ref={emblaRef}>
				<div className="flex">
					{testimonials.map((testimonial) => (
						<div
							key={`testimonial-${testimonial.author.split(" ")[0]}`}
							className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4"
						>
							<div className="bg-red-600 text-white p-8 rounded-2xl h-full mx-2">
								<h3 className="text-xl font-bold mb-6">{t("whatPeopleSay")}</h3>
								<blockquote className="text-lg mb-6 leading-relaxed">
									{testimonial.quote}
								</blockquote>
								<cite className="text-sm opacity-90">{testimonial.author}</cite>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Navigation Arrows */}
			<button
				className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
				onClick={scrollPrev}
				aria-label="Previous testimonial"
			>
				<ChevronLeft className="w-6 h-6" />
			</button>

			<button
				className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
				onClick={scrollNext}
				aria-label="Next testimonial"
			>
				<ChevronRight className="w-6 h-6" />
			</button>
		</div>
	);
}
