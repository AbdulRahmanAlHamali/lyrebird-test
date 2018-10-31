export const FETCH_VOICES = 'SET_VOICES';
export const GENERATE_AVATAR = 'GENERATE_AVATAR';
export const FETCH_UTTERANCES = 'SET_UTTERANCES';

export class FETCH_STATUS {
    static NOT_STARTED = 'NOT_STARTED';
    static FETCHING = 'FETCHING';
    static SUCCEEDED = 'SUCCEEDED';
    static FAILED = 'FAILED';
}

export function fetchVoices() {
    return dispatch => {
        dispatch({type: FETCH_VOICES, entries: [], status: FETCH_STATUS.FETCHING});
        setTimeout(() => {
            dispatch({type: FETCH_VOICES, entries: [{name: 'voice1'}, {name: 'voice2'}], status: FETCH_STATUS.SUCCEEDED});
        }, 1000);
    }
}

export function fetchUtterances() {
    return dispatch => {
        dispatch({type: FETCH_UTTERANCES, entries: [], status: FETCH_STATUS.FETCHING});
        setTimeout(() => {
            dispatch({type: FETCH_UTTERANCES, entries: [{name: 'utterance1'}, {name: 'utterance2'}], status: FETCH_STATUS.SUCCEEDED});
        }, 1000);
    }
}

export function generateAvatar() {
    return {type: GENERATE_AVATAR};
}