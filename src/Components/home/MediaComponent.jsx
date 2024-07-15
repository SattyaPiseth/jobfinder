import React from "react";

const MediaComponent = () => {
  return (
    <div>
      <section
        class="flex justify-center items-center py-16  text-5xl text-black max-md:px-5 max-md:text-xl"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <div class="flex flex-col items-center mt-15 max-w-[1070px] max-md:mt-10 max-md:max-w-full max-md:text-xl">
          <h1 class="pb-2max-md:max-w-full max-md:text-2xl">OOPs !!</h1>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ef7aac1eb8ae812f12af8a2c1f4dfd7a6fd524cfd95af281632236bd2ee02e4?apiKey=ff00f11844934b2d9618929d5184b9ad&"
            alt="404 Error Illustration"
            class="z-10 max-w-full aspect-[1.2] w-[300px] max-md:mt-10"
          />
          <h2 class="self-stretch max-md:max-w-full max-md:text-xl">
            404 - Page Not Found
          </h2>
        </div>
      </section>
    </div>
  );
};

export default MediaComponent;
