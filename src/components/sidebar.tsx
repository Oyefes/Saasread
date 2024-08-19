import {
  ArrowDownWideNarrow,
  BarChart2Icon,
  BookOpen,
  HomeIcon,
  Icon,
  PersonStanding,
  Plus,
  Search,
  Settings,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  let signIn = true;
  return (
    <div className={` flex  flex-col gap-2`}>
      <div className="flex  gap-4 mb-2">
        <BookOpen />
        <div className="title font-bold ">SaasRead</div>
      </div>
      <div className="profile flex gap-2 px-2">
        <div className="avatar_info ">
          <span className="font-semibold">
            <PersonStanding />
          </span>
        </div>
        <div className="avatar_info">
          <span className="font-semibold">Solomon</span>
        </div>
        <div className="avatar_info">
          <button
            id="button"
            onClick={() => {
              document
                .querySelector(".dropdown_lists")!
                .classList.toggle("h-0");
              document
                .querySelector(".dropdown_lists")!
                .classList.toggle("border-[1px]");
            }}
            className="font-semibold"
          >
            <ArrowDownWideNarrow />
          </button>

          <div className="absolute dropdown_lists min-w-40 flex flex-col bg-white border-slate-950 dark:border-white dark:bg-slate-950 h-0 transition-[height] overflow-y-clip rounded-sm ">
            <div className="flex gap-2 dropdown_link">
              <Settings />
              <button>Settings</button>
            </div>
            {signIn && (
              <div className="flex gap-2 dropdown_link">
                <button>Sign out</button>
              </div>
            )}
            {!signIn && (
              <div className="flex flex-col">
                <div className="dropdown_link">
                  <button>Log in</button>
                </div>
                <div className="dropdown_link">
                  <button className="flex gap-2">
                    <Plus /> Create Account
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="links flex flex-col">
        <Link className={` items-center  flex gap-2  nav-link`} href={"/"}>
          <HomeIcon />
          Home
        </Link>
        <Link
          className={` items-center flex gap-2 nav-link`}
          href={"/Discover"}
        >
          <Search />
          Discover
        </Link>

        <Link className={` items-center flex gap-2 nav-link`} href={"/"}>
          <ShoppingCart />
          Buy a book
        </Link>
        <Link className={` flex  items-center gap-2 nav-link`} href={"/"}>
          <BarChart2Icon />
          Top rated books
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
