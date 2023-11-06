'use client';
import { productsData } from '../lib/data';
import { useSectionInView } from '../lib/hook';
import Product from './product';
import SectionHeading from './section-heading';
import React from 'react';

export default function Products() {
	const { ref } = useSectionInView('Notre collection', 0.75);
	return (
		<section ref={ref} id="collection" className="scroll-mt-28 mb-28">
			<SectionHeading>Notre collection</SectionHeading>
			<div>
				{productsData.map((product, index) => (
					<React.Fragment key={index}>
						<Product {...product} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
}
