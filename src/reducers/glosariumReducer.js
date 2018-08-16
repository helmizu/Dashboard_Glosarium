import { GET_DATA, SET_LOADING, DATA_INSERTED } from "../config/types";

const initialState = {
    data : [],
    report : '',
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
        case DATA_INSERTED:
        return { 
            ...state,
            report : action.payload,
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
