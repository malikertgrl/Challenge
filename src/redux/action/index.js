import {
    ADD_TO_CHARACTER,
    REMOVE_FROM_CHARACTER,
    SET_LOADİNG,
    PULL_ALL_CHARACTERS
} from "./actionTypes"


export const setAllCharacters = (item) => (dispatch) => {
    dispatch({
        type: PULL_ALL_CHARACTERS,
        payload: item
    });
}


export const addCharacter = (item) => (dispatch) => {
    dispatch({
        type: ADD_TO_CHARACTER,
        payload: item
    });
}
//loader kapatır
export const removeCharacter = (item) => (dispatch) => {
    dispatch({
        type: REMOVE_FROM_CHARACTER,
        payload: item
    });
}
// Spinner'ı açar kapatır
export const setLoading = (val) => (dispatch) => {
    dispatch({
        type: SET_LOADİNG,
        payload: val

    });
}
