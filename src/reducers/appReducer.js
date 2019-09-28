import {combineReducers} from 'redux'
import usersReducer from './usersReducer'


const appReducer = combineReducers({
  user: usersReducer
})

export default appReducer;
