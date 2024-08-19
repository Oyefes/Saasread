"use client";
import Sidebar from "@/src/src/components/sidebar";
import "../../styles/global.css";
import Navbar from "@/src/src/components/navbar";
import { useEffect, useState } from "react";

export default function RootLayout({ children }: any) {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [toggleDarkMode, setToggleDarkMode] = useState(false);
  useEffect(() => {
    document.addEventListener("click", (event) => {
      let button = document.querySelector("#button")!;
      let navbar = document.querySelector(".navbar")!;
      let sidebar = document.querySelector(".sidebar")!;
      if (
        !navbar.contains(event.target as HTMLElement) &&
        !button.contains(event.target as HTMLElement)
      ) {
        setToggleSideBar(false);
      }
      if (
        event.target !== button &&
        !button.contains(event.target as HTMLElement)
      ) {
        document.querySelector(".dropdown_lists")!.classList.add("h-0");
        document
          .querySelector(".dropdown_lists")!
          .classList.remove("border-[1px]");
      }
    });
  }, []);
  return (
    <>
      <html className={`${toggleDarkMode ? "dark" : " "}`} lang="en">
        <body
          className={` duration-300 font-serif transition-all overflow-clip  dark:bg-slate-950 dark:text-white
  `}
        >
          <div className=" w-screen gap-1 md:grid md:grid-cols-[minmax(0,13rem),auto]">
            <div
              className={`sidebar bg-white text-slate-950 dark:bg-slate-950 dark:text-white  border-r-[2px] dark:border-white border-slate-950 py-4 px-2 h-screen dark:max-md:bg-opacity-95 max-md:bg-opacity-95 md:flex md:flex-col   ${
                toggleSideBar
                  ? `md:static  md:w-auto flex flex-grow-0  absolute   `
                  : "hidden"
              }`}
            >
              <Sidebar />
            </div>
            <div className="main flex flex-col gap-2 mx-1">
              <div className="navbar items-center rounded-b-md flex-grow-1 flex py-2 ">
                <Navbar
                  toggleSideBar={toggleSideBar}
                  setToggleSideBar={setToggleSideBar}
                  toggleDarkMode={toggleDarkMode}
                  setToggleDarkMode={setToggleDarkMode}
                />
              </div>
              <hr
                className={` border-b-[1px] dark:border-white  border-slate-950`}
              />
              <div
                className={`content rounded-t-md p-4 overflow-y-scroll scrollbar flex flex-grow`}
              >
                {" "}
                {children}
              </div>
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
