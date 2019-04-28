import React from "react";
import "./Review.css";

const Review = props => (
  <div className="Reviewd-item--container">
    <h3>Platform: {props.Platform}</h3>
    <p>Your feedback: {props.Msg}</p>
    <hr />
    <p>Stars: {rops.Stars}</p>
  </div>
);

export default Review;
