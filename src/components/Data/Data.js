import React from "react";
import './Data.css'

export default class Data extends React.Component {
  render() {
    const { categoryData, chosenCat } = this.props;
    let currentCategory = "";
    if( chosenCat == "Social Medias") currentCategory = "SocialMedia";
    else if( chosenCat == "News") currentCategory = "News";
    else if( chosenCat == "Search Engines") currentCategory = "SearchEngines"
    else currentCategory = "Static";

    return (
      <div className="data--container">
       <h3>{categoryData[currentCategory].name}</h3>
       <p>{categoryData[currentCategory].desc}</p>
      </div>
    );
  }
}
