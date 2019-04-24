import React from "react";
import Icon from "../Icon/Icon";

export default class Icons extends React.Component {
  render() {
    const { display, categoryData, chosenCat } = this.props;

    let currentCategory = "";
    if (chosenCat == "Social Medias") currentCategory = "SocialMedia";
    else if (chosenCat == "News") currentCategory = "News";
    else if (chosenCat == "Search Engines") currentCategory = "SearchEngines";
    else currentCategory = "Static";

    let iconsArray = [];

    if (categoryData[currentCategory])
      iconsArray = categoryData[currentCategory].icons;
    

    return (
      <div className="icons--container" style={{ display: display }}>
        {
          iconsArray != undefined && (
          <>
            <Icon imgSrc={iconsArray[0]} />
            <Icon imgSrc={iconsArray[1]} />
            <Icon imgSrc={iconsArray[2]} />
            <Icon imgSrc={iconsArray[3]} />
          </>
        )}
      </div>
    );
  }
}
