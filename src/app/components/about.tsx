'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/app/lib/hook';

export default function About() {
	const { ref } = useSectionInView('A propos');

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="apropos"
		>
			<SectionHeading>À propos d&apos;Access Autonomy</SectionHeading>
			<p className="mb-3">
				Un livre connecté de <span className="font-bold">330 pages</span>, entièrement en couleurs. Il est
				constitué de 3 chapitres, avec de nombreuses sous-parties.{' '}
				<span className="underline">
					Le premier chapitre traite de tous les aspects pratiques permettant de
					<span className="font-bold uppercase"> croître et durer</span>
				</span>. Le deuxième chapitre propose{' '}
				<span className="underline">un entraînement complet par niveaux, avec de nombreuses variantes</span>. Le
				troisième chapitre présente <span className="font-bold">les exercices</span>, dont certains sont
				originaux. Le livre est conçu de telle manière qu&apos;il vous propose un{' '}
				<span className="font-bold">entraînement à vie</span>, sans jamais vous ennuyer.
			</p>
		</motion.section>
	);
}
