import React from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export default function AboutUsComponent() {
  return (
    <>
      <div className="flex flex-col items-center bg-white">
        <div className="mt-20 text-3xl font-bold font-suwannaphum text-center text-black max-md:mt-10">
          ពួកយេីងជានរណា?
        </div>
        <div className="my-8 w-full max-w-[1324px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch px-5 my-auto text-black max-md:mt-10 max-md:max-w-full">
                <div className="text-3xl font-bold font-suwannaphum text-center max-md:max-w-full">
                  អំពី​ពួក​យើង
                </div>
                <div className="mt-2.5 text-3xl font-suwannaphum leading-[52px] max-md:max-w-full">
                  Job Finder
                  គឺជាគេហទំព័រស្វែងរកការងារតាមអ៊ីនធឺណិតដែលត្រូវបានបង្កើតឡើងក្នុងឆ្នាំ2024ដោយនិស្សិតជំនាញមូលដ្ឋានគ្រឹះមកពីមជ្ឈមណ្ឌលវិទ្យាសស្ត្រនិងបច្ចេកវិទ្យាអភិវឌ្ឍន៍កម្រិតខ្ពសដែលអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ស្វែងរកដាក់ពាក្យនិងតមដនឱកាសការងារសម្រួលដល់វឌ្ឍនភាពការងារដែលជំរុញដោយទិន្នន័យ
                  ។
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/14d60b765aa680482bc6790be018038a0f5cc01743feb27e7bf787e9a922e198?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/14d60b765aa680482bc6790be018038a0f5cc01743feb27e7bf787e9a922e198?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14d60b765aa680482bc6790be018038a0f5cc01743feb27e7bf787e9a922e198?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/14d60b765aa680482bc6790be018038a0f5cc01743feb27e7bf787e9a922e198?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/14d60b765aa680482bc6790be018038a0f5cc01743feb27e7bf787e9a922e198?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14d60b765aa680482bc6790be018038a0f5cc01743feb27e7bf787e9a922e198?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/14d60b765aa680482bc6790be018038a0f5cc01743feb27e7bf787e9a922e198?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/14d60b765aa680482bc6790be018038a0f5cc01743feb27e7bf787e9a922e198?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&"
                className="grow w-full aspect-[1.18] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="px-5 mt-16 w-full max-w-[1334px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center text-2xl text-black max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2469ae50e4211d88e9c457bb5bc8d673eec8f7c9e79563a35c74219510458138?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2469ae50e4211d88e9c457bb5bc8d673eec8f7c9e79563a35c74219510458138?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2469ae50e4211d88e9c457bb5bc8d673eec8f7c9e79563a35c74219510458138?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2469ae50e4211d88e9c457bb5bc8d673eec8f7c9e79563a35c74219510458138?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2469ae50e4211d88e9c457bb5bc8d673eec8f7c9e79563a35c74219510458138?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2469ae50e4211d88e9c457bb5bc8d673eec8f7c9e79563a35c74219510458138?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2469ae50e4211d88e9c457bb5bc8d673eec8f7c9e79563a35c74219510458138?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2469ae50e4211d88e9c457bb5bc8d673eec8f7c9e79563a35c74219510458138?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&"
                  className="max-w-full aspect-[1.03] w-[150px]"
                />
                <div className="mt-4 font-bold font-suwannaphum">យើង​ជា​នរណា</div>
                <div className="font-suwannaphum self-stretch mt-7">
                  ពួកយើងគឺជានិសិត្សអាហារូបករណ៍ជំនាញមូលដ្ឋានគ្រឹះជំនាន់ទីពីរនៃមជ្ឈមណ្ឌលវិទ្យាសាស្ត្រនិងបច្ចេកវិទ្យាអភិវឌ្ឍន៍កម្រិតខ្ពស់ដែលបានបញ្ចប់វគ្គសិក្សារយៈពេល៤ខែទៅលើជំនាញ
                  លើជំនាញ Java និង Website Design ។
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center text-2xl text-black max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dd4f69b0a22997cc99923b24acd4051a855f3aa5f8b3e5b3ddd87f277f908b32?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd4f69b0a22997cc99923b24acd4051a855f3aa5f8b3e5b3ddd87f277f908b32?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd4f69b0a22997cc99923b24acd4051a855f3aa5f8b3e5b3ddd87f277f908b32?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd4f69b0a22997cc99923b24acd4051a855f3aa5f8b3e5b3ddd87f277f908b32?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd4f69b0a22997cc99923b24acd4051a855f3aa5f8b3e5b3ddd87f277f908b32?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd4f69b0a22997cc99923b24acd4051a855f3aa5f8b3e5b3ddd87f277f908b32?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd4f69b0a22997cc99923b24acd4051a855f3aa5f8b3e5b3ddd87f277f908b32?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd4f69b0a22997cc99923b24acd4051a855f3aa5f8b3e5b3ddd87f277f908b32?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&"
                  className="max-w-full aspect-[1.1] w-[151px]"
                />
                <div className="mt-5 font-bold font-suwannaphum">បេ​សកម្ម​របស់​យើង</div>
                <div className="font-suwannaphum self-stretch mt-6">
                  បេសកកម្មរបស់យើងគឺអនុញ្ញាតឲ្យអ្នកស្វែងរកការងារលើបណ្តាញអ៊ីនធឺណិតនូវវេទិកាដែលងាយស្រួលប្រើនិងសុវត្ថិភាពដែលភ្ជាប់អ្នកស្វែងរកការងារជាមួយនិយោជកប្រកបដោយប្រសិទ្ធភាព។
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center text-2xl text-black max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3ee0e3a04bd5f0bf8764a70e4203a49b24b6a25b930db18d54d01c66d9087a10?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ee0e3a04bd5f0bf8764a70e4203a49b24b6a25b930db18d54d01c66d9087a10?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ee0e3a04bd5f0bf8764a70e4203a49b24b6a25b930db18d54d01c66d9087a10?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ee0e3a04bd5f0bf8764a70e4203a49b24b6a25b930db18d54d01c66d9087a10?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ee0e3a04bd5f0bf8764a70e4203a49b24b6a25b930db18d54d01c66d9087a10?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ee0e3a04bd5f0bf8764a70e4203a49b24b6a25b930db18d54d01c66d9087a10?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ee0e3a04bd5f0bf8764a70e4203a49b24b6a25b930db18d54d01c66d9087a10?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ee0e3a04bd5f0bf8764a70e4203a49b24b6a25b930db18d54d01c66d9087a10?apiKey=1c7a5c0793e54dc191c5a3180c0c43c7&"
                  className="max-w-full aspect-[1.1] w-[151px]"
                />
                <div className="font-suwannaphum mt-3 font-bold">ទស្សនវិស័យ​របស់​យើង</div>
                <div className="font-suwannaphum self-stretch mt-8">
                  ក្លាយខ្លួនទៅជាគេហទំព័រមួយដែលមានភាពច្នៃប្រឌិតនិងការកែសម្រួលតាមតម្រូវការរបស់អ្នកប្រើប្រាស់
                  ។
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 text-4xl font-suwannaphum font-bold text-black max-md:mt-10">
          លោកគ្រូអ្នកគ្រូរបស់យើង
        </div>
        <div className="mt-16 max-w-full w-[562px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col justify-center items-center w-[50%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center items-center grow text-2xl font-bold text-black max-md:mt-2">
                <div className="shrink-0 my-5 rounded-full aspect-square bg-zinc-300 h-[200px] w-[200px]" />
                <div className="text-center mb-3">Ing Muyleang</div>
                <div className="flex flex-row gap-2">
                    <div>
                    <a href="#"><FaFacebook className="aspect-[2.63]"/></a>
                    </div>
                    <div>
                        <a href="#"><IoLogoGithub className="aspect-[2.63]"/></a>
                    </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-[50%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center items-center grow text-2xl font-bold text-black max-md:mt-2">
                <div className="shrink-0 my-5 rounded-full aspect-square bg-zinc-300 h-[200px] w-[200px]" />
                <div className="text-center mb-3">Kim Chansokpheng</div>
                <div className="flex flex-row gap-2">
                    <div>
                    <a href="#"><FaFacebook className="aspect-[2.63]"/></a>
                    </div>
                    <div>
                        <a href="#"><IoLogoGithub className="aspect-[2.63]"/></a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 text-4xl font-suwannaphum font-bold text-black max-md:mt-10">
          សមាជិកក្រុមរបស់យើង
        </div>
        <div className="shrink-0 mt-10 rounded-full aspect-square bg-zinc-300 h-[200px] w-[200px]" />
        <div className="mt-9 text-2xl font-bold text-black mb-3">Piseth Satthya</div>
        <div className="flex flex-row gap-2">
                    <div>
                    <a href="#"><FaFacebook className="w-6 h-6 aspect-[2.63]"/></a>
                    </div>
                    <div>
                        <a href="#"><IoLogoGithub className="w-6 h-6 aspect-[2.63]"/></a>
                    </div>
                </div>
        <div className="px-5 mt-10 w-full max-w-[1124px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center text-2xl font-bold text-black max-md:mt-10">
                <div className="shrink-0 mt-10 rounded-full aspect-square bg-zinc-300 h-[200px] w-[200px]" />
                <div className="mt-9 mb-3">Chao Kimhay</div>
                <div className="flex flex-row gap-2">
                    <div>
                    <a href="#"><FaFacebook className="w-6 h-6 aspect-[2.63]"/></a>
                    </div>
                    <div>
                        <a href="#"><IoLogoGithub className="w-6 h-6 aspect-[2.63]"/></a>
                    </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center text-2xl font-bold text-black max-md:mt-10">
                <div className="shrink-0 mt-10 rounded-full aspect-square bg-zinc-300 h-[200px] w-[200px]" />
                <div className="mt-9 mb-3">Jun Thearith</div>
                <div className="flex flex-row gap-2">
                    <div>
                    <a href="#"><FaFacebook className="w-6 h-6 aspect-[2.63]"/></a>
                    </div>
                    <div>
                        <a href="#"><IoLogoGithub className="w-6 h-6 aspect-[2.63]"/></a>
                    </div>
                </div>
                
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center text-2xl font-bold text-black max-md:mt-10">
                <div className="shrink-0 mt-10 rounded-full aspect-square bg-zinc-300 h-[200px] w-[200px]" />
                <div className="mt-9 mb-3">Bour Suorcdey</div>
                <div className="flex flex-row gap-2">
                    <div>
                    <a href="#"><FaFacebook className="w-6 h-6 aspect-[2.63]"/></a>
                    </div>
                    <div>
                        <a href="#"><IoLogoGithub className="w-6 h-6 aspect-[2.63]"/></a>
                    </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center text-2xl font-bold text-black max-md:mt-10">
                <div className="shrink-0 mt-10 rounded-full aspect-square bg-zinc-300 h-[200px] w-[200px]" />
                <div className="mt-9 mb-3">Oum Chansopheak</div>
                <div className="flex flex-row gap-2">
                    <div>
                    <a href="#"><FaFacebook className="w-6 h-6 aspect-[2.63]"/></a>
                    </div>
                    <div>
                        <a href="#"><IoLogoGithub className="w-6 h-6 aspect-[2.63]"/></a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 my-10 w-full max-w-[1124px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center text-2xl font-bold text-black max-md:mt-10">
                <div className="shrink-0 mt-10 rounded-full aspect-square bg-zinc-300 h-[200px] w-[200px]" />
                <div className="mt-9 mb-3">Sey Bunrong</div>
                <div className="flex flex-row gap-2">
                    <div>
                    <a href="#"><FaFacebook className="w-6 h-6 aspect-[2.63]"/></a>
                    </div>
                    <div>
                        <a href="#"><IoLogoGithub className="w-6 h-6 aspect-[2.63]"/></a>
                    </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center text-2xl font-bold text-black max-md:mt-10">
                <div className="shrink-0 mt-10 rounded-full aspect-square bg-zinc-300 h-[200px] w-[200px]" />
                <div className="mt-9 mb-3">Porn Sreynit</div>
                <div className="flex flex-row gap-2">
                    <div>
                    <a href="#"><FaFacebook className="w-6 h-6 aspect-[2.63]"/></a>
                    </div>
                    <div>
                        <a href="#"><IoLogoGithub className="w-6 h-6 aspect-[2.63]"/></a>
                    </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center text-2xl font-bold text-black max-md:mt-10">
                <div className="shrink-0 mt-10 rounded-full aspect-square bg-zinc-300 h-[200px] w-[200px]" />
                <div className="mt-9 mb-3">Mom Rotha</div>
                <div className="flex flex-row gap-2">
                    <div>
                    <a href="#"><FaFacebook className="w-6 h-6 aspect-[2.63]"/></a>
                    </div>
                    <div>
                        <a href="#"><IoLogoGithub className="w-6 h-6 aspect-[2.63]"/></a>
                    </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center text-2xl font-bold text-black max-md:mt-10">
                <div className="shrink-0 mt-10 rounded-full aspect-square bg-zinc-300 h-[200px] w-[200px]" />
                <div className="mt-9 mb-3">Choeurn Triya</div>
                <div className="flex flex-row gap-2">
                    <div>
                    <a href="#"><FaFacebook className="w-6 h-6 aspect-[2.63]"/></a>
                    </div>
                    <div>
                        <a href="#"><IoLogoGithub className="w-6 h-6 aspect-[2.63]"/></a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
