import { motion } from 'framer-motion';
import { FC } from 'react';

interface Props {
	title: string;
}

const TitleSubtitle: FC<Props> = ({ title }) => {
	const sentence = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
        // duration: 0.5,
        delay: 1,
				staggerChildren: .075,
			},
		},
	};

	const letter = {
		hidden: {
			color: 'rgba(0,0,0,1)',
		},
		visible: {
			color: '#ff5a83',
		},
	};


	return (
		<>
			<motion.h1 variants={sentence} initial='hidden' animate='visible'>
				{title.split('').map((char: string, i: number) => {
					return (
						<motion.span
							key={char + '-' + i}
							variants={letter}>
							{char}
						</motion.span>
					);
				})}{' '}
			</motion.h1>
		</>
	);
};

export default TitleSubtitle;
