import { combineReducers } from 'redux'
import glosariumReducer from './glosariumReducer'
import navReducer from './navReducer'

export default combineReducers({
    glosarium : glosariumReducer,
    nav : navReducer
})