import venusLogo from "../../assets/venuslogo.png";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Header = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <navbar>
      <div className="bg-slate-200 text-2xl h-12 flex justify-center items-center text-gray-400">
        <span>Venus Sports Association</span>
      </div>

      <div className="bg-white flex flex-row border-b  border-slate-300 justify-between items-center  cursor-pointer select-none px-4 shadow-lg  w-full h-12">
        <div>
          <img
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxUBq0UUE7M-2p26qp91KIKMHJw2s8XPI7iQ&s"
            src={venusLogo}
            className="h-11 rounded m-2"
            alt="logo-venus"
          ></img>
        </div>
        <ul className="md:flex flex-row hidden">
          <li className="px-3 py-1 font-semibold hover:bg-slate-100 rounded-lg">
            Home
          </li>
          <li className="px-3 py-1 font-semibold hover:bg-slate-100 rounded-lg">
            Summer Camp
          </li>
          <li className="px-3 py-1 font-semibold hover:bg-slate-100 rounded-lg">
            Gallery
          </li>
          <li className="px-3 py-1 font-semibold hover:bg-slate-100 rounded-lg">
            Team
          </li>
          <li className="px-3 py-1 font-semibold hover:bg-slate-100 rounded-lg">
            Contact us
          </li>
        </ul>
        <div>
          <p className="md:block hidden bg-blue-500 hover:bg-blue-400 px-3 py-1 rounded-lg text-white shadow-md">
            Register
          </p>
        </div>
        <div className="md:hidden cursor-pointer">
          {/* <div class="hamburger">
            <div className="bg-slate-500 h-1 w-6 my-1"></div>
            <div className="bg-slate-500 h-1 w-6 my-1"></div>
            <div className="bg-slate-500 h-1 w-6 my-1"></div>
          </div> */}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                {/*   Menu */}
                {/* <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 size-5 text-gray-400"
                /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                  />
                </svg>
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    Home
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    Summer Camp
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    Gallery
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    Contact us
                  </a>
                </MenuItem>
                <form action="#" method="POST">
                  <MenuItem>
                    <button
                      type="submit"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      Team
                    </button>
                  </MenuItem>
                </form>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </navbar>
  );
};

export default Header;
