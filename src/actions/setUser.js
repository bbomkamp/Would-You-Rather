export const CHOSEN_USER = 'SET_USER'
export const CLEAR_USER = 'CLEAR_USER'

export function setUser (id) {
    return{
        type: CHOSEN_USER,
        id,
    }
}

export function clearUser (id) {
    return{
        type: CLEAR_USER,
        id,
    }
}