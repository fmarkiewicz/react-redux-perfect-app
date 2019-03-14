import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types";

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({dispatch}) {
    return function (next) {
        return function (action) {
            //here comes the magic/logic
            if (action.type === ADD_ARTICLE) {
                const foundWord = forbiddenWords.filter(word =>
                    action.payload.title.includes(word)
                );

                if (foundWord.length) {
                  return dispatch({ type: FOUND_BAD_WORD });
                }
            }

            return next(action);
        }
    }
}