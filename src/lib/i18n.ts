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
		info: "Informazioni",

		// Hero
		heroTitle: "La sicurezza\ndei tuoi prodotti",
		heroSubtitle: "Una soluzione per ogni esigenza",

		// Content
		companyDescription: `Da oltre ${durationSinceMay2014} anni sviluppiamo e forniamo sacchi in carta kraft innovativi, ecologici ed efficaci per proteggere e conservare.`,
		packagingTitle: "SACCHI IN CARTA KRAFT",
		kraftSacksTitle: "Sacchi in carta kraft",
		kraftSacksDescription:
			"Siamo specializzati nella produzione di sacchi industriali di grande capacità, sia a valvola che a bocca aperta.",
		discoverProducts: "Scopri i prodotti",
		ourCustomers: "I nostri clienti",
		customerDescription:
			"ADAKA è un operatore di mercato affidabile e rispettabile, che serve una clientela di prestigio internazionale.",

		// Testimonials
		whatPeopleSay: "Cosa dicono di noi",

		testimonialCimko:
			'"I sacchi in carta kraft di alta qualità di ADAKA sono una parte integrante del nostro processo di produzione del cemento. Eccellono in affidabilità e puntualità nella consegna."',
		testimonialCimsa:
			'"La collaborazione con ADAKA ci offre grandi vantaggi nel settore dell’imballaggio industriale. Il loro approccio professionale e il servizio orientato alla soluzione sono ammirevoli."',
		testimonialAkcansa:
			'"Per i nostri prodotti che richiedono una grande capacità di carico, i resistenti sacchi kraft di ADAKA sono la soluzione ideale. Gli standard di qualità sono davvero elevati."',
		testimonialSisecam:
			'"Le soluzioni speciali di sacchi kraft sviluppate da ADAKA per le esigenze specifiche dell’industria del vetro sono estremamente preziose. Il supporto tecnico e la qualità del servizio sono eccellenti."',
		testimonialBekaert:
			'"Da molti anni collaboriamo con successo con ADAKA per l’imballaggio dei nostri prodotti in filo industriale. I loro standard di affidabilità e qualità sono molto elevati."',
		testimonialMatkim:
			'"Per la nostra azienda che opera nel settore dei prodotti chimici per l’edilizia, le soluzioni personalizzate di sacchi kraft di ADAKA sono indispensabili. Siamo molto soddisfatti della nostra partnership a lungo termine."',

		// Reasons
		reasonsTitle: "Perché sceglierci",
		customerFocus: "Orientamento al cliente",
		customerFocusDescription:
			"Offriamo flessibilità nei tempi di consegna. Rispondiamo rapidamente alle situazioni difficili con soluzioni efficaci e un servizio post-vendita esperto. Ci impegniamo costantemente per soddisfare ogni cliente.",
		industriesWeServe: "Settori serviti",

		// Footer
		workForUs: "Lavora con noi",
		contactUs: "Contattaci",
		certifications: "Certificazioni",
		cookiePolicy: "Politica sui cookie",
		privacyPolicy: "Informativa sulla privacy",
		generalConditions:
			"Condizioni generali di vendita applicabili ai sacchi di carta ad alta capacità",

		// Company Page
		ourStory: "La nostra storia",
		companyStoryText1:
			"ADAKA Adana Kağıt San. ve Tic. A.Ş. è stata fondata il 21 maggio 2014 su un terreno di 30.000 m², di cui 10.000 m² coperti, come iniziativa congiunta di Hasan Kavi Petrol Ürünleri Turizm Tic. ve San. A.Ş. (di proprietà di Zeki KAVİ, Ferhat KAVİ, Feridun KAVİ, Hakan KAVİ) insieme a Serdar Emir ERGEZ e Süleyman ÇAKIRBEY. Nello stesso anno, nel mese di novembre, ha iniziato la produzione ed è entrata a far parte dei produttori di sacchi in carta kraft in Turchia.",
		companyStoryText2:
			"Lo stabilimento produce sacchi industriali destinati a diversi settori come cemento, calce, materiali da costruzione, minerario, chimico, alimentare e sementiero. Questi sacchi sono realizzati in kraft marrone o bianco importato, fino a 5 strati e stampa fino a 6 colori, con possibilità di inserto in polietilene e varie dimensioni e specifiche. Una parte della produzione è destinata anche all'esportazione verso diversi paesi.",
		companyStoryText3:
			"La capacità produttiva annua della nostra fabbrica è di 200 milioni di unità. Gli investimenti per migliorare la qualità dei nostri prodotti e ridurre i costi vengono implementati rapidamente.",
		ourValues: "I nostri valori",
		quality: "Qualità",
		qualityDescription:
			"Garantiamo affidabilità e resistenza per i nostri clienti, mantenendo i più alti standard in tutti i nostri prodotti.",
		innovation: "Innovazione",
		innovationDescription:
			"Investiamo costantemente in ricerca e sviluppo, guidando le nostre soluzioni di sacchi kraft innovativi.",
		sustainabilityShort: "Sostenibilità",
		sustainabilityDescription:
			"La responsabilità ambientale è al centro dei nostri processi produttivi e dello sviluppo dei prodotti.",
		manufacturingExcellence: "Eccellenza produttiva",
		manufacturingText1:
			"I nostri impianti produttivi all’avanguardia sono dotati delle più moderne tecnologie per garantire precisione ed efficienza in ogni prodotto che realizziamo.",
		manufacturingText2:
			"Applichiamo rigorose misure di controllo qualità in ogni fase della produzione, dalla selezione delle materie prime fino all’imballaggio finale.",
		manufacturingText3:
			"Il nostro team di professionisti esperti apporta decenni di know-how per offrire soluzioni di sacchi kraft che superano gli standard del settore.",

		// Products Page
		valveSacksDescription:
			"I nostri sacchi a valvola sono progettati per un riempimento efficiente e una chiusura sicura. Ideali per materiali in polvere e granulari, offrono una protezione eccellente e un utilizzo agevole.",

		openMouthSacksDescription:
			"I nostri sacchi a bocca aperta offrono versatilità e affidabilità per un'ampia gamma di applicazioni. Facili da riempire e sigillare, garantiscono una protezione eccellente per diversi tipi di materiali.",

		highStrengthConstruction: "Struttura in carta kraft ad alta resistenza",
		automaticFillingCompatibility:
			"Compatibilità con sistemi di riempimento automatico",
		dustTightClosure: "Sistema di chiusura antipolvere",
		customizableSizes: "Dimensioni e caratteristiche personalizzabili",
		durableMultiLayer: "Struttura multistrato resistente",
		wideOpeningFilling: "Ampia apertura per un facile riempimento",
		strongSealingCapabilities: "Eccellente capacità di sigillatura",
		availableVariousCapacities: "Disponibili in varie capacità",

		learnMore: "Scopri di più",

		continuousInnovation: "Innovazione continua",

		innovationText1:
			"In ADAKA, l’innovazione guida tutto ciò che facciamo. Il nostro team dedicato di R&S sviluppa costantemente nuove soluzioni di sacchi kraft per soddisfare le esigenze in evoluzione dei clienti e dell’industria.",

		innovationText2:
			"Investiamo in tecnologie avanzate e materiali sostenibili per creare sacchi kraft che proteggono i tuoi prodotti e promuovono la responsabilità ambientale.",

		innovationText3:
			"I nostri ambiti di innovazione includono proprietà barriera avanzate, maggiore sostenibilità e ottimizzazione dell’efficienza produttiva.",

		applications: "Applicazioni",

		construction: "Edilizia",
		constructionProducts: "Cemento, gesso, malta",

		food: "Alimentare",
		foodProducts: "Farina, zucchero, mangimi",

		chemicals: "Chimica",
		chemicalProducts: "Polveri, granuli",

		agriculture: "Agricoltura",
		agricultureProducts: "Semi, fertilizzanti",

		readyToEnhanceValveSacks: "Pronto a migliorare i tuoi sacchi a valvola?",
		readyToEnhanceValveSacksDescription:
			"Contattaci per scoprire come possiamo supportarti nel miglioramento dei tuoi sacchi a valvola.",

		readyToEnhanceOpenMouthSacks:
			"Pronto a migliorare i tuoi sacchi a bocca aperta?",
		readyToEnhanceOpenMouthSacksDescription:
			"Contattaci per scoprire come possiamo supportarti nel miglioramento dei tuoi sacchi a bocca aperta.",

		// Sustainability Page
		environmentalCommitment: "Il nostro impegno ambientale",
		sustainabilityText1:
			"In ADAKA, la sostenibilità non è solo uno slogan, ma un principio fondamentale che guida ogni aspetto delle nostre operazioni. Siamo determinati a ridurre al minimo il nostro impatto ambientale offrendo soluzioni di sacchi kraft di alta qualità.",
		sustainabilityText2:
			"I nostri sacchi in carta kraft sono realizzati con risorse rinnovabili e sono completamente riciclabili, supportando l'economia circolare e riducendo i rifiuti nel settore dei sacchi kraft.",
		sustainabilityText3:
			"Investiamo continuamente in tecnologie di produzione più pulite e in materie prime sostenibili per garantire che i nostri prodotti soddisfino i più alti standard ambientali.",
		sustainabilityInitiatives: "Le nostre iniziative di sostenibilità",
		recyclableMaterials: "Materiali riciclabili",
		recyclableDescription:
			"Sacchi in carta kraft 100% riciclabili, trasformabili in nuovi prodotti e ideali per la riduzione dei rifiuti.",
		renewableResources: "Risorse rinnovabili",
		renewableDescription:
			"La nostra carta kraft proviene da foreste gestite in modo sostenibile e da fonti di fibra di legno rinnovabili.",
		energyEfficiency: "Efficienza energetica",
		energyDescription:
			"Stabilimenti produttivi moderni con macchinari a basso consumo energetico e fonti di energia rinnovabile, ove possibile.",
		zeroWasteGoals: "Obiettivi zero rifiuti",
		zeroWasteDescription:
			"Applichiamo i principi dell’economia circolare per ridurre al minimo i rifiuti e massimizzare l’efficienza delle risorse nelle nostre operazioni.",
		carbonFootprint: "Impronta di carbonio",
		carbonDescription:
			"Ottimizziamo la logistica e il trasporto per ridurre le emissioni di carbonio lungo la nostra catena di fornitura.",
		innovationSustainable: "Innovazione",
		innovationSustainableDescription:
			"Ricerca e sviluppo continui su materiali biodegradabili e processi produttivi ecocompatibili.",
		fdaApproved: "Approvato dalla FDA",
		fdaDescription: "Materiali sicuri per il contatto con alimenti",
		gmpCompliant: "Conforme alle GMP",
		gmpDescription: "Buone pratiche di fabbricazione",
		brcCertified: "Certificato BRC",
		brcDescription: "Standard del British Retail Consortium",
		haccpSystem: "Sistema HACCP",
		haccpDescription: "Analisi dei rischi e punti critici di controllo",
		our2030Goals: "I nostri obiettivi di sostenibilità per il 2030",
		carbonReduction: "Riduzione delle emissioni di carbonio",
		renewableEnergyGoal: "Fonti di energia rinnovabile per la produzione",
		zeroLandfill: "Nessun rifiuto destinato alle discariche",

		// Contact Page
		getInTouch:
			"Contatta il nostro team per tutte le tue esigenze di sacchi in carta kraft",

		contactInformation: "Informazioni di contatto",
		headOffice: "Sede centrale",
		phone: "Telefono",
		email: "E-mail",

		businessHours: "Orari di apertura",
		mondayFriday: "Lunedì - Venerdì: 08:00 - 18:00",
		saturday: "Sabato: 08:00 - 12:00",
		sunday: "Domenica: Chiuso",

		sendMessage: "Inviaci un messaggio",
		ourLocation: "La nostra posizione",

		mapPlaceholder: "Segnaposto per mappa interattiva\nAdana, Turchia",

		// Contact Form
		name: "Nome e Cognome",
		companyName: "Nome dell'Azienda",
		emailAddress: "Indirizzo E-mail",
		phoneNumber: "Numero di Telefono",
		subject: "Oggetto",
		message: "Messaggio",
		sendMessageButton: "Invia Messaggio",
		formSuccess: "Il tuo messaggio è stato inviato con successo!",
		formError:
			"Si è verificato un errore durante l'invio del messaggio. Per favore riprova.",

		// Product Sectors
		servingDiverseIndustries: "Serviamo diversi settori",
		productSectorsIntro: `Da oltre ${durationSinceMay2014} anni, ADAKA fornisce soluzioni su misura di sacchi in carta kraft per un’ampia gamma di settori. I nostri sacchi kraft sono progettati per soddisfare le esigenze specifiche di ogni settore, garantendo protezione ottimale, facilità d’uso e stoccaggio sicuro dei vostri prodotti.`,
		constructionMaterials: "Materiali da costruzione",
		constructionDescription:
			"Cemento, gesso, malta, adesivi e composti da costruzione",
		constructionApplications:
			"Cemento Portland, Gesso, Adesivi per piastrelle, Malte secche, Composti per muratura",
		foodAgriculture: "Alimentare e Agricoltura",
		foodDescription:
			"Ingredienti alimentari, mangimi per animali, prodotti agricoli e fertilizzanti",
		foodApplications:
			"Farina e cereali, Zucchero, Mangimi, Sementi, Fertilizzanti organici",
		chemicalIndustry: "Industria chimica",
		chemicalDescription:
			"Prodotti chimici industriali, polveri, granuli e composti speciali",
		chemicalApplications:
			"Sali industriali, Polveri detergenti, Granuli plastici, Polveri chimiche, Catalizzatori",
		miningMinerals: "Estrazione e Minerali",
		miningDescription:
			"Minerali estratti, minerali grezzi e prodotti lavorati per l’industria mineraria",
		miningApplications:
			"Sabbie e aggregati, Prodotti argillosi, Polveri minerali, Calcare, Minerali lavorati",
		pharmaceutical: "Farmaceutico",
		pharmaceuticalDescription:
			"Materie prime e coadiuvanti per la produzione farmaceutica",
		pharmaceuticalApplications:
			"Principi attivi, Eccipienti, Polveri farmaceutiche, Medicinali sfusi, Materie prime",
		recyclingWaste: "Riciclo e Rifiuti",
		recyclingDescription:
			"Materiali riciclati e prodotti per la gestione dei rifiuti",
		recyclingApplications:
			"Plastiche riciclate, Scarti di carta, Trucioli metallici, Compost, Polveri di scarto",
		industrySpecificRequirements:
			"Requisiti specifici per settore per i sacchi kraft",
		barrierProtection: "Protezione barriera",
		barrierDescription:
			"Protezione da umidità, polvere e contaminazione per materiali sensibili come sostanze chimiche e farmaci.",
		strengthDurability: "Resistenza e Durabilità",
		strengthDescription:
			"Elevata resistenza alla trazione per materiali pesanti come cemento, aggregati e minerali.",
		foodSafety: "Sicurezza alimentare",
		foodSafetyDescription:
			"Materiali approvati dalla FDA e caratteristiche idonee al contatto alimentare per ingredienti e prodotti agricoli.",
		customSolutions: "Soluzioni su misura per il tuo settore",
		customSolutionsText:
			"Ogni settore ha esigenze uniche per i sacchi kraft. Il nostro team di esperti lavora a stretto contatto con te per sviluppare soluzioni personalizzate che soddisfino i tuoi bisogni specifici.",
		customSolutionsFeatures:
			"Dimensioni e capacità personalizzate, Proprietà barriera dedicate, Certificazioni specifiche di settore, Riempimento e utilizzo ottimizzati, Opzioni di materiali sostenibili",
		readyToDiscuss: "Pronto a discutere le tue esigenze?",
		readyToDiscussText:
			"Contatta il nostro team tecnico per scoprire come possiamo supportare il tuo settore con soluzioni su misura di sacchi kraft.",
		qualityStandardsCompliance: "Standard di qualità e conformità",

		// Common UI Elements
		readyToEnhance: "Pronto a migliorare le tue soluzioni di sacchi kraft?",
		readyToEnhanceDescription:
			"Contattaci per scoprire come possiamo supportarti nel migliorare le tue soluzioni di imballaggio in carta kraft.",
		qualityInnovation: "Qualità e Innovazione",
		qualityInnovationDescription:
			"Investimenti continui in ricerca e sviluppo per fornire soluzioni di sacchi kraft all’avanguardia che soddisfano le esigenze in evoluzione dei nostri clienti internazionali.",
		learnSustainability: "Scopri il nostro approccio alla sostenibilità",
		companyFullName: "ADAKA Kağıt San. Tic. A.Ş.",

		// SEO
		homeTitle:
			"ADAKA Kağıt San. Tic. A.Ş. - Produttore di sacchi in carta kraft | Turchia",
		homeDescription: `${durationSinceMay2014} anni di esperienza nella produzione di sacchi in carta kraft. Sacchi industriali a valvola e a bocca aperta. Soluzioni su misura per i settori del cemento, alimentare e chimico.`,
		companyTitle:
			"Chi Siamo - ADAKA Kağıt San. Tic. A.Ş | ${durationSinceMay2014} Anni di Esperienza",
		companyMetaDescription:
			"Scopri l'esperienza di ADAKA nel settore dei sacchi in carta kraft da ${durationSinceMay2014} anni, i nostri valori e la nostra eccellenza produttiva. Un approccio basato su qualità, innovazione e sostenibilità.",
		productsTitle:
			"I Nostri Prodotti - Sacchi in Carta Kraft | ADAKA Kağıt San. Tic. A.Ş.",
		productsMetaDescription:
			"Sacchi in carta kraft a valvola e a bocca aperta. Struttura ad alta resistenza, compatibilità con il riempimento automatico e dimensioni personalizzabili.",
		productSectorsTitle:
			"Settori di Prodotto - Soluzioni di Sacchi in Carta Kraft ADAKA",
		productSectorsMetaDescription:
			"Soluzioni su misura di sacchi in carta kraft per i settori edilizio, alimentare, chimico, minerario, farmaceutico e del riciclo. Progettazione specifica per ogni settore.",
		sustainabilityTitle:
			"Sostenibilità - Sacchi in Carta Kraft Eco-Compatibili | ADAKA",
		sustainabilityMetaDescription:
			"L'impegno ambientale di ADAKA: materiali riciclabili, risorse rinnovabili e obiettivi di sostenibilità per il 2030.",
		contactsTitle: "Contatti - ADAKA Kağıt San. Tic. A.Ş. | Contattaci",
		contactsMetaDescription:
			"Contatta ADAKA Kağıt San. Tic. A.Ş. Richiedi un preventivo per le tue esigenze di sacchi in carta kraft. Servizio attivo in tutta la Turchia.",
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
