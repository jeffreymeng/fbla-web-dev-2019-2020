import React, { useContext, useState } from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import links from "./navlinks";

import invisLogo from "../../images/longCoastalInvisV2.png"
import AuthContext from "../../context/AuthContext"


const CustomNavbar = ({ pageInfo }) => {
  const auth = useContext(AuthContext);

  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  className={classNames({
                    "hidden": open,
                    "inline-flex": !open,
                  })}
                  strokeLinecap="round"
                  strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                <path
                  className={classNames({
                    "hidden": !open,
                    "inline-flex": open,
                  })}
                  strokeLinecap="round"
                  strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <Link to="/" className="flex-shrink-0 flex items-center pb-1.5">
            <img className="block lg:hidden h-8 w-auto" src={invisLogo} alt="" />
            <img className="hidden lg:block h-8 w-auto" src={invisLogo} alt="" />
          </Link>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex">
                {links.map((link, idx) => (
                  <Link to={link.url}
                        key={link.url}
                        className={classNames({
                            "ml-4": idx !== 0,
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
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {!auth.user && <Link to="/sign-in"
                                className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium leading-5 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
              Sign In
            </Link>}
            {auth.user && <button onClick={() => auth.signOut()}
                               className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium leading-5 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
              Sign Out
            </button>}
          </div>
        </div>
      </div>
      <div className={classNames({
        "block": open,
        "hidden": !open,
      }, "sm:hidden")}>
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
