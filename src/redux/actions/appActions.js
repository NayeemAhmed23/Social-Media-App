import { FETCH_API_STARTED, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "./actionTypes";



export const fetchApiStarted = () => {
    return {
        type: FETCH_API_STARTED
    }
}

export const fetchDataSuccess = (data) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    }
}

export const fetchDataFailure = (error) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error
    }
}

export function fetchRequest(){
    return (dispatch)=>{ // dispatch is given by thunk
        dispatch(fetchApiStarted());
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then(data => dispatch(fetchDataSuccess(data)))
        .catch(err => dispatch(fetchDataFailure(err.message)))
    }
}