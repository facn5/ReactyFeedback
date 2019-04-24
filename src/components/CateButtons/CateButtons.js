import React from "react";
import CateButton from "../CateButton/CateButton";
import './CateButtons.css'

export default class CateButtons extends React.Component {
  state = {
    socialMediaBg: "white",
    newsBg: "white",
    searchEngineBg: "white"
  };

  resetOtherButtonsBgColor = () => {
    if (this.props.chosenCategory) {
      if (this.props.chosenCategory == "Social Medias") {
        this.setState({
          newsBg: "white",
          searchEngineBg: "white",
          socialMediaBg: "green"
        });
      } else if (this.props.chosenCategory == "News") {
        this.setState({
          socialMediaBg: "white",
          searchEngineBg: "white",
          newsBg: "green"
        });
      } else if (this.props.chosenCategory == "Search Engines") {
        this.setState({
          socialMediaBg: "white",
          newsBg: "white",
          searchEngineBg: "green"
        });
      } else {
        this.setState({
          searchEngineBg: "white",
          socialMediaBg: "white",
          newsBg: "white"
        });
      }
    }
  };

  render() {
    const { displayIconsAndGetChosenCat, chosenCategory } = this.props;
    const { socialMediaBg, newsBg, searchEngineBg } = this.state;
    return (
      <div className="categories-buttons--container">
        <CateButton resetColorFunc={this.resetOtherButtonsBgColor} display={socialMediaBg} displayIconsAndGetChosenCat={displayIconsAndGetChosenCat} name="Social Medias" />
        <CateButton resetColorFunc={this.resetOtherButtonsBgColor} display={newsBg} displayIconsAndGetChosenCat={displayIconsAndGetChosenCat} name="News" />
        <CateButton resetColorFunc={this.resetOtherButtonsBgColor} display={searchEngineBg} displayIconsAndGetChosenCat={displayIconsAndGetChosenCat} name="Search Engines" />
      </div>
    );
  }
}
