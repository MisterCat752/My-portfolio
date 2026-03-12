import Slider from 'react-slick';

const CustomSlider = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: () => (
      <div className='w-4 h-4 bg-gray-400 rounded-full transition-all' />
    ),
    dotsClass: 'slick-dots  custom-dots',
  };

  return (
    <div className='relative'>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className='flex h-[450px] justify-center'>
            <img
              src={slide}
              alt={slide}
              loading='lazy'
              className='w-full  h-full object-contain rounded-2xl'
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default CustomSlider;
