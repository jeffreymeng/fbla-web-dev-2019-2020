import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav, Button } from "react-bootstrap"

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
            <NavbarLink page="otherpage">Other Page</NavbarLink>
            <NavbarLink page="jobs">Jobs</NavbarLink>

          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar
