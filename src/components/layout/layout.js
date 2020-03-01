/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Navbar from "./navBar"
import BackgroundImage from "gatsby-background-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer"
import "../../styles/parallax.scss";


const SocialMediaIcon = ({icon,link,lightFooter}) => {
  return (<a href={link} className={`icon-stack-link fa-stack ${!lightFooter ? "bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-blue-500" : "bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-blue-300"}`}>
    {/*<FontAwesomeIcon icon={faCircle} className="fa-stack-2x" />*/}
    <FontAwesomeIcon icon={icon} className="fa-stack-1x " />
  </a>);
}

const Layout = ({ children, pageInfo, admin, parallax, backgroundImage, backgroundColor, customParallax }) => (
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

        <div className={(parallax ? "parallax-wrapper " + (parallax !== "" ? "bg-" + parallax : "") : "") + customParallax ? "parallax-wrapper-custom" : ""}>
          <div className={"px-0 main"} style={{
            backgroundColor:backgroundColor
          }}>
            <Navbar pageInfo={pageInfo} admin={admin} />

            <main>{children}</main>

          </div>
          <Footer />
        </div>

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
