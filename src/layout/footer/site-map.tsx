import Link from "next/link";

const SiteMap = () => {
	const links = [
		{
			name: "Hakkımızda",
			url: "/company",
		},
		{
			name: "Ürünlerimiz",
			url: "/products",
		},
		{
			name: "İletişim",
			url: "/contact",
		},
	];
	return (
		<div className="flex flex-row gap-[10rem] text-white">
			{links.map((link) => (
				<Link href={link.url} key={link.name}>
					{link.name}
				</Link>
			))}
		</div>
	);
};

export default SiteMap;
