import logo from "./logo.svg";
import "./App.css";
import React from "react";
import CardList from "./components/cardList/CardList.component";
import SearchBox from "./components/searchBox/SearchBox.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("constructor");
  }

  onSearch = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    // const filteredMonster = this.state.monsters.filter((monster) => {
    //   return monster.name.toLocaleLowerCase().includes(searchField)
    // })

    this.setState(() => {
      return { searchField: searchString };
    });
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
    const { monsters, searchField } = this.state;
    const { onSearch } = this;
    console.log("render");
    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">

        <SearchBox onSearchHandler={onSearch} placeholder="Search" className="search-class"/>
        <CardList monsters={filteredMonster} />

      </div>
    );
  }
}

export default App;
