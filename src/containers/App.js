import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundray from "../components/ErroreBoundary";
import { setSearchField, requestRobots } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    isPending: state.requestRobots.isPending,
    robots: state.requestRobots.robots,
    error: state.requestRobots.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestChange: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  componentDidMount() {
   this.props.onRequestChange();
  }

  render() {
    // console.log('render')
    const { searchField, onSearchChange , robots } = this.props;
    const filterdRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
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
