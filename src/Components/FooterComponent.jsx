import React from "react";
import { useTranslation } from "react-i18next";
import useFontClass from "../common/useFontClass";
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const FooterComponent = () => {
  const { fontClass } = useFontClass();
  const { t } = useTranslation();

  return (
    <Footer container className="w-full py-10 px-5 bg-white">
      <div className="container mx-auto">
        <div className="w-full">
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
            <div className={`${fontClass} flex-grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 justify-items-center mx-auto`}>
              <div className="text-center sm:text-left">
                <Footer.Title title={t("footer.website.name")} className="text-gray-600 text-lg" />
                <Footer.LinkGroup col className="text-base">
                  <Footer.Link href="#">{t("footer.website.jobs")}</Footer.Link>
                  <Footer.Link href="#">{t("footer.website.media")}</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div className="text-center sm:text-left">
                <Footer.Title title={t("footer.information.name")} className="text-gray-600 text-lg" />
                <Footer.LinkGroup col className="text-base">
                  <Footer.Link href="#">{t("footer.information.about-us")}</Footer.Link>
                  <Footer.Link href="#">{t("footer.information.privacy-policy")}</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div className="text-center sm:text-left">
                <Footer.Title title={t("footer.contact-us.name")} className="text-gray-600 text-lg" />
                <Footer.LinkGroup col className="text-base">
                  <Footer.Link href="#">{t("footer.contact-us.phone")}</Footer.Link>
                  <Footer.Link href="#">{t("footer.contact-us.email")}</Footer.Link>
                </Footer.LinkGroup>
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
