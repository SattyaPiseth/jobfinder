import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useFontClass from "../common/useFontClass";
import { Footer } from "flowbite-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const FooterComponent = ({ isLoading }) => {
  const { fontClass } = useFontClass();
  const { t } = useTranslation();
  const [localLoading, setLocalLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Simulate a loading delay of 1.5 seconds
    const timer = setTimeout(() => {
      setLocalLoading(false);
    }, 1500);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const isComponentLoading = isLoading || localLoading;

  return (
    <Footer
      container
      className="w-full py-10 px-5 absolute left-0 right-0 bg-primary-800 dark:bg-primary-900 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-4">
          <div className="flex-shrink-0 mb-6 md:mb-0">
            {isComponentLoading ? (
              <div className="flex items-center">
                <Skeleton circle={true} height={36} width={36} className="animate-pulse mr-3" />
                <Skeleton height={36} width={100} className="animate-pulse" />
              </div>
            ) : (
              <Footer.Brand
                href="/"
                src="https://ecommerce.techinsights.guru/file/3d3e78e2-5f53-4d18-8818-7b01f9cef98c.png"
                alt="Job Quick Logo"
                name="Job Quick"
                className="font-kantumruy uppercase text-secondary-300"
              />
            )}
          </div>
          <div
            className={`${fontClass} flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center`}
          >
            {isComponentLoading ? (
              Array(3).fill(0).map((_, index) => (
                <div key={index} className="text-center md:text-left mb-6 md:mb-0">
                  <Skeleton height={24} width={150} className="mb-4 animate-pulse" />
                  <Skeleton height={20} width={100} className="mb-2 animate-pulse" />
                  <Skeleton height={20} width={100} className="animate-pulse" />
                </div>
              ))
            ) : (
              <>
                <div className="text-center md:text-left mb-6 md:mb-0">
                  <Footer.Title
                    title={t("footer.website.name")}
                    className="text-gray-300"
                  />
                  <Footer.LinkGroup col className="text-base">
                    <Footer.Link href="#">{t("footer.website.jobs")}</Footer.Link>
                    <Footer.Link href="#">{t("footer.website.media")}</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div className="text-center md:text-left mb-6 md:mb-0">
                  <Footer.Title
                    title={t("footer.information.name")}
                    className="text-gray-300"
                  />
                  <Footer.LinkGroup col className="text-base">
                    <Footer.Link href="#">
                      {t("footer.information.about-us")}
                    </Footer.Link>
                    <Footer.Link href="#">
                      {t("footer.information.privacy-policy")}
                    </Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div className="text-center md:text-left mb-6 md:mb-0">
                  <Footer.Title
                    title={t("footer.contact-us.name")}
                    className="text-gray-300"
                  />
                  <Footer.LinkGroup col className="text-base">
                    <Footer.Link href="#">
                      {t("footer.contact-us.phone")}
                    </Footer.Link>
                    <Footer.Link href="#">
                      {t("footer.contact-us.email")}
                    </Footer.Link>
                  </Footer.LinkGroup>
                </div>
              </>
            )}
          </div>
          <div className="w-full md:w-auto xl:w-96 flex justify-center md:justify-end">
            {isComponentLoading ? (
              <div>
                <Skeleton height={24} width={250} className="mb-4 animate-pulse" />
                <Skeleton height={20} width={200} className="mb-2 animate-pulse" />
              </div>
            ) : (
              <div>
                <h3
                  className={`${fontClass} mb-2 text-lg uppercase font-semibold text-gray-300`}
                >
                  {t("footer.notification")}
                </h3>
                <p
                  className={`${fontClass} text-left mb-3 text-sm font-medium text-gray-400`}
                >
                  {t("footer.description")}
                </p>
                {/* Email Subscription Form */}
                <form
                  action="https://app.convertkit.com/forms/4692392/subscriptions"
                  className="seva-form formkit-form"
                  method="post"
                  data-sv-form="4692392"
                  data-uid="344e3b5c48"
                  data-format="inline"
                  data-version="5"
                  min-width="400 500 600 700"
                >
                  <div
                    data-style="clean"
                    className="flex flex-col md:flex-row items-end mb-3"
                  >
                    <ul
                      className="formkit-alert formkit-alert-error"
                      data-element="errors"
                      data-group="alert"
                    ></ul>
                    <div
                      data-element="fields"
                      data-stacked="false"
                      className="flex flex-col md:flex-row items-center w-full max-w-md mb-3 seva-fields formkit-fields"
                    >
                      <div className="relative w-full mb-3 md:mb-0 md:mr-3 formkit-field">
                        <label htmlFor="member_email" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="member_email"
                          className={`${fontClass} formkit-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                          name="email_address"
                          aria-label="Email Address"
                          placeholder={t("footer.email")}
                          required
                          type="email"
                        />
                      </div>
                      <button data-element="submit" className="formkit-submit">
                        <span className="px-6 py-3 text-sm font-semibold text-center text-white bg-primary-900 rounded-lg cursor-pointer hover:bg-primary-850 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Subscribe
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between">
          {isComponentLoading ? (
            <Skeleton height={20} width={150} className="animate-pulse" />
          ) : (
            <Footer.Copyright href="#" by="Job Finder™" year={2024} />
          )}
          <div className="mt-4 flex space-x-6 md:mt-0 md:justify-center">
            {isComponentLoading ? (
              Array(5).fill(0).map((_, index) => (
                <Skeleton key={index} circle={true} height={24} width={24} className="animate-pulse" />
              ))
            ) : (
              <>
                <Footer.Icon href="#" icon={BsFacebook} aria-label="Facebook" />
                <Footer.Icon href="#" icon={BsInstagram} aria-label="Instagram" />
                <Footer.Icon href="#" icon={BsTwitter} aria-label="Twitter" />
                <Footer.Icon href="#" icon={BsGithub} aria-label="Github" />
                <Footer.Icon href="#" icon={BsDribbble} aria-label="Dribbble" />
              </>
            )}
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
