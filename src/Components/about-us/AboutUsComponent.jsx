import React, { useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { Button } from "flowbite-react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Badge } from "flowbite-react";
import { useTranslation } from "react-i18next";
const AboutComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const { t } = useTranslation();
  const teamMembers = [
    {
      name: "Chao Kimhay",
      image:
        "https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-6/441192084_1916856482089375_4465425687677839651_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEOwV9NHKz7kaI-FckHxiquqiiZEnV9P_CqKJkSdX0_8CXFvrWozGSpWPfL8ERnwi-pVtXomuoWoCbMaO9ypMau&_nc_ohc=H28TCZyNKfEQ7kNvgF_R77m&_nc_ht=scontent.fpnh24-1.fna&oh=00_AYCxZEWFy2C8Pkk6VetGaa4wBYFW6Khtyf4s69lD42Sc9w&oe=669BBFEE",
      position: "Full Stack Developer",
      facebookUrl: "https://web.facebook.com/jin.hay.5",
      githubUrl: "https://github.com/ChaoKimhay",
    },
    {
      name: "Jun Thearith",
      image:
        "https://scontent.fpnh10-1.fna.fbcdn.net/v/t39.30808-6/449477760_3586716934973920_8504040381177330817_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGmOimc66FuBKIkdaXenR8UbBvoWt64ACFsG-ha3rgAIT6kBl-fELq8SKwJNzOM5zm1UUR4bc1dMNQaKrumdVIG&_nc_ohc=g3X-ZQto3isQ7kNvgHgqhM1&_nc_ht=scontent.fpnh10-1.fna&oh=00_AYBjTnDP0OE1vIqYQBaIhUBLY7IQzFkbx4V6HxpYAt_1lQ&oe=669AC143",
      position: "Backend Developer",
      facebookUrl: "https://web.facebook.com/junthearith",
      githubUrl: "https://github.com/johndoe",
    },
    {
      name: "Bour Suorcdey",
      image:
        "",
      position: "Frontend Developer",
      facebookUrl:
        "https://www.facebook.com/share/UgxpZkvJV7PjWMbj/?mibextid=LQQJ4d",
      githubUrl: "https://github.com/BourSuorcdey",
    },
    {
      name: "Oum Chansopheak",
      image:
        "https://scontent.fpnh10-1.fna.fbcdn.net/v/t39.30808-1/332167642_1006353843669992_1168317270522529645_n.jpg?stp=dst-jpg_p480x480&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEvDvAuChivUuWkVGJxubEL-DIuSFUchNz4Mi5IVRyE3B4XmtpYNPST6lk_s3O6G6snds7bLCBiJK7osz2OxX9q&_nc_ohc=91NAue9CuRQQ7kNvgHLocIT&_nc_ht=scontent.fpnh10-1.fna&oh=00_AYAu73m3D8TrnrePkkWc4WnZxoqDsu-afEdCuskcIHs1qg&oe=669AAD01",
      position: "Full Stack Developer",
      facebookUrl: "https://web.facebook.com/chan.sopheakk",
      githubUrl: "https://github.com/sopheakchan/",
    },
    {
      name: "Sey Bunrong",
      image: "https://avatar.iran.liara.run/public/boy",
      position: "Frontend Developer",
      facebookUrl: "https://www.facebook.com/sey.bunrong.56",
      githubUrl: "https://github.com/Ezrann",
    },
    {
      name: "Porn Sreynit",
      image: "hhttps://www.facebook.com/profile.php?id=100053459543749",
      position: "Backend Developer",
      facebookUrl: "https://www.facebook.com/profile.php?id=100053459543749",
      githubUrl: "https://github.com/sreynitporn",
    },
    {
      name: "Mom Rotha",
      image:
        "https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-6/320925807_692883932440956_39998940771575535_n.jpg?stp=cp6_dst-jpg_p720x720&_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGOkMg6O78QyHrY1QuFLjeIC5ViwBM8zkYLlWLAEzzORsYXGaUmscW0KPBsFreOdoYLTEqH1BWzWKOnu3C7r16R&_nc_ohc=l0q8lMhlSYYQ7kNvgHAJVhp&_nc_ht=scontent.fpnh24-1.fna&oh=00_AYBSfHETbm6ggvUuMpsKfv8HF-oZ_rKATT5aW_8NgRCXyQ&oe=669BC72E",
      position: "Full Stack Developer",
      facebookUrl: "https://www.facebook.com/ah.rotha.71271",
      githubUrl: "https://github.com/momrotha",
    },
    {
      name: "Choeurn Triya",
      image: "https://avatar.iran.liara.run/public/girl",
      position: "Frontend Developer",
      facebookUrl: "https://www.facebook.com/triya.choeurn?mibextid=LQQJ4d",
      githubUrl: "https://github.com/johndoe",
    },
  ];

  const teachers = [
    {
      name: "Ing Muyleang",
      image:
        "https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-6/315397373_103340025937791_1662063095834796465_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeH7ugqXU4CG1_s2nk8Zt1OYuHQlSfrlMBm4dCVJ-uUwGYMiEiIZnL7I1NGmnbaoOCwDJWUZTZ8XV53kIYMHad8g&_nc_ohc=-9wV60tyOOAQ7kNvgEAzj7w&_nc_ht=scontent.fpnh24-1.fna&oh=00_AYDO-7WdgQtTyeFV3WaDXvHdHjUa3XUqvFjatbhbAxoMkQ&oe=669BCAE2",
      position: "Instructor",
      facebookUrl: "https://www.facebook.com/profile.php?id=100087853805063",
      githubUrl: "https://github.com/MuyleangIng",
    },
    {
      name: "Kim Chansokpheng",
      image: "https://cyber-stad.vercel.app/images/team/sokpheng.jpg",
      position: "Instructor",
      facebookUrl: "https://www.facebook.com/profile.php?id=100085375058298",
      githubUrl: "https://github.com/sokpheng001",
    },
  ];

  const teamLead = {
    name: "Piseth Satthya",
    image:
      "https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-6/399618439_2118987915126245_8162232501416778588_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGrgfzolRJSM811981AJ0IqIAn3Dk-mWZkgCfcOT6ZZmXnrOJGq8cNa65ItxKJs6NcnXorE8WrU_BVZhRux4S8v&_nc_ohc=q6z-7Lu-wqAQ7kNvgGuoqAp&_nc_ht=scontent.fpnh24-1.fna&oh=00_AYD47stbze98WAv3SIq15UISm0zfH1tJK8vvdZc5ZH3zzw&oe=669BA192",
    position: "Team Leader - Frontend Developer",
    facebookUrl: "https://web.facebook.com/piseth.sattya.1",
    githubUrl: "https://github.com/SattyaPiseth",
  };
  return (
    <div className="mt-20 flex flex-col px-5">
      <div className="container mx-auto px-4 font-suwannaphum ">
        <div className="flex flex-wrap items-center mb-10 ">
          <div className="w-full md:w-6/12">
            <div
              data-aos="zoom-in-up"
              className="text-left text-3xl font-bold text-blue-600"
            >
              <span className="text-4xl font-bold text-gradient bg-gradient-to-r from-primary-800 to-orange-500 bg-clip-text text-transparent">
                JOB QUICK
              </span>
            </div>
            <div
              data-aos="zoom-in-up"
              className=" text-left mt-6 text-2xl text-black"
            >
              {t("About-us.About-description")}
            </div>
          </div>
          <div className="mb-10 w-full md:w-6/12">
            <dotlottie-player
              src="https://lottie.host/cfff7526-566f-4764-b29d-10c719def776/BUxubb72Ow.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </div>
        </div>

        <div className="flex flex-wrap items-center my-10 mt-20">
          <div className="mt-20 w-full md:w-6/12 order-2 md:order-1">
            <dotlottie-player
              src="https://lottie.host/53455f25-9247-48ec-87ad-410632cb9302/xwjx7kMkSG.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <div className="w-full md:w-6/12 order-1 md:order-2">
            <div
              data-aos="zoom-in-up"
              className="text-left text-3xl font-bold text-blue-600"
            >
              <span className="text-4xl font-bold text-gradient bg-gradient-to-r from-primary-800 to-orange-500 bg-clip-text text-transparent">
                {t("About-us.Who")}
              </span>
            </div>
            <div
              data-aos="zoom-in-up"
              className="text-left mt-6 text-2xl text-black"
            >
              {t("About-us.detail.Who")}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center my-10 mt-20">
          <div className="w-full md:w-6/12">
            <div
              data-aos="zoom-in-up"
              className="text-left text-3xl font-bold text-blue-600"
            >
              <span className="text-4xl font-bold text-gradient bg-gradient-to-r from-primary-800 to-orange-500 bg-clip-text text-transparent">
                {t("About-us.Goals")}
              </span>
            </div>
            <div
              data-aos="zoom-in-up"
              className="text-left mt-6 text-2xl text-black"
            >
              {t("About-us.detail.Goals")}
            </div>
          </div>
          <div className=" w-full md:w-6/12">
            <dotlottie-player
              src="https://lottie.host/449a6380-e148-4f89-bef8-fd012d6e6faa/criFar5eMA.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </div>
        </div>
        <div className="flex flex-wrap items-center my-10 ">
          <div className="w-full md:w-6/12 order-2 md:order-1 mt-20">
            <dotlottie-player
              src="https://lottie.host/3ee76f97-26c0-4d36-a2d9-9b85674dd2d0/CLpwN8efCJ.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <div className="w-full md:w-6/12 order-1 md:order-2">
            <div
              data-aos="zoom-in-up"
              className="ml-10 text-left text-3xl font-bold text-blue-600"
            >
              <span className="text-4xl font-bold text-gradient bg-gradient-to-r from-primary-800 to-orange-500 bg-clip-text text-transparent">
                {t("About-us.Perspective")}
              </span>
            </div>
            <div
              data-aos="zoom-in-up"
              className="ml-10 text-left mt-6 text-2xl text-black"
            >
              {t("About-us.detail.Perspective")}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 mx-auto max-w-full w-[562px] max-md:mt-10">
        <div
          className=" text-3xl font-suwannaphum font-bold text-blue-600 max-md:mt-10 mb-24 mt-40 "
          data-aos="fade-up"
        >
          <span className="text-4xl font-bold text-gradient bg-gradient-to-r from-primary-800 to-orange-500 bg-clip-text text-transparent">
            {t("About-us.Instructor")}
          </span>
        </div>
        <div className="flex gap-5 max-md:flex-col">
          {teachers.map((teacher) => (
            <div
              key={teacher.name}
              className="flex flex-col justify-center items-center w-1/2 max-md:w-full"
              data-aos="fade-up"
            >
              <div className="flex flex-col  justify-center items-center grow text-2xl font-bold text-black max-md:mt-2">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="border-4 border-white animate-borderPulse shrink-0 my-5 rounded-full aspect-square h-[200px] w-[200px] object-cover"
                />
                <div className="text-center mb-3">{teacher.name}</div>
                <Badge className="text-sm" color="success">
                  {teacher.position}
                </Badge>
                <div class="flex w-full justify-around gap-3 px-8 py-4">
                  <a
                    href="#"
                    class="z-0 group inline-flex items-center justify-center rounded-full w-10 h-10 border-2 transition-transform-colors-opacity motion-reduce:transition-none bg-gradient-to-tr from-primary-800 to-accent-950 p-0.5 overflow-hidden"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 320 512"
                      class="w-5 h-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    class="z-0 group inline-flex items-center justify-center rounded-full w-10 h-10 border-2 transition-transform-colors-opacity motion-reduce:transition-none bg-gradient-to-tr from-primary-800 to-accent-950 p-0.5 overflow-hidden"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      class="w-5 h-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    class="z-0 group inline-flex items-center justify-center rounded-full w-10 h-10 border-2 transition-transform-colors-opacity motion-reduce:transition-none bg-gradient-to-tr from-primary-800 to-accent-950 p-0.5 overflow-hidden"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 488 512"
                      class="w-5 h-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="text-3xl font-suwannaphum font-bold text-blue-600 max-md:mt-10 mb-24 mt-40 "
        data-aos="fade-up"
      >
        <span className="text-4xl font-bold text-gradient bg-gradient-to-r from-primary-800 to-orange-500 bg-clip-text text-transparent">
          {t("About-us.Member")}
        </span>
      </div>
      <div className="flex flex-col items-center mt-10" data-aos="fade-up">
        <img
          src={teamLead.image}
          alt={teamLead.name}
          className="border-4 border-white animate-borderPulse shrink-0 rounded-full aspect-square h-[200px] w-[200px] object-cover"
        />
        <div className="mt-9 text-2xl font-bold text-black mb-3">
          {teamLead.name}
        </div>
        <Badge className="text-sm" color="success">
          {teamLead.position}
        </Badge>
        <div class="flex w-full justify-around gap-3 px-[500px] py-4">
          <a
            href="#"
            class="z-0 group inline-flex items-center justify-center rounded-full w-10 h-10 border-2 transition-transform-colors-opacity motion-reduce:transition-none bg-gradient-to-tr from-primary-800 to-accent-950 p-0.5 overflow-hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 320 512"
              class="w-5 h-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
            </svg>
          </a>
          <a
            href="#"
            class="z-0 group inline-flex items-center justify-center rounded-full w-10 h-10 border-2 transition-transform-colors-opacity motion-reduce:transition-none bg-gradient-to-tr from-primary-800 to-accent-950 p-0.5 overflow-hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              class="w-5 h-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z" />
            </svg>
          </a>
          <a
            href="#"
            class="z-0 group inline-flex items-center justify-center rounded-full w-10 h-10 border-2 transition-transform-colors-opacity motion-reduce:transition-none bg-gradient-to-tr from-primary-800 to-accent-950 p-0.5 overflow-hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 488 512"
              class="w-5 h-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="container px-5 my-10 mx-auto">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((person) => (
            <div
              key={person.name}
              className="flex flex-col items-center text-2xl font-bold text-black"
              data-aos="fade-up"
            >
              <div className="border-4 border-white animate-borderPulse mt-10 rounded-full aspect-square bg-zinc-300 h-[200px] w-[200px] overflow-hidden">
                {person.image ? (
                  <img
                    src={person.image}
                    alt={person.name}
                    className=" h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center">
                    No Image
                  </div>
                )}
              </div>
              <div className="mt-9 mb-3">{person.name}</div>
              <Badge className="text-sm" color="success">
                {person.position}
              </Badge>
              <div class="flex w-full justify-around gap-3 px-14 py-4">
                <a
                  href="#"
                  class="z-0 group inline-flex items-center justify-center rounded-full w-10 h-10 border-2 transition-transform-colors-opacity motion-reduce:transition-none bg-gradient-to-tr from-primary-800 to-accent-950 p-0.5 overflow-hidden"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 320 512"
                    class="w-5 h-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </a>
                <a
                  href="#"
                  class="z-0 group inline-flex items-center justify-center rounded-full w-10 h-10 border-2 transition-transform-colors-opacity motion-reduce:transition-none bg-gradient-to-tr from-primary-800 to-accent-950 p-0.5 overflow-hidden"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    class="w-5 h-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z" />
                  </svg>
                </a>
                <a
                  href="#"
                  class="z-0 group inline-flex items-center justify-center rounded-full w-10 h-10 border-2 transition-transform-colors-opacity motion-reduce:transition-none bg-gradient-to-tr from-primary-800 to-accent-950 p-0.5 overflow-hidden"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 488 512"
                    class="w-5 h-5 text-white"
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
      {/* Contact */}
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
              <span className="text-4xl font-bold text-gradient bg-gradient-to-r from-primary-800 to-orange-500 bg-clip-text text-transparent">
                {t("Contact-us.title")}
              </span>
            </div>
            <div
              data-aos="zoom-in-up"
              className=" mt-5 text-2xl text-black max-md:flex-col max-md:max-w-full max-md:mt-3"
            >
              {t("Contact-us.description")} <br />
              {t("Contact-us.description2")}
            </div>
            <div className="self-start mt-12  max-md:mt-10 max-md:ml-2.5">
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
    </div>
  );
};

export default AboutComponent;
