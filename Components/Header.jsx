import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Logo */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          objectFit="contain"
          layout="fill"
          objectPosition="left"
        />
      </div>
      {/* Middle - Search Bar */}
      <div className="flex items-center md:border-2 rounded-full md:shadow-sm ">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Search Your Text"
        />
        <SearchIcon className="hidden md:flex h-8 bg-red-400 text-white rounded-full p-2 md:mx-2" />
      </div>
      {/* Right Side Menu */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p>Become a Member</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex border-2 space-x-2  rounded-full p-2">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
