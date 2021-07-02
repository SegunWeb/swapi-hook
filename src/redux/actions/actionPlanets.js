import {GET_PLANETS} from "../types";

export const planetSuccess = (planets) => {
    return {
        type: GET_PLANETS,
        payload: planets
    }
};