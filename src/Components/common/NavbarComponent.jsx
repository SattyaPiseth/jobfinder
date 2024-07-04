import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { Button, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NavbarComponent() {
  const { i18n, t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuList = [
    { path: "/", title: t("navbar.home") },
    { path: "/jobs", title: t("navbar.jobs") },
    { path: "/media", title: t("navbar.media") },
    { path: "/about-us", title: t("navbar.about-us") },
    { path: "/contact-us", title: t("navbar.contact-us") },
  ];

  return (
    <Navbar
      fluid
      className="bg-primary-800 shadow-md fixed top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between py-2 px-4">
        <Navbar.Brand href="/" className="flex items-center">
          <img
            alt="Logo"
            loading="lazy"
            width="100"
            height="100"
            decoding="async"
            data-nimg="1"
            className="mr-3 w-9 h-9 object-contain"
            src="https://surveybox.istad.co/surveybox-logo.png"
          />
          <span className="self-center font-extrabold whitespace-nowrap text-md sm:text-xl uppercase text-secondary-300 dark:text-blue-600">
            Job Finder
          </span>
        </Navbar.Brand>

        <div className="flex flex-grow justify-center order-2 md:order-1 w-full md:w-auto">
          <Navbar.Collapse className="flex justify-center space-x-4">
            {menuList.map((menu, index) => (
              <NavLink
                to={menu.path}
                className={({ isActive }) =>
                  isActive
                    ? "font-suwannaphum text-lg font-medium text-white"
                    : "font-suwannaphum font-medium text-lg text-gray-300"
                }
                key={index}
              >
                {menu.title}
              </NavLink>
            ))}
          </Navbar.Collapse>
        </div>

        <div className="relative flex order-1 md:order-2 gap-x-6 items-center">
          <div ref={dropdownRef}>
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <FontAwesomeIcon
                icon={faLanguage}
                className="text-3xl text-secondary-100"
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-3 py-2 w-48 bg-white rounded shadow-xl border border-gray-200 transition duration-300 ease-in-out z-50">
                <button
                  onClick={() => changeLanguage("en")}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  <img src="https://img.icons8.com/?size=96&id=xapj7ZzAUZKI&format=png" alt="English icons" className="w-6 h-6 mr-2" />
                  
                  <span className="font-suwannaphum text-sm font-normal">
                    {t("translate.english")}
                  </span>
                </button>
                <button
                  onClick={() => changeLanguage("kh")}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  <img
                    src="https://img.icons8.com/?size=96&id=2ui1n4CYeion&format=png"
                    alt="Khmer icon"
                    className="w-6 h-6 mr-2"
                  />
                  <span className="font-suwannaphum text-sm font-normal">
                    {t("translate.khmer")}
                  </span>
                </button>
              </div>
            )}
          </div>
          <button
            type="button"
            className="group flex h-min items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-primary-900 enabled:hover:bg-primary-850 focus:ring-primary-650 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800 rounded-full focus:ring-2"
          >
            <span className="flex items-stretch transition-all duration-200 rounded-md text-sm px-4 py-2">
              <span className="lg:px-3 uppercase flex gap-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="h-5 w-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M192 176v-40a40 40 0 0140-40h160a40 40 0 0140 40v240a40 40 0 01-40 40H240c-22.09 0-48-17.91-48-40v-40"
                  ></path>
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M288 336l80-80-80-80M80 256h272"
                  ></path>
                </svg>
                <span className="hidden lg:inline font-suwannaphum font-medium">
                  {t("auth.login")}
                </span>
              </span>
            </span>
          </button>

          <button
            type="button"
            className="group flex h-min items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-primary-900 enabled:hover:bg-primary-850 focus:ring-primary-650 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800 rounded-full focus:ring-2"
          >
            <span className="flex items-stretch transition-all duration-200 rounded-md text-sm px-4 py-2">
              <span className="lg:px-3 uppercase flex gap-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 640 512"
                  className="h-5 w-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                </svg>
                <span className="hidden lg:inline font-suwannaphum font-medium">
                  {t("auth.register")}
                </span>
              </span>
            </span>
          </button>
          <Navbar.Toggle />
        </div>
      </div>
    </Navbar>
  );
}
