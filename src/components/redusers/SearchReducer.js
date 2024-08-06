import { CHANGE_SEARCH_FIELD } from "../actions/actions";

const initialState = {
    query: '',
};


export default function SearchReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD: {
            const { name, value } = action.payload;
            return { ...state, [name]: value };
        }
        default:
            return state;
    }
}