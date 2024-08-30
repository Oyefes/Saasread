import { BookOpen, MenuIcon, SearchIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = ({
  toggleSideBar,
  setToggleSideBar,
  toggleDarkMode,
  setToggleDarkMode,
}: any) => {
  let typeTitle: any;
  const [title, setTitle] = useState(typeTitle);
  useEffect(() => {
    setInterval(() => {
      setTitle(document.querySelector("title")!.textContent);
    }, 100);
  }, []);

  return (
    <div className="flex px-2 flex-grow items-center justify-between">
      <div className="flex gap-2 items-center">
        <div className="md:hidden">
          <BookOpen />
        </div>
        <div className="font-bold text-2xl">{title}</div>
      </div>
      <div className="flex items-center relative md:w-1/2 gap-2">
        <button
          type="button"
          onClick={() => {
            if (toggleDarkMode) {
              setToggleDarkMode(false);
            } else {
              setToggleDarkMode(true);
            }
          }}
        >
          <SunIcon />
        </button>
        <button
          type="button"
          className="nav-link  md:hidden "
          onClick={() => {
            if (toggleSideBar) {
              setToggleSideBar(false);
            } else {
              setToggleSideBar(true);
            }
          }}
        >
          <MenuIcon />
        </button>
        <div className="relative w-full">
          <button
            onClick={() => {
              document
                .querySelector(".form")!
                .classList.remove("max-md:hidden");
              setTimeout(() => {
                document
                  .querySelector(".form")!
                  .classList.remove("max-md:opacity-0");
                document
                  .querySelector(".form")!
                  .classList.add("max-md:opacity-100");
              }, 100);
            }}
            className={` text-slate-950 md:hidden flex items-center justify-center bg-white  h-8 md:w-[5%] w-8 z-auto  md:min-w-8 rounded-full md:rounded-l-3xl`}
          >
            <SearchIcon className="relative w-8/12 font-bold" />
          </button>
          <form
            className={`form max-md:before:w-screen max-md:before:h-screen max-md:before:bg-white max-md:before:absolute  max-md:before:top-0 
              max-md:w-screen
              dark:max-md:before:bg-slate-950 max-md:before:translate-x-14
              max-md:opacity-0
              transition-[opacity] duration-500
              max-md:before:-translate-y-10 max-md:before:opacity-90 max-md:-translate-y-5  max-md:hidden max-md:right-10  relative w-full md:flex max-md:absolute`}
          >
            <div className="flex max-md:px-10 max-md:relative w-full max-md:translate-x-10 max-md:flex-col">
              <div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setTimeout(() => {
                      document
                        .querySelector(".form")!
                        .classList.add("max-md:hidden");
                    }, 500);
                    document
                      .querySelector(".form")!
                      .classList.add("max-md:opacity-0");
                    document
                      .querySelector(".form")!
                      .classList.remove("max-md:opacity-100");
                  }}
                  className="  md:hidden flex items-center hover:border-[2px] border-slate-950 dark:border-white dark:text-white pointer justify-center  h-8 w-8 ml-auto font-extrabold rounded-md translate-x-2 text-xl my-2 "
                >
                  <span className="relative dark:text-white text-slate-950 font-bold">
                    &times;
                  </span>
                </button>
              </div>
              <div className="flex w-full relative border-2 rounded-3xl border-slate-950">
                <input
                  type="text"
                  name="search"
                  placeholder="Search for a book."
                  className={`text-slate-950 search bg-white placeholder:text-sm placeholder:tracking-widest placeholder:font-serif outline-none relative w-[95%] font-semibold p-2 max-h-8 rounded-l-3xl `}
                />
                <button
                  className={` text-slate-950 flex items-center justify-center bg-white  h-8 md:w-[5%] w-8  md:min-w-8 rounded-full rounded-l-3xl`}
                >
                  <SearchIcon className="relative w-8/12 font-bold" />
                </button>
              </div>{" "}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
