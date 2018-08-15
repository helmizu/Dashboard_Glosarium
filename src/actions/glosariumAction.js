import { GET_ALL_DATA, SET_LOADING } from "../config/types";
import Axios from "axios";

export const getAllData = () => dispatch => { 
    dispatch(setLoading())
    Axios.get(`http://localhost:7000/glosarium/all`).then(res => 
        dispatch({
            type: GET_ALL_DATA,
            payload: res.data
        })
    )        
}

export const setLoading = () => ({
    type: SET_LOADING
})