import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="flex flex-col space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
              Discover more than{" "}
              <span className="text-blue-600">5000+ Jobs</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Explore a platform tailor-made for job seekers aiming for new
              career heights in the vibrant startup ecosystem. Join thousands
              who've found their ideal job through our network.
            </p>
            <button className="bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors duration-150 py-2 px-6 sm:px-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Try now
            </button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/66865f27e7e971b8c33bb1e84aa26db6adc223a0ab7fabee902377592f58db9c?apiKey=ad7733614e794f228aa68fbfd330edec&"
              alt="Job seeker using the platform"
              className="max-w-full lg:max-w-1/2 h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
