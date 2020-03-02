import React from "react";
import { Link } from "gatsby";
import links from "./navlinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faTwitter, faYoutube,  faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = props => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
          {links.map(link => (
            <div className="px-5 py-2" key={link.url}>
              <Link to={link.url} className="text-base leading-6 text-gray-500 hover:text-gray-900">
                {link.label}
              </Link>
            </div>
          ))}
          {/*<div className="px-5 py-2">*/}
          {/*  <Link to="privacy-policy" className="text-base leading-6 text-gray-500 hover:text-gray-900">*/}
          {/*    Privacy Policy*/}
          {/*  </Link>*/}
          {/*</div>*/}
          {/*<div className="px-5 py-2">*/}
          {/*  <Link to="terms-of-use" className="text-base leading-6 text-gray-500 hover:text-gray-900">*/}
          {/*    Terms of Use*/}
          {/*  </Link>*/}
          {/*</div>*/}
        </nav>
        <div className="mt-8 flex justify-center">
          <a href="https://facebook.com" className="text-gray-400 hover:text-gray-500 mx-2">
            <span className="sr-only">Facebook</span>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://instagram.com" className="ml-6 text-gray-400 hover:text-gray-500 mx-2">
            <span className="sr-only">Instagram</span>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com" className="ml-6 text-gray-400 hover:text-gray-500 mx-2">
            <span className="sr-only">Twitter</span>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://linkedin.com" className="ml-6 text-gray-400 hover:text-gray-500 mx-2">
            <span className="sr-only">Linkedin</span>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://youtube.com" className="ml-6 text-gray-400 hover:text-gray-500 mx-2">
            <span className="sr-only">Youtube</span>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
        <div className="mt-8">
          <p className="text-center text-base leading-6 text-gray-400">
            &copy; 2020 Coastal Airlines, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;