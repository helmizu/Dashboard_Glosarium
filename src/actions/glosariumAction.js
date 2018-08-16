import { GET_ALL_DATA, SET_LOADING, DATA_INSERTED, GET_DATA } from "../config/types";
import Axios from "axios";

export const getAllData = (search = "") => dispatch => { 
    dispatch(setLoading())
    Axios.get(`http://localhost:7000/glosarium/all?search=${search}`).then(res => 
        dispatch({
            type: GET_ALL_DATA,
            payload: res.data
        })
    )        
}

export const getData = (label) => dispatch => { 
    dispatch(setLoading())
    Axios.get(`http://localhost:7000/glosarium?label=${label}`).then(res => 
        dispatch({
            type: GET_DATA,
            payload: res.data
        })
    )        
}

export const insertData = (data) => dispatch => {
    dispatch(setLoading())
    Axios.post(`http://localhost:7000/glosarium`, data).then(res => 
        dispatch({
            type: DATA_INSERTED,
            payload : 'data inserted'
        })
    ).catch(err => {
        dispatch({
            type: DATA_INSERTED,
            payload: 'data not inserted'
        })
    })    
}

export const setLoading = () => ({
    type: SET_LOADING
})