import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import articleReducer from "../reducers/articleReducer";
import authorReducer from "../reducers/authorReducer";
import { forbiddenWordsMiddleware } from "../middleware/forbiddenWordsMiddleware";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    articles: articleReducer,
    authors: authorReducer
});

const store = createStore(
    rootReducer,
    // applyMiddleware(forbiddenWordsMiddleware),
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware))
);

export default store;