import { combineReducers } from 'redux';
import {FETCH_STATUS, FETCH_VOICES} from "./actions";

function voices(state = {status: FETCH_STATUS.NOT_STARTED, voices: []}, action) {
    switch (action.type) {
        case FETCH_VOICES:
            return {
                ...state,
                voices: action.voices,
                status: action.status
            };
        default:
            return state;
    }
}

function utterances(state = {status: FETCH_STATUS.NOT_STARTED, voices: []}, action) {
    switch (action.type) {
        case FETCH_VOICES:
            return {
                ...state,
                utterances: action.utterances,
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