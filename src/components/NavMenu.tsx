import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  // NavigationMenuViewport,
} from "./ui/navigation-menu";

import logo from "../assets/logo.png";

import { features } from "../constants/index";
import { resourcesLinks } from "../constants/index";

const addedLinks = ["Settings", "Help"];

const NavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="h-full grid grid-cols-2 grid-rows-5">
              <img src={logo} alt="" className="grid-cols-1 grid-rows-5" />
              <div className="grid-cols-1 row-span-5 border-l border-neutral-500">
                {resourcesLinks.map((link, index) => {
                  const { href, text } = link;

                  return (
                    <div
                      key={index}
                      className="text-center text-lg py-[0.52rem] pl-1 text-neutral-500 hover:text-white hover:bg-neutral-700/80 transform duration-200 cursor-pointer"
                    >
                      <a href={href}>{text}</a>
                    </div>
                  );
                })}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="py-2 grid grid-cols-2 grid-rows-3 gap-x-3 gap-y-6 items-center my-4 ml-4">
              {features.map((feature, index) => {
                const { icon, text } = feature;

                return (
                  <div key={index}>
                    <div className="group flex items-center cursor-pointer">
                      <div className="group-hover:opacity-100 transform duration-200 text-orange-600 opacity-75 mr-3">
                        {icon}
                      </div>
                      <p className="text-sm text-neutral-400 group-hover:text-white transform duration-200">
                        {text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <ul className="flex">
          {addedLinks.map((item, index) => {
            return (
              <li
                key={index}
                className="mr-1 hover:bg-neutral-600/50 px-3 py-2 rounded-md tracking-wide"
              >
                <a href="##" className="text-[16px]">
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
