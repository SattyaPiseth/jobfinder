import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../redux/jobs/jobsSlice';

const PositionCardComponent = ({}) => {

  return (
    <div>
      <section class="flex flex-col mt-16">
        <h2 class="self-start text-3xl leading-6 text-black max-md:ml-2.5">List Jobs</h2>
        <div class="flex gap-5 items-center mt-8 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full overflow-x-auto scrollbar-hide">
            <div class="flex flex-nowrap rounded-lg gap-5 max-md:flex-wrap max-md:gap-0">
                <article class="flex flex-col w-72 max-md:ml-0 max-md:w-full flex-none">
                    <div class="flex flex-col rounded-lg grow p-6 mx-auto w-full text-base leading-6 bg-white border border-solid border-zinc-200 max-md:px-5 max-md:mt-10">
                        <header class="flex gap-5 justify-between text-center text-indigo-600">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5b56424f758fec61a49032145e42510f80e63232849847e7e8a597820af9287?apiKey=ff00f11844934b2d9618929d5184b9ad&" alt="Twitter logo" class="shrink-0 w-12 rounded-full aspect-square" />
                            <span class="justify-center self-start px-3 py-1 rounded-md border border-indigo-600 border-solid">Full-time</span>
                        </header>
                        <h3 class="mt-4 text-lg text-left font-semibold text-slate-800">Backend Developer</h3>
                        <div class="flex gap-2 text-slate-600">
                            <span>Twitter - </span>
                            <span>Phnom Penh</span>
                        </div>
                        <p class="mt-4 leading-7 text-left text-slate-500">qwertyuio sfljwpi fghjkl  cvbnm  cvbnm......</p>
                        <span class="justify-center px-4 py-2 mt-4 text-sm font-semibold text-white whitespace-nowrap bg-blue-800 rounded-[80px]">Detail</span>
                    </div>
                </article>   
                <article class="flex flex-col w-72 max-md:ml-0 max-md:w-full flex-none">
                    <div class="flex flex-col rounded-lg grow p-6 mx-auto w-full text-base leading-6 bg-white border border-solid border-zinc-200 max-md:px-5 max-md:mt-10">
                        <header class="flex gap-5 justify-between text-center text-indigo-600">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5b56424f758fec61a49032145e42510f80e63232849847e7e8a597820af9287?apiKey=ff00f11844934b2d9618929d5184b9ad&" alt="Twitter logo" class="shrink-0 w-12 rounded-full aspect-square" />
                            <span class="justify-center self-start px-3 py-1 rounded-md border border-indigo-600 border-solid">Full-time</span>
                        </header>
                        <h3 class="mt-4 text-lg text-left font-semibold text-slate-800">Backend Developer</h3>
                        <div class="flex gap-2 text-slate-600">
                            <span>Twitter - </span>
                            <span>Phnom Penh</span>
                        </div>
                        <p class="mt-4 leading-7 text-left text-slate-500">qwertyuio sfljwpi fghjkl  cvbnm  cvbnm......</p>
                        <span class="justify-center px-4 py-2 mt-4 text-sm font-semibold text-white whitespace-nowrap bg-blue-800 rounded-[80px]">Detail</span>
                    </div>
                </article>   
                <article class="flex flex-col w-72 max-md:ml-0 max-md:w-full flex-none">
                    <div class="flex flex-col rounded-lg grow p-6 mx-auto w-full text-base leading-6 bg-white border border-solid border-zinc-200 max-md:px-5 max-md:mt-10">
                        <header class="flex gap-5 justify-between text-center text-indigo-600">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5b56424f758fec61a49032145e42510f80e63232849847e7e8a597820af9287?apiKey=ff00f11844934b2d9618929d5184b9ad&" alt="Twitter logo" class="shrink-0 w-12 rounded-full aspect-square" />
                            <span class="justify-center self-start px-3 py-1 rounded-md border border-indigo-600 border-solid">Full-time</span>
                        </header>
                        <h3 class="mt-4 text-lg text-left font-semibold text-slate-800">Backend Developer</h3>
                        <div class="flex gap-2 text-slate-600">
                            <span>Twitter - </span>
                            <span>Phnom Penh</span>
                        </div>
                        <p class="mt-4 leading-7 text-left text-slate-500">qwertyuio sfljwpi fghjkl  cvbnm  cvbnm......</p>
                        <span class="justify-center px-4 py-2 mt-4 text-sm font-semibold text-white whitespace-nowrap bg-blue-800 rounded-[80px]">Detail</span>
                    </div>
                </article>   
                <article class="flex flex-col w-72 max-md:ml-0 max-md:w-full flex-none">
                    <div class="flex flex-col rounded-lg grow p-6 mx-auto w-full text-base leading-6 bg-white border border-solid border-zinc-200 max-md:px-5 max-md:mt-10">
                        <header class="flex gap-5 justify-between text-center text-indigo-600">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5b56424f758fec61a49032145e42510f80e63232849847e7e8a597820af9287?apiKey=ff00f11844934b2d9618929d5184b9ad&" alt="Twitter logo" class="shrink-0 w-12 rounded-full aspect-square" />
                            <span class="justify-center self-start px-3 py-1 rounded-md border border-indigo-600 border-solid">Full-time</span>
                        </header>
                        <h3 class="mt-4 text-lg text-left font-semibold text-slate-800">Backend Developer</h3>
                        <div class="flex gap-2 text-slate-600">
                            <span>Twitter - </span>
                            <span>Phnom Penh</span>
                        </div>
                        <p class="mt-4 leading-7 text-left text-slate-500">qwertyuio sfljwpi fghjkl  cvbnm  cvbnm......</p>
                        <span class="justify-center px-4 py-2 mt-4 text-sm font-semibold text-white whitespace-nowrap bg-blue-800 rounded-[80px]">Detail</span>
                    </div>
                </article>   
                <article class="flex flex-col w-72 max-md:ml-0 max-md:w-full flex-none">
                    <div class="flex flex-col rounded-lg grow p-6 mx-auto w-full text-base leading-6 bg-white border border-solid border-zinc-200 max-md:px-5 max-md:mt-10">
                        <header class="flex gap-5 justify-between text-center text-indigo-600">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5b56424f758fec61a49032145e42510f80e63232849847e7e8a597820af9287?apiKey=ff00f11844934b2d9618929d5184b9ad&" alt="Twitter logo" class="shrink-0 w-12 rounded-full aspect-square" />
                            <span class="justify-center self-start px-3 py-1 rounded-md border border-indigo-600 border-solid">Full-time</span>
                        </header>
                        <h3 class="mt-4 text-lg text-left font-semibold text-slate-800">Backend Developer</h3>
                        <div class="flex gap-2 text-slate-600">
                            <span>Twitter - </span>
                            <span>Phnom Penh</span>
                        </div>
                        <p class="mt-4 leading-7 text-left text-slate-500">qwertyuio sfljwpi fghjkl  cvbnm  cvbnm......</p>
                        <span class="justify-center px-4 py-2 mt-4 text-sm font-semibold text-white whitespace-nowrap bg-blue-800 rounded-[80px]">Detail</span>
                    </div>
                </article>   
                <article class="flex flex-col w-72 max-md:ml-0 max-md:w-full flex-none">
                    <div class="flex flex-col rounded-lg grow p-6 mx-auto w-full text-base leading-6 bg-white border border-solid border-zinc-200 max-md:px-5 max-md:mt-10">
                        <header class="flex gap-5 justify-between text-center text-indigo-600">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5b56424f758fec61a49032145e42510f80e63232849847e7e8a597820af9287?apiKey=ff00f11844934b2d9618929d5184b9ad&" alt="Twitter logo" class="shrink-0 w-12 rounded-full aspect-square" />
                            <span class="justify-center self-start px-3 py-1 rounded-md border border-indigo-600 border-solid">Full-time</span>
                        </header>
                        <h3 class="mt-4 text-lg text-left font-semibold text-slate-800">Backend Developer</h3>
                        <div class="flex gap-2 text-slate-600">
                            <span>Twitter - </span>
                            <span>Phnom Penh</span>
                        </div>
                        <p class="mt-4 leading-7 text-left text-slate-500">qwertyuio sfljwpi fghjkl  cvbnm  cvbnm......</p>
                        <span class="justify-center px-4 py-2 mt-4 text-sm font-semibold text-white whitespace-nowrap bg-blue-800 rounded-[80px]">Detail</span>
                    </div>
                </article>   
            </div>
        </div>
      </section>
    </div>
  )
}

export default PositionCardComponent
