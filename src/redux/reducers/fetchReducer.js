import {FETCH_API_STARTED,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE} from '../actions/actionTypes';


const initialState = {
    loading: false,
    data: [], 
    error: ""
}

const fetchReducer = (state = initialState, action) => {
     switch(action.type) {
         case FETCH_API_STARTED: return {...state, loading: true};

         case FETCH_DATA_SUCCESS: return(
            {...state, data: action.payload, loading: false, error: ""});

        case FETCH_DATA_FAILURE: return(
                {...state, data: [], loading: false, error: action.payload});

        default: return state;
     }
}

export default fetchReducer;