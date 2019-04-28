import React from "react";

export default class SubmitBtn extends React.Component {
  handleOnClick = () => {
    if (this.props.InputFeedVal && this.props.RatingVal) {
      localStorage.setItem(
        this.props.chosenPlatform,
        `Msg:${this.props.InputFeedVal}&Rate:${this.props.RatingVal}`
      );


      setTimeout(() => {
        this.props.exitForm("none");
      }, 1000);
    } else alert("Please finish your feedback!");
  };
  render() {
    return <button onClick={this.handleOnClick}>Submit your feedback</button>;
  }
}
