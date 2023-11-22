import { useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/storage";
const StarRating = ({ readonly = false, disabled = false }) => {
  const STORED_RATING_KEY = "storedRating";
  const storedRating = getLocalStorage(STORED_RATING_KEY);
  const initialRatingState = 0;
  const [rating, setRating] = useState(storedRating ?? initialRatingState);

  const handleClickRating = (rated) => {
    setRatingFunc(rated);
    setLocalStorage(STORED_RATING_KEY, rated);
  };
  const setRatingFunc = (rating) =>
    setRating((prev) => (prev !== rating ? rating : prev));

  return (
    <div className="star-container">
      {[1, 2, 3, 4, 5].map((currentNum, id) => (
        <span
          key={id}
          className={`${currentNum <= rating ? "filled" : "unfilled"} ${
            readonly || disabled ? "pointer-none" : ""
          }`}
          onClick={() => handleClickRating(currentNum)}
        >
          {currentNum <= rating ? "\u2605" : "\u2606"}
        </span>
      ))}
    </div>
  );
};
export default StarRating;
