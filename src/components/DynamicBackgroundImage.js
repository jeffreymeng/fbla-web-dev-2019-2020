import React, { useEffect, useState } from "react"
import Img from "gatsby-image";
import classNames from "classnames";

const Caption = ({ caption }) => (
  <div className="absolute bottom-0 right-0 pr-4 pb-4 sm:pr-12 sm:pb-8 text-white"
       style={{ textShadow: "0 0 6px black, 0 0 4px black, 0 0 2px black" }}>
    {caption?.caption}<br />
    <div className="flex">
      <div className="text-gray-200 mr-1 mt-1">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
          <path d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
        </svg>
      </div>
      <div>{caption?.location}</div>
    </div>
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
        <Caption caption={imageOne?.caption}/>
      </div>
      <div className={classNames(
        "absolute top-0 bottom-0 left-0 right-0 overflow-hidden transition duration-1000",
        {
          "opacity-0": activeImg === 0,
          "opacity-100": activeImg !== 0
        }
      )}>
        {imageTwo && <Img className="h-full" fluid={imageTwo.img} onLoad={() => setActiveImg(1)} />}
        <Caption caption={imageTwo?.caption}/>
      </div>
    </div>
  )
}

export default DynamicBackgroundImage;