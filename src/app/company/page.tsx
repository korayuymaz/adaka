import Image from "next/image";

const Company = () => {
	return (
		<div className="min-h-screen bg-white">
			<section className="bg-red-500 text-white py-20 rounded-b-2xl">
				<div className="container mx-auto px-4">
					<p className="text-xl md:text-2xl max-w-3xl">
						2015 yılından beri, yenilikçi, çevre dostu ve etkili ambalaj
						geliştirmeye odaklanıyoruz.
					</p>
				</div>
			</section>

			{/* Company Story */}
			<section className="py-20 rounded-b-2xl">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-6">
								ADAKA'nın Hikayesi
							</h2>
							<div className="space-y-6 text-lg text-gray-700">
								<p>
									ADAKA Adana Kağıt San. ve Tic. A.Ş. Zeki KAVİ, Ferhat KAVİ,
									Feridun KAVİ, Hakan KAVİ ortaklığı olan Hasan Kavi Petrol
									Ürünleri Turizm Tic. ve San. A.Ş., Serdar Emir ERGEZ ve
									Süleyman ÇAKIRBEY iştirakiyle, 10.000 m2’si kapalı alan olmak
									üzere toplam 30.000 m2 arazi üzerine 21 Mayıs 2014 tarihinde
									kurulmuş, aynı yılın kasım ayında faaliyete geçerek
									Türkiye’deki kraft kağıt torba üreticileri arasında yerini
									almıştır..
								</p>
								<p>
									İşletmede sanayinin çeşitli sektörlerinin ihtiyaç duyduğu
									çimento, kireç, yapı ürünleri, maden, kimya, gıda ve tohum
									torbaları; ithal edilen esmer kraft ve beyaz kraft kağıttan 5
									kat ve 6 renk de baskıyla dışı beyaz, ara katlarda
									polietilenli değişik ölçü ve özelliklere sahip sanayi tipi
									torbalar olarak imal edilmekte, dış pazarda da çeşitli
									ülkelere ihraç edilmektedir. Fabrikanın yıllık kapasitesi 200
									000 000 adettir. Fabrikamızın ürün kalitesini artırmak ve
									maliyetleri düşürmek amacıyla yapılan yatırım planları hızla
									hayata geçirilmektedir.
								</p>
							</div>
						</div>
						<div className="rounded-2xl overflow-hidden">
							<Image
								src="/factory-images/inside-factory.jpeg"
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
			<section className="bg-gray-100 py-20 rounded-b-2xl">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold text-red-500 text-center mb-16">
						Our Values
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-white p-8 rounded-2xl shadow-sm text-center">
							<div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-white text-2xl font-bold">Q</span>
							</div>
							<h3 className="text-xl font-bold mb-4">Quality</h3>
							<p className="text-gray-600">
								We maintain the highest standards in all our products, ensuring
								reliability and durability for our customers.
							</p>
						</div>
						<div className="bg-white p-8 rounded-2xl shadow-sm text-center">
							<div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-white text-2xl font-bold">I</span>
							</div>
							<h3 className="text-xl font-bold mb-4">Innovation</h3>
							<p className="text-gray-600">
								Continuous investment in research and development drives our
								innovative packaging solutions.
							</p>
						</div>
						<div className="bg-white p-8 rounded-2xl shadow-sm text-center">
							<div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-white text-2xl font-bold">S</span>
							</div>
							<h3 className="text-xl font-bold mb-4">Sustainability</h3>
							<p className="text-gray-600">
								Environmental responsibility is at the core of our manufacturing
								processes and product development.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Manufacturing Excellence */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="rounded-2xl overflow-hidden">
							<div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500">
								Manufacturing Process Image
							</div>
						</div>
						<div>
							<h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-6">
								Manufacturing Excellence
							</h2>
							<div className="space-y-6 text-lg text-gray-700">
								<p>
									Our state-of-the-art manufacturing facilities are equipped
									with the latest technology to ensure precision and efficiency
									in every product we create.
								</p>
								<p>
									We employ rigorous quality control measures at every stage of
									production, from raw material selection to final packaging.
								</p>
								<p>
									Our experienced team of professionals brings decades of
									expertise to deliver packaging solutions that exceed industry
									standards.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Company;
