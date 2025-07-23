"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface AppCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  className?: string;
  iphoneFrame?: string; // Path to the iPhone frame image
}

export const AppCarousel: React.FC<AppCarouselProps> = ({
  images,
  className = "",
  iphoneFrame,
}) => {
  return (
    <div className={`w-full max-w-md mx-auto relative ${className}`}>
      {/* Left gradient overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white via-white/50 to-transparent z-20 pointer-events-none"></div>

      {/* Right gradient overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white via-white/50 to-transparent z-20 pointer-events-none"></div>

      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        spaceBetween={20}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="app-carousel"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full aspect-[9/16] max-w-[350px] mx-auto">
              {/* Background screenshot */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 350px, 350px"
              />

              {/* iPhone Frame Overlay */}
              {iphoneFrame && (
                <div className="absolute inset-0 pointer-events-none">
                  <Image
                    src={iphoneFrame}
                    alt="iPhone Frame"
                    fill
                    className="object-contain z-10"
                    sizes="(max-width: 768px) 350px, 350px"
                  />
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .app-carousel {
          padding: 30px 0 60px 0;
          width: 100%;
        }

        .app-carousel .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
        }

        .app-carousel .swiper-pagination {
          bottom: 20px !important;
        }

        .app-carousel .swiper-pagination-bullet {
          background: #41cf8f;
          opacity: 0.5;
          width: 8px;
          height: 8px;
        }

        .app-carousel .swiper-pagination-bullet-active {
          opacity: 1;
          background: #41cf8f;
        }
      `}</style>
    </div>
  );
};
