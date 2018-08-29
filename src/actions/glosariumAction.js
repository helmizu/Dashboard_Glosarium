import { SET_USER, GET_ALL_DATA, SET_LOADING, DATA_INSERTED, GET_DATA, DATA_DELETED, DATA_UPDATED, UPDATE_VALUE, GET_COLLECTION } from "../config/types"
import Axios from "axios"

const base_url = 'https://beta.arkademy.com/api/glosarium'

export const getAllData = (search = "") => dispatch => { 
    dispatch(setLoading())
    Axios.get(`${base_url}/glosarium/all?search=${search}`)
    .then(res => 
        dispatch({
            type: GET_ALL_DATA,
            payload: res.data
        })
    )
}

export const getData = (label) => dispatch => { 
    dispatch(setLoading())
    Axios.get(`${base_url}/glosarium?label=${label}`)
    .then(res => 
        dispatch({
            type: GET_DATA,
            payload: res.data
        })
    )        
}

export const insertData = (data) => dispatch => {
    dispatch(setLoading())
    Axios.post(`${base_url}/glosarium`, data)
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
    Axios.delete(`${base_url}/glosarium?label=${label}&id=${id}`)
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
    Axios.get(`${base_url}/glosarium?label=${label}&komponen=${komponen}`)
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
    Axios.put(`${base_url}/glosarium?id=${id}`, data)
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

export const getCollection = () => dispatch => {
    Axios.get(`${base_url}/glosarium/collection`)
    .then(res => 
        dispatch({
            type : GET_COLLECTION,
            payload : res.data
        })
    )
}

export const userLogin = (data) => dispatch => {
    dispatch(setLoading())
    Axios.post(`${base_url}/user`, data)
    .then(res => {
        if(res.status === 200) {
            dispatch({
                type: SET_USER,
                payload : true
            })
            localStorage.setItem('user', JSON.stringify(res.data))
        } else {
            dispatch({
                type: SET_USER,
                payload: false
            })
        }
    })
    .catch(err => 
        dispatch({
            type: SET_USER,
            payload: false
        })
    )
}

export const userLogout = () => dispatch => {
    dispatch({
        type : SET_USER,
        user : false
    })
    localStorage.clear()
}

export const setLoading = () => ({
    type: SET_LOADING
})