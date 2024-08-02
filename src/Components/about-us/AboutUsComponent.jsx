import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FaFacebook } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
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
    image:
      "https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-6/315397373_103340025937791_1662063095834796465_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeH7ugqXU4CG1_s2nk8Zt1OYuHQlSfrlMBm4dCVJ-uUwGYMiEiIZnL7I1NGmnbaoOCwDJWUZTZ8XV53kIYMHad8g&_nc_ohc=-9wV60tyOOAQ7kNvgEAzj7w&_nc_ht=scontent.fpnh24-1.fna&oh=00_AYDO-7WdgQtTyeFV3WaDXvHdHjUa3XUqvFjatbhbAxoMkQ&oe=669BCAE2",
    position: "Instructor",
  },
  {
    name: "Kim Chansokpheng",
    image: "https://cyber-stad.vercel.app/images/team/sokpheng.jpg",
    position: "Instructor",
  },
];

const teamLead = {
  name: "Piseth Satthya",
  image:
    "https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-6/399618439_2118987915126245_8162232501416778588_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGrgfzolRJSM811981AJ0IqIAn3Dk-mWZkgCfcOT6ZZmXnrOJGq8cNa65ItxKJs6NcnXorE8WrU_BVZhRux4S8v&_nc_ohc=q6z-7Lu-wqAQ7kNvgGuoqAp&_nc_ht=scontent.fpnh24-1.fna&oh=00_AYD47stbze98WAv3SIq15UISm0zfH1tJK8vvdZc5ZH3zzw&oe=669BA192",
  position: "Team Leader - Frontend Developer",
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
    // <main
    //   className={`${fontClass} flex flex-col items-center max-sm:mt-16 max-lg:mt-28 `}
    // >
    //   <header
    //     className="mt-16 text-3xl font-bold text-center text-primary-800"
    //     data-aos="zoom-in"
    //   >
    //     {loading ? <Skeleton width={300} height={40} /> : t("About-us.Who")}
    //   </header>

    //   <section className="my-8 w-full max-w-[1324px] max-sm:mt-4 max-md:mt-10 max-md:px-3">
    //     <div className="flex gap-5 max-md:flex-col">
    //       <article
    //         className="flex flex-col w-1/2 max-md:w-full"
    //         data-aos="fade-right"
    //       >
    //         <div className="flex flex-col py-5 text-black max-md:py-3">
    //           <h2 className="text-3xl font-bold text-primary-800 text-center max-sm:text-2xl max-lg:text-2xl">
    //             {loading ? (
    //               <Skeleton width={200} height={30} />
    //             ) : (
    //               t("About-us.About")
    //             )}
    //           </h2>
    //           <p className="mt-2.5 text-3xl text-left leading-normal max-sm:text-xl max-lg:text-xl">
    //             {loading ? (
    //               <Skeleton count={5} />
    //             ) : (
    //               <span className="font-medium text-3xl">
    //                 {t("About-us.About-description")}
    //               </span>
    //             )}
    //           </p>
    //         </div>
    //       </article>
    //       <article
    //         className="flex flex-col w-1/2 max-md:w-full"
    //         data-aos="fade-up"
    //       >
    //         {loading ? (
    //           <Skeleton height={400} />
    //         ) : (
    //           <img
    //             loading="lazy"
    //             src="https://cdn.builder.io/api/v1/image/assets/TEMP/14d60b765aa680482bc6790be018038a0f5cc01743feb27e7bf787e9a922e198?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7"
    //             className="w-full aspect-[1.18] max-md:mt-10"
    //             alt="Job Finder"
    //           />
    //         )}
    //       </article>
    //     </div>
    //   </section>

    //   <section className="mt-16 w-full max-w-[1334px] max-md:mt-10 max-md:px-3">
    //     <div className="flex gap-5 max-md:flex-col">
    //       <article
    //         className="flex flex-col w-1/3 max-md:w-full"
    //         data-aos="fade-up"
    //       >
    //         <div className="flex flex-col items-center text-2xl text-black max-md:mt-10">
    //           {loading ? (
    //             <Skeleton circle={true} height={150} width={150} />
    //           ) : (
    //             <img
    //               loading="lazy"
    //               src="https://cdn.builder.io/api/v1/image/assets/TEMP/2469ae50e4211d88e9c457bb5bc8d673eec8f7c9e79563a35c74219510458138?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7"
    //               className="w-[150px] aspect-[1.03]"
    //               alt="Team Member"
    //             />
    //           )}
    //           <h3 className="mt-2 font-bold">{t("About-us.Who")}</h3>
    //           <p className="px-2 mt-7 text-center max-sm:text-xl max-lg:text-xl">
    //             {t("About-us.detail.Who")}
    //           </p>
    //         </div>
    //       </article>

    //       <article
    //         className="flex flex-col w-1/3 max-md:w-full"
    //         data-aos="fade-up"
    //       >
    //         <div className="flex flex-col items-center text-2xl text-black max-md:mt-10">
    //           {loading ? (
    //             <Skeleton circle={true} height={150} width={150} />
    //           ) : (
    //             <img
    //               loading="lazy"
    //               src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd4f69b0a22997cc99923b24acd4051a855f3aa5f8b3e5b3ddd87f277f908b32?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7"
    //               className="w-[151px] aspect-[1.1]"
    //               alt="Team Member"
    //             />
    //           )}
    //           <h3 className="mt-[15px] font-bold">{t("About-us.Goals")}</h3>
    //           <p className="px-2 mt-7 text-center max-sm:text-xl max-lg:text-xl leading-tight">
    //             {t("About-us.detail.Goals")}
    //           </p>
    //         </div>
    //       </article>

    //       <article
    //         className="flex flex-col w-1/3 max-md:w-full"
    //         data-aos="fade-up"
    //       >
    //         <div className="flex flex-col items-center text-2xl text-black max-md:mt-10">
    //           {loading ? (
    //             <Skeleton circle={true} height={150} width={150} />
    //           ) : (
    //             <img
    //               loading="lazy"
    //               src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ee0e3a04bd5f0bf8764a70e4203a49b24b6a25b930db18d54d01c66d9087a10?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7"
    //               className="w-[151px] aspect-[1.1]"
    //               alt="Team Member"
    //             />
    //           )}
    //           <h3 className="mt-3 font-bold">{t("About-us.Perspective")}</h3>
    //           <p className="px-2 mt-8 text-center max-sm:text-xl max-lg:text-xl">
    //             {t("About-us.detail.Perspective")}
    //           </p>
    //         </div>
    //       </article>
    //     </div>
    //   </section>

    //   <section className="mt-16 text-4xl font-bold text-primary-800 max-md:mt-10 max-sm:text-3xl">
    //     {t("About-us.Instructor")}
    //   </section>

    //   <section className="mt-16 max-w-full w-[562px] max-md:mt-10">
    //     <div className="flex gap-5 max-md:flex-col">
    //       {teachers.map((teacher) => (
    //         <article
    //           key={teacher.name}
    //           className="flex flex-col justify-center items-center w-1/2 max-md:w-full"
    //           data-aos="fade-up"
    //         >
    //           <div className="flex flex-col justify-center items-center grow text-2xl font-bold text-black max-md:mt-2">
    //             {loading ? (
    //               <Skeleton circle={true} height={200} width={200} />
    //             ) : (
    //               <img
    //                 src={teacher.image}
    //                 alt={teacher.name}
    //                 className="shrink-0 my-5 rounded-full aspect-square h-[200px] w-[200px] object-cover"
    //               />
    //             )}
    //             <div className="text-center mb-3">{teacher.name}</div>
    //             <Badge color="success">{teacher.position}</Badge>
    //             <div className="flex flex-row gap-2 mt-2">
    //               <a href="#">
    //                 <FaFacebook className="aspect-[2.63]" />
    //               </a>
    //               <a href="#">
    //                 <IoLogoGithub className="aspect-[2.63]" />
    //               </a>
    //             </div>
    //           </div>
    //         </article>
    //       ))}
    //     </div>
    //   </section>

    //   <section className="mt-16 text-4xl font-bold text-primary-800 max-md:mt-10 max-sm:text-3xl">
    //     {t("About-us.Member")}
    //   </section>

    //   <article className="flex flex-col items-center mt-10" data-aos="fade-up">
    //     {loading ? (
    //       <Skeleton circle={true} height={200} width={200} />
    //     ) : (
    //       <img
    //         src={teamLead.image}
    //         alt={teamLead.name}
    //         className="shrink-0 rounded-full aspect-square h-[200px] w-[200px] object-cover"
    //       />
    //     )}
    //     <div className="mt-9 text-2xl font-bold text-black mb-3">
    //       {teamLead.name}
    //     </div>
    //     <Badge color="success">{teamLead.position}</Badge>
    //     <div className="flex flex-row gap-2 mt-2">
    //       <a href="#">
    //         <FaFacebook className="w-6 h-6 aspect-[2.63]" />
    //       </a>
    //       <a href="#">
    //         <IoLogoGithub className="w-6 h-6 aspect-[2.63]" />
    //       </a>
    //     </div>
    //   </article>

    //   <section className="container my-10 mx-auto">
    //     <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    //       {teamMembers.map((person) => (
    //         <article
    //           key={person.name}
    //           className="flex flex-col items-center text-2xl font-bold text-black"
    //           data-aos="fade-up"
    //         >
    //           <div className="mt-10 rounded-full aspect-square bg-zinc-300 h-[200px] w-[200px] overflow-hidden">
    //             {loading ? (
    //               <Skeleton circle={true} height={200} width={200} />
    //             ) : (
    //               <img
    //                 src={person.image}
    //                 alt={person.name}
    //                 className="h-full w-full object-cover"
    //               />
    //             )}
    //           </div>
    //           <div className="mt-9 mb-3">{person.name}</div>
    //           <Badge color="success">{person.position}</Badge>
    //           <div className="flex flex-row gap-2 mt-2">
    //             <a href="#">
    //               <FaFacebook className="w-6 h-6" />
    //             </a>
    //             <a href="#">
    //               <IoLogoGithub className="w-6 h-6" />
    //             </a>
    //           </div>
    //         </article>
    //       ))}
    //     </div>
    //   </section>
    // </main>
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
          ></dotlottie-player>
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
            History of Deal-Kh is a testament to its commitment to customer
            satisfaction, innovation, and ethical business practices. From its
            humble beginnings to becoming a trusted name in e-commerce, Deal-Kh
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
            ></dotlottie-player>
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
            ></dotlottie-player>
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
            Deal-Kh remains committed to enhancing the shopping experience for
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
            ></dotlottie-player>
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
          rel="noopener noreferrer" // Add rel="noopener noreferrer" for security reasons
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
              alt="About us"
              width="500"
              data-loaded="true"
            />
          </div>
        </NavLink>
      </div>
      <div class="my-2 text-center">
        <p class="text-3xl font-bold aos-init aos-animate" data-aos="fade-up">
          Our{" "}
          <span
            class="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent aos-init aos-animate"
            data-aos="fade-up"
          >
            Mentors
          </span>
        </p>
        <hr
          class="shrink-0 bg-divider border-none mx-auto my-2 h-1 w-44 border-0 bg-gradient-to-r from-indigo-400 to-cyan-400 aos-init aos-animate"
          role="separator"
          data-aos="fade-up"
        />
      </div>
      <div class="flex justify-center aos-init aos-animate" data-aos="fade-up">
        <div class="my-8 grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-2">
          {/* <!-- Mentor Card 1 --> */}
          <div class="w-72 max-w-sm overflow-hidden rounded-xl p-8">
            <div class="relative flex items-center justify-center">
              <span class="absolute inset-[-0.35%] animate-spin rounded-full bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 p-[1px] blur-sm"></span>
              <div class="relative rounded-full bg-foreground-50 p-1">
                <div class="relative shadow-black/5 shadow-none rounded-full">
                  <img
                    src="./src/assets/images/ing_muyleang.jpg"
                    class="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none duration-300 rounded-full h-[210px] w-[210px]"
                    alt="Ing Muyleang"
                    data-loaded="true"
                  />
                </div>
              </div>
            </div>
            <div class="px-6 py-4">
              <div class="mb-2 text-center text-xl font-bold">Ing Muyleang</div>
            </div>
            <div class="flex w-full justify-around gap-3 px-6 py-4">
              <a
                href="#"
                class="z-0 group inline-flex items-center justify-center rounded-full w-12 h-12 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
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
                class="z-0 group inline-flex items-center justify-center rounded-full w-12 h-12 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
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
                class="z-0 group inline-flex items-center justify-center rounded-full w-12 h-12 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
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

          {/* <!-- Mentor Card 1 --> */}
          <div class="w-72 max-w-sm overflow-hidden rounded-xl p-8">
            <div class="relative flex items-center justify-center">
              <span class="absolute inset-[-0.35%] animate-spin rounded-full bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 p-[1px] blur-sm"></span>
              <div class="relative rounded-full bg-foreground-50 p-1">
                <div class="relative shadow-black/5 shadow-none rounded-full">
                  <img
                    src="src/assets/images/Teacher-Pheng.webp"
                    class="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none duration-300 rounded-full h-[210px] w-[210px]"
                    alt="Kim Chansokpheng"
                    data-loaded="true"
                  />
                </div>
              </div>
            </div>
            <div class="px-6 py-4">
              <div class="mb-2 text-center text-xl font-bold whitespace-nowrap">
                Kim Chansokpheng
              </div>
            </div>

            <div class="flex w-full justify-around gap-3 px-6 py-4">
              <a
                href="#"
                class="z-0 group inline-flex items-center justify-center rounded-full w-12 h-12 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
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
                class="z-0 group inline-flex items-center justify-center rounded-full w-12 h-12 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
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
                class="z-0 group inline-flex items-center justify-center rounded-full w-12 h-12 border-2 transition-transform-colors-opacity motion-reduce:transition-none border-transparent bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-0.5 overflow-hidden"
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
      </div>
      <div class="mt-8 text-center">
        <p class="text-3xl font-bold aos-init aos-animate" data-aos="fade-up">
          Our{" "}
          <span
            class="bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent aos-init aos-animate"
            data-aos="fade-up"
          >
            Members
          </span>
        </p>
        <hr
          class="shrink-0 bg-divider border-none mx-auto my-2 h-1 w-48 border-0 bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 aos-init aos-animate"
          role="separator"
          data-aos="fade-up"
        />
      </div>
    </main>
  );
}
