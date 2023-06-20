export const ADD_IMGS = 'ADD_IMGS'

export const setImgs = (imgs) => {
    return {
        type: ADD_IMGS,
        payload:imgs
    }
}