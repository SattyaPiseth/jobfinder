import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";

const SliderComponent = () => {
  const imageUrls = [
    "https://jobify-prod-bucket.s3.ap-southeast-1.amazonaws.com/company/images/1666671587830_fwd_logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAUECLUQ6N7VCLRL53%2F20240714%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240714T072142Z&X-Amz-Expires=3600&X-Amz-Signature=e4774ed05f5b5570528f45032e2338794c9f529b282b48624f02fd9add4ea5f7&X-Amz-SignedHeaders=host&x-id=GetObject",
    "https://jobify-prod-bucket.s3.ap-southeast-1.amazonaws.com/company/images/1666682979823_canadia_logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAUECLUQ6N7VCLRL53%2F20240714%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240714T072142Z&X-Amz-Expires=3600&X-Amz-Signature=f77847e2d92b3761007f96bf06452df715775c3f15e52ea704796a056bc3f6cf&X-Amz-SignedHeaders=host&x-id=GetObject",
    "https://jobify-prod-bucket.s3.ap-southeast-1.amazonaws.com/company/images/1666683270184_udaya_logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAUECLUQ6N7VCLRL53%2F20240714%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240714T072316Z&X-Amz-Expires=3600&X-Amz-Signature=851baf42e994950f935c06fdddd53baadbd9ab740543a3b6133605a70b50fe35&X-Amz-SignedHeaders=host&x-id=GetObject",
    "https://jobify-prod-bucket.s3.ap-southeast-1.amazonaws.com/company/images/1713840745651_wing.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAUECLUQ6N7VCLRL53%2F20240714%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240714T072316Z&X-Amz-Expires=3600&X-Amz-Signature=a7dfcdb66ed35921855e2fe954054a0fb8e5c93e3c9f860341280e8e0139fa18&X-Amz-SignedHeaders=host&x-id=GetObject",
    "https://jobify-prod-bucket.s3.ap-southeast-1.amazonaws.com/company/images/1713840914008_amk.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAUECLUQ6N7VCLRL53%2F20240714%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240714T072316Z&X-Amz-Expires=3600&X-Amz-Signature=3f0d584b07b3c08a2bcebe132efb931022d9597fdfeff9a516a93e614dc91c32&X-Amz-SignedHeaders=host&x-id=GetObject",
    "https://jobify-prod-bucket.s3.ap-southeast-1.amazonaws.com/company/images/1713840947545_acleda-bank.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAUECLUQ6N7VCLRL53%2F20240714%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240714T072316Z&X-Amz-Expires=3600&X-Amz-Signature=4d3250e88f04a4d34be5204cc058cef7b1bec4fcff2a7832ca24be3b36df4fd6&X-Amz-SignedHeaders=host&x-id=GetObject",
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
