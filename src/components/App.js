import React from "react";
import Header from "./Header/Header";
import CateButtons from "./CateButtons/CateButtons";
import FeedbackForm from "./FeedbackForm/FeedbackForm";
import Icons from "./Icons/Icons";
import Data from "./Data/Data";
import "./App.css";
import Reviews from "./Reviews/Reviews"

export default class App extends React.Component {
  state = {
    chosenCat: "",
    chosenPlatform: "",
    formDisplay: "none",
    toggle: "none",
    categoryData: {
      SocialMedia: {
        name: "Social Media",
        desc:
          "Social media are interactive computer-mediated technologies that facilitate the creation and sharing of information, ideas, career interests and other forms of expression via virtual communities and networks.",
        icons: [
          {
            name: "Facebook",
            url:
              "https://www.petconnectrescue.org/wp-content/uploads/2016/10/FB-icon.png"
          },
          {
            name: "Instagram",
            url:
              "https://cdn.prdaily.com/wp-content/uploads/2019/01/Instagram_LendEDU_Survey.jpg"
          },
          {
            name: "Tumblr",
            url: "http://clipart-library.com/img/697347.png"
          },
          {
            name: "Twitter",
            url:
              "https://abilitynet.org.uk/sites/abilitynet.org.uk/files/admin/alltwitter-twitter-bird-logo-white-on-blue.png"
          }
        ]
      },
      SearchEngines: {
        name: "Search Engines",
        desc:
          "A web search engine or Internet search engine is a software system that is designed to carry out web search (Internet search), which means to search the World Wide Web in a systematic way for particular information specified in a web search query.",
        icons: [
          {
            name: "Google",
            url:
              "https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
          },
          {
            name: "Bing",
            url:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Bing_logo.svg/1280px-Bing_logo.svg.png"
          },
          {
            name: "DuckDuckGo",
            url:
              "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/DuckDuckGo_logo.svg/1200px-DuckDuckGo_logo.svg.png"
          },
          {
            name: "Wiki",
            url: "http://wiki.com/wikilogo.jpg"
          }
        ]
      },
      News: {
        name: "News",
        desc:
          "News is information about current events. This may be provided through many different media: word of mouth, printing, postal systems, broadcasting, electronic communication, or through the testimony of observers and witnesses to events.",
        icons: [
          {
            name: "Panet",
            url:
              "https://minerva.co.il/wp-content/uploads/2017/12/F150204MA9211-1024x694.jpg"
          },
          {
            name: "BBC",
            url:
              "https://www.bbc.co.uk/news/special/2015/newsspec_10857/bbc_news_logo.png?cb=1"
          },
          {
            name: "CNN",
            url:
              "https://www.logodesignlove.com/wp-content/uploads/2010/06/cnn-logo-white-on-red.jpg"
          },
          {
            name: "Al-Manar",
            url:
              "https://www.livenewsmag.com/wp-content/uploads/2017/01/Al-Manar-TV.jpg"
          }
        ]
      },
      Static: {
        name: "Who are we?",
        desc:
          "We are a few people of programmers who wanted to know how people feel about the big platforms, and hear from them their reviews and feebacks."
      }
    }
  };

  setToggleState(display, chosenCategory) {
    this.setState({ toggle: display, chosenCat: chosenCategory });
  }

  setFormToggleState(display, chosenPlat) {
    this.setState({ formDisplay: display, chosenPlatform:chosenPlat });
  }



  render() {
    const { categoryData, toggle, chosenCat, formDisplay, chosenPlatform } = this.state;

    return (
      <React.Fragment>
        <Header />
        <Data categoryData={categoryData} chosenCat={chosenCat} />

        <CateButtons
          chosenCategory={chosenCat}
          displayIconsAndGetChosenCat={this.setToggleState.bind(this)}
        />

      <FeedbackForm displayFeedbackForm={this.setFormToggleState.bind(this)} chosenPlatform={chosenPlatform} formDisplay={formDisplay} />
        <Icons
          chosenCat={chosenCat}
          categoryData={categoryData}
          displayFeedbackForm={this.setFormToggleState.bind(this)}
          display={toggle}
        />
          <Reviews />
      </React.Fragment>
    );
  }
}
