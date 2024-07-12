import React from "react";
import { useTranslation } from "react-i18next";
import useFontClass from "../common/useFontClass";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const FooterComponent = () => {
  const { fontClass } = useFontClass();
  const { t } = useTranslation();

  return (
    <Footer container className="m-5 w-full py-20 px-5 absolute left-0 right-0">
      <div className="container mx-auto">
        <div className="w-full px-4">
          <div className="flex flex-wrap justify-between gap-8">
            <div className="flex-shrink-0">
              <Footer.Brand
                href="/"
                src="https://surveybox.istad.co/surveybox-logo.png"
                alt="Job Finder Logo"
                name="Job Finder"
                className="font-kantumruy"
              />
            </div>
            <div
              className={`${fontClass} flex-grow grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-16 justify-items-center mx-auto`}
            >
              <div className="text-center sm:text-left">
                <Footer.Title
                  title={t("footer.website.name")}
                  className="text-gray-600 text-lg"
                />
                <Footer.LinkGroup col className="text-base">
                  <Footer.Link href="#">{t("footer.website.jobs")}</Footer.Link>
                  <Footer.Link href="#">
                    {t("footer.website.media")}
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div className="text-center sm:text-left">
                <Footer.Title
                  title={t("footer.information.name")}
                  className="text-gray-600 text-lg"
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
              <div className="text-center sm:text-left">
                <Footer.Title
                  title={t("footer.contact-us.name")}
                  className="text-gray-600 text-lg"
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
            </div>
            <div className="w-full md:w-auto xl:w-96 flex justify-center md:justify-end">
              <div>
                <h3
                  className={`${fontClass} mb-2 text-lg uppercase font-semibold text-gray-600 dark:text-white text-left`}
                >
                  {t("footer.notification")}
                </h3>
                <p
                  className={`${fontClass} text-left mb-3 text-sm font-medium text-gray-500 dark:text-gray-300`}
                >
                  {t("footer.description")}
                </p>
                <form
                  action="https://app.convertkit.com/forms/4692392/subscriptions"
                  className="seva-form formkit-form"
                  method="post"
                  data-sv-form="4692392"
                  data-uid="344e3b5c48"
                  data-format="inline"
                  data-version="5"
                  data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}}}'
                  min-width="400 500 600 700"
                >
                  <div data-style="clean" className="flex items-end mb-3">
                    <ul
                      className="formkit-alert formkit-alert-error"
                      data-element="errors"
                      data-group="alert"
                    ></ul>
                    <div
                      data-element="fields"
                      data-stacked="false"
                      className="flex items-center w-full max-w-md mb-3 seva-fields formkit-fields"
                    >
                      <div className="relative w-full mr-3 formkit-field">
                        <label htmlFor="member_email" className="sr-only">
                          Email address
                        </label>
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                          <svg
                            className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 16"
                          >
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path>
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path>
                          </svg>
                        </div>
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
                        <div className="formkit-spinner">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                        <span className="px-5 py-3 text-sm font-semibold text-center text-white bg-primary-800 rounded-lg cursor-pointer hover:bg-primary-850 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Subscribe
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Job Finder™" year={2024} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;