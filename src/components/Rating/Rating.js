import React from "react";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import "./Rating.css";

export default class Rating extends React.Component {
  state = {
    compClass: ["", "", "", "", ""]
  };

  selectStar(value) {
    if (value == 1) {
      this.setState({
        compClass: ["", "", "", "", "selected"]
      });
    } else if (value == 2) {
      this.setState({
        compClass: ["", "", "", "selected", "selected"]
      });
    } else if (value == 3) {
      this.setState({
        compClass: ["", "", "selected", "selected", "selected"]
      });
    } else if (value == 4) {
      this.setState({
        compClass: ["", "selected", "selected", "selected", "selected"]
      });
    } else if (value == 5) {
      this.setState({
        compClass: ["selected", "selected", "selected", "selected", "selected"]
      });
    }
  }

  sendRatingValueToSubmit(value) {
    if (value == 1) this.props.onChange(1);
    else if (value == 2) this.props.onChange(2);
    else if (value == 3) this.props.onChange(3);
    else if (value == 4) this.props.onChange(4);
    else if (value == 5) this.props.onChange(5);
    else this.props.onChange(0);
  }

  render() {
    const { compClass } = this.state;

    return (
      <div className="stars">
        <div
          onClick={() => {
            this.selectStar(5);
            this.sendRatingValueToSubmit(5);
          }}
          className={compClass[0]}
        >
          <input type="radio" name="stars" value="1" />
        </div>
        <div
          onClick={() => {
            this.selectStar(4);
            this.sendRatingValueToSubmit(4);
          }}
          className={compClass[1]}
        >
          <input type="radio" name="stars" value="2" />
        </div>
        <div
          onClick={() => {
            this.selectStar(3);
            this.sendRatingValueToSubmit(3);
          }}
          className={compClass[2]}
        >
          <input type="radio" name="stars" value="3" />
        </div>
        <div
          onClick={() => {
            this.selectStar(2);
            this.sendRatingValueToSubmit(2);
          }}
          className={compClass[3]}
        >
          <input type="radio" name="stars" value="4" />
        </div>
        <div
          onClick={() => {
            this.selectStar(1);
            this.sendRatingValueToSubmit(1);
          }}
          className={compClass[4]}
        >
          <input type="radio" name="stars" value="5" />
        </div>
      </div>
    );
  }
}
