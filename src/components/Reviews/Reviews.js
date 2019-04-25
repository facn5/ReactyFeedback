import React from "react";
import Review from "../Review/Review";

export default class Reviews extends React.Component {
  state = {
    userReviews: <div />,
    reviewsDisplay: "none",
    buttonToggle: "Show my current feedbacks"
  };

  ConvertArrayToJSX = () => {
    if (this.state.buttonToggle == "Hide my current feedbacks") {
      this.setState({
        reviewsDisplay: "none",
        buttonToggle: "Show my current feedbacks"
      });
    } else {
      this.props.loadingFunc();

      setTimeout(() => {
        this.props.loadingFunc();

        setTimeout(() => {
          if (this.props.reviews instanceof Array) {
            let reviewsArray = [];
            this.props.reviews.map((reviewItem, index) => {
              reviewsArray.push(
                <Review
                  LoadFunc={this.Load}
                  key={index}
                  Platform={reviewItem.Platform}
                  Msg={reviewItem.Msg}
                  Stars={reviewItem.Stars}
                />
              );
            });
            this.setState({
              userReviews: reviewsArray,
              buttonToggle: "Hide my current feedbacks",
              reviewsDisplay: "block"
            });
          }
          else {
            this.setState({
              reviewsDisplay: "none",
              buttonToggle: "Show my current feedbacks"
            });
          }
        }, 0);
      }, 0);
    }
  };

  render() {
    const { userReviews, buttonToggle, reviewsDisplay } = this.state;
    return (
      <React.Fragment>
        <button onClick={this.ConvertArrayToJSX}>{buttonToggle}</button>

        <div style={{ display: reviewsDisplay }} className="reviews--container">
          {userReviews}
        </div>
      </React.Fragment>
    );
  }
}
