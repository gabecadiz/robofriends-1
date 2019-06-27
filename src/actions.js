//constants used to try and minimize textual errors

import { CHANGE_SEARCH_FIELD } from './constants'

//action will take user input "text" and return an object with type 'CHANGE_SEARCH_FIELD' and send payload to go on to the reducer

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})