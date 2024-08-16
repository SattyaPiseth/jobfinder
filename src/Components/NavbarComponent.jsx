import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useFontClass from "../common/useFontClass";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import LanguageDropdown from "../common/LanguageDropdown";
import { useSelector } from "react-redux";
import useLogout from "../common/useLogout";
import AOS from "aos";
import "aos/dist/aos.css";
import ThemeToggle from "../common/ThemeToggle";

const MenuList = React.memo(({ menuList, fontClass, isOpen, setIsOpen }) => (
  <div
    className={`flex flex-col xl:flex-row xl:space-x-10 transition-all duration-300 ease-in-out ${
      isOpen ? "block" : "hidden"
    } xl:block`}
    style={{ textAlign: "center" }}
  >
    {menuList.map((menu, index) => (
      <NavLink
        to={menu.path}
        className={({ isActive }) =>
          isActive
            ? `${fontClass} text-xl font-medium text-white dark:text-white`
            : `${fontClass} font-medium text-xl text-gray-300 dark:text-gray-300`
        }
        key={index}
        onClick={() => setIsOpen(false)}
      >
        {menu.title}
      </NavLink>
    ))}
  </div>
));

export default function NavbarComponent() {
  const { t } = useTranslation();
  const { fontClass } = useFontClass();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const logout = useLogout();
  const { user, isLoading: globalLoading } = useSelector((state) => state.user);
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isLoading = loading || globalLoading;

  const desktopMenuList = [
    { path: "/", title: t("navbar.home") },
    { path: "/jobs", title: t("navbar.jobs") },
    { path: "/media", title: t("navbar.media") },
    { path: "/about-us", title: t("navbar.about-us") },
  ];

  const mobileMenuList = [
    { path: "/", title: t("navbar.home") },
    { path: "/jobs", title: t("navbar.jobs") },
    { path: "/media", title: t("navbar.media") },
    { path: "/about-us", title: t("navbar.about-us") },
    ...(isAuthenticated
      ? []
      : [
          { path: "/login", title: t("auth.login") },
          { path: "/register", title: t("auth.register") },
        ]),
  ];

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Navbar
      fluid
      className="bg-primary-800 shadow-md fixed top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between py-2 gap-4">
          <Navbar.Brand
            href="/"
            className="flex items-center whitespace-nowrap"
          >
            {loading ? (
              <div className="w-7 h-7 bg-gray-300 rounded-full mr-3"></div>
            ) : (
              <img
                alt="Job Quick Logo"
                loading="lazy"
                width="48"
                height="48"
                decoding="async"
                className="mr-3 w-7 h-7 object-contain"
                src="https://job-quick-api.techinsights.guru/media/uploads/icon_632abff944151.svg"
              />
            )}
            {loading ? (
              <div className="w-20 h-6 bg-gray-300 rounded"></div>
            ) : (
              <div className="font-extrabold text-md sm:text-lg uppercase text-white dark:text-white whitespace-nowrap font-kantumruy">
                Job Quick
              </div>
            )}
          </Navbar.Brand>

          <div className="hidden xl:flex flex-grow justify-center">
            <MenuList
              isLoading={isLoading}
              menuList={desktopMenuList}
              fontClass={fontClass}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </div>

          <div className="relative flex items-center gap-x-4 xl:gap-x-8 whitespace-nowrap">
            {/* Conditionally hide icons on small screens */}
            <div className="hidden sm:flex gap-x-4">
              <LanguageDropdown fontClass={fontClass} />
              <ThemeToggle />
            </div>
            {loading ? (
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            ) : isAuthenticated ? (
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt="User settings"
                    img={user?.avatar}
                    rounded
                    status="online"
                    statusPosition="top-right"
                    bordered
                    color=""
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm text-left">
                    {user?.username}
                  </span>
                  <span className="block truncate text-sm font-medium">
                    {user?.email}
                  </span>
                </Dropdown.Header>
                <Dropdown.Item as={Link} to="/profile">
                  Settings
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
              </Dropdown>
            ) : (
              <>
                <div className="hidden xl:flex gap-x-4">
                  <NavLink to="/register">
                    <button
                      type="button"
                      aria-label="Register"
                      className="flex items-center px-4 py-2 text-center font-medium text-white bg-primary-900 hover:bg-primary-850 focus:ring-primary-650 dark:bg-primary-800 dark:hover:bg-blue-700 dark:focus:ring-sky-400 rounded-lg focus:ring-2 whitespace-nowrap"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 640 512"
                        className="h-5 w-5 mr-2"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                      </svg>
                      <span
                        className={`${fontClass} hidden xl:inline font-medium uppercase`}
                      >
                        {t("auth.register")}
                      </span>
                    </button>
                  </NavLink>
                  <NavLink to="/login">
                    <button
                      type="button"
                      aria-label="Login"
                      className="flex items-center px-4 py-2 text-center font-medium text-white bg-primary-900 hover:bg-primary-850 focus:ring-primary-650 dark:bg-primary-800 dark:hover:bg-blue-700 dark:focus:ring-sky-400 rounded-lg focus:ring-2 whitespace-nowrap"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="h-5 w-5 mr-2"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M502.6 233.4l-96-96c-4.6-4.6-11-7-17.6-7-13.8 0-24 11.2-24 24v56H272c-13.3 0-24 10.7-24 24v64c0 13.3 10.7 24 24 24h93v56c0 13.8 11.2 24 24 24 6.6 0 13-2.4 17.6-7l96-96c9.4-9.4 9.4-24.6 0-33.9z"></path>
                        <path d="M400 32H112C85.5 32 64 53.5 64 80v112c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V96h256v320H128v-96c0-13.3-10.7-24-24-24H88c-13.3 0-24 10.7-24 24v112c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                      <span
                        className={`${fontClass} hidden xl:inline font-medium uppercase`}
                      >
                        {t("auth.login")}
                      </span>
                    </button>
                  </NavLink>
                </div>
              </>
            )}

            {/* Mobile menu toggle button */}
            <button
              type="button"
              className="inline-flex items-center xl:hidden p-2 text-sm text-white bg-primary-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-650 dark:text-gray-400 dark:hover:bg-primary-850 dark:focus:ring-primary-800"
              onClick={toggleNavbar}
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 012 0h10a1 1 0 110 2H5a1 1 0 01-2 0V5zm0 5a1 1 0 012 0h10a1 1 0 110 2H5a1 1 0 01-2 0v-2zm0 5a1 1 0 012 0h10a1 1 0 110 2H5a1 1 0 01-2 0v-2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full xl:hidden transition-all duration-300 ease-in-out`}
        >
          <MenuList
            isLoading={isLoading}
            menuList={mobileMenuList}
            fontClass={fontClass}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          <div className="flex justify-center gap-4 mt-4">
            <LanguageDropdown fontClass={fontClass} />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </Navbar>
  );
}
