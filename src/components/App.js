import React from "react";
import Header from "./Header/Header";
import CateButtons from "./CateButtons/CateButtons";
import InputFeed from "./InputFeed/InputFeed";
import Rating from "./Rating/Rating";
import Icons from "./Icons/Icons";
// import Data from "./Data/data";
import "./App.css";

export default class App extends React.Component {

  state = {
    chosenCat: "",
    toggle: "none",
    iconData: [
      {
        name: "Social Media",
        desc:
          "Social media are interactive computer-mediated technologies that facilitate the creation and sharing of information, ideas, career interests and other forms of expression via virtual communities and networks."
      },
      {
        name: "Search Engines",
        desc:
          "A web search engine or Internet search engine is a software system that is designed to carry out web search (Internet search), which means to search the World Wide Web in a systematic way for particular information specified in a web search query."
      },
      {
        name: "News",
        desc:
          "News is information about current events. This may be provided through many different media: word of mouth, printing, postal systems, broadcasting, electronic communication, or through the testimony of observers and witnesses to events."
      }
    ]
  };

  setToggleState(display, chosenCategory) {
    this.setState({ toggle: display, chosenCat: chosenCategory });
  }

  render() {
    const { iconData, toggle, chosenCat } = this.state;

    return (
      <React.Fragment>
        <Header />


        <CateButtons chosenCategory={chosenCat} displayIconsAndGetChosenCat={this.setToggleState.bind(this)} />

        <InputFeed />
        <Rating />
        <Icons display={toggle} />
      </React.Fragment>
    );
  }
}
