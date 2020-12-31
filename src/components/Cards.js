import React from "react";
import "./styles/Cards.css";
import CardItem from "./CardItem";
import Smiley from "../assets/images/smiley.jpg";
import CraveusStart from "../assets/images/craveus_start.png";
import ForumWebsite from "../assets/images/post_comment6.0.png";

function Cards() {
  return (
    <div className="cards">
      <h1>Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={Smiley}
              text="don't worry"
              label="no worries"
              path="/projects"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={CraveusStart}
              text="Craveus"
              label="A Yelp-Clone"
              path="/projects"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={ForumWebsite}
              text="Forum Website"
              label="Full-Stack Development"
              path="/projects"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Smiley}
              text=":-DDDD"
              label="the smile that smiles back"
              path="/projects"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;