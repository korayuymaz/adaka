"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const pathname = usePathname();

	return (
		<div className="flex justify-center items-center mt-4 mb-4 px-10">
			<div className="w-1/4">
				<Link href="/">
					<Image src="/logo.png" alt="logo" width={250} height={500} />
				</Link>
			</div>
			<div className="w-3/4">
				<ul className="flex gap-10 font-bold text-lg justify-end">
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
						<Link href="/contacts">Contacts</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
