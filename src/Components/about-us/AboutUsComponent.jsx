import React, { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import "react-loading-skeleton/dist/skeleton.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { Badge } from "flowbite-react";
import { useTranslation } from "react-i18next";
import useFontClass from "../../common/useFontClass";
import { NavLink } from "react-router-dom";
import mentor_muyleang from './../../assets/images/ing_muyleang.jpg'
import mentor_sokpheng from './../../assets/images/Teacher-Pheng.webp'

export default function AboutUsComponent() {
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const { fontClass } = useFontClass();
  useEffect(() => {
    AOS.init({ duration: 1000 });
    setTimeout(() => setLoading(false), 2000); // Simulate loading delay
  }, []);
  const teamMembers = [
    {
      name: "Chao Kimhay",
      image:
        "https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-6/441192084_1916856482089375_4465425687677839651_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEOwV9NHKz7kaI-FckHxiquqiiZEnV9P_CqKJkSdX0_8CXFvrWozGSpWPfL8ERnwi-pVtXomuoWoCbMaO9ypMau&_nc_ohc=H28TCZyNKfEQ7kNvgF_R77m&_nc_ht=scontent.fpnh24-1.fna&oh=00_AYCxZEWFy2C8Pkk6VetGaa4wBYFW6Khtyf4s69lD42Sc9w&oe=669BBFEE",
      position: "Team Member",
    },
    {
      name: "Jun Thearith",
      image:
        "https://scontent.fpnh10-1.fna.fbcdn.net/v/t39.30808-6/449477760_3586716934973920_8504040381177330817_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGmOimc66FuBKIkdaXenR8UbBvoWt64ACFsG-ha3rgAIT6kBl-fELq8SKwJNzOM5zm1UUR4bc1dMNQaKrumdVIG&_nc_ohc=g3X-ZQto3isQ7kNvgHgqhM1&_nc_ht=scontent.fpnh10-1.fna&oh=00_AYBjTnDP0OE1vIqYQBaIhUBLY7IQzFkbx4V6HxpYAt_1lQ&oe=669AC143",
      position: "Team Member",
    },
    {
      name: "Bour Suorcdey",
      image:
        "https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-6/434657101_1137410810611098_2617317298085307546_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEzfVe8c8bVoAD4ZsdFuKKJA9RmOUreuAUD1GY5St64BduDaF1nIahWMU8OdNISHnrFYn-tHSishFOD_OgO1l2R&_nc_ohc=FIzCr2CasU8Q7kNvgF7zckT&_nc_ht=scontent.fpnh24-1.fna&oh=00_AYCK7ZN_JlP5I18tHBHmetCVu6ykOrMt3jqVi1TGfccxGw&oe=669BD38A",
      position: "Team Member",
    },
    {
      name: "Oum Chansopheak",
      image:
        "https://scontent.fpnh10-1.fna.fbcdn.net/v/t39.30808-1/332167642_1006353843669992_1168317270522529645_n.jpg?stp=dst-jpg_p480x480&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEvDvAuChivUuWkVGJxubEL-DIuSFUchNz4Mi5IVRyE3B4XmtpYNPST6lk_s3O6G6snds7bLCBiJK7osz2OxX9q&_nc_ohc=91NAue9CuRQQ7kNvgHLocIT&_nc_ht=scontent.fpnh10-1.fna&oh=00_AYAu73m3D8TrnrePkkWc4WnZxoqDsu-afEdCuskcIHs1qg&oe=669AAD01",
      position: "Team Member",
    },
    {
      name: "Sey Bunrong",
      image: "https://avatar.iran.liara.run/public/boy",
      position: "Team Member",
    },
    {
      name: "Porn Sreynit",
      image: "https://avatar.iran.liara.run/public/girl",
      position: "Team Member",
    },
    {
      name: "Mom Rotha",
      image:
        "https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-6/320925807_692883932440956_39998940771575535_n.jpg?stp=cp6_dst-jpg_p720x720&_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGOkMg6O78QyHrY1QuFLjeIC5ViwBM8zkYLlWLAEzzORsYXGaUmscW0KPBsFreOdoYLTEqH1BWzWKOnu3C7r16R&_nc_ohc=l0q8lMhlSYYQ7kNvgHAJVhp&_nc_ht=scontent.fpnh24-1.fna&oh=00_AYBSfHETbm6ggvUuMpsKfv8HF-oZ_rKATT5aW_8NgRCXyQ&oe=669BC72E",
      position: "Team Member",
    },
    {
      name: "Choeurn Triya",
      image: "https://avatar.iran.liara.run/public/girl",
      position: "Team Member",
    },
  ];

  const teachers = [
    {
      name: t("About-us.mentors.Ing-Muyleang"),
      image: mentor_muyleang,
      position: "Instructor",
    },
    {
      name: t("About-us.mentors.Kim-Chansokpheng"),
      image: mentor_sokpheng,
      position: "Instructor",
    },
  ];

  const teamLead = [
    {
      name: "Piseth Satthya",
      image:
        "https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-6/399618439_2118987915126245_8162232501416778588_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGrgfzolRJSM811981AJ0IqIAn3Dk-mWZkgCfcOT6ZZmXnrOJGq8cNa65ItxKJs6NcnXorE8WrU_BVZhRux4S8v&_nc_ohc=q6z-7Lu-wqAQ7kNvgGuoqAp&_nc_ht=scontent.fpnh24-1.fna&oh=00_AYD47stbze98WAv3SIq15UISm0zfH1tJK8vvdZc5ZH3zzw&oe=669BA192",
      position: "Team Leader",
    },
  ];
  return (
    <main
      className={`${fontClass} flex flex-col items-center px-4 py-6 md:px-10 md:py-10`}
    >
      {/* Hero Section */}
      <section className="my-4 flex flex-col items-center md:flex-row">
        <div className="text-center md:w-1/2 md:text-left mt-10">
          <p className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-kantumruy">
              JOB-QUICK
            </span>
          </p>
          <p
            className="mt-4 text-2xl md:text-2xl leading-5"
            style={{ lineHeight: "1.35" }}
          >
            {t("About-us.About-description")}
          </p>
          <NavLink to="/" className="inline-block mt-4"></NavLink>
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
            <span className="text-gradient bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              {t("About-us.Who")}
            </span>
          </p>
          <p
            className="mt-4 text-2xl md:text-2xl leading-5"
            style={{ lineHeight: "1.35" }}
          >
            {t("About-us.detail.Who")}
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
              {t("About-us.Goals")}
            </span>
          </p>
          <p
            className="mt-4 text-2xl md:text-2xl leading-5"
            style={{ lineHeight: "1.35" }}
          >
            {t("About-us.detail.Goals")}
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
            <span className="text-gradient bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              {t("About-us.Perspective")}
            </span>
          </p>
          <p
            className="mt-4 text-2xl md:text-2xl leading-5"
            style={{ lineHeight: "1.35" }}
          >
            {t("About-us.detail.Perspective")}
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
        className="my-10 flex justify-center gap-10 px-10"
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
          <div className="flex justify-center items-center w-full py-">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc4ff153c8a8e5bf9c98136fb6d8ed297c3d759da1126d945096b3c29a7d7654?apiKey=ff00f11844934b2d9618929d5184b9ad&"
              className="self-start mt-3 w-[800px] aspect-[6.25] max-md:max-w-full"
              alt="Feature on media coverage"
            />
          </div>
        </NavLink>
      </div>

      <div className="my-2 text-center">
        <p className="text-3xl font-bold " data-aos="fade-up">
          <span
            className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mt-10"
            data-aos="fade-up"
          >
            {t("About-us.Instructor")}
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
          {/* Mentor Card 1 */}
          {teachers.map((teacher) => (
            <div
              className="w-72 max-w-sm overflow-hidden rounded-xl p-8"
              key={teacher.name}
            >
              <div className="relative flex items-center justify-center">
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
              <div className="px-6 py-2">
                <div className="mb-2 text-center text-xl font-bold whitespace-nowrap">
                  {teacher.name}
                </div>
                <div className="text-center text-xl font-bold"></div>
                <Badge className="text-sm flex justify-center bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400">
                  {teacher.position}
                </Badge>
              </div>
              <div className="flex w-full justify-around gap-3 px-6 py-4">
                <a
                  href="#"
                  className="z-0 group inline-flex items-center justify-center rounded-full w-10 h-10 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
                  aria-label="Facebook"
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
                  className="z-0 group inline-flex items-center justify-center rounded-full w-10 h-10 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
                  aria-label="Instagram"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="w-5 h-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="z-0 group inline-flex items-center justify-center rounded-full w-10 h-10 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
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
          {/* Mentor Card 1 */}
        </div>
      </div>
      <div
        className="text-3xl font-suwannaphum font-bold text-blue-600 max-md:mt-10 mb-24  "
        data-aos="fade-up"
      >
        <span className="text-4xl text-gradient bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          {t("About-us.Member")}
        </span>
      </div>
      <div className="grid grid-cols-1 gap-20">
        {/* Leader Card 1 */}
        {teamLead.map((lead) => (
          <div
            className="w-72 max-w-sm overflow-hidden rounded-xl p-8"
            key={lead.name}
          >
            <div className="relative flex items-center justify-center">
              <span className="absolute inset-[-0.35%] animate-spin rounded-full bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 p-[1px] blur-sm"></span>
              <div className="relative rounded-full bg-foreground-50 p-1">
                <div className="relative shadow-black/5 shadow-none rounded-full">
                  <img
                    src="src/assets/images/Teacher-Pheng.webp"
                    className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none duration-300 rounded-full h-[210px] w-[210px]"
                    alt={lead.name}
                    data-loaded="true"
                  />
                </div>
              </div>
            </div>
            <div className="px-6 py-2">
              <div className="mb-2 text-center text-xl font-bold whitespace-nowrap">
                {lead.name}
              </div>
              {/* <div className="text-center text-lg">{lead.name}</div> */}
              <Badge className="text-sm flex justify-center bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400">
                {lead.position}
              </Badge>
            </div>

            <div className="flex w-full justify-around gap-3 px-6 py-4">
              <a
                href="#"
                className="z-0 group inline-flex items-center justify-center rounded-full w-10 h-10 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
                aria-label="Facebook"
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
                className="z-0 group inline-flex items-center justify-center rounded-full w-10 h-10 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
                aria-label="Instagram"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z" />
                </svg>
              </a>
              <a
                href="#"
                className="z-0 group inline-flex items-center justify-center rounded-full w-10 h-10 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
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
      {/* member */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <div
            className="w-72 max-w-sm overflow-hidden rounded-xl p-8"
            key={member.name}
          >
            <div className="relative flex items-center justify-center">
              <span className="absolute inset-[-0.35%] animate-spin rounded-full bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 p-[1px] blur-sm"></span>
              <div className="relative rounded-full bg-foreground-50 p-1">
                <div className="relative shadow-black/5 shadow-none rounded-full">
                  <img
                    src={member.image}
                    className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none duration-300 rounded-full h-[210px] w-[210px]"
                    alt={member.name}
                    data-loaded="true"
                  />
                </div>
              </div>
            </div>
            <div className="px-6 py-2">
              <div className="mb-2 text-center text-xl font-bold whitespace-nowrap">
                {member.name}
              </div>
              <Badge className="text-sm flex justify-center bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400">
                {member.position}
              </Badge>
            </div>

            <div className="flex w-full justify-around gap-3 px-6 py-4">
              <a
                href="#"
                className="z-0 group inline-flex items-center justify-center rounded-full w-10 h-10 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden "
                aria-label="Facebook"
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
                className="z-0 group inline-flex items-center justify-center rounded-full w-10 h-10 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
                aria-label="Instagram"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z" />
                </svg>
              </a>
              <a
                href="#"
                className="z-0 group inline-flex items-center justify-center rounded-full w-10 h-10 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
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

      <div className="flex flex-wrap items-center my-10">
        <div className="w-full md:w-6/12 order-2 md:order-1 mt-20">
          <dotlottie-player
            src="https://lottie.host/3751fb5a-7130-4e52-8cf8-993e5a07512f/0xxfoUoJ4E.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div
          data-aos="zoom-in-up"
          className="w-full md:w-6/12 order-1 md:order-2 mt-10"
        >
          <div className="flex flex-col grow text-left font-suwannaphum text-xl whitespace-nowrap text-black text-opacity-60 max-md:mt-10 max-md:max-w-full">
            <div
              data-aos="zoom-in-up"
              className="text-blue-600 text-left text-3xl font-bold max-md:max-w-full"
            >
              <span className="text-gradient bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent text-4xl">
                {t("Contact-us.title")}
              </span>
            </div>
            <div
              data-aos="zoom-in-up"
              className=" mt-4 text-2xl text-black max-md:flex-col max-md:max-w-full max-md:mt-3"
            >
              {t("Contact-us.description")} <br />
              {t("Contact-us.description2")}
            </div>
            <div className="self-start mt-4 max-md:mt-10 max-md:ml-2.5">
              {t("Contact-us.name")}
            </div>
            <input
              type="text"
              className="shrink-0 mt-2.5 rounded-lg border border-black border-solid h-[50px] max-md:max-w-full"
            />
            <div className="self-start mt-3 max-md:ml-2.5">
              {t("Contact-us.email")}
            </div>
            <input
              type="email"
              className="shrink-0 mt-3 rounded-lg border border-black border-solid h-[50px] max-md:max-w-full"
            />
            <div className="flex flex-col mt-2.5 max-md:max-w-full">
              <div className="self-start ">{t("Contact-us.message")}</div>
              <textarea className="shrink-0 mt-3 rounded-lg border border-black border-solid h-[150px] max-md:max-w-full"></textarea>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button type="submit" color="blue">
                {t("Contact-us.send_message")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
