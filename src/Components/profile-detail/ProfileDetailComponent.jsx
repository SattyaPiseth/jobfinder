import React from 'react'

const ProfileDetailComponent = () => {
  return (
    <div>
      <section className="flex flex-col my-20">
        <h1 className="w-full text-left text-xl font-bold leading-7 text-black uppercase max-md:max-w-full">Edit profile</h1>
        <div className="mt-3 w-full max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <article className="flex flex-col grow pb-3.5 w-full bg-gray-50 rounded-lg max-md:mt-10 max-md:max-w-full">
                <div className="flex relative flex-col pt-2.5 pr-3 pl-6 w-full min-h-[127px] max-md:pl-5 max-md:max-w-full">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f12d4226ada8a92d9f6e286bcd915f8d95f574ecbe753098a13433ce6079566?apiKey=ff00f11844934b2d9618929d5184b9ad&" alt="" className="object-cover rounded-lg absolute inset-0 size-full" />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/091285ce05f415fd9af3643374e6053a9c94e734b973ee0855bfa633c1018216?apiKey=ff00f11844934b2d9618929d5184b9ad&" alt="Edit icon" className="self-end w-4 rounded-full aspect-square fill-white" />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/89fb8480bf396718c560e9b1ef173a5b38359ae8bbd6479a77a8f6ff7132400d?apiKey=ff00f11844934b2d9618929d5184b9ad&" alt="User profile picture" className="z-10 mt-11 -mb-10  max-w-full aspect-[1.03] w-[100px] max-md:mt-10 max-md:mb-2.5" />
                </div>
                <h2 className="self-start mt-3 ml-36 text-lg font-semibold leading-7 text-black max-md:ml-5">Yon Sovatey</h2>
                <div className="flex gap-5 justify-between items-start mt-8 mr-5 ml-5 text-base max-md:flex-wrap max-md:mr-2.5 max-md:mt-3 max-md:max-w-full">
                    <div className='flex flex-col '>
                    <div className="flex gap-3 text-black leading-[175%]">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e87ac1ac3907b10acf2b93cf6fe1eb125ad5d2e4ee9415865a41062b53adbf1f?apiKey=ff00f11844934b2d9618929d5184b9ad&" alt="Calendar icon" className="shrink-0 w-6 aspect-square fill-black fill-opacity-50" />
                    <p className="flex-auto my-auto">Joined May 2024</p>
                    </div>
                    <div className='flex mt-2 gap-3 text-black leading-[175%]'>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e87ac1ac3907b10acf2b93cf6fe1eb125ad5d2e4ee9415865a41062b53adbf1f?apiKey=ff00f11844934b2d9618929d5184b9ad&" alt="Calendar icon" className="shrink-0 w-6 aspect-square fill-black fill-opacity-50" />
                    <p className="flex-auto my-auto">Joined May 2024</p>
                    </div>
                    </div>
                    <div className="flex gap-2 mt-2 text-white whitespace-nowrap">
                    <button className="justify-center px-2.5 py-1.5 bg-blue-800 rounded-lg border-2 border-blue-800 border-solid max-md:px-5 max-md:text-sm">Save</button>
                    <button className="justify-center px-2.5 py-1.5 bg-blue-800 rounded-lg border-2 border-blue-800 border-solid max-md:text-sm">Update</button>
                    </div>
                </div>
                </article>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <article className="flex flex-col grow px-4 pt-2.5 pb-20 w-full bg-gray-50 rounded-lg max-md:mt-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between items-start text-xl font-semibold text-black whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                    <h3 className="mt-2 max-md:mt-2">BIO</h3>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/01395735d66d6eb50a3eed34a31a858ca924a1f081d30e2573566a0f0d771beb?apiKey=ff00f11844934b2d9618929d5184b9ad&" alt="Edit icon" className="shrink-0 aspect-[0.93] fill-white w-[15px]" />
                </div>
                <p className="self-start mt-4 ml-0.5 text-left text-lg font-medium text-neutral-500 max-md:mt-2 max-md:max-w-full">
                    I'm passionate about leveraging innovative marketing techniques to solve complex business challenges.
                    My strong analytical skills, combined with a creative approach, allow me to deliver impactful results.
                    I thrive in dynamic environments and enjoy collaborating with teams to drive continuous improvement.
                </p>
                </article>
            </div>
            </div>
        </div>
        <div className="mt-5 w-full max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <form className="flex flex-col grow px-6 py-5 w-full text-base font-medium text-black bg-gray-50 rounded-lg max-md:px-5 max-md:mt-2 max-md:max-w-full">
                <h3 className="text-xl text-left font-semibold max-md:max-w-full">PERSONAL INFORMATION</h3>
                <label for="username" className="mt-6 text-left max-md:max-w-full">Username</label>
                <input id="username" type="text" value="User name" className="justify-center items-start px-3 py-4 mt-3 rounded-lg border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:pr-5 max-md:max-w-full" />
                <label for="email" className="mt-6 text-left max-md:max-w-full">Email address</label>
                <input id="email" type="email" value="Username@gmail.com" className="justify-center items-start px-3 py-4 mt-3 whitespace-nowrap rounded-lg border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:pr-5 max-md:max-w-full" />
                <label for="phone" className="mt-6 text-left max-md:max-w-full">Phone Number</label>
                <input id="phone" type="tel" value="+855 12121212" className="justify-center items-start px-3 py-4 mt-3 rounded-lg border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:pr-5 max-md:max-w-full" />
                <label for="role" className="mt-6 text-left max-md:max-w-full">Role</label>
                <input id="role" type="text" value="Senior Product Manager" className="justify-center items-start p-4 mt-3 rounded-lg border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:pr-5 max-md:max-w-full" />
                </form>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-5 max-md:max-w-full">
                <section className="flex flex-col pt-1.5 pb-20 bg-gray-50 rounded-lg max-md:max-w-full">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a34728dae90e2516a8ed03b1a2bb9553d122694c92ac645186aa7220baa1fb6?apiKey=ff00f11844934b2d9618929d5184b9ad&" alt="Edit icon" className="self-end aspect-[1.49] fill-white w-[15px] max-md:mr-2.5" />
                    <div className="flex flex-col px-4 mt-1 max-md:max-w-full">
                    <h3 className="text-xl text-left font-semibold text-black max-md:max-w-full">SKILLS & INTERESTS</h3>
                    <div className="flex gap-2 self-start mt-5 text-sm leading-4 whitespace-nowrap text-neutral-500">
                        <div className="flex gap-1 px-3 py-2 bg-white rounded-md border border-solid border-slate-300">
                        <span>UX/UI</span>
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd0f624544f9bacc2b69734a5f9b5a702a18d753ae2b62f3ae04b56a1603c054?apiKey=ff00f11844934b2d9618929d5184b9ad&" alt="Remove skill" className="shrink-0 my-auto w-2.5 aspect-square" />
                        </div>
                        <div className="flex gap-1 px-3 py-2 bg-white rounded border border-solid border-slate-300">
                        <span>Front-End</span>
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd0f624544f9bacc2b69734a5f9b5a702a18d753ae2b62f3ae04b56a1603c054?apiKey=ff00f11844934b2d9618929d5184b9ad&" alt="Remove skill" className="shrink-0 my-auto w-2.5 aspect-square" />
                        </div>
                    </div>
                    </div>
                </section>
                <section className="flex flex-col px-4 pt-2.5 pb-4 mt-4 text-base font-semibold text-black bg-gray-50 rounded-lg max-md:max-w-full">
                    <div className="flex gap-5 items-start px-px text-xl max-md:flex-wrap max-md:max-w-full">
                    <h3 className="flex-auto text-left mt-2">SOCIAL MEDIA ACCOUNT</h3>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d6995197d5d299b391cdfa16c90b95255ca07c039b9fa3769a03d8eec2ca326?apiKey=ff00f11844934b2d9618929d5184b9ad&" alt="Edit icon" className="shrink-0 aspect-[0.93] fill-white w-[15px]" />
                    </div>
                    <div className="flex gap-4 mt-5 whitespace-nowrap text-neutral-500 max-md:flex-wrap max-md:mr-1.5 max-md:mt-0.5 max-md:max-w-full">
                    <a href="#" className="flex flex-1 flex-auto gap-2.5 items-start px-20 py-2 rounded-md border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:px-5">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f25ca0a0f2812a175d12a41751cf21c1449d2848be474a70ef6601ba45bfcff3?apiKey=ff00f11844934b2d9618929d5184b9ad&" alt="LinkedIn logo" className="shrink-0 aspect-[1.03] fill-neutral-500 w-[30px]" />
                        <span>Linkedin</span>
                    </a>
                    <a href="#" className="flex flex-1 flex-auto gap-2.5 items-start px-20 py-2 rounded-md border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:px-5">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e037e65853560dd7ef52263d3fa78366ca7a8d2c1db77c1fc0fd489a04fe6d7a?apiKey=ff00f11844934b2d9618929d5184b9ad&" alt="GitHub logo" className="shrink-0 self-start aspect-[1.03] fill-black fill-opacity-50 w-[30px]" />
                        <span className="my-auto">Github</span>
                    </a>
                    </div>
                    <div className="flex gap-4 mt-2 whitespace-nowrap text-neutral-500 max-md:flex-wrap max-md:mr-1.5">
                    <a href="#" className="flex flex-1 flex-auto gap-2.5 px-20 py-2 rounded-md border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:px-5">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ea0941d288028e0c21811a0c23dd4d813b8c87cd00ba58289398020f7ed9483?apiKey=ff00f11844934b2d9618929d5184b9ad&" alt="Facebook logo" className="shrink-0 aspect-[1.03] fill-neutral-500 w-[30px]" />
                        <span className="my-auto">Facebook</span>
                    </a>
                    <a href="#" className="flex flex-1 flex-auto gap-2.5 px-20 py-2 rounded-md border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:px-5">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/071b75cc3785f82729e6c7eb6106216f9fbf7d8845ade0b9116026a410e6d25d?apiKey=ff00f11844934b2d9618929d5184b9ad&" alt="Google logo" className="shrink-0 aspect-[1.03] fill-black fill-opacity-50 w-[30px]" />
                        <span className="my-auto">Google</span>
                    </a>
                    </div>
                    <button className="justify-center items-center px-16 py-4 mt-10 rounded-lg border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:px-5 max-md:mr-1.5 max-md:max-w-full">
                    + Add more
                    </button>
                </section>
                </div>
            </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default ProfileDetailComponent
