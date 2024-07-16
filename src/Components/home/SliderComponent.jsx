import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";

const SliderComponent = () => {
  const imageUrls = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/c34719a5760b420da93199b245058d19f21dd1681df6e0596cf8bf1de786d308?apiKey=0bc16f2f0d6a46d9b1296b8c9a315482&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/1b0637bed0518cc6adfec9c73be1365577988d916ebb2ce4986966ab195df3d4?apiKey=0bc16f2f0d6a46d9b1296b8c9a315482&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/7e11de303ac43192e0f21e0fcf534706f392055a37b5c512820034c67bef43be?apiKey=0bc16f2f0d6a46d9b1296b8c9a315482&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/626db36b70df8272aaf2363bd249d433878d9fa1c04b2c7cbf832050c92b8c1c?apiKey=0bc16f2f0d6a46d9b1296b8c9a315482&",
    "http://188.166.240.174:15000/file/9994758f-3018-4310-ac66-c32ead46cd05.png",
    "https://ibccambodia.com/wp-content/uploads/2023/09/ABA-Logo-Secondary.png.webp",
  ];

  return (
    <div>
      <section className="product-gallery" data-aos="fade-up-left">
        <Swiper
          modules={[Autoplay, Pagination, Scrollbar]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
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
          {imageUrls.map((url, index) => (
            <SwiperSlide key={index} className="h-auto pb-10">
              <figure className="flex flex-col grow justify-center w-full bg-white rounded-xl">
                <img
                  loading="lazy"
                  src={url}
                  className="w-full aspect-[2]"
                  alt={`Product image ${index + 1}`}
                />
              </figure>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination mt-8"></div>
        </Swiper>
      </section>
    </div>
  );
};

export default SliderComponent;
