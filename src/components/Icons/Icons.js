import React from "react";
import Icon from "../Icon/Icon";

export default class Icons extends React.Component {


  render() {
    const { display, categoryData, chosenCat, displayFeedbackForm } = this.props;

    let iconsArray = [];
    let name = "";

    let currentCategory = "";
    if (chosenCat == "Social Medias") currentCategory = "SocialMedia";
    else if (chosenCat == "News") currentCategory = "News";
    else if (chosenCat == "Search Engines") currentCategory = "SearchEngines";
    else currentCategory = "Static";


    if (categoryData[currentCategory])
      iconsArray = categoryData[currentCategory].icons;



    return (
      <div className="icons--container" style={{ display: display }}>
        {
          iconsArray != undefined &&
        (
          <>
            <Icon displayFeedbackForm={displayFeedbackForm} name={iconsArray[0].name} imgSrc={iconsArray[0].url} />
            <Icon displayFeedbackForm={displayFeedbackForm} name={iconsArray[1].name} imgSrc={iconsArray[1].url} />
            <Icon displayFeedbackForm={displayFeedbackForm} name={iconsArray[2].name} imgSrc={iconsArray[2].url} />
            <Icon displayFeedbackForm={displayFeedbackForm} name={iconsArray[3].name} imgSrc={iconsArray[3].url} />
          </>
        )
      }
      </div>
    );
  }
}
