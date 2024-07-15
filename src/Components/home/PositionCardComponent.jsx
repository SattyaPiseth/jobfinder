import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchJobs,
  selectJobs,
  selectCurrentPage,
  selectPageSize,
} from "../../redux/jobs/jobsSlice";
import { CardComponent } from "../feat-jobs/CardComponent";

const PositionCardComponent = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(selectJobs);
  const currentPage = useSelector(selectCurrentPage);
  const pageSize = useSelector(selectPageSize);

  useEffect(() => {
      dispatch(fetchJobs({ page: currentPage, pageSize }));
  }, [dispatch, status, currentPage, pageSize]);

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
            {jobs.map((job) => (
              <SwiperSlide key={job.id} className="h-auto pb-10">
                <CardComponent job={job} />
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
