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

const Home = () => {
	const headshotVariants = {
		hidden: {
			// opacity: 0,
			x: '-100%',
		},
		visible: {
			// opacity: 1,
			x: '0',
		},
	};

	const headshotTransition = {
		default: {
			duration: 0.25,
			ease: 'easeIn',
		},
		// opacity: {
		//   duration: 1,
		// }
	};

	const titleVariants = {
		hidden: {
			opacity: 0,
			x: '100%',
			color: 'white',
		},
		visible: {
			opacity: 0.9,
			x: '0',

		},
	};
	const titleTransition = {
		default: {
			duration: 0.25,
			ease: 'easeIn',
		},
		opacity: {
			duration: 0.5,
		},
	};

	return (
		<>
			<div className='home-content'>
				<div className='background-svg'>
					<WoodsyScene2 />
				</div>
				<div className='home-content-text'>
					<motion.div
						variants={headshotVariants}
						transition={headshotTransition}
						initial='hidden'
						animate='visible'
						className='headshot'>
						<MyAvatar />
					</motion.div>
					<motion.div
						variants={titleVariants}
						transition={titleTransition}
						initial='hidden'
						animate='visible'
						className='signatureSVGContainer'>
						<Signature />
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Home;
