import React from "react";
import Img from "gatsby-image";

const DynamicBackgroundImage = ({ className, defaultImage, images, currentImage }) => {
  return (
    <div className={className}>
      <Img className="h-full" fluid={currentImage === null ? defaultImage : images[currentImage]} />
    </div>
  )
}

export default DynamicBackgroundImage;