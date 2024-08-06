import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";
import { Badge } from "flowbite-react";
import { useTranslation } from "react-i18next";
import useFontClass from "../../common/useFontClass";
import { NavLink } from "react-router-dom";

const teamMembers = [
  {
    name: "Chao Kimhay",
    image:
      "https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-6/441192084_1916856482089375_4465425687677839651_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEOwV9NHKz7kaI-FckHxiquqiiZEnV9P_CqKJkSdX0_8CXFvrWozGSpWPfL8ERnwi-pVtXomuoWoCbMaO9ypMau&_nc_ohc=H28TCZyNKfEQ7kNvgF_R77m&_nc_ht=scontent.fpnh24-1.fna&oh=00_AYCxZEWFy2C8Pkk6VetGaa4wBYFW6Khtyf4s69lD42Sc9w&oe=669BBFEE",
    position: "Full Stack Developer",
  },
  {
    name: "Jun Thearith",
    image:
      "https://scontent.fpnh10-1.fna.fbcdn.net/v/t39.30808-6/449477760_3586716934973920_8504040381177330817_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGmOimc66FuBKIkdaXenR8UbBvoWt64ACFsG-ha3rgAIT6kBl-fELq8SKwJNzOM5zm1UUR4bc1dMNQaKrumdVIG&_nc_ohc=g3X-ZQto3isQ7kNvgHgqhM1&_nc_ht=scontent.fpnh10-1.fna&oh=00_AYBjTnDP0OE1vIqYQBaIhUBLY7IQzFkbx4V6HxpYAt_1lQ&oe=669AC143",
    position: "Backend Developer",
  },
  {
    name: "Bour Suorcdey",
    image:
      "https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-6/434657101_1137410810611098_2617317298085307546_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEzfVe8c8bVoAD4ZsdFuKKJA9RmOUreuAUD1GY5St64BduDaF1nIahWMU8OdNISHnrFYn-tHSishFOD_OgO1l2R&_nc_ohc=FIzCr2CasU8Q7kNvgF7zckT&_nc_ht=scontent.fpnh24-1.fna&oh=00_AYCK7ZN_JlP5I18tHBHmetCVu6ykOrMt3jqVi1TGfccxGw&oe=669BD38A",
    position: "Frontend Developer",
  },
  {
    name: "Oum Chansopheak",
    image:
      "https://scontent.fpnh10-1.fna.fbcdn.net/v/t39.30808-1/332167642_1006353843669992_1168317270522529645_n.jpg?stp=dst-jpg_p480x480&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEvDvAuChivUuWkVGJxubEL-DIuSFUchNz4Mi5IVRyE3B4XmtpYNPST6lk_s3O6G6snds7bLCBiJK7osz2OxX9q&_nc_ohc=91NAue9CuRQQ7kNvgHLocIT&_nc_ht=scontent.fpnh10-1.fna&oh=00_AYAu73m3D8TrnrePkkWc4WnZxoqDsu-afEdCuskcIHs1qg&oe=669AAD01",
    position: "Full Stack Developer",
  },
  {
    name: "Sey Bunrong",
    image: "https://avatar.iran.liara.run/public/boy",
    position: "Frontend Developer",
  },
  {
    name: "Porn Sreynit",
    image: "https://avatar.iran.liara.run/public/girl",
    position: "Backend Developer",
  },
  {
    name: "Mom Rotha",
    image:
      "https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-6/320925807_692883932440956_39998940771575535_n.jpg?stp=cp6_dst-jpg_p720x720&_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGOkMg6O78QyHrY1QuFLjeIC5ViwBM8zkYLlWLAEzzORsYXGaUmscW0KPBsFreOdoYLTEqH1BWzWKOnu3C7r16R&_nc_ohc=l0q8lMhlSYYQ7kNvgHAJVhp&_nc_ht=scontent.fpnh24-1.fna&oh=00_AYBSfHETbm6ggvUuMpsKfv8HF-oZ_rKATT5aW_8NgRCXyQ&oe=669BC72E",
    position: "Full Stack Developer",
  },
  {
    name: "Choeurn Triya",
    image: "https://avatar.iran.liara.run/public/girl",
    position: "Frontend Developer",
  },
];

const teachers = [
  {
    name: "Ing Muyleang",
    image: "src/assets/images/ing_muyleang.jpg",
    position: "Instructor",
  },
  {
    name: "Kim Chansokpheng",
    image: "src/assets/images/Teacher-Pheng.webp",
    position: "Instructor",
  },
];

const teamLead = {
  name: "Piseth Satthya",
  image: "src/assets/images/piseth-sattya.jpg",
  position: "Frontend Developer",
};
export default function AboutUsComponent() {
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const { fontClass } = useFontClass();

  useEffect(() => {
    AOS.init({ duration: 1000 });
    setTimeout(() => setLoading(false), 2000); // Simulate loading delay
  }, []);

  const members = [
    {
      name: "Leang Naikim",
      role: "Frontend Developer",
      image: "/images/members/naikim.jpg",
      facebook: "https://www.facebook.com/polsokhann",
      instagram: "https://www.instagram.com/polsokhann",
      email: "example@example.com",
    },
  ];
  return (
    <main
      className={`${fontClass} flex flex-col items-center px-4 py-6 md:px-10 md:py-10`}
    >
      {/* Hero Section */}
      <section className="my-4 flex flex-col items-center md:flex-row">
        <div className="text-center md:w-1/2 md:text-left">
          <p className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Deal
            </span>
            -KH
          </p>
          <p className="mt-4 text-base md:text-lg">
            Easy to use online platform where we connect businesses and
            customers. Businesses can showcase their services or products, while
            customers can discover great deals and discounts or even add their
            favorite items to cart and wishlist all in one place.
          </p>
          <NavLink to="/" className="inline-block mt-4">
            <button className="group relative inline-flex items-center justify-center px-4 py-2 text-sm md:text-base gap-2 rounded-full bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 text-white transition-transform-colors-opacity motion-reduce:transition-none">
              View Product
            </button>
          </NavLink>
        </div>
        <div className="md:w-1/2 flex justify-center items-center mt-4 md:mt-0">
          <dotlottie-player
            src="https://lottie.host/cfff7526-566f-4764-b29d-10c719def776/BUxubb72Ow.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            className="w-full max-w-[600px] h-auto"
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="my-4 flex flex-col items-center md:flex-row-reverse">
        <div className="text-center md:w-1/2 md:text-left">
          <p className="text-3xl md:text-4xl font-bold">
            Our{" "}
            <span className="text-gradient bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Story
            </span>
          </p>
          <p className="mt-4 text-base md:text-lg">
            History of Deal-KH is a testament to its commitment to customer
            satisfaction, innovation, and ethical business practices. From its
            humble beginnings to becoming a trusted name in e-commerce, Deal-KH
            has consistently focused on enhancing the shopping experience for
            its customers.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center items-center mt-4 md:mt-0">
          <div
            className="relative rounded-lg overflow-hidden"
            style={{ maxWidth: "600px" }}
          >
            <dotlottie-player
              src="https://lottie.host/53455f25-9247-48ec-87ad-410632cb9302/xwjx7kMkSG.json"
              background="transparent"
              speed="1"
              loop
              autoplay
              className="relative z-10 opacity-0 data-[loaded=true]:opacity-100 transition-opacity duration-300 rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="my-4 flex flex-col items-center md:flex-row">
        <div className="text-center md:w-1/2 md:text-left">
          <p className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Our
            </span>{" "}
            Vision
          </p>
          <p className="mt-4 text-base md:text-lg">
            Our e-commerce platform aims to become a leading global e-commerce
            platform that revolutionizes the online shopping experience by
            offering unparalleled convenience, exceptional customer service, and
            a diverse range of high-quality products.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center items-center mt-4 md:mt-0">
          <div
            className="relative rounded-lg overflow-hidden"
            style={{ maxWidth: "600px" }}
          >
            <dotlottie-player
              src="https://lottie.host/449a6380-e148-4f89-bef8-fd012d6e6faa/criFar5eMA.json"
              background="transparent"
              speed="1"
              loop
              autoplay
              className="relative z-10 opacity-0 data-[loaded=true]:opacity-100 transition-opacity duration-300 rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="my-4 flex flex-col items-center md:flex-row-reverse">
        <div className="text-center md:w-1/2 md:text-left">
          <p className="text-3xl md:text-4xl font-bold">
            Our{" "}
            <span className="text-gradient bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Mission
            </span>
          </p>
          <p className="mt-4 text-base md:text-lg">
            Our mission is to provide exceptional customer satisfaction,
            continuous innovation, and uphold ethical business practices. From
            its humble beginnings to becoming a trusted name in e-commerce,
            Deal-KH remains committed to enhancing the shopping experience for
            its customers.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center items-center mt-4 md:mt-0 md:pr-16">
          <div
            className="relative rounded-lg overflow-hidden"
            style={{ maxWidth: "600px" }}
          >
            <dotlottie-player
              src="https://lottie.host/3ee76f97-26c0-4d36-a2d9-9b85674dd2d0/CLpwN8efCJ.json"
              background="transparent"
              speed="1"
              loop
              autoplay
              className="relative z-10 opacity-0 data-[loaded=true]:opacity-100 transition-opacity duration-300 rounded-lg"
            />
          </div>
        </div>
      </section>

      <div className="my-2 text-center">
        <p className="text-3xl font-bold" data-aos="fade-up">
          Organized{" "}
          <span
            className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            By
          </span>
        </p>
        <hr
          className="shrink-0 bg-divider border-none mx-auto my-2 h-1 w-48 border-0 bg-gradient-to-r from-indigo-400 to-cyan-400"
          role="separator"
          data-aos="fade-up"
        />
      </div>

      <div
        className="my-20 flex justify-center gap-10 px-10"
        data-aos="fade-up"
      >
        <NavLink
          className="relative inline-flex items-center tap-highlight-transparent outline-none focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity"
          href="https://istad.co/"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex="0"
          role="link"
        >
          <div
            className="relative shadow-black/5 shadow-none rounded-large"
            style={{ maxWidth: "500px" }}
          >
            <img
              src="./src/assets/images/final-cstad-logo.png"
              className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
              alt="ISTAD logo"
              width="500"
              data-loaded="true"
            />
          </div>
        </NavLink>
      </div>

      <div className="my-2 text-center">
        <p className="text-3xl font-bold" data-aos="fade-up">
          Our{" "}
          <span
            className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            Mentors
          </span>
        </p>
        <hr
          className="shrink-0 bg-divider border-none mx-auto my-2 h-1 w-44 border-0 bg-gradient-to-r from-indigo-400 to-cyan-400"
          role="separator"
          data-aos="fade-up"
        />
      </div>

      <div className="flex justify-center" data-aos="fade-up">
        <div className="my-8 grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-2">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="w-72 max-w-sm overflow-hidden rounded-xl p-8 mb-4"
            >
              <div className="relative flex items-center justify-center mb-4">
                <span className="absolute inset-[-0.35%] animate-spin rounded-full bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 p-[1px] blur-sm"></span>
                <div className="relative rounded-full bg-foreground-50 p-1">
                  <div className="relative shadow-black/5 shadow-none rounded-full">
                    <img
                      src={teacher.image}
                      className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none duration-300 rounded-full h-[210px] w-[210px]"
                      alt={teacher.name}
                      data-loaded="true"
                    />
                  </div>
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="mb-2 text-center text-xl font-bold whitespace-nowrap">
                  {teacher.name}
                </div>
                {/* Add Badge for Role or Availability */}
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-semibold bg-blue-100 text-blue-800 mr-2">
                  {teacher.position}
                </span>
              </div>
              <div className="flex w-full justify-around gap-3 px-6 py-4">
                <a
                  href="#"
                  className="z-0 group inline-flex items-center justify-center rounded-full w-12 h-12 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 320 512"
                    className="w-5 h-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="z-0 group inline-flex items-center justify-center rounded-full w-12 h-12 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
                >
                  <FaGithub size={26} />
                </a>
                <a
                  href="#"
                  className="z-0 group inline-flex items-center justify-center rounded-full w-12 h-12 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
                  aria-label="LinkedIn"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 488 512"
                    className="w-5 h-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team members */}
      <div
        className="flex justify-center aos-init aos-animate"
        data-aos="fade-up"
      >
        <div className="my-8 grid grid-cols-1 gap-20">
          <div className="w-72 max-w-sm overflow-hidden rounded-xl p-8 mb-4">
            <div className="relative flex items-center justify-center mb-4">
              <span className="absolute inset-[-0.35%] animate-spin rounded-full bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 p-[1px] blur-sm"></span>
              <div className="relative rounded-full bg-foreground-50 p-1">
                <div className="relative shadow-black/5 shadow-none rounded-full">
                  <img
                    src={teamLead.image}
                    className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none duration-300 rounded-full h-[210px] w-[210px]"
                    alt={teamLead.name}
                    data-loaded="true"
                  />
                </div>
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="mb-2 text-center text-xl font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                {teamLead.name}
              </div>
              {/* Add Badge for Position */}
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-semibold bg-blue-100 text-blue-800 mr-2">
                {teamLead.position}
              </span>
            </div>
            <div className="flex w-full justify-around gap-3 px-6 py-4">
              <a
                href="#"
                className="z-0 group inline-flex items-center justify-center rounded-full w-12 h-12 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 320 512"
                  className="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a
                href="#"
                className="z-0 group inline-flex items-center justify-center rounded-full w-12 h-12 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
              >
                <FaGithub size={26} />
              </a>
              <a
                href="#"
                className="z-0 group inline-flex items-center justify-center rounded-full w-12 h-12 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
                aria-label="LinkedIn"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 488 512"
                  className="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex justify-center aos-init aos-animate"
        data-aos="fade-up"
      >
        <div className="my-8 grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((teacher, index) => (
            <div
              key={index}
              className="w-72 max-w-sm overflow-hidden rounded-xl p-8 mb-4"
            >
              <div className="relative flex items-center justify-center mb-4">
                <span className="absolute inset-[-0.35%] animate-spin rounded-full bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 p-[1px] blur-sm"></span>
                <div className="relative rounded-full bg-foreground-50 p-1">
                  <div className="relative shadow-black/5 shadow-none rounded-full">
                    <img
                      src={teacher.image}
                      className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none duration-300 rounded-full h-[210px] w-[210px]"
                      alt={teacher.name}
                      data-loaded="true"
                    />
                  </div>
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="mb-2 text-center text-xl font-bold whitespace-nowrap">
                  {teacher.name}
                </div>
                {/* Add Badge for Role or Availability */}
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-semibold bg-blue-100 text-blue-800 mr-2">
                  {teacher.position}
                </span>
              </div>
              <div className="flex w-full justify-around gap-3 px-6 py-4">
                <a
                  href="#"
                  className="z-0 group inline-flex items-center justify-center rounded-full w-12 h-12 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 320 512"
                    className="w-5 h-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="z-0 group inline-flex items-center justify-center rounded-full w-12 h-12 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
                >
                  <FaGithub size={26} />
                </a>
                <a
                  href="#"
                  className="z-0 group inline-flex items-center justify-center rounded-full w-12 h-12 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
                  aria-label="LinkedIn"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 488 512"
                    className="w-5 h-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
