import {
    REMOVE_FROM_CHARACTER,
    SET_LOADİNG,
    PULL_ALL_CHARACTERS
} from "./actionTypes"

//add to characters
export const setAllCharacters = (item) => (dispatch) => {
    dispatch({
        type: PULL_ALL_CHARACTERS,
        payload: item
    });
}

//remove from characters
export const removeCharacter = (item) => (dispatch) => {
    dispatch({
        type: REMOVE_FROM_CHARACTER,
        payload: item
    });
}
// sets spinner 
export const setLoading = (val) => (dispatch) => {
    dispatch({
        type: SET_LOADİNG,
        payload: val

    });
}
