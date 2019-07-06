import React, { Component } from 'react';
import { connect } from 'react-redux'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header'
import './App.css';

import { setSearchField, requestRobots } from '../actions'
//tell me what piece of state i need to listen to and send it down as props
const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}
//dispatch is what sends action to reducer
//tell me what props that are actions that i need to listen to that are actions that need to get dispatched
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    //request robots action, requestRobots action needs a dispatch method to actually dispatch these actions. 
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots()
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ? (
      <h1>Loading</h1>
    ) : (
        <div className='tc'>
          <Header />
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
