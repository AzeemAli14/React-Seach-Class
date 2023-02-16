import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("constructor");
  };

  componentDidMount() {
    console.log("componentDidMount");
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    console.log("render");
    const filteredMonster = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField)
    })

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search"
          onChange={(event) => {
            const searchString = event.target.value.toLocaleLowerCase();
            // const filteredMonster = this.state.monsters.filter((monster) => {
            //   return monster.name.toLocaleLowerCase().includes(searchField)
            // })

            this.setState(() => {
              return {searchField: searchString};
            });
          }}
        />
        {filteredMonster.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}


export default App;
