import {LOAD_DATA_SUCCESS} from "./actions";

const initialState = {
    prices: []
};

export default function reduxSagaReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_DATA_SUCCESS: {
            return {
                ...state,
                prices: action.data
            }
        }
        default: {
            return state;
        }
    }
}
