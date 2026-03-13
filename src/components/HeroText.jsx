import { FlipWords } from './FlipWords';
import { motion } from 'motion/react';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const HeroText = () => {
  const words = ['Secure', 'Modern', 'Scalable'];

  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='visible'
      className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'
    >
      {/* Desktop */}
      <div className='hidden md:flex flex-col c-space'>
        <motion.h1 variants={item} className='text-4xl font-medium'>
          Hi, I'm Nick Frontend Developer
        </motion.h1>

        <div className='flex flex-col items-start'>
          <motion.p
            variants={item}
            className='text-5xl font-medium text-neutral-300'
          >
            A Developer <br /> Dedicated to Crafting
          </motion.p>

          <motion.div variants={item}>
            <FlipWords
              words={words}
              className='font-black text-white text-8xl'
            />
          </motion.div>

          <motion.p
            variants={item}
            className='text-4xl font-medium text-neutral-300'
          >
            Web Solutions
          </motion.p>
        </div>
      </div>

      {/* Mobile */}
      <div className='flex flex-col space-y-6 md:hidden'>
        <motion.p variants={item} className='text-4xl font-medium'>
          Hi, I'm Nick Frontend Developer
        </motion.p>

        <div>
          <motion.p
            variants={item}
            className='text-5xl font-black text-neutral-300'
          >
            Building
          </motion.p>

          <motion.div variants={item}>
            <FlipWords
              words={words}
              className='font-bold text-white text-7xl'
            />
          </motion.div>

          <motion.p
            variants={item}
            className='text-4xl font-black text-neutral-300'
          >
            Web Applications
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroText;
