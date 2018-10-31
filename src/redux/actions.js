export const SET_VOICES = 'SET_VOICES';
export const GENERATE_AVATAR = 'GENERATE_AVATAR';
export const SET_UTTERANCES = 'SET_UTTERANCES';

export function setVoices(voices) {
    return {type: SET_VOICES, voices: voices};
}

export function setUtterances(utterances) {
    return {type: SET_UTTERANCES, utterances: utterances};
}

export function generateAvatar() {
    return {type: GENERATE_AVATAR};
}