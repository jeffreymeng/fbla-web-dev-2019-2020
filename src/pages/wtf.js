// This file is for debugging modal animations when it breaks again.

import React, { useState } from "react"
import ConfirmFlightModal from "../components/ConfirmFlightModal"
import Layout from "../components/layout/layout"
import Transition from "../components/Transition"
import SEO from "../components/seo"
import Img from "gatsby-image"
import BookingForm from "../components/BookingForm"
import Select from "react-select"

const WTF = () => {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <>
      {/*<SEO*/}
      {/*  title="Book Now"*/}
      {/*/>*/}

      {/*<div className="pt-16 pb-6 sm:pt-32 sm:pb-12 relative">*/}
      {/*  <h1*/}
      {/*    className="mb-8 sm:mb-16 px-4 text-center text-white text-4xl leading-10 font-bold text-gray-50 sm:text-5xl sm:leading-none md:text-6xl">Where*/}
      {/*    will we be flying today?</h1>*/}

      <div>
        <BookingForm onSubmit={(d) => {}} />
      </div>
      {/*</div>*/}

      <Select
        isSearchable={false}
        options={null}
        value={null} />
      <div style={{ paddingTop: '2rem' }}>
        {showButton && (
          <button
            onClick={() => setShowMessage(true)}
            style={{ position: 'absolute', zIndex: '1000' }}
          >
            Show Message
          </button>
        )}
        <ConfirmFlightModal
          isOpen={showMessage}
          onConfirm={() => setShowMessage(false)}
        />
      </div>
    </>
  );
}

export default WTF;