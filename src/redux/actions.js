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
        dispatch({type: FETCH_VOICES, voices: [], status: FETCH_STATUS.FETCHING});
        setTimeout(() => {
            dispatch(FETCH_VOICES, [{name: 'voice1'}, {name: 'voice2'}], FETCH_STATUS.SUCCEEDED);
        }, 1000);
    }
}

export function fetchUtterances(utterances, status) {
    return dispatch => {
        dispatch({type: FETCH_UTTERANCES, utterances: [], status: FETCH_STATUS.FETCHING});
        setTimeout(() => {
            dispatch(FETCH_UTTERANCES, [{name: 'utterance1'}, {name: 'utterance2'}], FETCH_STATUS.SUCCEEDED);
        }, 1000);
    }
}

export function generateAvatar() {
    return {type: GENERATE_AVATAR};
}

