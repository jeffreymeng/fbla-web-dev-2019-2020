import React, { useEffect, useState } from "react"
import Img from "gatsby-image";
import classNames from "classnames";

const Caption = ({ children }) => (
  <div className="absolute bottom-0 right-0 pr-4 pb-4 sm:pr-12 sm:pb-8 text-white" style={{ textShadow: "0 0 4px black, 0 0 2px black" }}>
    {children}
  </div>
);

const DynamicBackgroundImage = ({ className, defaultImage, defaultCaption, images, captions, currentImage }) => {
  const [activeImg, setActiveImg] = useState(0);
  const [imageOne, setImageOne] = useState({img:defaultImage, caption:defaultCaption});
  const [imageTwo, setImageTwo] = useState(null);

  useEffect(() => {
    if (currentImage === null) return;
    if (activeImg === 0) {
      setImageTwo({img: images[currentImage], caption: captions[currentImage]});
    } else {
      setImageOne({img: images[currentImage], caption: captions[currentImage]});
    }
  }, [currentImage]);

  return (
    <div className={classNames(className, "relative")}>
      <div className={classNames(
        "absolute top-0 bottom-0 left-0 right-0 overflow-hidden transition duration-1000",
        {
          "opacity-0": activeImg !== 0,
          "opacity-100": activeImg === 0
        }
      )}>
        <Img className="h-full" fluid={imageOne.img} onLoad={() => setActiveImg(0)} />
        <Caption>
          {imageOne?.caption}
        </Caption>
      </div>
      <div className={classNames(
        "absolute top-0 bottom-0 left-0 right-0 overflow-hidden transition duration-1000",
        {
          "opacity-0": activeImg === 0,
          "opacity-100": activeImg !== 0
        }
      )}>
        {imageTwo && <Img className="h-full" fluid={imageTwo.img} onLoad={() => setActiveImg(1)} />}
        <Caption>
          {imageTwo?.caption}
        </Caption>
      </div>
    </div>
  )
}

export default DynamicBackgroundImage;