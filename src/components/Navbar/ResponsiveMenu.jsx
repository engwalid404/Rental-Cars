import React from "react";
import myPic from '../../assets/myPic.png';
import { Navlinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu }) => {
  console.log("showMenu", showMenu);
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <img src={myPic} alt="admin picture" className=" w-22 h-20 rounded-full bg-blue-400 dark:bg-yellow-50" />
          <div>
            <h1 className=" italic font-bold">Walid Rabie</h1>
            <h1 className="text-sm text-slate-500 italic">FrontEnd Engineer</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {Navlinks.map((data) => (
              <li>
                <a href={data.link} className="mb-5 inline-block">
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>
          Created by <a className=" italic underline cursor-pointer" href="https://github.com/engwalid404" target="__blank">Eng : Walid</a>{" "} ❤ 
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
