/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../utils/client';
import Image from 'next/image';
import { Button } from '@mui/material';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MainScreen = ({ banners }) => {
    return (
        <div style={{ maxWidth: '1920px' }}>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                effect="fade"
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {banners.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div>
                            <h2>{item.name}</h2>
                            <h4>{item.subHeading}</h4>
                            <img width={1200} height={500} src={urlFor(item.image)} alt="3dotit" />
                            <Button variant="contained">{item.btnText}</Button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MainScreen;
