'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import '../styles/VerticalSwiper.css';
import Image from 'next/image';
import Link from 'next/link';
import { slides } from '../lib/sliderData';

import { ChevronDown } from 'lucide-react'; // 👈 Lucide icon library (optional)

export default function VerticalSwiper() {
  const swiperRef = useRef(null);
  const sliderData = slides;

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="relative h-screen w-full">
      <Swiper
        ref={swiperRef}
        direction="vertical"
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={{ enabled: true }}
        modules={[Pagination, Mousewheel, Keyboard]}
        className="mySwiper h-full"
      >
        {sliderData.map((item, index) => (
          <SwiperSlide key={index} className="h-screen relative">
            <Link href={`/collections/${item.id}`}>
              <Image
                src={item.img}
                alt={`Slide ${index}`}
                fill
                className="object-cover"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 👇 Arrow button at the bottom center */}
      <button
  onClick={handleNextSlide}
  className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-lg transition z-50"
>
  <ChevronDown size={28} className="text-black" />
</button>

    </div>
  );
}
