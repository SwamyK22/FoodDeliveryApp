export const ADD_RESTURANTS = 'ADD_RESTURANTS'

export const setResturants = (res) => {
    return {
        type:ADD_RESTURANTS,
        payload: res
    }
}