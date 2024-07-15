import React from "react";

const HeroSectionComponent = () => {
  return (
    <>
      <section
        className="flex flex-col pb-20 bg-white"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="flex justify-center items-center px-16 py-10 bg-white max-md:px-5 max-md:max-w-full">
          <div className="mt-12 w-full max-w-[1031px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow mt-3.5 max-md:mt-4 max-md:max-w-full">
                  <h1 className="mt-1.5 text-7xl font-semibold text-blue-800 leading-[79px] text-left max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
                    <span className="font-bold text-slate-800">
                      Discover more than
                    </span>
                    <span className="font-bold text-blue-800">5000+ Jobs</span>
                  </h1>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d655f199c80b77e13498ccbdbb457b371b5e7da0adeaf1a1ed99dee40011475d?apiKey=ff00f11844934b2d9618929d5184b9ad&"
                    alt="Job search illustration"
                    className="z-10 mt-7 max-w-full aspect-[11.11] w-[455px]"
                  />
                  <p className="z-10 mt-1.5 text-2xl leading-10 text-slate-600 text-left max-md:max-w-full">
                    Great platform for the job seeker that searching for new
                    career heights and passionate about startups.
                  </p>
                </div>
                <button className="justify-center self-start px-8 py-1.5 mt-6 text-lg font-medium leading-8 text-white bg-blue-800 shadow-sm rounded-[96px] max-md:px-5 max-sm:mt-8">
                  Try now
                </button>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f908122607d41b6de160066a6b86ec3eb718d71c1fc9ea9f38888831235a8168?apiKey=ff00f11844934b2d9618929d5184b9ad&"
                  alt="Job seeker illustration"
                  className="w-full aspect-[0.96] max-md:max-w-full max-sm:mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSectionComponent;
