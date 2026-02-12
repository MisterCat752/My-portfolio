import Slider from 'react-slick';

const CustomSlider = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: () => <div className='w-3 h-3 bg-gray-400 rounded-full' />,
    dotsClass: 'slick-dots custom-dots',
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
              className='w-full  h-full рobject-contain rounded-2xl'
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default CustomSlider;
