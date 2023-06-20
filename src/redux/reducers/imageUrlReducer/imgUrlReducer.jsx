const initState = []

const imgUrlReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case 'ADD_IMGS':
            return payload;
        default:
            return state;
    }
}

export default imgUrlReducer