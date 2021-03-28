import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundray from "../components/ErroreBoundary";
import { setSearchField } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
    };
    //console.log('constructor')
  }
  componentDidMount() {
    console.log(this.props);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  render() {
    // console.log('render')
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filterdRobots = robots.filter((robot) => {
      return robot.name
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });
    return !robots.length ? (
      <h1 className="tc f1">loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Robo Friends</h1>
        <SearchBox searchChange={onSearchChange} />
        <ErrorBoundray>
          <Scroll>
            <CardList robots={filterdRobots} />
          </Scroll>
        </ErrorBoundray>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
