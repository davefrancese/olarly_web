import {combineReducers} from 'redux'
import usersReducer from './usersReducer'
import sidebar from "./sidebarReducers"
import layout from "./layoutReducer";

const appReducer = combineReducers({
  user: usersReducer,
  sidebar,
  layout
})

export default appReducer;
