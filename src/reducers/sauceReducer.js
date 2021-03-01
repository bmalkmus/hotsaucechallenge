import produce from 'immer';
import { GET_SAUCE, DELETE_SAUCE, ADD_SAUCE} from "../actions/sauceActions"

const list = require("../Instructions/hotsauces.json");
const initialState = {
    sauces: list.list,
    count: 8,
}


const sauceReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_SAUCE: {
            const sauce=action.payload
            return produce(state, (draft) => {
                draft.sauces.push(sauce)
                draft.count++
            })}
        case DELETE_SAUCE: {
            const sauce = action.payload
            return produce(state, (draft) => {
                draft.sauces = draft.sauces.filter(listSauce => listSauce.title !== sauce.title)
            })
        }
        default: {
            return state
        }
    }
    
}

export default sauceReducer