import React, { Fragment } from "react";
import { Link } from "gatsby";
import classnames from "classnames";
import {
  HiOutlineMenuAlt4,
  HiOutlineX,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { Popover, Transition } from "@headlessui/react";
import { RiInstagramLine, RiTwitterFill } from "react-icons/ri";
import { BsInfoCircleFill } from "react-icons/bs";
import { SiByte } from "react-icons/si";
import { StaticImage } from "gatsby-plugin-image";

export default function Navbar({ location }) {
  const routes = [
    { label: "About", to: "/about-us", icon: BsInfoCircleFill },
    { label: "Bytes", to: "/bytes", icon: SiByte },
    { label: "Community", to: "/community", icon: HiOutlineUserGroup },
  ];

  const socials = [
    {
      label: "Twitter",
      link: "https://twitter.com/join_bit",
      icon: RiTwitterFill,
    },
    {
      label: "Instagram",
      link: "https://www.instagram.com/join_bit/",
      icon: RiInstagramLine,
    }
  ];

  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur bg-pastel flex-none transition-colors duration-500 lg:z-50">
      <div className="max-w-7xl mx-auto container px-4">
        <div className="py-6">
          <div className="relative flex items-center">
            <Link
              to="/"
              className="mr-3 flex-none w-auto overflow-hidden text-black"
            >
              <StaticImage
                src="../images/logo.png"
                loading="eager"
                height={40}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="BiT Logo"
                className=""
              />
            </Link>
            <div className="hidden items-center lg:flex ml-auto relative">
              <nav className="font-medium leading-6 text-black text-sm">
                <ul className="flex space-x-8">
                  {routes.map((item) => {
                    return (
                      <li key={item.label}>
                        <NavbarItemLink
                          item={item}
                          currentRoute={location?.pathname}
                        />
                      </li>
                    );
                  })}

                  <li className="text-black-alt/75">|</li>
                </ul>
              </nav>

              <nav className="ml-6">
                <ul className="flex align-middle space-x-4">
                  {socials.map((item, i) => {
                    return (
                      <li key={item.label}>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="py-2 rounded-md text-black"
                        >
                          <item.icon size={20} />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <div className="lg:hidden ml-auto">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={`
                ${open ? "" : "text-opacity-90"}
                p-1 rounded-md text-lg text-black focus:outline-none`}
                    >
                      {open ? (
                        <HiOutlineX size={20} />
                      ) : (
                        <HiOutlineMenuAlt4 size={20} />
                      )}
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10  max-w-sm min-w-xs px-0 transform right-0 top-[45px] w-[250px]">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-8 p-7 lg:grid-cols-2 bg-pastel">
                            {routes.map((item) => (
                              <NavbarItemLink
                                key={item.label}
                                item={item}
                                type={"mini"}
                                currentRoute={location?.pathname}
                              />
                            ))}
                          </div>
                          <div className="p-4 bg-dark">
                            <div className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-black-alt/10 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                              <span className="flex items-center">
                                <span className="text-sm font-semibold text-pastel">
                                  Socials
                                </span>
                              </span>
                              <span className="block text-xs text-gray-500">
                                Connect with us
                              </span>
                            </div>
                            <nav className="ml-2">
                              <ul className="flex align-middle space-x-4">
                                {socials.map((item) => {
                                  return (
                                    <li key={item.label}>
                                      <a
                                        href={item.link}
                                        className="py-2 rounded-md text-pastel"
                                      >
                                        <item.icon size={20} />
                                      </a>
                                    </li>
                                  );
                                })}
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const NavbarItemLink = ({ item, type = "main", currentRoute }) => {
  const navbarItemClass = classnames({
    "text-black": currentRoute === item.to,
    "text-black-alt/75": currentRoute !== item.to,
  });

  return type === "main" ? (
    <Link
      to={item.to}
      className={`${navbarItemClass} hover:text-black py-2 rounded-md transition duration-2500 ease-linear  text-[12.8px]`}
      aria-current="page"
      title={item.title}
    >
      {item.label}
    </Link>
  ) : (
    <Link
      key={item.label}
      to={item.to}
      className={`${navbarItemClass} flex items-center p-2 -m-3 group transition duration-150 ease-in-out rounded-lg hover:bg-black-alt/10 focus:outline-none cursor-pointer hover:text-black`}
    >
      <div className="flex items-center justify-center flex-shrink-0">
        <item.icon className="" size="22" aria-hidden="true" />
      </div>
      <div className="ml-4">
        <p className="text-sm font-medium ">{item.label}</p>
      </div>
    </Link>
  );
};
