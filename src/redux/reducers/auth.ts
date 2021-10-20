import { LOGOUT,AUTH } from '../actionTypes';

const func = (state= { authData: null }, action: { type: any; data: any; }) => {

    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({...action?.data}) )
            console.log("here");
            console.log(action.data)
            return {...state, authData: action?.data };
        case LOGOUT:
            localStorage.clear();
            return {...state, authData: null };
        default:
            return state;
    }
};

export default func