import React, { Component } from 'react';
import { connect } from 'react-redux'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField } from '../actions'
//tell me what piece of state i need to listen to and send it down as props
const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}
//dispatch is what sends action to reducer
//tell me what props that are actions that i need to listen to that are actions that need to get dispatched
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({ robots: users });
      });
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}
//connect is a higher order function, function that returns another function. connect runs and whatever connect does inside the function it returns another function.
//connect accepts two parameters
//connected app component, subscribe to any state changes in the redux store. App knows there is a redux store somewhere and may be intersted in changes, now we tell it what action/dispatch it should listen to
export default connect(mapStateToProps, mapDispatchToProps)(App);
