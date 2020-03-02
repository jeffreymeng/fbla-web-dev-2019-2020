/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "./src/styles/style.scss"

import React from "react";

import { AuthProvider } from "./src/context/AuthContext";

export const wrapRootElement = ({ element }) => (
  <AuthProvider>{element}</AuthProvider>
)