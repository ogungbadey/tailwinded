import React from "react";
import { HiSearch } from "react-icons/hi";
import NavigationItems from "../NavigationItems/NavigationItems";

export default function FixedSideBar() {
  return (
    <div className="hidden lg:block inset-0 fixed w-[19.5rem] px-8 top-[3.5rem] overflow-y-auto pb-8">
      <div className="sticky top-0">
        <div className="h-10 bg-white"></div>
        <div className="bg-white">
          <button
            className="flex items-center w-full rounded-md ring-1 p-2 text-sm shadow-sm ring-slate-900/10"
            type="button"
          >
            <HiSearch
              className="h-[1.25rem] w-[1.25rem] mr-3"
              width={24}
              height={24}
            />
            <span>Quick Search</span>
          </button>
        </div>
      </div>
      <NavigationItems />
    </div>
  );
}
