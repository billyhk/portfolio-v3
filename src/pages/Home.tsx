import './styles/Home.scss';
// import headshot from '../assets/images/ton headshot- face only lo res.png';
// import { Imporivisation1 } from '../components/SVG/Imporivisation1';
import { WoodsyScene1 } from '../components/SVG/WoodsyScene1';
import { Improvisation } from '../components/SVG/Improvisation';
// import { Whalesback } from "../components/SVG/Whalesback";
import { motion } from 'framer-motion';
import { myAvatar as MyAvatar } from '../components/SVG/myAvatar';

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
			background: 'rgba(255,255,255,.05)',
      // color: 'white',
		},
		visible: {
			opacity: 0.9,
			x: '0',
			background: 'rgba(255,255,255, .2)',
      // color: 'black'
			// background: [
			// 	'#0055FF',
			// 	'#FFF9DA',
			// 	'#E7FFF7',
			// 	'#FFC6A8',
			// 	'#FF7744',
			// 	'#F3F2F2',
			// ],
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
		background: {
      delay: 1,
			duration: 1,
			repeat: Infinity,
			repeatType: 'reverse',
		},
	};

	return (
		<>
			<div className='home-content'>
				<div className='background-svg'>
					<WoodsyScene1 />
				</div>
				<div className='home-content-text'>
					<motion.div
						variants={headshotVariants}
						transition={headshotTransition}
						initial='hidden'
						animate='visible'
						className='headshot'>
						{/* <Improvisation /> */}
						<MyAvatar />
					</motion.div>

					<div className='title'>
						<motion.div
							variants={titleVariants}
							transition={titleTransition}
							initial='hidden'
							animate='visible'>
							<h1>Hi,</h1>
							<h2>I'm Billy</h2>
						</motion.div>
					</div>
				</div>

				{/* <div className="justify-between w-full">
          <motion.div className="home-content-text"
            variants={headshotVariants}
            transition={headshotTransition}
            initial="hidden"
            animate="visible"
          >
            <Improvisation />
          </motion.div>

          <motion.div className="home-content-text"
            variants={headerVariants}
            transition={headerTransition}
            initial="hidden"
            animate="visible"
          >
            <Improvisation />
          </motion.div>
        </div> */}
			</div>
		</>
	);
};

export default Home;
