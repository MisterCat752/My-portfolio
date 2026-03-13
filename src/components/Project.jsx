import React, { useState } from 'react';
import ProjectDetails from './ProjectDetails';

const Project = ({
  title,
  description,
  github,
  subDescription,
  href,
  image,
  images,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className='flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0'
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <button
            onClick={() => {
              setPreview(null);
              setIsHidden(true);
            }}
            className='text-2xl text-white hover:text-aqua cursor-pointer transition-colors duration-300 hover-animation text-left'
          >
            {title}
          </button>
          <div className='flex gap-5 mt-2 text-sand'>
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => {
            setPreview(null);
            setIsHidden(true);
          }}
          className='flex items-center gap-1 cursor-pointer hover-animation'
        >
          Read More
          <img loading='lazy' src='assets/arrow-right.svg' className='w-5' />
        </button>
      </div>
      <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full' />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          github={github}
          images={images}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
