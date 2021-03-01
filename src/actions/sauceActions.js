export const DELETE_SAUCE = "DELETE_SAUCE";
export const ADD_SAUCE = "ADD_SAUCE";
export const GET_SAUCE = "GET_SAUCE";

export function deleteSauce (object) {
    return {
        type: DELETE_SAUCE,
        payload: object
    }
}

export function addSauce (object) {
    return {
        type: ADD_SAUCE,
        payload: object
    }
}