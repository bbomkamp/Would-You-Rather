export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const CLEAR_AUTHED_USER = 'CLEAR_AUTHED_USER'

/**
 * Sets the current user
 * @param {id} id 
 * @returns 
 */
export function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id,
    }
}

/**
 * Clears the current user
 * @param {id} id 
 * @returns 
 */
export function clearUser(id) {
    return {
        type: CLEAR_AUTHED_USER,
        id,
    }
}