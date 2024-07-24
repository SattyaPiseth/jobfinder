import React, { useReducer, useState } from "react";
import { FaEdit, FaClock } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import PersonalInformationComponent from "./PersonalInformationComponent";
import { updateProfile } from "../../redux/api/userApi";
import BioComponent from "./BioComponent";
import UserProfileComponent from "./UserProfileComponent";

const ProfileDetailComponent = ({
  username,
  email,
  address,
  bio,
  phone_num,
  gender,
  created_at,
  avatar,
  cover,
}) => {

  const [isEditing, setIsEditing] = useState(false);
  
  return (
    <div>
      <section className="flex flex-col my-20">
        <div className="w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:mt-2 max-lg:mt-8 max-md:gap-0">
            <UserProfileComponent
            avatar={avatar}
            username={username}
            created_at={created_at}
            cover={cover}
            address={address}
            setIsEditing={setIsEditing}
            />
            <BioComponent 
            bio={bio}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            />
            {/* <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <article className="flex flex-col grow px-4 pt-2.5 pb-20 w-full bg-gray-50 rounded-lg max-md:mt-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between items-start text-xl font-semibold text-black whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                  <h3 className="mt-2 max-md:mt-2 max-md:text-sm">BIO</h3>
                  <div className="p-1 max-md:mt-0 hover:bg-gray-200">
                    <FaEdit className="fill-gray-700 max-md:w-[16px]" />
                  </div>
                </div>
                <p className="self-start mt-4 ml-0.5 text-left text-md font-medium text-neutral-500 max-md:mt-2 max-md:text-sm max-md:max-w-full">
                  {bio || "No bio"}
                </p>
              </article>
            </div> */}
          </div>
        </div>
        <div className="mt-5 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <PersonalInformationComponent 
            user_name={username}
            gender={gender}
            email={email}
            phone_num={phone_num}
            address={address}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-5 max-md:max-w-full">
                <section className="flex flex-col pt-1.5 pb-20 bg-gray-50 rounded-lg max-md:max-w-full">
                  <div className="flex flex-col px-4 mt-1 max-md:max-w-full">
                    <div className="flex flex-row w-full justify-between">
                      <h3 className="text-xl text-left font-semibold text-black max-md:text-sm max-md:max-w-full">
                        SKILLS & INTERESTS
                      </h3>
                      <div className="flex flex-row">
                        <div className="p-1 border-2 max-md:mt-0 hover:bg-gray-200">
                          <IoMdAdd className="fill-gray-900 text-bold w-5 h-5" />
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 self-start mt-5 text-sm leading-4 whitespace-nowrap text-neutral-500">
                      <div className="flex gap-1 px-3 py-2 bg-white rounded-md border border-solid border-slate-300 max-md:py-1">
                        <span>UX/UI</span>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd0f624544f9bacc2b69734a5f9b5a702a18d753ae2b62f3ae04b56a1603c054?apiKey=ff00f11844934b2d9618929d5184b9ad&"
                          alt="Remove skill"
                          className="shrink-0 my-auto w-2.5 aspect-square"
                        />
                      </div>
                      <div className="flex gap-1 px-3 py-2 bg-white rounded border border-solid border-slate-300 max-md:py-1">
                        <span>Front-End</span>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd0f624544f9bacc2b69734a5f9b5a702a18d753ae2b62f3ae04b56a1603c054?apiKey=ff00f11844934b2d9618929d5184b9ad&"
                          alt="Remove skill"
                          className="shrink-0 my-auto w-2.5 aspect-square"
                        />
                      </div>
                    </div>
                  </div>
                </section>
                <section className="flex flex-col px-4 pt-2.5 pb-4 mt-4 text-base font-semibold text-black bg-gray-50 rounded-lg max-md:gap-1 max-md:max-w-full">
                  <div className="flex gap-5 items-start px-px text-xl max-md:flex-wrap max-md:max-w-full">
                    <h3 className="flex-auto text-left mt-2 max-md:pb-5 max-md:text-sm">
                      SOCIAL MEDIA ACCOUNT
                    </h3>
                  </div>
                  <div className="flex gap-4 mt-5 whitespace-nowrap text-neutral-500 max-md:flex-wrap max-md:mr-1.5 max-md:mt-0.5 max-md:max-w-full">
                    <a
                      href="#"
                      className="flex flex-1 flex-auto gap-2.5 items-start px-20 py-2 rounded-md border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:text-sm max-md:px-5"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f25ca0a0f2812a175d12a41751cf21c1449d2848be474a70ef6601ba45bfcff3?apiKey=ff00f11844934b2d9618929d5184b9ad&"
                        alt="LinkedIn logo"
                        className="shrink-0 aspect-[1.03] fill-neutral-500 max-md:w-[20px] w-[30px]"
                      />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="#"
                      className="flex flex-1 flex-auto gap-2.5 items-start px-20 py-2 rounded-md border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:text-sm max-md:px-5"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e037e65853560dd7ef52263d3fa78366ca7a8d2c1db77c1fc0fd489a04fe6d7a?apiKey=ff00f11844934b2d9618929d5184b9ad&"
                        alt="GitHub logo"
                        className="shrink-0 self-start aspect-[1.03] fill-black fill-opacity-50 max-md:w-[20px] w-[30px]"
                      />
                      <span className="my-auto">Github</span>
                    </a>
                  </div>
                  <div className="flex gap-4 mt-2 whitespace-nowrap text-neutral-500 max-md:flex-wrap max-md:mr-1.5">
                    <a
                      href="#"
                      className="flex flex-1 flex-auto gap-2.5 px-20 py-2 rounded-md border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:text-sm max-md:px-5"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ea0941d288028e0c21811a0c23dd4d813b8c87cd00ba58289398020f7ed9483?apiKey=ff00f11844934b2d9618929d5184b9ad&"
                        alt="Facebook logo"
                        className="shrink-0 aspect-[1.03] fill-neutral-500 max-md:w-[20px] w-[30px]"
                      />
                      <span className="my-auto">Facebook</span>
                    </a>
                    <a
                      href="#"
                      className="flex flex-1 flex-auto gap-2.5 px-20 py-2 rounded-md border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:text-sm max-md:px-5"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/071b75cc3785f82729e6c7eb6106216f9fbf7d8845ade0b9116026a410e6d25d?apiKey=ff00f11844934b2d9618929d5184b9ad&"
                        alt="Google logo"
                        className="shrink-0 aspect-[1.03] fill-black fill-opacity-50 max-md:w-[20px] w-[30px]"
                      />
                      <span className="my-auto">Google</span>
                    </a>
                  </div>
                  <button className="justify-center items-center px-16 py-4 mt-10 rounded-lg border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:px-5 max-md:py-2 max-md:mr-1.5  max-md:max-w-full">
                    + Add more
                  </button>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileDetailComponent;
