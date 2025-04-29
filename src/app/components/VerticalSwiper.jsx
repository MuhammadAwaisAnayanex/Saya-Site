'use client'; // 👈 VERY IMPORTANT

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import '../styles/VerticalSwiper.css'; // Or wherever your custom styles are
import Image from 'next/image';
import Link from 'next/link';
import { slides } from '../lib/sliderData';

export default function VerticalSwiper() {
    const sliderData=slides
    console.log("sliderDataLibrari => ",sliderData)
  return (
    <Swiper
      direction="vertical"
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {
        sliderData.map((item,index)=>{
            return <SwiperSlide key={index}><Link href={`/collections/${item.id}`}><Image src={item.img} alt={item.img} /></Link></SwiperSlide>
        })
      }
    </Swiper>
  );
}
