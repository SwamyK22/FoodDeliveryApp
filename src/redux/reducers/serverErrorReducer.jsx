import { ADD_SERVER_ERROR, REMOVE_SERVER_ERROR } from "../actions/serverError";

const serverErrorReducer = (state = null, {type, payload}) => {
    switch (type) {
        case ADD_SERVER_ERROR:
            return payload;
        case REMOVE_SERVER_ERROR:
            return payload;
    
        default:
            return state;
    }
};

export default serverErrorReducer;