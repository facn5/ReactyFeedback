import React from "react";
import './Icon.css'

export default class Icon extends React.Component {

  handleImageClick = () => {
    this.props.displayFeedbackForm('block', this.props.name)
  }

  render() {
    const { imgSrc } = this.props;
    return (
      <div className="icon">
      <img onClick={this.handleImageClick} src={imgSrc} />
      </div>
  );
  }
}
