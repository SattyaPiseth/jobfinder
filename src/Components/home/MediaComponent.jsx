import React from "react";
import { Link } from "react-router-dom";

const MediaComponent = () => {
  return (
    <div>
      <section
        className="flex justify-center items-center mt-20 mb-8 text-5xl text-black max-md:mt-16 max-lg:mt-28 max-sm:text-xl "
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <div className="flex flex-col items-center max-w-[1070px] max-md:max-w-full max-md:text-xl">
          <h1 className="max-md:max-w-full max-md:text-2xl">404 - OOPs !!</h1>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ef7aac1eb8ae812f12af8a2c1f4dfd7a6fd524cfd95af281632236bd2ee02e4?apiKey=ff00f11844934b2d9618929d5184b9ad&"
            alt="404 Error Illustration"
            className="z-10 max-w-full aspect-[1.2] w-[300px]"
          />
          <h2 className="self-stretch max-md:max-w-full max-md:text-xl">
            Service not available
          </h2>
          <Link to={"/"}>
          <button className="px-4 py-2 text-lg mt-6 text-white border-1 rounded-lg bg-primary-800 hover:bg-primary-900">Go Home</button></Link>
        </div>
      </section>
    </div>
  );
};

export default MediaComponent;
