import React from "react";

export default class CateButton extends React.Component {
  buttonClick = () => {
    this.props.displayIconsAndGetChosenCat("grid", this.props.name);

    this.props.resetColorFunc(() => {
      this.props.resetColorFunc();
    });
  };

  render() {
    const { name, display } = this.props;

    return (
      <button style={{ background: display }} onClick={this.buttonClick}>
        {name}
      </button>
    );
  }
}
