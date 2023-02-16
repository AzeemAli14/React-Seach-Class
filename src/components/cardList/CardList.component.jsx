import React, { Component } from "react";
import './cardList.style.css'
import Card from "../card/Card.component";

class CardList extends Component {
  // console.log("Props: ", props)
  render() {
    console.log("Render in Component");

    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return (
            <Card monster={monster} />
          );
        })}
      </div>
    );
  }
}

export default CardList;