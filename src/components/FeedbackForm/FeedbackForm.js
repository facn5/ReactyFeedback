import React from "react";
import Rating from "../Rating/Rating";
import InputFeed from "../InputFeed/InputFeed";
import SubmitBtn from "../SubmitBtn/SubmitBtn";
import "./FeedbackForm.css";

export default class FeedbackForm extends React.Component {
  state = {
    inputFeedValue: "",
    ratingValue: 0
  }

  inputFeedValChange = (value) => {
    this.setState({ inputFeedValue: value })
  }

  exitForm = () => {
    this.props.displayFeedbackForm("none", "");
  };

  ratingValChange = (value) => {
    this.setState({ ratingValue: value })

  }

  render() {
    const { inputFeedValue, ratingValue } = this.state;
    const { formDisplay, chosenPlatform } = this.props;

    return (
      <div style={{ display: formDisplay }} className="abc">
        <div
          style={{ display: formDisplay }}
          className="feedbackForm--container"
        >
          <button onClick={this.exitForm}>X</button>
          <h3>Your feedback on {chosenPlatform}</h3>
          <InputFeed onChange={this.inputFeedValChange.bind(this)} />
          <Rating onChange={this.ratingValChange.bind(this)} />
          <SubmitBtn exitForm={this.exitForm.bind(this)} chosenPlatform={chosenPlatform} RatingVal={ratingValue} InputFeedVal={inputFeedValue} />
        </div>
      </div>
    );
  }
}
