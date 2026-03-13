// CustomSlider.jsx
import Slider from 'react-slick';

const CustomSlider = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: () => (
      <div className='w-3 h-3 bg-gray-400 rounded-full transition-all' />
    ),
    dotsClass: 'slick-dots custom-dots',
    adaptiveHeight: true,
  };

  return (
    <div className='relative w-full'>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className='flex justify-center'>
            <div className='relative w-full max-w-4xl h-[50vh] sm:h-[45vh] md:h-[25rem] lg:h-[24rem] rounded-2xl flex items-center justify-center overflow-hidden bg-neutral-800'>
              <img
                src={slide}
                alt={`Slide ${index}`}
                loading='lazy'
                className='max-w-full max-h-full object-contain rounded-2xl'
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
