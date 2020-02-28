import React, { useState } from "react"
import { Link, navigate } from "gatsby"

import { Navbar, Nav, Button } from "react-bootstrap"
import { useFirebase } from "gatsby-plugin-firebase/src/components/FirebaseContext"

function NavbarLink(props) {
  return (
    <Link to={"/" + props.page} className="link-no-style">
      <Nav.Link as="span" eventKey={props.page}>
        {props.children}
      </Nav.Link>
    </Link>
  )
}
const CustomNavbar = ({ pageInfo }) => {
  const [signedIn, setSignedIn] = useState(false);

  useFirebase(firebase => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      // console.log(user);
      if (user) {
        setSignedIn(true);
      } else {
        setSignedIn(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" id="site-navbar">
        {/* <Container> */}
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span">Coastal Airlines</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav activeKey={pageInfo && pageInfo.pageName}>
            <NavbarLink page="">Home</NavbarLink>
            <NavbarLink page="jobs">Jobs</NavbarLink>
            <NavbarLink page="frequent-flyer-program">Frequent Flyer Program</NavbarLink>
            {!signedIn && <NavbarLink page="sign-in">Sign In</NavbarLink>}
            {signedIn && <NavbarLink page="sign-out">Sign Out</NavbarLink>}
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar
