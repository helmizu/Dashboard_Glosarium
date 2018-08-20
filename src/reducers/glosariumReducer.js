import { GET_DATA, SET_LOADING, DATA_INSERTED, GET_ALL_DATA, DATA_DELETED, DATA_UPDATED, UPDATE_VALUE, GET_COLLECTION } from "../config/types";

const initialState = {
    data : [],
    report : '',
    loading : false,
    label : [],
    value : {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DATA:
        return {
            ...state,
            data : action.payload,
            loading : false,
            report : ''
        }
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
        case DATA_DELETED:
        return {
            ...state,
            report : action.payload,
            loading : false
        }
        case DATA_UPDATED: 
        return {
            ...state,
            report : action.payload,
            loading : false
        }
        case UPDATE_VALUE:
        return {
            ...state,
            value : action.payload
        }
        case GET_COLLECTION:
        return {
            ...state,
            label : action.payload
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
