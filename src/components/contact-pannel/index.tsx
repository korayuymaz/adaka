import Link from "next/link";

const ContactPannel = () => {
	return (
		<div className="flex flex-col items-center justify-center bg-gray-200 rounded-t-2xl py-10 px-10">
			<h2 className="text-2xl font-bold mb-4">Bizimle İletişime Geçin</h2>
			<p className="mb-4">
				Daha fazla bilgiye ihtiyacınız olursa lütfen benimle iletişime geçmekten
				çekinmeyin
			</p>
			<Link
				href="/contacts"
				className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300"
			>
				İletişim Paneli
			</Link>
		</div>
	);
};

export default ContactPannel;
