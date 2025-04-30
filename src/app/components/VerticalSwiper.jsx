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
  pagination={{ clickable: true }}
  modules={[Pagination]}
  className="mySwiper h-screen" // 👈 Full viewport height
>
  {sliderData.map((item, index) => (
    <SwiperSlide key={index} className="h-screen">
      <Link href={`/collections/${item.id}`}>
        <Image
          src={item.img}
          alt={item.img}
          fill
          className="object-cover"
        />
      </Link>
    </SwiperSlide>
  ))}
</Swiper>

  );
}
