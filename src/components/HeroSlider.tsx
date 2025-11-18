// Relative path: /src/components/HeroSlider.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import React from 'react';

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  imageUrl: string;
  alt?: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: 'Crystal Clear Display',
    subtitle:
      'Experience stunning visuals with our premium monitors, delivering exceptional color accuracy and immersive viewing.',
    ctaText: 'Shop now',
    ctaHref: '/products/monitors',
    imageUrl: '/slider/4.webp',
    alt: 'High-resolution professional monitor',
  },
  {
    id: 2,
    title: 'Work. Create. Repeat.',
    subtitle:
      'Power your day with reliable capacity and premium build quality.',
    ctaText: 'Explore',
    ctaHref: '/collections/new',
    imageUrl: '/slider/5.webp',
    alt: 'Lifestyle tech setup',
  },
];

function ProHeroSlider() {
  return (
    <section className="w-full mx-auto mb-6" id="home">
      <div className="relative shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          fadeEffect={{ crossFade: true }}
          loop
          speed={900}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="h-[calc(70vh-70px)] sm:h-[80vh] md:h-[90vh] lg:h-[100vh] 2xl:h-[120vh] pro-swiper"
        >
          {slides.map((s, i) => (
            <SwiperSlide key={s.id}>
              <div className="relative w-full h-full">
                {/* Background image */}
                <Image
                  src={s.imageUrl}
                  alt={s.alt ?? s.title}
                  fill
                  priority={i === 0}
                  className="object-cover"
                />

                {/* Left gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-7xl mx-auto w-full px-8">
                    <div className="max-w-xl">
                      <h2 className="text-white text-xl sm:text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl font-normal 2xl:font-semibold tracking-tight">
                        {s.title}
                      </h2>
                      <p className="mt-3 text-white/90 text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl leading-relaxed">
                        {s.subtitle}
                      </p>
                      {s.ctaText && s.ctaHref && (
                        <Link
                          href={s.ctaHref}
                          className="inline-flex mt-5 items-center bg-white/90 hover:bg-white transition px-6 py-2 md:px-8 md:py-2.5 lg:px-10 lg:py-2.5 2xl:px-12 2xl:py-2.5 text-sm md:text-base lg:text-lg 2xl:text-xl font-medium text-gray-900 backdrop-blur"
                        >
                          {s.ctaText}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="pointer-events-none absolute inset-0 -xl ring-1 ring-white/10" />
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <>
      <ProHeroSlider />
      {/* <ItemsSection /> */}
    </>
  )
}
