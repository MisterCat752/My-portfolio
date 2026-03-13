import { motion } from 'motion/react';

const Card = ({ style, text, image, containerRef }) => {
  const commonProps = {
    style,
    drag: true,
    dragConstraints: containerRef,
    dragElastic: 0.6,
    dragMomentum: false,
    whileHover: { scale: 1.05 },
    className: 'absolute cursor-grab will-change-transform',
  };

  if (image && !text) {
    return (
      <motion.img
        {...commonProps}
        src={image}
        loading='lazy'
        className={`${commonProps.className} w-14`}
      />
    );
  }

  return (
    <motion.div
      {...commonProps}
      className={`${commonProps.className} px-2 py-3 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem]`}
    >
      {text}
    </motion.div>
  );
};

export default Card;
