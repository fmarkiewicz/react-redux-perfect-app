import { ADD_AUTHOR, DELETE_AUTHOR} from "../constants/action-types";

const initialState = {
    authors: []
};

function authorReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_AUTHOR: {
            return Object.assign({}, state, {
                authors: state.authors.concat(action.payload)
            })
        }

        case DELETE_AUTHOR: {
            return Object.assign({}, {
                authors: action.payload
            })
        }

        default: {
            return state;
        }
    }
}

export default authorReducer;