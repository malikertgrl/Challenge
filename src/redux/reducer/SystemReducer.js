import {
    ADD_TO_CHARACTER,
    REMOVE_FROM_CHARACTER,
    SET_LOADİNG,
    PULL_ALL_CHARACTERS
} from "../action/actionTypes"


const initialState = {
    allCharacters: {},
    loading: false
}


export const SystemReducer = (state = initialState, action) => {
    switch (action.type) {

        case PULL_ALL_CHARACTERS:
            return {
                ...state, allCharacters: action.payload
            }


        case ADD_TO_CHARACTER:
            return {
                ...state,
                allCharacters: [...state.allCharacters, action.payload]
            }

        case REMOVE_FROM_CHARACTER:
            console.log("remove_from_cart")
            return {
                ...state,
                allCharacters: state.allCharacters.filter(item => item.id != action.payload)
            }
        case SET_LOADİNG:
            return { ...state, loading: action.payload }
        default:
            return state;
    }

}