import React, { useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Badge } from "flowbite-react";

export default function AboutUsComponent() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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

  return (
    <div className="flex flex-col items-center bg-white">
      <div
        className="mt-20 text-3xl font-bold font-suwannaphum text-center text-black max-md:mt-10"
        data-aos="zoom-in"
      >
        ពួកយេីងជានរណា?
      </div>

      <div className="my-8 w-full max-w-[1324px] px-5 max-md:mt-10 max-md:px-3">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-1/2 max-md:w-full" data-aos="fade-right">
            <div className="flex flex-col px-5 py-5 text-black max-md:py-3">
              <div className="text-3xl font-bold font-suwannaphum text-center">អំពី​ពួក​យើង</div>
              <div className="mt-2.5 text-3xl font-suwannaphum leading-[52px]">
                Job Finder គឺជាគេហទំព័រស្វែងរកការងារតាមអ៊ីនធឺណិតដែលត្រូវបានបង្កើតឡើងក្នុងឆ្នាំ2024
                ដោយនិស្សិតជំនាញមូលដ្ឋានគ្រឹះមកពីមជ្ឈមណ្ឌលវិទ្យាសស្ត្រនិងបច្ចេកវិទ្យាអភិវឌ្ឍន៍កម្រិតខ្ពសដែលអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ស្វែងរកដាក់ពាក្យនិងតមដនឱកាសការងារសម្រួលដល់វឌ្ឍនភាពការងារដែលជំរុញដោយទិន្នន័យ។
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 max-md:w-full" data-aos="fade-up">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/14d60b765aa680482bc6790be018038a0f5cc01743feb27e7bf787e9a922e198?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/14d60b765aa680482bc6790be018038a0f5cc01743feb27e7bf787e9a922e198?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/14d60b765aa680482bc6790be018038a0f5cc01743feb27e7bf787e9a922e198?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14d60b765aa680482bc6790be018038a0f5cc01743feb27e7bf787e9a922e198?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/14d60b765aa680482bc6790be018038a0f5cc01743feb27e7bf787e9a922e198?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/14d60b765aa680482bc6790be018038a0f5cc01743feb27e7bf787e9a922e198?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14d60b765aa680482bc6790be018038a0f5cc01743feb27e7bf787e9a922e198?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/14d60b765aa680482bc6790be018038a0f5cc01743feb27e7bf787e9a922e198?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=2000 2000w"
              className="w-full aspect-[1.18] max-md:mt-10"
              alt="Job Finder"
            />
          </div>
        </div>
      </div>

      <div className="px-5 mt-16 w-full max-w-[1334px] max-md:mt-10 max-md:px-3">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-1/3 max-md:w-full" data-aos="fade-up">
            <div className="flex flex-col items-center text-2xl text-black max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2469ae50e4211d88e9c457bb5bc8d673eec8f7c9e79563a35c74219510458138?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2469ae50e4211d88e9c457bb5bc8d673eec8f7c9e79563a35c74219510458138?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2469ae50e4211d88e9c457bb5bc8d673eec8f7c9e79563a35c74219510458138?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2469ae50e4211d88e9c457bb5bc8d673eec8f7c9e79563a35c74219510458138?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2469ae50e4211d88e9c457bb5bc8d673eec8f7c9e79563a35c74219510458138?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2469ae50e4211d88e9c457bb5bc8d673eec8f7c9e79563a35c74219510458138?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2469ae50e4211d88e9c457bb5bc8d673eec8f7c9e79563a35c74219510458138?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2469ae50e4211d88e9c457bb5bc8d673eec8f7c9e79563a35c74219510458138?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=2000 2000w"
                className="w-[150px] aspect-[1.03]"
                alt="Team Member"
              />
              <div className="mt-4 font-bold font-suwannaphum">យើង​ជា​នរណា</div>
              <div className="font-suwannaphum mt-7 text-center">
                ពួកយើងគឺជានិសិត្សអាហារូបករណ៍ជំនាញមូលដ្ឋានគ្រឹះជំនាន់ទីពីរនៃមជ្ឈមណ្ឌលវិទ្យាសាស្ត្រនិងបច្ចេកវិទ្យាអភិវឌ្ឍន៍កម្រិតខ្ពសដែលបានបញ្ចប់វគ្គសិក្សារយៈពេល៤ខែទៅលើជំនាញ Java និង Website Design ។
              </div>
            </div>
          </div>

          <div className="flex flex-col w-1/3 max-md:w-full" data-aos="fade-up">
            <div className="flex flex-col items-center text-2xl text-black max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd4f69b0a22997cc99923b24acd4051a855f3aa5f8b3e5b3ddd87f277f908b32?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dd4f69b0a22997cc99923b24acd4051a855f3aa5f8b3e5b3ddd87f277f908b32?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd4f69b0a22997cc99923b24acd4051a855f3aa5f8b3e5b3ddd87f277f908b32?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd4f69b0a22997cc99923b24acd4051a855f3aa5f8b3e5b3ddd87f277f908b32?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd4f69b0a22997cc99923b24acd4051a855f3aa5f8b3e5b3ddd87f277f908b32?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd4f69b0a22997cc99923b24acd4051a855f3aa5f8b3e5b3ddd87f277f908b32?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd4f69b0a22997cc99923b24acd4051a855f3aa5f8b3e5b3ddd87f277f908b32?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd4f69b0a22997cc99923b24acd4051a855f3aa5f8b3e5b3ddd87f277f908b32?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=2000 2000w"
                className="w-[151px] aspect-[1.1]"
                alt="Team Member"
              />
              <div className="mt-5 font-bold font-suwannaphum">បេសកម្ម​របស់​យើង</div>
              <div className="font-suwannaphum mt-6 text-center">
                បេសកកម្មរបស់យើងគឺអនុញ្ញាតឲ្យអ្នកស្វែងរកការងារលើបណ្តាញអ៊ីនធឺណិតនូវវេទិកាដែលងាយស្រួលប្រើនិងសុវត្ថិភាពដែលភ្ជាប់អ្នកស្វែងរកការងារជាមួយនិយោជកប្រកបដោយប្រសិទ្ធភាព។
              </div>
            </div>
          </div>

          <div className="flex flex-col w-1/3 max-md:w-full" data-aos="fade-up">
            <div className="flex flex-col items-center text-2xl text-black max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ee0e3a04bd5f0bf8764a70e4203a49b24b6a25b930db18d54d01c66d9087a10?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3ee0e3a04bd5f0bf8764a70e4203a49b24b6a25b930db18d54d01c66d9087a10?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ee0e3a04bd5f0bf8764a70e4203a49b24b6a25b930db18d54d01c66d9087a10?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ee0e3a04bd5f0bf8764a70e4203a49b24b6a25b930db18d54d01c66d9087a10?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ee0e3a04bd5f0bf8764a70e4203a49b24b6a25b930db18d54d01c66d9087a10?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ee0e3a04bd5f0bf8764a70e4203a49b24b6a25b930db18d54d01c66d9087a10?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ee0e3a04bd5f0bf8764a70e4203a49b24b6a25b930db18d54d01c66d9087a10?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ee0e3a04bd5f0bf8764a70e4203a49b24b6a25b930db18d54d01c66d9087a10?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=2000 2000w"
                className="w-[151px] aspect-[1.1]"
                alt="Team Member"
              />
              <div className="font-suwannaphum mt-3 font-bold">ទស្សនវិស័យ​របស់​យើង</div>
              <div className="font-suwannaphum mt-8 text-center">
                ក្លាយខ្លួនទៅជាគេហទំព័រមួយដែលមានភាពច្នៃប្រឌិតនិងការកែសម្រួលតាមតម្រូវការរបស់អ្នកប្រើប្រាស់។
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-4xl font-suwannaphum font-bold text-black max-md:mt-10">អ្នកណែនាំរបស់យើង</div>

      <div className="mt-16 max-w-full w-[562px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          {teachers.map((teacher) => (
            <div
              key={teacher.name}
              className="flex flex-col justify-center items-center w-1/2 max-md:w-full"
              data-aos="fade-up"
            >
              <div className="flex flex-col justify-center items-center grow text-2xl font-bold text-black max-md:mt-2">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="shrink-0 my-5 rounded-full aspect-square h-[200px] w-[200px] object-cover"
                />
                <div className="text-center mb-3">{teacher.name}</div>
                <Badge color="success">{teacher.position}</Badge>
                <div className="flex flex-row gap-2 mt-2">
                  <a href="#">
                    <FaFacebook className="aspect-[2.63]" />
                  </a>
                  <a href="#">
                    <IoLogoGithub className="aspect-[2.63]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-4xl font-suwannaphum font-bold text-black max-md:mt-10">សមាជិកក្រុមរបស់យើង</div>

      <div className="flex flex-col items-center mt-10" data-aos="fade-up">
        <img
          src={teamLead.image}
          alt={teamLead.name}
          className="shrink-0 rounded-full aspect-square h-[200px] w-[200px] object-cover"
        />
        <div className="mt-9 text-2xl font-bold text-black mb-3">{teamLead.name}</div>
        <Badge color="success">{teamLead.position}</Badge>
        <div className="flex flex-row gap-2 mt-2">
          <a href="#">
            <FaFacebook className="w-6 h-6 aspect-[2.63]" />
          </a>
          <a href="#">
            <IoLogoGithub className="w-6 h-6 aspect-[2.63]" />
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
              <div className="mt-10 rounded-full aspect-square bg-zinc-300 h-[200px] w-[200px] overflow-hidden">
                {person.image ? (
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center">
                    No Image
                  </div>
                )}
              </div>
              <div className="mt-9 mb-3">{person.name}</div>
              <Badge color="success">{person.position}</Badge>
              <div className="flex flex-row gap-2 mt-2">
                <a href="#">
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a href="#">
                  <IoLogoGithub className="w-6 h-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
