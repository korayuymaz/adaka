import Image from "next/image";
import Link from "next/link";

const Products = () => {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="bg-red-500 text-white py-20 rounded-b-2xl">
				<div className="container mx-auto px-4">
					<h1 className="text-4xl md:text-6xl font-bold mb-6">Products</h1>
					<p className="text-xl md:text-2xl max-w-3xl">
						Kraft Sacks Description
					</p>
				</div>
			</section>

			{/* Product Categories */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12">
						{/* Valve Sacks */}
						<div className="bg-white rounded-2xl shadow-lg overflow-hidden">
							<div className="relative h-64">
								<Image
									src="/factory-images/inside-factory-1"
									alt="Valve Sacks"
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-8">
								<h2 className="text-2xl font-bold text-red-500 mb-4">
									Valve Sacks
								</h2>
								<p className="text-gray-700 mb-6">
									Our valve sacks are designed for efficient filling and secure
									closure. Perfect for powdered and granular materials, these
									sacks provide excellent protection and ease of handling.
								</p>
								<ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
									<li>High-strength kraft paper construction</li>
									<li>Automatic filling compatibility</li>
									<li>Dust-tight closure system</li>
									<li>Customizable sizes and specifications</li>
								</ul>
								<Link
									href={`/products/valve-sacks`}
									className="inline-block bg-red-500 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
								>
									Learn More
								</Link>
							</div>
						</div>

						{/* Open Mouth Sacks */}
						<div className="bg-white rounded-2xl shadow-lg overflow-hidden">
							<div className="relative h-64">
								<Image
									src="/factory-images/inside-factory-1"
									alt="Open Mouth Sacks"
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-8">
								<h2 className="text-2xl font-bold text-red-500 mb-4">
									Open Mouth Sacks
								</h2>
								<p className="text-gray-700 mb-6">
									Our open mouth sacks offer versatility and reliability for a
									wide range of applications. Easy to fill and seal, they
									provide excellent protection for various materials.
								</p>
								<ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
									<li>Durable multi-layer construction</li>
									<li>Wide opening for easy filling</li>
									<li>Strong sealing capabilities</li>
									<li>Available in various capacities</li>
								</ul>
								<Link
									href={`/products/open-mouth-sacks`}
									className="inline-block bg-red-500 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
								>
									Learn More
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Innovation Section */}
			<section className="bg-gray-100 py-20" id="innovation">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold text-red-500 text-center mb-16">
						Innovation and Development
					</h2>
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h3 className="text-2xl font-bold mb-6">Continuous Innovation</h3>
							<div className="space-y-6 text-lg text-gray-700">
								<p>
									At SIS, innovation drives everything we do. Our dedicated R&D
									team continuously develops new packaging solutions to meet the
									evolving needs of our customers and the industry.
								</p>
								<p>
									We invest in cutting-edge technology and sustainable materials
									to create packaging that not only protects your products but
									also supports environmental responsibility.
								</p>
								<p>
									Our innovation focus areas include enhanced barrier
									properties, improved sustainability, and optimized production
									efficiency.
								</p>
							</div>
						</div>
						<div className="rounded-2xl overflow-hidden">
							<div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500">
								Innovation Laboratory Image
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Applications */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold text-red-500 text-center mb-16">
						Applications
					</h2>
					<div className="grid md:grid-cols-4 gap-8">
						<div className="text-center">
							<div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-white text-2xl font-bold">C</span>
							</div>
							<h3 className="font-bold mb-2">Construction</h3>
							<p className="text-gray-600 text-sm">Cement, plaster, mortars</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-white text-2xl font-bold">F</span>
							</div>
							<h3 className="font-bold mb-2">Food</h3>
							<p className="text-gray-600 text-sm">Flour, sugar, feed</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-white text-2xl font-bold">Ch</span>
							</div>
							<h3 className="font-bold mb-2">Chemicals</h3>
							<p className="text-gray-600 text-sm">Powders, granules</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-white text-2xl font-bold">A</span>
							</div>
							<h3 className="font-bold mb-2">Agriculture</h3>
							<p className="text-gray-600 text-sm">Seeds, fertilizers</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Products;
