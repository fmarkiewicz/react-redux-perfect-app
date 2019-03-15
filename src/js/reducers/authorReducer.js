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
            const index = state.authors.findIndex( author => author.name === action.payload.name);

            const authors = [
                ...state.authors.slice(0, index),
                ...state.authors.slice(index + 1)
            ];

            return Object.assign({}, state, {
                authors: authors
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