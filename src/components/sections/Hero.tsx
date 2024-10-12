'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from '@/styles/hero.module.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const slides = [
  {
    title: 'Software Development',
    description: 'Innovative Software, Tailored for Tomorrow'
  },
  {
    title: 'Cyber Security',
    description: 'Your Shield in the Cyber Frontier'
  },
  {
    title: 'Digital Marketing',
    description: 'Turning Clicks into Customers'
  }
];

const Hero = () => {
  return (
    <section className={`${styles.hero} container-fluid d-flex justify-content-center align-items-center py-5`}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="d-flex justify-content-center align-items-center">
            <div className="text-center">
              <h2 className="display-4 fw-medium">{slide.title}</h2>
              <p className="lead text-muted fw-medium">{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Hero