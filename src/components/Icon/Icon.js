import React from "react";
import './Icon.css'

export default class Icon extends React.Component {
  render() {
    const { imgSrc } = this.props;
    return (
      <div className="icon">
      <img src={imgSrc} />
      </div>
  );
  }
}
