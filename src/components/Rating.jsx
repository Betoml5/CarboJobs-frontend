import React from "react";
import starIcon from "../assets/static/images/star.png";

const Rating = (props) => {
  const renderRating = (rating) => {
    if (rating === 1) {
      return (
        <div className="workerRating__stars">
          <img src={starIcon} alt="starIcon" />
        </div>
      );
    }

    if (rating === 2) {
      return (
        <div className="workerRating__stars">
          <img src={starIcon} alt="starIcon" />
          <img src={starIcon} alt="starIcon" />
        </div>
      );
    }

    if (rating === 3) {
      return (
        <div className="workerRating__stars">
          <img src={starIcon} alt="starIcon" />
          <img src={starIcon} alt="starIcon" />
          <img src={starIcon} alt="starIcon" />
        </div>
      );
    }

    if (rating === 4) {
      return (
        <div className="workerRating__stars">
          <img src={starIcon} alt="starIcon" />
          <img src={starIcon} alt="starIcon" />
          <img src={starIcon} alt="starIcon" />
          <img src={starIcon} alt="starIcon" />
        </div>
      );
    }

    if (rating === 5) {
      return (
        <div className="workerRating__stars">
          <img src={starIcon} alt="starIcon" />
          <img src={starIcon} alt="starIcon" />
          <img src={starIcon} alt="starIcon" />
          <img src={starIcon} alt="starIcon" />
          <img src={starIcon} alt="starIcon" />
        </div>
      );
    }
  };

  return <>{renderRating(props.rating)}</>;
};

export default Rating;
