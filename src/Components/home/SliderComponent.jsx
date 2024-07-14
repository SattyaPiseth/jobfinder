import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";

const SliderComponent = () => {
  const imageUrls = [
    "https://jobify-prod-bucket.s3.ap-southeast-1.amazonaws.com/company/images/1666671587830_fwd_logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAUECLUQ6N7VCLRL53%2F20240713%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240713T190018Z&X-Amz-Expires=3600&X-Amz-Signature=2551928d635a6f30e60c4fc84ffd42d239dce43a9c2a8b31725318de5e605c87&X-Amz-SignedHeaders=host&x-id=GetObject",
    "https://jobify-prod-bucket.s3.ap-southeast-1.amazonaws.com/company/images/1666682979823_canadia_logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAUECLUQ6N7VCLRL53%2F20240713%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240713T190018Z&X-Amz-Expires=3600&X-Amz-Signature=0d27f22497b13d901cf3beee2691589090af14f19e5d51dbfae6a6d112766a01&X-Amz-SignedHeaders=host&x-id=GetObject",
    "https://jobify-prod-bucket.s3.ap-southeast-1.amazonaws.com/company/images/1666683270184_udaya_logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAUECLUQ6N7VCLRL53%2F20240713%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240713T190018Z&X-Amz-Expires=3600&X-Amz-Signature=62d3912da317d7d50e6cbb1ceac4f2cea74d6e12abc5477a0df05c65eece67bd&X-Amz-SignedHeaders=host&x-id=GetObject",
    "https://jobify-prod-bucket.s3.ap-southeast-1.amazonaws.com/company/images/1713840745651_wing.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAUECLUQ6N7VCLRL53%2F20240713%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240713T190018Z&X-Amz-Expires=3600&X-Amz-Signature=66b8f87e61432b9b36c4e4e8a8dad68c2411cc5ec5c05bc7777eae0dbd03313c&X-Amz-SignedHeaders=host&x-id=GetObject",
    "https://jobify-prod-bucket.s3.ap-southeast-1.amazonaws.com/company/images/1713840914008_amk.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAUECLUQ6N7VCLRL53%2F20240713%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240713T190018Z&X-Amz-Expires=3600&X-Amz-Signature=15d9a08b778783362ebedd28ec15fb232af2a4a5f7fa04e8d205d6546f2bec82&X-Amz-SignedHeaders=host&x-id=GetObject",
    "https://jobify-prod-bucket.s3.ap-southeast-1.amazonaws.com/company/images/1713840947545_acleda-bank.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAUECLUQ6N7VCLRL53%2F20240713%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240713T190018Z&X-Amz-Expires=3600&X-Amz-Signature=deb3880dbdcdc11ef07e7fe636ffc7d99b2846ee6fb31be25401fbc3982616b5&X-Amz-SignedHeaders=host&x-id=GetObject",
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
