import React from "react";
import "./styles/Cards.css";
import CardItem from "./CardItem";
import AffirmativeAction from "../assets/images/affirmative-action.png";
import CraveusStart from "../assets/images/craveus_start_card.png";
import ForumWebsite from "../assets/images/post_comment6.0_card.png";
import Logo from "../assets/images/aiping_logo_black.png";
import SCFC from "../assets/images/scfc.png";
import LinkedIn from "../assets/images/linkedin.png";

function Cards() {
  return (
    <div className="cards">
       <h1>Experience</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={LinkedIn}
              text="UI Engineer Intern"
              label="Linkedin"
              // path="/"
            />
            <CardItem
              src={SCFC}
              text="Front-End Development Intern"
              label="Santa Cruz Free Clinic"
              // path="/"
            />
          </ul>
        </div>
      </div>

      <h1>Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={AffirmativeAction}
              text="Affirmative Action"
              label="Data Mining/Analysis"
              // path="/projects"
            />
            <CardItem
              src={CraveusStart}
              text="Craveus"
              label="A Yelp-Clone"
              // path="/projects"
            />
            <CardItem
              src={ForumWebsite}
              text="Forum Website"
              label="Full-Stack Development"
              // path="/projects"
            />
            <CardItem
              src={Logo}
              text="Personal Portfolio"
              label="React Website"
              // path="/projects"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;