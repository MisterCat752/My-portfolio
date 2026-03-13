import { useState, useCallback } from 'react';
import Project from '../components/Project';
import { myProjects } from '../constants';
import { motion, useMotionValue, useSpring } from 'motion/react';

const Projects = () => {
  const [preview, setPreview] = useState(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { damping: 15, stiffness: 120 });
  const springY = useSpring(y, { damping: 15, stiffness: 120 });

  const handleMouseMove = useCallback((e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  }, []);

  const handlePreview = (img) => {
    if (!img) {
      setPreview(null);
      return;
    }

    const preload = new Image();
    preload.src = img;

    setPreview(img);
  };

  return (
    <section
      onMouseMove={preview ? handleMouseMove : undefined}
      className='relative c-space section-spacing'
      id='work'
    >
      <h2 className='text-heading'>My Selected Projects</h2>

      <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full' />

      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={handlePreview} />
      ))}

      {preview && (
        <motion.img
          src={preview}
          style={{ x: springX, y: springY }}
          className='fixed top-0 left-0 z-50 h-56 w-80 object-cover rounded-lg shadow-lg pointer-events-none will-change-transform'
        />
      )}
    </section>
  );
};

export default Projects;
