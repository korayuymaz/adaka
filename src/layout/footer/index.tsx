import Image from "next/image";
import SiteMap from "./site-map";

const Footer = () => {
	return (
		<div className="bg-black rounded-t-lg p-4">
			<div className="flex flex-row gap-10 p-4 text-white justify-between max-w-7xl mx-auto">
				<div className="w-1/3">
					<Image
						src="/logo-white.png"
						alt="KAVİ GROUP"
						width={250}
						height={125}
						className="object-contain mb-4"
					/>
					<div className="text-sm text-gray-400">
						<p className="font-bold mb-2">Full Name of the Company</p>
						<p className="font-bold mb-2">Full Address of the Company</p>
						<div>
							<p className="font-bold mb-2">Fax: 0212 222 22 22</p>
							<p>Email: info@kavi.com.tr</p>
						</div>
					</div>
				</div>

				<div className="w-2/3 flex flex-col gap-4 justify-between items-end">
					<SiteMap />
					<div>Social Media Links</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
