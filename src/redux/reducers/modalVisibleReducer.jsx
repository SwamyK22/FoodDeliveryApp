
const initState = {
    logoutVisible: false,
    editVisible:false,
    editMainVisible:false,
    optionVisible: false,
    editErr:null
}

const visibleReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case 'SET_LOGOUT':
            
            return {...state, logoutVisible: payload};
        case 'SET_EDIT':
            
            return {...state, editVisible: payload};
        case 'SET_EDIT_MAIN':
            
            return {...state, editMainVisible: payload};
        case 'SET_OPTION':
            
            return {...state, optionVisible: payload};
        
        case 'SET_EDITERR':     
            return {...state, editErr: payload};
    
        default:
            return state;
    }
}

export default visibleReducer