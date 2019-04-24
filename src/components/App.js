import React from "react";
import Header from "./Header/Header";
import CateButtons from "./CateButtons/CateButtons"
import InputFeed from "./InputFeed/InputFeed"
import Rating from "./Rating/Rating"
import Icon from "./Icon/Icon"

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment >

      <Header />
      <CateButtons />
      <InputFeed />
      <Rating />
      <Icon />
      </ React.Fragment>
    );
  }
}
