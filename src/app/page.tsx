import ContactPannel from "@/components/contact-pannel";
import GroupCompanies from "@/components/group-companies";
import Image from "next/image";
import Link from "next/link";

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
			<div className="mx-auto px-4 py-16 text-center text-lg bg-[#333333] rounded-b-2xl">
				<p className="w-1/2 mx-auto text-white">
					Ağzı açık veya valfli, çok katlı, lamine ve altıgen dipli torba
					üretiminde; çimento, yapı kimya, gıda ve maden sektörlerine özel
					çözümler sunuyoruz.
				</p>
			</div>
			<div className="flex flex-row gap-20 px-20 py-10 bg-white rounded-b-2xl">
				<div className="text-left text-[#333333] w-1/2">
					<h2 className="text-lg font-bold mb-4">
						Sektöre Özel Endüstriyel Kağıt Torba Çözümleri
					</h2>
					{/*<p>
						We specialise in the production of hexagonal-base, high-capacity
						<br />
						industrial paper sacks with valve or open-mouth designs — serving
						<br />
						sectors like cement, chemicals, food, and minerals.
					</p>*/}
					<p>
						Altıgen tabanlı, yüksek kapasiteli valfli veya ağzı açık endüstriyel
						<br />
						kağıt torbalar üretiminde uzmanız — çimento, kimya, gıda ve maden
						<br />
						gibi sektörlere hizmet vermekteyiz.
					</p>
					<button className="bg-red-500 text-white px-4 py-2 rounded-md mt-10">
						<Link href="/products">Ürünlerimiz</Link>
					</button>
				</div>
				<div className="w-1/2 flex items-center justify-end">
					<Image
						src="/factory-images/inside-factory-1.png"
						alt="KAVİ Group"
						width={500}
						height={500}
						className="object-cover rounded-lg"
					/>
				</div>
			</div>
			<div className="mx-auto py-16 text-center text-lg">
				<h2 className="text-2xl font-bold mb-4">Grup Şirketlerimiz</h2>
				<p className="mb-4">
					KAVİ Grup olarak kağıt sektörü dışında da faaliyet gösteren
					şirketlerimiz.
				</p>
				<GroupCompanies />
			</div>
			<div className="mx-auto py-8 text-center text-lg">
				<h2 className="text-2xl font-bold mb-4">
					Farkımızı Keşfedin (Under Construction)
				</h2>
				<div className="flex flex-row gap-20 px-20">
					<div className="w-1/2 bg-[#333333] rounded-lg pt-10 text-white">
						<h3 className="text-xl font-bold mb-4 px-4 text-left">
							Kaliteli Torba, Güvenilir Üretim
						</h3>
						<p className="px-4 text-left">
							KAVİ Grup olarak kağıt sektörü dışında da faaliyet gösteren
							şirketlerimiz.
						</p>
						<Image
							src="/factory-images/inside-factory-2.jpg"
							alt="KAVİ Group"
							width={500}
							height={500}
							className="object-cover rounded-lg w-full pt-20"
						/>
					</div>
					<div className="w-1/2 bg-[#333333] rounded-lg pt-10 text-white">
						<h3 className="text-xl font-bold mb-4 px-4 text-left">
							Kaliteli Torba, Güvenilir Üretim
						</h3>
						<p className="px-4 text-left">
							KAVİ Grup olarak kağıt sektörü dışında da faaliyet gösteren
							şirketlerimiz.
						</p>
						<Image
							src="/factory-images/inside-factory-2.jpg"
							alt="KAVİ Group"
							width={500}
							height={500}
							className="object-cover rounded-lg w-full pt-20"
						/>
					</div>
				</div>
			</div>
			<div className="mx-auto text-center text-lg">
				<ContactPannel />
			</div>
		</div>
	);
}
