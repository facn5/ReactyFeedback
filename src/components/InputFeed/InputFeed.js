import React from "react";

export default class InputFeed extends React.Component {

userInput = (event) => {
  this.props.onChange(event.target.value);

}

  render() {
    return <textarea onChange={this.userInput} placeholder="Add feedback" />;
  }
}
