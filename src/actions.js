//constants used to try and minimize textual errors

import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants'

//action will take user input "text" and return an object with type 'CHANGE_SEARCH_FIELD' and send payload to go on to the reducer

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})
//dispatch is something from mapDispatchToProps from redux, to dispatch the actions to the reducer
//any time the requestRobots action gets triggered, it will return a function and trigger redux-thunk
//redux thunk will notice its a function, give it dispatch and so you can call actions, then it will call actions like this
//actions being triggered, going through middleware, if action returns a function, first dispatch pending to reducer, let you know when im done with promise and let you know if i got any robots, then it will dispatch the success or fail and go through reducer and update the changes
export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING })
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}