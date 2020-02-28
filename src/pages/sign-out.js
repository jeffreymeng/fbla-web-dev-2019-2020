import React, { useCallback, useEffect, useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import { useFirebase } from "gatsby-plugin-firebase/src/components/FirebaseContext"

const SignOutPage = props => {
  useFirebase(firebase => {
    firebase.auth().signOut();
  }, []);

  return (
    <Layout>
      <div className="text-center text-5xl mt-24 font-weight-bold">
        You have successfully signed out.
      </div>
      <div className="text-center">
        <Link to="/" className="text-xl">Back to Home</Link>
      </div>
    </Layout>
  )
}

export default SignOutPage