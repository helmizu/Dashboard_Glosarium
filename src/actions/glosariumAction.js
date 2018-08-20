import { GET_ALL_DATA, SET_LOADING, DATA_INSERTED, GET_DATA, DATA_DELETED, DATA_UPDATED, UPDATE_VALUE } from "../config/types"
import Axios from "axios"

export const getAllData = (search = "") => dispatch => { 
    dispatch(setLoading())
    Axios.get(`http://localhost:7000/glosarium/all?search=${search}`)
    .then(res => 
        dispatch({
            type: GET_ALL_DATA,
            payload: res.data
        })
    )
}

export const getData = (label) => dispatch => { 
    dispatch(setLoading())
    Axios.get(`http://localhost:7000/glosarium?label=${label}`)
    .then(res => 
        dispatch({
            type: GET_DATA,
            payload: res.data
        })
    )        
}

export const insertData = (data) => dispatch => {
    dispatch(setLoading())
    Axios.post(`http://localhost:7000/glosarium`, data)
    .then(res => 
        dispatch({
            type: DATA_INSERTED,
            payload : 'data inserted'
        })
    )
    .catch(err => 
        dispatch({
            type: DATA_INSERTED,
            payload: 'data not inserted'
        })
    )
}

export const deleteData = (label, id) => dispatch => {
    dispatch(setLoading())
    Axios.delete(`http://localhost:7000/glosarium?label=${label}&id=${id}`)
    .then( res => 
        dispatch({
            type : DATA_DELETED,
            payload : 'data deleted'
        })
    )
    .catch( err => 
        dispatch({
            type : DATA_DELETED,
            payload : 'delete error'
        })
    )
}

export const updateValue = (label, komponen) => dispatch => {
    Axios.get(`http://localhost:7000/glosarium?label=${label}&komponen=${komponen}`)
    .then(res => 
        dispatch({
            type: UPDATE_VALUE,
            payload : res.data[0]
        })
    )
    .catch(err => 
        dispatch({
            type: UPDATE_VALUE,
            payload: 'data not found'
        })
    )
}

export const updateData = (id, data) => dispatch => {
    dispatch(setLoading())
    Axios.put(`http://localhost:7000/glosarium?id=${id}`, data)
    .then(res => 
        dispatch({
            type : DATA_UPDATED,
            payload : 'data updated'
        })
    )
    .catch(err => 
        dispatch({
            type: DATA_UPDATED,
            payload : 'update error'
        })
    )
}

export const setLoading = () => ({
    type: SET_LOADING
})