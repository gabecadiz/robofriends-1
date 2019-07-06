import React, { Component } from 'react';

class CounterButton extends Component {
  //if returns true, then it will update component, returns false, it wont update component
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  //allows for re-render only if count state gets updated
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false
  }
  increaseCount = () => {
    this.setState(state => {
      return { count: state.count + 1 }
    })
  }
  render() {
    console.log('Counter');
    return (
      <button color={this.props.color} onClick={this.increaseCount}>
        Count: {this.state.count}
      </button>

    )
  }
}

export default CounterButton;