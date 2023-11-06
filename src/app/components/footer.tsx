import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className="mb-10 px-4 text-center text-gray-500">
			<div className="flex justify-center items-center space-x-4 mb-6">
				<a
					href="https://www.facebook.com/groups/17045653093"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Facebook"
					className="text-gray-500 hover:text-gray-700"
				>
					<FaFacebookF />
				</a>
				<a
					href="https://www.instagram.com/methodelafayofficiel/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Instagram"
					className="text-gray-500 hover:text-gray-700"
				>
					<FaInstagram />
				</a>
				<a
					href="https://www.youtube.com/user/MethodeLafayOfficiel"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Youtube"
					className="text-gray-500 hover:text-gray-700"
				>
					<FaYoutube />
				</a>
			</div>
			<small className="block text-xs">&copy; 2023 Olivier Lafay. All rights reserved.</small>
		</footer>
	);
}
