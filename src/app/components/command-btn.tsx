'use client';

import { BsArrowRight } from 'react-icons/bs';
import React from 'react';
import { useActiveSectionContext } from '../context/active-section-context';
import Link from 'next/link';

export default function CommandBtn() {
	const { setTimeOfLastClick } = useActiveSectionContext();

	return (
		<Link
			href="https://olivier-lafay.com/produit/nos-livres/pack-acces-autonomy/"
			target="_blank"
			aria-label="Redirection vers la page d&apos;achat du livre access autonomy"
			className="group bg-[#26352E] text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 hover:text-[#C4A513] active:scale-105 transition"
			onClick={() => {
				setTimeOfLastClick(Date.now());
			}}
		>
			Achetez-moi ici <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
		</Link>
	);
}
