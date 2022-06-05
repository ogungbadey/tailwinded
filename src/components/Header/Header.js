import React from "react";
import { HiMenuAlt2, HiSearch, HiLightBulb } from "react-icons/hi";

export default function Header({open, toggle}) {
  return (
    <header className="sticky bg-indigo-500 top-0 p-4">
      <div className="flex items-center">
        <button className="md:hidden" onClick={toggle}>
          <span>
            <HiMenuAlt2 />
          </span>
        </button>
        <a href="/">
          <span>Logo</span>
          <span>Brand-name</span>
        </a>

        <button className="ml-auto mr-2">
          <span><HiSearch/></span>
        </button>
        <button>
          <span>
            <HiLightBulb />
          </span>
        </button>
      </div>
    </header>
  );
}
