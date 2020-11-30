import React from "react";
import "./styles/Cards.css";
import CardItem from "./CardItem";
import Smiley from "../assets/images/smiley.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>looky looky probably links to projects</h1>
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
              src={Smiley}
              text="be happy"
              label="happiness"
              path="/projects"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Smiley}
              text=":-D"
              label="the smile"
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