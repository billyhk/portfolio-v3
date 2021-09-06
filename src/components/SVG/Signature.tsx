import * as React from 'react';
import { motion } from 'framer-motion';

const signatureVariants = {
	hidden: {
		pathLength: 0,
		// scale: 1,
		strokeWidth: '1px',
		// fill: 'rgba(0,0,0,0)',
		background: 'rgba(129, 207, 221, 0.76)',
	},
	visible: {
		pathLength: 1,
		// scale: 1.15,
		strokeWidth: '4px',
		// fill: '#c45050',
		background: '#c45050',
	},
};

const signatureTransition = {
	default: {
		// delay: 1,
		duration: 2.8,
		ease: 'easeInOut',
	},
};

export const Signature = (props: React.SVGProps<SVGSVGElement>) => (
	<svg width={272} height={301} xmlns='http://www.w3.org/2000/svg' {...props}>
		<motion.path
			transition={signatureTransition}
			variants={signatureVariants}
			initial='hidden'
			animate='visible'
			d='M0 1c36.101 32.343 43.629 46.453 44.408 94.412.263 16.206.39 32.421 0 48.625a27.343 27.343 0 01-1.356 7.866c-.59 1.79-2.215 6.658-2.849 4.883-3.054-8.55 4.524-16.033 7.596-22.516 11.446-24.157 28.515-45.2 37.87-70.597 2.06-5.591 6.924-25.315-.24-30.298-1.813-1.262-5.818-3.318-6.512-1.221-3.494 10.557-4.369 22-4.045 33.115.508 17.388 16.21 74.086 3.15 92.742-6.085 8.694-10.703 12.119-2.441-10.174 3.368-9.087 7.31-18.07 12.541-26.23 4.447-6.935 10.256-12.968 16.228-18.644 6.462-6.14 14.532-10.442 20.92-16.66 6.854-6.67 13.14-13.989 18.62-21.826 3.567-5.1 5.934-10.967 8.33-16.712 2.129-5.109 7.732-20.69 5.21-15.765-8.84 17.259-15.733 35.457-24.225 52.89-7.523 15.44-16.836 30-23.806 45.697-15.116 34.05-26.26 73.327-43.548 106.902-.562 1.092-3.113 1.505-3.662.407-1.033-2.066-.233-4.699.407-6.918 1.417-4.914 3.237-9.761 5.697-14.244 6.036-10.997 12.815-21.58 19.713-32.057 24.323-36.94 82.61-113.492 134.805-102.9 3.487.707 6.279 8.126 2.442 10.173-3.428 1.828-7.265 2.86-10.581 4.883-12.372 7.546-24.057 16.178-36.4 23.77-7.81 4.803-16.268 8.503-24.024 13.393-16.051 10.122-38.946 35.545-53.348 5.712-4.11-8.51 15.173-16.415 15.87-10.58 2.108 17.624-1.318 35.522-.406 53.249a81.554 81.554 0 004.29 22.23c2.579 7.496 6.158 14.737 10.667 21.257 5.965 8.627 13.289 16.256 20.524 23.849 2.409 2.528 5.286 4.625 8.295 6.397 7 4.121 14.214 7.913 21.633 11.223 3.104 1.385 6.649 1.538 9.804 2.801 13.525 5.415 26.535 12.093 40.176 17.21 13.171 4.938 26.781 8.615 40.172 12.923'
			stroke='white'
			// strokeWidth='2px'
			fill='none'
			fillRule='evenodd'
		/>
	</svg>
);
