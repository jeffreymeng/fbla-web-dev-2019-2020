import React, { useCallback, useEffect, useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import "../styles/auth.scss";
import { FirebaseContext } from "gatsby-plugin-firebase"
import { useFirebase } from "gatsby-plugin-firebase/src/components/FirebaseContext"
import { navigate } from "gatsby"

const SignInPage = props => {
  const [email, setEmail] = useState("demo@gmail.com");
  const [pass, setPass] = useState("demo@gmail.com");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const firebase = React.useContext(FirebaseContext);

  useFirebase(firebase => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setLoading(false);
      if (user) {
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = useCallback((evt) => {
    evt.preventDefault();
    setError("");
    setLoading(true);
    firebase.auth().signInWithEmailAndPassword(email, pass).catch((error) => {
      setError(error.message);
      setLoading(false);
    });
  }, [email, pass, firebase]);

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
                <a href="#"
                   className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                   create an account
                </a>
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
                  {error !== "" && <p className="mt-3 text-md font-bold text-red-600">Error: {error}</p>}

                  <div className="mt-6">
                    <span className="block w-full rounded-md shadow-sm">
                      <button
                        disabled={loading}
                              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                       {loading ? "Signing In..." : "Sign in"}
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
      {/*<div className="auth__container flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">*/}
      {/*  <div className="max-w-md w-full">*/}
      {/*    <div>*/}
      {/*      /!*<img className="mx-auto h-12 w-auto" src="/img/logos/workflow-mark-on-white.svg" alt="Workflow" />*!/*/}
      {/*      <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">*/}
      {/*        Sign in to your account*/}
      {/*      </h2>*/}
      {/*      <p className="mt-2 text-center text-sm leading-5 text-gray-600 max-w">*/}
      {/*        Or&nbsp;*/}
      {/*        <Link to="sign-up"*/}
      {/*           className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">*/}
      {/*          create a new account*/}
      {/*        </Link>*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*    <form className="mt-8" onSubmit={handleSubmit}>*/}
       {/*      <input type="hidden" name="remember" value="true" />*/}
      {/*      <div className="rounded-md shadow-sm">*/}
      {/*        <div>*/}
      {/*          <input aria-label="Email address" name="email" type="email" required*/}
      {/*                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"*/}
      {/*                 placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} />*/}
      {/*        </div>*/}
      {/*        <div className="-mt-px">*/}
      {/*          <input aria-label="Password" name="password" type="password" required*/}
      {/*                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"*/}
      {/*                 placeholder="Password" value={pass} onChange={e => setPass(e.target.value)} />*/}
      {/*        </div>*/}
      {/*      </div>*/}

      {/*      /!*<div className="mt-6 flex items-center justify-between">*!/*/}
      {/*      /!*  <div className="flex items-center">*!/*/}
      {/*      /!*    <input id="remember_me" type="checkbox"*!/*/}
      {/*      /!*           className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />*!/*/}
      {/*      /!*    <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-900 mb-0">*!/*/}
      {/*      /!*      Remember me*!/*/}
      {/*      /!*    </label>*!/*/}
      {/*      /!*  </div>*!/*/}

      {/*      /!*  <div className="text-sm leading-5">*!/*/}
      {/*      /!*    <a href="#"*!/*/}
      {/*      /!*       className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">*!/*/}
      {/*      /!*      Forgot your password?*!/*/}
      {/*      /!*    </a>*!/*/}
      {/*      /!*  </div>*!/*/}
      {/*      /!*</div>*!/*/}

      {/*      <div className="mt-6">*/}
      {/*        <button type="submit"*/}
      {/*                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"*/}
      {/*                disabled={loading}>*/}
      {/*          <span className="absolute left-0 inset-y pl-3">*/}
      {/*            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"*/}
      {/*                 fill="currentColor" viewBox="0 0 20 20">*/}
      {/*              <path fillRule="evenodd"*/}
      {/*                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"*/}
      {/*                    clipRule="evenodd" />*/}
      {/*            </svg>*/}
      {/*          </span>*/}
      {/*          {loading ? "Signing In..." : "Sign in"}*/}
      {/*        </button>*/}
      {/*      </div>*/}
      {/*    </form>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </Layout>
  )
}

export default SignInPage