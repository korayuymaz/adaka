"use client";

import { useState } from "react";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		company: "",
		subject: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		console.log("Form submitted:", formData);
		alert("Thank you for your message! We will get back to you soon.");
		setFormData({
			name: "",
			email: "",
			company: "",
			subject: "",
			message: "",
		});
	};

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<div className="grid md:grid-cols-2 gap-4">
				<div>
					<label
						htmlFor="name"
						className="block text-sm font-medium text-gray-700 mb-2"
					>
						Full Name *
					</label>
					<input
						type="text"
						id="name"
						name="name"
						required
						value={formData.name}
						onChange={handleChange}
						className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
						placeholder="Your full name"
					/>
				</div>
				<div>
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700 mb-2"
					>
						Email Address *
					</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						value={formData.email}
						onChange={handleChange}
						className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
						placeholder="your.email@example.com"
					/>
				</div>
			</div>

			<div>
				<label
					htmlFor="company"
					className="block text-sm font-medium text-gray-700 mb-2"
				>
					Company
				</label>
				<input
					type="text"
					id="company"
					name="company"
					value={formData.company}
					onChange={handleChange}
					className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
					placeholder="Your company name"
				/>
			</div>

			<div>
				<label
					htmlFor="subject"
					className="block text-sm font-medium text-gray-700 mb-2"
				>
					Subject *
				</label>
				<select
					id="subject"
					name="subject"
					required
					value={formData.subject}
					onChange={handleChange}
					className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
				>
					<option value="">Select a subject</option>
					<option value="general">General Inquiry</option>
					<option value="products">Product Information</option>
					<option value="quote">Request a Quote</option>
					<option value="support">Customer Support</option>
					<option value="careers">Careers</option>
				</select>
			</div>

			<div>
				<label
					htmlFor="message"
					className="block text-sm font-medium text-gray-700 mb-2"
				>
					Message *
				</label>
				<textarea
					id="message"
					name="message"
					required
					rows={6}
					value={formData.message}
					onChange={handleChange}
					className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-vertical"
					placeholder="Tell us about your packaging needs or ask any questions..."
				/>
			</div>

			<button
				type="submit"
				className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-medium transition-colors"
			>
				Send Message
			</button>
		</form>
	);
}
