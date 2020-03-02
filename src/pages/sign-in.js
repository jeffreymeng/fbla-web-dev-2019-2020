import React, { useCallback, useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import "../styles/auth.scss";
import { navigate } from "gatsby"
import AuthContext from "../context/AuthContext"

const SignInPage = props => {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState("demo@gmail.com");
  const [pass, setPass] = useState("demo@gmail.com");

  const handleSubmit = useCallback((evt) => {
    evt.preventDefault();
    auth.signIn(email, pass).then(() => navigate("/"));
  }, [email, pass, auth.signIn]);

  return (
    <Layout backgroundColor="#f9fafb">
      <div className="min-h-content-area bg-white flex">
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm ">
            <div className="">
              {/*<img className="h-12 w-auto" src="/img/logos/workflow-mark-on-white.svg" alt="Workflow"/>*/}
              <h2 className="mt-6 text-3xl leading-9 font-extrabold text-gray-900">
                Sign in
              </h2>
              <p className="mt-2 text-1xl leading-5 text-gray-600 max-w font-bold">
                A flight to paradise is just a few clicks away!
              </p>
              <p className="mt-2 text-sm leading-5 text-gray-600 max-w">
                Or&nbsp;
                <Link to="sign-up"
                   className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                   create an account
                </Link>
              </p>
              <p className="text-sm text-gray-700 mb-0 mt-3">Feel free to use demo@gmail.com to play around with the site (username + password are autofilled for you), or create your own account.</p>
              <p className="text-sm text-gray-700">Data syncs between devices in realtime -- try signing in on both a laptop and a phone!</p>

            </div>

            <div className="mt-8">


              <div className="mt-6">
                <form action="#" method="POST">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input id="email" type="email" required
                             value={email} onChange={e => setEmail(e.target.value)}
                             className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
                      Password
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input id="password" type="password" required
                             value={pass} onChange={e => setPass(e.target.value)}
                             className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                    </div>
                  </div>

                  <div className="my-6 flex float-right">
                    <div className="text-sm leading-5">
                      <a href="#"
                         className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                  {auth.error !== null && <p className="mt-3 text-md font-bold text-red-600">Error: {auth.error}</p>}

                  <div className="mt-6">
                    <span className="block w-full rounded-md shadow-sm">
                      <button
                        disabled={auth.loading}
                              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                        {auth.loading ? "Signing In..." : "Sign in"}
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </form>
        <div className="hidden lg:block relative w-0 flex-1">
          <img className="absolute inset-0 h-full w-full object-cover"
               src="/img/login-img.jpg"
               alt="Paradise - Overwater Bungalow"/>
        </div>
      </div>

    </Layout>
  )
}

export default SignInPage