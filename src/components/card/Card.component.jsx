import React, { Component } from 'react'
import './Card.style.css'

export class Card extends Component {
  render() {
    const { name, email, id } = this.props.monster
    return (
        <div className="card-container" key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    )
  }
}

export default Card;