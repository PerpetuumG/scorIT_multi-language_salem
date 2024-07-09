// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { SLIDES } from '../../../../../lib/constants';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ScreenshotsCard = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {SLIDES.map(item => (
          <SwiperSlide key={item.id}>
            <Image
              src={item.img}
              alt={item.alt}
              width={550}
              height={500}
              className={'rounded-lg'}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ScreenshotsCard;
