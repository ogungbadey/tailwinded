import React from "react";
import { GrFormClose } from "react-icons/gr";
import NavigationItems from "../NavigationItems/NavigationItems";
import styles from "./SideBar.module.css";
export default function SideBar({ open, toggle }) {
  return (
    open && (
      <div>
        <div className="fixed z-50 inset-0 overflow-y-auto lg:hidden">
          <div class="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"></div>
          <div
            className="relative bg-white p-6 max-w-[calc(100%-2rem)] overflow-y-auto"
            style={{
              width: open ? "20rem" : "0",
              transition: "all 300ms ease-in-out",
            }}
          >
            <button
              className="absolute h-4 w-4 top-5 right-6 z-10"
              onClick={toggle}
            >
              <span className="flex">
                <GrFormClose />
              </span>
            </button>

            <NavigationItems/>
          </div>
        </div>
      </div>
    )
  );
}
