import { ADD_AUTHOR, DELETE_AUTHOR} from "../constants/action-types";


export function handleAuthorsMiddleware({getState, dispatch}) {
    return function(next) {
        return function(action) {
            if (action.type === DELETE_AUTHOR) {
                debugger
                const newState = getState;
            }

            return next(action);
        }
    }
}