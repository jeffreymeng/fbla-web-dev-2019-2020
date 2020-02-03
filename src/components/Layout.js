import React from "react";
import Navbar from "./Navbar";


export default function Layout(props) {
  return (
      <div className="h-auto">
      <Navbar></Navbar>
        {props.children}
      </div>
  )
}