import { combineReducers } from 'redux';
import {FETCH_STATUS, FETCH_UTTERANCES, FETCH_VOICES} from "./actions";

function voices(state = {status: FETCH_STATUS.NOT_STARTED, entries: []}, action) {
    switch (action.type) {
        case FETCH_VOICES:
            return {
                ...state,
                entries: state.entries.concat(action.entries),
                status: action.status
            };
        default:
            return state;
    }
}

function utterances(state = {status: FETCH_STATUS.NOT_STARTED, entries: []}, action) {
    switch (action.type) {
        case FETCH_UTTERANCES:
            return {
                ...state,
                entries: state.entries.concat(action.entries),
                status: action.status
            };
        default:
            return state;
    }
}

function avatar(state = {}, action) {
    return state;
}

const rootReducer = combineReducers({
    voices,
    utterances,
    avatar
});

export default rootReducer;