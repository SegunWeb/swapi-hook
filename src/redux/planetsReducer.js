import {GET_PLANETS} from "./types";

const initialState = {
    planets: [],
    load: true
};

export default function planetsReducer(state = initialState, action) {
    switch(action.type) {
        case GET_PLANETS:
            return {
                ...state,
                planets: action.payload
            };
        default:
            return state
    }
}

