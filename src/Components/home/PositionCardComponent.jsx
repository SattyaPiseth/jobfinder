import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";

const PositionCardComponent = () => {
  return (
    <div>
      <section
        className="flex flex-col mt-16"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h2 className="self-start text-3xl leading-6 text-black max-md:ml-2.5">
          List Jobs
        </h2>
        <div className="mt-8 w-full max-md:mt-10">
          <Swiper
            modules={[Autoplay, Pagination, Scrollbar]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true, el: ".swiper-pagination" }}
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
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            {Array(6)
              .fill()
              .map((_, index) => (
                <SwiperSlide key={index} className="h-auto pb-10">
                  <article className="flex flex-col w-full max-w-xs mx-auto h-full bg-white shadow-lg rounded-lg border border-gray-200">
                    <div className="flex flex-col rounded-lg grow p-6 w-full text-base leading-6 bg-white">
                      <header className="flex gap-5 justify-between text-center text-indigo-600">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5b56424f758fec61a49032145e42510f80e63232849847e7e8a597820af9287?apiKey=ff00f11844934b2d9618929d5184b9ad&"
                          alt="Twitter logo"
                          className="shrink-0 w-12 rounded-full aspect-square"
                        />
                        <span className="justify-center self-start px-3 py-1 rounded-md border border-indigo-600 border-solid">
                          Full-time
                        </span>
                      </header>
                      <h3 className="mt-4 text-lg text-left font-semibold text-slate-800">
                        Backend Developer
                      </h3>
                      <div className="flex gap-2 text-slate-600">
                        <span>Twitter - </span>
                        <span>Phnom Penh</span>
                      </div>
                      <p className="mt-4 leading-7 text-left text-slate-500">
                        qwertyuio sfljwpi fghjkl cvbnm cvbnm......
                      </p>
                      <span className="justify-center px-4 py-2 mt-4 text-sm font-semibold text-white whitespace-nowrap bg-blue-800 rounded-[80px]">
                        Detail
                      </span>
                    </div>
                    <div className="mt-6 border-t border-gray-200"></div>
                  </article>
                </SwiperSlide>
              ))}
            <div className="swiper-pagination mt-8"></div>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default PositionCardComponent;
