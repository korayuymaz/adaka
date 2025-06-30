import ContactForm from "@/components/contact-form";

const Contacts = () => {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="bg-red-500 text-white py-20">
				<div className="container mx-auto px-4">
					<h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
					<p className="text-xl md:text-2xl max-w-3xl">
						Get in touch with our team for all your packaging needs
					</p>
				</div>
			</section>

			{/* Contact Content */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12">
						{/* Contact Information */}
						<div>
							<h2 className="text-3xl font-bold text-red-500 mb-8">
								Contact Information
							</h2>
							<div className="space-y-6">
								<div className="bg-gray-50 p-6 rounded-lg">
									<h3 className="font-bold text-lg mb-2">Head Office</h3>
									<p className="text-gray-700">
										SIS produzione di packaging
										<br />
										Via Industriale, 123
										<br />
										47842 San Giovanni in Marignano (RN)
										<br />
										Italy
									</p>
								</div>
								<div className="bg-gray-50 p-6 rounded-lg">
									<h3 className="font-bold text-lg mb-2">Phone</h3>
									<p className="text-gray-700">
										<a
											href="tel:+390541123456"
											className="hover:text-red-500 transition-colors"
										>
											+39 0541 123 456
										</a>
									</p>
								</div>
								<div className="bg-gray-50 p-6 rounded-lg">
									<h3 className="font-bold text-lg mb-2">Email</h3>
									<p className="text-gray-700">
										<a
											href="mailto:info@sis.sm"
											className="hover:text-red-500 transition-colors"
										>
											info@sis.sm
										</a>
									</p>
								</div>
								<div className="bg-gray-50 p-6 rounded-lg">
									<h3 className="font-bold text-lg mb-2">Business Hours</h3>
									<p className="text-gray-700">
										Monday - Friday: 8:00 AM - 6:00 PM
										<br />
										Saturday: 8:00 AM - 12:00 PM
										<br />
										Sunday: Closed
									</p>
								</div>
							</div>
						</div>

						{/* Contact Form */}
						<div>
							<h2 className="text-3xl font-bold text-red-500 mb-8">
								Send us a Message
							</h2>
							<ContactForm />
						</div>
					</div>
				</div>
			</section>

			{/* Map Section */}
			<section className="bg-gray-100 py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-red-500 text-center mb-8">
						Our Location
					</h2>
					<div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center text-gray-500">
						Interactive Map Placeholder
						<br />
						San Giovanni in Marignano, Italy
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contacts;
