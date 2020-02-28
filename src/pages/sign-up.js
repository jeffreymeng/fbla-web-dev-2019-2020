import React, { useCallback, useEffect, useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import { FirebaseContext } from "gatsby-plugin-firebase"
import { useFirebase } from "gatsby-plugin-firebase/src/components/FirebaseContext"

const SignUpPage = props => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const firebase = React.useContext(FirebaseContext);

  useFirebase(firebase => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = useCallback((evt) => {
    evt.preventDefault();
    setError("");
    setLoading(true);
    firebase.auth().createUserWithEmailAndPassword(email, pass).catch((error) => {
      setError(error.message);
      setLoading(false);
    });
  }, [email, pass, firebase]);

  return (
    <Layout backgroundColor="#f9fafb">
      <div className=" flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" style={{
        marginTop:"20vh",
      }}>
        <div className="max-w-md w-full">
          <div>
            {/*<img className="mx-auto h-12 w-auto" src="/img/logos/workflow-mark-on-white.svg" alt="Workflow" />*/}
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Create an Account
            </h2>
            <p className="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
              Or&nbsp;
              <Link to="sign-in"
                 className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                sign in to an existing account
              </Link>
            </p>
          </div>
          <form className="mt-8" onSubmit={handleSubmit}>
            {error !== "" && <p className="text-sm font-bold text-red-600">Error: {error}</p>}
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm">
              <div>
                <input aria-label="Email address" name="email" type="email" required
                       className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                       placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="-mt-px">
                <input aria-label="Password" name="password" type="password" required
                       className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                       placeholder="Password" value={pass} onChange={e => setPass(e.target.value)} />
              </div>
            </div>

            {/*<div className="mt-6 flex items-center justify-between">*/}
            {/*  <div className="flex items-center">*/}
            {/*    <input id="remember_me" type="checkbox"*/}
            {/*           className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />*/}
            {/*    <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-900 mb-0">*/}
            {/*      Remember me*/}
            {/*    </label>*/}
            {/*  </div>*/}

            {/*  <div className="text-sm leading-5">*/}
            {/*    <a href="#"*/}
            {/*       className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">*/}
            {/*      Forgot your password?*/}
            {/*    </a>*/}
            {/*  </div>*/}
            {/*</div>*/}

            <div className="mt-6">
              <button type="submit"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                      disabled={loading}>
                <span className="absolute left-0 inset-y pl-3">
                  <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
                       fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd" />
                  </svg>
                </span>
                {loading ? "Creating Account..." : "Create an Account"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default SignUpPage