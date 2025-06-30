"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const pathname = usePathname();

	return (
		<>
			<div className="flex items-center mt-4 mb-4 px-20">
				<div className="w-1/4">
					<Link href="/">
						<Image src="/logo.png" alt="logo" width={150} height={300} />
					</Link>
				</div>
				<div className="w-3/4">
					<ul className="flex gap-10 font-bold text-gray-500 justify-end items-center">
						<li
							className={
								pathname === "/company"
									? "text-red-500"
									: "" + "hover:text-[#cc0000]"
							}
						>
							<Link href="/company">Company</Link>
						</li>
						<li
							className={
								pathname === "/products"
									? "text-red-500"
									: "" + "hover:text-[#cc0000]"
							}
						>
							<Link href="/products">Products</Link>
						</li>
						<li
							className={
								pathname === "/contacts"
									? "text-red-500"
									: "" + "hover:text-[#cc0000]"
							}
						>
							<Link href="/contacts">
								<button className="bg-red-500 text-white px-4 py-2 rounded-md">
									Contact Us
								</button>
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<Separator className="w-full" />
		</>
	);
};

export default Navbar;
