'use client';

import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Building2, DollarSign, Compass, ArrowRight, ChevronDown, Check } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';

const GoHomesLandingPage: React.FC = () => {
	return (
		<div className="min-h-screen bg-white text-gray-800 font-sans">
			<Header />
			<Hero />
			<TopListedProperties />
			<WhyTokenizedRealEstate />
			<GettingStarted />
			<Benefits />
			<FAQ />
			<Footer />
		</div>
	);
};

const Header: React.FC = () => (
	<header className="bg-white shadow-md">
		<div className="container mx-auto py-4 px-6 flex justify-between items-center">
			<div className="flex items-center">
				<img src="/api/placeholder/50/50" alt="GoHomes Logo" className="w-10 h-10 mr-2" />
				<h1 className="text-2xl font-bold text-blue-600">GoHomes</h1>
			</div>
			<nav>
				<ul className="flex space-x-6">
					<li>
						<a href="#" className="hover:text-blue-600 transition-colors">
							Home
						</a>
					</li>
					<li>
						<a href="#" className="hover:text-blue-600 transition-colors">
							Properties
						</a>
					</li>
					<li>
						<a href="#" className="hover:text-blue-600 transition-colors">
							About
						</a>
					</li>
					<li>
						<a href="#" className="hover:text-blue-600 transition-colors">
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</header>
);

const Hero: React.FC = () => (
	<motion.section
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ duration: 1 }}
		className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20"
	>
		<div className="container mx-auto px-6 text-center">
			<h2 className="text-4xl md:text-5xl font-bold mb-4">Revolutionizing Real Estate Investment</h2>
			<p className="text-xl mb-8">Tokenized commercial real estate for the modern investor</p>

			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full inline-flex items-center"
			>
				Explore Properties
				<ArrowRight className="ml-2" />
			</motion.button>
		</div>
	</motion.section>
);

const TopListedProperties: React.FC = () => (
	<section className="py-16 bg-gray-100">
		<div className="container mx-auto px-6">
			<h2 className="text-3xl font-bold mb-8 text-center">Top Listed Properties</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{[1, 2, 3].map((i) => (
					<motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-white rounded-lg shadow-lg overflow-hidden">
						<img
							src={`/api/placeholder/400/300?text=Property ${i}`}
							alt={`Property ${i}`}
							className="w-full h-48 object-cover"
						/>
						<div className="p-6">
							<h3 className="text-xl font-semibold mb-2">Luxury Office Space {i}</h3>
							<p className="text-gray-600 mb-4">Prime location, high yield potential</p>
							<button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
								View Details
							</button>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	</section>
);

const WhyTokenizedRealEstate: React.FC = () => (
	<section className="py-16">
		<div className="container mx-auto px-6">
			<h2 className="text-3xl font-bold mb-8 text-center">Why Tokenized Commercial Real Estate?</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<h3 className="text-2xl font-semibold mb-4">Accessibility</h3>
					<p>Invest in high-value properties with lower capital requirements through fractional ownership.</p>
				</div>
				<div>
					<h3 className="text-2xl font-semibold mb-4">Liquidity</h3>
					<p>Trade your real estate tokens easily on our marketplace, providing unprecedented liquidity.</p>
				</div>
				<div>
					<h3 className="text-2xl font-semibold mb-4">Transparency</h3>
					<p>Blockchain technology ensures all transactions and ownership records are transparent and immutable.</p>
				</div>
				<div>
					<h3 className="text-2xl font-semibold mb-4">Diversification</h3>
					<p>Spread your investment across multiple properties and markets with ease.</p>
				</div>
			</div>
		</div>
	</section>
);

const GettingStarted: React.FC = () => (
	<section className="py-16 bg-blue-50">
		<div className="container mx-auto px-6">
			<h2 className="text-3xl font-bold mb-8 text-center">Getting Started is Easy</h2>
			<div className="flex flex-col md:flex-row justify-between items-center">
				<motion.div
					whileHover={{ scale: 1.05 }}
					className="bg-white p-6 rounded-lg shadow-md mb-6 md:mb-0 md:mr-4 flex-1"
				>
					<h3 className="text-xl font-semibold mb-2">1. Create an Account</h3>
					<p>Sign up and complete our simple verification process.</p>
				</motion.div>
				<motion.div
					whileHover={{ scale: 1.05 }}
					className="bg-white p-6 rounded-lg shadow-md mb-6 md:mb-0 md:mx-4 flex-1"
				>
					<h3 className="text-xl font-semibold mb-2">2. Browse Properties</h3>
					<p>Explore our curated selection of high-quality commercial real estate.</p>
				</motion.div>
				<motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-md flex-1">
					<h3 className="text-xl font-semibold mb-2">3. Invest</h3>
					<p>Choose your investment amount and become a property owner.</p>
				</motion.div>
			</div>
		</div>
	</section>
);

const Benefits: React.FC = () => (
	<section className="py-16">
		<div className="container mx-auto px-6">
			<h2 className="text-3xl font-bold mb-8 text-center">Benefits of Investing with Us</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{[
					'Low minimum investment',
					'Professional property management',
					'Regular dividend payments',
					'Tax benefits of real estate ownership',
					'Portfolio diversification',
					'Access to premium properties',
				].map((benefit, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.1 }}
						className="flex items-center"
					>
						<Check className="text-green-500 mr-2" />
						<span>{benefit}</span>
					</motion.div>
				))}
			</div>
		</div>
	</section>
);

const FAQ: React.FC = () => (
	<section className="py-16 bg-gray-100">
		<div className="container mx-auto px-6">
			<h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
			<Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
				<AccordionItem value="item-1">
					<AccordionTrigger>What is tokenized real estate?</AccordionTrigger>
					<AccordionContent>
						Tokenized real estate involves dividing ownership of a property into digital tokens on a blockchain,
						allowing for fractional ownership and easier trading of real estate assets.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>How do I earn returns?</AccordionTrigger>
					<AccordionContent>
						You can earn returns through regular dividend payments from rental income and potential capital appreciation
						of the property value.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger>Is my investment secure?</AccordionTrigger>
					<AccordionContent>
						Yes, your investment is backed by real, physical assets. We use advanced blockchain technology and follow
						strict regulatory guidelines to ensure the security of your investment.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	</section>
);

const Footer: React.FC = () => (
	<footer className="bg-gray-800 text-white py-12">
		<div className="container mx-auto px-6">
			<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
				<div>
					<h3 className="text-lg font-semibold mb-4">GoHomes</h3>
					<p>Revolutionizing real estate investment through tokenization.</p>
				</div>
				<div>
					<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
					<ul className="space-y-2">
						<li>
							<a href="#" className="hover:text-blue-400">
								Home
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-blue-400">
								Properties
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-blue-400">
								About Us
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-blue-400">
								Contact
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="text-lg font-semibold mb-4">Legal</h3>
					<ul className="space-y-2">
						<li>
							<a href="#" className="hover:text-blue-400">
								Terms of Service
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-blue-400">
								Privacy Policy
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-blue-400">
								Cookie Policy
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="text-lg font-semibold mb-4">Connect</h3>
					<ul className="space-y-2">
						<li>
							<a href="#" className="hover:text-blue-400">
								Twitter
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-blue-400">
								LinkedIn
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-blue-400">
								Facebook
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-blue-400">
								Instagram
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="mt-8 pt-8 border-t border-gray-700 text-center">
				<p>&copy; 2024 GoHomes. All rights reserved.</p>
			</div>
		</div>
	</footer>
);

export default GoHomesLandingPage;
