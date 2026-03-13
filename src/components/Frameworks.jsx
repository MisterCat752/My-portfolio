import { OrbitingCircles } from './OrbitingCircles';

export function Frameworks() {
  const skills = [
    'auth0',
    'blazor',
    'next2',
    'django',
    'postgresql',
    'css3',
    'git',
    'html5',
    'javascript',
    'react',
    'sqlite',
    'tailwindcss',
    'vitejs',
  ];

  const reversed = [...skills].reverse();

  return (
    <div className='relative flex h-[15rem] w-full flex-col items-center justify-center'>
      <OrbitingCircles iconSize={40}>
        {skills.map((skill) => (
          <Icon key={skill} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>

      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {reversed.map((skill) => (
          <Icon key={skill} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}
const Icon = ({ src }) => (
  <img
    src={src}
    loading='lazy'
    decoding='async'
    className='rounded-sm hover:scale-110 transition-transform duration-200'
  />
);
