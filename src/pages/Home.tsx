import './styles/Home.scss';
// import headshot from '../assets/images/ton headshot- face only lo res.png';
// import { Imporivisation1 } from '../components/SVG/Imporivisation1';
// import { WoodsyScene1 } from '../components/SVG/WoodsyScene1';
import { WoodsyScene2 } from '../components/SVG/WoodsyScene2';
import { Improvisation } from '../components/SVG/Improvisation';
// import { Whalesback } from "../components/SVG/Whalesback";
import { motion } from 'framer-motion';
import { myAvatar as MyAvatar } from '../components/SVG/myAvatar';
import { Signature } from '../components/SVG/Signature';
import { useEffect, useState } from 'react';
import TitleSubtitle from '../components/TextContent/Title';

interface AnimationVariant {
	hidden: {
		[key: string]: string | number;
	};
	visible: {
		[key: string]: string | number;
	};
}

const Home = () => {
	const [height, setHeight] = useState<number>(window.innerHeight);
	const [width, setWidth] = useState<number>(window.innerWidth);

	useEffect(() => {
		const updateWindowDimensions = () => {
			setHeight(window.innerHeight);
			setWidth(window.innerWidth);
		};

		window.addEventListener('resize', updateWindowDimensions);

		return () => window.removeEventListener('resize', updateWindowDimensions);
	}, []);

	const headshotVariants = {
		hidden: {
			x: '-150%',
		},
		visible: {
			x: '0',
			...(width < 600 &&
				height < 1000 && {
					x: '-20%',
				}),
			...(height < 500 && {
				y: '25%',
				scale: 0.5,
			}),
			...(height > 1000 && {
				y: '-50%',
				x: '20%',
				scale: 2,
			}),
		},
	};
	const headshotTransition = {
		default: {
			duration: 0.25,
			ease: 'easeIn',
		},
		x: {
			delay: 2.5,
			duration: 0.5,
			ease: 'easeInOut',
		},
		scale: {
			duration: 0.75,
			ease: 'easeInOut',
		},
	};

	const titleVariants = {
		hidden: {
			y: '-300%',
			x: '0%',
		},
		visible: {
			x: '0',
			y: '0',
		},
	};
	const titleTransition = {
		default: {
			delay: 0.25,
			duration: 0.5,
			type: 'spring',
			stiffness: 75,
		},
	};

	return (
		<>
			<div className='home-content'>
				<div className='background-svg'>
					<WoodsyScene2 />
				</div>
				<div className='home-content-elements'>
					<motion.div
						variants={headshotVariants}
						transition={headshotTransition}
						initial='hidden'
						animate='visible'
						className='headshot'>
						<MyAvatar />
					</motion.div>
					<div className='signatureSVGContainer'>
						<Signature />
					</div>
					<div className='home-content-text'>
						<motion.div
							variants={titleVariants}
							transition={titleTransition}
							initial='hidden'
							animate='visible'>
							<TitleSubtitle title='billy kaufman frontend developer' />
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
