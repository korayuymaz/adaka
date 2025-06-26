import Image from "next/image";
import SiteMap from "./site-map";

const Footer = () => {
	return (
		<div className="bg-[#333333] rounded-t-lg p-4">
			<div className="flex flex-row gap-10 p-4 text-white justify-between max-w-7xl mx-auto">
				<div className="w-1/3">
					<Image
						src="/logo-black.webp"
						alt="KAVİ GROUP"
						width={250}
						height={125}
						className="object-contain mb-4"
					/>
					<div className="text-sm text-gray-400">
						<p className="font-bold mb-2">Adana Kağıt San. Tic. A.Ş.</p>
						<p className="font-bold mb-2">
							Sahin Mah. Sait Polat Bulvarı No: 396 <br />
							33450 TARSUS / MERSİN <br />
							Türkiye
						</p>
						<div>
							<p className="font-bold mb-2">+90 (324) 651 53 53</p>

							<p>info@adaka.com.tr</p>
						</div>
					</div>
				</div>

				<div className="w-2/3 flex flex-col gap-4 justify-between items-end">
					<SiteMap />
				</div>
			</div>
		</div>
	);
};

export default Footer;
