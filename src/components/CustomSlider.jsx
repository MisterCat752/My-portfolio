import Slider from 'react-slick';

export const CustomSlider = ({ slides }) => {
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
          <div key={index}>
            <img
              src={slide}
              alt={slide}
              className='w-full h-[450px] object-cover rounded-t-2xl'
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
