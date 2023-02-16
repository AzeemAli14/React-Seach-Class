import PropTypes from 'prop-types'
import React, { Component } from 'react'

class CardList extends Component {

  // console.log("Props: ", props)
  render() {

    console.log("Render in Component");

    const {monsters} = this.props;
    return (
      <>
      {monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </>
    )
  }
}

export default CardList;