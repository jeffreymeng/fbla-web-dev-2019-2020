import React, { useCallback, useContext, useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import links from "./navlinks";

import invisLogo from "../../images/longCoastalInvisV2.png"
import ServerContext from "../../context/ServerContext"
import Transition from "../Transition"
import ClickAwayListener from "../ClickAwayListener"


const CustomNavbar = ({ pageInfo }) => {
  const auth = useContext(ServerContext);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [userNavOpen, setUserNavOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
        <div className="relative flex items-center h-16">
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  className={classNames({
                    "hidden": mobileNavOpen,
                    "inline-flex": !mobileNavOpen,
                  })}
                  strokeLinecap="round"
                  strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                <path
                  className={classNames({
                    "hidden": !mobileNavOpen,
                    "inline-flex": mobileNavOpen,
                  })}
                  strokeLinecap="round"
                  strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <Link to="/" className="flex-shrink-0 flex items-center pb-1.5 ml-4 md:ml-0">
            <img className="block lg:hidden h-8 w-auto" src={invisLogo} alt="" />
            <img className="hidden lg:block h-8 w-auto" src={invisLogo} alt="" />
          </Link>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden md:block sm:ml-6">
              <div className="flex">
                {links.map((link, idx) => (
                  <Link to={link.url}
                        key={link.url}
                        className={classNames({
                            "ml-2 xl:ml-4": idx !== 0,
                            "text-gray-300 hover:text-white hover:bg-gray-700": true,
                          },
                          "px-3 py-2 rounded-md text-sm font-medium leading-5 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out",
                        )}
                        activeClassName={"text-white bg-gray-900 hover:bg-gray-900"}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {
            auth.user &&
            <div className="mx-4 md:mx-0 flex-shrink-0 flex items-center">
              <ClickAwayListener onClickAway={() => setUserNavOpen(false)} className="ml-3 relative">
                <div>
                  <button onClick={() => setUserNavOpen(!userNavOpen)} className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </button>
                </div>
                <Transition
                  show={userNavOpen}
                  enter="transition ease-out duration-200"
                  enterFrom="transform opacity-0 scale-95"
                  enterEnd="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                  className="origin-top-right absolute z-40 right-0 mt-2 w-48 rounded-md shadow-lg">
                  <div className="py-1 rounded-md bg-white shadow-xs">
                    <Link to="checkout" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Cart</Link>
                    <Link to="my-flights" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">My Flights</Link>
                    <Link to="index" onClick={(e) => {e.preventDefault();auth.signOut()}} className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Sign Out</Link>
                  </div>
                </Transition>
              </ClickAwayListener>
            </div>
          }

          {
            !auth.user &&
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Link to="/sign-in"
                    className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium leading-5 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
                Sign In
              </Link>
            </div>
          }
        </div>
      </div>

      <div className={classNames({
        "block": mobileNavOpen,
        "hidden": !mobileNavOpen,
      }, "md:hidden")}>
        <div className="px-2 pt-2 pb-3">
          {links.map((link, idx) => (
            <Link to={link.url}
                  key={link.url}
                  className={classNames({
                    "mt-1": idx !== 0,
                  }, "block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out")}
                  activeClassName="text-white bg-gray-900 hover:bg-gray-900">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default CustomNavbar
