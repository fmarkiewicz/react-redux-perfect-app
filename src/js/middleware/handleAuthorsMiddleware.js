import { DELETE_AUTHOR, AUTHOR_NOT_FOUND} from "../constants/action-types";


export function handleAuthorsMiddleware({getState, dispatch}) {
    return function(next) {
        return function(action) {
            if (action.type === DELETE_AUTHOR) {
                //function that can be put in helpers, exported is easier to test
                const oldAuthors = getState().authors.authors;

                const index = oldAuthors.findIndex( author => author.name === action.payload.name);

                if (index === -1) {
                    return dispatch({type: AUTHOR_NOT_FOUND, payload: {author_deletion_failure: true}});
                } else {
                    const authors = [
                        ...oldAuthors.slice(0, index),
                        ...oldAuthors.slice(index + 1)
                    ];

                    return next({type: DELETE_AUTHOR, payload: authors})
                }

            }

            return next(action);
        }
    }
}