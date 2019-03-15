import { ADD_ARTICLE, ADD_AUTHOR, DELETE_AUTHOR } from "../constants/action-types";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
}

export function addAuthor(payload) {
    return { type: ADD_AUTHOR, payload }
}

export function deleteAuthor(payload) {
    return { type: DELETE_AUTHOR, payload }
}