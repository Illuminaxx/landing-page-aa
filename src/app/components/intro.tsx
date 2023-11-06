'use client';
import Link from 'next/link';
import { useActiveSectionContext } from '../context/active-section-context';
import { useSectionInView } from '../lib/hook';
import { motion } from 'framer-motion';
import { BsArrowRight, BsFacebook, BsInstagram, BsCollectionFill } from 'react-icons/bs';
import Image from 'next/image';

export default function Intro() {
	const { ref } = useSectionInView('Accueil', 0.5);
	const { setTimeOfLastClick } = useActiveSectionContext();

	return (
		<section ref={ref} id="accueil" className="mb-28 max-w-7xl mx-auto text-left sm:mb-0 scroll-mt-28">
			<div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">
				{/* Text Container */}
				<div className="flex-1 px-4 sm:pr-8">
					<motion.h1
						className="mb-10 mt-4 px-4 text-[12px] sm:text-2xl font-medium leading-snug sm:leading-normal xs:text-lg"
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
					>
						<span className="font-bold">Un livre connecté de 330 pages</span>, entièrement en couleurs. Il
						est constitué de <span className="underline">3 chapitres</span>, avec de nombreuses
						sous-parties. Le livre est conçu de telle manière qu&apos;il vous propose un entraînement à vie,
						sans jamais vous ennuyer.
					</motion.h1>

					<motion.div
						className="flex flex-col sm:flex-row items-center justify-start gap-8 px-4 text-lg font-medium"
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							delay: 0.1
						}}
					>
						{/* ... Your buttons here ... */}
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

						<a
							className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
							href="https://olivier-lafay.com/categorie-produit/nos-livres/"
							aria-label="Redirection vers la collection de Livre écrits par Olivier Lafay"
							download
						>
							Notre collection{' '}
							<BsCollectionFill className="opacity-60 group-hover:translate-y-1 transition" />
						</a>
					</motion.div>
				</div>

				{/* Image Container */}
				<div className="flex-1">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'tween',
							duration: 0.2
						}}
						className="flex justify-center sm:justify-center sm:pl-4 lg:pl-8"
					>
						<Image
							src="/2A.png"
							alt="Access autonomy"
							width="324"
							height="432"
							quality="95"
							priority={true}
							className="rounded-lg object-cover border-4 border-white shadow-2xl"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
