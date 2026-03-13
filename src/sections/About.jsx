import { useRef, useState, useEffect } from 'react';
import Card from '../components/Card';
import { Globe } from '../components/globe';
import CopyEmailButton from '../components/CopyEmailButton';
import { Frameworks } from '../components/FrameWorks';
import { techStack } from '../constants';
const About = () => {
  const floatingCards = [
    { style: { rotate: '45deg', top: '40%', left: '20%' }, text: 'GSAP' },
    { style: { rotate: '-55deg', top: '60%', left: '45%' }, text: 'Animation' },
    {
      style: { rotate: '20deg', top: '10%', left: '38%' },
      text: 'Design Patterns',
    },
    {
      style: { rotate: '-45deg', top: '55%', left: '0%' },
      text: 'Design Principles',
    },

    {
      style: { rotate: '30deg', top: '20%', right: '10%' },
      image: 'assets/logos/react.svg',
    },
    {
      style: { rotate: '30deg', top: '70%', right: '10%' },
      image: 'assets/logos/javascript.svg',
    },
    {
      style: { rotate: '-45deg', top: '70%', left: '25%' },
      image: 'assets/logos/next2.svg',
    },
    {
      style: { rotate: '-45deg', top: '5%', left: '10%' },
      image: 'assets/logos/tailwindcss.svg',
    },
  ];
  const globeRef = useRef(null);
  const [showGlobe, setShowGlobe] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowGlobe(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (globeRef.current) observer.observe(globeRef.current);

    return () => observer.disconnect();
  }, []);

  const grid2Container = useRef();
  return (
    <section className='c-space section-spacing' id='about'>
      <h2 className='text-heading'>About Me</h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
        {/* Grid 1 */}
        <div className='flex items-end grid-default-color grid-1'>
          <img
            src='assets/background/coding-pov.webp'
            width='572'
            height='350'
            loading='lazy'
            className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]'
          />
          <div className='z-10'>
            <p className='headtext'>Hi,I'm Nick</p>
            <p className='subtext'>
              I developed my frontend and backend dev skills to deliver dynamic
              and software and web applications.
            </p>
          </div>
          <div className='absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo' />
        </div>
        {/* Grid 2 */}
        <div className='grid-default-color grid-2'>
          <div
            ref={grid2Container}
            className='flex items-center justify-center w-full h-full'
          >
            <p className='flex items-end text-5xl text-gray-500'>
              CODE IS CRAFT
            </p>

            {floatingCards.map((card, index) => (
              <Card
                key={index}
                style={card.style}
                text={card.text}
                image={card.image}
                containerRef={grid2Container}
              />
            ))}
          </div>
        </div>
        {/* Grid 3 */}
        <div className='grid-black-color grid-3'>
          <div className='z-10 w-[50%]'>
            <p className='headtext'>Time Zone</p>
            <p className='subtext'>Based in Chisinau • Open to Remote Work</p>
          </div>
          <figure ref={globeRef} className='absolute left-[30%] top-0'>
            {showGlobe && <Globe />}
          </figure>
        </div>
        {/* Grid 4 */}
        <div className='grid-special-color grid-4'>
          <div className='flex flex-col items-center justify-center gap-4 size-full'>
            <p className='text-center headtext'>
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className='grid-default-color grid-5'>
          <div className='z-10 w-[50%] space-y-4'>
            <p className='headText'>Tech Stack</p>

            <p className='text-neutral-300 leading-relaxed'>
              I build scalable and high-performance web applications using
              modern frontend and backend technologies.
            </p>

            <div className='flex flex-wrap gap-2 pt-2'>
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className='px-3 py-1 text-sm border rounded-full bg-white/5 border-white/10 text-white/80 backdrop-blur'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className='absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125'>
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
