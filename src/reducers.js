//after the action, reducer reads actions and returns new state

import { CHANGE_SEARCH_FIELD } from './constants'

const initialState = {
  searchField: ''
}
//get an input of state and action, and if it cares about the action it recieves, it will act upon the state
export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload })
    //return {..state, searchField:action.payload}
    default:
      return state
  }
}