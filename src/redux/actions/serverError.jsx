export const ADD_SERVER_ERROR = 'ADD_SERVER_ERROR'
export const REMOVE_SERVER_ERROR = 'REMOVE_SERVER_ERROR'

export const addServerError = (err) => {
    return {
        type: ADD_SERVER_ERROR,
        payload: err
    }
}
export const removeServerError = (err) => {
    return {
        type: REMOVE_SERVER_ERROR,
        payload: err
    }
}
