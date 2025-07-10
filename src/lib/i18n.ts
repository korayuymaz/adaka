import { durationSinceMay2014 } from "./calculate-since";

export const languages = {
	tr: "Türkçe",
	it: "Italiano",
	en: "English",
	de: "Deutsch",
	fr: "Français",
	es: "Español",
	el: "Ελληνικά",
	ru: "Русский",
	ar: "العربية",
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = "tr";

export const translations = {
	tr: {
		// Navigation
		company: "Şirket",
		products: "Ürünler",
		productSectors: "Ürün sektörleri",
		sustainability: "Sürdürülebilirlik",
		contacts: "İletişim",
		valveSacks: "Valfli torbalar",
		openMouthSacks: "Açık ağızlı torbalar",
		info: "Bilgi",

		// Hero
		heroTitle: "Ürünlerinizin\nGüvenliği",
		heroSubtitle: "Her ihtiyaç için bir çözüm",

		// Content
		companyDescription: `${durationSinceMay2014} yılı aşkın süredir korumak ve muhafaza etmek için yenilikçi, çevre dostu ve etkili kraft torba geliştiriyor ve tedarik ediyoruz.`,
		packagingTitle: "KRAFT KAĞIT TORBALAR",
		kraftSacksTitle: "Kraft kağıt torbalar",
		kraftSacksDescription:
			"Hem valfli hem de açık ağızlı büyük kapasiteli endüstriyel torba üretiminde uzmanlaştık.",
		discoverProducts: "Ürünleri keşfedin",
		ourCustomers: "Müşterilerimiz",
		customerDescription:
			"ADAKA güvenilir, saygın bir pazar oyuncusudur ve uluslararası prestije sahip bir müşteri kitlesine hizmet vermektedir.",

		// Testimonials
		whatPeopleSay: "İnsanlar hakkımızda ne diyor",
		testimonialCimko:
			'"ADAKA\'nın yüksek kaliteli kraft torbaları, çimento üretim sürecimizin ayrılmaz bir parçası. Güvenilir tedarik ve zamanında teslimat konusunda mükemmel performans sergiliyorlar"',
		testimonialCimsa:
			'"ADAKA ile kurduğumuz iş birliği, endüstriyel ambalajlama alanında bize büyük avantajlar sağlıyor. Profesyonel yaklaşımları ve çözüm odaklı hizmetleri takdire şayan"',
		testimonialAkcansa:
			'"Ağır yük taşıma kapasitesi gerektiren ürünlerimiz için ADAKA\'nın dayanıklı kraft torbaları ideal çözüm. Kalite standartları gerçekten yüksek"',
		testimonialSisecam:
			'"Cam endüstrisi özel gereksinimlerimiz için ADAKA\'nın geliştirdiği özel kraft torba çözümleri çok değerli. Teknik destek ve hizmet kaliteleri mükemmel"',
		testimonialBekaert:
			'"Endüstriyel tel ürünlerimizin ambalajlanmasında ADAKA ile uzun yıllardır başarılı bir ortaklık sürdürüyoruz. Güvenilirlik ve kalite konusunda standartları çok yüksek"',
		testimonialMatkim:
			'"İnşaat kimyasalları sektöründe faaliyet gösteren şirketimiz için ADAKA\'nın özel kraft torba çözümleri vazgeçilmez. Uzun vadeli ortaklığımızdan çok memnunuz"',

		// Reasons
		reasonsTitle: "Bizi seçme nedenleri",
		customerFocus: "Müşteri odaklılık",
		customerFocusDescription:
			"Teslimat sürelerinde esneklik sunuyoruz. Zorlu durumlara hızlı çözümler ve uzman satış sonrası hizmetle yanıt veriyoruz. Her müşteriyi memnun etmek için sürekli çaba gösteriyoruz.",
		industriesWeServe: "Hizmet verdiğimiz endüstriler",

		// Footer
		workForUs: "Bizimle çalışın",
		contactUs: "Bize ulaşın",
		certifications: "Sertifikalar",
		cookiePolicy: "Çerez Politikası",
		privacyPolicy: "Gizlilik Politikası",
		generalConditions:
			"Büyük kapasiteli kağıt torbalara uygulanabilir genel satış koşulları",

		// Company Page
		ourStory: "Hikayemiz",
		companyStoryText1:
			"ADAKA Adana Kağıt San. ve Tic. A.Ş. Zeki KAVİ, Ferhat KAVİ, Feridun KAVİ, Hakan KAVİ ortaklığı olan Hasan Kavi Petrol Ürünleri Turizm Tic. ve San. A.Ş., Serdar Emir ERGEZ ve Süleyman ÇAKIRBEY iştirakiyle, 10.000 m2’si kapalı alan olmak üzere toplam 30.000 m2 arazi üzerine 21 Mayıs 2014 tarihinde kurulmuş, aynı yılın kasım ayında faaliyete geçerek Türkiye’deki kraft kağıt torba üreticileri arasında yerini almıştır.",
		companyStoryText2: `İşletmede sanayinin çeşitli sektörlerinin ihtiyaç duyduğu
			çimento, kireç, yapı ürünleri, maden, kimya, gıda ve tohum
			torbaları; ithal edilen esmer kraft ve beyaz kraft kağıttan 5
			kat ve 6 renk de baskıyla dışı beyaz, ara katlarda
			polietilenli değişik ölçü ve özelliklere sahip sanayi tipi
			torbalar olarak imal edilmekte, dış pazarda da çeşitli	
			ülkelere ihraç edilmektedir. `,
		companyStoryText3: `Fabrikanın yıllık kapasitesi 200
			000 000 adettir. Fabrikamızın ürün kalitesini artırmak ve
			maliyetleri düşürmek amacıyla yapılan yatırım planları hızla
			hayata geçirilmektedir.`,
		ourValues: "Değerlerimiz",
		quality: "Kalite",
		qualityDescription:
			"Tüm ürünlerimizde en yüksek standartları koruyarak müşterilerimiz için güvenilirlik ve dayanıklılık sağlıyoruz.",
		innovation: "İnovasyon",
		innovationDescription:
			"Araştırma ve geliştirmeye sürekli yatırım, yenilikçi kraft torba çözümlerimizi yönlendirir.",
		sustainabilityShort: "Sürdürülebilirlik",
		sustainabilityDescription:
			"Çevresel sorumluluk, üretim süreçlerimizin ve ürün geliştirmemizin merkezindedir.",
		manufacturingExcellence: "Üretim Mükemmelliği",
		manufacturingText1:
			"Son teknoloji üretim tesislerimiz, yarattığımız her üründe hassasiyet ve verimlilik sağlamak için en son teknolojiyle donatılmıştır.",
		manufacturingText2:
			"Hammadde seçiminden son ambalajlamaya kadar üretimin her aşamasında titiz kalite kontrol önlemleri uyguluyoruz.",
		manufacturingText3:
			"Deneyimli profesyonel ekibimiz, endüstri standartlarını aşan kraft torba çözümleri sunmak için onlarca yıllık uzmanlık getirir.",

		// Products Page
		valveSacksDescription:
			"Valfli torbalarımız verimli doldurma ve güvenli kapama için tasarlanmıştır. Toz ve granül malzemeler için mükemmel olan bu torbalar mükemmel koruma ve kolay kullanım sağlar.",
		openMouthSacksDescription:
			"Açık ağızlı torbalarımız geniş bir uygulama yelpazesi için çok yönlülük ve güvenilirlik sunar. Doldurmasi ve mühürlemesi kolay olan bu torbalar çeşitli malzemeler için mükemmel koruma sağlar.",
		highStrengthConstruction: "Yüksek mukavemetli kraft kağıt yapısı",
		automaticFillingCompatibility: "Otomatik doldurma uyumluluğu",
		dustTightClosure: "Toz geçirmez kapama sistemi",
		customizableSizes: "Özelleştirilebilir boyutlar ve özellikler",
		durableMultiLayer: "Dayanıklı çok katmanlı yapı",
		wideOpeningFilling: "Kolay doldurma için geniş açıklık",
		strongSealingCapabilities: "Güçlü mühürleme yetenekleri",
		availableVariousCapacities: "Çeşitli kapasitelerde mevcuttur",
		learnMore: "Daha Fazla Bilgi",
		continuousInnovation: "Sürekli İnovasyon",
		innovationText1:
			"ADAKA'da inovasyon yaptığımız her şeyi yönlendirir. Özel Ar-Ge ekibimiz, müşterilerimizin ve endüstrinin gelişen ihtiyaçlarını karşılamak için sürekli olarak yeni kraft torba çözümleri geliştirir.",
		innovationText2:
			"Ürünlerinizi koruyan aynı zamanda çevresel sorumluluğu destekleyen kraft torbalar yaratmak için son teknoloji ve sürdürülebilir malzemelere yatırım yapıyoruz.",
		innovationText3:
			"İnovasyon odak alanlarımız arasında gelişmiş bariyer özellikler, geliştirilmiş sürdürülebilirlik ve optimize edilmiş üretim verimliliği bulunmaktadır.",
		applications: "Uygulamalar",
		construction: "İnşaat",
		constructionProducts: "Çimento, alçı, harç",
		food: "Gıda",
		foodProducts: "Un, şeker, yem",
		chemicals: "Kimyasallar",
		chemicalProducts: "Tozlar, granüller",
		agriculture: "Tarım",
		agricultureProducts: "Tohum, gübreler",
		readyToEnhanceValveSacks:
			"Valfli torbalarınızı geliştirmeye hazır mısınız?",
		readyToEnhanceValveSacksDescription:
			"Bizimle iletişime geçin ve valfli torbalarınızı geliştirmek için nasıl destekleyebileceğimizi keşfedin.",
		readyToEnhanceOpenMouthSacks:
			"Açık ağızlı torbalarınızı geliştirmeye hazır mısınız?",
		readyToEnhanceOpenMouthSacksDescription:
			"Bizimle iletişime geçin ve açık ağızlı torbalarınızı geliştirmek için nasıl destekleyebileceğimizi keşfedin.",

		// Sustainability Page
		environmentalCommitment: "Çevresel Bağlılığımız",
		sustainabilityText1:
			"ADAKA'te sürdürülebilirlik sadece bir slogan değil - işletme operasyonlarımızın her yönünü yönlendiren temel bir ilkedir. Yüksek kaliteli kraft torba çözümleri sunarken çevresel etkimizi en aza indirmeye kararlıyız.",
		sustainabilityText2:
			"Kraft kağıt torbalarımız yenilenebilir kaynaklardan yapılır ve tamamen geri dönüştürülebilir olup döngüsel ekonomiyi destekler ve kraft torba endüstrisindeki atığı azaltır.",
		sustainabilityText3:
			"Ürünlerimizin en yüksek çevresel standartları karşılamasını sağlamak için daha temiz üretim teknolojilerine ve sürdürülebilir hammaddelere sürekli yatırım yapıyoruz.",
		sustainabilityInitiatives: "Sürdürülebilirlik Girişimlerimiz",
		recyclableMaterials: "Geri Dönüştürülebilir Malzemeler",
		recyclableDescription:
			"Yeni ürünlere dönüştürülebilen, atık azaltımını destekleyen %100 geri dönüştürülebilir kraft kağıt torbalar.",
		renewableResources: "Yenilenebilir Kaynaklar",
		renewableDescription:
			"Kraft kağıdımız sürdürülebilir şekilde yönetilen ormanlardan ve yenilenebilir odun lifi kaynaklarından temin edilir.",
		energyEfficiency: "Enerji Verimliliği",
		energyDescription:
			"Mümkün olduğunca enerji verimli makineler ve yenilenebilir enerji kaynakları ile modern üretim tesisleri.",
		zeroWasteGoals: "Sıfır Atık Hedefleri",
		zeroWasteDescription:
			"Operasyonlarımızda atığı en aza indirmek ve kaynak verimliliğini maksimize etmek için döngüsel ekonomi ilkelerini uygulama.",
		carbonFootprint: "Karbon Ayak İzi",
		carbonDescription:
			"Tedarik zincirimiz boyunca karbon emisyonlarını azaltmak için lojistik ve taşımacılığı optimize etme.",
		innovationSustainable: "İnovasyon",
		innovationSustainableDescription:
			"Biyolojik olarak parçalanabilen malzemeler ve çevre dostu üretim süreçlerine sürekli Ar-Ge.",
		fdaApproved: "FDA Onaylı",
		fdaDescription: "Gıda ile temas için güvenli malzemeler",
		gmpCompliant: "GMP Uyumlu",
		gmpDescription: "İyi Üretim Uygulamaları",
		brcCertified: "BRC Sertifikalı",
		brcDescription: "İngiliz Perakende Konsorsiyumu standartları",
		haccpSystem: "HACCP Sistemi",
		haccpDescription: "Tehlike Analizi Kritik Kontrol Noktaları",
		our2030Goals: "2030 Sürdürülebilirlik Hedeflerimiz",
		carbonReduction: "Karbon emisyonlarında azalma",
		renewableEnergyGoal: "Üretim için yenilenebilir enerji kaynakları",
		zeroLandfill: "Düzenli depolama alanına gönderilen atık",

		// Contact Page
		getInTouch:
			"Tüm kraft torba ihtiyaçlarınız için ekibimizle iletişime geçin",
		contactInformation: "İletişim Bilgileri",
		headOffice: "Genel Merkez",
		phone: "Telefon",
		email: "E-posta",
		businessHours: "Çalışma Saatleri",
		mondayFriday: "Pazartesi - Cuma: 08:00 - 18:00",
		saturday: "Cumartesi: 08:00 - 12:00",
		sunday: "Pazar: Kapalı",
		sendMessage: "Bize Mesaj Gönderin",
		ourLocation: "Konumumuz",
		mapPlaceholder: "İnteraktif Harita Yer Tutucu\nAdana, Türkiye",

		// Contact Form
		name: "Ad Soyad",
		companyName: "Şirket Adı",
		emailAddress: "E-posta Adresi",
		phoneNumber: "Telefon Numarası",
		subject: "Konu",
		message: "Mesaj",
		sendMessageButton: "Mesajı Gönder",
		formSuccess: "Mesajınız başarıyla gönderildi!",
		formError: "Mesaj gönderilirken hata oluştu. Lütfen tekrar deneyin.",

		// Product Sectors
		servingDiverseIndustries: "Çeşitli Endüstrilere Hizmet",
		productSectorsIntro: `${durationSinceMay2014} yılı aşkın süredir ADAKA, geniş bir endüstri yelpazesine özel kraft torba çözümleri sağlamaktadır. Kraft kağıt torbalarımız her sektörün benzersiz gereksinimlerini karşılayacak şekilde tasarlanmış olup ürünleriniz için optimal koruma, kullanım ve depolama sağlar.`,
		constructionMaterials: "İnşaat Malzemeleri",
		constructionDescription:
			"Çimento, alçı, harç, yapıştırıcı ve yapı bileşikleri",
		constructionApplications:
			"Portland çimentosu, Alçı, Fayans yapıştırıcıları, Kuru harçlar, Duvar bileşikleri",
		foodAgriculture: "Gıda ve Tarım",
		foodDescription:
			"Gıda bileşenleri, hayvan yemi, tarım ürünleri ve gübreler",
		foodApplications:
			"Un ve tahıllar, Şeker, Hayvan yemi, Tohumlar, Organik gübreler",
		chemicalIndustry: "Kimya Endüstrisi",
		chemicalDescription:
			"Endüstriyel kimyasallar, tozlar, granüller ve özel bileşikler",
		chemicalApplications:
			"Endüstriyel tuzlar, Deterjan tozları, Plastik granüller, Kimyasal tozlar, Katalizörler",
		miningMinerals: "Madencilik ve Mineraller",
		miningDescription:
			"Çıkarılan mineraller, cevherler ve işlenmiş madencilik ürünleri",
		miningApplications:
			"Kum ve agregalar, Kil ürünleri, Mineral tozları, Kireçtaşı, İşlenmiş cevherler",
		pharmaceutical: "İlaç",
		pharmaceuticalDescription:
			"İlaç üretimi için hammaddeler ve yardımcı maddeler",
		pharmaceuticalApplications:
			"Aktif bileşenler, Yardımcı maddeler, İlaç tozları, Toplu ilaçlar, Hammaddeler",
		recyclingWaste: "Geri Dönüşüm ve Atık",
		recyclingDescription:
			"Geri dönüştürülmüş malzemeler ve atık yönetimi ürünleri",
		recyclingApplications:
			"Geri dönüştürülmüş plastikler, Kağıt atığı, Metal talaşları, Kompost malzemeleri, Atık tozları",
		industrySpecificRequirements: "Sektöre Özel Kraft Torba Gereksinimleri",
		barrierProtection: "Bariyer Koruması",
		barrierDescription:
			"Kimyasallar ve ilaçlar gibi hassas malzemeler için nem, toz ve kontaminasyon koruması.",
		strengthDurability: "Mukavemet ve Dayanıklılık",
		strengthDescription:
			"Çimento, agregalar ve madencilik ürünleri gibi ağır malzemeler için yüksek çekme mukavemeti.",
		foodSafety: "Gıda Güvenliği",
		foodSafetyDescription:
			"Gıda bileşenleri ve tarım ürünleri için FDA onaylı malzemeler ve gıda sınıfı özellikler.",
		customSolutions: "Sektörünüz İçin Özel Çözümler",
		customSolutionsText:
			"Her endüstrinin benzersiz kraft torba gereksinimleri vardır. Uzman ekibimiz, özel ihtiyaçlarınızı karşılayan özelleştirilmiş çözümler geliştirmek için sizinle yakın çalışır.",
		customSolutionsFeatures:
			"Özel boyutlar ve kapasiteler, Özel bariyer özellikleri, Sektöre özel sertifikalar, Optimize edilmiş doldurma ve kullanım özellikleri, Sürdürülebilir malzeme seçenekleri",
		readyToDiscuss: "İhtiyaçlarınızı Görüşmeye Hazır mısınız?",
		readyToDiscussText:
			"Sektörünüzü özel kraft torba çözümleriyle nasıl destekleyebileceğimizi keşfetmek için teknik ekibimizle iletişime geçin.",
		qualityStandardsCompliance: "Kalite Standartları ve Uyumluluk",

		// Common UI Elements
		readyToEnhance: "Kraft torba çözümlerinizi geliştirmeye hazır mısınız?",
		readyToEnhanceDescription:
			"Bizimle iletişime geçin ve kraft torba çözümlerinizi geliştirmek için nasıl destekleyebileceğimizi keşfedin.",
		qualityInnovation: "Kalite ve İnovasyon",
		qualityInnovationDescription:
			"Uluslararası müşterilerimizin gelişen ihtiyaçlarını karşılayan son teknoloji kraft torba çözümleri sağlamak için araştırma ve geliştirmeye sürekli yatırım.",
		learnSustainability: "Sürdürülebilirlik yaklaşımımız hakkında bilgi edinin",
		companyFullName: "ADAKA Kağıt San. Tic. A.Ş.",

		// SEO
		homeTitle:
			"ADAKA Kağıt San. Tic. A.Ş. - Kraft Kağıt Torba Üreticisi | Türkiye",
		homeDescription: `${durationSinceMay2014} yıllık deneyimle kraft kağıt torba üretimi. Valfli ve açık ağızlı endüstriyel torbalar. Çimento, gıda, kimya sektörlerine özel kraft torba çözümleri.`,
		companyTitle: `Hakkımızda - ADAKA Kağıt San. Tic. A.Ş | ${durationSinceMay2014} Yıllık Deneyim`,
		companyMetaDescription: `ADAKA'nın ${durationSinceMay2014} yıllık kraft kağıt torba endüstrisi deneyimi, değerlerimiz ve üretim mükemmelliği hakkında bilgi edinin. Kalite, inovasyon ve sürdürülebilirlik odaklı yaklaşımımız.`,
		productsTitle:
			"Ürünlerimiz - Kraft Kağıt Torbalar | ADAKA Kağıt San. Tic. A.Ş.",
		productsMetaDescription:
			"Valfli ve açık ağızlı kraft kağıt torbalar. Yüksek mukavemetli yapı, otomatik doldurma uyumluluğu ve özelleştirilebilir boyutlar.",
		productSectorsTitle: "Ürün Sektörleri - ADAKA Kraft Kağıt Torba Çözümleri",
		productSectorsMetaDescription:
			"İnşaat, gıda, kimya, madencilik, ilaç ve geri dönüşüm sektörlerine özel kraft kağıt torba çözümleri. Sektörel ihtiyaçlara özel tasarım.",
		sustainabilityTitle:
			"Sürdürülebilirlik - Çevre Dostu Kraft Kağıt Torba | ADAKA",
		sustainabilityMetaDescription:
			"ADAKA'nın çevresel bağlılığı, geri dönüştürülebilir malzemeler, yenilenebilir kaynaklar ve 2030 sürdürülebilirlik hedefleri.",
		contactsTitle: "İletişim - ADAKA Kağıt San. Tic. A.Ş. | Bize Ulaşın",
		contactsMetaDescription:
			"ADAKA Kağıt San. Tic. A.Ş. ile iletişime geçin. Kraft Kağıt Torba ihtiyaçlarınız için uzman ekibimizden teklif alın. Türkiye geneli hizmet.",
	},

	it: {
		// Navigation
		company: "Azienda",
		products: "Prodotti",
		productSectors: "Settori di prodotto",
		sustainability: "Sostenibilità",
		contacts: "Contatti",
		valveSacks: "Sacchi a valvola",
		openMouthSacks: "Sacchi a bocca aperta",

		// Hero
		heroTitle: "Proteggiamo\nle tue merci",
		heroSubtitle: "Una soluzione per ogni esigenza",

		// Content
		companyDescription: `Da oltre ${durationSinceMay2014} anni sviluppiamo e forniamo packaging innovativo, ecologico ed efficace per contenere e proteggere.`,
		packagingTitle: "PACKAGING",
		kraftSacksTitle: "Sacchi in carta kraft",
		kraftSacksDescription:
			"Siamo specializzati nella produzione di sacchi industriali di grande contenuto, sia a valvola che a bocca aperta.",
		discoverProducts: "scopri i prodotti",
		ourCustomers: "I nostri clienti",
		customerDescription:
			"ADAKA opera sul mercato con affidabilità e serietà, fornendo clientela di prestigio internazionale.",

		// Testimonials
		whatPeopleSay: "Cosa dicono di noi",
		testimonialCimko:
			'"I sacchi kraft di ADAKA sono indispensabili nella nostra produzione di cemento da 15 anni. Non abbiamo mai avuto problemi con materiali di qualità e consegne puntuali"',
		testimonialCimsa:
			'"Da quando abbiamo iniziato a lavorare con ADAKA, abbiamo registrato grandi guadagni di efficienza nei nostri processi di imballaggio. Un partner commerciale affidabile"',
		testimonialAkcansa:
			'"Grazie alle borse ad alta resistenza, le nostre perdite di trasporto sono state ridotte al minimo. Gli standard di qualità di ADAKA sono eccellenti"',
		testimonialSisecam:
			"\"Le soluzioni speciali di ADAKA per l'imballaggio dei nostri sottoprodotti dell'industria del vetro sono molto preziose per noi. Il loro approccio professionale è encomiabile\"",
		testimonialBekaert:
			'"Il servizio che riceviamo da ADAKA per l\'imballaggio dei nostri prodotti industriali è estremamente efficace. Qualità e affidabilità sono la nostra priorità"',
		testimonialMatkim:
			'"Lavoriamo con ADAKA nel settore dei prodotti chimici per l\'edilizia da 8 anni. Il partner ideale per soluzioni di imballaggio durevoli"',

		// Reasons
		reasonsTitle: "Perché sceglierci",
		customerFocus: "Attenzione al cliente",
		customerFocusDescription:
			"Offriamo elasticità nei tempi di consegna. Rispondiamo alle situazioni impegnative con soluzioni rapide e un servizio post-vendita specializzato. Siamo costantemente impegnati a soddisfare ogni singolo cliente.",
		industriesWeServe: "I settori che serviamo",

		// Footer
		workForUs: "Lavora per noi",
		contactUs: "Contattaci",
		certifications: "Certificazioni",
		cookiePolicy: "Cookie Policy",
		privacyPolicy: "Privacy Policy",
		generalConditions:
			"Condizioni generali di vendita applicabili ai sacchi di carta di grande capacità",
		// Company Page
		ourStory: "Hikayemiz",
		companyStoryText1: `ADAKA, ${durationSinceMay2014} yılı aşkın süredir kraft kağıt torba endüstrisinde güvenilir bir ortak olmuştur. Yüksek kaliteli endüstriyel kraft torba çözümleri sağlama vizyonuyla kurulan şirketimiz, kraft kağıt torba üretiminde lider bir üretici haline gelmiştir.`,
		companyStoryText2:
			"Yenilik, sürdürülebilirlik ve müşteri memnuniyetine olan bağlılığımız başarımızı yönlendirmiş ve dünya çapında işletmeler için güvenilir bir ortak olarak konumumuzu sağlamlaştırmıştır.",
		companyStoryText3:
			"Bugün inşaat, kimya, gıda ve tarım gibi çeşitli sektörlerdeki müşterilere hizmet vererek, onların özel ihtiyaçlarını karşılayan özel kraft torba çözümleri sunuyoruz.",
		ourValues: "Değerlerimiz",
		quality: "Kalite",
		qualityDescription:
			"Tüm ürünlerimizde en yüksek standartları koruyarak müşterilerimiz için güvenilirlik ve dayanıklılık sağlıyoruz.",
		innovation: "İnovasyon",
		innovationDescription:
			"Araştırma ve geliştirmeye sürekli yatırım, yenilikçi kraft torba çözümlerimizi yönlendirir.",
		sustainabilityShort: "Sürdürülebilirlik",
		sustainabilityDescription:
			"Çevresel sorumluluk, üretim süreçlerimizin ve ürün geliştirmemizin merkezindedir.",
		manufacturingExcellence: "Üretim Mükemmelliği",
		manufacturingText1:
			"Son teknoloji üretim tesislerimiz, yarattığımız her üründe hassasiyet ve verimlilik sağlamak için en son teknolojiyle donatılmıştır.",
		manufacturingText2:
			"Hammadde seçiminden son ambalajlamaya kadar üretimin her aşamasında titiz kalite kontrol önlemleri uyguluyoruz.",
		manufacturingText3:
			"Deneyimli profesyonel ekibimiz, endüstri standartlarını aşan ambalaj çözümleri sunmak için onlarca yıllık uzmanlık getirir.",

		// Products Page
		valveSacksDescription:
			"Valfli torbalarımız verimli doldurma ve güvenli kapama için tasarlanmıştır. Toz ve granül malzemeler için mükemmel olan bu torbalar mükemmel koruma ve kolay kullanım sağlar.",
		openMouthSacksDescription:
			"Açık ağızlı torbalarımız geniş bir uygulama yelpazesi için çok yönlülük ve güvenilirlik sunar. Doldurmasi ve mühürlemesi kolay olan bu torbalar çeşitli malzemeler için mükemmel koruma sağlar.",
		highStrengthConstruction: "Yüksek mukavemetli kraft kağıt yapısı",
		automaticFillingCompatibility: "Otomatik doldurma uyumluluğu",
		dustTightClosure: "Toz geçirmez kapama sistemi",
		customizableSizes: "Özelleştirilebilir boyutlar ve özellikler",
		durableMultiLayer: "Dayanıklı çok katmanlı yapı",
		wideOpeningFilling: "Kolay doldurma için geniş açıklık",
		strongSealingCapabilities: "Güçlü mühürleme yetenekleri",
		availableVariousCapacities: "Çeşitli kapasitelerde mevcuttur",
		learnMore: "Daha Fazla Bilgi",
		continuousInnovation: "Sürekli İnovasyon",
		innovationText1:
			"ADAKA'da inovasyon yaptığımız her şeyi yönlendirir. Özel Ar-Ge ekibimiz, müşterilerimizin ve endüstrinin gelişen ihtiyaçlarını karşılamak için sürekli olarak yeni ambalaj çözümleri geliştirir.",
		innovationText2:
			"Ürünlerinizi koruyan aynı zamanda çevresel sorumluluğu destekleyen ambalajlar yaratmak için son teknoloji ve sürdürülebilir malzemelere yatırım yapıyoruz.",
		innovationText3:
			"İnovasyon odak alanlarımız arasında gelişmiş bariyer özellikler, geliştirilmiş sürdürülebilirlik ve optimize edilmiş üretim verimliliği bulunmaktadır.",
		applications: "Uygulamalar",
		construction: "İnşaat",
		constructionProducts: "Çimento, alçı, harç",
		food: "Gıda",
		foodProducts: "Un, şeker, yem",
		chemicals: "Kimyasallar",
		chemicalProducts: "Tozlar, granüller",
		agriculture: "Tarım",
		agricultureProducts: "Tohum, gübreler",
		readyToEnhanceValveSacks:
			"Valfli torbalarınızı geliştirmeye hazır mısınız?",
		readyToEnhanceValveSacksDescription:
			"Bizimle iletişime geçin ve valfli torbalarınızı geliştirmek için nasıl destekleyebileceğimizi keşfedin.",
		readyToEnhanceOpenMouthSacks:
			"Açık ağızlı torbalarınızı geliştirmeye hazır mısınız?",
		readyToEnhanceOpenMouthSacksDescription:
			"Bizimle iletişime geçin ve açık ağızlı torbalarınızı geliştirmek için nasıl destekleyebileceğimizi keşfedin.",

		// Sustainability Page
		environmentalCommitment: "Çevresel Bağlılığımız",
		sustainabilityText1:
			"ADAKA'te sürdürülebilirlik sadece bir slogan değil - işletme operasyonlarımızın her yönünü yönlendiren temel bir ilkedir. Yüksek kaliteli ambalaj çözümleri sunarken çevresel etkimizi en aza indirmeye kararlıyız.",
		sustainabilityText2:
			"Kraft kağıt torbalarımız yenilenebilir kaynaklardan yapılır ve tamamen geri dönüştürülebilir olup döngüsel ekonomiyi destekler ve ambalaj endüstrisindeki atığı azaltır.",
		sustainabilityText3:
			"Ürünlerimizin en yüksek çevresel standartları karşılamasını sağlamak için daha temiz üretim teknolojilerine ve sürdürülebilir hammaddelere sürekli yatırım yapıyoruz.",
		sustainabilityInitiatives: "Sürdürülebilirlik Girişimlerimiz",
		recyclableMaterials: "Geri Dönüştürülebilir Malzemeler",
		recyclableDescription:
			"Yeni ürünlere dönüştürülebilen, atık azaltımını destekleyen %100 geri dönüştürülebilir kraft kağıt torbalar.",
		renewableResources: "Yenilenebilir Kaynaklar",
		renewableDescription:
			"Kraft kağıdımız sürdürülebilir şekilde yönetilen ormanlardan ve yenilenebilir odun lifi kaynaklarından temin edilir.",
		energyEfficiency: "Enerji Verimliliği",
		energyDescription:
			"Mümkün olduğunca enerji verimli makineler ve yenilenebilir enerji kaynakları ile modern üretim tesisleri.",
		zeroWasteGoals: "Sıfır Atık Hedefleri",
		zeroWasteDescription:
			"Operasyonlarımızda atığı en aza indirmek ve kaynak verimliliğini maksimize etmek için döngüsel ekonomi ilkelerini uygulama.",
		carbonFootprint: "Karbon Ayak İzi",
		carbonDescription:
			"Tedarik zincirimiz boyunca karbon emisyonlarını azaltmak için lojistik ve taşımacılığı optimize etme.",
		innovationSustainable: "İnovasyon",
		innovationSustainableDescription:
			"Biyolojik olarak parçalanabilen malzemeler ve çevre dostu üretim süreçlerine sürekli Ar-Ge.",
		fdaApproved: "FDA Onaylı",
		fdaDescription: "Gıda ile temas için güvenli malzemeler",
		gmpCompliant: "GMP Uyumlu",
		gmpDescription: "İyi Üretim Uygulamaları",
		brcCertified: "BRC Sertifikalı",
		brcDescription: "İngiliz Perakende Konsorsiyumu standartları",
		haccpSystem: "HACCP Sistemi",
		haccpDescription: "Tehlike Analizi Kritik Kontrol Noktaları",
		our2030Goals: "2030 Sürdürülebilirlik Hedeflerimiz",
		carbonReduction: "Karbon emisyonlarında azalma",
		renewableEnergyGoal: "Üretim için yenilenebilir enerji kaynakları",
		zeroLandfill: "Düzenli depolama alanına gönderilen atık",

		// Contact Page
		getInTouch: "Tüm ambalaj ihtiyaçlarınız için ekibimizle iletişime geçin",
		contactInformation: "İletişim Bilgileri",
		headOffice: "Genel Merkez",
		phone: "Telefon",
		email: "E-posta",
		businessHours: "Çalışma Saatleri",
		mondayFriday: "Pazartesi - Cuma: 08:00 - 18:00",
		saturday: "Cumartesi: 08:00 - 12:00",
		sunday: "Pazar: Kapalı",
		sendMessage: "Bize Mesaj Gönderin",
		ourLocation: "Konumumuz",
		mapPlaceholder: "İnteraktif Harita Yer Tutucu\nAdana, Türkiye",

		// Contact Form
		name: "Ad Soyad",
		companyName: "Şirket Adı",
		emailAddress: "E-posta Adresi",
		phoneNumber: "Telefon Numarası",
		subject: "Konu",
		message: "Mesaj",
		sendMessageButton: "Mesajı Gönder",
		formSuccess: "Mesajınız başarıyla gönderildi!",
		formError: "Mesaj gönderilirken hata oluştu. Lütfen tekrar deneyin.",

		// Product Sectors
		servingDiverseIndustries: "Çeşitli Endüstrilere Hizmet",
		productSectorsIntro: `${durationSinceMay2014} yılı aşkın süredir ADAKA, geniş bir endüstri yelpazesine özel ambalaj çözümleri sağlamaktadır. Kraft kağıt torbalarımız her sektörün benzersiz gereksinimlerini karşılayacak şekilde tasarlanmış olup ürünleriniz için optimal koruma, kullanım ve depolama sağlar.`,
		constructionMaterials: "İnşaat Malzemeleri",
		constructionDescription:
			"Çimento, alçı, harç, yapıştırıcı ve yapı bileşikleri",
		constructionApplications:
			"Portland çimentosu, Alçı, Fayans yapıştırıcıları, Kuru harçlar, Duvar bileşikleri",
		foodAgriculture: "Gıda ve Tarım",
		foodDescription:
			"Gıda bileşenleri, hayvan yemi, tarım ürünleri ve gübreler",
		foodApplications:
			"Un ve tahıllar, Şeker, Hayvan yemi, Tohumlar, Organik gübreler",
		chemicalIndustry: "Kimya Endüstrisi",
		chemicalDescription:
			"Endüstriyel kimyasallar, tozlar, granüller ve özel bileşikler",
		chemicalApplications:
			"Endüstriyel tuzlar, Deterjan tozları, Plastik granüller, Kimyasal tozlar, Katalizörler",
		miningMinerals: "Madencilik ve Mineraller",
		miningDescription:
			"Çıkarılan mineraller, cevherler ve işlenmiş madencilik ürünleri",
		miningApplications:
			"Kum ve agregalar, Kil ürünleri, Mineral tozları, Kireçtaşı, İşlenmiş cevherler",
		pharmaceutical: "İlaç",
		pharmaceuticalDescription:
			"İlaç üretimi için hammaddeler ve yardımcı maddeler",
		pharmaceuticalApplications:
			"Aktif bileşenler, Yardımcı maddeler, İlaç tozları, Toplu ilaçlar, Hammaddeler",
		recyclingWaste: "Geri Dönüşüm ve Atık",
		recyclingDescription:
			"Geri dönüştürülmüş malzemeler ve atık yönetimi ürünleri",
		recyclingApplications:
			"Geri dönüştürülmüş plastikler, Kağıt atığı, Metal talaşları, Kompost malzemeleri, Atık tozları",
		industrySpecificRequirements: "Sektöre Özel Ambalaj Gereksinimleri",
		barrierProtection: "Bariyer Koruması",
		barrierDescription:
			"Kimyasallar ve ilaçlar gibi hassas malzemeler için nem, toz ve kontaminasyon koruması.",
		strengthDurability: "Mukavemet ve Dayanıklılık",
		strengthDescription:
			"Çimento, agregalar ve madencilik ürünleri gibi ağır malzemeler için yüksek çekme mukavemeti.",
		foodSafety: "Gıda Güvenliği",
		foodSafetyDescription:
			"Gıda bileşenleri ve tarım ürünleri için FDA onaylı malzemeler ve gıda sınıfı özellikler.",
		customSolutions: "Sektörünüz İçin Özel Çözümler",
		customSolutionsText:
			"Her endüstrinin benzersiz ambalaj gereksinimleri vardır. Uzman ekibimiz, özel ihtiyaçlarınızı karşılayan özelleştirilmiş çözümler geliştirmek için sizinle yakın çalışır.",
		customSolutionsFeatures:
			"Özel boyutlar ve kapasiteler, Özel bariyer özellikleri, Sektöre özel sertifikalar, Optimize edilmiş doldurma ve kullanım özellikleri, Sürdürülebilir malzeme seçenekleri",
		readyToDiscuss: "İhtiyaçlarınızı Görüşmeye Hazır mısınız?",
		readyToDiscussText:
			"Sektörünüzü özel ambalaj çözümleriyle nasıl destekleyebileceğimizi keşfetmek için teknik ekibimizle iletişime geçin.",
		qualityStandardsCompliance: "Kalite Standartları ve Uyumluluk",

		// Common UI Elements
		readyToEnhance: "Ambalaj çözümlerinizi geliştirmeye hazır mısınız?",
		readyToEnhanceDescription:
			"Bizimle iletişime geçin ve ambalaj çözümlerinizi geliştirmek için nasıl destekleyebileceğimizi keşfedin.",
		qualityInnovation: "Kalite ve İnovasyon",
		qualityInnovationDescription:
			"Uluslararası müşterilerimizin gelişen ihtiyaçlarını karşılayan son teknoloji ambalaj çözümleri sağlamak için araştırma ve geliştirmeye sürekli yatırım.",
		learnSustainability: "Sürdürülebilirlik yaklaşımımız hakkında bilgi edinin",
		companyFullName: "ADAKA Kağıt San. Tic. A.Ş.",

		// SEO
		homeTitle: "ADAKA Ambalaj - Kraft Kağıt Torba Üreticisi | Türkiye",
		homeDescription: `${durationSinceMay2014} yıllık deneyimle kraft kağıt torba üretimi. Valfli ve açık ağızlı endüstriyel torbalar. Çimento, gıda, kimya sektörlerine özel ambalaj çözümleri.`,
		companyTitle: `Hakkımızda - ADAKA Ambalaj Şirketi | ${durationSinceMay2014} Yıllık Deneyim`,
		companyMetaDescription: `ADAKA'nın ${durationSinceMay2014} yıllık ambalaj endüstrisi deneyimi, değerlerimiz ve üretim mükemmelliği hakkında bilgi edinin. Kalite, inovasyon ve sürdürülebilirlik odaklı yaklaşımımız.`,
		productsTitle: "Ürünlerimiz - Kraft Kağıt Torbalar | ADAKA Ambalaj",
		productsMetaDescription:
			"Valfli ve açık ağızlı kraft kağıt torbalar. Yüksek mukavemetli yapı, otomatik doldurma uyumluluğu ve özelleştirilebilir boyutlar.",
		productSectorsTitle: "Ürün Sektörleri - ADAKA Ambalaj Çözümleri",
		productSectorsMetaDescription:
			"İnşaat, gıda, kimya, madencilik, ilaç ve geri dönüşüm sektörlerine özel kraft kağıt torba çözümleri. Sektörel ihtiyaçlara özel tasarım.",
		sustainabilityTitle: "Sürdürülebilirlik - Çevre Dostu Ambalaj | ADAKA",
		sustainabilityMetaDescription:
			"ADAKA'nın çevresel bağlılığı, geri dönüştürülebilir malzemeler, yenilenebilir kaynaklar ve 2030 sürdürülebilirlik hedefleri.",
		contactsTitle: "İletişim - ADAKA Ambalaj | Bize Ulaşın",
		contactsMetaDescription:
			"ADAKA Ambalaj ile iletişime geçin. Ambalaj ihtiyaçlarınız için uzman ekibimizden teklif alın. Türkiye geneli hizmet.",
	},

	en: {
		// Navigation
		company: "Company",
		products: "Products",
		productSectors: "Product sectors",
		sustainability: "Sustainability",
		contacts: "Contacts",
		valveSacks: "Valve sacks",
		openMouthSacks: "Open-mouth sacks",

		// Hero
		heroTitle: "Caring\nfor your goods",
		heroSubtitle: "A solution for every need",

		// Content
		companyDescription:
			"We've been developing and supplying innovative, eco-friendly, effective packaging to contain and protect for more than 12 years.",
		packagingTitle: "PACKAGING",
		kraftSacksTitle: "Kraft paper sacks",
		kraftSacksDescription:
			"We specialise in the production of large capacity valve and open-mouth industrial sacks.",
		discoverProducts: "discover the products",
		ourCustomers: "Our customers",
		customerDescription:
			"ADAKA is a reliable, reputable market player, serving a clientele of international prestige.",

		// Testimonials
		whatPeopleSay: "What people say about us",
		testimonialCimko:
			'"ADAKA\'s kraft sacks have been indispensable in our cement production for 15 years. We have never had any problems with quality materials and on-time delivery"',
		testimonialCimsa:
			'"Since we started working with ADAKA, we have experienced great efficiency gains in our packaging processes. A reliable business partner"',
		testimonialAkcansa:
			'"Thanks to high-strength bags, our transportation losses have been minimized. ADAKA\'s quality standards are excellent"',
		testimonialSisecam:
			'"ADAKA\'s special solutions for packaging our glass industry by-products are very valuable to us. Their professional approach is commendable"',
		testimonialBekaert:
			'"The service we receive from ADAKA for packaging our industrial products is extremely successful. Quality and reliability are our priority"',
		testimonialMatkim:
			'"We have been working with ADAKA in the construction chemicals sector for 8 years. Ideal partner for durable packaging solutions"',

		// Reasons
		reasonsTitle: "Reasons for choosing us",
		customerFocus: "Customer focus",
		customerFocusDescription:
			"We offer elasticity in delivery times. We respond to challenging situations with rapid solutions and a specialist after-sales service. We are constantly committed to satisfying every single customer.",
		industriesWeServe: "The industries we serve",

		// Footer
		workForUs: "Work for us",
		contactUs: "Contact us",
		certifications: "Certifications",
		cookiePolicy: "Cookie Policy",
		privacyPolicy: "Privacy Policy",
		generalConditions:
			"General conditions of sale applicable to large capacity paper bags",
		companyFullName: "ADAKA Packaging Manufacturing",
	},

	de: {
		// Navigation
		company: "Unternehmen",
		products: "Produkte",
		productSectors: "Produktbereiche",
		sustainability: "Nachhaltigkeit",
		contacts: "Kontakte",
		valveSacks: "Ventilsäcke",
		openMouthSacks: "Säcke mit offener Mündung",

		// Hero
		heroTitle: "Schützen\nSie Ihre Waren",
		heroSubtitle: "Eine Lösung für jeden Bedarf",

		// Content
		companyDescription:
			"Seit über 12 Jahren entwickeln und liefern wir innovative, umweltfreundliche und effektive Verpackungen zum Schutz und zur Aufbewahrung.",
		packagingTitle: "VERPACKUNG",
		kraftSacksTitle: "Kraftpapiersäcke",
		kraftSacksDescription:
			"Wir sind spezialisiert auf die Herstellung von Industriesäcken mit großem Fassungsvermögen, sowohl mit Ventil als auch mit offener Mündung.",
		discoverProducts: "Produkte entdecken",
		ourCustomers: "Unsere Kunden",
		customerDescription:
			"ADAKA ist ein zuverlässiger, seriöser Marktteilnehmer und bedient eine internationale Kundschaft von Prestige.",

		// Testimonials
		whatPeopleSay: "Was die Leute über uns sagen",
		testimonial1:
			'"Wir arbeiten seit vielen Jahren erfolgreich mit ADAKA in verschiedenen Fixit-Gruppenunternehmen zusammen. ADAKA hat uns bei mehreren Gelegenheiten geholfen, Deadlocks zu überwinden. ADAKA ist ein ausgezeichneter Partner, insbesondere in Bezug auf Qualität und Versandflexibilität"',
		testimonial2:
			'"Eine dauerhafte Partnerschaft, die über die Jahre mit harter Arbeit und Engagement aufgebaut wurde"',
		testimonial3:
			'"Ein zuverlässiger, vertrauensvoller Partner seit über 30 Jahren"',

		// Reasons
		reasonsTitle: "Gründe für uns",
		customerFocus: "Kundenorientierung",
		customerFocusDescription:
			"Wir bieten Flexibilität bei Lieferzeiten. Wir reagieren auf herausfordernde Situationen mit schnellen Lösungen und einem spezialisierten Kundendienst. Wir sind ständig bemüht, jeden einzelnen Kunden zufriedenzustellen.",
		industriesWeServe: "Die Branchen, die wir bedienen",

		// Footer
		workForUs: "Arbeiten Sie für uns",
		contactUs: "Kontaktieren Sie uns",
		certifications: "Zertifizierungen",
		cookiePolicy: "Cookie-Richtlinie",
		privacyPolicy: "Datenschutzrichtlinie",
		generalConditions:
			"Allgemeine Verkaufsbedingungen für Papiersäcke mit großer Kapazität",
		companyFullName: "ADAKA Verpackungsherstellung",
	},

	fr: {
		// Navigation
		company: "Entreprise",
		products: "Produits",
		productSectors: "Secteurs de produits",
		sustainability: "Durabilité",
		contacts: "Contacts",
		valveSacks: "Sacs à valve",
		openMouthSacks: "Sacs à bouche ouverte",

		// Hero
		heroTitle: "Protégeons\nvos marchandises",
		heroSubtitle: "Une solution pour chaque besoin",

		// Content
		companyDescription:
			"Depuis plus de 12 ans, nous développons et fournissons des emballages innovants, écologiques et efficaces pour contenir et protéger.",
		packagingTitle: "EMBALLAGE",
		kraftSacksTitle: "Sacs en papier kraft",
		kraftSacksDescription:
			"Nous nous spécialisons dans la production de sacs industriels de grande capacité, à valve et à bouche ouverte.",
		discoverProducts: "découvrir les produits",
		ourCustomers: "Nos clients",
		customerDescription:
			"ADAKA est un acteur fiable et réputé du marché, au service d'une clientèle de prestige international.",

		// Testimonials
		whatPeopleSay: "Ce que les gens disent de nous",
		testimonial1:
			'"Nous travaillons avec succès avec ADAKA dans diverses entreprises du groupe Fixit depuis de nombreuses années. ADAKA nous a aidés à surmonter des impasses à plusieurs reprises. ADAKA est un excellent partenaire, notamment en termes de qualité et de flexibilité d\'expédition"',
		testimonial2:
			'"Un partenariat durable, construit au fil des années avec travail et engagement"',
		testimonial3:
			'"Un partenaire fiable et de confiance depuis plus de 30 ans"',

		// Reasons
		reasonsTitle: "Raisons de nous choisir",
		customerFocus: "Orientation client",
		customerFocusDescription:
			"Nous offrons de la flexibilité dans les délais de livraison. Nous répondons aux situations difficiles avec des solutions rapides et un service après-vente spécialisé. Nous nous engageons constamment à satisfaire chaque client.",
		industriesWeServe: "Les industries que nous servons",

		// Footer
		workForUs: "Travaillez pour nous",
		contactUs: "Contactez-nous",
		certifications: "Certifications",
		cookiePolicy: "Politique de cookies",
		privacyPolicy: "Politique de confidentialité",
		generalConditions:
			"Conditions générales de vente applicables aux sacs en papier de grande capacité",
		companyFullName: "ADAKA Production d'emballage",
	},

	es: {
		// Navigation
		company: "Empresa",
		products: "Productos",
		productSectors: "Sectores de productos",
		sustainability: "Sostenibilidad",
		contacts: "Contactos",
		valveSacks: "Sacos con válvula",
		openMouthSacks: "Sacos de boca abierta",

		// Hero
		heroTitle: "Protegemos\nnuestros bienes",
		heroSubtitle: "Una solución para cada necesidad",

		// Content
		companyDescription:
			"Durante más de 12 años hemos estado desarrollando y suministrando envases innovadores, ecológicos y efectivos para contener y proteger.",
		packagingTitle: "EMBALAJE",
		kraftSacksTitle: "Sacos de papel kraft",
		kraftSacksDescription:
			"Nos especializamos en la producción de sacos industriales de gran capacidad, tanto con válvula como de boca abierta.",
		discoverProducts: "descubrir los productos",
		ourCustomers: "Nuestros clientes",
		customerDescription:
			"ADAKA es un actor confiable y respetado del mercado, sirviendo a una clientela de prestigio internacional.",

		// Testimonials
		whatPeopleSay: "Lo que la gente dice de nosotros",
		testimonial1:
			'"Hemos estado trabajando exitosamente con ADAKA en varias empresas del grupo Fixit durante muchos años. ADAKA nos ha ayudado a superar impasses en varias ocasiones. ADAKA es un excelente socio, especialmente en términos de calidad y flexibilidad de envío"',
		testimonial2:
			'"Una asociación duradera, construida a lo largo de los años con trabajo duro y compromiso"',
		testimonial3: '"Un socio confiable y de confianza durante más de 30 años"',

		// Reasons
		reasonsTitle: "Razones para elegirnos",
		customerFocus: "Enfoque al cliente",
		customerFocusDescription:
			"Ofrecemos elasticidad en los tiempos de entrega. Respondemos a situaciones desafiantes con soluciones rápidas y un servicio posventa especializado. Estamos constantemente comprometidos a satisfacer a cada cliente.",
		industriesWeServe: "Las industrias que servimos",

		// Footer
		workForUs: "Trabaja para nosotros",
		contactUs: "Contáctanos",
		certifications: "Certificaciones",
		cookiePolicy: "Política de cookies",
		privacyPolicy: "Política de privacidad",
		generalConditions:
			"Condiciones generales de venta aplicables a bolsas de papel de gran capacidad",
		companyFullName: "ADAKA Producción de embalaje",
	},

	el: {
		// Navigation
		company: "Εταιρεία",
		products: "Προϊόντα",
		productSectors: "Τομείς προϊόντων",
		sustainability: "Βιωσιμότητα",
		contacts: "Επαφές",
		valveSacks: "Σάκοι με βαλβίδα",
		openMouthSacks: "Σάκοι με ανοιχτό στόμιο",

		// Hero
		heroTitle: "Προστατεύουμε\nτα προϊόντα σας",
		heroSubtitle: "Μια λύση για κάθε ανάγκη",

		// Content
		companyDescription:
			"Για περισσότερα από 12 χρόνια αναπτύσσουμε και προμηθεύουμε καινοτόμες, φιλικές προς το περιβάλλον, αποτελεσματικές συσκευασίες για να περιέχουν και να προστατεύουν.",
		packagingTitle: "ΣΥΣΚΕΥΑΣΙΑ",
		kraftSacksTitle: "Σάκοι από χαρτί kraft",
		kraftSacksDescription:
			"Ειδικευόμαστε στην παραγωγή βιομηχανικών σάκων μεγάλης χωρητικότητας, τόσο με βαλβίδα όσο και με ανοιχτό στόμιο.",
		discoverProducts: "ανακαλύψτε τα προϊόντα",
		ourCustomers: "Οι πελάτες μας",
		customerDescription:
			"Η ADAKA είναι ένας αξιόπιστος, έγκυρος παίκτης της αγοράς, εξυπηρετώντας μια πελατεία διεθνούς κύρους.",

		// Testimonials
		whatPeopleSay: "Τι λένε οι άνθρωποι για εμάς",
		testimonial1:
			'"Συνεργαζόμαστε επιτυχώς με την ADAKA σε διάφορες εταιρείες του ομίλου Fixit για πολλά χρόνια. Η ADAKA μας έχει βοηθήσει να ξεπεράσουμε αδιέξοδα σε πολλές περιπτώσεις. Η ADAKA είναι ένας εξαιρετικός εταίρος, ειδικά όσον αφορά την ποιότητα και την ευελιξία αποστολής"',
		testimonial2:
			'"Μια διαρκής συνεργασία, χτισμένη με τα χρόνια με σκληρή δουλειά και δέσμευση"',
		testimonial3:
			'"Ένας αξιόπιστος, έμπιστος εταίρος για περισσότερα από 30 χρόνια"',

		// Reasons
		reasonsTitle: "Λόγοι για να μας επιλέξετε",
		customerFocus: "Εστίαση στον πελάτη",
		customerFocusDescription:
			"Προσφέρουμε ελαστικότητα στους χρόνους παράδοσης. Ανταποκρινόμαστε σε προκλητικές καταστάσεις με γρήγορες λύσεις και εξειδικευμένη υπηρεσία μετά την πώληση. Είμαστε συνεχώς δεσμευμένοι να ικανοποιούμε κάθε μεμονωμένο πελάτη.",
		industriesWeServe: "Οι βιομηχανίες που εξυπηρετούμε",

		// Footer
		workForUs: "Εργαστείτε για εμάς",
		contactUs: "Επικοινωνήστε μαζί μας",
		certifications: "Πιστοποιήσεις",
		cookiePolicy: "Πολιτική Cookies",
		privacyPolicy: "Πολιτική Απορρήτου",
		generalConditions:
			"Γενικοί όροι πώλησης που ισχύουν για σάκους χαρτιού μεγάλης χωρητικότητας",
		companyFullName: "ADAKA Παραγωγή συσκευασίας",
	},

	ru: {
		// Navigation
		company: "Компания",
		products: "Продукция",
		productSectors: "Отрасли продукции",
		sustainability: "Устойчивость",
		contacts: "Контакты",
		valveSacks: "Клапанные мешки",
		openMouthSacks: "Мешки с открытым горлом",

		// Hero
		heroTitle: "Защищаем\nваши товары",
		heroSubtitle: "Решение для каждой потребности",

		// Content
		companyDescription:
			"Более 12 лет мы разрабатываем и поставляем инновационную, экологически чистую, эффективную упаковку для хранения и защиты.",
		packagingTitle: "УПАКОВКА",
		kraftSacksTitle: "Мешки из крафт-бумаги",
		kraftSacksDescription:
			"Мы специализируемся на производстве промышленных мешков большой вместимости, как клапанных, так и с открытым горлом.",
		discoverProducts: "открыть продукцию",
		ourCustomers: "Наши клиенты",
		customerDescription:
			"ADAKA является надежным, уважаемым игроком рынка, обслуживающим клиентуру международного престижа.",

		// Testimonials
		whatPeopleSay: "Что говорят о нас",
		testimonial1:
			'"Мы успешно работаем с ADAKA в различных компаниях группы Fixit уже много лет. ADAKA помогла нам преодолеть тупиковые ситуации в нескольких случаях. ADAKA - отличный партнер, особенно в плане качества и гибкости доставки"',
		testimonial2:
			'"Длительное партнерство, построенное за годы упорной работы и приверженности"',
		testimonial3: '"Надежный, доверенный партнер уже более 30 лет"',

		// Reasons
		reasonsTitle: "Причины выбрать нас",
		customerFocus: "Ориентация на клиента",
		customerFocusDescription:
			"Мы предлагаем гибкость в сроках доставки. Мы отвечаем на сложные ситуации быстрыми решениями и специализированным послепродажным обслуживанием. Мы постоянно стремимся удовлетворить каждого отдельного клиента.",
		industriesWeServe: "Отрасли, которые мы обслуживаем",

		// Footer
		workForUs: "Работайте на нас",
		contactUs: "Свяжитесь с нами",
		certifications: "Сертификации",
		cookiePolicy: "Политика файлов cookie",
		privacyPolicy: "Политика конфиденциальности",
		generalConditions:
			"Общие условия продажи, применимые к бумажным мешкам большой вместимости",
		companyFullName: "ADAKA Производство упаковки",
	},

	ar: {
		// Navigation
		company: "الشركة",
		products: "المنتجات",
		productSectors: "قطاعات المنتجات",
		sustainability: "الاستدامة",
		contacts: "جهات الاتصال",
		valveSacks: "أكياس الصمامات",
		openMouthSacks: "أكياس الفم المفتوح",

		// Hero
		heroTitle: "نحمي\nأصنافك",
		heroSubtitle: "حل لكل احتياج",

		// Content
		companyDescription: `لأكثر من ${durationSinceMay2014} عامًا ونحن نطور ونوفر تغليفًا مبتكرًا وصديقًا للبيئة وفعالًا للاحتواء والحماية.`,
		packagingTitle: "التغليف",
		kraftSacksTitle: "أكياس ورق الكرافت",
		kraftSacksDescription:
			"نحن متخصصون في إنتاج الأكياس الصناعية ذات السعة الكبيرة، سواء بالصمامات أو بالفم المفتوح.",
		discoverProducts: "اكتشف المنتجات",
		ourCustomers: "عملاؤنا",
		customerDescription:
			"ADAKA هي لاعب موثوق ومرموق في السوق، تخدم عملاء ذوي مكانة دولية.",

		// Testimonials
		whatPeopleSay: "ما يقوله الناس عنا",
		testimonial1:
			'"لقد كنا نعمل بنجاح مع ADAKA في شركات مختلفة من مجموعة Fixit لسنوات عديدة. ساعدتنا ADAKA في التغلب على المآزق في عدة مناسبات. ADAKA شريك ممتاز، خاصة من ناحية الجودة ومرونة الشحن"',
		testimonial2: '"شراكة دائمة، بُنيت على مر السنين بالعمل الشاق والالتزام"',
		testimonial3: '"شريك موثوق وجدير بالثقة لأكثر من 30 عامًا"',

		// Reasons
		reasonsTitle: "أسباب اختيارنا",
		customerFocus: "التركيز على العميل",
		customerFocusDescription:
			"نقدم مرونة في أوقات التسليم. نستجيب للمواقف الصعبة بحلول سريعة وخدمة ما بعد البيع المتخصصة. نحن ملتزمون باستمرار بإرضاء كل عميل على حدة.",
		industriesWeServe: "الصناعات التي نخدمها",

		// Footer
		workForUs: "اعمل معنا",
		contactUs: "اتصل بنا",
		certifications: "الشهادات",
		cookiePolicy: "سياسة ملفات تعريف الارتباط",
		privacyPolicy: "سياسة الخصوصية",
		generalConditions:
			"الشروط العامة للبيع المطبقة على الأكياس الورقية ذات السعة الكبيرة",
		companyFullName: "ADAKA إنتاج التغليف",
	},
};

export function getTranslation(lang: Language, key: string): string {
	const translation = translations[lang];
	if (!translation) return key;

	const value = translation[key as keyof typeof translation];
	return value || key;
}
