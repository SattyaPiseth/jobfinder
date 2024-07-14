import React from "react";
import { useTranslation } from "react-i18next";
import useFontClass from "../common/useFontClass";
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const FooterComponent = () => {
  const { fontClass } = useFontClass();
  const { t } = useTranslation();

  return (
    <Footer container className="w-full py-10 px-5 relative left-0 right-0 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-4">
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <Footer.Brand
              href="/"
              src="https://surveybox.istad.co/surveybox-logo.png"
              alt="Job Finder Logo"
              name="Job Finder"
              className="font-kantumruy"
            />
          </div>
          <div className={`${fontClass} flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center`}>
            {/* Individual Sections */}
            <div className="text-center md:text-left mb-6 md:mb-0">
              <Footer.Title title={t("footer.website.name")} className="text-gray-600 dark:text-gray-300 text-lg" />
              <Footer.LinkGroup col className="text-base">
                <Footer.Link href="#">{t("footer.website.jobs")}</Footer.Link>
                <Footer.Link href="#">{t("footer.website.media")}</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="text-center md:text-left mb-6 md:mb-0">
              <Footer.Title title={t("footer.information.name")} className="text-gray-600 dark:text-gray-300 text-lg" />
              <Footer.LinkGroup col className="text-base">
                <Footer.Link href="#">{t("footer.information.about-us")}</Footer.Link>
                <Footer.Link href="#">{t("footer.information.privacy-policy")}</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="text-center md:text-left mb-6 md:mb-0">
              <Footer.Title title={t("footer.contact-us.name")} className="text-gray-600 dark:text-gray-300 text-lg" />
              <Footer.LinkGroup col className="text-base">
                <Footer.Link href="#">{t("footer.contact-us.phone")}</Footer.Link>
                <Footer.Link href="#">{t("footer.contact-us.email")}</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          <div className="w-full md:w-auto xl:w-96 flex justify-center md:justify-end">
            <div>
              <h3 className={`${fontClass} mb-2 text-lg uppercase font-semibold text-gray-600 dark:text-white text-left`}>
                {t("footer.notification")}
              </h3>
              <p className={`${fontClass} text-left mb-3 text-sm font-medium text-gray-500 dark:text-gray-300`}>
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
                <div data-style="clean" className="flex flex-col md:flex-row items-end mb-3">
                  <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                  <div data-element="fields" data-stacked="false" className="flex flex-col md:flex-row items-center w-full max-w-md mb-3 seva-fields formkit-fields">
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
                      <span className="px-6 py-3 text-sm font-semibold text-center text-white bg-primary-800 rounded-lg cursor-pointer hover:bg-primary-850 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between">
          <Footer.Copyright href="#" by="Job Finder™" year={2024} />
          <div className="mt-4 flex space-x-6 md:mt-0 md:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} aria-label="Facebook" />
            <Footer.Icon href="#" icon={BsInstagram} aria-label="Instagram" />
            <Footer.Icon href="#" icon={BsTwitter} aria-label="Twitter" />
            <Footer.Icon href="#" icon={BsGithub} aria-label="Github" />
            <Footer.Icon href="#" icon={BsDribbble} aria-label="Dribbble" />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
