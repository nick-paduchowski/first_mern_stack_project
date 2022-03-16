import * as api from '../api'
import { AUTH } from '../constants/actionTypes';

export const signin = (formData, navigate) => async (dispatch) => {
    try{
        //sign user in
        navigate("/")
    } catch(error){
        console.log(error)
    }
}

export const signup = (formData, navigate) => async (dispatch) => {
    try{
        //sign user up
        navigate("/")
    } catch(error){
        console.log(error)
    }
}