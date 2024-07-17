import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const SliderComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  const imageUrls = [
    {
      url: "https://cdn.builder.io/api/v1/image/assets/TEMP/c34719a5760b420da93199b245058d19f21dd1681df6e0596cf8bf1de786d308?apiKey=0bc16f2f0d6a46d9b1296b8c9a315482&",
      width: 800, // actual width
      height: 600, // actual height
    },
    {
      url: "https://cdn.builder.io/api/v1/image/assets/TEMP/1b0637bed0518cc6adfec9c73be1365577988d916ebb2ce4986966ab195df3d4?apiKey=0bc16f2f0d6a46d9b1296b8c9a315482&",
      width: 800,
      height: 600,
    },
    {
      url: "https://cdn.builder.io/api/v1/image/assets/TEMP/7e11de303ac43192e0f21e0fcf534706f392055a37b5c512820034c67bef43be?apiKey=0bc16f2f0d6a46d9b1296b8c9a315482&",
      width: 800,
      height: 600,
    },
    {
      url: "https://cdn.builder.io/api/v1/image/assets/TEMP/626db36b70df8272aaf2363bd249d433878d9fa1c04b2c7cbf832050c92b8c1c?apiKey=0bc16f2f0d6a46d9b1296b8c9a315482&",
      width: 800,
      height: 600,
    },
    {
      url: "https://ecommerce.techinsights.guru/file/9994758f-3018-4310-ac66-c32ead46cd05.png",
      width: 600,
      height: 290,
    },
    {
      url: "https://ibccambodia.com/wp-content/uploads/2023/09/ABA-Logo-Secondary.png.webp",
      width: 4882,
      height: 1907,
    },
  ];

  useEffect(() => {
    // Simulating image loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <section className="product-gallery" data-aos="fade-up-left">
        {isLoading ? (
          <Swiper
            modules={[Autoplay, Pagination, Scrollbar]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            {imageUrls.map((image, index) => (
              <SwiperSlide key={index} className="h-auto pb-10">
                <figure className="flex flex-col grow justify-center w-full bg-white rounded-xl">
                  <Skeleton height={200} width="100%" className="w-full" />
                </figure>
              </SwiperSlide>
            ))}
            <div className="swiper-scrollbar mt-8"></div>
            <div className="swiper-pagination mt-8"></div>
          </Swiper>
        ) : (
          <Swiper
            modules={[Autoplay, Pagination, Scrollbar]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            {imageUrls.map((image, index) => (
              <SwiperSlide key={index} className="h-auto pb-10">
                <figure className="flex flex-col grow justify-center w-full bg-white rounded-xl">
                  <img
                    loading="lazy"
                    src={image.url}
                    width={image.width}
                    height={image.height}
                    className="w-full"
                    alt={`Product image ${index + 1}`}
                    style={{ aspectRatio: `${image.width}/${image.height}` }}
                  />
                </figure>
              </SwiperSlide>
            ))}
            <div className="swiper-scrollbar mt-8"></div>
            <div className="swiper-pagination mt-8"></div>
          </Swiper>
        )}
      </section>
    </div>
  );
};

export default SliderComponent;
