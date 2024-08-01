import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const ProfileCarousel = () => {
  const profiles = [
    {
      imageSrc: './src/assets/images/ing_muyleang.jpg',
      name: 'Ing Muyleang',
      socialLinks: [
        {
          href: '#',
          viewBox: '0 0 320 512',
          path: 'M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z',
        },
        {
          href: '#',
          viewBox: '0 0 448 512',
          path: 'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z',
        },
        {
          href: '#',
          viewBox: '0 0 488 512',
          path: 'M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z',
        },
      ],
    },
    // Add more profiles as needed
  ];

  return (
    <div className="py-8">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        className="mySwiper"
      >
        {profiles.map((profile, index) => (
          <SwiperSlide key={index}>
            <div className="w-72 max-w-sm overflow-hidden rounded-xl p-8">
              <div className="relative flex items-center justify-center">
                <span className="absolute inset-[-0.35%] animate-spin rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#EC4899_0%,#EAB308_50%,#EC4899_100%)] p-[1px] blur-sm"></span>
                <div className="relative rounded-full bg-foreground-50 p-1">
                  <div className="relative shadow-black/5 shadow-none rounded-full">
                    <img
                      src={profile.imageSrc}
                      className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none duration-300 rounded-full h-[210px] w-[210px]"
                      alt={profile.name}
                      data-loaded="true"
                    />
                  </div>
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="mb-2 text-center text-xl font-bold">{profile.name}</div>
              </div>
              <div className="flex w-full justify-around gap-3 px-6 py-4">
                {profile.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="z-0 group inline-flex items-center justify-center rounded-full w-12 h-12 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-pink-500 via-yellow-500 to-pink-500 p-0.5 overflow-hidden"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox={link.viewBox}
                      className="w-5 h-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d={link.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProfileCarousel;
