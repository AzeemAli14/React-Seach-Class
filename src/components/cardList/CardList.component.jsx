import React, { Component } from "react";
import './cardList.style.css'

class CardList extends Component {
  // console.log("Props: ", props)
  render() {
    console.log("Render in Component");

    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, email, id } = monster
          return (
            <div className="card-container" key={id}>
              <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
              />
              <h3>{name}</h3>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;