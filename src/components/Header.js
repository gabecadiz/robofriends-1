import React, { Component } from 'react';
import CounterButton from './CounterButton'

class Header extends Component {
  //if returns true, then it will update component, returns false, it wont update component
  // shouldComponentUpdate(nextProps, nextState) {
  //   return false
  // }
  render() {
    console.log('Header');
    return (
      <div>
        <h1 className='f1'>RoboFriends</h1>
        <CounterButton color={'red'} />
      </div>
    )
  }
}

export default Header;