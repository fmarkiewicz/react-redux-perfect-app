import { ADD_AUTHOR, DELETE_AUTHOR, AUTHOR_NOT_FOUND } from "../constants/action-types";

const initialState = {
    authors: [],
    author_deletion_failure: false
};

function authorReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_AUTHOR: {
            return Object.assign({}, state, {
                authors: state.authors.concat(action.payload)
            })
        }

        case DELETE_AUTHOR: {
            return Object.assign({}, state, {
                authors: action.payload
            })
        }

        case AUTHOR_NOT_FOUND: {
            return Object.assign({}, state, {
                author_deletion_failure: action.payload.author_deletion_failure
            })
        }

        default: {
            return state;
        }
    }
}

export default authorReducer;