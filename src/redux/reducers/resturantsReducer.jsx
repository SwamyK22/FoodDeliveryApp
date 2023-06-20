import { ADD_RESTURANTS } from "../actions/setResturants"

const initState = []

const resturantReducer = (state = initState, {type, payload}) => {
    switch(type){
        case ADD_RESTURANTS:
            return payload
        default:
            return state
    }
}

export default resturantReducer