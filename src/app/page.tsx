import GroupCompanies from "@/components/group-companies";

export default function Home() {
	return (
		<div className="min-h-screen">
			<div
				className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: "url('/hero-image.jpeg')",
				}}
			>
				<div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mb-[15%]">
					<h1 className="text-4xl md:text-6xl font-bold mb-4">
						Kaliteli Torba, Güvenilir Üretim
					</h1>
					<h2 className="text-xl md:text-2xl font-medium">
						Endüstriyel Kağıt Torba Çözümlerinde Gücünüzü Artırın
					</h2>
				</div>
			</div>

			{/* Additional content sections can go here */}
			<div className="mx-auto px-4 py-16 text-center text-lg bg-red-500 rounded-b-2xl">
				<p className="w-1/2 mx-auto text-white">
					Ağzı açık veya valfli, çok katlı, lamine ve altıgen dipli torba
					üretiminde; çimento, yapı kimya, gıda ve maden sektörlerine özel
					çözümler sunuyoruz.
				</p>
				{/*<p>
					Sürekli gelişen Ar-Ge çalışmalarımız ve yüksek kalite
					standartlarımızla; sektörünüzün ihtiyaçlarına özel, dayanıklı ve
					güvenilir kağıt torba çözümleri sunuyoruz.
				</p>*/}
			</div>
			<div className="mx-auto px-4 py-16 text-center text-lg">
				<h2 className="text-2xl font-bold mb-4">Grup Şirketlerimiz</h2>
				<p className="mb-4">
					KAVİ Grup olarak kağıt sektörü dışında da faaliyet gösteren
					şirketlerimiz.
				</p>
				<GroupCompanies />
			</div>
		</div>
	);
}
