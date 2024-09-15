import logo from "../assets/logo.png";
import DropDown from "./DropDown";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-3xl tracking-tight">VirtualR</span>
          </div>
          <div className="hidden lg:flex">
            <NavMenu />
          </div>

          <div className="hidden lg:flex justify-center items-center space-x-12">
            <button
              type="button"
              className="py-2 px-3 border rounded-md hover:text-neutral-800 hover:bg-neutral-200 transform all duration-200"
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
          <div className="lg:hidden md:flex flex-col">
            <DropDown />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
