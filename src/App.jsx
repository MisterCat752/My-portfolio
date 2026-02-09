import Navbar from './sections/NavBar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experiences from './sections/Experiences';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className='container mx-auto max-w-7xl h-[2000px]'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
