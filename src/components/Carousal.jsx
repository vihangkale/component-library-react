import { useState } from "react";
import leftArrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow.svg";
const Carousal = () => {
  const images = [
    "https://picsum.photos/id/1/200/300",
    "https://picsum.photos/id/2/200/301",
    "https://picsum.photos/id/3/200/301",
  ];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const prevClick = () => setSelectedImageIndex((prev) => prev - 1);
  const nextClick = () => setSelectedImageIndex((prev) => prev + 1);
  return (
    <div className="carousal">
      <button
        className="leftNavBtn"
        onClick={prevClick}
        disabled={selectedImageIndex === 0}
      >
        <img src={leftArrow} width="40" height="40" />
      </button>
      <img
        className="w3-animate-left"
        src={images[selectedImageIndex]}
        width="100%"
        height="100%"
      />
      <button
        className="rightNavBtn"
        onClick={nextClick}
        disabled={selectedImageIndex === images.length - 1}
      >
        <img src={rightArrow} width="40" height="40" />
      </button>
    </div>
  );
};
export default Carousal;
