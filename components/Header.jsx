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
import { useRouter } from "next/dist/client/router";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const handleInput = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const handleSearch = () => {
    router.push({
      pathname: "/search",

      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests: noOfGuests,
      },
    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <header className="sticky grid grid-cols-3 z-50 bg-white shadow-md p-5 md:px-10">
      {/* Logo */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          onClick={() => router.push("/")}
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
          placeholder={placeholder || "Start Your Search"}
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

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5861"]}
            onChange={handleInput}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              {" "}
              Number of Guests
            </h2>
            <UsersIcon className="h-4" />
            <input
              type="number"
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              className="w-12 outline-none pl-2 text-lg text-red-400"
            />
          </div>
          <div className="flex">
            <button
              className="p-2 flex-grow text-gray-400 rounded-2xl hover:shadow-md"
              onClick={() => setSearchInput("")}
            >
              Cancel
            </button>
            <button
              className=" p-2 flex-grow text-red-400 rounded-2xl hover:shadow-md"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
