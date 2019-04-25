import React from "react";
import "./Review.css";

export default class Review extends React.Component {
  render() {
    const { Platform, Msg, Stars } = this.props;
    return (
      <div className="Reviewd-item--container">
        <h3>Platform: {Platform}</h3>

        <p>Your feedback: {Msg}</p>

        <hr />

        <p>Stars: {Stars}</p>
      </div>
    );
  }
}
