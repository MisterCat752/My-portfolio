import { motion } from 'motion/react';
import { Suspense, lazy } from 'react';

// ленивый импорт
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
  return (
    <div
      onClick={closeModal}
      className='fixed inset-0 z-50 flex items-center justify-center w-full h-full backdrop-blur-sm'
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className='relative w-full max-w-4xl max-h-[90vh] p-4 overflow-y-auto border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <h5 className='mb-2 text-2xl font-bold text-white'>{title}</h5>

        <button
          onClick={closeModal}
          className='absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 z-10'
        >
          <img src='assets/close.svg' className='w-6 h-6' />
        </button>
        <div className='p-2'>
          <Suspense
            fallback={
              <div className='text-white text-center'>Loading slider...</div>
            }
          >
            <LazySlider slides={images} />
          </Suspense>
        </div>

        <div className='p-5'>
          <p className='mb-3 font-normal text-neutral-400'>{description}</p>

          {subDescription.map((subDesc, index) => (
            <p key={index} className='mb-3 font-normal text-neutral-400'>
              {subDesc}
            </p>
          ))}

          <div className='flex items-center justify-between mt-4 flex-wrap gap-2'>
            <div className='flex gap-3'>
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className='rounded-lg size-10 hover-animation'
                />
              ))}
            </div>

            <div className='flex gap-3'>
              <a
                href={href}
                target='_blank'
                className='inline-flex  items-center  gap-1 font-medium cursor-pointer hover-animation'
              >
                View Project
                <img src='/My-portfolio/arrow-up.svg' className='size-4' />
              </a>
              <a
                href={github}
                target='_blank'
                className='inline-flex  items-center  gap-1 font-medium cursor-pointer hover-animation'
              >
                View Github
                <img
                  src='/My-portfolio/assets/logos/github.svg'
                  className='size-4'
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
