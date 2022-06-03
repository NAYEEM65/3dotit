import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../utils/client';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Button } from '@mui/material';

const MainScreen = ({ banners }) => {
    return (
        <Carousel infiniteLoop interval={1500} showArrows stopOnHover swipeable useKeyboardArrows>
            {banners.map((item, index) => (
                <div key={index}>
                    <h2>{item.name}</h2>
                    <h4>{item.subHeading}</h4>
                    <img width={1200} src={urlFor(item.image)} alt="3dotit" />
                    <Button variant="contained">{item.btnText}</Button>
                </div>
            ))}
        </Carousel>
    );
};

export default MainScreen;
