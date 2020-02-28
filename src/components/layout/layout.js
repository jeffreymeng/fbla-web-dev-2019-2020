/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Navbar from "./navBar"
import BackgroundImage from "gatsby-background-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const SocialMediaIcon = ({icon}) => {
  return (<a href="https://instagram.com" className="icon-stack-link fa-stack">
    <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" />
    <FontAwesomeIcon icon={icon} className="fa-stack-1x" style={{
      color:"black"
    }} />

  </a>);
}

const Layout = ({ children, pageInfo, admin, backgroundImage }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={function(data) {
      let page = (
        <>
          <Container fluid className="px-0 main">
            <Navbar pageInfo={pageInfo} admin={admin} />
            {/*<Row noGutters>*/}
            {/*  <Col>*/}
            {/*    <Container className="mt-5">*/}
                  <main>{children}</main>
                {/*</Container>*/}
              {/*</Col>*/}
            {/*</Row>*/}
          </Container>
          <footer>
            <Container fluid className="px-0">
              <Row noGutters className="text-center align-items-center">
                <Col md={4}>
                  <span className="copyright">Copyright &copy; Your Website 2019</span>
                </Col>
                <Col md={4}>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <SocialMediaIcon icon={faInstagram} />
                    </li>
                  </ul>
                </Col>
                <Col md={4}>
                  <span className="copyright">Copyright &copy; Your Website 2019</span>
                </Col>
                {/*<Col className="footer-col">*/}
                {/*  <footer>*/}
                {/*    <span>*/}
                {/*      Copyright © 2020 Coastal Airlines*/}
                {/*    </span>*/}

                {/*  </footer>*/}
                {/*</Col>*/}
              </Row>
            </Container>
          </footer>
        </>
      )
      if (!backgroundImage) {
        return page
      } else {
        return (
          <BackgroundImage
            Tag="section"
            className={"bg-full"}
            fluid={backgroundImage}
            placeholderStyle={{ visibility: "hidden" }}
          >
            {page}
          </BackgroundImage>
        )
      }
    }}
  />
)

export default Layout
