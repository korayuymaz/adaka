import Image from "next/image";
import Link from "next/link";

const GroupCompanies = () => {
	const companies = [
		{
			name: "Kavi Lube",
			image: "/company-images/kavi-lube.png",
			url: "https://kavilube.com.tr/",
		},
		{
			name: "Kavi Otomativ",
			image: "/company-images/kavi-otomativ.png",
			url: "http://kia.kavigroup.com.tr/",
		},
		{
			name: "Dod",
			image: "/company-images/kavi-dod.png",
			url: "https://dod.com.tr/yetkili-satici-detay?d=53",
		},
		{
			name: "Kavi Lastik",
			image: "/company-images/kavi-lastik.png",
			url: "http://www.kavilastik.com.tr/Content/default.aspx",
		},
		{
			name: "Kavi BP",
			image: "/company-images/kavi-bp.png",
			url: "http://www.kavigroup.com.tr/bp/",
		},
	];

	return (
		<div className="flex flex-col items-center justify-center bg-gray-200 rounded-2xl">
			<div className="flex flex-row gap-10 p-4">
				{companies.map((company) => (
					<div
						key={company.name}
						className="hover:scale-110 transition-all duration-300"
					>
						<Link href={company.url} target="_blank">
							<Image
								src={company.image}
								alt={company.name}
								width={100}
								height={100}
								className="w-20 h-20 object-contain opacity-75 hover:opacity-100 transition-all duration-300"
							/>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default GroupCompanies;
