import Hamburger from "./Hamburger";
import { navItems } from "../constants";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";

type NavItem = {
  href: string;
  label: string;
};

const DropDown = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button>
          <Hamburger />
        </button>
      </PopoverTrigger>
      <PopoverContent className="sm:w-[16rem] w-screen">
        <div className="z-20 flex flex-col text-center justify-center items-center lg:hidden">
          <ul>
            {navItems.map((item: NavItem, index: number) => {
              const { href, label } = item;

              return (
                <li key={index} className="py-3 text-lg">
                  <a
                    href={href}
                    className="hover:text-orange-500 transform all ease-in duration-300"
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col items-center space-y-6 w-full pt-4">
            <button
              type="button"
              className="py-2 px-3 border rounded-md w-fit hover:text-neutral-800 hover:bg-neutral-200 transform all duration-200"
            >
              Sign In
            </button>
            <button
              type="button"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md hover:text-neutral-800 transform duration-200"
            >
              Create an account
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DropDown;
