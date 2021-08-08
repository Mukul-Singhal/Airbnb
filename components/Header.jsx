import { useState } from "react";
import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
} from "@heroicons/react/solid";

import { DateRangePicker } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "Selection",
  };

  return (
    <header className="sticky grid grid-cols-3 z-50 bg-white shadow-md p-5 md:px-10">
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Search Your Text"
        />
        <SearchIcon className="hidden md:flex h-8 bg-red-400 text-white rounded-full p-2 md:mx-2" />
      </div>
      {/* Right Side Menu */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline">Become a Member</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex border-2 space-x-2  rounded-full p-2">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {searchInput && <DateRangePicker ranges={[selectionRange]} />}
    </header>
  );
}

export default Header;
