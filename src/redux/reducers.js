import { combineReducers } from 'redux';
import {SET_UTTERANCES, SET_VOICES} from "./actions";

function voices(state = [], action) {
    switch (action.type) {
        case SET_VOICES:
            return action.voices;
        default:
            return state;
    }
}

function utterances(state = [], action) {
    switch (action.type) {
        case SET_UTTERANCES:
            return action.utterances;
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