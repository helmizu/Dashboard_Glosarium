import { combineReducers } from 'redux'
import glosariumReducer from './glosariumReducer'

export default combineReducers({
    glosarium : glosariumReducer
})