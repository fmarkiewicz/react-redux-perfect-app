import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types";

const initialState = {
    articles: [],
    current_article_error: false
};

function articleReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ARTICLE: {
            return Object.assign({}, state, {
                articles: state.articles.concat(action.payload)
            });

        }

        case FOUND_BAD_WORD: {
            return Object.assign({}, state, {
                current_article_error: true
            });
        }

        default: {
            return state;
        }
    }
}

export default articleReducer;