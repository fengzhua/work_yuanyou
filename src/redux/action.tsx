import {UPDATE_HEAD, UPDATE_SIDE} from "./actionTypes";


export const headClick = (id) => {
    return {
        type: UPDATE_HEAD,
        payload: id
    }

}

export const sideClick = function (id) {
    return {
        type: UPDATE_SIDE,
        payload: id
    }
}

