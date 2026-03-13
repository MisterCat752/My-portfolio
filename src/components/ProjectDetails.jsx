import { motion } from 'motion/react';
import { Suspense, lazy, useEffect, useState } from 'react';

const LazySlider = lazy(() => import('./CustomSlider'));

const ProjectDetails = ({
  title,
  description,
  subDescription,
  github,
  image,
  images,
  tags,
  href,
  closeModal,
}) => {
  const [showSlider, setShowSlider] = useState(false);

  // Предзагрузка изображений и задержка показа слайдера
  useEffect(() => {
    images?.forEach((img) => {
      const preload = new Image();
      preload.src = img;
    });
    const timer = setTimeout(() => setShowSlider(true), 150);
    return () => clearTimeout(timer);
  }, [images]);

  return (
    <div
      onClick={closeModal}
      className='fixed inset-0 z-50 flex items-center justify-center w-full h-full backdrop-blur-sm p-4'
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className='relative w-full max-w-4xl max-h-full sm:max-h-[90vh] p-4 overflow-y-auto border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10'
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
      >
        <h5 className='mb-4 text-2xl font-bold text-white'>{title}</h5>

        <button
          onClick={closeModal}
          className='absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 z-10'
        >
          <img src='assets/close.svg' className='w-6 h-6' />
        </button>

        {/* Слайдер / Skeleton */}
        <div className='p-2 w-full h-64 sm:h-55 md:h-96 lg:h-[28rem] rounded-lg'>
          {showSlider ? (
            <Suspense
              fallback={
                <div className='w-full h-full bg-neutral-700/30 animate-pulse rounded-lg' />
              }
            >
              <LazySlider slides={images} />
            </Suspense>
          ) : (
            <div className='w-full h-full bg-neutral-700/30 animate-pulse rounded-lg' />
          )}
        </div>

        <div className='p-5 sm:mt-5 md:mt-10 lg:mt-0 '>
          <p className='mb-3 text-neutral-400'>{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className='mb-3 text-neutral-400'>
              {subDesc}
            </p>
          ))}

          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 gap-4 flex-wrap'>
            <div className='flex flex-wrap gap-3'>
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className='rounded-lg w-10 h-10 hover-animation'
                />
              ))}
            </div>

            <div className='flex gap-3'>
              <a
                href={href}
                target='_blank'
                className='inline-flex items-center gap-1 font-medium hover-animation'
              >
                View Project
                <img src='/My-portfolio/arrow-up.svg' className='w-4 h-4' />
              </a>
              <a
                href={github}
                target='_blank'
                className='inline-flex items-center gap-1 font-medium hover-animation'
              >
                View Github
                <img
                  src='/My-portfolio/assets/logos/github.svg'
                  className='w-4 h-4'
                />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
