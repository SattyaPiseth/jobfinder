import React from "react";
import { Typography, Button, Input } from "@material-tailwind/react"; // Corrected import
import { useCopyToClipboard } from "usehooks-ts";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";

const JobDetailComponent = ({ detail }) => {
  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(
    "npm i @material-tailwind/react"
  );
  const handleError = (event) => {
    event.target.src = "/path/to/fallback/image.jpg"; // Specify a path to your fallback image
  };
  return (
    <div className="mt-20 flex flex-col text-left">
      <div className="flex flex-col md:flex-row gap-5 items-center">
        <img
          className="w-[8%]"
          loading="lazy"
          src={detail?.thumbnail}
          alt="Company Logo"
        />
        <div className="flex-1">
          <div className="text-xl md:text-2xl font-medium leading-8 text-zinc-900 dark:text-gray-300">
            {detail?.title}
          </div>
          <div className="flex flex-wrap gap-2 mt-3 text-sm leading-5">
            <div className="text-lg leading-7 text-neutral-600 min-w-max dark:text-gray-300">
              {detail?.company_name}
            </div>
            <div className="flex items-center justify-center px-3 py-1 font-semibold text-white whitespace-nowrap bg-primary-800 rounded-lg ">
              {detail?.job_type}
            </div>
            <div className="flex items-center justify-center px-3 py-1 whitespace-nowrap bg- rounded-[52px] dark:text-gray-300">
              Featured
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 w-full max-md:max-w-full mb-10 ">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full ">
            <div className="flex flex-col grow px-5 text-base leading-6 text-gray-500 max-md:mt-6 max-md:max-w-full bg-gray-50 rounded-lg p-4 dark:bg-gray-700">
              <div className="text-lg font-bold leading-7 text-zinc-900 max-md:max-w-full dark:text-gray-300 ">
                Job Description
              </div>
              <div className="mt-4 max-md:mr-1.5 max-md:max-w-full dark:text-gray-300">
                {detail?.description}
              </div>
              <div className="mt-4 font-bold leading-[150%] text-zinc-900 max-md:max-w-full dark:text-gray-300">
                Requirements
              </div>
              <div className="mt-2 max-md:max-w-full dark:text-gray-300">
                {detail?.job_requirements.map((requirement, index) => (
                  <div key={index}>{requirement?.requirement}</div>
                ))}
              </div>
              <div className="mt-4 font-bold leading-[150%] text-zinc-900 max-md:max-w-full dark:text-gray-300">
                Desirable:
              </div>
              <div className="mt-2 max-md:max-w-full">
                <ul className="list-disc pl-4 dark:text-gray-300">
                  <li>
                    Working knowledge of eCommerce platforms, ideally Shopify
                    but also others e.g. Magento, WooCommerce, Visualsoft to
                    enable seamless migrations.
                  </li>
                  <li>Working knowledge of payment gateways</li>
                  <li>API platform experience / Building restful APIs</li>
                </ul>
              </div>
              <div className="mt-4 font-bold leading-[150%] text-zinc-900 max-md:max-w-full dark:text-gray-300">
                Benefits
              </div>
              <div className="mt-2 max-md:max-w-full dark:text-gray-300">
                <ul className="list-disc pl-4">
                  <li>
                    Early finish on Fridays for our end of week catch up (4:30
                    finish, and drink of your choice from the bar)
                  </li>
                  <li>
                    28 days holiday (including bank holidays) rising by 1 day
                    per year PLUS an additional day off on your birthday
                  </li>
                  <li>Generous annual bonus.</li>
                  <li>Healthcare package</li>
                  <li>
                    Paid community days to volunteer for a charity of your
                    choice
                  </li>
                  <li>
                    £100 contribution for your own personal learning and
                    development
                  </li>
                  <li>
                    Free Breakfast on Mondays and free snacks in the office
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-6 max-md:max-w-full ">
              <div className="justify-center p-8 max-md:px-5 max-md:max-w-full bg-gray-50 rounded-lg dark:bg-gray-700 ">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col justify-center self-stretch my-auto font-medium text-center max-md:mt-10">
                      <div className="text-base leading-6 text-zinc-900 dark:text-gray-300">
                        Salary (USD)
                      </div>
                      <div className="mt-3 text-xl leading-6 text-primary-800 dark:text-primary-800">
                        {detail?.salary}
                      </div>
                      <div className="mt-1 text-sm leading-5 text-gray-500 dark:text-gray-300">
                        Monthly salary
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center text-base leading-6 text-center max-md:mt-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e902683ca13e9cd14279adf820e34b6cd25573791ba4a5107cc7a4322592055e?apiKey=4ca16dc24a9e4ca79331f0aa6ebbe35c&"
                        className="self-center aspect-square w-[38px]"
                        alt="Location Icon"
                      />
                      <div className="mt-2 font-medium text-zinc-900 dark:text-gray-300">
                        Job Location
                      </div>
                      <div className="text-gray-500 dark:text-gray-300">
                        {detail?.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col py-8 mt-4 rounded-lg bg-gray-50 dark:bg-gray-700 max-md:max-w-full">
                <div className="mx-8 text-lg font-medium leading-7 text-zinc-900 max-md:mr-2.5 max-md:max-w-full dark:text-gray-300">
                  Job Overview
                </div>
                <div className="flex gap-4 mx-8 mt-4 max-md:flex-wrap max-md:mr-2.5">
                  <div className="flex flex-col flex-1">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfbd2123267a1bfab4313eadf237420709032b0bcabf931f8af8c0e994a191e7?apiKey=4ca16dc24a9e4ca79331f0aa6ebbe35c&"
                      className="w-8 aspect-square"
                      alt="Calendar Icon"
                    />
                    <div className="mt-3 text-xs leading-5 text-gray-500 uppercase">
                      Job Posted:
                    </div>
                    <div className="mt-1 text-sm font-medium leading-5 text-zinc-900 ">
                      {detail?.created_at}
                    </div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/46997f710a4214bf9b5b9bbe447fe1b90db5b0843d4f54430a357c74bc27e322?apiKey=4ca16dc24a9e4ca79331f0aa6ebbe35c&"
                      className="w-8 aspect-square"
                      alt="Clock Icon"
                    />
                    <div className="mt-3 text-xs leading-5 text-gray-500 uppercase">
                      Job expire on:
                    </div>
                    <div className="mt-1 text-sm font-medium leading-5 text-zinc-900">
                      14 Aug, 2021
                    </div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f83d81f9e32da470b3b37f7b398da538503fb147090b3bc9f6b620a335d3968?apiKey=4ca16dc24a9e4ca79331f0aa6ebbe35c&"
                      className="w-8 aspect-square"
                      alt="Level Icon"
                    />
                    <div className="mt-3 text-xs leading-5 text-gray-500 uppercase">
                      Job Level:
                    </div>
                    <div className="mt-1 text-sm font-medium leading-5 text-zinc-900">
                      Entry Level
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 mx-8 mt-5 whitespace-nowrap max-md:flex-wrap max-md:mr-2.5">
                  <div className="flex flex-col">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/072c8645bbe25f4f5198d6e8b3f0971b24d156767c8e5db77651e9151a59e159?apiKey=4ca16dc24a9e4ca79331f0aa6ebbe35c&"
                      className="w-8 aspect-square"
                      alt="Experience Icon"
                    />
                    <div className="mt-3 text-xs leading-5 text-gray-500 uppercase">
                      Experience
                    </div>
                    <div className="mt-1 text-sm font-medium leading-5 text-zinc-900">
                      $50k-80k/month
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3a198ddbceae3d0065f7061d6cffdf79eaaae7729491c8e0131c21fe231cf37?apiKey=4ca16dc24a9e4ca79331f0aa6ebbe35c&"
                      className="w-8 aspect-square"
                      alt="Education Icon"
                    />
                    <div className="mt-3 text-xs leading-5 text-gray-500 uppercase">
                      Education
                    </div>
                    <div className="mt-1 text-sm font-medium leading-5 text-zinc-900">
                      Graduation
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-center p-7 rounded-lgmax-md:px-5 max-md:max-w-full mt-5 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col px-8 mt-6 max-md:px-5 max-md:max-w-full">
                    <div className="text-lg font-medium leading-7 text-zinc-900 max-md:max-w-full">
                      Share this job:
                    </div>
                    <div className="flex gap-2 pr-20 mt-2 max-md:flex-wrap max-md:pr-5">
                      <div className="flex items-center gap-4">
                        <div className="w-72">
                          <Input
                            value={inputValue}
                            type="email"
                            placeholder="Enter to copy"
                            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                            labelProps={{
                              className: "hidden",
                            }}
                            onChange={(e) => {
                              setInputValue(e.target.value);
                            }}
                            containerProps={{ className: "min-w-[100px]" }}
                          />
                        </div>
                        <Button
                          size="md"
                          onMouseLeave={() => setCopied(false)}
                          onClick={() => {
                            copy(inputValue);
                            setCopied(true);
                          }}
                          className="flex items-center gap-2"
                        >
                          {copied ? (
                            <>
                              <CheckIcon className="h-4 w-4 text-white" />
                              Copied
                            </>
                          ) : (
                            <>
                              <DocumentDuplicateIcon className="h-4 w-4 text-white" />
                              Copy
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailComponent;
