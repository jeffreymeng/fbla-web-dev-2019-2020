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
import { faInstagram, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const SocialMediaIcon = ({icon,link,lightFooter}) => {
  return (<a href={link} className={`icon-stack-link fa-stack ${!lightFooter ? "bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-blue-500" : "bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-blue-300"}`}>
    {/*<FontAwesomeIcon icon={faCircle} className="fa-stack-2x" />*/}
    <FontAwesomeIcon icon={icon} className="fa-stack-1x " />

  </a>);
}

const Layout = ({ children, pageInfo, admin, lightFooter, backgroundImage }) => (
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
          <footer className={lightFooter ? "light-footer" : ""}>
            <Container fluid className="px-0">
              <Row noGutters className="text-center align-items-center">
                <Col md={4}>
                  <span className="copyright">Copyright &copy; 2020 Coastal Airlines</span>
                </Col>
                <Col md={4}>
                  <ul className="list-inline social-buttons d-none d-md-block">
                    <li className="list-inline-item">
                      <SocialMediaIcon icon={faFacebookF} link={"https://facebook.com"} lightFooter={lightFooter} />
                    </li>
                    <li className="list-inline-item">
                      <SocialMediaIcon icon={faInstagram}  link={"https://instagram.com"} lightFooter={lightFooter} />
                    </li>
                    <li className="list-inline-item">
                      <SocialMediaIcon icon={faTwitter} link={"https://twitter.com"} lightFooter={lightFooter} />
                    </li>
                  </ul>
                  <ul className="list-inline quicklinks d-block p-0 m-0 d-md-none">
                    <li className="list-inline-item">
                      <a href="https://facebook.com">Facebook</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://instagram.com">Instagram</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://twitter.com">Twitter</a>
                    </li>
                  </ul>
                </Col>
                <Col md={4}>
                  <ul className="list-inline quicklinks">
                    <li className="list-inline-item mr-4">
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Terms of Use</a>
                    </li>
                  </ul>
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
