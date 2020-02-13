import {UPDATE_HEAD, UPDATE_SIDE} from "../actionTypes";

const initialState = {
    headSelect: 'Health',
    sideSelect: 'Demand'
}

interface IActionType {payload:any, type:string}

const rootReducer = function (state=initialState, action:IActionType) {
    // console.log(action.type, state)
    switch (action.type) {
        case UPDATE_HEAD: {
            return {
                ...state,
                headSelect: action.payload
            }
        }
        case UPDATE_SIDE: {
            return {
                ...state,
                sideSelect: action.payload
            }
        }
        default: {
            return state;
        }
    }
};

export default rootReducer;