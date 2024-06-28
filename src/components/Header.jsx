import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  let cart_items = useSelector(store => store.cartStore.cart_items)
  let num = cart_items.length
  let {isLogin}= useSelector(store=>store.userInfoStore)

  return (
    <>
      <nav className="bg-white border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to={"/"}
            className="flex items-center space-x-3"
          >
            <img
              src="logo.png"
              className="h-8"
              alt="movie king Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap hover:underline">
              Movie Hub
            </span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            {isLogin ?
              <Link
                to="/login"
                className="text-gray-900 dark:text-white hover:underline"
              >
                Logout
              </Link>
              :
              <Link
                to="/login"
                className="text-gray-900 dark:text-white hover:underline"
              >
                Login
              </Link>      
            }
            

            <div className="relative">
              <Link
                to={"cart"}
                alt="Go to cart"
              >
                <span className="absolute -mt-1 ms-0.5  text-white font-semibold bg-stone-800 border rounded-full px-1 text-xs">{num > 0 && num}</span>     
                <svg className="w-8 h-8 text-gray-800 hover:text-gray-700 hover:" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-200 border rounded-md">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  to={"/"}
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Latest Movies
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Most Watched
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Most Rated
                </Link>
              </li>
              <li>
                <Link
                  to="/search"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Search
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
