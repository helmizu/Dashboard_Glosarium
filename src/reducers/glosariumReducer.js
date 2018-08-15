import { GET_DATA, SET_LOADING } from "../config/types";

const initialState = {
    data : [],
    loading : false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
        return { 
            ...state,
            data : action.payload,
            loading : false
        }
        case SET_LOADING: 
        return {
            ...state,
            loading : true
        }
        default:
        return state
    }
}
